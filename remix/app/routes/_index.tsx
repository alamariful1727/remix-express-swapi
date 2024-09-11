import { useState } from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
import restAPI from "./../api";
import { toQueryString } from "./../utils/toQueryString";
import { PeopleTable } from "./../components/table";

export const meta: MetaFunction = () => {
  return [
    { title: "Swapi People" },
    { name: "description", content: "Fullstack Application" },
  ];
};

interface IPeople {
	birth_year: string;
	eye_color: string;
	films: string[];
	gender: string;
	hair_color: string;
	height: string;
	homeworld: string;
	mass: string;
	name: string;
	skin_color: string;
	created: string;
	edited: string;
	species: string[];
	starships: string[];
	url: string;
	vehicles: string[];
}

export interface IGetPeopleResponse {
	data: IPeople[];
	currentPage: number;
	count: number;
	nextPage: number | null;
	previousPage: number | null;
}

export const loader = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const search = url.searchParams.get("search");

  const { data } = await restAPI.get<IGetPeopleResponse>(`/people?${toQueryString({page, search})}`);
  return json(data);
};

export default function Index() {
  const { count, currentPage, data, nextPage, previousPage } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      navigate(`/${search ? `?search=${search}`: ''}`, { replace: true });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
  };

  return (
    <div className="mx-auto max-w-2xl py-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">People</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all people.
          </p>
        </div>

        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <form onSubmit={handleOnSubmit}>
            <div className="mt-1 flex space-x-2">
              <input
                id="search"
                name="search"
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search by name"
                aria-describedby="Search by name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Search
              </button>
            </div>

          </form>
        </div>
      </div>
    
      <PeopleTable count={count} currentPage={currentPage} data={data} nextPage={nextPage} previousPage={previousPage} search={search} />
    </div>
  );
}

import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import restAPI from "./../api";
import { toQueryString } from "./../utils/toQueryString";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
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
	created: Date;
	edited: Date;
	species: string[];
	starships: string[];
	url: string;
	vehicles: string[];
}

interface IGetPeopleResponse {
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
  const { data } = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto max-w-2xl py-12">
      <div className="sm:flex sm:items-baseline">
        <div className="sm:flex-auto">
          <h1 className="text-lg font-semibold leading-6 text-gray-900">People</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all people.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div>
            <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
              Search
            </label>
            <div className="mt-1">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="Search by name"
                aria-describedby="Search by name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
    
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Mass
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Height
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((person) => (
                  <tr key={person.url} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.mass}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.height}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

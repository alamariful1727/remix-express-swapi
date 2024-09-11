import { IGetPeopleResponse } from "./../../routes/_index";
import { Pagination } from "../pagination";

interface IProps extends IGetPeopleResponse{
  search: string;
}

export const PeopleTable = ({count, currentPage, data, nextPage, previousPage, search} : IProps) => {
  return (
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
          <Pagination count={count} currentPage={currentPage} nextPage={nextPage} previousPage={previousPage} search={search} />
        </div>
      </div>
    </div>
  )
}

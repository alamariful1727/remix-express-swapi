import { toQueryString } from "./../../utils/toQueryString";
import { IGetPeopleResponse } from "./../../routes/_index";

interface IProps extends Omit<IGetPeopleResponse, 'data'>{
  search: string;
}

export const Pagination = ({count, currentPage, nextPage, previousPage, search}:IProps) => {
  return (
    <div
              aria-label="Pagination"
              className="flex items-center justify-between border-t border-gray-200 bg-white py-3"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(currentPage-1)*10+1}</span> {' '}
                  to <span className="font-medium">{nextPage ? currentPage*10: count}</span> of{' '}
                  <span className="font-medium">{count}</span> results
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                {previousPage && 
                  <a
                    href={`/?${toQueryString({page: previousPage, search})}`}
                    className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                  >
                    Previous
                  </a>
                }
                {nextPage && 
                  <a
                    href={`/?${toQueryString({page: nextPage, search})}`}
                    className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                  >
                    Next
                  </a>
                }
              </div>
            </div>
  )
}

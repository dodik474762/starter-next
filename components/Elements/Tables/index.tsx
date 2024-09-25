import InputElement from "../Input";
import PaginationElement from "../Paginations";

const TableDefaultElement = (props: any) => {
  const {
    className,
    children,
    title,
    subTitle,
    addButton,
    withPagination,
    thItems = [],
    trItems = [],
    actionButton,
  } = props;
  return (
    <>
      <div className="w-full mx-auto mt-3">
        <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
            <div className="flex items-center justify-between ">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {title}
                </h3>
                <p className="text-slate-500">{subTitle}</p>
              </div>
              <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
                <InputElement
                  placeholder="Search"
                  className="border border-gray-400 px-4 py-1 text-sm"
                />
                {addButton && (
                  <button
                    className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="p-0">
            <table className="w-full mt-4 text-left table-auto min-w-max">
              <thead>
                <tr>
                  {thItems.map((item: any, index: number) => (
                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                        {item}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          ></path>
                        </svg>
                      </p>
                    </th>
                  ))}
                  {actionButton && (
                    <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                      <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500"></p>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {trItems.map((item: any, index: number) => (
                  <tr>
                    {thItems.map((itemHead: any, indexHead: number) => (
                      <td className="p-4 border-b border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-slate-700">
                              {item[itemHead]}
                            </p>
                            <p className="text-sm text-slate-500">
                              {item[itemHead]}
                            </p>
                          </div>
                        </div>
                      </td>
                    ))}
                    {actionButton && (
                      <td className="p-4 border-b border-slate-200 text-center">
                        <button
                          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                            </svg>
                          </span>
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between p-3">
            {withPagination && (
              <p className="block text-sm text-slate-500">Page 1 of 10</p>
            )}
            <div className="flex gap-1">
              {withPagination && (
                <PaginationElement
                  className="mb-4 justify-end"
                  pages={[
                    {
                      active: true,
                      page: 1,
                    },
                    {
                      active: false,
                      page: 2,
                    },
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableDefaultElement;

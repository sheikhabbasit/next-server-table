import React from "react";

function TableFooter({ params, columns }) {
  return (
    <tfoot className="pr-[16px]">
      <tr>
        <td className="text-right" colSpan={columns.length + 1}>
          <nav>
            <ul className="flex justify-end space-x-2 mt-[16px] mr-[16px]">
              <li>
                <a
                  className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 focus:ring-offset-gray-100 disabled:opacity-50"
                  href={`/home?page=${+params.page - 1}`}
                  disabled={params.page <= 1}
                >
                  Prev
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 focus:ring-offset-gray-100"
                  href={`/home?page=${+params.page + 1}`}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </td>
      </tr>
    </tfoot>
  );
}

export default TableFooter;

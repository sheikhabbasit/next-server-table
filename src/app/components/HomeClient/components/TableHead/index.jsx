import React from "react";

function TableHead({ visibleColumns, columns }) {
  return (
    <thead>
      <tr>
        {columns.map(
          ({ label }) =>
            visibleColumns.includes(label) && (
              <th key={label} className="px-4 py-2 text-left">
                {label}
              </th>
            )
        )}
        <th className="px-4 py-2 text-left">Actions</th>
      </tr>
    </thead>
  );
}

export default TableHead;

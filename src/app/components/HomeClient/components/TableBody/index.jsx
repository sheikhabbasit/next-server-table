import React from "react";

function TableBody({ data, visibleColumns, handleDeletePort, handleEditPort }) {
  return (
    <tbody>
      {data.map((port) => (
        <tr key={port.name} className="border-b">
          {visibleColumns.includes("Name") && (
            <td className="px-4 py-2">{port.name}</td>
          )}
          {visibleColumns.includes("City") && (
            <td className="px-4 py-2">{port.city}</td>
          )}
          {visibleColumns.includes("Country") && (
            <td className="px-4 py-2">{port.country}</td>
          )}
          {visibleColumns.includes("Alias") && (
            <td className="px-4 py-2">
              {port?.alias?.length
                ? Array.isArray(port.alias)
                  ? port?.alias?.join(", ")
                  : "-"
                : "-"}
            </td>
          )}
          {visibleColumns.includes("Regions") && (
            <td className="px-4 py-2">
              {port?.regions?.length > 0
                ? Array.isArray(port.regions)
                  ? port.regions.join(", ")
                  : "-"
                : "-"}
            </td>
          )}
          {visibleColumns.includes("Coordinates") && (
            <td className="px-4 py-2">
              {port?.coordinates
                ? port?.coordinates?.length > 0 &&
                  Array.isArray(port.coordinates)
                  ? port?.coordinates?.join(", ")
                  : "-"
                : "-"}
            </td>
          )}
          {visibleColumns.includes("Province") && (
            <td className="px-4 py-2">{port.province}</td>
          )}
          {visibleColumns.includes("Timezone") && (
            <td className="px-4 py-2">{port.timezone}</td>
          )}
          {visibleColumns.includes("UNLoCode") && (
            <td className="px-4 py-2">
              {port?.unlocs
                ? port?.unlocs?.length > 0 && Array.isArray(port.unlocs)
                  ? port?.unlocs?.join(", ")
                  : "-"
                : "-"}
            </td>
          )}
          {visibleColumns.includes("Code") && (
            <td className="px-4 py-2">{port.code ?? "-"}</td>
          )}
          <td className="px-4 py-2">
            <button
              className="px-2 py-1 bg-yellow-500 h-[30px] ml-[5px] text-white rounded"
              onClick={() => handleEditPort(port)}
            >
              Edit
            </button>
            <button
              className="px-2 py-1 bg-red-500 text-white h-[30px] rounded ml-[5px] mt-2"
              onClick={() => handleDeletePort(port.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;

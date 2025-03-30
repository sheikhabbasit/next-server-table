import React from "react";
import { useRouter } from "next/navigation";
import { TextField, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function TableFilters({
  params,
  handlePerPageChange,
  handleColumnToggle,
  columns,
  visibleColumns,
  setIsModalOpen,
  resetForm,
}) {
  const router = useRouter();

  return (
    <div className="flex justify-end my-4 w-[100%]">
      <div className="relative flex flex-col justify-center items-end w-[20%] text-gray-700 text-right mr-[10px] h-[44px]">
        Per Page:{" "}
      </div>
      <div className="relative inline-block w-[20%] text-gray-700 text-right mr-[10px]">
        <TextField
          select
          value={params.perPage}
          className="w-full"
          onChange={handlePerPageChange}
          SelectProps={{
            native: true,
            className:
              "h-[44px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </TextField>
      </div>
      <div className="relative inline-block w-[20%] text-gray-700 text-right mr-[10px]">
        <TextField
          select
          value=""
          className="w-full"
          onChange={(e) => handleColumnToggle(e.target.value)}
          SelectProps={{
            native: true,
            className:
              "h-[44px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          }}
        >
          <option value="">Show/Hide columns</option>
          {columns.map(({ label }) => (
            <option key={label} value={label}>
              {visibleColumns.includes(label) ? "✅" : "⛔️"} {label}
            </option>
          ))}
        </TextField>
      </div>
      <TextField
        placeholder="Search..."
        variant="outlined"
        className="mr-[16px]"
        value={params.searchQuery}
        sx={{
          "& .MuiInputBase-root": {
            height: "44px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          const searchValue = event.target.value.replace(/ /g, "%20");
          router.push(`/home?name=${searchValue}`);
        }}
      />
      <button
        className="mb-4 ml-2 px-4 py-2 rounded-[10px] bg-blue-500 text-white h-[44px] mr-[10px]"
        onClick={() => {
          setIsModalOpen(true);
          resetForm();
        }}
      >
        Add Port
      </button>
    </div>
  );
}

export default TableFilters;

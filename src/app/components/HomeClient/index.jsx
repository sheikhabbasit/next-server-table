"use client";
import React from "react";
import { columns } from "./columns";
import AddDataModal from "./components/AddDataModal";
import TableFilters from "./components/TableFilters";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
import { useHomeController } from "local/app/home/home.controller";

function HomeClient({ data, params }) {
  const {
    visibleColumns,
    isModalOpen,
    setIsModalOpen,
    isEditMode,
    formData,
    handlePerPageChange,
    handleColumnToggle,
    handleInputChange,
    handleAddPort,
    handleEditPort,
    handleDeletePort,
    resetForm,
  } = useHomeController({ data, params });

  return (
    <>
      <div className="text-center text-xl font-bold my-4">World ports</div>

      <AddDataModal
        {...{
          isModalOpen,
          setIsModalOpen,
          isEditMode,
          formData,
          handleAddPort,
          handleInputChange,
        }}
      />

      <TableFilters
        {...{
          params,
          handlePerPageChange,
          handleColumnToggle,
          columns,
          visibleColumns,
          setIsModalOpen,
          resetForm,
        }}
      />
      <table className="table-auto w-full">
        <TableHead visibleColumns={visibleColumns} columns={columns} />
        <TableBody
          data={data}
          visibleColumns={visibleColumns}
          handleDeletePort={handleDeletePort}
          handleEditPort={handleEditPort}
        />
        <TableFooter params={params} columns={columns} />
      </table>
    </>
  );
}

export default HomeClient;

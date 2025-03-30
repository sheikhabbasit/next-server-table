import { apiService } from "local/apiService/apiService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { columns } from "../components/HomeClient/columns";

export const useHomeController = ({ data, params }) => {
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map((col) => col.label)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    country: "",
    province: "",
    timezone: "",
    unlocs: "",
    alias: "",
    regions: "",
    coordinates: "",
    code: "",
  });
  const [editId, setEditId] = useState(null);
  const router = useRouter();

  const handlePerPageChange = (e) => {
    router.push(`/home?page=1&perPage=${e.target.value}`);
  };

  const handleColumnToggle = (label) => {
    setVisibleColumns((prev) =>
      prev.includes(label)
        ? prev.filter((col) => col !== label)
        : [...prev, label]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPort = async () => {
    const formdata = {
      ...formData,
      regions: formData.regions.split(","),
      alias: formData.alias.split(","),
      coordinates: formData.coordinates.split(","),
      unlocs: formData.unlocs.split(","),
    };

    try {
      if (isEditMode) {
        await apiService.put(`http://localhost:3001/data/${editId}`, formdata);
      } else {
        await apiService.post("http://localhost:3001/data", formdata);
      }
      setIsModalOpen(false);
      resetForm();
      router.push(`/home?page=${params.page}&perPage=${params.perPage}`);
    } catch (error) {
      console.error("Failed to add/edit port", error);
    }
  };

  const handleEditPort = (port) => {
    setFormData({
      ...port,
      regions: port?.regions?.join(",") || "",
      alias: port?.alias?.join(",") || "",
      coordinates: port?.coordinates?.join(",") || "",
      unlocs: port?.unlocs?.join(",") || "",
    });
    setEditId(port.id);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeletePort = async (id) => {
    try {
      await apiService.delete(`http://localhost:3001/data/${id}`);
      router.push(`/home?page=${params.page}&perPage=${params.perPage}`); // Reload the page to get updated data
    } catch (error) {
      console.error("Failed to delete port", error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      city: "",
      country: "",
      province: "",
      timezone: "",
      unlocs: "",
      alias: "",
      regions: "",
      coordinates: "",
      code: "",
    });
    setIsEditMode(false);
    setEditId(null);
  };

  return {
    visibleColumns,
    setVisibleColumns,
    isModalOpen,
    setIsModalOpen,
    isEditMode,
    setIsEditMode,
    formData,
    setFormData,
    editId,
    setEditId,
    router,
    handlePerPageChange,
    handleColumnToggle,
    handleInputChange,
    handleAddPort,
    handleEditPort,
    handleDeletePort,
    resetForm,
  };
};

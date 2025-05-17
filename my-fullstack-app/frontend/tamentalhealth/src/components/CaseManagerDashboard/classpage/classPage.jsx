import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye, FaSearch } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FiLoader } from "react-icons/fi";
import axios from "axios";

const ClassView = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  // Fetch classrooms on component mount
  useEffect(() => {
    fetchClassrooms();
  }, []);

  // Fetch classrooms with search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        searchClassrooms();
      } else {
        fetchClassrooms();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchClassrooms = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/classrooms/view");
      if (response.data.status) {
        setData(
          response.data.data.map((item) => ({
            id: item.class_id,
            country: item.country_name,
            schoolName: item.school_name,
            class: item.class_name,
            manager: item.manager_name,
          }))
        );
      }
    } catch (error) {
      setError("Failed to fetch classrooms");
      console.error("Error fetching classrooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchClassrooms = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/classrooms/search?query=${searchQuery}`
      );
      if (response.data.status) {
        setData(
          response.data.data.map((item) => ({
            id: item.class_id,
            country: item.country_name,
            schoolName: item.school_name,
            class: item.class_name,
            manager: item.manager_name,
          }))
        );
      }
    } catch (error) {
      setError("Failed to search classrooms");
      console.error("Error searching classrooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedIds.length) return;

    setIsLoading(true);
    try {
      const deletePromises = selectedIds.map((id) =>
        axios.post("/api/classrooms/delete", { classroom_id: id })
      );

      await Promise.all(deletePromises);
      await fetchClassrooms(); // Refresh the list
      setSelectedIds([]);
    } catch (error) {
      setError("Failed to delete classrooms");
      console.error("Error deleting classrooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveManager = async (classroomId) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/classrooms/remove-manager", {
        classroom_id: classroomId,
      });

      if (response.data.status) {
        await fetchClassrooms(); // Refresh the list
      } else {
        setError(response.data.message || "Failed to remove manager");
      }
    } catch (error) {
      setError("Failed to remove manager");
      console.error("Error removing manager:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const [editFormData, setEditFormData] = useState({
    country: "",
    schoolName: "",
    class: "",
    manager: "",
  });
  const [selectedClient, setSelectedClient] = useState(null);

  // Handle edit button click
  const handleEditClick = (client) => {
    setSelectedClient(client);
    setEditFormData({
      country: client.country,
      schoolName: client.schoolName,
      class: client.class,
      manager: client.manager,
    });
    setShowEditModal(true);
  };

  // Handle form input changes
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save edited client
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setIsEditing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update client data
      setData((prevData) =>
        prevData.map((item) =>
          item.id === selectedClient.id ? { ...item, ...editFormData } : item
        )
      );

      setShowEditModal(false);
    } catch (error) {
      console.error("Error saving changes:", error);
    } finally {
      setIsEditing(false);
    }
  };

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.manager.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / entries);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entries,
    currentPage * entries
  );

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Country,School Name,Class,Manager"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.country},${item.schoolName},${item.class},${item.manager}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "class_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const generatePagination = () => {
    let paginationItems = [];

    paginationItems.push(
      <button
        key="prev"
        className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <GrLinkPrevious />
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`w-9 h-9 flex items-center justify-center border ${
            currentPage === i
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
          } rounded-md`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    paginationItems.push(
      <button
        key="next"
        className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <GrLinkNext />
      </button>
    );

    return paginationItems;
  };

  return (
    <div className="bg-white rounded-lg p-5 mx-auto shadow-sm border-2 border-[#1E74FF26]">
      <h1 className="text-2xl text-gray-800 mb-5 font-medium">Class</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Edit Class Details</h3>

            <form onSubmit={handleSaveEdit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={editFormData.country}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    School Name
                  </label>
                  <input
                    type="text"
                    name="schoolName"
                    value={editFormData.schoolName}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={editFormData.class}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Manager
                  </label>
                  <input
                    type="text"
                    name="manager"
                    value={editFormData.manager}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowEditModal(false)}
                  disabled={isEditing}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={isEditing}
                >
                  {isEditing ? (
                    <>
                      <FiLoader className="animate-spin inline mr-2" />
                      Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <span>Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-2.5 py-1.5 text-sm w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7">07</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>Entries</span>
        </div>

        <div className="w-full md:w-auto md:flex-grow md:max-w-md relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search class..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2.5 flex-wrap justify-center">
          <button
            className="flex items-center px-3 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-50 gap-1.5"
            onClick={handleDelete}
          >
            <RiDeleteBinLine />
            Delete
          </button>
          <button
            className="flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 gap-1.5"
            onClick={() => alert("Filter button clicked!")}
          >
            <FaFilter />
            Filters
          </button>
          <button
            className="flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 gap-1.5"
            onClick={handleExport}
          >
            <FaFileExport />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="w-10 p-4 text-left">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(paginatedData.map((item) => item.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                  checked={
                    paginatedData.length > 0 &&
                    selectedIds.length === paginatedData.length
                  }
                  className="w-5 h-5 cursor-pointer"
                />
              </th>
              <th className="p-4 text-left text-blue-500 font-bold">COUNTRY</th>
              <th className="p-4 text-left text-blue-500 font-bold">
                SCHOOL NAME
              </th>
              <th className="p-4 text-left text-blue-500 font-bold">CLASS</th>
              <th className="p-4 text-left text-blue-500 font-bold">MANAGER</th>
              <th className="p-4 text-center text-blue-500 font-bold">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </td>
                <td className="p-4">{item.country}</td>
                <td className="p-4">{item.schoolName}</td>
                <td className="p-4">{item.class}</td>
                <td className="p-4">{item.manager}</td>
                <td className="p-4">
                  <div className="flex gap-2 justify-center">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 disabled:opacity-50"
                      onClick={() => handleEditClick(item)}
                      disabled={isEditing}
                    >
                      {isEditing && item.id === selectedClient?.id ? (
                        <FiLoader className="animate-spin" />
                      ) : (
                        <GrEdit />
                      )}
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
                      <FaRegEye />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                      onClick={() => {
                        setData(data.filter((d) => d.id !== item.id));
                        setSelectedIds(
                          selectedIds.filter((id) => id !== item.id)
                        );
                      }}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center mt-5 gap-1.5">
        {generatePagination()}
      </div>
    </div>
  );
};

export default ClassView;

import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye, FaSearch } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FiLoader } from "react-icons/fi";
import profie from "../../../assets/profile.jpg";

function FollowUpProgress() {
  // State for pagination and filtering
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // State for edit functionality
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editFormData, setEditFormData] = useState({
    studentName: "",
    code: "",
    progress: "",
    details: "",
  });

  // Sample data
  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      progress: "100",
      details: "here is the link",
    },
    {
      id: 2,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 50,
      details: "here is the link",
    },
    {
      id: 3,
      avater: profie,
      studentName: "Wesley Akwe Bah",
      code: "#10784",
      progress: 10,
      details: "here is the link",
    },
    {
      id: 4,
      avater: profie,
      studentName: "Buinwui Faith Zenmwi",
      code: "#90784",
      progress: 52,
      details: "here is the link",
    },
    {
      id: 5,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 100,
      details: "here is the link",
    },
    {
      id: 6,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 50,
      details: "here is the link",
    },
    {
      id: 7,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 0,
      details: "here is the link",
    },
    {
      id: 8,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 80,
      details: "here is the link",
    },
    {
      id: 9,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 100,
      details: "here is the link",
    },
    {
      id: 10,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      progress: 50,
      details: "here is the link",
    },
    {
      id: 11,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      progress: "90",
      details: "here is the link",
    },
    {
      id: 12,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      progress: "70",
      details: "here is the link",
    },
    {
      id: 13,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      progress: "100",
      details: "here is the link",
    },
    {
      id: 14,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      progress: "100",
      details: "here is the link",
    },
  ]);

  // Filter data based on search query
  const filteredData = data.filter(
    (item) =>
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.progress.toString().includes(searchQuery.toLowerCase()) ||
      item.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / entries);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entries,
    currentPage * entries
  );

  // Handle row selection
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle bulk delete
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newData = data.filter((item) => !selectedIds.includes(item.id));
      setData(newData);
      setSelectedIds([]);
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle export to CSV
  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["studentName,Code,Progress,Details"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.studentName},${item.code},${item.progress},${item.details}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "follow_progress_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pagination handlers
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Edit functionality
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditFormData({
      studentName: item.studentName,
      code: item.code,
      progress: item.progress,
      details: item.details,
    });
    setIsEditing(true);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setIsEditing(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setData(
        data.map((item) =>
          item.id === selectedItem.id ? { ...item, ...editFormData } : item
        )
      );
      setIsEditing(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error saving edit:", error);
      setIsEditing(false);
    }
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Generate pagination buttons
  const generatePagination = () => {
    let paginationItems = [];

    paginationItems.push(
      <button
        key="prev"
        className="w-9 h-9 flex items-center justify-center border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 disabled:opacity-50"
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
          className={`w-9 h-9 flex items-center justify-center border rounded ${
            currentPage === i
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    paginationItems.push(
      <button
        key="next"
        className="w-9 h-9 flex items-center justify-center border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <GrLinkNext />
      </button>
    );

    return paginationItems;
  };

  // Progress bar color based on progress value
  const getProgressColor = (progress) => {
    const progressValue = parseInt(progress);
    if (progressValue >= 70) return "bg-green-500";
    if (progressValue >= 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="mx-auto p-4 sm:p-6 bg-white border-2 border-blue-100 rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl text-gray-800 font-medium mb-4 sm:mb-5">
        Follow Up Progress
      </h2>

      {/* Controls Section - Improved for mobile */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm sm:text-base whitespace-nowrap">Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base w-full sm:w-auto"
          >
            <option value="7">07</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span className="text-sm sm:text-base whitespace-nowrap">
            Entries
          </span>
        </div>

        <div className="w-full sm:flex-grow sm:max-w-[500px] mx-0 sm:mx-3">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search ..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-8 sm:pl-10 pr-3 py-2 border border-gray-300 rounded text-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap justify-start sm:justify-end w-full sm:w-auto">
          <button
            className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 rounded transition text-sm sm:text-base ${
              selectedIds.length > 0
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleDelete}
            disabled={selectedIds.length === 0 || isDeleting}
          >
            {isDeleting ? (
              <FiLoader className="animate-spin" size={14} />
            ) : (
              <RiDeleteBinLine size={14} />
            )}
            <span className="hidden xs:inline">Delete</span>
          </button>
          <button
            className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-gray-100 rounded hover:bg-gray-200 transition text-sm sm:text-base"
            onClick={() => alert("Filter button clicked!")}
          >
            <FaFilter size={14} />
            <span className="hidden xs:inline">Filters</span>
          </button>
          <button
            className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-gray-100 rounded hover:bg-gray-200 transition text-sm sm:text-base"
            onClick={handleExport}
          >
            <FaFileExport size={14} />
            <span className="hidden xs:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Table Section - Responsive design */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2 sm:p-3"></th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                STUDENT NAME & CODE
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                PROGRESS
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                DETAILS
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-2 sm:p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </td>

                <td className="p-2 sm:p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.avater}
                      alt={item.studentName}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded"
                    />
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {item.studentName}
                      </p>
                      <p className="text-blue-500 text-xs sm:text-sm">
                        {item.code}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-2 sm:p-3">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getProgressColor(
                        item.progress
                      )}`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                    <span className="text-xs mt-1 block">{item.progress}%</span>
                  </div>
                </td>

                <td className="p-2 sm:p-3 ">
                  <a
                    href={item.details}
                    className="text-blue-500 hover:underline text-sm sm:text-base"
                  >
                    View
                  </a>
                </td>

                <td className="w-[100px] sm:w-[120px]">
                  <div className="flex gap-1 justify-center">
                    <button
                      className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
                      onClick={() => handleEditClick(item)}
                      disabled={isEditing}
                    >
                      {isEditing && item.id === selectedItem?.id ? (
                        <FiLoader className="animate-spin" size={12} />
                      ) : (
                        <GrEdit size={12} />
                      )}
                    </button>
                    <button className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
                      <FaRegEye size={12} />
                    </button>
                    <button
                      className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                      onClick={() => {
                        setData(data.filter((d) => d.id !== item.id));
                        setSelectedIds(
                          selectedIds.filter((id) => id !== item.id)
                        );
                      }}
                    >
                      <RiDeleteBinLine size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center sm:justify-end items-center mt-4 sm:mt-5 gap-1">
        {generatePagination()}
      </div>

      {/* Edit Modal */}
      {isEditing && selectedItem && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">Edit Progress</h3>
            <form onSubmit={handleSaveEdit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={editFormData.studentName}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={editFormData.code}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Progress (%)
                  </label>
                  <input
                    type="number"
                    name="progress"
                    min="0"
                    max="100"
                    value={editFormData.progress}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Details Link
                  </label>
                  <input
                    type="text"
                    name="details"
                    value={editFormData.details}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setIsEditing(false);
                      setSelectedItem(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FollowUpProgress;

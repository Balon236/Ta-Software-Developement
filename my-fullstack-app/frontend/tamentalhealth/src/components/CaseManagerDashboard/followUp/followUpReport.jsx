import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye, FaSearch } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FiLoader } from "react-icons/fi";
import profie from "../../../assets/profile.jpg";

function FollowReport() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    studentName: "",
    code: "",
    school: "",
    mechanism: "",
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 2,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 3,
      avater: profie,
      studentName: "Wesley Akwe Bah",
      code: "#10784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 4,
      avater: profie,
      studentName: "Buinwui Faith Zenmwi",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 5,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 6,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 7,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 8,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 9,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 10,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 11,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 12,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 13,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
    {
      id: 14,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      school: "Inter Comprehensive HIgh School",
      mechanism: "here is the link",
    },
  ]);

  // Handle edit button click
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditFormData({
      studentName: item.studentName,
      code: item.code,
      school: item.school,
      mechanism: item.mechanism,
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

  // Save edited item
  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setIsEditing(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update the data
      setData((prevData) =>
        prevData.map((item) =>
          item.id === selectedItem.id ? { ...item, ...editFormData } : item
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
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mechanism.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["studentName,Code,School,Mecha"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.studentName},${item.code},${item.school},${item.mechanism}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "follow_report_data.csv");
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

    // Show fewer page numbers on mobile
    const maxVisiblePages = window.innerWidth < 640 ? 3 : 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    paginationItems.push(
      <button
        key="prev"
        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 disabled:opacity-50"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <GrLinkPrevious size={14} />
      </button>
    );

    if (startPage > 1) {
      paginationItems.push(
        <button
          key={1}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border rounded ${
            1 === currentPage
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        paginationItems.push(
          <span key="ellipsis-start" className="px-1 sm:px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border rounded ${
            i === currentPage
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationItems.push(
          <span key="ellipsis-end" className="px-1 sm:px-2">
            ...
          </span>
        );
      }
      paginationItems.push(
        <button
          key={totalPages}
          className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border rounded ${
            totalPages === currentPage
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white border-gray-300 hover:bg-gray-50"
          }`}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    paginationItems.push(
      <button
        key="next"
        className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <GrLinkNext size={14} />
      </button>
    );

    return paginationItems;
  };

  return (
    <div className="mx-auto p-3 sm:p-6 bg-white border-2 border-blue-100 rounded-lg shadow-sm max-w-full overflow-hidden">
      <h2 className="text-xl sm:text-2xl text-gray-800 font-medium mb-4 sm:mb-5">
        Report On Follow Up
      </h2>

      {/* Controls Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm sm:text-base whitespace-nowrap">Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base w-16"
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

        <div className="w-full sm:flex-grow sm:max-w-[400px] mx-0 sm:mx-3 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2 sm:p-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(paginatedData.map((item) => item.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                  checked={
                    selectedIds.length > 0 &&
                    selectedIds.length === paginatedData.length
                  }
                />
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                STUDENT NAME & CODE
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base hidden sm:table-cell">
                SCHOOL
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                DASHBOARD
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
                      alt=""
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded"
                    />
                    <div>
                      <p className="font-medium text-sm sm:text-base line-clamp-1">
                        {item.studentName}
                      </p>
                      <p className="text-blue-500 text-xs sm:text-sm">
                        {item.code}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-2 sm:p-3 text-sm hidden sm:table-cell">
                  <div className="line-clamp-1">{item.school}</div>
                </td>

                <td className="p-2 sm:p-3">
                  <a
                    href={item.mechanism}
                    className="text-blue-500 hover:underline text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </td>

                <td className="w-[100px] sm:w-[120px]">
                  <div className="flex gap-1 justify-center">
                    <button
                      className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
                      onClick={() => handleEditClick(item)}
                      disabled={isEditing}
                    >
                      {isEditing && selectedItem?.id === item.id ? (
                        <FiLoader className="animate-spin" size={12} />
                      ) : (
                        <GrEdit size={12} className="sm:size-[14px]" />
                      )}
                    </button>
                    <button className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
                      <FaRegEye size={12} className="sm:size-[14px]" />
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
                      <RiDeleteBinLine size={12} className="sm:size-[14px]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center sm:justify-end items-center mt-4 sm:mt-5 gap-1 flex-wrap">
        {generatePagination()}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-medium mb-4">Edit Student</h3>
              <form onSubmit={handleSaveEdit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={editFormData.studentName}
                      onChange={handleEditFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Code
                    </label>
                    <input
                      type="text"
                      name="code"
                      value={editFormData.code}
                      onChange={handleEditFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      School
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={editFormData.school}
                      onChange={handleEditFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mechanism Link
                    </label>
                    <input
                      type="text"
                      name="mechanism"
                      value={editFormData.mechanism}
                      onChange={handleEditFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
      )}
    </div>
  );
}

export default FollowReport;

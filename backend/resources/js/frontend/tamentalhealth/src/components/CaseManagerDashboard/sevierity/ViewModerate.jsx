import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye, FaSearch } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FiLoader } from "react-icons/fi";
import profie from "../../../assets/profile.jpg";
import { Link } from "react-router-dom";

const ViewModerateSeverity = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    code: "",
    school: "",
    results: "",
    gender: "",
    referLink: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "40",
      gender: "Male",
      referLink: "Male",
    },
    {
      id: 2,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "40",
      gender: "Female",
      referLink: "Male",
    },
    {
      id: 3,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "60",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 4,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "60",
      gender: "Female",
      referLink: "Aron Pierre",
    },
    {
      id: 5,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "60",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 6,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "70",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 7,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "70",
      gender: "Female",
      referLink: "Aron Pierre",
    },
    {
      id: 8,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "70",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 9,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Female",
      referLink: "Aron Pierre",
    },
    {
      id: 10,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Female",
      referLink: "Aron Pierre",
    },
    {
      id: 11,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 12,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Female",
      referLink: "Aron Pierre",
    },
    {
      id: 13,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 14,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Male",
      referLink: "Aron Pierre",
    },
    {
      id: 15,
      avater: profie,
      fullName: "Dev Nquizi",
      code: "#90784",
      school: "Bilingual Grammar School Molyko",
      results: "50",
      gender: "Female",
      referLink: "Aron Pierre",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditFormData({
      fullName: item.fullName,
      code: item.code,
      school: item.school,
      results: item.results,
      gender: item.gender,
      referLink: item.referLink,
    });
    setShowEditModal(true);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    setIsEditing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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

  const filteredData = data.filter(
    (item) =>
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.results.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.referLink.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleDelete = () => {
    const newData = data.filter((item) => !selectedIds.includes(item.id));
    setData(newData);
    setSelectedIds([]);
  };

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["fullName,Code,School,Results,Gender,Refer Link"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.fullName},${item.code},${item.school},${item.results},${item.gender},${item.referLink}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "moderate_severity_data.csv");
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
        className="flex items-center justify-center w-10 h-10 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
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
          className={`flex items-center justify-center w-9 h-9 border ${
            currentPage === i
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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
        className="flex items-center justify-center w-10 h-10 border border-gray-300 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <GrLinkNext />
      </button>
    );

    return paginationItems;
  };

  return (
    <div className="bg-white rounded-lg border-2 border-[#1E74FF26] p-5 mx-auto shadow-sm">
      <h2 className="text-2xl text-gray-800 mb-5 font-medium">
        Client Facing Moderate Severity
      </h2>

      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Edit Moderate Severity</h3>

            <form onSubmit={handleSaveEdit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={editFormData.fullName}
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
                    School
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={editFormData.school}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Results
                  </label>
                  <input
                    type="text"
                    name="results"
                    value={editFormData.results}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={editFormData.gender}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Refer Link
                  </label>
                  <input
                    type="text"
                    name="referLink"
                    value={editFormData.referLink}
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

      <div className="flex justify-between items-center mb-5 flex-wrap md:flex-nowrap gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <span>Show</span>
          <select
            className="border border-gray-300 rounded-md py-1.5 px-2.5 text-sm text-center w-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={entries}
            onChange={(e) => {
              setEntries(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex-grow max-w-md mx-0 my-5 md:my-0 md:mx-5">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full py-2.5 px-3 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2.5">
          <button
            onClick={handleDelete}
            disabled={selectedIds.length === 0}
            className={`flex items-center py-2 px-3 rounded-md text-sm border ${
              selectedIds.length > 0
                ? "text-red-600 border-red-600 hover:bg-red-50"
                : "text-gray-400 border-gray-300 cursor-not-allowed"
            }`}
          >
            <RiDeleteBinLine className="mr-1.5 text-base" />
            Delete
          </button>
          <button className="flex items-center py-2 px-3 rounded-md text-sm border border-gray-300 bg-white hover:bg-gray-50">
            <FaFilter className="mr-1.5 text-base" />
            Filters
          </button>
          <button
            onClick={handleExport}
            className="flex items-center py-2 px-3 rounded-md text-sm border border-gray-300 bg-white hover:bg-gray-50"
          >
            <FaFileExport className="mr-1.5 text-base" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-4 px-5 font-bold border-b border-gray-200">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 cursor-pointer"
                  onChange={() => {
                    if (selectedIds.length === paginatedData.length) {
                      setSelectedIds([]);
                    } else {
                      setSelectedIds(paginatedData.map((item) => item.id));
                    }
                  }}
                  checked={
                    paginatedData.length > 0 &&
                    selectedIds.length === paginatedData.length
                  }
                />
              </th>
              <th className="text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Full Names & Code
              </th>
              <th className="text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                School
              </th>
              <th className="text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Result
              </th>
              <th className="text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Refer
              </th>
              <th className="text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Gender
              </th>
              <th className="text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-4 px-5 border-b border-gray-200">
                  <input
                    type="checkbox"
                    className="w-4.5 h-4.5 cursor-pointer"
                    onChange={() => handleSelect(item.id)}
                    checked={selectedIds.includes(item.id)}
                  />
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <div className="flex gap-2.5 items-center">
                    <img
                      src={item.avater}
                      alt={item.fullName}
                      className="w-10 h-10 rounded"
                    />
                    <div className="flex flex-col">
                      <span>{item.fullName}</span>
                      <span className="text-blue-500">{item.code}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.school}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.results}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <Link to="/case-manager-dashboard/sevierity-form">
                    <a
                      href={item.referLink}
                      className="text-blue-500 hover:underline"
                    >
                      Link
                    </a>
                  </Link>
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.gender}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <div className="flex gap-1.5 justify-center">
                    <button
                      className="flex items-center justify-center w-8 h-8 rounded-md border border-blue-500 bg-white text-blue-500 hover:bg-blue-50 disabled:opacity-50"
                      onClick={() => handleEditClick(item)}
                      disabled={isEditing}
                    >
                      {isEditing && item.id === selectedItem?.id ? (
                        <FiLoader className="animate-spin" />
                      ) : (
                        <GrEdit />
                      )}
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 rounded-md border border-blue-500 bg-white text-blue-500 hover:bg-blue-50">
                      <FaRegEye />
                    </button>
                    <button
                      className="flex items-center justify-center w-8 h-8 rounded-md border border-red-500 bg-white text-red-500 hover:bg-red-50"
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

export default ViewModerateSeverity;

import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye, FaSearch } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FiLoader } from "react-icons/fi";
import ReferForm from "./createReferrer";
import profie from "../../../assets/profile.jpg";

const ReferredView = () => {
  const [activePage, setActivePage] = useState("referredVeiw");
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    referredCode: "",
    school: "",
    at: "",
    referredTo: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 2,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
    {
      id: 3,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 4,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
    {
      id: 5,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 6,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 7,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
    {
      id: 8,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 9,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
    {
      id: 10,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
    {
      id: 11,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 12,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
    {
      id: 13,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 14,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      referredTo: "Aron Pierre",
    },
    {
      id: 15,
      avater: profie,
      fullName: "Dev Nquizi",
      referredCode: "#90784",
      school: "Inter Comprehensive HIgh School",
      at: "10-05-2000",
      gender: "Female",
      referredTo: "Aron Pierre",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Handle edit button click
  const handleEditClick = (item) => {
    setSelectedItem(item);
    setEditFormData({
      fullName: item.fullName,
      referredCode: item.referredCode,
      school: item.school,
      at: item.at,
      referredTo: item.referredTo,
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

      // Update item data
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
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.school.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleDelete = () => {
    const newData = data.filter((item) => !selectedIds.includes(item.id));
    setData(newData);
    setSelectedIds([]);
  };

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Full Name,Referred Code,School,Referred To,At"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.fullName},${item.referredCode},${item.school},${item.referredTo},${item.at}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "referred_clients.csv");
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
    <div>
      {/* Header */}
      <div className="flex bg-white rounded-lg border-2  shadow-sm mb-5 border-[#1E74FF26]">
        <button
          className={`flex-1 py-4 px-6 text-center font-medium ${
            activePage === "referredVeiw"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => setActivePage("referredVeiw")}
        >
          Referred Clients
        </button>
        <button
          className={`flex-1 py-4 px-6 text-center font-medium ${
            activePage === "createrefer"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
          onClick={() => setActivePage("createrefer")}
        >
          Refer A New Client
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-[1000] border-[#1E74FF26]">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Edit Referred Client</h3>

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
                    Referred Code
                  </label>
                  <input
                    type="text"
                    name="referredCode"
                    value={editFormData.referredCode}
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
                    Referred To
                  </label>
                  <input
                    type="text"
                    name="referredTo"
                    value={editFormData.referredTo}
                    onChange={handleEditFormChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    At
                  </label>
                  <input
                    type="text"
                    name="at"
                    value={editFormData.at}
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

      {/* Content */}
      {activePage === "referredVeiw" && (
        <div className="bg-white rounded-lg border-2 p-5 shadow-sm border-[#1E74FF26]">
          <h1 className="text-2xl text-gray-800 mb-5 font-medium">Referred</h1>

          <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
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
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search ..."
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
                disabled={selectedIds.length === 0}
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

          <div className="overflow-x-auto rounded-md shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-10 p-4 text-left">
                    <input
                      type="checkbox"
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
                      className="w-4.5 h-4.5 cursor-pointer"
                    />
                  </th>
                  <th className="p-4 text-left text-blue-500 font-bold">
                    FULL NAMES & CODE
                  </th>
                  <th className="p-4 text-left text-blue-500 font-bold">
                    SCHOOL
                  </th>
                  <th className="p-4 text-left text-blue-500 font-bold">
                    REFERRED TO
                  </th>
                  <th className="p-4 text-left text-blue-500 font-bold">AT</th>
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
                        className="w-4.5 h-4.5 cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={item.avater}
                          alt=""
                          className="w-10 h-10 rounded"
                        />
                        <div>
                          <p className="font-medium">{item.fullName}</p>
                          <p className="text-blue-500 text-sm">
                            {item.referredCode}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{item.school}</td>
                    <td className="p-4">{item.referredTo}</td>
                    <td className="p-4">{item.at}</td>
                    <td className="p-4">
                      <div className="flex gap-1.5 justify-center">
                        <button
                          className="flex items-center justify-center w-8 h-8 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-50"
                          onClick={() => handleEditClick(item)}
                          disabled={isEditing}
                        >
                          {isEditing && item.id === selectedItem?.id ? (
                            <FiLoader className="animate-spin" />
                          ) : (
                            <GrEdit />
                          )}
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50">
                          <FaRegEye />
                        </button>
                        <button
                          className="flex items-center justify-center w-8 h-8 rounded-md border border-red-500 text-red-500 hover:bg-red-50"
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
      )}

      {activePage === "createrefer" && (
        <div className="bg-white rounded-lg border-2 border-blue-100/20 p-5 shadow-sm">
          <ReferForm />
        </div>
      )}
    </div>
  );
};

export default ReferredView;

import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { FiLoader } from "react-icons/fi";
import OnboardingClientDetails from "./onboardingClientDetails";
import profie from "../../../assets/profile.jpg";

function ViewOnboardClients() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    studentName: "",
    code: "",
    phoneNum: "",
    class: "",
    age: "",
    gender: "",
  });
  const [selectedIds, setSelectedIds] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      phoneNum: "+237670945994",
      class: "Upper Sixth",
      age: "16 Years",
      gender: "Male",
    },
    {
      id: 2,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      phoneNum: "+237670945994",
      class: "Form 5",
      age: "16 Years",
      gender: "Male",
    },
    {
      id: 3,
      avater: profie,
      studentName: "Wesley Akwe Bah",
      code: "#10784",
      class: "Lower Sixth",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 4,
      avater: profie,
      studentName: "Buinwui Faith Zenmwi",
      code: "#90784",
      class: "Form 3",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 5,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Lower Sixth",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 6,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 7,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 8,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 9,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 10,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 4",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 11,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 12,
      avater: profie,
      studentName: "+237670945994",
      code: "#90784",
      class: "Form 4",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 13,
      avater: profie,
      studentName: "+237670945994",
      code: "#90784",
      class: "Upper Sixth",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    {
      id: 14,
      avater: profie,
      studentName: "+237670945994",
      code: "#90784",
      class: "Lower Sixth",
      age: "16 Years",
      phoneNum: "+237670945994",
      gender: "Male",
    },
    // ... rest of your initial data array
  ]);

  // Handle client click for view modal
  const handleClientClick = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  // Close view modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle edit button click
  const handleEditClick = (client) => {
    setSelectedClient(client);
    setEditFormData({
      studentName: client.studentName,
      code: client.code,
      phoneNum: client.phoneNum,
      class: client.class,
      age: client.age,
      gender: client.gender,
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

  // Handle checkbox selection
  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Handle delete
  const handleDelete = () => {
    const newData = data.filter((item) => !selectedIds.includes(item.id));
    setData(newData);
    setSelectedIds([]);
  };

  // Handle export
  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["studentName,Code,Class,Result,phoneNum,phoneNum Result"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.studentName},${item.code},${item.class},${item.screeningResult},${item.phoneNum},${item.gender}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "follow_list_data.csv");
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

  // Filter data
  const filteredData = data.filter(
    (item) =>
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phoneNum.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / entries);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entries,
    currentPage * entries
  );

  // Generate pagination buttons
  const generatePagination = () => {
    let paginationItems = [];

    paginationItems.push(
      <button
        key="prev"
        className="w-9 h-9 flex items-center justify-center border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50"
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
        className="w-9 h-9 flex items-center justify-center border border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <GrLinkNext />
      </button>
    );

    return paginationItems;
  };

  return (
    <div className="mx-auto p-4 sm:p-6 bg-white border-2 border-blue-100 rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl text-gray-800 font-medium mb-4 sm:mb-5">
        On-Boarding Clients
      </h2>

      {/* View Client Details Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="max-w-[90%] max-h-[90vh] overflow-y-auto">
            <OnboardingClientDetails
              client={selectedClient}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Edit Client Details</h3>

            <form onSubmit={handleSaveEdit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
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
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    name="phoneNum"
                    value={editFormData.phoneNum}
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
                    Age
                  </label>
                  <input
                    type="text"
                    name="age"
                    value={editFormData.age}
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
                    <option value="Other">Other</option>
                  </select>
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

      {/* Controls Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 sm:gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm sm:text-base">Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base"
          >
            <option value="7">07</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span className="text-sm sm:text-base">Entries</span>
        </div>

        <div className="w-full sm:flex-grow sm:max-w-[500px] mx-0 sm:mx-3">
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-8 sm:px-10 py-2 border border-gray-300 rounded text-sm bg-no-repeat bg-[10px] sm:bg-[12px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='M21 21l-4.35-4.35'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="flex gap-2 flex-wrap justify-start sm:justify-end w-full sm:w-auto">
          <button
            className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm sm:text-base"
            onClick={handleDelete}
          >
            <RiDeleteBinLine size={14} />
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
              <th className="p-2 sm:p-3"></th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base">
                NAME & CODE
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base hidden sm:table-cell">
                WHATSAPP
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base hidden sm:table-cell">
                CLASS
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base hidden sm:table-cell">
                AGE
              </th>
              <th className="p-2 sm:p-3 text-blue-600 font-semibold text-sm sm:text-base hidden sm:table-cell">
                GENDER
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

                <td
                  className="p-2 sm:p-3 cursor-pointer"
                  onClick={() => handleClientClick(item)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.avater}
                      alt=""
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

                <td className="p-2 sm:p-3 text-sm hidden sm:table-cell">
                  {item.phoneNum}
                </td>
                <td className="p-2 sm:p-3 text-sm hidden sm:table-cell">
                  {item.class}
                </td>
                <td className="p-2 sm:p-3 text-sm hidden sm:table-cell">
                  {item.age}
                </td>
                <td className="p-2 sm:p-3 text-sm hidden sm:table-cell">
                  {item.gender}
                </td>

                <td className="w-[100px] sm:w-[120px]">
                  <div className="flex gap-1 justify-center">
                    <button
                      className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => handleEditClick(item)}
                      disabled={isEditing}
                      aria-label={`Edit ${item.studentName}`}
                    >
                      {isEditing && item.id === selectedClient?.id ? (
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
      <div className="flex justify-center sm:justify-end items-center mt-4 sm:mt-5 gap-1">
        {generatePagination()}
      </div>
    </div>
  );
}

export default ViewOnboardClients;

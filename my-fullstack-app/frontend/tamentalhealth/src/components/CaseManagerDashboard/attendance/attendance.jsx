import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaSearch } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const AttendanceView = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Front End Development",
      class: "Form 1",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "100%",
    },
    {
      id: 2,
      name: "Design",
      class: "Form 5",
      specialty: "Accounting",
      dob: "21.03.2021",
      percentage: "39%",
    },
    {
      id: 3,
      name: "Software Testing",
      class: "Form 4",
      specialty: "Arts",
      dob: "21.03.2021",
      percentage: "10%",
    },
    {
      id: 4,
      name: "Maintenance",
      class: "Form 1",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "40%",
    },
    {
      id: 5,
      name: "Deployment",
      class: "Form 2",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "40%",
    },
    {
      id: 6,
      name: "Containerization",
      class: "Form 4",
      specialty: "Arts",
      dob: "21.03.2021",
      percentage: "50%",
    },
    {
      id: 7,
      name: "Marketing",
      class: "Form 3",
      specialty: "Accounting",
      dob: "21.03.2021",
      percentage: "50%",
    },
    {
      id: 8,
      name: "End Development",
      class: "Form 1",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "100%",
    },
    {
      id: 9,
      name: "End Development",
      class: "Form 1",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "100%",
    },
    {
      id: 10,
      name: "End Development",
      class: "Form 1",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "100%",
    },
    {
      id: 11,
      name: "End Development",
      class: "Form 1",
      specialty: "Science",
      dob: "21.03.2021",
      percentage: "100%",
    },
  ]);

  // Filtered Data
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / entries);
  const startIndex = (currentPage - 1) * entries;
  const paginatedData = filteredData.slice(startIndex, startIndex + entries);

  const handleRowSelection = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    setData((prevData) =>
      prevData.filter((item) => !selectedRows.includes(item.id))
    );
    setSelectedRows([]);
  };

  const handleExport = () => {
    const headers = ["Name", "Class", "Specialty", "DOB", "Percentage"];
    const rows = filteredData.map((item) => [
      item.name,
      item.class,
      item.specialty,
      item.dob,
      item.percentage,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // Generate pagination numbers
  const generatePagination = () => {
    let paginationItems = [];

    paginationItems.push(
      <button
        key="prev"
        className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
        onClick={handlePreviousPage}
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
        className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
        onClick={handleNextPage}
      >
        <GrLinkNext />
      </button>
    );

    return paginationItems;
  };

  return (
    <div className="bg-white rounded-lg p-5 mx-auto border-2 border-[#1E74FF26] shadow-sm">
      <h1 className="text-2xl text-gray-800 mb-5 font-medium">
        View Attendance
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <span>Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(parseInt(e.target.value));
              setCurrentPage(1); // Reset to page 1
            }}
            className="border border-gray-300 rounded px-2.5 py-1.5 text-sm w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="12">12</option>
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
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to page 1
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2.5 flex-wrap justify-center">
          <button
            className="flex items-center px-3 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-50 gap-1.5"
            onClick={handleDelete}
          >
            <span className="text-base">
              <RiDeleteBinLine />
            </span>
            Delete
          </button>
          <button
            className="flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 gap-1.5"
            onClick={() => alert("Filter button clicked!")}
          >
            <span className="text-base">
              <FaFilter />
            </span>
            Filters
          </button>
          <button
            className="flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 gap-1.5"
            onClick={handleExport}
          >
            <span className="text-base">
              <FaFileExport />
            </span>
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
                      setSelectedRows(paginatedData.map((item) => item.id));
                    } else {
                      setSelectedRows([]);
                    }
                  }}
                  checked={
                    paginatedData.length > 0 &&
                    selectedRows.length === paginatedData.length
                  }
                  className="w-5 h-5 cursor-pointer"
                />
              </th>
              <th className="p-4 text-left text-blue-500 font-bold">NAME</th>
              <th className="p-4 text-left text-blue-500 font-bold">CLASS</th>
              <th className="p-4 text-left text-blue-500 font-bold">
                SPECIALTY
              </th>
              <th className="p-4 text-left text-blue-500 font-bold">DOB</th>
              <th className="p-4 text-right text-blue-500 font-bold">
                PERCENTAGE
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
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelection(item.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.class}</td>
                <td className="p-4">{item.specialty}</td>
                <td className="p-4">{item.dob}</td>
                <td className="p-4 text-right font-bold text-lg">
                  {item.percentage}
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

export default AttendanceView;

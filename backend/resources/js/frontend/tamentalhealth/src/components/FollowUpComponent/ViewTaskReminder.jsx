import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaSearch } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
function TaskReminder() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 100,
    },
    {
      id: 2,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 50,
    },
    {
      id: 3,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 80,
    },
    {
      id: 4,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Follow-up Message",
      priorityLevel: 70,
    },
    {
      id: 5,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Follow-up Message",
      priorityLevel: 10,
    },
    {
      id: 6,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 90,
    },
    {
      id: 7,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Meeting Reminder",
      priorityLevel: 10,
    },
    {
      id: 8,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Meeting Reminder",
      priorityLevel: 10,
    },
    {
      id: 9,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 40,
    },
    {
      id: 10,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 90,
    },
    {
      id: 11,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 10,
    },
    {
      id: 12,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 80,
    },
    {
      id: 13,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 100,
    },
    {
      id: 14,
      completedDate: "12/04/2025 11:20 AM",
      reminderType: "Scheduled Task",
      priorityLevel: 100,
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.reminderType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.completedDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reminderType.toLowerCase().includes(searchQuery.toLowerCase())
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
      [",completedDate,Follow Up Summary,priorityLevel,priorityLevel Result"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.completedDate},${item.reminderType},${item.priorityLevel},${item.reminderType}`
          )
        )
        .join("\n");
    const encompletedDatedUri = encompletedDateURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encompletedDatedUri);
    link.setAttribute("download", "follow_list_data.csv");
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
    <div className="follow-up-container">
      <h2 className="follow-up-title">Reminders to my task</h2>
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

      <h3 className="list-header-title">Reminder</h3>
      <table>
        <thead>
          <tr className="list-header-title">
            <th></th>
            <th>DATE $ TIME</th>
            <th>TASK</th>
            <th>PRIORITY LEVEL INDICATOR</th>
            <th>STATUS</th>
            <th>REMINDER TYPE</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="checkbox-column">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => handleSelect(item.id)}
                />
              </td>
              <td className="school-name-column">{item.completedDate}</td>
              <td className="fullName-column">TasK</td>
              <td className="referLink-column">
                {item.priorityLevel >= 100 ? (
                  <span>High Priority</span>
                ) : item.priorityLevel >= 60 && item.priorityLevel <= 99 ? (
                  <span>Medium Priority</span>
                ) : (
                  <span>Low Priority</span>
                )}
              </td>
              <td className="school-name-column">Status</td>
              <td className="referLink-column">{item.reminderType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end items-center mt-5 gap-1.5">
        {generatePagination()}
      </div>
    </div>
  );
}

export default TaskReminder;

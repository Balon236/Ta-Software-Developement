import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter } from "react-icons/fa";
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
      reminderType: "Form 5",
      reminderType: "Scheduled Task",
      priorityLevel: 90,
    },
    {
      id: 7,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Form 5",
      reminderType: "Meeting Reminder",
      priorityLevel: 10,
    },
    {
      id: 8,
      completedDate: "12/04/2025  11:20 AM",
      reminderType: "Form 5",
      reminderType: "Scheduled Task",
      priorityLevel: 100,
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
      item.priorityLevel.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
        className="pagination-button previous"
        onClick={handlePrevious}
      >
        <span>
          <GrLinkPrevious />
        </span>
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`pagination-number ${currentPage === i ? "active" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    paginationItems.push(
      <button
        key="next"
        className="pagination-button next"
        onClick={handleNext}
      >
        <span>
          <GrLinkNext />
        </span>
      </button>
    );

    return paginationItems;
  };

  return (
    <div className="follow-up-container">
      <h2 className="follow-up-title">Reminders to my task</h2>
      <div className="follow-up-controls">
        <div className="entries-control">
          <span>Show</span>
          <select
            value={entries}
            onChange={(e) => {
              setEntries(parseInt(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
            className="entries-select"
          >
            <option value="7">07</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>Entries</span>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page when searching
            }}
            className="search-input"
          />
        </div>

        <div className="action-buttons">
          <button className="delete-button" onClick={handleDelete}>
            <span className="delete-icon">
              <RiDeleteBinLine />
            </span>
            Delete
          </button>
          <button
            className="filters-button"
            onClick={() => alert("Filter button clicked!")}
          >
            <span className="filters-icon">
              <FaFilter />
            </span>
            Filters
          </button>
          <button className="export-button" onClick={handleExport}>
            <span className="export-icon">
              <FaFileExport />
            </span>
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

      <div className="pagination-container">{generatePagination()}</div>
    </div>
  );
}

export default TaskReminder;

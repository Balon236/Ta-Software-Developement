import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
function viewAllTask() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      taskName: "Front End",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 2,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 3,
      taskName: "Wesley Akwe Bah",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 4,
      taskName: "Buinwui Faith Zenmwi",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 5,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 6,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 7,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 8,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 9,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 10,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 11,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 12,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Explanation of the Task",
      createdAt: "21-03-2025",
    },
    {
      id: 13,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Upper Sixth",
      createdAt: "21-03-2025",
    },
    {
      id: 14,
      taskName: "Laurencia Ikome Nalowa",
      taskdescription: "This is a brief description",
      taskExplanation: "Lower Sixth",
      createdAt: "21-03-2025",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.taskExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.taskdescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.createdAt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.screeningResult.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.consResult.toLowerCase().includes(searchQuery.toLowerCase())
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
      ["Task Name,Assign To,Created AT, taskExplanation"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.taskName},${item.taskdescription},${item.createdAt},${item.taskExplanation}`
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
      <h2 className="follow-up-title">All Tasks</h2>
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

      <table>
        <thead>
          <tr className="list-header-title">
            <th></th>
            <th>TASK NAME</th>
            <th>DESRIPTION</th>
            <th>EXPLANATION</th>
            <th>CREATED AT</th>
            <th>ACTION</th>
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

              <td className="fullName-column">{item.taskName}</td>

              <td className="school-name-column">{item.taskdescription}</td>

              <td className="school-name-column">{item.taskExplanation}</td>

              <td className="school-name-column">{item.createdAt}</td>

              <td className="action-column">
                <div className="action-icons">
                  <button className="edit-button">
                    <span className="edit-icon">
                      <GrEdit />
                    </span>
                  </button>
                  <button className="view-button">
                    <span className="view-icon">
                      <FaRegEye />
                    </span>
                  </button>
                  <button
                    className="delete-icon-button"
                    onClick={() => {
                      setData(data.filter((d) => d.id !== item.id));
                      setSelectedIds(
                        selectedIds.filter((id) => id !== item.id)
                      );
                    }}
                  >
                    <span className="delete-action-icon">
                      <RiDeleteBinLine />
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-container">{generatePagination()}</div>
    </div>
  );
}

export default viewAllTask;

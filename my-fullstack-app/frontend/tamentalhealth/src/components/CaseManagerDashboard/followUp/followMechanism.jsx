import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import profie from "../../../assets/profile.jpg";
import "./index.css";
function FollowMechanism() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Upper Sixth",
      mechanism: "here is the link",
    },
    {
      id: 2,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Upper Sixth",
      mechanism: "here is the link",
    },
    {
      id: 3,
      avater: profie,
      studentName: "Wesley Akwe Bah",
      code: "#10784",
      class: "Lower Sixth",
      mechanism: "here is the link",
    },
    {
      id: 4,
      avater: profie,
      studentName: "Buinwui Faith Zenmwi",
      code: "#90784",
      class: "Lower Sixth",
      mechanism: "here is the link",
    },
    {
      id: 5,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Lower Sixth",
      mechanism: "here is the link",
    },
    {
      id: 6,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      mechanism: "here is the link",
    },
    {
      id: 7,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      mechanism: "here is the link",
    },
    {
      id: 8,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      mechanism: "here is the link",
    },
    {
      id: 9,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Upper Sixth",
      mechanism: "here is the link",
    },
    {
      id: 10,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 4",
      mechanism: "here is the link",
    },
    {
      id: 11,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      mechanism: "here is the link",
    },
    {
      id: 12,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      mechanism: "here is the link",
    },
    {
      id: 13,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Upper Sixth",
      mechanism: "here is the link",
    },
    {
      id: 14,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Lower Sixth",
      mechanism: "here is the link",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const handleDelete = () => {
    const newData = data.filter((item) => !selectedIds.includes(item.id));
    setData(newData);
    setSelectedIds([]);
  };

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["studentName,Code,Class,Mecha"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.studentName},${item.code},${item.class},${item.mechanism}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "follow_mechanism_data.csv");
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
      <h2 className="follow-up-title">Follow Up Mechanism</h2>
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
            <th>STUDENT NAME & CODE</th>
            <th>CLASS</th>
            <th>MECHANISM</th>
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

              <td className="fullName-column">
                <img src={item.avater} alt="" className="follow-up-avater" />
                <p className="avater-text">
                  <span>{item.studentName}</span>
                  <span className="follow-up-code">{item.code}</span>
                </p>
              </td>

              <td className="school-name-column">{item.class}</td>

              <td className="referLink-column">
                <a href={item.mechanism} className="sevierity-link">
                  Link
                </a>
              </td>

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

export default FollowMechanism;

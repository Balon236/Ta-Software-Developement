import React, { useState } from "react";
import "./index.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import profie from "../../../assets/profile.jpg";
import { Link } from "react-router-dom";
const ViewModerateSevierity = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
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

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.results.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.referLink.toLowerCase().includes(searchQuery.toLowerCase())
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
      ["fullName,School Name,Result,Refer,Gender"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.fullName},${item.school},${item.code},${item.results},${item.referLink},${item.gender}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "moderate_sevierity_data.csv");
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
    <div className="sevierity-container">
      <h1 className="sevierity-title">Client Facing Moderate Sevierity</h1>

      <div className="sevierity-controls">
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

      <div className="sevierity-table-container">
        <table className="sevierity-table">
          <thead>
            <tr className="list-header-title">
              <th className="checkbox-column">
                <input
                  type="checkbox"
                  checked={
                    selectedIds.length === paginatedData.length &&
                    paginatedData.length > 0
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedIds(paginatedData.map((item) => item.id));
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                />
              </th>
              <th className="fullName-column">FULL NAMES & CODE</th>
              <th className="school-name-column">SCHOOL</th>
              <th className="results-column">RESULT</th>
              <th className="referLink-column">REFER</th>
              <th className="gender-column">GENDER</th>
              <th className="action-column">ACTION</th>
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
                  <img src={item.avater} alt="" className="sevierity-avater" />
                  <p className="avater-text">
                    <span>{item.fullName}</span>
                    <span className="sevierity-code">{item.code}</span>
                  </p>
                </td>
                <td className="school-name-column">{item.school}</td>
                <td className="class-column">{item.results}</td>
                <Link to="/case-manager-dashboard/sevierity-form">
                  <td className="referLink-column">
                    <a href={item.referLink} className="sevierity-link">
                      Link
                    </a>
                  </td>
                </Link>
                <td className="gender-column">{item.gender}</td>

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
      </div>

      <div className="pagination-container">{generatePagination()}</div>
    </div>
  );
};

export default ViewModerateSevierity;

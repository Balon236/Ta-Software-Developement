import React, { useState } from "react";
import "./specialty.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const SpecialtyView = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      country: "Cameroon",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 2,
      country: "Allgeria",
      schoolName: "Inter Comprehensive High School (ICHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 3,
      country: "Tunisia",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 4,
      country: "Uganda",
      schoolName: "Inter Comprehensive High School (ICHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 5,
      country: "Angola",
      schoolName: "Inter Comprehensive High School (ICHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 6,
      country: "Cape_verde",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 7,
      country: "Nigeria",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 8,
      country: "Cameroon",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 9,
      country: "Cameroon",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 10,
      country: "Cameroon",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Dev Nquizi",
      specialty: "Aron Pierre",
    },
    {
      id: 11,
      country: "Cape_verde",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 12,
      country: "Tunisia",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 13,
      country: "Nigeria",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 14,
      country: "Cape_verde",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
    {
      id: 15,
      country: "Tunisia",
      schoolName: "Bilingual Grammar High School Molyko (BGHS)",
      location: "P.O Box Molyko Buea, SW",
      manager: "Aron Pierre",
      specialty: "Aron Pierre",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.manager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specialty.toLowerCase().includes(searchQuery.toLowerCase())
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
      ["Country,School Name,Class,Manager"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.country},${item.schoolName},${item.class},${item.manager}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "class_data.csv");
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
    <div className="specialty-container">
      <h1 className="specialty-title">ALL Specialties</h1>

      <div className="specialty-controls">
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

      <div className="specialty-table-container">
        <table className="specialty-table">
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
              <th className="country-column">COUNTRY</th>
              <th className="school-name-column">SCHOOL NAME</th>
              <th className="location-column">LOCATION</th>
              <th className="manager-column">MANAGER</th>
              <th className="specialty-column">SPECIALTY</th>
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
                <td className="country-column">{item.country}</td>
                <td className="school-name-column">{item.schoolName}</td>
                <td className="class-column">{item.location}</td>
                <td className="manager-column">{item.manager}</td>
                <td className="specialty-column">{item.specialty}</td>

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

export default SpecialtyView;

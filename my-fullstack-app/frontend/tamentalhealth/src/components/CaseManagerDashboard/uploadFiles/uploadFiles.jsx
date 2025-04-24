import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import "./index.css";

const UploadFiles = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      fileName: "Design",
      uploadBy: "Aron Pierre",
      fileType: "PDF",
      createdAt: "10-05-2024",
    },
    {
      id: 2,
      fileName: "Software Testing",
      uploadBy: "Aron Pierre",
      fileType: "PDF",
      createdAt: "10-05-2024",
    },
    {
      id: 3,
      fileName: "Software Testing",
      uploadBy: "Aron Pierre",
      fileType: "PDF",
      createdAt: "10-05-2024",
    },
    {
      id: 4,
      fileName: "Maintenance",
      fileType: "PDF",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 5,
      fileName: "Maintenance",
      fileType: "DOCX",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 6,
      fileName: "Maintenance",
      fileType: "DOCX",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 7,
      fileName: "Marketing",
      fileType: "DOCX",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 8,
      fileName: "Marketing",
      fileType: "PDF",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 9,
      fileName: "Development",
      fileType: "PNG",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 10,
      fileName: "Development",
      fileType: "PNG",
      uploadBy: "Dev Nquizi",
      createdAt: "10-05-2024",
    },
    {
      id: 11,
      fileName: "Front End Development",
      fileType: "PNG",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 12,
      fileName: "Design",
      fileType: "PDF",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 13,
      fileName: "Design",
      fileType: "PDF",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 14,
      fileName: "Front End Development",
      fileType: "PDF",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
    {
      id: 15,
      fileName: "Front End Development",
      fileType: "PDF",
      uploadBy: "Aron Pierre",
      createdAt: "10-05-2024",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fileType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.uploadBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.createdAt.toLowerCase().includes(searchQuery.toLowerCase())
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
      ["File Name,Upload By,File Type,Created At"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.fileName},${item.uploadBy},${item.fileType},${item.createdAt},`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "upload_file_data.csv");
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
    <div className="upload-file-container">
      <h1 className="upload-file-title">ALL Upload File</h1>

      <div className="upload-file-controls">
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

      <div className="upload-file-table-container">
        <table className="upload-file-table">
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
              <th className="fileName-column">File Name</th>
              <th className="uploadBy-column">File Type</th>
              <th className="fileType-column">Uploaded By</th>
              <th className="upload-file-column">Created At</th>
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
                <td className="fileName-column">{item.fileName}</td>
                <td className="class-column">{item.fileType}</td>
                <td className="uploadBy-column">{item.uploadBy}</td>
                <td className="upload-file-column">{item.createdAt}</td>

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

export default UploadFiles;

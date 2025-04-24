import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
function StudentInprocess() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 2,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 3,
      studentName: "Wesley Akwe Bah",
      code: "#10784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 4,
      studentName: "Buinwui Faith Zenmwi",
      code: "#90784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 5,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 6,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 7,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 8,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 9,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 10,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 4",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 11,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 12,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 13,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 14,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.consultant.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
      ["studentName,Code,Class,Result,Consultant,Consultant Result"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.studentName},${item.code},${item.class},${item.screeningResult},${item.consultant},${item.consResult}`
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
        className="px-3 py-2 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
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
          className={`px-3 py-2 mx-1 rounded-md ${
            currentPage === i
              ? "bg-primary text-white"
              : "border border-gray-200 text-gray-600 hover:bg-gray-50"
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
        className="px-3 py-2 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50"
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
    <>
      <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Students In Process
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show</span>
            <select
              value={entries}
              onChange={(e) => {
                setEntries(parseInt(e.target.value));
                setCurrentPage(1); // Reset to first page
              }}
              className="px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="7">07</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="text-sm text-gray-600">Entries</span>
          </div>

          <div className="flex-grow md:max-w-sm">
            <input
              type="text"
              placeholder="Search ..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
              onClick={handleDelete}
            >
              <span>
                <RiDeleteBinLine />
              </span>
              Delete
            </button>
            <button
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2"
              onClick={() => alert("Filter button clicked!")}
            >
              <span>
                <FaFilter />
              </span>
              Filters
            </button>
            <button
              className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
              onClick={handleExport}
            >
              <span>
                <FaFileExport />
              </span>
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-3 py-3 text-left"></th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  STUDENT NAME & CODE
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  CLASS
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  SCREENING RESULT
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  CONSULTANT
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  CONSULTANT RESULT
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
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
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                      className="w-4 h-4 rounded focus:ring-primary text-primary"
                    />
                  </td>

                  <td className="px-3 py-3 text-gray-700">
                    {item.studentName}
                  </td>

                  <td className="px-3 py-3 text-gray-700">{item.class}</td>

                  <td className="px-3 py-3">
                    <a
                      href={item.screeningResult}
                      className="text-primary hover:underline"
                    >
                      Link
                    </a>
                  </td>

                  <td className="px-3 py-3 text-gray-700">{item.consultant}</td>

                  <td className="px-3 py-3">
                    <a
                      href={item.consResult}
                      className="text-primary hover:underline"
                    >
                      View
                    </a>
                  </td>

                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 text-gray-600 hover:text-primary">
                        <span>
                          <GrEdit />
                        </span>
                      </button>
                      <button className="p-1 text-gray-600 hover:text-primary">
                        <span>
                          <FaRegEye />
                        </span>
                      </button>
                      <button
                        className="p-1 text-gray-600 hover:text-red-500"
                        onClick={() => {
                          setData(data.filter((d) => d.id !== item.id));
                          setSelectedIds(
                            selectedIds.filter((id) => id !== item.id)
                          );
                        }}
                      >
                        <span>
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

        <div className="flex justify-center mt-6 gap-1">
          {generatePagination()}
        </div>
      </div>
    </>
  );
}

export default StudentInprocess;

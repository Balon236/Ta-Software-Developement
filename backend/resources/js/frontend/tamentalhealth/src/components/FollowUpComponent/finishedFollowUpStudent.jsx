import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCheck, FaFileExport, FaFilter, FaWindowClose } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
function FinishedFollowUpStudent() {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      studentName: "Dev Nquizi",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 100,
    },
    {
      id: 2,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 50,
    },
    {
      id: 3,
      studentName: "Wesley Akwe Bah",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 80,
    },
    {
      id: 4,
      studentName: "Buinwui Faith Zenmwi",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 70,
    },
    {
      id: 5,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 10,
    },
    {
      id: 6,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "Form 5",
      follomUpSummary: "here is the link",
      finalOutcome: 90,
    },
    {
      id: 7,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "Form 5",
      follomUpSummary: "here is the link",
      finalOutcome: 10,
    },
    {
      id: 8,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "Form 5",
      follomUpSummary: "here is the link",
      finalOutcome: 100,
    },
    {
      id: 9,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 40,
    },
    {
      id: 10,
      studentName: "Laurencia Ikome Nalowa",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 90,
    },
    {
      id: 11,
      studentName: "Dev Nquizi",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 10,
    },
    {
      id: 12,
      studentName: "Dev Nquizi",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 80,
    },
    {
      id: 13,
      studentName: "Dev Nquizi",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 100,
    },
    {
      id: 14,
      studentName: "Dev Nquizi",
      completedDate: "12/04/2025",
      follomUpSummary: "here is the link",
      finalOutcome: 100,
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.follomUpSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.completedDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.finalOutcome.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.follomUpSummary.toLowerCase().includes(searchQuery.toLowerCase())
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
      [
        "studentName,completedDate,Follow Up Summary,finalOutcome,finalOutcome Result",
      ]
        .concat(
          filteredData.map(
            (item) =>
              `${item.studentName},${item.completedDate},${item.follomUpSummary},${item.finalOutcome},${item.follomUpSummary}`
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
    <>
      <div className="w-full bg-white p-4 md:p-6 rounded-lg border-2 border-[#1E74FF26]  shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Students who have completed their follow-up process
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
              className="px-3 py-2 bg-blue-100 text-blue-500 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
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
                  STUDENT NAME
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  COMPLETION DATE
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  FOLLOW-UP SUMMARY
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  FINAL STATUS
                </th>
                <th className="px-3 py-3 text-left font-medium text-gray-700">
                  FINAL OUTCOMES
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

                  <td className="px-3 py-3 text-gray-700">
                    {item.completedDate}
                  </td>

                  <td className="px-3 py-3">
                    <a
                      href={item.follomUpSummary}
                      className="text-primary hover:underline"
                    >
                      Summary
                    </a>
                  </td>

                  <td className="px-3 py-3 text-gray-700">
                    {item.finalOutcome === 100 ? (
                      <span className="font-medium text-green-600">Stable</span>
                    ) : item.finalOutcome >= 60 && item.finalOutcome <= 99 ? (
                      <span className="font-medium text-blue-600">
                        No action needed
                      </span>
                    ) : (
                      <span className="font-medium text-red-600">
                        Action needed
                      </span>
                    )}
                  </td>

                  <td className="px-3 py-3">
                    {item.finalOutcome >= 60 ? (
                      <FaCheck className="text-green-500 text-lg" />
                    ) : (
                      <FaWindowClose className="text-red-500 text-lg" />
                    )}
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

export default FinishedFollowUpStudent;

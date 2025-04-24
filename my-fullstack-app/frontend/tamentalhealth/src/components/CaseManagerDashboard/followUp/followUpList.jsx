import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import profie from "../../../assets/profile.jpg";

function FollowUpList() {
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
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 2,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 3,
      avater: profie,
      studentName: "Wesley Akwe Bah",
      code: "#10784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 4,
      avater: profie,
      studentName: "Buinwui Faith Zenmwi",
      code: "#90784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 5,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Lower Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 6,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 7,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 8,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 5",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 9,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 10,
      avater: profie,
      studentName: "Laurencia Ikome Nalowa",
      code: "#90784",
      class: "Form 4",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 11,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 12,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Form 4",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 13,
      avater: profie,
      studentName: "Dev Nquizi",
      code: "#90784",
      class: "Upper Sixth",
      screeningResult: "here is the link",
      consultant: "Dev Nquizi",
      consResult: "here is the link",
    },
    {
      id: 14,
      avater: profie,
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
        className="flex items-center justify-center w-10 h-10 border border-gray-300 bg-white rounded-md hover:bg-gray-100"
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
          className={`flex items-center justify-center w-9 h-9 border rounded-md ${
            currentPage === i
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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
        className="flex items-center justify-center w-10 h-10 border border-gray-300 bg-white rounded-md hover:bg-gray-100"
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
    <div className="p-5 bg-white border-2 border-blue-100/20 rounded-lg shadow-sm">
      <h2 className="text-2xl text-gray-800 mb-5 font-medium">
        Follow Up List
      </h2>

      <div className="flex justify-between items-center mb-5 flex-wrap md:flex-nowrap">
        <div className="flex items-center gap-2 text-gray-600">
          <span>Show</span>
          <select
            className="border border-gray-300 rounded-md py-1.5 px-2.5 text-sm text-center w-16"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            <option value={7}>7</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex-grow max-w-md mx-0 my-5 md:my-0 md:mx-5">
          <input
            type="text"
            className="w-full py-2.5 px-3 border border-gray-300 rounded-md text-sm bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22/><path d=%22M21 21l-4.35-4.35%22/></svg>')] bg-no-repeat bg-[length:16px_16px] bg-[12px_center] pl-10"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2.5">
          <button
            onClick={handleDelete}
            disabled={selectedIds.length === 0}
            className={`flex items-center py-2 px-3 rounded-md text-sm cursor-pointer border ${
              selectedIds.length > 0
                ? "text-red-600 border-red-600 hover:bg-red-50"
                : "text-gray-400 border-gray-300 cursor-not-allowed"
            }`}
          >
            <RiDeleteBinLine className="mr-1.5 text-base" />
            Delete
          </button>
          <button className="flex items-center py-2 px-3 rounded-md text-sm cursor-pointer border border-gray-300 bg-white hover:bg-gray-50">
            <FaFilter className="mr-1.5 text-base" />
            Filters
          </button>
          <button
            onClick={handleExport}
            className="flex items-center py-2 px-3 rounded-md text-sm cursor-pointer border border-gray-300 bg-white hover:bg-gray-50"
          >
            <FaFileExport className="mr-1.5 text-base" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md shadow-sm">
        <table className="w-full border-collapse border-spacing-0">
          <thead>
            <tr>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 cursor-pointer"
                  onChange={() => {
                    if (selectedIds.length === paginatedData.length) {
                      setSelectedIds([]);
                    } else {
                      setSelectedIds(paginatedData.map((item) => item.id));
                    }
                  }}
                  checked={
                    paginatedData.length > 0 &&
                    selectedIds.length === paginatedData.length
                  }
                />
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Student Name
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Code
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Class
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Screening Result
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Consultant
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Consultation Result
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td className="py-4 px-5 border-b border-gray-200">
                  <input
                    type="checkbox"
                    className="w-4.5 h-4.5 cursor-pointer"
                    onChange={() => handleSelect(item.id)}
                    checked={selectedIds.includes(item.id)}
                  />
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <div className="flex gap-2.5 items-center">
                    <img
                      src={item.avater}
                      alt={item.studentName}
                      className="w-10 h-10 rounded"
                    />
                    <span>{item.studentName}</span>
                  </div>
                </td>
                <td className="py-4 px-5 border-b border-gray-200 text-blue-500">
                  {item.code}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.class}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <a href="#" className="text-blue-500 hover:underline">
                    {item.screeningResult}
                  </a>
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.consultant}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <a href="#" className="text-blue-500 hover:underline">
                    {item.consResult}
                  </a>
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  <div className="flex gap-1.5 justify-center">
                    <button className="flex items-center justify-center w-8 h-8 rounded-md border border-blue-500 bg-white text-blue-500 hover:bg-blue-50">
                      <GrEdit />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 rounded-md border border-blue-500 bg-white text-blue-500 hover:bg-blue-50">
                      <FaRegEye />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 rounded-md border border-red-500 bg-white text-red-500 hover:bg-red-50">
                      <RiDeleteBinLine />
                    </button>
                  </div>
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
}

export default FollowUpList;

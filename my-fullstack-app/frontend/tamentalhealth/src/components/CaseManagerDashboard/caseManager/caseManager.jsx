import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileExport, FaFilter, FaRegEye } from "react-icons/fa";
import { GrEdit, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import profie from "../../../assets/profile.jpg";

const CaseManager = () => {
  const [entries, setEntries] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Male",
    },
    {
      id: 2,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Male",
    },
    {
      id: 3,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 4,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Aron Pierre",
    },
    {
      id: 5,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 6,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 7,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Aron Pierre",
    },
    {
      id: 8,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 9,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Aron Pierre",
    },
    {
      id: 10,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Aron Pierre",
    },
    {
      id: 11,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 12,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Aron Pierre",
    },
    {
      id: 13,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 14,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Male",
      specialty: "Aron Pierre",
    },
    {
      id: 15,
      avater: profie,
      fullName: "Dev Nquizi",
      email: "dev.nquizi@gmail.com",
      phoneNumber: "(+237) 673233092 / 676026603",
      birthDay: "10-05-2000",
      gender: "Female",
      specialty: "Aron Pierre",
    },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);

  // Filtered data
  const filteredData = data.filter(
    (item) =>
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.birthDay.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
      ["fullName,School Name,Class,gender"]
        .concat(
          filteredData.map(
            (item) =>
              `${item.fullName},${item.phoneNumber},${item.class},${item.gender}`
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
          className={`flex items-center justify-center w-9 h-9 border ${
            currentPage === i
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300"
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
    <div className="bg-white rounded-lg border-2 border-blue-100/20 p-5 mx-auto shadow-sm">
      <h2 className="text-2xl text-gray-800 mb-5 font-medium">Case Manager</h2>
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
                Full Name
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Phone Number
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Birthday
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Gender
              </th>
              <th className="bg-gray-50 text-blue-500 text-left py-4 px-5 font-bold border-b border-gray-200">
                Specialty
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
                      alt={item.fullName}
                      className="w-10 h-10 rounded"
                    />
                    <div className="flex flex-col">
                      <span>{item.fullName}</span>
                      <span className="text-blue-500">{item.email}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.phoneNumber}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.birthDay}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.gender}
                </td>
                <td className="py-4 px-5 border-b border-gray-200">
                  {item.specialty}
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
};

export default CaseManager;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassView from "./classPage";

export default function ClassManager() {
  const [activePage, setActivePage] = useState("classView");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [className, setClassName] = useState("");
  const [schools, setSchools] = useState([]);

  // Fetch schools on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schools")
      .then((res) => {
        setSchools(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch schools", err);
      });
  }, []);

  const handleSave = () => {
    if (!selectedSchool || !className) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:8000/api/classrooms/create", {
        school_id: selectedSchool,
        name: className,
      })
      .then((res) => {
        alert("Class saved successfully!");
        setSelectedSchool("");
        setClassName("");
      })
      .catch((err) => {
        console.error("Failed to create class", err);
        alert("Failed to save class. Please try again.");
      });
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between bg-white shadow-md rounded-2xl border-2 border-[#1E74FF26] p-4 mb-6 gap-2.5">
        <button
          className={`p-5 rounded-lg font-semibold w-full transition-all duration-300 ease-in-out ${
            activePage === "classView"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => setActivePage("classView")}
        >
          View All Classes
        </button>
        <button
          className={`p-5 rounded-lg font-semibold w-full transition-all duration-300 ease-in-out ${
            activePage === "createClass"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => setActivePage("createClass")}
        >
          Create a Class
        </button>
      </div>

      {/* Content */}
      {activePage === "createClass" && (
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Add New Class</h2>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Select School
            </label>
            <select
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-600"
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
            >
              <option value="">-- Select School --</option>
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">
              Enter Class
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-600"
              placeholder="Enter class name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white p-5 border-none rounded-lg font-semibold cursor-pointer transition-colors hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}

      {activePage === "classView" && (
        <div>
          <ClassView />
        </div>
      )}
    </div>
  );
}

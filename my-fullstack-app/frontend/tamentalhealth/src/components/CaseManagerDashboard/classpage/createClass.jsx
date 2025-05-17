import React, { useState } from "react";
import ClassView from "./classPage";
import axios from "axios";

export default function ClassManager() {
  const [activePage, setActivePage] = useState("classView");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [className, setClassName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (!selectedSchool || !className) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/classrooms/create", {
        school_id: parseInt(selectedSchool),
        name: className,
      });

      if (response.data.status) {
        alert("Class saved successfully!");
        setSelectedSchool("");
        setClassName("");
        // Optionally refresh the class view
        setActivePage("classView");
      } else {
        setError(
          response.data.errors
            ? Object.values(response.data.errors).join(", ")
            : "Failed to create class"
        );
      }
    } catch (error) {
      setError(
        error.response?.data?.errors
          ? Object.values(error.response.data.errors).join(", ")
          : "An error occurred while creating the class"
      );
    } finally {
      setIsLoading(false);
    }
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

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

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
              <option value="3">Inter Comprehensive High School (ICHS)</option>
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
            className="w-full bg-blue-600 text-white p-5 border-none rounded-lg font-semibold cursor-pointer transition-colors hover:bg-blue-700 disabled:opacity-50"
            onClick={handleSave}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
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

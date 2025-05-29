import React, { useState } from "react";
import CaseManager from "./caseManager";
import axios from "axios";

const CreateManager = () => {
  const [currentPage, setCurrentPage] = useState("view");
  const [error, setError] = useState("");

  const handleSwitchPage = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const raw = Object.fromEntries(formData.entries());
  
    // Rename fields to match backend expectations
    const data = {
      name: raw.fullName,
      email: raw.email,
      contact: raw.phoneNumber,
      gender: raw.gender,
      dob: raw.dob,
      language: raw.language.toLowerCase(),
      marital_status: raw.maritalStatus.toLowerCase(),
      whatsapp_number: raw.whatsappNumber,
      location: raw.location,
      role: raw.role.toLowerCase(),
      password: raw.password,
      working_experience: raw.workingExperience,
    };
  
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/case-managers/add", data);
      console.log("Form Data:", data);
  alert("Case Manager saved! Check console for details.");
  e.target.reset();
  setError(""); // Clear previous errors
} catch (err) {
  const message = err.response?.data?.message || err.message || "Something went wrong";
  setError(message);
}
  };




  return (
    <div className="bg-white rounded-lg border-2 border-blue-100/20 p-5 mx-auto shadow-sm">
      {/* Header */}
      <div className="flex mb-6 border-b border-gray-200">
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            currentPage === "view"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => handleSwitchPage("view")}
        >
          View All Case Managers
        </button>
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            currentPage === "create"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => handleSwitchPage("create")}
        >
          Create a Case Manager
        </button>
      </div>
      {/*}
     error
      {*/}
      {error && (
    <div className="text-center mb-4 px-4 py-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
    {error}
    </div>
    )}

      {/* Content */}
      {currentPage === "view" ? (
        <CaseManager />
      ) : (
        <form className="p-5 bg-white rounded-lg" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Add New Case Manager
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsappNumber"
                placeholder="Enter WhatsApp number"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Date Of Birth
              </label>
              <input
                type="date"
                name="dob"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Language</label>
              <select
                name="language"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Language</option>
                <option value="english">English</option>
                <option value="french">French</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Gender</label>
              <select
                name="gender"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Role</label>
              <select
                name="role"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">
                Working Experience
              </label>
              <input
                type="text"
                name="workingExperience"
                placeholder="Enter working experience"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
          >
            Save Case Manager
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateManager;

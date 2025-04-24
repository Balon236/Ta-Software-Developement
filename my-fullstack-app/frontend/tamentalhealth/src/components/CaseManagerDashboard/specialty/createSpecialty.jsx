import React, { useState } from "react";
import "./createSpecialty.css"; // Import the CSS
import SpecialtyView from "./specialty";

export default function SpecialtyManager() {
  const [activePage, setActivePage] = useState("specialtyView");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [specialtyClass, setSpecialtyClass] = useState("");
  const [specialtyName, setSpecialtyName] = useState("");

  const handleSave = () => {
    if (!selectedSchool || !className) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Saved Specialty:", {
      selectedSchool,
      specialtyClass,
      specialtyName,
    });
    alert("Specialty saved successfully!");
    setSelectedSchool("");
    setSpecialtyName("");
  };

  return (
    <div className="create-specialty-container">
      {/* Header */}
      <div className="specialty-header">
        <button
          className={`specialty-header-button ${
            activePage === "specialtyView" ? "active" : ""
          }`}
          onClick={() => setActivePage("specialtyView")}
        >
          View All Specialties
        </button>
        <button
          className={`specialty-header-button ${
            activePage === "createSpecialty" ? "active" : ""
          }`}
          onClick={() => setActivePage("createSpecialty")}
        >
          Create a Specialty
        </button>
      </div>

      {/* Content */}
      {activePage === "createSpecialty" && (
        <div className="create-specialty-content">
          <h2 className="create-specialty-title">Add New Class</h2>

          <div className="form-group">
            <label className="label">Select School</label>
            <select
              className="input"
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
            >
              <option value="">-- Select School --</option>
              <option value="ICHS">
                Inter Comprehensive High School (ICHS)
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="label">Select Class</label>
            <select
              className="input"
              value={specialtyClass}
              onChange={(e) => setSpecialtyClass(e.target.value)}
            >
              <option value="">-- Select Class --</option>
              <option value="ICHS">
                Inter Comprehensive High School (ICHS)
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="label">Enter Specialty</label>
            <input
              type="text"
              className="input"
              placeholder="Enter class name"
              value={specialtyName}
              onChange={(e) => setSpecialtyName(e.target.value)}
            />
          </div>

          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      )}

      {activePage === "specialtyView" && (
        <div>
          <SpecialtyView />
        </div>
      )}
    </div>
  );
}

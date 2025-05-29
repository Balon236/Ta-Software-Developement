import React, { useState, useEffect } from "react";
import axios from "axios";
import "./createSpecialty.css"; // CSS remains untouched
import SpecialtyView from "./specialty";

export default function SpecialtyManager() {
  const [activePage, setActivePage] = useState("specialtyView");
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [specialtyClass, setSpecialtyClass] = useState("");
  const [specialtyName, setSpecialtyName] = useState("");

  // Fetch all schools on mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schools")
      .then((res) => setSchools(res.data.data))
      .catch((err) => console.error("Failed to fetch schools:", err));
  }, []);

  // Fetch classes when a school is selected
  useEffect(() => {
    if (selectedSchool) {
      axios
        .get(`http://localhost:8000/api/classrooms/by-school/${selectedSchool}`)
        .then((res) => setClasses(res.data.data))
        .catch((err) => console.error("Failed to fetch classes:", err));
    } else {
      setClasses([]);
    }
  }, [selectedSchool]);

  const handleSave = () => {
    if (!selectedSchool || !specialtyClass || !specialtyName) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post("http://localhost:8000/api/specialties/create", {
        classroom_id: specialtyClass,
        name: specialtyName,
      })
      .then(() => {
        alert("Specialty saved successfully!");
        setSelectedSchool("");
        setSpecialtyClass("");
        setSpecialtyName("");
      })
      .catch((error) => {
        console.error("Failed to save specialty:", error);
        alert("Failed to save specialty.");
      });
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
              {schools.map((school) => (
                <option key={school.id} value={school.id}>
                  {school.name}
                </option>
              ))}
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
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
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

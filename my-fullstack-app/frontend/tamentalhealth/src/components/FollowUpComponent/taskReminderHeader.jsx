import React, { useState } from "react";
import TaskReminder from "./ViewTaskReminder";

const AddReminder = () => {
  const [currentPage, setCurrentPage] = useState("view");

  const handleSwitchPage = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    alert("Case Manager saved! Check console for details.");
    e.target.reset();
  };

  return (
    <>
      <div className="creat-case-container">
        {/* Header */}
        <div className="creat-case-header">
          <button
            className={`creat-case-header-btn ${
              currentPage === "view" ? "active" : ""
            }`}
            onClick={() => handleSwitchPage("view")}
          >
            View All Task Reminder
          </button>
          <button
            className={`creat-case-header-btn ${
              currentPage === "createReminder" ? "active" : ""
            }`}
            onClick={() => handleSwitchPage("createReminder")}
          >
            Add New Reminder
          </button>
        </div>

        {/* Content */}
        {currentPage === "view" ? (
          <TaskReminder />
        ) : (
          <div className="reminder-container">
            <h2>Add New Reminder</h2>
            <div className="form-reminder-grid">
              <div>
                <div className="form-group">
                  <label>Task name</label>
                  <select>
                    <option value="">Select task</option>
                    <option value="task1">Task 1</option>
                    <option value="task2">Task 2</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Due date</label>
                  <select>
                    <option value="">Select date</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Priority level</label>
                  <select>
                    <option value="">Select priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select>
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="sevo-btn">Save</button>
            <div className="wave-background"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddReminder;

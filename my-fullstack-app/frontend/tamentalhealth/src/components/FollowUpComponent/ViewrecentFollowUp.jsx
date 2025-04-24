import React from "react";

const ViewRecentFollowUp = () => {
  return (
    <>
      <h2>My Follow-up</h2>
      <div className="follow-up-controls">
        <div className="entries-control">
          <span>Show</span>
          <select className="entries-select">
            <option value="7">07</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>Entries</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ..."
            className="search-input"
          />
        </div>
        <div className="search-filter">
          <button className="filter-btn">Filters</button>
          <button className="export-btn">Export</button>
        </div>
      </div>
      <div className="follow-up-container1">
        <div className="task-input">
          <input type="text" placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
          <div className="description">
            <textarea placeholder="Add Description"></textarea>
          </div>
          <div className="status-buttons">
            <button className="status-btn to-do">To Do</button>
            <button className="status-btn start">Start</button>
            <button className="status-btn due">Due</button>
          </div>
          <div className="add-subtasks">
            <button className="add-subtasks-btn">Add Sub tasks</button>
            <div className="icons">
              <svg viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#999"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <svg viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="#999"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="4"
                  y1="10"
                  x2="20"
                  y2="10"
                  stroke="#999"
                  strokeWidth="2"
                />
              </svg>
              <svg viewBox="0 0 24 24">
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="#999"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="12"
                  y1="4"
                  x2="12"
                  y2="20"
                  stroke="#999"
                  strokeWidth="2"
                />
              </svg>
              <svg viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#999"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="12" cy="12" r="2" fill="#999" />
              </svg>
            </div>
          </div>
        </div>

        <div className="task-details">
          <div className="header-row">
            <span>Status</span>
            <span>Date</span>
            <span>Priority</span>
            <span>Assignees</span>
          </div>
          <input type="text" placeholder="xxxxxx" />
        </div>

        <button className="save-btn">SAVE</button>
      </div>
    </>
  );
};

export default ViewRecentFollowUp;

import React from "react";

const ViewAgenda = () => {
  const tasks = [
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
  ];

  return (
    <div className="agenda-container">
      <div className="header">
        <h2>My Agenda</h2>
      </div>

      <div className="search-filter">
        <div className="entries">
          <span>Show</span>
          <select name="" id="">
            <option value="">07</option>
            <option value="">07</option>
          </select>
          <span>Entries</span>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search results..."
        />
        <div>
          <button className="filter-btn">Filters</button>
          <button className="export-btn">Export</button>
        </div>
      </div>

      <div className="recent-content">
        <div className="agenda-table">
          <h3>Today's Agenda</h3>
          <div className="agenda-table-div">
            <div className="table-header">
              <span>Topic</span>
              <span>Description</span>
              <span>Duration</span>
            </div>
            {tasks.map((task, index) => (
              <div className="table-row" key={index}>
                <span>
                  <input type="checkbox" /> {task.topic}
                </span>
                <span>{task.description}</span>
                <span>{task.duration}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="session-overview">
          <div className="session-overView-dark"></div>
          <h3>Overview of today's session</h3>
          <div className="session-overview-div">
            <button className="duration-btn">Duration</button>
            <div className="completion-options">
              <label>
                <input type="checkbox" /> Mark as complete
              </label>
              <label>
                <input type="checkbox" /> Mark as complete
              </label>
              <label>
                <input type="checkbox" /> Mark as complete
              </label>
              <label>
                <input type="checkbox" /> Mark as complete
              </label>{" "}
              <label>
                <input type="checkbox" /> Mark as complete
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="cta">
        <div>
          <span>A call for action (CTA)</span>
          <div className="cta-toggle"></div>
        </div>
      </div>
      <div className="pagination">
        <button>Previous</button>
        <button className="active">1</button>
        <button>2</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ViewAgenda;

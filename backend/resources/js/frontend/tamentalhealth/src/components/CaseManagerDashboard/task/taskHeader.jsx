import React, { useState } from "react";
import ViewTAsk from "./viewAllTask";
import CreateTask from "./createTask";
import AssignTask from "./assignTask";
import ViewAssignTask from "./ViewAssignTask";

function TaskHeader() {
  const [activePage, setActivePage] = useState("ViewTAsk");

  const renderPage = () => {
    switch (activePage) {
      case "ViewTAsk":
        return <ViewTAsk />;
      case "CreateTask":
        return <CreateTask />;
      case "AssignTask":
        return <AssignTask />;
      case "Assignment":
        return <ViewAssignTask />;
      default:
        return <ViewTAsk />;
    }
  };

  return (
    <>
      <div className="follow-up-header">
        <button
          className={activePage === "ViewTAsk" ? "active" : ""}
          onClick={() => setActivePage("ViewTAsk")}
        >
          View All TAsk
        </button>
        <button
          className={activePage === "CreateTask" ? "active" : ""}
          onClick={() => setActivePage("CreateTask")}
        >
          Create Task
        </button>
        <button
          className={activePage === "AssignTask" ? "active" : ""}
          onClick={() => setActivePage("AssignTask")}
        >
          Assign Task
        </button>
        <button
          className={activePage === "Assignment" ? "active" : ""}
          onClick={() => setActivePage("Assignment")}
        >
          View Assign Task Assignment
        </button>
      </div>
      {renderPage()}
    </>
  );
}

export default TaskHeader;

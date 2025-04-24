import React, { useState } from "react";

export default function AssignTask() {
  const [selectTask, setSelectTask] = useState("");
  const [selectManager, setSelectManager] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSave = () => {
    if (!selectManager || !messageContent) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Saved Message:", {
      selectTask,
      selectManager,
      messageContent,
    });
    alert("Message saved successfully!");
    setSelectTask();
    setSelectManager("");
    setMessageContent("");
  };

  return (
    <div className="create-message-container">
      <div className="create-message-content">
        <h2 className="create-message-title">Assign New Task</h2>
        <div className="form-group">
          <label className="label">Select Task</label>
          <select
            className="input"
            value={selectTask}
            onChange={(e) => setSelectTask(e.target.value)}
          >
            <option value=""> Select Task</option>
            <option value="ICHS">Front End Development</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Select School</label>
          <select
            className="input"
            value={selectManager}
            onChange={(e) => setSelectManager(e.target.value)}
          >
            <option value=""> Select Manager</option>
            <option value="ICHS">Dev Nquizi</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Leave Description</label>
          <textarea
            type="text"
            className="input"
            placeholder="Description goes here"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
        </div>

        <button className="save-button" onClick={handleSave}>
          Assign Tasks
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./index.css";
export default function createTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSave = () => {
    if (!selectManager || !messageContent) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Saved Message:", {
      selectManager,
      taskDescription,
      messageContent,
    });
    alert("Message saved successfully!");
    setSelectManager("");
    setMessageContent("");
  };

  return (
    <div className="create-message-container">
      <div className="create-message-content">
        <h2 className="create-message-title">Add New Task</h2>
        <div className="form-group">
          <label className="label">Task Name</label>

          <input
            type="text"
            name="date"
            className="create-task-input"
            placeholder="Enter task name"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </div>
        <div className="form-group">
          <label className="label">Task Name</label>

          <input
            type="text"
            className="create-task-input"
            name="date"
            placeholder="Enter text explaination"
            onChange={(e) => setTaskDescription(e.target.value)}
            value={taskDescription}
          />
        </div>
        <div className="form-group">
          <label className="label">Enter message</label>
          <textarea
            type="text"
            className="input"
            placeholder="Enter Message"
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
          />
        </div>

        <button className="save-button" onClick={handleSave}>
          Create Task
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSave = () => {
    if (!taskName || !taskDescription || !messageContent) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Task Created:", {
      taskName,
      taskDescription,
      messageContent,
    });
    alert("Task created successfully!");
    setTaskName("");
    setTaskDescription("");
    setMessageContent("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Task Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Task Description
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter task description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Additional Details
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[120px]"
              placeholder="Enter additional details"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}

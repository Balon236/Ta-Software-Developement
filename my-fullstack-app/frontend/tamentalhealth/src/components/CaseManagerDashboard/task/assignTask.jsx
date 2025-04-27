import React, { useState } from "react";

export default function AssignTask() {
  const [selectTask, setSelectTask] = useState("");
  const [selectManager, setSelectManager] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSave = () => {
    if (!selectTask || !selectManager) {
      alert("Please select both task and manager");
      return;
    }
    console.log("Task Assigned:", {
      selectTask,
      selectManager,
      messageContent,
    });
    alert("Task assigned successfully!");
    setSelectTask("");
    setSelectManager("");
    setMessageContent("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Assign New Task
        </h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Task
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={selectTask}
              onChange={(e) => setSelectTask(e.target.value)}
            >
              <option value="">Select Task</option>
              <option value="Front End Development">
                Front End Development
              </option>
              <option value="Back End Development">Back End Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Select Manager
            </label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={selectManager}
              onChange={(e) => setSelectManager(e.target.value)}
            >
              <option value="">Select Manager</option>
              <option value="Dev Nquizi">Dev Nquizi</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Task Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition min-h-[120px]"
              placeholder="Enter task description"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Assign Task
          </button>
        </div>
      </div>
    </div>
  );
}

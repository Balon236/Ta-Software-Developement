import React, { useState } from "react";
import axios from "axios";

export default function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSave = async () => {
    if (!taskName || !taskDescription || !messageContent) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/task/create", {
        name: taskName,
        description: taskDescription,
        explanation: messageContent,
      });

      if (response.status === 201 || response.status === 200) {
        setSuccess("✅ Task created successfully!");
        setError("");
        setTaskName("");
        setTaskDescription("");
        setMessageContent("");
      } else {
        setError("⚠️ Failed to create task. Try again.");
        setSuccess("");
      }
    } catch (err) {
      console.error("Error saving task:", err.response?.data || err.message);
      setError("❌ Error creating task. Check console for details.");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-center">
          {error}
        </div>
      )}
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

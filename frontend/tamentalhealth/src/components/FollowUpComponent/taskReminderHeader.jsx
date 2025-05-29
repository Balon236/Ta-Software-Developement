import React, { useState, useEffect } from "react";
import TaskReminder from "./ViewTaskReminder";
import axios from "axios";

const AddReminder = () => {
  const [currentPage, setCurrentPage] = useState("view");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks assigned to manager ID 1
    axios
      .get("http://localhost:8000/api/task/all?manager_id=1")
      .then((response) => {
        setTasks(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, []);

  const handleSwitchPage = (page) => {
    setCurrentPage(page);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Prepare reminder data
    const reminderData = {
       task_id: data.task_id,
      due_date: data.dueDate === "today"
        ? new Date().toISOString().split("T")[0]
        : new Date(Date.now() + 86400000).toISOString().split("T")[0],
      priority: data.priorityLevel,
      status: data.status,
    };
   console.log(reminderData)
    axios
      .post("http://localhost:8000/api/reminder/create", reminderData)
      .then((res) => {
        alert("Reminder saved!");
        e.target.reset();
      })
      .catch((err) => {
        console.error("Error saving reminder:", err);
        alert("Error saving reminder");
      });
  };

  return (
    <div className="w-full mx-auto">
      {/* Header Buttons */}
      <div className="flex mb-6 bg-white shadow-md rounded-2xl border-2 border-blue-100 p-4 gap-2.5">
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            currentPage === "view"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => handleSwitchPage("view")}
        >
          View All Task Reminder
        </button>
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            currentPage === "createReminder"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
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
        <div className="bg-white rounded-2xl border-2 border-blue-100 p-8 shadow-md">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Add New Reminder
          </h2>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            {/* Task Name */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700">
                Task name
              </label>
              <div className="relative">
                <select
                  name="task_id"
                  className="w-full p-3 border-2 border-blue-100 rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select task</option>
                  {tasks.map((task) => (
                    <option key={task.id} value={task.id}>
                      {task.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Due Date */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700">
                Due date
              </label>
              <div className="relative">
                <select
                  name="dueDate"
                  className="w-full p-3 border-2 border-blue-100 rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select date</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Priority Level */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700">
                Priority level
              </label>
              <div className="relative">
                <select
                  name="priorityLevel"
                  className="w-full p-3 border-2 border-blue-100 rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <label className="block text-xl font-medium text-gray-700">
                Status
              </label>
              <div className="relative">
                <select
                  name="status"
                  className="w-full p-3 border-2 border-blue-100 rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select status</option>
                  <option value="not done">Pending</option>
                  
                  
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddReminder;

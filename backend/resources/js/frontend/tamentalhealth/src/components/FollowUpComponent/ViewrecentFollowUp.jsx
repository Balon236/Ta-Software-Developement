import React from "react";
import { FaCalendarAlt, FaUserCircle, FaClock } from "react-icons/fa";

const ViewRecentFollowUp = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">
          Recent Follow up
        </h1>
        <p className="text-gray-500">Welcome Back Racheal, we missed you!</p>
      </div>

      {/* Controls Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">My Follow-up</h2>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <select className="border rounded-md px-2 py-1">
              <option>07</option>
              <option>10</option>
            </select>
            <span className="text-gray-600">Entries</span>
          </div>

          <div className="flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search referals..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Filters
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-white rounded-lg border-2 border-blue-100 p-6">
        {/* Student Name Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Follow up: Name of the Student
          </label>
          <input
            type="text"
            placeholder="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            className="w-full p-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Description Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Add Description
          </label>
          <textarea
            placeholder="Add Description"
            className="w-full p-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500 min-h-[100px]"
          ></textarea>
        </div>

        {/* Status and Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Status 2/9
            </label>
            <div className="flex rounded-lg overflow-hidden border-2 border-blue-100">
              <div className="bg-gray-400 text-white px-4 py-2 flex-grow text-center">
                To Do
              </div>
              <div className="bg-green-400 w-1/4"></div>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Start"
                className="w-full p-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Due"
                className="w-full p-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Assignees */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Assignees
            </label>
            <input
              type="text"
              className="w-full p-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Time Estimate */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Time Estimate
            </label>
            <input
              type="text"
              className="w-full p-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Add Sub Tasks Button */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-6">
          Add Sub tasks
        </button>

        {/* Sub Tasks Table */}
        <div className="mb-6">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-gray-400"></div>
              <span className="font-medium">Status</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              <span className="font-medium">Date</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-400"></div>
              <span className="font-medium">Priority</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-gray-400" />
              <span className="font-medium">Assignees</span>
            </div>
          </div>

          <input
            type="text"
            placeholder="xxxxxx"
            className="w-full p-3 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500 mb-6"
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors">
          SAVE
        </button>
      </div>
    </div>
  );
};

export default ViewRecentFollowUp;

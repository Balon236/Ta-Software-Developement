import React from "react";
import {
  FaVideo,
  FaUsers,
  FaUserFriends,
  FaTasks,
  FaBell,
  FaClipboardList,
} from "react-icons/fa";

const FollowUpBoard = () => {
  return (
    <div className="p-6 w-full">
      {/* Stats Cards */}
      <div className="bg-blue-500 p-4 rounded-xl  mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Recent Task</p>
              <p className="text-2xl font-bold">30</p>
            </div>
            <FaClipboardList className="text-2xl text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Priority</p>
              <p className="text-2xl font-bold">20</p>
            </div>
            <FaTasks className="text-2xl text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Follow up</p>
              <p className="text-2xl font-bold">20</p>
            </div>
            <FaUsers className="text-2xl text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Priority</p>
              <p className="text-2xl font-bold">20</p>
            </div>
            <FaBell className="text-2xl text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Task Reminder</p>
              <p className="text-2xl font-bold">20</p>
            </div>
            <FaBell className="text-2xl text-blue-500" />
          </div>

          <div className="bg-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Recent Task</p>
              <p className="text-2xl font-bold">20</p>
            </div>
            <FaClipboardList className="text-2xl text-blue-500" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - 3 parts */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Follow-ups */}
          <div className="bg-white rounded-lg p-4 border-blue-300 border-2 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recents Follow up</h3>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium">
                      Follow-up
                    </th>
                    <th className="p-2 text-left text-sm font-medium">Name</th>
                    <th className="p-2 text-left text-sm font-medium">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 text-sm">data</td>
                    <td className="p-2 text-sm">data</td>
                    <td className="p-2 text-sm">data</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-sm">data</td>
                    <td className="p-2 text-sm">data</td>
                    <td className="p-2 text-sm">data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* High Priority */}
          <div className="bg-white rounded-lg p-4 border-2 border-blue-300 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">High priority</h3>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-500">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      ID
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Client Name
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Date
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      CTA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 text-sm">1</td>
                    <td className="p-2 text-sm">Floar</td>
                    <td className="p-2 text-sm">20.4.25</td>
                    <td className="p-2 text-sm"></td>
                  </tr>
                  <tr>
                    <td className="p-2 text-sm">2</td>
                    <td className="p-2 text-sm">Dora</td>
                    <td className="p-2 text-sm">25.4.25</td>
                    <td className="p-2 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Agenda */}
          <div className="bg-white rounded-lg p-4 border-2 border-blue-300 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Agenda</h3>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Mar 18,Tue</p>
              <div className="flex gap-2">
                <button className="p-1">&lt;</button>
                <button className="p-1">&gt;</button>
              </div>
              <p className="text-gray-600">Today</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaVideo className="text-2xl text-blue-500" />
              </div>
              <p className="text-sm text-gray-500 text-center mb-4">
                Agenda items from your calendars will show here. Learn more
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Calendar
              </button>
            </div>
          </div>

          {/* Low Priority */}
          <div className="bg-white rounded-lg p-4 border-2 border-blue-300 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Low priority</h3>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-500">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      ID
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Client Name
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Date
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      CTA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 text-sm">1</td>
                    <td className="p-2 text-sm">Floar</td>
                    <td className="p-2 text-sm">20.4.25</td>
                    <td className="p-2 text-sm"></td>
                  </tr>
                  <tr>
                    <td className="p-2 text-sm">2</td>
                    <td className="p-2 text-sm">Dora</td>
                    <td className="p-2 text-sm">25.4.25</td>
                    <td className="p-2 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* My Students View */}
          <div className="bg-white rounded-lg p-4 border-blue-300 border-2 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">My Students View</h3>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-500">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Name
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Class
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 text-sm flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <FaUserFriends className="text-blue-500 text-xs" />
                          </div>
                          Laurencia Ikome Nalowa
                        </td>
                        <td className="p-2 text-sm">Form{index + 1}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Student in Process */}
          <div className="bg-white rounded-lg p-4 border-blue-300 border-2 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Student in process</h3>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-500">
                  <tr>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Name
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Class
                    </th>
                    <th className="p-2 text-left text-sm font-medium text-white">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 text-sm">John</td>
                    <td className="p-2 text-sm">Form1</td>
                    <td className="p-2 text-sm">50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 text-sm">Mary</td>
                    <td className="p-2 text-sm">Form5</td>
                    <td className="p-2 text-sm">60%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 text-sm">Flora</td>
                    <td className="p-2 text-sm">Form4</td>
                    <td className="p-2 text-sm">20%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 text-sm">Peter</td>
                    <td className="p-2 text-sm">LSS</td>
                    <td className="p-2 text-sm">90%</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-sm">Claire</td>
                    <td className="p-2 text-sm">USS</td>
                    <td className="p-2 text-sm">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Finished Follow-ups */}
          <div className="bg-white rounded-lg p-4 border-2 border-blue-300 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              Finished Follow up Students
            </h3>
            <div className="space-y-3">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded"
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUserFriends className="text-blue-500 text-xs" />
                    </div>
                    <span className="text-sm">Laurencia Ikome Nalowa</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Reminders */}
          <div className="bg-white rounded-lg p-4 border-blue-300 border-2 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Reminders to my task</h3>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Recent Task</h4>
              <p className="text-sm">⚠️ Task Reminder: Follow-up with Dora</p>
            </div>
            <div>
              <p className="text-sm mb-1">
                📝 Task: Check-in on Dora's progress
              </p>
              <p className="text-sm mb-1">📅 Due Date: March 20, 2025</p>
              <p className="text-sm mb-1">⏰ Time: 10:00 AM</p>
              <p className="text-sm mb-1 text-red-500">⚡ Priority: High</p>
              <p className="text-sm mb-1">
                🔔 Reminder Type: Scheduled Follow-up Call
              </p>
              <p className="text-sm">⏳ Status: Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpBoard;

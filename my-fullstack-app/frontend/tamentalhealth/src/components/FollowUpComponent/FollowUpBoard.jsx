import React from "react";

const FollowUpBoard = () => {
  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-sm">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-gray-600 text-sm mb-2">Recent Task</span>
          <span className="text-2xl font-bold text-primary">30</span>
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mt-8 -mr-8"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-gray-600 text-sm mb-2">Total Priority</span>
          <span className="text-2xl font-bold text-primary">20</span>
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mt-8 -mr-8"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-gray-600 text-sm mb-2">Follow up</span>
          <span className="text-2xl font-bold text-primary">20</span>
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mt-8 -mr-8"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-gray-600 text-sm mb-2">Total Task</span>
          <span className="text-2xl font-bold text-primary">20</span>
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mt-8 -mr-8"></div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
          <span className="text-gray-600 text-sm mb-2">Recent Task</span>
          <span className="text-2xl font-bold text-primary">20</span>
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mt-8 -mr-8"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Follow-ups */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Recents Follow up
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      FOLLOW -UP
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      NAME
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">data</td>
                    <td className="px-3 py-2 text-sm text-gray-600">data</td>
                    <td className="px-3 py-2 text-sm text-gray-600">data</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-gray-600">data</td>
                    <td className="px-3 py-2 text-sm text-gray-600">data</td>
                    <td className="px-3 py-2 text-sm text-gray-600">data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* High Priority */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              High priority
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      ID
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      Client Name
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      Date
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      CTA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">1</td>
                    <td className="px-3 py-2 text-sm text-gray-600">Floar</td>
                    <td className="px-3 py-2 text-sm text-gray-600">20.4.25</td>
                    <td className="px-3 py-2 text-sm text-gray-600"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-gray-600">2</td>
                    <td className="px-3 py-2 text-sm text-gray-600">Dora</td>
                    <td className="px-3 py-2 text-sm text-gray-600">25.4.25</td>
                    <td className="px-3 py-2 text-sm text-gray-600"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Agenda */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">Agenda</h3>
            <p className="text-gray-600 mb-2 italic">Mar 18, Tue</p>
            <p className="text-gray-500 mb-4 text-sm">
              Agenda items from your calendars will show here. Learn more
            </p>
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
              Add Calendar
            </button>
          </div>

          {/* Low Priority */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Low priority
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      ID
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      Client Name
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      Date
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      CTA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">1</td>
                    <td className="px-3 py-2 text-sm text-gray-600">Floar</td>
                    <td className="px-3 py-2 text-sm text-gray-600">20.4.25</td>
                    <td className="px-3 py-2 text-sm text-gray-600"></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-gray-600">2</td>
                    <td className="px-3 py-2 text-sm text-gray-600">Dora</td>
                    <td className="px-3 py-2 text-sm text-gray-600">25.4.25</td>
                    <td className="px-3 py-2 text-sm text-gray-600"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* My Students View */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              My Students View
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      NAME
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      CLASS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">
                      Laurencia Ikome Nalowa
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">
                      Laurencia Ikome Nalowa
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM5</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">
                      Laurencia Ikome Nalowa
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM2</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">
                      Laurencia Ikome Nalowa
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM1</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-gray-600">
                      Laurencia Ikome Nalowa
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Student in Process */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Student in process
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      NAME
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      CLASS
                    </th>
                    <th className="px-3 py-2 text-sm font-medium text-left text-gray-600">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">John</td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM1</td>
                    <td className="px-3 py-2 text-sm text-gray-600">50%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">Mary</td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM5</td>
                    <td className="px-3 py-2 text-sm text-gray-600">60%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">Floar</td>
                    <td className="px-3 py-2 text-sm text-gray-600">FORM4</td>
                    <td className="px-3 py-2 text-sm text-gray-600">20%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-3 py-2 text-sm text-gray-600">PETER</td>
                    <td className="px-3 py-2 text-sm text-gray-600">LSS</td>
                    <td className="px-3 py-2 text-sm text-gray-600">90%</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm text-gray-600">Claire</td>
                    <td className="px-3 py-2 text-sm text-gray-600">USS</td>
                    <td className="px-3 py-2 text-sm text-gray-600">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          {/* Finished Follow-ups */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Finished Follow up Students
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="py-2 border-b border-gray-100 text-gray-600">
                Laurencia Ikome Nalowa
              </li>
              <li className="py-2 border-b border-gray-100 text-gray-600">
                Laurencia Ikome Nalowa
              </li>
              <li className="py-2 border-b border-gray-100 text-gray-600">
                Laurencia Ikome Nalowa
              </li>
              <li className="py-2 border-b border-gray-100 text-gray-600">
                Laurencia Ikome Nalowa
              </li>
              <li className="py-2 text-gray-600">Laurencia Ikome Nalowa</li>
            </ul>
          </div>

          {/* Reminders */}
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Reminders to my task
            </h3>
            <ul className="list-none p-0 m-0">
              <li className="py-3 border-b border-gray-100">
                <strong className="block text-gray-700 mb-1">
                  Recent Task
                </strong>
                <span className="text-sm text-gray-600 block">
                  Task Reminder: Follow-up with Dora
                </span>
              </li>
              <li className="py-3">
                <strong className="block text-gray-700 mb-1">
                  Task Check-in on Dora's progress
                </strong>
                <span className="text-sm text-gray-600 block">
                  Due Date: March 20, 2025
                </span>
                <span className="text-sm text-gray-600 block">
                  Time: 10:00 AM
                </span>
                <span className="text-sm text-red-500 font-medium block">
                  Priority: High
                </span>
                <span className="text-sm text-gray-600 block">
                  Reminder Type: Scheduled Follow-up
                </span>
                <span className="text-sm text-gray-600 block">
                  Status: Pending
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpBoard;

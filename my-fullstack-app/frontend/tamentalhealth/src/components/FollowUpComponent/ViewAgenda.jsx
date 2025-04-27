import React from "react";

const ViewAgenda = () => {
  const tasks = [
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
    { topic: "Task 1", description: "Read a book", duration: "2 Hours" },
  ];

  return (
    <div className="p-6 w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-0.5 md:grid-cols-3 gap-10 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Show</span>
          <select className="border rounded-md px-3 py-1.5 bg-white">
            <option value="07">07</option>
            <option value="14">14</option>
          </select>
          <span className="text-gray-600">Entries</span>
        </div>

        <div className=" ">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Search details..."
          />
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            Filters
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-0.5 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 bg-white rounded-lg h-fit border-2 border-blue-300 shadow-sm">
          <h3 className="text-xl font-semibold p-4 border-b">Today's Agenda</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-600">
                    Topic
                  </th>
                  <th className="text-left p-4 font-medium text-gray-600">
                    Description
                  </th>
                  <th className="text-left p-4 font-medium text-gray-600">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span>{task.topic}</span>
                      </label>
                    </td>
                    <td className="p-4">{task.description}</td>
                    <td className="p-4">{task.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white  rounded-lg mt-3 md:mt-[20rem] border-2 border-blue-300 shadow-sm">
          <div className="h-8 bg-gray-700 rounded-t-lg"></div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-4">
              Overview of today's session
            </h3>
            <button className="w-full py-2 px-4 bg-white border rounded-md mb-4 text-center">
              Duration
            </button>
            <div className="space-y-3">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Mark as complete</span>
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-0.5 md:grid-cols-3 gap-10">
        <div className="flex items-center gap-3">
          <span className="text-gray-600">A call for action (CTA)</span>
          <div className="w-12 h-6 bg-red-500 rounded-full"></div>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-md bg-blue-500 text-white">
            1
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            3
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAgenda;

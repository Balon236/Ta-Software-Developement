import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassroomManager = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [schoolId, setSchoolId] = useState('');
  const [className, setClassName] = useState('');
  const [classroomId, setClassroomId] = useState('');
  const [managerId, setManagerId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');

  const api = 'http://127.0.0.1:8000/api/classrooms';

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const fetchClassrooms = async () => {
    try {
      const response = await axios.get(`${api}/view`);
      setClassrooms(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createClassroom = async () => {
    try {
      await axios.post(`${api}/create`, {
        school_id: schoolId,
        name: className,
      });
      setMessage('Classroom created successfully.');
      setSchoolId('');
      setClassName('');
      fetchClassrooms();
    } catch (error) {
      console.error(error);
      setMessage('Failed to create classroom.');
    }
  };

  const assignManager = async () => {
    try {
      await axios.post(`${api}/assign-manager`, {
        classroom_id: classroomId,
        manager_id: managerId,
      });
      setMessage('Manager assigned successfully.');
      setClassroomId('');
      setManagerId('');
      fetchClassrooms();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];
        setMessage(firstError);
      } else {
        setMessage('Failed to assign manager.');
      }
    }
  };

  const removeManager = async (id) => {
    try {
      await axios.post(`${api}/remove-manager`, {
        classroom_id: id,
      });
      setMessage('Manager removed successfully.');
      fetchClassrooms();
    } catch (error) {
      console.error(error);
      setMessage('Failed to remove manager.');
    }
  };

  const deleteClassroom = async (id) => {
    try {
      await axios.post(`${api}/delete`, {
        classroom_id: id,
      });
      setMessage('Classroom deleted successfully.');
      fetchClassrooms();
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete classroom.');
    }
  };

  const searchClassrooms = async () => {
    try {
      if (!searchQuery) {
        fetchClassrooms(); // If empty, load all
        return;
      }
      const response = await axios.get(`${api}/search?query=${searchQuery}`);
      setClassrooms(response.data.data);
    } catch (error) {
      console.error(error);
      setMessage('Failed to search classrooms.');
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Classroom Manager</h1>

      {message && <div className="mb-4 text-green-600">{message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Create Class */}
        <div className="border p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Create Classroom</h2>
          <input
            type="text"
            placeholder="School ID"
            value={schoolId}
            onChange={(e) => setSchoolId(e.target.value)}
            className="border p-2 w-full rounded mb-4"
          />
          <input
            type="text"
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="border p-2 w-full rounded mb-4"
          />
          <button
            onClick={createClassroom}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Create Class
          </button>
        </div>

        {/* Assign Manager */}
        <div className="border p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Assign Manager to Classroom</h2>
          <input
            type="text"
            placeholder="Classroom ID"
            value={classroomId}
            onChange={(e) => setClassroomId(e.target.value)}
            className="border p-2 w-full rounded mb-4"
          />
          <input
            type="text"
            placeholder="Manager ID"
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
            className="border p-2 w-full rounded mb-4"
          />
          <button
            onClick={assignManager}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            Assign Manager
          </button>
        </div>
      </div>

      {/* Search Class */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Search Classrooms</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by Class Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button
            onClick={searchClassrooms}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* List of Classrooms */}
      <div className="border p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Classrooms List</h2>
        <div className="space-y-4">
          {classrooms.map((classroom) => (
            <div
              key={classroom.class_id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <p><span className="font-semibold">Class:</span> {classroom.class_name}</p>
                <p><span className="font-semibold">School:</span> {classroom.school_name}</p>
                <p><span className="font-semibold">Country:</span> {classroom.country_name}</p>
                <p><span className="font-semibold">Manager:</span> {classroom.manager_name}</p>
              </div>
              <div className="space-x-2">
                {classroom.manager_name !== "No Manager Assigned" && (
                  <button
                    onClick={() => removeManager(classroom.class_id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Remove Manager
                  </button>
                )}
                <button
                  onClick={() => deleteClassroom(classroom.class_id)}
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                >
                  Delete Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassroomManager;

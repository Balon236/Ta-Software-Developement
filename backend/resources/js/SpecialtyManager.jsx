import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpecialtyManager = () => {
  const [specialties, setSpecialties] = useState([]);
  const [classroomId, setClassroomId] = useState('');
  const [specialtyName, setSpecialtyName] = useState('');
  const [specialtyId, setSpecialtyId] = useState('');
  const [managerId, setManagerId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');

  const api = 'http://127.0.0.1:8000/api/specialties';

  useEffect(() => {
    fetchSpecialties();
  }, []);

  const fetchSpecialties = async () => {
    try {
      const response = await axios.get(`${api}/view`);
      setSpecialties(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createSpecialty = async () => {
    try {
      await axios.post(`${api}/create`, {
        classroom_id: classroomId,
        name: specialtyName,
      });
      setMessage('Specialty created successfully.');
      setClassroomId('');
      setSpecialtyName('');
      fetchSpecialties();
    } catch (error) {
      console.error(error);
      setMessage('Failed to create specialty.');
    }
  };

  const assignManager = async () => {
    try {
      await axios.post(`${api}/assign-manager`, {
        specialty_id: specialtyId,
        manager_id: managerId,
      });
      setMessage('Manager assigned successfully.');
      setSpecialtyId('');
      setManagerId('');
      fetchSpecialties();
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
        specialty_id: id,
      });
      setMessage('Manager removed successfully.');
      fetchSpecialties();
    } catch (error) {
      console.error(error);
      setMessage('Failed to remove manager.');
    }
  };

  const deleteSpecialty = async (id) => {
    try {
      await axios.post(`${api}/delete`, {
        specialty_id: id,
      });
      setMessage('Specialty deleted successfully.');
      fetchSpecialties();
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete specialty.');
    }
  };

  const searchSpecialties = async () => {
    try {
      if (!searchQuery) {
        fetchSpecialties(); // Load all if search is empty
        return;
      }
      const response = await axios.get(`${api}/search?query=${searchQuery}`);
      setSpecialties(response.data.data);
    } catch (error) {
      console.error(error);
      setMessage('Failed to search specialties.');
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Specialty Manager</h1>

      {message && <div className="mb-4 text-green-600">{message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Create Specialty */}
        <div className="border p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Create Specialty</h2>
          <input
            type="text"
            placeholder="Classroom ID"
            value={classroomId}
            onChange={(e) => setClassroomId(e.target.value)}
            className="border p-2 w-full rounded mb-4"
          />
          <input
            type="text"
            placeholder="Specialty Name"
            value={specialtyName}
            onChange={(e) => setSpecialtyName(e.target.value)}
            className="border p-2 w-full rounded mb-4"
          />
          <button
            onClick={createSpecialty}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Create Specialty
          </button>
        </div>

        {/* Assign Manager */}
        <div className="border p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Assign Manager to Specialty</h2>
          <input
            type="text"
            placeholder="Specialty ID"
            value={specialtyId}
            onChange={(e) => setSpecialtyId(e.target.value)}
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

      {/* Search Specialties */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Search Specialties</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by Specialty Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button
            onClick={searchSpecialties}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* List of Specialties */}
      <div className="border p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Specialties List</h2>
        <div className="space-y-4">
          {specialties.map((specialty) => (
            <div
              key={specialty.specialty_id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <p><span className="font-semibold">Specialty:</span> {specialty.specialty_name}</p>
                <p><span className="font-semibold">Classroom:</span> {specialty.classroom_name}</p>
                <p><span className="font-semibold">School:</span> {specialty.school_name}</p>
                <p><span className="font-semibold">Country:</span> {specialty.country_name}</p>
                <p><span className="font-semibold">Manager:</span> {specialty.manager_name}</p>
              </div>
              <div className="space-x-2">
                {specialty.manager_name !== "No Manager Assigned" && (
                  <button
                    onClick={() => removeManager(specialty.specialty_id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Remove Manager
                  </button>
                )}
                <button
                  onClick={() => deleteSpecialty(specialty.specialty_id)}
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                >
                  Delete Specialty
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyManager;

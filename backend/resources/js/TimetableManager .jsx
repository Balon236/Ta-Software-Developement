import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimetableManager = () => {
  const [specialtyId, setSpecialtyId] = useState(''); // For loading
  const [formSpecialtyId, setFormSpecialtyId] = useState(''); // For form usage
  const [timetables, setTimetables] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [editingTimetableId, setEditingTimetableId] = useState(null);
  const [message, setMessage] = useState('');

  const api = 'http://127.0.0.1:8000/api/timetables';

  useEffect(() => {
    if (specialtyId) {
      fetchTimetables();
    }
  }, [specialtyId]);

  const fetchTimetables = async () => {
    try {
      const response = await axios.post(`${api}/view`, {
        specialty_id: specialtyId,
      });
      setTimetables(response.data.data);
    } catch (error) {
      console.error(error);
      setMessage('Failed to load timetables.');
    }
  };

  const createTimetable = async () => {
    try {
      await axios.post(`${api}/create`, {
        specialty_id: formSpecialtyId,
        title,
        date,
        start_time: startTime,
        end_time: endTime,
        type,
        description,
      });
      setMessage('Timetable created successfully.');
      clearForm();
      fetchTimetables();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];
        setMessage(firstError);
      } else {
        setMessage('Failed to create timetable.');
      }
    }
  };

  const updateTimetable = async () => {
    try {
      await axios.post(`${api}/update`, {
        timetable_id: editingTimetableId,
        title,
        date,
        start_time: startTime,
        end_time: endTime,
        type,
        description,
      });
      setMessage('Timetable updated successfully.');
      clearForm();
      fetchTimetables();
      setEditingTimetableId(null);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];
        setMessage(firstError);
      } else {
        setMessage('Failed to update timetable.');
      }
    }
  };

  const deleteTimetable = async (id) => {
    try {
      await axios.post(`${api}/delete`, {
        timetable_id: id,
      });
      setMessage('Timetable deleted successfully.');
      fetchTimetables();
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete timetable.');
    }
  };

  const startEditTimetable = (timetable) => {
    setEditingTimetableId(timetable.id);
    setFormSpecialtyId(specialtyId); // Lock specialty ID
  
    setTitle(timetable.title);
    setDate(timetable.date);
  
    // ✅ Only take hours and minutes
    setStartTime(timetable.start_time.slice(0, 5));
    setEndTime(timetable.end_time.slice(0, 5));
  
    setType(timetable.type);
    setDescription(timetable.description);
  };
  

  const clearForm = () => {
    setFormSpecialtyId('');
    setTitle('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setType('');
    setDescription('');
    setEditingTimetableId(null);
    // ⚡ DO NOT clear the main specialtyId used for viewing
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Timetable Manager</h1>

      {message && <div className="mb-4 text-green-600">{message}</div>}

      {/* Specialty loader */}
      <div className="border p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">Load Timetables by Specialty ID</h2>
        <input
          type="text"
          placeholder="Enter Specialty ID"
          value={specialtyId}
          onChange={(e) => setSpecialtyId(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <button
          onClick={fetchTimetables}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          Load Timetables
        </button>
      </div>

      {/* Form for Create/Edit */}
      <div className="border p-6 rounded-xl shadow-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">{editingTimetableId ? 'Edit Timetable' : 'Create Timetable'}</h2>

        <input
          type="text"
          placeholder="Specialty ID"
          value={formSpecialtyId}
          onChange={(e) => setFormSpecialtyId(e.target.value)}
          className="border p-2 w-full rounded mb-4"
          disabled={editingTimetableId !== null} // Lock during edit
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full rounded mb-4"
        ></textarea>

        <button
          onClick={editingTimetableId ? updateTimetable : createTimetable}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          {editingTimetableId ? 'Update Timetable' : 'Create Timetable'}
        </button>
      </div>

      {/* Timetables List */}
      <div className="border p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6">Timetables List</h2>
        {timetables.length === 0 ? (
          <p>No timetables found.</p>
        ) : (
          <div className="space-y-4">
            {timetables.map((timetable) => (
              <div key={timetable.id} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <p><span className="font-semibold">Title:</span> {timetable.title}</p>
                  <p><span className="font-semibold">Date:</span> {timetable.date}</p>
                  <p><span className="font-semibold">Start:</span> {timetable.start_time}</p>
                  <p><span className="font-semibold">End:</span> {timetable.end_time}</p>
                  <p><span className="font-semibold">Type:</span> {timetable.type}</p>
                  <p><span className="font-semibold">Description:</span> {timetable.description}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => startEditTimetable(timetable)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTimetable(timetable.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimetableManager;

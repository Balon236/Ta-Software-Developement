import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScreenRecordManager = () => {
  const API = 'http://127.0.0.1:8000/api/screen-records';

  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [editingRecord, setEditingRecord] = useState(null);
  const [editingComment, setEditingComment] = useState('');

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await axios.get(API);
      setRecords(response.data.data); // because it's paginated
    } catch (error) {
      console.error('Failed to fetch records:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setMessage('Record deleted.');
      fetchRecords();
    } catch (err) {
      console.error(err);
      setMessage('Delete failed.');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${API}/${editingRecord.id}`, {
        comment: editingComment,
      });
      setMessage('Record updated.');
      setEditingRecord(null);
      setEditingComment('');
      fetchRecords();
    } catch (err) {
      console.error(err);
      setMessage('Update failed.');
    }
  };

  const filteredRecords = records.filter((rec) =>
    rec.client?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Screen Records</h2>

      {message && <div className="mb-4 text-green-600">{message}</div>}

      <input
        type="text"
        placeholder="Filter by student name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 w-full rounded mb-6"
      />

      {filteredRecords.length === 0 ? (
        <p>No records found.</p>
      ) : (
        filteredRecords.map((record) => (
          <div
            key={record.id}
            className="border rounded p-4 mb-4 shadow flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="mb-2 md:mb-0">
              <p><strong>Name:</strong> {record.client?.name || 'N/A'}</p>
              <p><strong>Class:</strong> {record.client?.classroom?.name || 'N/A'}</p>
              <p><strong>School:</strong> {record.client?.classroom?.school?.name || 'N/A'}</p>
              <p><strong>Comment:</strong> {record.comment || '—'}</p>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => {
                  setEditingRecord(record);
                  setEditingComment(record.comment || '');
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(record.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {editingRecord && (
        <div className="border rounded p-4 mt-6 bg-gray-100 shadow">
          <h3 className="text-lg font-semibold mb-2">Update Record Comment</h3>
          <textarea
            value={editingComment}
            onChange={(e) => setEditingComment(e.target.value)}
            className="border p-2 rounded w-full mb-4"
            rows="3"
            placeholder="Enter comment..."
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Save
          </button>
          <button
            onClick={() => {
              setEditingRecord(null);
              setEditingComment('');
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ScreenRecordManager;

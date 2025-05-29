import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScreeningForm = () => {
  const API_URL = 'http://127.0.0.1:8000/api';

  const [userId, setUserId] = useState('');
  const [screenRecordId, setScreenRecordId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [responses, setResponses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (screenRecordId) {
      fetchQuestions();
    }
    fetchResponses(); // always show all blocks
  }, [screenRecordId]);

  const createScreenRecord = async () => {
    try {
      const res = await axios.post(`${API_URL}/screen-records`, {
        client_id: userId,
      });
      setScreenRecordId(res.data.id);
      setMessage('Screen record created. You may begin answering.');
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || 'Failed to create screen record.');
    }
  };

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(`${API_URL}/questions?range=9-10`);
      setQuestions(res.data);
    } catch (err) {
      console.error('Failed to load questions', err);
    }
  };

  const fetchResponses = async () => {
    try {
      const res = await axios.get(`${API_URL}/screening-responses`);
      setResponses(res.data.data); // grouped structure
    } catch (err) {
      console.error('Failed to load responses', err);
    }
  };

  const handleInputChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const submitAnswers = async () => {
    setMessage('');
    try {
      for (const [questionId, answer] of Object.entries(answers)) {
        await axios.post(`${API_URL}/screening-responses`, {
          screen_record_id: screenRecordId,
          question_id: parseInt(questionId),
          answer,
        });
      }
      setMessage('Responses submitted successfully.');
      setAnswers({});
      fetchResponses();
    } catch (err) {
      console.error(err);
      setMessage('Submission failed.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-xl font-bold">Student Screening</h2>

      {message && <div className="text-green-600">{message}</div>}

      {!screenRecordId && (
        <div className="border p-4 rounded shadow">
          <label className="block font-medium mb-2">Enter Student (User) ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border p-2 rounded w-full mb-4"
            placeholder="User ID (client)"
          />
          <button
            onClick={createScreenRecord}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Start Screening
          </button>
        </div>
      )}

      {screenRecordId && (
        <>
          <h3 className="text-lg font-semibold">Answer Questions</h3>
          {questions.map((q) => (
            <div key={q.id} className="border-b pb-4">
              <label className="block font-medium mb-1">
                {q.number}. {q.question_text}
              </label>
              <input
                type="text"
                value={answers[q.id] || ''}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Enter your answer"
              />
            </div>
          ))}
          <button
            onClick={submitAnswers}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
          >
            Submit Answers
          </button>
        </>
      )}

      {/* Grouped Submitted Responses */}
      <h2 className="text-xl font-bold mt-10">All Submitted Responses</h2>
      {responses.length === 0 ? (
        <p>No responses yet.</p>
      ) : (
        responses.map((block) => (
          <div
            key={block.screen_record_id}
            className="border rounded p-4 mb-6 bg-gray-50 shadow"
          >
            <h3 className="text-lg font-semibold mb-2">
              {block.client_name} ({block.client_code})
            </h3>
            <p><strong>School:</strong> {block.school}</p>
            <p><strong>Class:</strong> {block.classroom}</p>

            <div className="mt-4 space-y-4">
              {block.responses.map((res) => (
                <div key={res.id} className="border rounded p-3 bg-white">
                  <p><strong>Q:</strong> {res.question}</p>
                  <p><strong>Answer:</strong> {res.answer}</p>
                  <p><strong>Comment:</strong> {res.comment || '—'}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ScreeningForm;

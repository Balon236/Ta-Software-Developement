import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt, FaUserCircle, FaClock } from "react-icons/fa";

const ViewRecentFollowUp = () => {
  const [referrals, setReferrals] = useState([]);
  const [filteredReferrals, setFilteredReferrals] = useState([]);
  const [selectedReferral, setSelectedReferral] = useState(null);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    description: "",
    start_date: "",
    due_date: "",
    assignees: "",
    time_estimate: "",
    priority: "low",
    summary: "",
  });

  // Fetch all referrals once on load
  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/referrals", {
          params: { manager_id: 1 },
        });
        setReferrals(response.data.data);
        console.log(referrals)
        setFilteredReferrals(response.data.data);
      } catch (error) {
        console.error("Failed to fetch referrals:", error);
      }
    };
    fetchReferrals();
  }, []);

  // Filter referrals based on search input
  useEffect(() => {
    const filtered = referrals.filter((ref) =>
      ref.client_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredReferrals(filtered);
  }, [search, referrals]);

  const handleSelectReferral = (referral) => {
    setSelectedReferral(referral);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!selectedReferral) return alert("Please select a student first.");
    try {
      await axios.post("http://localhost:8000/api/followup/add", {
        client_id: selectedReferral.client_id,
        ...formData,
      });
      alert("Follow-up saved successfully.");
    } catch (error) {
  if (error.response && error.response.status === 422) {
    console.error("Validation error:", error.response.data.errors);
    alert("Validation error. Please check the input fields.");
  } else {
    console.error("Failed to save follow-up:", error);
    alert("Failed to save follow-up.");
  }
}
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">
          Recent Follow up
        </h1>
        <p className="text-gray-500">Welcome Back Racheal, we missed you!</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">My Follow-up</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-2xl">
            <input
              type="text"
              placeholder="Search referrals..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {filteredReferrals.length > 0 && (
              <ul className="bg-white shadow border mt-2 rounded-md max-h-40 overflow-auto">
                {filteredReferrals.map((ref) => (
                  <li
                    key={ref.referral_id}
                    onClick={() => handleSelectReferral(ref)}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                  >
                    {ref.client_name} - {ref.school}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border-2 border-blue-100 p-6">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Follow up: Name of the Student
          </label>
          <input
            type="text"
            value={selectedReferral?.client_name || ""}
            disabled
            className="w-full p-3 border-2 border-blue-100 rounded-lg bg-gray-100"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Add Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add Description"
            className="w-full p-3 border-2 border-blue-100 rounded-lg min-h-[100px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full p-2 border-2 border-blue-100 rounded-lg"
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>

          <div className="flex gap-2">
  <div className="w-1/2">
    <input
      type="date"
      name="start_date"
      value={formData.start_date}
      onChange={handleChange}
      className="w-full p-2 border-2 border-blue-100 rounded-lg"
    />
  </div>
  <div className="w-1/2">
    <input
      type="date"
      name="due_date"
      value={formData.due_date}
      onChange={handleChange}
      className="w-full p-2 border-2 border-blue-100 rounded-lg"
    />
  </div>
</div>



          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Assignees
            </label>
            <input
              type="text"
              name="assignees"
              value={formData.assignees}
              onChange={handleChange}
              className="w-full p-2 border-2 border-blue-100 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Time Estimate
            </label>
            <input
              type="text"
              name="time_estimate"
              value={formData.time_estimate}
              onChange={handleChange}
              className="w-full p-2 border-2 border-blue-100 rounded-lg"
            />
          </div>
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-6">
          Add Sub tasks
        </button>

        <div className="mb-6">
          <input
            type="text"
            placeholder="xxxxxx"
            className="w-full p-3 border-2 border-blue-100 rounded-lg mb-6"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default ViewRecentFollowUp;

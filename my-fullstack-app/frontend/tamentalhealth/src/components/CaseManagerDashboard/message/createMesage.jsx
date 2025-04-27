import React, { useState } from "react";
import MessageView from "./messageView";

export default function CreaeteMessage() {
  const [activePage, setActivePage] = useState("messageView");
  const [selectManager, setSelectManager] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSave = () => {
    if (!selectManager || !messageContent) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Saved Message:", {
      selectManager,
      messageContent,
    });
    alert("Message saved successfully!");
    setSelectManager("");
    setMessageContent("");
  };

  return (
    <div className=" p-5 shadow-sm">
      {/* Header */}
      <div className="flex mb-6 bg-white shadow-md rounded-2xl border-2 border-[#1E74FF26]  p-4 gap-2.5">
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            activePage === "messageView"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => setActivePage("messageView")}
        >
          View All Messages
        </button>
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            activePage === "createmessage"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => setActivePage("createmessage")}
        >
          Create New Message
        </button>
      </div>

      {/* Content */}
      {activePage === "createmessage" && (
        <div className="bg-white p-6 rounded-lg border-2 border-[#1E74FF26] shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send New Message
          </h2>

          <div className="mb-5 p-2">
            <label className="block text-gray-700 font-medium mb-2">
              Select School
            </label>
            <select
              className="w-full px-4 h-[60px] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectManager}
              onChange={(e) => setSelectManager(e.target.value)}
            >
              <option value=""> Select Manager</option>
              <option value="ICHS">
                Inter Comprehensive High School (ICHS)
              </option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Enter message
            </label>
            <textarea
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
              placeholder="Enter Message"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium transition-colors"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      )}

      {activePage === "messageView" && (
        <div>
          <MessageView />
        </div>
      )}
    </div>
  );
}

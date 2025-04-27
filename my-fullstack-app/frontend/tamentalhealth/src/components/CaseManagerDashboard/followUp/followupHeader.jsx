import React, { useState } from "react";
import FollowUp from "./followUpList";
import FollowUpMechanism from "./followMechanism";
import FollowUpProgress from "./followUpProgress";
import ReportOnFollowUp from "./followUpReport";

function FollowUpHeader() {
  const [activePage, setActivePage] = useState("FollowUp");

  const renderPage = () => {
    switch (activePage) {
      case "FollowUp":
        return <FollowUp />;
      case "FollowUpMechanism":
        return <FollowUpMechanism />;
      case "FollowUpProgress":
        return <FollowUpProgress />;
      case "ReportOnFollowUp":
        return <ReportOnFollowUp />;
      default:
        return <FollowUpProgress />;
    }
  };

  return (
    <div>
      <>
        <div className="flex justify-between bg-white shadow-md rounded-2xl border-2 border-[#1E74FF26] p-4 mb-6 gap-2.5">
          <button
            className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
              activePage === "FollowUp"
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setActivePage("FollowUp")}
          >
            Follow Up
          </button>
          <button
            className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
              activePage === "FollowUpMechanism"
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setActivePage("FollowUpMechanism")}
          >
            Follow Up Mechanism
          </button>
          <button
            className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
              activePage === "FollowUpProgress"
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setActivePage("FollowUpProgress")}
          >
            Follow Up Progress
          </button>
          <button
            className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
              activePage === "ReportOnFollowUp"
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-blue-100"
            }`}
            onClick={() => setActivePage("ReportOnFollowUp")}
          >
            Report On Follow Up
          </button>
        </div>
        {renderPage()}
      </>
    </div>
  );
}

export default FollowUpHeader;

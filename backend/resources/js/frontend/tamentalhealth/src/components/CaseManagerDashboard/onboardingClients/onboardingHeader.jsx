import React, { useState } from "react";
import OnboardingForm from "./OnboardingClients";
import ViewOnboardClients from "./viewOnboardClients";
import OnboardingPage2 from "./onboardingpage2";

export default function OnboardingHeader() {
  const [activePage, setActivePage] = useState("On-Boarding-client");
  const [currentPage, setCurrentPage] = useState("form");

  const handleFormSubmit = () => {
    setCurrentPage("page2");
  };

  return (
    <div className=" mx-auto p-4 md:p-6 ">
      {/* Header */}

      <div className="flex mb-6 bg-white shadow-md rounded-2xl border-2 border-blue-100  p-4 gap-2.5">
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            activePage === "On-Boarding-client"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => setActivePage("On-Boarding-client")}
        >
          On-Boarding Clients
        </button>
        <button
          className={`flex-1 p-3 rounded-lg border-none cursor-pointer text-base transition-colors ${
            activePage === "On-Boarding"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => {
            setActivePage("On-Boarding");
            setCurrentPage("form");
          }}
        >
          Add On-Boarding Client
        </button>
      </div>
      {activePage === "On-Boarding" && (
        <div className="bg-white rounded-xl shadow-sm border-2 border-blue-100/20 p-5">
          {currentPage === "form" && (
            <OnboardingForm onSubmit={handleFormSubmit} />
          )}
          {currentPage === "page2" && <OnboardingPage2 />}
        </div>
      )}

      {activePage === "On-Boarding-client" && (
        <div>
          <ViewOnboardClients />
        </div>
      )}
    </div>
  );
}

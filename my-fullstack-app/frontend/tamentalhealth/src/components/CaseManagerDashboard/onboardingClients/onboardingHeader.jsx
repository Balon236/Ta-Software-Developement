import React, { useState } from "react";
import OnboardingForm from "./OnboardingClients";
import ViewOnboardClients from "./viewOnboardClients";
import OnboardingPage2 from "./onboardingpage2";

export default function OnboardingHeader() {
  const [activePage, setActivePage] = useState("On-Boarding-client");
  const [currentPage, setCurrentPage] = useState("form"); // 'form' or 'page2'

  const handleFormSubmit = () => {
    setCurrentPage("page2");
  };

  return (
    <div className="create-message-container">
      {/* Header */}
      <div className="message-header">
        <button
          className={`message-header-button ${
            activePage === "On-Boarding-client" ? "active" : ""
          }`}
          onClick={() => setActivePage("On-Boarding-client")}
        >
          On-Boarding Clients
        </button>
        <button
          className={`message-header-button ${
            activePage === "On-Boarding" ? "active" : ""
          }`}
          onClick={() => {
            setActivePage("On-Boarding");
            setCurrentPage("form"); // Reset to form when switching tabs
          }}
        >
          Add On-Boarding Client
        </button>
      </div>

      {activePage === "On-Boarding" && (
        <div>
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

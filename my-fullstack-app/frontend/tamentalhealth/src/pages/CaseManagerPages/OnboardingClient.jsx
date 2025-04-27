import React from "react";
import { FaRegBell, FaChevronDown } from "react-icons/fa";
import userAvater from "../../assets/profile.jpg";
import OnboardingHeader from "../../components/CaseManagerDashboard/onboardingClients/onboardingHeader";
const OnboardingClient = () => {
  return (
    <div className="main-content p-4 w-full sm:p-5 md:p-8 overflow-x-hidden">
      <div className="header-sec">
        {/* Header */}
        <header className="flex justify-between items-center mt-8 md:mt-0 mb-4 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1e74ff] m-0">
              On-Boarded Clients
            </h1>
            <p className="mt-1 text-[#1e74ff] text-base">
              View All On-boarding clients add more here
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-xl text-[#1e74ff] cursor-pointer">
              <FaRegBell />
            </div>
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img
                src={userAvater}
                alt="Racheal Ndip"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#1e74ff]"
              />
              <div>
                <h3 className="m-0 text-sm font-medium">Racheal Ndip</h3>
                <p className="m-0 text-xs text-gray-500">Manager</p>
              </div>
              <FaChevronDown className="text-xs text-gray-500" />
            </div>
          </div>
        </header>
      </div>
      <div className="w-full overflow-x-hidden">
        <div className="main-container w-full">
          <OnboardingHeader />
        </div>
      </div>
    </div>
  );
};

export default OnboardingClient;

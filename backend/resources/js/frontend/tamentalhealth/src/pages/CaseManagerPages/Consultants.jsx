import React from "react";
import { FaChevronDown, FaRegBell } from "react-icons/fa";
import userAvater from "../../assets/profile.jpg";
import ViewConsultant from "../../components/CaseManagerDashboard/viewConsultance/viewConsultant";

const Consultants = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 bg-background overflow-x-auto">
      <div className="mb-6">
        {/* Header */}
        <header className="flex justify-between items-center mt-8 md:mt-0 mb-4 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1e74ff] m-0">
              Consultants
            </h1>
            <p className="mt-1 text-[#1e74ff] text-base">
              View All Consultants
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
      <div className="flex flex-col lg:flex-row gap-5 overflow-y-auto max-h-[80vh]">
        <div className="w-full bg-white rounded-lg shadow-sm">
          <ViewConsultant />
        </div>
      </div>
    </div>
  );
};

export default Consultants;

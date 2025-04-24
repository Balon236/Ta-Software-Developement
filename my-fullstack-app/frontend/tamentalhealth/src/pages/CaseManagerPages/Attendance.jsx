import React from "react";
import { FaRegBell } from "react-icons/fa";
import userAvater from "../../assets/profile.jpg";
import AttendanceView from "../../components/CaseManagerDashboard/attendance/attendance";

const Attendance = () => {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 bg-background overflow-x-auto">
      <div className="mb-6">
        <header className="flex flex-wrap justify-between items-center mb-6">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h1 className="m-0 text-primary text-2xl md:text-3xl lg:text-4xl font-bold">
              Attendance
            </h1>
            <p className="mt-1 text-primary">View All Attendance</p>
          </div>
          <div className="flex items-center gap-4 md:gap-5 w-full sm:w-auto justify-end">
            <div className="text-xl text-primary cursor-pointer">
              <FaRegBell />
            </div>
            <div className="flex items-center gap-2 md:gap-2.5">
              <img
                src={userAvater}
                alt="Racheal Ndip"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="m-0 text-sm font-medium">Dev Nquizi</h3>
                <p className="m-0 text-xs text-gray-500">Manager</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="w-full">
        <div className="w-full bg-white rounded-lg shadow-sm">
          <AttendanceView />
        </div>
      </div>
    </div>
  );
};

export default Attendance;

import React, { useState } from "react";
import RecentOnboard from "../../components/CaseManagerDashboard/recentOnboard/RecentOnboard";
import RecentReferred from "../../components/CaseManagerDashboard/recentRefered/recentRefered";
import TopConsultants from "../../components/CaseManagerDashboard/topConsultants/topConsultants";
import WeightChart from "../../components/CaseManagerDashboard/charts/weightChart";
import BodyMassChart from "../../components/CaseManagerDashboard/charts/bodyMassChart";
import { FaRegBell, FaChevronDown } from "react-icons/fa";
import userAvater from "../../assets/profile.jpg";
import logoImage from "../../assets/onboard.png";
import attendance from "../../assets/attendance.png";
import referred from "../../assets/referred.png";

const CaseManagerDashboard = () => {
  const [selectedYear, setSelectedYear] = useState("This Year");

  // Stats data
  const statsData = [
    { title: "Total Class", value: 23, logo: attendance },
    { title: "Total Specialties", value: 23, logo: logoImage },
    { title: "Total Consultants", value: 23, logo: logoImage },
    { title: "Total Consulted Clients", value: 23, logo: logoImage },
  ];

  // Stats data
  const statsData2 = [
    { title: "On-Boarded Clients", value: 50, logo: logoImage },
    { title: "Total Case Managers", value: 23, logo: referred },
    { title: "Referred Clients", value: 23, logo: referred },
    { title: "Overall Attendance", value: "23%", logo: attendance },
  ];

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Main Content */}
      <div className="flex-1 p-5 bg-[#f7f9fc] overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mt-8 md:mt-0 mb-4 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1e74ff] m-0">
              Dashboard
            </h1>
            <p className="mt-1 text-[#1e74ff] text-base">
              Welcome Back Racheal, we missed you!
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

        {/* Content area */}
        <div className="flex flex-col lg:flex-row gap-5 overflow-y-auto max-h-[90vh]">
          {/* Main column */}
          <div className="flex-3 flex flex-col gap-5">
            {/* School Info Card */}
            <div className="bg-[#1e74ff] text-white rounded-lg p-6 flex justify-between shadow-md">
              <div>
                <h2 className="text-xl md:text-2xl font-bold m-0 mb-4">
                  INTER COMPREHENSIVE HIGH SCHOOL (ICHS)
                </h2>
                <p className="my-1 opacity-90 text-base">
                  Secondary School - Private School
                </p>
                <p className="my-1 opacity-90 text-base">
                  P.O BOX 12891 Great Soppo, Buea
                </p>
              </div>
              <div
                className="w-24 h-24 md:w-30 md:h-30 bg-white/10 rounded-lg bg-center bg-no-repeat bg-[length:60%_60%]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' opacity='0.3'%3E%3Cpath d='M12 3L1 9l11 6 9-4.91V17h2V9L12 3z'/%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            {/* Stats grid - first row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-8">
              {statsData.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  logo={stat.logo}
                />
              ))}
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <RecentReferred />
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <RecentOnboard />
              </div>
            </div>

            {/* Weight Chart */}
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <WeightChart
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            </div>
          </div>

          {/* Side column */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Stats cards */}
            {statsData2.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                logo={stat.logo}
              />
            ))}

            {/* Top Consultants */}
            <div className="bg-[#e6f0ff] rounded-lg p-2 shadow-sm">
              <TopConsultants />
            </div>

            {/* Body Mass Chart */}
            <div className="bg-[#f2f2f2] rounded-lg p-4 shadow-sm">
              <BodyMassChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card component
const StatCard = ({ title, value, logo }) => {
  return (
    <div className="bg-white rounded-lg p-5 flex justify-between  items-center shadow-sm">
      <div>
        <h3 className="text-sm md:text-base text-gray-500 font-medium m-0 mb-2.5">
          {title}
        </h3>
        <p className="text-xl md:text-2xl font-bold text-gray-800 m-0">
          {value}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-10 h-10   relative">
          <div className="absolute w-8 h-8   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={logo}
              alt={`${title} icon`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseManagerDashboard;

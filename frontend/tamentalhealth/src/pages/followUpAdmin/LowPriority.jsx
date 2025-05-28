import React from "react";
import { FaRegBell } from "react-icons/fa";
import userAvater from "../../assets/profile.jpg";
import ViewLowPriority from "../../components/FollowUpComponent/ViewLowPriority";
const LowPriority = () => {
  return (
    <div className="main-content p-4 w-full sm:p-5 md:p-8 overflow-x-hidden">
      <div className="header-sec">
        <header className="flex flex-wrap justify-between items-center mb-[30px]">
          <div className="header-title">
            <h1 className="m-0 text-[#1E74FF] text-[30px] md:text-[40px] font-bold">
              LOW PRIORITY
            </h1>
            <p className="mt-[5px] text-[#1E74FF]">
              Welcome Back Racheal, we missed you!
            </p>
          </div>
          <div className="user-profile flex items-center gap-5">
            <div className="notifications text-[20px] text-[#1a73e8]">
              <span className="notification-icon">
                <FaRegBell />
              </span>
            </div>
            <div className="profile flex items-center gap-[10px]">
              <img
                src={userAvater}
                alt="Racheal Ndip"
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="profile-info">
                <h3 className="m-0 text-[14px]">Dev Nquizi</h3>
                <p className="m-0 text-[12px] text-[#666]">Manager</p>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="w-full overflow-x-hidden">
        <div className="main-container w-full">
          <ViewLowPriority />
        </div>
      </div>
    </div>
  );
};

export default LowPriority;

import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard, MdAccountBox, MdLogout } from "react-icons/md";
import logo from "../../../assets/logo.png";
import { FaSignalMessenger, FaBlog } from "react-icons/fa6";

// Reusable NavItem component
const NavItem = ({ to, icon: Icon, label, exact }) => (
  <NavLink
    to={to}
    end={exact}
    className={({ isActive }) =>
      `rounded-md transition-colors ${
        isActive
          ? "bg-blue-200 text-primary border-l-6 border-blue-600"
          : "text-gray-400 hover:bg-primary/20"
      }`
    }
  >
    {({ isActive }) => (
      <div className="flex items-center p-2 gap-2.5 cursor-pointer">
        <div
          className={`p-2 rounded-md ${
            isActive
              ? "bg-blue-500 text-white"
              : "!bg-transparent !text-gray-600"
          }`}
        >
          <Icon className={isActive ? "text-white" : "text-gray-600"} />
        </div>
        <span className="flex items-center">{label}</span>
      </div>
    )}
  </NavLink>
);

const FollowUpSidebar = () => {
  const navigate = useNavigate();

  // Menu items data structure for better maintainability
  const menuItems = [
    {
      to: "/follow-up-dashboard",
      icon: MdDashboard,
      label: "Dashboard",
      exact: true,
    },
    {
      to: "/follow-up-dashboard/recent-task",
      icon: FaSignalMessenger,
      label: "Recent Task",
    },
    {
      to: "/follow-up-dashboard/agenda",
      icon: FaBlog,
      label: "Agenda",
    },
    {
      to: "/follow-up-dashboard/student-view",
      icon: MdAccountBox,
      label: "My Students View",
    },
    {
      to: "/follow-up-dashboard/high-priority",
      icon: MdAccountBox,
      label: "High Priority Student",
    },
    {
      to: "/follow-up-dashboard/low-priority",
      icon: MdAccountBox,
      label: "Low Priority Student",
    },
    {
      to: "/follow-up-dashboard/student-progress",
      icon: MdAccountBox,
      label: "Student Inprocess",
    },
    {
      to: "/follow-up-dashboard/finished-follow-up",
      icon: MdAccountBox,
      label: "Finished Follow Up Student",
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here, for example:
    // logout();
    navigate("/login");
  };

  return (
    <div className="border-4 border-white rounded-lg w-[250px] transition duration-300 ease-linear">
      <div className="flex flex-col">
        <div className="p-4">
          <img src={logo} alt="TA Global Mental Health" className="w-40" />
        </div>

        <div className="flex flex-col gap-2.5 transition duration-200 px-2 py-4 overflow-y-auto max-h-[70vh]">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              to={item.to}
              icon={item.icon}
              label={item.label}
              exact={item.exact}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2.5 px-2 py-4">
          <div className="flex items-center p-2 bg-red-100 rounded-md">
            <button
              onClick={handleLogout}
              className="flex items-center gap-5 border-none bg-transparent text-red-500"
            >
              <div className="p-2 rounded-md !bg-transparent !text-gray-600">
                <MdLogout className="text-red-500" />
              </div>
              <span className="flex items-center">Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpSidebar;

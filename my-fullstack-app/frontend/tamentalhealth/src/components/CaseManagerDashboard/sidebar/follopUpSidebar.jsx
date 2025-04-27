import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdAccountBox,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";
import logo from "../../../assets/logo.png";
import { FaSignalMessenger, FaBlog } from "react-icons/fa6";

// Reusable NavItem component
const NavItem = ({ to, icon: Icon, label, exact, onClick }) => (
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
    onClick={onClick}
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      to: "/follow-up-dashboard/task-reminder",
      icon: MdAccountBox,
      label: "  Reminders to my task",
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here, for example:
    // logout();
    navigate("/login");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-500 text-white md:hidden"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative border-4 border-white rounded-lg w-[250px] transition-all duration-300 ease-linear z-50
          ${
            isMobile
              ? isMobileMenuOpen
                ? "left-0"
                : "-left-[250px]"
              : "left-0"
          }`}
      >
        <div className="flex flex-col h-screen bg-white">
          <div className="p-4">
            <img src={logo} alt="TA Global Mental Health" className="w-40" />
          </div>

          <div className="flex flex-col gap-2.5 transition duration-200 px-2 py-4 overflow-y-auto flex-grow">
            {menuItems.map((item, index) => (
              <NavItem
                key={index}
                to={item.to}
                icon={item.icon}
                label={item.label}
                exact={item.exact}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              />
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-2.5 px-2 py-4">
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
    </>
  );
};

export default FollowUpSidebar;

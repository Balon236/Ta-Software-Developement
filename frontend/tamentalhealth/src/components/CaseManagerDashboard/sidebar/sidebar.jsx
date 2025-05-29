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

const LeftSidebar = () => {
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
      to: "/case-manager-dashboard",
      icon: MdDashboard,
      label: "Dashboard",
      exact: true,
    },
    {
      to: "/case-manager-dashboard/onboarding",
      icon: FaSignalMessenger,
      label: "Onboarding Clients",
    },
    {
      to: "/case-manager-dashboard/attendance",
      icon: FaBlog,
      label: "View Attendance",
    },
    {
      to: "/case-manager-dashboard/create-class",
      icon: MdAccountBox,
      label: "Create Class",
    },
    {
      to: "/case-manager-dashboard/specialty",
      icon: MdAccountBox,
      label: "Manage Specialty",
    },
    {
      to: "/case-manager-dashboard/case-manager",
      icon: MdAccountBox,
      label: "Case Manager",
    },
    {
      to: "/case-manager-dashboard/referred-clients",
      icon: MdAccountBox,
      label: "Referred Clients",
    },
    { to: "/case-manager-dashboard/task", icon: MdAccountBox, label: "Task" },
    {
      to: "/case-manager-dashboard/mild-severity",
      icon: MdAccountBox,
      label: "Mild Severity",
    },
    {
      to: "/case-manager-dashboard/critical-sevierity",
      icon: MdAccountBox,
      label: "Critical Severity",
    },
    {
      to: "/case-manager-dashboard/high-severity",
      icon: MdAccountBox,
      label: "High Severity",
    },
    {
      to: "/case-manager-dashboard/moderate-severity",
      icon: MdAccountBox,
      label: "Moderate Severity",
    },
    {
      to: "/case-manager-dashboard/view-consultant",
      icon: MdAccountBox,
      label: "View Consultant",
    },
    {
      to: "/case-manager-dashboard/messages",
      icon: MdAccountBox,
      label: "Messages",
    },
    {
      to: "/case-manager-dashboard/file-uploads",
      icon: MdAccountBox,
      label: "File Uploads",
    },
    {
      to: "/case-manager-dashboard/my-progress",
      icon: MdAccountBox,
      label: "My Progress",
    },
    {
      to: "/case-manager-dashboard/follow-up",
      icon: MdAccountBox,
      label: "Follow Up",
    },
    {
      to: "/case-manager-dashboard/Consult-result",
      icon: MdAccountBox,
      label: "Consultation Result",
    },
    {
      to: "/case-manager-dashboard/report",
      icon: MdAccountBox,
      label: "Report",
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
          className="fixed inset-0  bg-black/50 z-40 md:hidden"
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
                <span className="flex items-center">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;

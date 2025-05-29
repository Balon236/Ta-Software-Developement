import { Outlet } from "react-router-dom";
import React from "react";
import LeftSidebar from "../../components/CaseManagerDashboard/sidebar/sidebar";

function DashboardPages() {
  return (
    <div className="dashboard-container flex min-h-screen bg-gray-50 font-sans">
      <div className="sidebar-wrapper">
        <LeftSidebar />
      </div>
      <Outlet />
    </div>
  );
}

export default DashboardPages;

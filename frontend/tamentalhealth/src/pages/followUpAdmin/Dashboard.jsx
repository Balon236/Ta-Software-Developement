import { Outlet } from "react-router-dom";
import React from "react";
import FollowSidebar from "../../components/CaseManagerDashboard/sidebar/follopUpSidebar";

function FollowDashboardPages() {
  return (
    <div className="dashboard-container flex min-h-screen bg-gray-50 font-sans">
      <div className="sidebar-wrapper">
        <FollowSidebar />
      </div>
      <Outlet />
    </div>
  );
}

export default FollowDashboardPages;

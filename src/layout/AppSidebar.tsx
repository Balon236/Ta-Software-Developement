import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

// Assume these icons are imported from an icon library

  import {
  GridIcon,
  CalendarIcon,
  UserCircleIcon,
  UsersIcon,
  ClipboardListIcon,
  SchoolIcon,
  PlusCircleIcon,
  TimerIcon,
  PersonStandingIcon,
  BarChartIcon,
  HeartPulseIcon,
  FileTextIcon,
  BookOpenIcon,
  LogOutIcon,
} from "lucide-react";

import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;

};

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Profile",
    path: "/client/profile",
  },
  {
    icon: <UserCircleIcon />,
    name: "Case Managers Details",
    path: "/client/caseManagers",
  },
  {
    icon: <CalendarIcon />,
    name: "Scheduling Results",
    path: "/client/schedulingResults",
  },
  {
    icon: <UsersIcon />,
    name: "Report on Trauma Screen",
    path: "/client/traumaReports",
  },
  {
    icon: <ClipboardListIcon />,
    name: "Consultation Reports",
    path: "/client/consultationReports",
  },
  {
    icon: <SchoolIcon />,
    name: "Time Table",
    path: "/client/timetable",
  },
  {
    icon: <GridIcon />,
    name: "Attendance",
    path: "/client/attendance",
  },
  {
    icon: <PlusCircleIcon />,
    name: "Follow-up Plan",
    path: "/client/followupPlan",
  },
  {
    icon: <TimerIcon />,
    name: "Follow-up Progress",
    path: "/client/followupProgress",
  },
  {
    icon: <PersonStandingIcon />,
    name: "Report on Follow-up",
    path: "/client/followupReport",
  },
  {
    icon: <BarChartIcon />,
    name: "Weight Statistics",
    path: "/client/weightStats",
  },
  {
    icon: <HeartPulseIcon />,
    name: "Body Mass Index",
    path: "/client/bmi",
  },
  {
    icon: <FileTextIcon />,
    name: "General Report",
    path: "/client/generalReport",
  },
  {
    icon: <BookOpenIcon />,
    name: "Medical Booklets",
    path: "/client/medicalBooklets",
  },
  {
    icon: <LogOutIcon />,
    name: "Logout",
    path: "/logout",
  },
];









const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  // const isActive = (path: string) => location.pathname === path;
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );




  const renderMenuItems = (items: NavItem[]) => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => (
        <li key={nav.name}>
         
              <Link
              key={`nav-${index}`}
                to={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }  ${
                  nav.path=='/logout' ? "text-red-500": ""
                }` }
              >
                <span
                  className={`menu-item-icon-size ${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }  ${
                  nav.path=='/logout' ? "text-red-500": ""
                }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
              </Link>
          
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      className={`fixed md:mx-2 flex lg:rounded-md flex-col lg:my-2 top-0  left-0  bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-[98%] transition-all duration-300 ease-in-out z-50 border border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[250px]"
            : isHovered
            ? "w-[250px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-4 mx-4 border-b-2 border-gray-300 flex${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/" className="flex justify-center">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <img
                className="dark:hidden"
                src="/images/logo/top.png"
                alt="Logo"
                width={250}
                height={20}
              />
              <img
                className="hidden dark:block"
                src="/images/logo/top.png"
                alt="Logo"
                width={250}
                height={20}
              />
            </>
          ) : (
            <img
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="mt-2 flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              {renderMenuItems(navItems)}
            </div>
         
          </div>
        </nav>
       
      </div>
     
    </aside>
  );
};

export default AppSidebar;

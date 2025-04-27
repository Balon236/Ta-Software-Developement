import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePages/WelcomePage";
import WelcomeLogin from "./pages/WelcomePages/WelcomeLogin";
import RegisterStart from "./pages/RegistrationPages/RegisterStart";
import RegisterNext from "./pages/RegistrationPages/RegisterNext";
import Login from "./pages/RegistrationPages/Login";
import Dashboard from "./pages/Dashboard";
import Country from "./pages/Country";
import CreateCountry from "./components/Country/CreateCountry";
import "./boxicons/css/boxicons.min.css";
import Region from "./pages/Region";
import CreateRegion from "./components/Region/CreateRegion";
import Category from "./pages/Category";
import CreateCategory from "./components/Category/CreateCategory";
import Manager from "./pages/Manager";
import CreateManger from "./components/Manager/CreateManger";
import CaseManager from "./pages/CaseManager";
import CreateCaseManger from "./components/CaseManager/CreateCaseManger";
import School from "./pages/School";
import CreateSchool from "./components/School/CreateSchool";
import CaseManagerDashboard from "./pages/CaseManagerPages/Dashboard";
import Attendance from "./pages/CaseManagerPages/Attendance";
import DashboardPages from "./pages/CaseManagerPages/DashboardPages";
import OnboardingClient from "./pages/CaseManagerPages/OnboardingClient";
import CaseManagerMessage from "./pages/CaseManagerPages/Message";
import CaseManagerClass from "./pages/CaseManagerPages/CreateClass";
import CaseManagerSpecialty from "./pages/CaseManagerPages/Specialty";
import CaseManagerPage from "./pages/CaseManagerPages/CaseManager";
import CaseManagerRefer from "./pages/CaseManagerPages/Referred";
import CaseManagerTask from "./pages/CaseManagerPages/Task";
import MildSevierity from "./pages/CaseManagerPages/MildSevierity";
import HighSevierity from "./pages/CaseManagerPages/HighSevierity";
import CriticalSevierity from "./pages/CaseManagerPages/CriticalSevierity";
import ModerateSevierity from "./pages/CaseManagerPages/ModerateSevierity";
import FollowUp from "./pages/CaseManagerPages/FollowUp";
import UploadFile from "./pages/CaseManagerPages/UpLoadFile";
import FollowDashboardPages from "./pages/followUpAdmin/Dashboard";
import FollowUpDashboard from "./pages/followUpAdmin/FollowUpDashboard";
import Agenda from "./pages/followUpAdmin/agenda";
import RecentFollowUp from "./pages/followUpAdmin/recentFollowUp";
import Student from "./pages/followUpAdmin/Student";
import HighPriority from "./pages/followUpAdmin/highPriority";
import LowPriority from "./pages/followUpAdmin/lowPriority";
import StudentProgress from "./pages/followUpAdmin/StudentProgress";
import FinishedFollowUp from "./pages/followUpAdmin/FinishedFollow";
import TaskReminder from "./pages/followUpAdmin/TaskReminder";
import SevierityForm from "./pages/CaseManagerPages/SevierityForm";
import Consultants from "./pages/CaseManagerPages/Consultants";
import Error from "./pages/Error";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/welcomelogin" element={<WelcomeLogin />} />
        <Route path="/registerstart" element={<RegisterStart />} />
        <Route path="/registernext" element={<RegisterNext />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Route and Nested Children */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Country */}
          <Route path="country" element={<Country />} />
          <Route path="country/createcountry" element={<CreateCountry />} />
          {/* Region */}
          <Route path="region" element={<Region />} />
          <Route path="region/createregion" element={<CreateRegion />} />
          {/* Category */}
          <Route path="category" element={<Category />} />
          <Route path="category/createcategory" element={<CreateCategory />} />
          {/* Manager */}
          <Route path="manager" element={<Manager />} />
          <Route path="manager/createmanager" element={<CreateManger />} />
          {/* Case Manager */}
          <Route path="casemanager" element={<CaseManager />} />
          <Route
            path="casemanager/createcasemanager"
            element={<CreateCaseManger />}
          />
          {/* School */}
          <Route path="school" element={<School />} />
          <Route path="school/createschool" element={<CreateSchool />} />
        </Route>

        {/* Case Manager Dashboard And Other Pages */}
        <Route path="/case-manager-dashboard" element={<DashboardPages />}>
          {/* Case Manager Dashboard */}
          <Route
            path="/case-manager-dashboard"
            element={<CaseManagerDashboard />}
          />
          {/* Case Manager Attendance */}
          <Route path="attendance" element={<Attendance />} />
          {/* Case Manager Attendance */}
          <Route path="attendance" element={<Attendance />} />
          {/* Case Manager On-Boarding Clients */}
          <Route path="onboarding" element={<OnboardingClient />} />
          {/* Case Manager Message */}
          <Route path="messages" element={<CaseManagerMessage />} />
          {/* Case Manager Class */}
          <Route path="create-class" element={<CaseManagerClass />} />
          {/* Case Manager Specialty */}
          <Route path="specialty" element={<CaseManagerSpecialty />} />
          {/* Case Managers*/}
          <Route path="case-manager" element={<CaseManagerPage />} />
          {/* Case Manager Referred Client*/}
          <Route path="referred-clients" element={<CaseManagerRefer />} />
          {/* Case Manager Task Pages*/}
          <Route path="task" element={<CaseManagerTask />} />
          {/* Case Manager Mild  Sevierity Pages*/}
          <Route path="mild-severity" element={<MildSevierity />} />
          {/* Case Manager High Sevierity Pages*/}
          <Route path="high-severity" element={<HighSevierity />} />
          {/* Case Manager Critical Sevierity Pages*/}
          <Route path="critical-sevierity" element={<CriticalSevierity />} />
          {/* Case Manager Moderate Sevierity  Pages*/}
          <Route path="moderate-severity" element={<ModerateSevierity />} />
          {/* Case Manager Follow Pages*/}
          <Route path="follow-up" element={<FollowUp />} />
          {/* Case Manager Upload File Pages*/}
          <Route path="file-uploads" element={<UploadFile />} />
          {/* Case Manager Sevierity Form */}
          <Route path="sevierity-form" element={<SevierityForm />} />
          {/* Case Manager Consultant*/}
          <Route path="view-consultant" element={<Consultants />} />
        </Route>

        {/* Follow Up Dashboard */}
        <Route path="/follow-up-dashboard" element={<FollowDashboardPages />}>
          {/* Case Manager Follow Up Dashboard*/}
          <Route path="/follow-up-dashboard" element={<FollowUpDashboard />} />
          {/* Case Manager Follow Up Dashboard Agenda*/}
          <Route path="agenda" element={<Agenda />} />
          {/* Case Manager Follow Up Dashboard Recent Follow Up*/}
          <Route path="recent-task" element={<RecentFollowUp />} />
          {/* Case Manager Follow Up Dashboard Student*/}
          <Route path="student-view" element={<Student />} />
          {/* Case Manager Follow Up Dashboard High Priority*/}
          <Route path="high-priority" element={<HighPriority />} />
          {/* Case Manager Follow Up Dashboard Low Priority*/}
          <Route path="low-priority" element={<LowPriority />} />
          {/* Case Manager Follow Up Dashboard Student Progress*/}
          <Route path="student-progress" element={<StudentProgress />} />
          {/* Case Manager Follow Up Dashboard FInished Follow Up*/}
          <Route path="finished-follow-up" element={<FinishedFollowUp />} />
          {/* Case Manager Follow Up Dashboard Task Reminder*/}
          <Route path="task-reminder" element={<TaskReminder />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

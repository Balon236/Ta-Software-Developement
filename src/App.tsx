import { BrowserRouter as Router, Routes, Route } from "react-router";

import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";

import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Profile from "./pages/Dashboard/client/Profile";
import CaseManagerDetails from "./pages/Dashboard/client/CaseManagerDetails";
import TraumaReports from "./pages/Dashboard/client/TraumaReports";
import ConsultationReports from "./pages/Dashboard/client/ConsultationReports";
import Timetable from "./pages/Dashboard/client/Timetable";
import FollowupPlan from "./pages/Dashboard/client/FollowUpPlan";
import FollowupProgress from "./pages/Dashboard/client/FollowUpProgress";
import FollowupReport from "./pages/Dashboard/client/FollowUpReport";
import WeightReport from "./pages/Dashboard/client/weightReport";
import BMI from "./pages/Dashboard/client/BMI";
import GeneralReport from "./pages/Dashboard/client/GeneralReport";


export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Profile />} />
            <Route index path="/client/profile" element={<Profile />} />

            {/* Others Page */}
            <Route path="/client/caseManagers" element={<CaseManagerDetails/>} />
            <Route path="/client/traumaReports" element={<TraumaReports />} />
            <Route path="/client/consultationReports" element={<ConsultationReports/>} />
     
            <Route path="/client/timetable" element={<Timetable/>} />
            <Route path="/client/followupPlan" element={<FollowupPlan/>} />
            <Route path="/client/followupProgress" element={<FollowupProgress/>} />
            <Route path="/client/followupReport" element={<FollowupReport/>} />
            <Route path="/client/weightStats" element={<WeightReport/>} />
            <Route path="/client/bmi" element={<BMI/>} />
            <Route path="/client/generalReport" element={<GeneralReport/>} />


            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />



            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>



          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

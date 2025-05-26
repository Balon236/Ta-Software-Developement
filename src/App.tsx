import { BrowserRouter as Router, Routes, Route } from "react-router";

import NotFound from "./pages/OtherPage/NotFound";
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

          </Route>



          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router";

import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import Profile from "./pages/Dashboard/Profile";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Refered from "./pages/Dashboard/StudentRefered";
import Consulted from "./pages/Dashboard/StudentConsulted";
import Consult from "./pages/Dashboard/Consult";



export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Profile />} />
            <Route index path="/consultant/profile" element={<Profile />} />
            <Route index path="/consultant/studentsRefered" element={<Refered/>} />
            <Route index path="/consultant/studentsConsulted" element={<Consulted />} />
            <Route index path="/consultant/consult" element={<Consult />} />
            

           

          </Route>



          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

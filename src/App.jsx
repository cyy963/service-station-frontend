import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindStationPage from "./pages/FindStationPage";
import JourneyPlannerPage from "./pages/JourneyPlannerPage";
import StoreInfoPage from "./pages/StoreInfoPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>
           
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-station" element={<FindStationPage />} />
          <Route path="/journey-planner" element={<JourneyPlannerPage />} />
          <Route path="/store-information" element={<StoreInfoPage />} />
        </Routes>      
      
    </>
  );
}

export default App;

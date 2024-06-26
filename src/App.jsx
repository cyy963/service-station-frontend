import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
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
        <Route path="/store/:id" element={<StoreInfoPage />} />
      </Routes>
      
    </>
  );
}

export default App;

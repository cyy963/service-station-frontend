import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import FindStationPage from "./pages/FindStationPage";
import JourneyPlannerPage from "./pages/JourneyPlannerPage";
import StoreInfoPage from "./pages/StoreInfoPage";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/stations")
      .then((response) => setStores(response.data))
      .catch((error) => console.error("Error fetching stores:", error));
  }, []);

  return (
    <Router>      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/find-station"
          element={<FindStationPage stores={stores} />}
        />
        <Route path="/journey-planner" element={<JourneyPlannerPage />} />
        <Route path="/store-information/:id" element={<StoreInfoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

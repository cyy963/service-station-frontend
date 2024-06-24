import React from "react";
import styles from "./FindStationPage.module.css"
import StationData from "../components/Common/StationData";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import map from "../assets/map.png"

function FindStationPage() {
  return (
    <div className={styles.pageBody}>
      <Header />
      <StationData />
      
      <Footer />
    </div>
  );
}

export default FindStationPage;

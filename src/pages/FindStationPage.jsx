import React from "react";
import styles from "./FindStationPage.module.css"
import StationData from "../components/Common/StationData";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

function FindStationPage() {
  return (
    <div className={styles.pageBody}>
      <Header />
      <StationData />
      
    </div>
  );
}

export default FindStationPage;

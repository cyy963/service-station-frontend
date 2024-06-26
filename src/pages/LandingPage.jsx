import React from "react";
import styles from "./LandingPage.module.css"
//components
import Gallery from "../components/LandingPage/Gallery"
import LandingPageContent from "../components/LandingPage/LandingPageContent"
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

function LandingPage() {
  return (
    <div>    
      <div className={styles.pageBody}>
        <Header />
        <Gallery />
        <LandingPageContent />
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;

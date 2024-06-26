import React, { useEffect, useState } from "react";
import styles from "./StoreInfoPage.module.css";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import StoreDetails from "../components/StoreInfo/StoreDetails";
import MapSection from "../components/StoreInfo/MapSection";
import FuelPrices from "../components/StoreInfo/FuelPrices";
import StoreHours from "../components/StoreInfo/StoreHours";
import ServicesSection from "../components/StoreInfo/ServicesSection";
import InfoColumns from "../components/StoreInfo/InfoColumns";
import AdditionalSection from "../components/StoreInfo/AdditionalSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoreInfoPage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        console.log(`Fetching store data for ID: ${id}`);
        const response = await axios.get(
          `http://localhost:3000/api/stations/${id}`
        );
        const storeData = response.data;
        console.log("Store data fetched: ", storeData);
        if (
          storeData &&
          storeData.position &&
          storeData.position.lat &&
          storeData.position.lng
        ) {
          setStore(storeData);
        } else {
          console.error("Invalid store data:", storeData);
        }
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };

    fetchStoreData();
  }, [id]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.storeInfoPage}>
      <Header />
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.leftSide}>
            <StoreDetails store={store} />
            <FuelPrices store={store} />
            <StoreHours store={store} />
          </div>
          <div className={styles.rightSide}>
            <MapSection store={store} />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <ServicesSection />
          <div className={styles.additionalSectionContainer}>
            <AdditionalSection />
          </div>
        </div>
        <div className={styles.infoColumns}>
          <InfoColumns />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoreInfoPage;

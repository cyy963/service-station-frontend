import React from "react";
import styles from "./FuelPrices.module.css";
import premiumImage from "/images/premium.png";
import unleadedImage from "/images/unleaded.png";
import dieselImage from "/images/diesel.png";

const FuelPrices = ({ store }) => {
  return (
    <div className={styles.fuelPrices}>
      <div className={styles.fuelType}>
        <img src={premiumImage} alt="Premium" />
        <p>${store.ZX_Premium}</p>
      </div>
      <div className={styles.fuelType}>
        <img src={unleadedImage} alt="Unleaded" />
        <p>${store.Z91_Unleaded}</p>
      </div>
      <div className={styles.fuelType}>
        <img src={dieselImage} alt="Diesel" />
        <p>${store.Z_Diesel}</p>
      </div>
    </div>
  );
};

export default FuelPrices;

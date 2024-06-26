import React from "react";
import styles from "./FuelPrices.module.css";
import premiumImg from "/images/premium.png";
import unleadedImg from "/images/unleaded.png";
import dieselImg from "/images/diesel.png";

const FuelPrices = ({ store }) => {
  return (
    <div className={styles.fuelPrices}>
      <div className={styles.fuelType}>
        <img src={premiumImg} alt="premium" />
        <p>${store.ZX_Premium}</p>
      </div>
      <div className={styles.fuelType}>
        <img src={unleadedImg} alt="unleaded" />
        <p>${store.Z91_Unleaded}</p>
      </div>
      <div className={styles.fuelType}>
        <img src={dieselImg} alt="diesel" />
        <p>${store.Z_Diesel}</p>
      </div>
    </div>
  );
};

export default FuelPrices;

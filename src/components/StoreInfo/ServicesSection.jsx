import React from "react";
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>Services</h2>
      <button className={styles.findOutMoreButton}>Find out more</button>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <h3>Payment</h3>
          <p className={styles.serviceDetail}>Pay in app</p>
          <p className={styles.serviceDetail}>Pay and pump</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Food & Drink</h3>
          <p className={styles.serviceDetail}>Z Espress Coffee & Fresh Food</p>
          <p className={styles.serviceDetail}>Pre-order Coffee</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Other</h3>
          <p className={styles.serviceDetail}>Super long hoses</p>
          <p className={styles.serviceDetail}>Bathrooms</p>
          <p className={styles.serviceDetail}>LPG SWAP'n'GO</p>
          <p className={styles.serviceDetail}>A-Z Screen</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

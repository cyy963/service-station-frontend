import React from "react";
import styles from "./AdditionalSection.module.css";

const AdditionalSection = () => {
  return (
    <div className={styles.additionalSection}>
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>Payment</h2>
        <div className={styles.inlineContent}>
          <div className={styles.sectionContent}>Pay in app</div>
          <div className={styles.sectionContent}>Pay at Pump</div>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>Food & Drink</h2>
        <div className={styles.inlineContent}>
          <div className={styles.sectionContent}>
            Z Espress Coffee & Fresh Food
          </div>
          <div className={styles.sectionContent}>Pre-order Coffee</div>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionHeading}>Other</h2>
        <div className={styles.inlineContent}>
          <div className={styles.sectionContent}>Super long hoses</div>
          <div className={styles.sectionContent}>Bathrooms</div>
          <div className={styles.sectionContent}>LPG SWAP'n'GO</div>
          <div className={styles.sectionContent}>A-Z Screen</div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSection;

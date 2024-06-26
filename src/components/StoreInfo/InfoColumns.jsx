import React from "react";
import styles from "./InfoColumns.module.css";

const InfoColumns = () => {
  return (
    <div className={styles.infoColumns}>
      <div className={styles.infoColumn}>
        <h3 className={styles.infoHeader}>Pay in app</h3>
        <p>The easy, secure way to fuel up and go.</p>
        <p>No cash or cards to hand over</p>
        <button className={styles.downloadButton}>Download Z app</button>
      </div>
      <div className={styles.infoColumn}>
        <h3 className={styles.infoHeader}>Pre-order Coffee</h3>
        <p>
          Pre-order and pre-pay in your Z App using your debit or credit card.
        </p>
        <button className={styles.downloadButton}>Download Z app</button>
      </div>
      <div className={styles.infoColumn}>
        <h3 className={styles.infoHeader}>LPG SWAP'n'GO</h3>
        <p>Fast, safe and simple</p>
        <button className={styles.learnMoreButton}>Learn more</button>
      </div>
    </div>
  );
};

export default InfoColumns;

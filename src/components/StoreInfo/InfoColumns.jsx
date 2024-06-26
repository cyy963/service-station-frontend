import React from "react";
import styles from "./InfoColumns.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const InfoColumns = () => {
  return (
    <div className={styles.infoColumns}>
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>Pay in app</h3>
        <p className={styles.columnText}>
          The easy, secure way to fuel up and go. No cash or cards to hand over.
        </p>
        <button className={styles.downloadButton}>
          Download Z app
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "white", marginLeft: "10px" }}
          />
        </button>
      </div>
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>Pre-order Coffee</h3>
        <p className={styles.columnText}>
          Pre-order and pre-pay in your Z App using your debit or credit card.
        </p>
        <button className={styles.downloadButton}>
          Download Z app
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "white", marginLeft: "10px" }}
          />
        </button>
      </div>
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>LPG SWAP'n'GO</h3>
        <p className={styles.columnText}>Fast, safe and simple.</p>
        <button className={styles.learnMoreButton}>
          Learn more
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            style={{ color: "white", marginLeft: "10px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default InfoColumns;

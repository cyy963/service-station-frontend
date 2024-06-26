import React from "react";
import styles from "./StoreHours.module.css";

const StoreHours = ({ store }) => {
  return (
    <div className={styles.storeHours}>
      <h2>Store Hours</h2>
      <p>{store.hours}</p>
    </div>
  );
};

export default StoreHours;

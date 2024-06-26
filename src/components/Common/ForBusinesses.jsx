import React from "react";
import styles from "./Footer.module.css";

const ForBusinesses = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED560E" }}>For Businesses</h4>
      <ul>
        <li>
          <a href="/business-fuel-card" style={{ color: "#ED560E" }}>
            Z Business fuel card
          </a>
        </li>
        <li>
          <a href="/fuels-services" style={{ color: "#ED560E" }}>
            Fuels and services
          </a>
        </li>
        <li>
          <a href="/business-tips" style={{ color: "#ED560E" }}>
            Business tips and stories
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ForBusinesses;

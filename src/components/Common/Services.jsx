import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED5603" }}>Products and Services</h4>
      <ul>
        <li>
          <a href="/services/fuel" style={{ color: "#ED5603" }}>
            Fuel
          </a>
        </li>
        <li>
          <a href="/services/car-wash" style={{ color: "#ED5603" }}>
            Car Wash
          </a>
        </li>
        <li>
          <a href="/services/lpg" style={{ color: "#ED5603" }}>
            LPG
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Services;

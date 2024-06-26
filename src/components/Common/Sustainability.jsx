import React from "react";
import styles from "./Footer.module.css";

const Sustainability = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED560E" }}>Sustainability</h4>
      <ul>
        <li>
          <a href="/sustainability-goals" style={{ color: "#ED560E" }}>
            Our sustainability goals
          </a>
        </li>
        <li>
          <a href="/nature-restoration" style={{ color: "#ED560E" }}>
            Nature restoration
          </a>
        </li>
        <li>
          <a href="/supplier-code" style={{ color: "#ED560E" }}>
            Supplier Code of Conduct
          </a>
        </li>
        <li>
          <a href="/electric-vehicles" style={{ color: "#ED560E" }}>
            Supporting electric vehicles
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sustainability;

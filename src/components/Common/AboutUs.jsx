import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED560E" }}>About Us</h4>
      <ul>
        <li>
          <a href="/about" style={{ color: "#ED560E" }}>
            Our Story
          </a>
        </li>
        <li>
          <a href="/team" style={{ color: "#ED560E" }}>
            Our Team
          </a>
        </li>
        <li>
          <a href="/careers" style={{ color: "#ED560E" }}>
            Careers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;

import React from "react";
import styles from "./Footer.module.css";

const AboutZ = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED560E" }}>About Z</h4>
      <ul>
        <li>
          <a href="/our-story" style={{ color: "#ED560E" }}>
            Our story
          </a>
        </li>
        <li>
          <a href="/what-we-stand-for" style={{ color: "#ED560E" }}>
            What we stand for
          </a>
        </li>
        <li>
          <a href="/our-people" style={{ color: "#ED560E" }}>
            Our people
          </a>
        </li>
        <li>
          <a href="/news" style={{ color: "#ED560E" }}>
            News
          </a>
        </li>
        <li>
          <a href="/careers" style={{ color: "#ED560E" }}>
            Careers at Z
          </a>
        </li>
        <li>
          <a href="/corporate-centre" style={{ color: "#ED560E" }}>
            Corporate centre
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutZ;

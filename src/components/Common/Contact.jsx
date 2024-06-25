import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED5603" }}>For Businesses</h4>
      <ul>
        <li>
          <a href="/contact" style={{ color: "#ED5603" }}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="/support" style={{ color: "#ED5603" }}>
            Support
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

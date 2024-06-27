import React from "react";
import styles from "./ServicesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServicesSection = () => {
  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.title}>Services</h2>
      <button className={styles.findOutMoreButton}>
        Find out more
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          style={{ color: "white", marginLeft: "10px" }}
        />
      </button>
    </div>
  );
};

export default ServicesSection;

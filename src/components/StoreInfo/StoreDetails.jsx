import React from "react";
import { Link } from "react-router-dom";
import styles from "./StoreDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const StoreDetails = ({ store }) => {
  return (
    <div className={styles.storeDetails}>
      <Link to="/find-station" className={styles.backLink}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span className={styles.backLinkText}>Back to find a station</span>
      </Link>
      <h1>{store.name}</h1>
      <div className={styles.addressContainer}>
        <p className={styles.address}>{store.address}</p>
        <button className={styles.getDirectionsButton}>
          Get directions
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ color: "white", marginLeft: "10px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default StoreDetails;

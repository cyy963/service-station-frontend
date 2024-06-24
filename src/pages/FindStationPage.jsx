import React from "react";
import { Link } from "react-router-dom";
import styles from "./FindStationPage.module.css";

const FindStationPage = ({ stores }) => {
  return (
    <div className={styles.findStationPage}>
      <h1>Find a Station</h1>
      <ul>
        {stores.map((store) => (
          <li key={store._id} className={styles.stationItem}>
            <Link
              to={`/store-information/${store._id}`}
              className={styles.stationLink}
            >
              {store.name}
            </Link>
            <p>{store.address}</p>
            <p>Hours: {store.hours}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindStationPage;

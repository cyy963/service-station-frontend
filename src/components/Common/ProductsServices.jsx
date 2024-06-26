import React from "react";
import styles from "./Footer.module.css";

const ProductsServices = () => {
  return (
    <div className={styles.footerSection}>
      <h4 style={{ color: "#ED560E" }}>Products and Services</h4>
      <ul>
        <li>
          <a href="/at-the-station" style={{ color: "#ED560E" }}>
            At the station
          </a>
        </li>
        <li>
          <a href="/z-app" style={{ color: "#ED560E" }}>
            Z App
          </a>
        </li>
        <li>
          <a href="/power-your-home" style={{ color: "#ED560E" }}>
            Power your home with Z
          </a>
        </li>
        <li>
          <a href="/rewards-promotions" style={{ color: "#ED560E" }}>
            Rewards and promotions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductsServices;

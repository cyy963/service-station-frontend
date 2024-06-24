import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/z-logo.jpeg";

const SearchIcon = () => (
  <svg
    className={styles.searchIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle cx="10" cy="10" r="6" stroke="black" strokeWidth="2" fill="none" />
    <path
      d="M14 14 L18 18"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const Header = () => {
  const [activeNav, setActiveNav] = useState("");

  const handleNavClick = (nav) => {
    setActiveNav((prev) => (prev === nav ? "" : nav));
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        {[
          "Products and Services",
          "For Businesses",
          "Sustainability",
          "About Z",
        ].map((item) => (
          <div
            key={item}
            className={`${styles.dropdown} ${
              activeNav === item ? styles.active : ""
            }`}
            onClick={() => handleNavClick(item)}
          >
            {item} <span className={styles.arrow}>⌄</span>
            {activeNav === item && <div className={styles.underline}></div>}
          </div>
        ))}
      </nav>
      <div className={styles.actions}>
        <button className={styles.findStationButton}>Find A Station</button>
        <div className={styles.search}>
          <span>Search</span>
          <SearchIcon />
        </div>
      </div>
      {activeNav && (
        <div className={`${styles.dropdownContent} ${styles.activeDropdown}`}>
          {activeNav === "Products and Services" && (
            <div className={styles.dropdownMenu}>
              <div className={styles.productsServices}>
                <h1>
                  Products and
                  <br />
                  services
                </h1>
                <div className={styles.arrowCircle}>
                  <span className={styles.rightArrow}>→</span>
                </div>
              </div>
              <div className={styles.menuItems}>
                {[
                  "At the station",
                  "Power your home with Z",
                  "Z App",
                  "Rewards and promotions",
                ].map((heading) => (
                  <div key={heading} className={styles.menuItem}>
                    {heading} <span className={styles.smallArrow}>></span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* other blocks for other nav links here when first one sorted  */}
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
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
      strokeLinecap="round" /* Rounded handle */
    />
  </svg>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          Products and Services <span className={styles.arrow}>⌄</span>
        </div>
        <div className={styles.dropdown}>
          For Businesses <span className={styles.arrow}>⌄</span>
        </div>
        <div className={styles.dropdown}>
          Sustainability <span className={styles.arrow}>⌄</span>
        </div>
        <div className={styles.dropdown}>
          About Z <span className={styles.arrow}>⌄</span>
        </div>
      </nav>
      <div className={styles.actions}>
        <button className={styles.findStationButton}>Find A Station</button>
        <div className={styles.search}>
          <span>Search</span>
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/z-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faMagnifyingGlass,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeNav, setActiveNav] = useState("");
  const [closing, setClosing] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const handleNavClick = (nav, event) => {
    event.stopPropagation(); // Stop the click event from propagating
    if (activeNav === nav) {
      setClosing(true);
      setTimeout(() => {
        setActiveNav("");
        setClosing(false);
      }, 500); // Duration of the closing transition
    } else {
      setActiveNav(nav);
      if (searchOpen) {
        setSearchOpen(false);
      }
    }
  };

  const handleSearchClick = (event) => {
    event.stopPropagation(); 
    if (searchOpen) {
      setClosing(true);
      setTimeout(() => {
        setSearchOpen(false);
        setClosing(false);
      }, 500); 
    } else {
      setSearchOpen(true);
      if (activeNav) {
        setActiveNav("");
      }
    }
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.dropdown}`) &&
        !event.target.closest(`.${styles.search}`) &&
        !event.target.closest(`.${styles.searchDropdown}`)
      ) {
        if (activeNav) {
          setClosing(true);
          setTimeout(() => {
            setActiveNav("");
            setClosing(false);
          }, 500); 
        }
        if (searchOpen) {
          setClosing(true);
          setTimeout(() => {
            setSearchOpen(false);
            setClosing(false);
          }, 500); 
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeNav, searchOpen]);

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
            onClick={(event) => handleNavClick(item, event)}
          >
            {item}{" "}
            <FontAwesomeIcon
              icon={activeNav === item ? faChevronUp : faChevronDown}
              className={styles.chevronIcon}
            />
            {activeNav === item && <div className={styles.underline}></div>}
          </div>
        ))}
      </nav>
      <div className={styles.actions}>
        <Link to="/find-station">
          <button className={styles.findStationButton}>Find A Station</button>
        </Link>
        <div className={styles.search} onClick={handleSearchClick}>
          <span>Search</span>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
          />
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={`${styles.dropdownContent} ${
          activeNav ? (closing ? styles.closing : styles.open) : ""
        }`}
      >
        {activeNav === "Products and Services" && (
          <div className={styles.dropdownMenu}>
            <div className={styles.productsServices}>
              <h1>
                Products and
                <br />
                services
              </h1>
              <div className={styles.arrowCircle}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.firstArrow}`}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.secondArrow}`}
                />
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
                  <span>{heading}</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.smallChevron}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {activeNav === "For Businesses" && (
          <div className={styles.dropdownMenu}>
            <div className={styles.productsServices}>
              <h1>
                For
                <br />
                businesses
              </h1>
              <div className={styles.arrowCircle}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.firstArrow}`}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.secondArrow}`}
                />
              </div>
            </div>
            <div className={styles.menuItems}>
              {[
                "Z Business fuel card",
                "Fuels and service",
                "Sign up for Z Business Plus",
                "Business tips and stories",
                "Apply",
                "Log in",
              ].map((heading) => (
                <div key={heading} className={styles.menuItem}>
                  <span>{heading}</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.smallChevron}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {activeNav === "Sustainability" && (
          <div className={styles.dropdownMenu}>
            <div className={styles.productsServices}>
              <h1>Sustainability</h1>
              <div className={styles.arrowCircle}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.firstArrow}`}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.secondArrow}`}
                />
              </div>
            </div>
            <div className={styles.menuItems}>
              {[
                "Our sustainability goals",
                "Nature restoration",
                "Supplier Code of Conduct",
                "Supporting electric vehicles",
              ].map((heading) => (
                <div key={heading} className={styles.menuItem}>
                  <span>{heading}</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.smallChevron}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {activeNav === "About Z" && (
          <div className={styles.dropdownMenu}>
            <div className={styles.productsServices}>
              <h1>About Z</h1>
              <div className={styles.arrowCircle}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.firstArrow}`}
                />
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`${styles.arrowIcon} ${styles.secondArrow}`}
                />
              </div>
            </div>
            <div className={styles.menuItems}>
              {[
                "Our story",
                "What we stand for",
                "Our people",
                "News",
                "Careers at Z",
                "Corporate center",
              ].map((heading) => (
                <div key={heading} className={styles.menuItem}>
                  <span>{heading}</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={styles.smallChevron}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div
        ref={searchRef}
        className={`${styles.searchDropdown} ${
          searchOpen ? (closing ? styles.closing : styles.open) : ""
        }`}
      >
        <div className={styles.searchDropdownMenu}>
          <div className={styles.searchInputContainer}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchIconInput}
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button
                className={styles.clearButton}
                onClick={handleClearSearch}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

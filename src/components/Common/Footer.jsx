import React from "react";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import styles from "./Footer.module.css";
import logo from "../../assets/z-logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Z Logo" className={styles.logo} />
        </div>
        <div className={styles.linksContainer}>
          <AboutUs />
          <Services />
          <Contact />
        </div>
        <div className={styles.contactContainer}>
          <button className={styles.contactButton}>
            Contact Us
            <span className={styles.locationDot}>
              <i className="fas fa-location-dot"></i>
            </span>
          </button>
          <div className={styles.socialMediaIcons}>
            <span className={styles.socialIcon}>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className={styles.socialIcon}>
              <i className="fab fa-instagram"></i>
            </span>
            <span className={styles.socialIcon}>
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

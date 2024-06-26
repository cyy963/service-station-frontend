import React from "react";
import ProductsServices from "./ProductsServices";
import ForBusinesses from "./ForBusinesses";
import Sustainability from "./Sustainability";
import AboutZ from "./AboutZ";
import styles from "./Footer.module.css";
import logo from "../../assets/z-logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Z Logo" className={styles.logo} />
        </div>
        <div className={styles.linksContainer}>
          <ProductsServices />
          <ForBusinesses />
          <Sustainability />
          <AboutZ />
        </div>
        <div className={styles.contactContainer}>
          <button className={styles.contactButton}>
            Contact Us
            <span className={styles.locationDot}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </button>
          <div className={styles.socialMediaIcons}>
            <span className={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className={styles.socialIcon}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <a href="/privacy">Privacy</a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/fuel-safety">Fuel Safety Data Sheets</a>
            <a href="/investor-relations">Investor Relations</a>
          </div>
          <div className={styles.footerBottomRight}>
            <span>Z Energy Limited. All trademarks are used under license</span>
            <img
              src="/images/footer-circle.png"
              alt="Footer Circle"
              className={styles.footerCircle}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
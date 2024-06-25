import React from "react";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.footerSection}>
      <h4>Follow Us</h4>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/zenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/zenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/zenz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

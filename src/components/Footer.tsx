import React from "react";
import styles from "../styles/dormpage.module.css";

const Footer = () => {
  return (
    <footer>
      <span className={styles.home}>Home</span>
      <span className={styles.about}>About</span>
      <span className={styles.contact}>Contact Us</span>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "../styles/footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  function RedirectContactUs() {
    const mailtoLink = `mailto:wyin16@gmail.com`;
    window.location.href = mailtoLink; // Open email client with the pre-filled message
  }

  function RedirectHome() {
    navigate("/");
  }

  function RedirectAboutUs() {
    navigate("/about-us");
  }

  return (
    <footer>
      <span onClick={RedirectHome} className={styles.home}>
        Home
      </span>
      <span onClick={RedirectAboutUs} className={styles.about}>
        About
      </span>
      <span onClick={RedirectContactUs} className={styles.contact}>
        Contact Us
      </span>
    </footer>
  );
};

export default Footer;

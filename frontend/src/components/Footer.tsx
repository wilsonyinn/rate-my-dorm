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

  return (
    <footer>
      <span onClick={RedirectHome}>&reg;SFSU Dorms</span>
      <span onClick={RedirectContactUs} className={styles.contact}>
        Contact Us
      </span>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "../styles/dormpage.module.css";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <HouseIcon className={styles.logo} sx={{ fontSize: 60 }}></HouseIcon>
      <Button className={styles.login} variant="contained">
        Log In
      </Button>
    </nav>
  );
};

export default Nav;

import React from "react";
import styles from "../styles/dormpage.module.css";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";

function handleLogInRouting() {
  // ** IMPLEMENT **
  alert("reroute to login");
}

function handleHomeRouting() {
  alert("reroute to home");
}

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <HouseIcon
        onClick={handleHomeRouting}
        className={styles.logo}
        sx={{ fontSize: 60 }}
      ></HouseIcon>
      <Button
        onClick={handleLogInRouting}
        className={styles.login}
        variant="contained"
      >
        Log In
      </Button>
    </nav>
  );
};

export default Nav;

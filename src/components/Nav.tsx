import React from "react";
import styles from "../styles/nav.module.css";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  function handleLogInRouting() {
    navigate("/sign-in");
  }

  function handleHomeRouting() {
    navigate("/");
  }
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

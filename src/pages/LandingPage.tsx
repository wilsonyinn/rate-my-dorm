import React from "react";
import styles from "../styles/landing.module.css";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import MZSQ from "../assets/manzanita_banner.jpg";
import MPW from "../assets/mary-park-hall.jpg";
import MWH from "../assets/mary-ward-hall.jpg";
import TCS from "../assets/towers-at-centennial-square.jpg";
import TJS from "../assets/towers-junior-suite.png";
import UPS from "../assets/university-park-south.jpg";
import UPN from "../assets/university-park-north.jpg";
import VCS from "../assets/village-at-centennial-square.jpg";
import WGC from "../assets/west-grove-common.jpg";
import Nav from "../components/Nav";

const LandingPage = () => {
  const dorms = [
    { name: "Manzanita Square", imageSrc: MZSQ, link: "/manzanita-square" },
    { name: "Mary Park Hall", imageSrc: MPW, link: "/mary-park-hall" },
    { name: "Mary Ward Hall", imageSrc: MWH, link: "/mary-ward-hall" },
    {
      name: "Towers at Centennial Square",
      imageSrc: TCS,
      link: "/towers-at-centennial-square",
    },
    {
      name: "Village at Centennial Square",
      imageSrc: VCS,
      link: "/village-at-centennial-square",
    },
    {
      name: "University Park South",
      imageSrc: UPS,
      link: "/university-park-south",
    },
    {
      name: "University Park North",
      imageSrc: UPN,
      link: "/university-park-north",
    },
    { name: "West Grove Common", imageSrc: WGC, link: "/west-grove-common" },
    {
      name: "Towers at Junior Suites",
      imageSrc: TJS,
      link: "/towers-at-junior-suites",
    },
  ];

  const dormGrid = dorms.map((dorm) => {
    return (
      <div className={styles.gridItem}>
        <Link className={styles.link} to={dorm.link}>
          <Card className={styles.card}>
            <CardMedia
              sx={{ height: 200 }}
              image={dorm.imageSrc}
              title="green iguana"
            />
            <CardContent className={styles.cardContent}>
              <h2 className={styles.cardName}>{dorm.name}</h2>
            </CardContent>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.landingBanner}>
        <p>San Francisco State University Dorm Reviews</p>
      </div>
      <div className={styles.grid}>{dormGrid}</div>
    </div>
  );
};

export default LandingPage;

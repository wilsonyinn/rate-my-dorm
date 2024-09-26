import React from "react";
import styles from "../styles/landing.module.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MZSQ from "../assets/manzanita_banner.jpg";
import MPW from "../assets/mary-park-hall.jpg";
import MWH from "../assets/mary-ward-hall.jpg";
import TCS from "../assets/towers-at-centennial-square.jpg";
import TJS from "../assets/towers-junior-suite.png";
import UPS from "../assets/university-park-south.jpg";
import UPN from "../assets/university-park-north.jpg";
import VCS from "../assets/village-at-centennial-square.jpg";
import WGC from "../assets/west-grove-common.jpg";
//add
// West Grove Common
// Mary Park Hall
// Mary Ward Hall
// Towers Junior Suites
// Towers at Centennial Square
// Village at Centennial Square
// University Park South

const LandingPage = () => {
  const dorms = [
    { name: "Manzanita Square", imageSrc: MZSQ },
    { name: "Mary Park Hall", imageSrc: MPW },
    { name: "Mary Ward Hall", imageSrc: MWH },
    { name: "Towers at Centennial Square", imageSrc: TCS },
    { name: "Village at Centennial Square", imageSrc: VCS },
    { name: "University Park South", imageSrc: UPS },
    { name: "University Park North", imageSrc: UPN },
    { name: "West Grove Common", imageSrc: WGC },
    { name: "Towers at Junior Suites", imageSrc: TJS },
  ];
  return (
    <div className={styles.container}>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={MZSQ} title="green iguana" />
          <CardContent className={styles.cardContent}>
            <h2 className={styles.cardName}>Manzanita Square</h2>
          </CardContent>
        </Card>
      </div>
      <Link to={`/manzanita-square`}>
        <img src="../assets/manzanita_banner.jpg"></img>
      </Link>
      <br />
      <Link to={`/university-park-north`}>University Park North</Link>
      <br />
      <Link to={`/towers-at-centennial-square`}>
        Towers At Centennial Square
      </Link>
      <br />
      <Link to={`/towers-at-junior-suites`}>Towers At Junior Suites</Link>
      <br />
      <Link to={`/west-grove-common`}>West Grove Common</Link>
      <br />
      <Link to={`/mary-park-hall`}>Mary Park Hall</Link>
      <br />
      <Link to={`/mary-ward-hall`}>Mary Ward Hall</Link>
      <br />
      <Link to={`/village-at-centennial-square`}>
        Village At Centennial Square
      </Link>
      <br />
      <Link to={`/university-park-south`}>University Park South</Link>
      <br />
      <Link to={`/university-park-north`}>University Park North</Link>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { FC } from "react";
import styles from "../styles/banner.module.css";

//assets
import MZSQ from "../assets/manzanita_banner.jpg";
import MPW from "../assets/mary-park-hall.jpg";
import MWH from "../assets/mary-ward-hall.jpg";
import TCS from "../assets/towers-at-centennial-square.jpg";
import TJS from "../assets/towers-junior-suite.png";
import UPS from "../assets/university-park-south.jpg";
import UPN from "../assets/university-park-north.jpg";
import VCS from "../assets/village-at-centennial-square.jpg";
import WGC from "../assets/west-grove-common.jpg";

interface BannerProps {
  dormName: string;
  bannerText: string;
}

const dormBanners: any = {
  "Manzanita Square": MZSQ,
  "Mary Park Hall": MPW,
  "Mary Ward Hall": MWH,
  "Towers At Centennial Square": TCS,
  "Towers At Junior Suites": TJS,
  "University Park South": UPS,
  "University Park North": UPN,
  "Village At Centennial Square": VCS,
  "West Grove Common": WGC,
};

const Banner: FC<BannerProps> = ({ dormName, bannerText }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${dormBanners[dormName]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        width: "100%",
        minHeight: "349px",
      }}
    >
      <h1 className={styles.bannerText}>{bannerText}</h1>
    </div>
  );
};

export default Banner;

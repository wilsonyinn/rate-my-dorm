import React, { useState, FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/dormpage.module.css";
import Review from "../components/Review";
import Button from "@mui/material/Button";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import MZSQ from "../assets/manzanita_banner.jpg";
import MPW from "../assets/mary-park-hall.jpg";
import MWH from "../assets/mary-ward-hall.jpg";
import TCS from "../assets/towers-at-centennial-square.jpg";
import TJS from "../assets/towers-junior-suite.png";
import UPS from "../assets/university-park-south.jpg";
import UPN from "../assets/university-park-north.jpg";
import VCS from "../assets/village-at-centennial-square.jpg";
import WGC from "../assets/west-grove-common.jpg";

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

interface ReviewData {
  name: string;
  datePosted: number;
  rating: number;
  reviewTitle: string;
  review: string;
}

interface DormPageData {
  dormName: string;
  reviewData: ReviewData[];
}

function handleWriteReviewRouting() {
  // ** IMPLEMENT **
  alert("reroute");
}

const DormPage: FC<DormPageData> = ({ dormName, reviewData }) => {
  const [data, setData] = useState(reviewData);
  console.log(dormBanners[dormName]);

  const reviews = data.map((val) => {
    return (
      <Review
        name={val.name}
        datePosted={val.datePosted}
        rating={val.rating}
        reviewTitle={val.reviewTitle}
        review={val.review}
        key={uuidv4()}
      />
    );
  });
  return (
    <div className={styles.container}>
      <Nav />
      <div
        style={{
          backgroundImage: `url(${dormBanners[dormName]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          width: "100%",
          minHeight: "349px",
        }}
        // className={styles.banner}
      >
        <h1 className={styles.bannerText}>{dormName}</h1>
      </div>
      <div className={styles.reviewsTableHeader}>
        <p>Recent Reviews</p>
        <Button
          className={styles.writeReview}
          variant="contained"
          onClick={handleWriteReviewRouting}
        >
          Write Review
        </Button>
      </div>
      <div className={styles.reviewsTable}>{reviews}</div>
      <Footer />
    </div>
  );
};

export default DormPage;

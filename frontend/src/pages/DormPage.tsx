import React, { useState, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
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
  userName: string;
  dormName: string;
  semester: string;
  reviewTitle: string;
  reviewRating: number;
  reviewComment: string;
}

interface DormPageData {
  dormName: string;
}

const DormPage: FC<DormPageData> = ({ dormName }) => {
  const [data, setData] = useState<ReviewData[]>([]);

  useEffect(() => {
    // Function to fetch reviews for a dorm
    console.log("Use Effect called");
    console.log(dormName);
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/get-reviews?dormName=${dormName}`,
          {
            method: "GET", // POST method to send data
            headers: {
              "Content-Type": "application/json", // Ensures data is sent in JSON format
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch reviews");

        const data = await response.json();
        setData(data); // Set the reviews in state
        console.log(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews(); // Call the function on component mount
  }, [dormName]); // Re-run the effect if dormName changes (if needed)

  const navigate = useNavigate();

  function handleWriteReviewRouting() {
    navigate("/write-review", { state: { dormName: dormName } });
  }

  const reviews = data.map((val) => {
    return (
      <Review
        userName={val.userName}
        semester={val.semester}
        reviewTitle={val.reviewTitle}
        reviewRating={val.reviewRating}
        reviewComment={val.reviewComment}
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

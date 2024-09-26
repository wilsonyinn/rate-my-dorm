import React, { useState, FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/dormpage.module.css";
import Review from "../components/Review";
import HouseIcon from "@mui/icons-material/House";
import Button from "@mui/material/Button";

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
const DormPage: FC<DormPageData> = ({ dormName, reviewData }) => {
  const [data, setData] = useState(reviewData);

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
      <nav className={styles.nav}>
        <HouseIcon className={styles.logo} sx={{ fontSize: 60 }}></HouseIcon>
        <Button className={styles.login} variant="contained">
          Log In
        </Button>
      </nav>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>{dormName}</h1>
      </div>
      <div className={styles.reviewsTableHeader}>
        <p>Recent Reviews</p>
        <Button className={styles.writeReview} variant="contained">
          Write Review
        </Button>
      </div>
      <div className={styles.reviewsTable}>{reviews}</div>
      <footer>
        <span className={styles.home}>Home</span>
        <span className={styles.about}>About</span>
        <span className={styles.contact}>Contact Us</span>
      </footer>
    </div>
  );
};

export default DormPage;

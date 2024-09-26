import React, { useState, FC } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/dormpage.module.css";
import Review from "../components/Review";


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
      <nav className={styles.nav}>Nav Bar</nav>
      <div className={styles.banner}>
        <h1 className={styles.bannerText}>{dormName}</h1>
      </div>
      <div className={styles.reviewsTable}>{reviews}</div>
      <footer>Footer that we dont have yet</footer>
    </div>
  );
};

export default DormPage;

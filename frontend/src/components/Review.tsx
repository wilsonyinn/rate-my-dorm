import React from "react";
import { FC } from "react";
import styles from "../styles/review.module.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

interface ReviewProps {
  name: string;
  datePosted: number;
  rating: number;
  reviewTitle: string;
  review: string;
}
const Review: FC<ReviewProps> = ({
  name,
  datePosted,
  rating,
  reviewTitle,
  review,
}) => {
  //convert millisecond date to readable data format
  const date = new Date(datePosted);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      <Divider flexItem></Divider>
      <div className={styles.reviewContainer}>
        <h2 className={styles.nameAndDate}>
          <h3 className={styles.name}>{name}</h3>
          <h3 className={styles.date}>{formattedDate}</h3>
        </h2>
        <div className={styles.rating}>
          <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
            <Rating name="read-only" value={rating} precision={0.1} readOnly />
            <Box sx={{ ml: 2 }}>{rating}</Box>
          </Box>
        </div>
        <p className={styles.review}>
          <h3>{reviewTitle}</h3>
          <p>{review}</p>
        </p>
      </div>
    </>
  );
};

export default Review;

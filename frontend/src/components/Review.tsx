import React from "react";
import { FC } from "react";
import styles from "../styles/review.module.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

interface ReviewProps {
  userName: string;
  semester: string;
  reviewTitle: string;
  reviewRating: number;
  reviewComment: string;
}
const Review: FC<ReviewProps> = ({
  userName,
  semester,
  reviewTitle,
  reviewRating,
  reviewComment,
}) => {
  return (
    <>
      <Divider flexItem></Divider>
      <div className={styles.reviewContainer}>
        <h2 className={styles.nameAndDate}>
          <h3 className={styles.name}>{userName}</h3>
          <h3 className={styles.date}>{semester}</h3>
        </h2>
        <div className={styles.rating}>
          <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
            <Rating
              name="read-only"
              value={reviewRating}
              precision={0.1}
              readOnly
            />
            <Box sx={{ ml: 2 }}>{reviewRating}</Box>
          </Box>
        </div>
        <p className={styles.review}>
          <h3>{reviewTitle}</h3>
          <p>{reviewComment}</p>
        </p>
      </div>
    </>
  );
};

export default Review;

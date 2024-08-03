import React from "react";
import { FC } from "react";
import styles from "../styles/review.module.css";

interface ReviewProps {
  title: string;
  datePosted: number;
  rating: number;
  review: string;
  numLikes: number;
}
const Review: FC<ReviewProps> = ({
  title,
  datePosted,
  rating,
  review,
  numLikes,
}) => {
  const date = new Date(datePosted);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={styles.reviewCard}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.ratingAndDateRow}>
        <p className={styles.rating}>Rating: {rating}/5</p>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <p className={styles.review}>{review}</p>
      <p className={styles.upvotesRow}>{numLikes}👍 &nbsp; 2👎</p>
    </div>
  );
};

export default Review;

import React from "react";
import { FC } from "react";

interface ReviewProps {
  title: string;
  datePosted: number;
  rating: number;
  review: string;
}
const Review: FC<ReviewProps> = ({ title, datePosted, rating, review }) => {
  const date = new Date(datePosted);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div>
      <h2>{title}</h2>
      <h3>{rating}</h3>
      <p>{formattedDate}</p>
      <p>{review}</p>
    </div>
  );
};

export default Review;

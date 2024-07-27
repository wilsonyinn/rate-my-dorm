import React from "react";
import { FC } from "react";

interface ReviewProps {
  title: string;
  datePosted: string;
  rating: number;
  review: string;
}
const Review: FC<ReviewProps> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.rating}</h3>
      <p>{props.datePosted}</p>
      <p>{props.review}</p>
    </div>
  );
};

export default Review;

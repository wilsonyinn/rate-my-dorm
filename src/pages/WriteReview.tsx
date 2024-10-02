import React, { FC } from "react";

interface WriteReviewProps {
  dormName: string;
}

const WriteReview: FC<WriteReviewProps> = (props) => {
  return <div>{props.dormName}</div>;
};

export default WriteReview;

import React, { FC } from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import { useRef } from "react";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: string]: string } = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

interface WriteReviewProps {
  dormName: string;
}

const WriteReview: FC<WriteReviewProps> = (props) => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const ratingRef = useRef<HTMLInputElement | null>(null);
  const reviewRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="container">
      <Nav />
      <Banner
        dormName={props.dormName}
        bannerText={`Review ${props.dormName}`}
      />
      <form>
        <h2>Review Title</h2>
        <input
          type="text"
          ref={titleRef}
          placeholder="Give a title for your review"
        />
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        <h2>Reivew Comment</h2>
        <input type="text" />
      </form>
    </div>
  );
};

export default WriteReview;

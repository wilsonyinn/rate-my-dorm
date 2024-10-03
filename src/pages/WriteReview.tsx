import React, { useState, FC, useEffect } from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useRef } from "react";
import styles from "../styles/write-review.module.css";
import { useLocation, useNavigate } from "react-router-dom";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

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

const WriteReview: FC = () => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);
  const [dormName, setDormName] = useState("Hello");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const reviewRef = useRef<HTMLTextAreaElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.dormName) {
      setDormName(location.state.dormName);
    } else {
      navigate("/");
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(value);
    console.log(titleRef.current?.value);
    console.log(reviewRef.current?.value);
    alert("Successfully Submitted - Redirect to Reviews Page");
  }

  return (
    <div className={styles.container}>
      <Nav />
      <Banner dormName={dormName} bannerText={`Review ${dormName}`} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.reviewTitle}>Review Title</h2>
        <input
          className={styles.reviewTitleInput}
          type="text"
          ref={titleRef}
          placeholder="Give a title for your review"
        />
        <h2 className={styles.reviewRating}>Review Rating</h2>
        <div className={styles.rating}>
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
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </div>
        <h2 className={styles.reviewComment}>Review Comment</h2>
        <textarea
          className={styles.reviewCommentInput}
          placeholder="Write a helpful review..."
          ref={reviewRef}
          maxLength={500}
        />
        <Button className={styles.submit} variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <Footer />
    </div>
  );
};

export default WriteReview;

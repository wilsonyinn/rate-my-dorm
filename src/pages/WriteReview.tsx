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
import Divider from "@mui/material/Divider";

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
  const dormRef = useRef<HTMLInputElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (location.state && location.state.dormName) {
  //     setDormName(location.state.dormName);
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

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
      {/* <Banner dormName={dormName} bannerText={`Review ${dormName}`} /> */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Add a Review</h1>
        <Divider flexItem></Divider>
        <h2>Dorm</h2>
        <p>Let's gather some details about your dorm.</p>
        <h3 className={styles.reviewDorm}>Dorm Name</h3>
        <p>Select the dorm you lived in.</p>
        <select className={styles.reviewDormSelect}>
          <option value="">--Select your dorm--</option>
          <option value="manzanita-square">Manzanita Square</option>
          <option value="mary-park-hall">Mary Park Hall</option>
          <option value="mary-ward-hall">Mary Ward Hall</option>
          <option value="towers-at-centennial-square">
            Towers At Centennial Square
          </option>
          <option value="towers-at-junior-suites">
            Towers At Junior Suites
          </option>
          <option value="university-park-south">University Park South</option>
          <option value="university-park-north">University Park North</option>
          <option value="village-at-centennial-square">
            Village At Centennial Square
          </option>
          <option value="west-grove-common">West Grove Common</option>
        </select>

        <h3>Semester</h3>
        <p>When did you live in this dorm?</p>
        <select className={styles.semester}>
          <option value="">--Select your semester--</option>
          <option value="fall-2024">Fall 2024</option>
          <option value="summer-2024">Summer 2024</option>
          <option value="spring-2024">Spring 2024</option>
          <option value="winter-2024">Winter 2024</option>

          <option value="fall-2023">Fall 2023</option>
          <option value="summer-2023">Summer 2023</option>
          <option value="spring-2023">Spring 2023</option>
          <option value="winter-2023">Winter 2023</option>

          <option value="fall-2022">Fall 2022</option>
          <option value="summer-2022">Summer 2022</option>
          <option value="spring-2022">Spring 2022</option>
          <option value="winter-2022">Winter 2022</option>

          <option value="fall-2021">Fall 2021</option>
          <option value="summer-2021">Summer 2021</option>
          <option value="spring-2021">Spring 2021</option>
          <option value="winter-2021">Winter 2021</option>
        </select>

        <Divider flexItem></Divider>
        <h2>Review</h2>
        <p>Talk about your personal experience with this dorm.</p>
        <h3 className={styles.reviewTitle}>Review Title</h3>
        <input
          className={styles.reviewTitleInput}
          type="text"
          ref={titleRef}
          placeholder="Give a title for your review"
        />
        <h3 className={styles.reviewRating}>Review Rating</h3>
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
        <h3 className={styles.reviewComment}>Review Comment</h3>
        <textarea
          className={styles.reviewCommentInput}
          placeholder="Write a review about your experience..."
          ref={reviewRef}
          maxLength={500}
        />
        <Divider flexItem></Divider>
        <h2>Authentification</h2>
        <p>Let's verify that you are an SFSU student.</p>
        <h3>SFSU Account</h3>
        <input type="text" placeholder="jdoe45" />
        <h3>Code</h3>
        <input type="text" placeholder="12345" />

        <Button className={styles.submit} variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <Footer />
    </div>
  );
};

export default WriteReview;

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
  const dormRef = useRef<HTMLSelectElement | null>(null);
  const semesterRef = useRef<HTMLSelectElement | null>(null);
  const sfsuAccountRef = useRef<HTMLInputElement | null>(null);
  const codeRef = useRef<HTMLInputElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = {
      dormName: dormRef.current?.value,
      semester: semesterRef.current?.value,
      reviewTitle: titleRef.current?.value,
      reviewRating: value,
      reviewComment: reviewRef.current?.value,
      //dont need these
      // email: sfsuAccountRef.current?.value,
      // code: codeRef.current?.value
    };
    try {
      const response = await fetch("http://localhost:4000/api/upload-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
        alert("Failed to submit review");
      }

      const result = await response.json();
      alert("Successfully submitted");
      // setResponseMessage('Review submitted successfully!');
    } catch (error) {
      // setError(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <Nav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.formTitle}>Add a Review</h1>
        <Divider flexItem></Divider>
        <h2>Dorm</h2>
        <p>Let's gather some details about your dorm.</p>
        <h3 className={styles.reviewDorm}>Dorm Name</h3>
        <p>Select the dorm you lived in.</p>
        <select ref={dormRef} className={styles.reviewDormSelect}>
          <option value="">--Select your dorm--</option>
          <option value="Manzanita Square">Manzanita Square</option>
          <option value="Mary Park Hall">Mary Park Hall</option>
          <option value="Mary Ward Hall">Mary Ward Hall</option>
          <option value="Towers At Centennial Square">
            Towers At Centennial Square
          </option>
          <option value="Towers At Junior Suites">
            Towers At Junior Suites
          </option>
          <option value="University Park South">University Park South</option>
          <option value="University Park North">University Park North</option>
          <option value="Village At Centennial Square">
            Village At Centennial Square
          </option>
          <option value="West Grove Common">West Grove Common</option>
        </select>

        <h3>Semester</h3>
        <p>When did you live in this dorm?</p>
        <select ref={semesterRef} className={styles.semester}>
          <option value="">--Select your semester--</option>
          <option value="Fall 2024">Fall 2024</option>
          <option value="Summer 2024">Summer 2024</option>
          <option value="Spring 2024">Spring 2024</option>
          <option value="Winter 2024">Winter 2024</option>

          <option value="Fall 2023">Fall 2023</option>
          <option value="Summer 2023">Summer 2023</option>
          <option value="Spring 2023">Spring 2023</option>
          <option value="Winter 2023">Winter 2023</option>

          <option value="Fall 2022">Fall 2022</option>
          <option value="Summer 2022">Summer 2022</option>
          <option value="Spring 2022">Spring 2022</option>
          <option value="Winter 2022">Winter 2022</option>

          <option value="Fall 2021">Fall 2021</option>
          <option value="Summer 2021">Summer 2021</option>
          <option value="Spring 2021">Spring 2021</option>
          <option value="Winter 2021">Winter 2021</option>
        </select>

        <Divider flexItem></Divider>
        <h2>Review</h2>
        <p>Describe your personal experience with this dorm.</p>
        <h3 className={styles.reviewTitle}>Title</h3>
        <input
          className={styles.reviewTitleInput}
          type="text"
          ref={titleRef}
          placeholder="Give a title for your review"
        />
        <h3 className={styles.reviewRating}>Rating</h3>
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
        <h3 className={styles.reviewComment}>Comment</h3>
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
        <input ref={sfsuAccountRef} type="text" placeholder="jdoe45" />
        <h3>Code</h3>
        <input
          ref={codeRef}
          className={styles.code}
          type="text"
          placeholder="12345"
        />
        <Divider flexItem></Divider>

        <Button className={styles.submit} variant="contained" type="submit">
          Submit
        </Button>
      </form>
      <Footer />
    </div>
  );
};

export default WriteReview;

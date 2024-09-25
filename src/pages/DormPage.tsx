import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Review from "../components/Review";
import AddReview from "../components/AddReview";
import styles from "../styles/app.module.css";
import { FC } from "react";

interface ReviewData {
  title: string;
  datePosted: number;
  rating: number;
  review: string;
  numLikes: number;
}

interface DormPageData {
  dormName: string;
  reviewData: ReviewData[];
}

const DormPage: FC<DormPageData> = ({ dormName, reviewData }) => {
  const [data, setData] = useState<ReviewData[]>(reviewData);
  const [addReviewPage, setAddReviewPage] = useState<boolean>(false);

  // Changes to review page
  function openAddReviewPage() {
    setAddReviewPage(true); // change later
  }

  // helper for updating review data
  function updateReviews(newReview: ReviewData): void {
    setData([...data, newReview]);
  }

  function closeAddReviewPage(): void {
    setAddReviewPage(false);
  }

  const reviews = data.map((val) => {
    return (
      <Review
        title={val.title}
        datePosted={val.datePosted}
        rating={val.rating}
        review={val.review}
        numLikes={val.numLikes}
        key={uuidv4()}
      />
    );
  });
  
  return (
    <div className={styles.app}>
      {addReviewPage ? (
        <AddReview
          updateReviews={updateReviews}
          closeAddReviewPage={closeAddReviewPage}
        />
      ) : (
        <div className={styles.container}>
          <h1 className={styles.dorm}>{dormName}</h1>
          <button onClick={openAddReviewPage}>Add Review</button>
          {reviews}
        </div>
      )}
    </div>
  );
};
export default DormPage;

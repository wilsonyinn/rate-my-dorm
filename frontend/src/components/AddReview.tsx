import React, { FC, useRef } from "react";

interface AddReviewProps {
  updateReviews: Function;
  closeAddReviewPage: Function;
}

const AddReview: FC<AddReviewProps> = ({
  updateReviews,
  closeAddReviewPage,
}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const reviewRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    const title = titleRef.current?.value;
    const rating = ratingRef.current?.value;
    const review = reviewRef.current?.value;

    const newReview = {
      title: title,
      datePosted: Date.now(),
      rating: rating,
      review: review,
      numLikes: 0,
    };

    updateReviews(newReview);
    closeAddReviewPage();
  }

  // TODO : create handleSubmit in parent component and pass to AddReview component
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="range"
            id="rating"
            min="1"
            max="5"
            step="1"
            ref={ratingRef}
          />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea id="review" ref={reviewRef}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;

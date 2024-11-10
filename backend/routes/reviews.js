// routes/reviews.js
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// POST /upload-review
router.post("/upload-review", async (req, res) => {
  const { dormName, semester, reviewTitle, reviewRating, reviewComment } =
    req.body;

  // Validation (optional)
  if (
    !dormName ||
    !semester ||
    !reviewTitle ||
    !reviewRating ||
    !reviewComment
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a new review document
    const newReview = new Review({
      dormName,
      semester,
      reviewTitle,
      reviewRating,
      reviewComment,
    });

    // Save the review document to the database
    await newReview.save();

    res.status(201).json({ message: "Review uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload review" });
  }
});

// GET /get-reviews
router.get("/get-reviews", async (req, res) => {
  const { dormName } = req.body;

  if (!dormName) {
    return res.status(400).json({ error: "dormName is required" });
  }

  try {
    // Find reviews with the specified dormName
    const reviews = await Review.find({ dormName });
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// GET /get-number-of-reviews
router.get("/get-number-of-reviews", async (req, res) => {
  try {
    // Aggregate reviews to get the count of each dormName
    const dormCounts = await Review.aggregate([
      {
        $group: {
          _id: "$dormName",
          count: { $sum: 1 },
        },
      },
    ]);

    // Transform the result to the desired format
    const result = {};
    dormCounts.forEach((dorm) => {
      result[dorm._id] = dorm.count;
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching review counts:", error);
    res.status(500).json({ error: "Failed to fetch review counts" });
  }
});

module.exports = router;

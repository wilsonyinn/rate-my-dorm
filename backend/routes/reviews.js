// routes/reviews.js
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
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
    const userName =
      "AnonymousUser" + crypto.randomInt(1000000, 9999999).toString();
    // Create a new review document
    const newReview = new Review({
      userName,
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
  const { dormName } = req.query;

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

// API Endpoint to add multiple reviews
router.post("/add-reviews", async (req, res) => {
  try {
    const reviews = req.body; // Expecting an array of review objects
    if (!Array.isArray(reviews) || reviews.length === 0) {
      return res.status(400).json({ message: "Invalid or empty data" });
    }

    // Insert all reviews into the database
    const result = await Review.insertMany(reviews);
    res.status(201).json({
      message: "Reviews added successfully",
      addedReviews: result,
    });
  } catch (error) {
    console.error("Error adding reviews:", error);
    res
      .status(500)
      .json({ message: "Error adding reviews", error: error.message });
  }
});

// Endpoint to calculate average rating for each dorm
router.get("/average-ratings", async (req, res) => {
  console.log("endpoint reached");
  try {
    const averages = await Review.aggregate([
      {
        $group: {
          _id: "$dormName",
          averageRating: { $avg: "$reviewRating" },
        },
      },
      {
        $project: {
          _id: 0,
          dormName: "$_id",
          averageRating: { $round: ["$averageRating", 1] }, // Round to 1 decimal place
        },
      },
    ]);

    // Convert the result to an object format
    const result = averages.reduce((acc, { dormName, averageRating }) => {
      acc[dormName] = averageRating;
      return acc;
    }, {});

    res.status(200).json(result);
  } catch (error) {
    console.error("Error calculating average ratings:", error);
    res.status(500).json({
      message: "Error calculating average ratings",
      error: error.message,
    });
  }
});

module.exports = router;

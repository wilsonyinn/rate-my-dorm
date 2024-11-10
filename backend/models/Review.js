// models/Review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userName: { type: String, requred: true },
  dormName: { type: String, required: true },
  semester: { type: String, required: true },
  reviewTitle: { type: String, required: true },
  reviewRating: { type: Number, required: true, min: 1, max: 5 },
  reviewComment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);

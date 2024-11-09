const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();
const port = 4000;

require("dotenv").config();

// Enable CORS for all requests
app.use(cors());

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Import the reviews routes
const reviewsRoutes = require("./routes/reviews");

// Use the routes
app.use("/api", reviewsRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

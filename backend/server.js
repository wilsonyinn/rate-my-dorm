const express = require("express");
const cors = require("cors"); // Import CORS
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const connectDB = require("./db");

// Connect to MongoDB
connectDB();

// Enable CORS for all requests
app.use(cors());
app.use(bodyParser.json());
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Import the reviews routes
const reviewsRoutes = require("./routes/reviews");
const authRoutes = require("./routes/auth");

// Use the routes
app.use("/api", reviewsRoutes);
app.use("/api", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

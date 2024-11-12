require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const router = express.Router();

let verificationCodes = {}; // Store codes temporarily (in production, use a database)

// Configure Nodemailer with your email provider
const transporter = nodemailer.createTransport({
  service: "Gmail", // Example: using Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /send-code
router.post("/send-verification", async (req, res) => {
  const { email } = req.body;

  // Generate a random 6-digit code
  const verificationCode = crypto.randomInt(100000, 999999).toString();
  verificationCodes[email] = verificationCode; // Store the code temporarily
  // Send email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification Code",
      text: `Your verification code is: ${verificationCode}`,
    });
    res.status(200).json({ message: "Verification code sent" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

router.post("/verify-code", (req, res) => {
  const { email, code } = req.body;
  const storedCode = verificationCodes[email];

  if (storedCode && storedCode === code) {
    delete verificationCodes[email]; // Clear the code after successful verification
    res.status(200).json({ message: "Verification successful" });
  } else {
    res.status(400).json({ error: "Invalid verification code" });
  }
});

module.exports = router;

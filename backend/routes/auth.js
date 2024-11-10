const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bodyParser = require("body-parser");
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
  console.log(process.env.EMAIL_USER);

  // Send email
  try {
    await transporter.sendMail({
      from: "your-email@gmail.com",
      to: email,
      subject: "Email Verification Code",
      text: `Your verification code is: ${verificationCode}`,
    });
    res.status(200).json({ message: "Verification code sent" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
});

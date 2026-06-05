// server.js
// --------------------------------------------------------------------------
// A small backend server that receives the contact form and sends a REAL
// email using Nodemailer. Nodemailer cannot run in the browser, so it lives
// here on the server.
//
// Run it from the /server folder with:  npm install  then  npm start
// --------------------------------------------------------------------------

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors()); // allow the React app (on a different port) to call this
app.use(express.json()); // parse JSON request bodies

const PORT = process.env.PORT || 5000;

// The endpoint the contact form posts to.
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Server-side validation (never trust the browser alone).
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create the email transporter using credentials from the .env file.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // a Gmail APP PASSWORD (not your normal password)
      },
    });

    // Send the email.
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email, // so you can reply straight to the visitor
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // where it lands
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

app.listen(PORT, () =>
  console.log(`Contact server running on http://localhost:${PORT}`)
);

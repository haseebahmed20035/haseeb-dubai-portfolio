// api/contact.js
// --------------------------------------------------------------------------
// Vercel SERVERLESS FUNCTION.
// Any file inside the /api folder automatically becomes an API endpoint on
// Vercel. This one lives at  /api/contact  and sends the contact-form email
// using Nodemailer. No separate server needed in production.
//
// Set EMAIL_USER, EMAIL_PASS, and EMAIL_TO in the Vercel dashboard
// (Project -> Settings -> Environment Variables).
// --------------------------------------------------------------------------

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests.
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  // Server-side validation.
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // a Gmail APP PASSWORD (not your normal password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
}

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

// Where the contact form sends data:
//  - In local development (npm run dev) it uses your local Express server.
//  - In production on Vercel it uses the /api/contact serverless function
//    (same domain, so just a relative path).
const API_URL = import.meta.env.DEV
  ? "http://localhost:5000/api/contact"
  : "/api/contact";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  // status: "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");

  const mailto = `mailto:${profile.email}`;
  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Hi Haseeb, I saw your portfolio and would like to connect."
  )}`;

  // Client-side validation rules.
  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  // Send the message to the backend, which emails it via Nodemailer.
  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const inputClass =
    "w-full rounded-xl border border-line/70 bg-bg/40 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/60 focus:border-primary";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="06"
        title="Get In Touch"
        subtitle="Have a project or role in mind? Let's talk."
      />

      <div className="grid gap-10 md:grid-cols-2">
        {/* Left: direct buttons + socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p className="text-muted">
            The fastest ways to reach me are by email or WhatsApp. I usually
            reply within a day.
          </p>

          <a
            href={mailto}
            className="flex items-center gap-4 rounded-2xl glass p-5 transition-transform hover:scale-[1.02]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-xl text-primary">
              <FiMail />
            </span>
            <div>
              <p className="font-medium">Email me</p>
              <p className="text-sm text-muted">{profile.email}</p>
            </div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl glass p-5 transition-transform hover:scale-[1.02]"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-xl text-accent">
              <FaWhatsapp />
            </span>
            <div>
              <p className="font-medium">Message on WhatsApp</p>
              <p className="text-sm text-muted">{profile.phoneDisplay}</p>
            </div>
          </a>

          <div className="mt-2 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-12 w-12 place-items-center rounded-xl glass text-lg text-muted transition-all hover:-translate-y-1 hover:text-primary"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-12 w-12 place-items-center rounded-xl glass text-lg text-muted transition-all hover:-translate-y-1 hover:text-primary"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right: contact form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          noValidate
          className="gradient-border space-y-4 rounded-2xl glass p-6"
        >
          <div>
            <label className="mb-1 block text-sm text-muted">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClass}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell me about your project or role..."
              className={`${inputClass} resize-none`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-bg transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <FiSend />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Success / error feedback */}
          {status === "sent" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-accent"
            >
              <FiCheckCircle /> Thanks! Your message has been sent.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-red-400"
            >
              <FiAlertCircle /> Something went wrong. Is the server running?
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

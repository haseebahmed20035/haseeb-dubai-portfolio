import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/portfolio.js";

// Staggered entrance animation for the hero contents.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  // Cycle through the rotating job titles.
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setTitleIndex((i) => (i + 1) % profile.titles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  // Pre-built links
  const mailto = `mailto:${profile.email}`;
  const whatsappLink = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Hi Haseeb, I saw your portfolio and would like to connect."
  )}`;

  const socials = [
    { icon: <FiGithub />, href: profile.github, label: "GitHub" },
    { icon: <FiLinkedin />, href: profile.linkedin, label: "LinkedIn" },
    { icon: <FiMail />, href: mailto, label: "Email" },
    { icon: <FaWhatsapp />, href: whatsappLink, label: "WhatsApp" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Atmospheric glows for depth */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Status pill */}
        <motion.div
          variants={item}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.location}
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl font-extrabold leading-tight sm:text-7xl"
        >
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        {/* Rotating title */}
        <motion.div
          variants={item}
          className="mt-5 flex h-9 items-center justify-center font-mono text-lg text-primary sm:text-2xl"
        >
          <span className="text-muted">&lt;</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="mx-2"
            >
              {profile.titles[titleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="text-muted">/&gt;</span>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-2xl text-base text-muted sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 font-medium text-bg transition-transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full glass px-7 py-3 font-medium text-text transition-colors hover:text-primary"
          >
            Get in Touch
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 font-medium text-text transition-colors hover:text-accent"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={item}
          className="mt-9 flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full glass text-lg text-muted transition-all hover:-translate-y-1 hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <FiArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}

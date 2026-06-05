import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with React, Vite, Tailwind & Framer
          Motion.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-primary"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-primary"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-primary"
          >
            <FiMail />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full glass text-primary"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

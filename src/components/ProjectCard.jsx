import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import TiltCard from "./TiltCard.jsx";

// One project showcase card — now with full 3D mouse-tracking tilt + glare.
// Props: project object { name, tagline, tech, description, live, repo }, index
export default function ProjectCard({ project, index }) {
  return (
    // Outer wrapper handles the scroll-in entrance animation
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="h-full"
    >
      {/* Inner TiltCard handles the 3D hover effect */}
      <TiltCard
        max={8}
        className="group overflow-hidden rounded-3xl glass p-7 transition-shadow hover:neon-glow"
      >
        {/* Glow that appears on hover */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content sits slightly "above" the card in 3D space */}
        <div style={{ transform: "translateZ(30px)" }}>
          {/* Tagline + index */}
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              {project.tagline}
            </span>
            <span className="font-mono text-xs text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-primary">
            {project.name}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-line/70 px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links (only show buttons that have a URL) */}
          <div className="mt-6 flex gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
              >
                <FiGithub /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

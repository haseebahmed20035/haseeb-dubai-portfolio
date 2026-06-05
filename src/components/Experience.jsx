import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading index="03" title="Experience" />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-line to-transparent" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-16"
            >
              {/* Timeline node */}
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full glass text-primary neon-glow">
                <FiBriefcase />
              </span>

              <div className="gradient-border rounded-2xl glass p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{job.role}</h3>
                  <span className="font-mono text-xs text-primary">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

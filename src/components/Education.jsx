import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading index="05" title="Education" />

      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-accent via-line to-transparent" />

        <div className="space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-16"
            >
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full glass text-accent neon-glow">
                <FiAward />
              </span>

              <div className="gradient-border rounded-2xl glass p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-primary">
                  {edu.school} · {edu.location}
                </p>
                <p className="mt-3 text-sm text-muted">{edu.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

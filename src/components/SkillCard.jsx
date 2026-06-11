import { motion } from "framer-motion";
import TiltCard from "./TiltCard.jsx";

// One animated card for a skill category — now with 3D tilt on hover.
// Props: category (string), items (array of strings), index (number)
export default function SkillCard({ category, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <TiltCard
        max={9}
        className="group gradient-border rounded-2xl glass p-6 transition-shadow hover:neon-glow"
      >
        <div style={{ transform: "translateZ(24px)" }}>
          {/* Category title with a small index */}
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-bold">{category}</h3>
            <span className="font-mono text-xs text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line/70 bg-primary/5 px-3 py-1 text-xs text-muted transition-colors group-hover:border-primary/40 group-hover:text-text"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

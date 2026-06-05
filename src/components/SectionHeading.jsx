import { motion } from "framer-motion";

// A reusable heading used at the top of each section.
// Props: index ("01"), title ("About Me"), subtitle (optional)
export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-2 font-mono text-sm tracking-widest text-primary"
      >
        {index} / {title.toUpperCase()}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-display text-4xl font-bold sm:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-4 max-w-xl text-muted"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative gradient underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-5 h-[2px] w-24 origin-center rounded-full bg-gradient-to-r from-primary to-accent"
      />
    </div>
  );
}

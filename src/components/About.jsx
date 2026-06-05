import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import SectionHeading from "./SectionHeading.jsx";
import { about, profile } from "../data/portfolio.js";

export default function About() {
  const facts = [
    { icon: <FiMapPin />, label: profile.location },
    { icon: <FiMail />, label: profile.email },
    { icon: <FiPhone />, label: profile.phoneDisplay },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About Me" />

      <div className="grid items-start gap-10 md:grid-cols-5">
        {/* Left: paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 md:col-span-3"
        >
          {about.map((para, i) => (
            <p key={i} className="leading-relaxed text-muted">
              {para}
            </p>
          ))}
        </motion.div>

        {/* Right: quick facts card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-border rounded-2xl glass p-6 md:col-span-2"
        >
          <p className="mb-4 font-mono text-xs tracking-widest text-primary">
            QUICK FACTS
          </p>
          <ul className="space-y-4">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-3 text-sm">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  {f.icon}
                </span>
                <span className="break-all text-muted">{f.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

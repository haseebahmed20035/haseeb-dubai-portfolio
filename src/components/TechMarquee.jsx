// =========================================================================
//  TechMarquee — infinite scrolling strip of your core technologies,
//  placed right under the hero. The list is duplicated so the CSS
//  animation can loop seamlessly (translateX -50%).
// =========================================================================
const TECH = [
  "React Native",
  "React",
  "Node.js",
  "Express.js",
  "MySQL",
  "Firebase",
  "Python",
  "Streamlit",
  "Hugging Face",
  "LLM Integration",
  "Agentic AI",
  "REST APIs",
  "Tailwind CSS",
  "Git & CI/CD",
];

export default function TechMarquee() {
  const items = [...TECH, ...TECH]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden border-y border-line/50 bg-surface/30 py-4">
      {/* Edge fade so items melt in/out instead of hard-cutting */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="marquee-track flex w-max items-center gap-10">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-muted"
          >
            {t}
            <span className="text-primary/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

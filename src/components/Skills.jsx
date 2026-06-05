import SectionHeading from "./SectionHeading.jsx";
import SkillCard from "./SkillCard.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="02"
        title="Core Skills"
        subtitle="The technologies and tools I work with across the stack."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <SkillCard
            key={group.category}
            category={group.category}
            items={group.items}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

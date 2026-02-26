"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI / Machine Learning",
    description: "Designing, training, and deploying intelligent models.",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Machine Learning Algorithms",
      "Deep Learning",
      "LLMs",
    ],
  },
  {
    title: "Frontend Development",
    description: "Crafting modern, responsive web interfaces.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Next.js"],
  },
  {
    title: "IoT & Embedded Systems",
    description: "Connecting hardware to the cloud with real-time data.",
    skills: ["ESP32", "Firebase Realtime Database", "Embedded C"],
  },
  {
    title: "DevOps & Tools",
    description: "Automating workflows and shipping reliable software.",
    skills: ["Git", "Bash", "Docker", "CI/CD Pipelines", "Linux"],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-8"
    >
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Skills &amp;{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
          A stack that connects{" "}
          <span className="text-zinc-200">machine learning</span>,{" "}
          <span className="text-zinc-200">embedded devices</span>, and{" "}
          <span className="text-zinc-200">modern frontend engineering</span>.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-blue-500/15 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative space-y-3">
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
              <p className="text-sm text-zinc-400">
                {category.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-200 transition hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-purple-600/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;


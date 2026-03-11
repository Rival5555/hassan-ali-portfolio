"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for scripting, automation, and data querying.",
    skills: ["Python", "SQL", "Bash / Shell Scripting"],
  },
  {
    title: "Machine Learning & AI",
    description: "Building, training, and fine-tuning intelligent models.",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Model Training & Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "MLOps & Deployment",
    description: "Bridging the gap from notebooks to production.",
    skills: [
      "FastAPI",
      "AWS SageMaker",
      "Docker",
      "Kubernetes",
      "MLflow",
      "CI/CD Pipelines",
      "REST API Development",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deploying and scaling models in the cloud.",
    skills: [
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Azure ML",
      "Cloud Storage & Compute",
    ],
  },
  {
    title: "Data Engineering",
    description: "Preparing pipelines for model ingestion.",
    skills: [
      "Data Preprocessing",
      "Feature Engineering",
      "NumPy",
      "Pandas",
      "Data Pipelines",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "The environment and utilities for modern engineering.",
    skills: [
      "Git & GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Weights & Biases",
      "Linux / Ubuntu",
    ],
  },
  {
    title: "Soft Skills",
    description: "Collaboration and continuous learning mindsets.",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Continuous Learning",
      "Team Collaboration",
      "Technical Documentation",
    ],
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
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
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
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0D1117] p-5 shadow-[0_0_20px_rgba(20,184,166,0.05)] transition hover:shadow-[0_0_25px_rgba(20,184,166,0.1)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                    className="rounded-full border border-teal-500/20 bg-[#010409]/80 px-3 py-1 text-xs font-medium text-zinc-300 transition hover:border-teal-400 hover:bg-teal-500/10 hover:text-white"
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


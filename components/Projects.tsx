"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

const PROJECTS: Project[] = [
  {
    title: "Air Quality Monitoring System",
    description:
      "Real-time air quality tracking using ESP32 sensors with data synced to Firebase Realtime Database and visualized on a live web dashboard.",
    tags: ["ESP32", "Firebase", "IoT", "Embedded C", "Realtime Database"],
    github: "https://github.com/Rival5555",
    demo: "#",
  },
  {
    title: "Diabetic Retinopathy Classification",
    description:
      "Deep learning model for automated detection and classification of diabetic retinopathy stages from retinal fundus images using CNN architecture.",
    tags: ["Python", "TensorFlow", "CNN", "Medical Imaging", "Deep Learning"],
    github: "https://github.com/Rival5555",
    demo: "#",
  },
  {
    title: "University Events Management Website",
    description:
      "A React.js web application for browsing, managing, and registering for university events with a clean modern UI.",
    tags: ["React.js", "HTML", "CSS", "JavaScript", "Frontend"],
    github: "https://github.com/Rival5555",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-8"
    >
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
          A selection of work that combines{" "}
          <span className="text-zinc-200">AI</span>,{" "}
          <span className="text-zinc-200">IoT</span>, and{" "}
          <span className="text-zinc-200">modern frontend engineering</span>.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-blue-500/15 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative mb-3 flex-1 space-y-2">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400">
                {project.description}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-300 transition group-hover:border-blue-500 group-hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-zinc-700 bg-zinc-950/70 px-3 py-2 text-center text-xs font-semibold text-zinc-100 transition hover:border-blue-500 hover:bg-zinc-900"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-2 text-center text-xs font-semibold text-white shadow-md shadow-blue-500/30 transition hover:shadow-purple-500/40"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;


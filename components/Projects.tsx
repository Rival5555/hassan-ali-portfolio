"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  category: string;
  problemStatement: string;
  github: string;
  demo: string;
};

const PROJECTS_DATA: Project[] = [
  {
    title: "Diabetic Retinopathy Classification",
    category: "Deep Learning · Medical Imaging",
    problemStatement: "Manual screening of diabetic retinopathy is slow and prone to human diagnostic error. This project automates diagnostic grading to assist ophthalmologists with high reliability.",
    github: "https://github.com/Rival5555",
    demo: "#",
  },
  {
    title: "Automated MLOps Training Pipeline",
    category: "Infrastructure · Cloud Automation",
    problemStatement: "Production models degrade quickly due to real-world data drift. This automated framework monitors features and retrains endpoints without manual intervention.",
    github: "https://github.com/Rival5555",
    demo: "#",
  },
];

export default function Projects() {

  return (
    <section id="projects" className="relative space-y-10 py-6 md:py-8 lg:py-12 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-cyan absolute right-0 bottom-1/3 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-fluid-body text-muted-text pt-2 leading-relaxed">
          Developing production-grade ML applications and orchestrating cloud pipelines.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS_DATA.map((project, idx) => {
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group flex flex-col rounded-3xl p-5 project-card relative overflow-hidden"
            >
              {/* Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-accent/5 via-transparent to-transparent rounded-tr-3xl" />

              <div className="space-y-4 flex-1">
                {/* Header */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary-accent font-mono-custom">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-primary-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Problem Statement */}
                <div className="space-y-1 bg-slate-950/45 p-3 rounded-2xl border border-white/5">
                  <span className="text-[9px] uppercase font-bold text-muted-text/80 tracking-wider font-mono-custom">Problem Statement</span>
                  <p className="text-xs text-text/90 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>



              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-4 mt-4 border-cyan-gradient-t">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl btn-primary-custom py-3 text-xs font-semibold min-h-[44px] font-mono-custom"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl btn-primary-custom py-3 text-xs font-semibold min-h-[44px] font-mono-custom"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

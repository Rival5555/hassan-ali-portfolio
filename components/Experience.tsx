"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Star } from "lucide-react";

type Milestone = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
};

const EXPERIENCE_DATA: Milestone[] = [
  {
    role: "Machine Learning Engineer Intern",
    company: "Cognitive Systems Corp",
    duration: "Jan 2024 - Present",
    description: [
      "Accelerated deep learning model execution on hardware nodes using TensorRT, achieving a 32% latency reduction (P99 latency decreased from 22ms to 15ms).",
      "Built resilient FastAPI web service modules containerized with multi-stage Docker builds, orchestrating microservices to support high throughput.",
      "Designed and configured an automated retraining trigger hook using AWS SageMaker and Lambda to combat feature distribution drifts."
    ],
    skills: ["FastAPI", "Docker", "TensorRT", "AWS SageMaker", "MLflow"],
  },
  {
    role: "AI & IoT Research Assistant",
    company: "University Embedded AI Labs",
    duration: "Jun 2023 - Dec 2023",
    description: [
      "Optimized telemetry pipelines feeding sensor outputs from ESP32 edge components into Firebase, ensuring sub-second sync intervals.",
      "Trained sequential LSTM models to recognize air degradation anomalies, achieving 94.2% validation accuracy against baseline thresholds.",
      "Developed custom filtering scripts in Embedded C, reducing noise ratios from raw sensor signals directly at the hardware layer."
    ],
    skills: ["ESP32", "TensorFlow", "Embedded C", "Firebase", "Time-Series"],
  },
  {
    role: "Machine Learning Lead (Academic Projects)",
    company: "Undergrad AI Research Group",
    duration: "Sep 2022 - May 2023",
    description: [
      "Led a small-scale research team to implement a CNN classifier for diabetic retinopathy diagnostic grading on the APTOS dataset.",
      "Engineered data augmentations and customized weighted focal loss parameters, resolving severe model skew from high class imbalance.",
      "Conducted 40+ hyperparameter tracking sweeps using Weights & Biases (W&B) to finalize optimal neural network weight checkpoints."
    ],
    skills: ["PyTorch", "Weights & Biases", "Data Augmentation", "CNN", "Scikit-Learn"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative space-y-10 py-3 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-violet absolute left-0 top-1/3 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Professional{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Experience
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-sm text-muted-text pt-2 leading-relaxed">
          My journey in AI engineering, focusing on deploying intelligent pipelines, refining network runtimes, and building IoT systems.
        </p>
      </div>

      <div className="relative border-l border-white/10 pl-6 ml-4 space-y-10">
        {EXPERIENCE_DATA.map((milestone, idx) => (
          <motion.div
            key={milestone.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative group"
          >
            {/* Interactive timeline bullet node */}
            <span className="absolute -left-[35px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 border-2 border-primary-accent transition-all duration-300 group-hover:scale-130 group-hover:border-secondary-accent group-hover:shadow-[0_0_12px_rgba(139,92,246,0.8)]">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-accent group-hover:bg-primary-accent" />
            </span>

            {/* Timeline content glass-card */}
            <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-4 relative overflow-hidden group-hover:border-primary-accent/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-accent/5 via-transparent to-transparent rounded-tr-3xl" />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary-accent">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">{milestone.company}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide group-hover:text-primary-accent transition-colors">
                    {milestone.role}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-slate-950/40 px-3 py-1 text-xs text-muted-text font-mono">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{milestone.duration}</span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2.5">
                {milestone.description.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex gap-2.5 items-start text-xs text-muted-text leading-relaxed">
                    <Star className="h-4 w-4 text-secondary-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {milestone.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary-accent/10 bg-primary-accent/5 px-2.5 py-0.5 text-xs text-primary-accent font-medium font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

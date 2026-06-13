"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Database, Eye, Cloud } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: any;
  skills: string[];
};

const SKILL_DATA: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C++", "SQL", "Linux / Shell Scripting"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["Scikit-Learn", "XGBoost", "PyTorch", "TensorFlow"],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    skills: ["OpenCV", "CNNs", "Object Detection", "Image Classification"],
  },
  {
    title: "MLOps",
    icon: Database,
    skills: ["Docker", "MLflow", "FastAPI", "CI/CD Pipelines"],
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "AWS SageMaker", "S3 & EC2 compute"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative space-y-10 py-12 md:py-16 lg:py-24 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-violet absolute left-0 bottom-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-white">
          Technical{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Competencies
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-fluid-body text-muted-text pt-2 leading-relaxed">
          A targeted stack specialized in constructing high-performing model architectures and orchestrating production deployments.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SKILL_DATA.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="glass-card rounded-3xl p-5 border border-white/5 relative overflow-hidden group hover:border-primary-accent/30 transition-all duration-300"
            >
              {/* Subtle hover accent light */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 group-hover:opacity-40 transition-opacity" />

              <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
                <div className="p-2 rounded-xl bg-primary-accent/10 border border-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950 transition-colors">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">{category.title}</h3>
              </div>

              {/* Skills Tags layout */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/5 bg-slate-950/40 px-3.5 py-1.5 text-xs text-text/90 font-medium tracking-wide hover:border-primary-accent/30 hover:bg-slate-900 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

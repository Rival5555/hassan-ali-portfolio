"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Cloud, Code2 } from "lucide-react";

type SkillGroup = {
  title: string;
  icon: any;
  skills: string[];
  color: "cyan" | "violet";
};

const SKILLS_DATA: SkillGroup[] = [
  {
    title: "ML & AI",
    icon: Brain,
    color: "cyan",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "OpenCV",
      "LangChain",
      "LlamaIndex",
      "RAG Architectures",
      "OpenAI & Gemini APIs",
      "CNNs",
      "LSTMs",
      "Model Quantization"
    ]
  },
  {
    title: "Embedded / IoT",
    icon: Cpu,
    color: "violet",
    skills: [
      "ESP32",
      "Arduino",
      "Raspberry Pi",
      "Embedded C/C++",
      "UART / I2C / SPI",
      "Sensors & Actuators",
      "FreeRTOS"
    ]
  },
  {
    title: "Backend & Infra",
    icon: Cloud,
    color: "cyan",
    skills: [
      "FastAPI",
      "Next.js",
      "Node.js",
      "React",
      "Docker",
      "AWS (SageMaker/S3/EC2)",
      "Firebase",
      "MLflow",
      "CI/CD Pipelines",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Linux"
    ]
  },
  {
    title: "Languages",
    icon: Code2,
    color: "violet",
    skills: ["Python", "C/C++", "SQL", "TypeScript", "JavaScript", "HTML/CSS", "Bash"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative space-y-10 py-6 md:py-8 lg:py-12 scroll-mt-20">
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
          A focused categorization of tools and frameworks engineered to design model architectures, run edge devices, and orchestrate server workloads.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {SKILLS_DATA.map((group, idx) => {
          const Icon = group.icon;
          const isCyan = group.color === "cyan";
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group transition-all duration-300 ${
                isCyan ? "hover:border-primary-accent/30" : "hover:border-secondary-accent/30"
              }`}
            >
              {/* Subtle hover accent light */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-40 transition-opacity bg-gradient-to-r ${
                  isCyan ? "from-primary-accent to-cyan-400" : "from-secondary-accent to-violet-400"
                }`}
              />

              {/* Watermark outline icon */}
              <div
                className={`absolute -right-4 -top-4 text-white/[0.015] transition-colors pointer-events-none z-0 ${
                  isCyan ? "group-hover:text-primary-accent/[0.02]" : "group-hover:text-secondary-accent/[0.02]"
                }`}
              >
                <Icon className="w-28 h-28" strokeWidth={1} />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2.5 border-b border-white/5 pb-3">
                  <div
                    className={`p-2 rounded-xl transition-colors border ${
                      isCyan
                        ? "bg-primary-accent/10 border-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950"
                        : "bg-secondary-accent/10 border-secondary-accent/10 text-secondary-accent group-hover:bg-secondary-accent group-hover:text-slate-950"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">{group.title}</h3>
                </div>

                {/* Skills Tags layout */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/5 bg-slate-950/40 px-3.5 py-1.5 text-xs text-text/90 font-medium tracking-wide hover:border-primary-accent/30 hover:bg-slate-900 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}



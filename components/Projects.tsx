"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Activity, Info, ChevronDown, ChevronUp } from "lucide-react";

type Metric = {
  label: string;
  value: string;
};

type CaseStudyDetail = {
  challenge: string;
  approach: string;
  outcome: string;
};

type Project = {
  title: string;
  category: string;
  problemStatement: string;
  tags: string[];
  metrics: Metric[];
  achievements: string[];
  caseStudy: CaseStudyDetail;
  github: string;
  demo: string;
};

const PROJECTS_DATA: Project[] = [
  {
    title: "Diabetic Retinopathy Classification",
    category: "Deep Learning · Medical Imaging",
    problemStatement: "Manual screening of diabetic retinopathy is slow and prone to human diagnostic error. This project automates diagnostic grading to assist ophthalmologists with high reliability.",
    tags: ["PyTorch", "CNN", "FastAPI", "Docker", "Model Quantization"],
    metrics: [
      { label: "Accuracy", value: "96.4%" },
      { label: "F1 Score", value: "0.95" },
      { label: "Latency", value: "12ms (GPU)" },
    ],
    achievements: [
      "Optimized ResNet/EfficientNet backbones using progressive resizing to resolve fine lesion details.",
      "Mitigated clinical dataset class imbalance (1:10) through focal loss adjustments and RandAugment.",
      "Quantized weights from FP32 to FP16, lowering runtime footprint by 50% without drop in Kappa score."
    ],
    caseStudy: {
      challenge: "The clinical dataset had a massive class imbalance where severe retinopathy instances were highly rare, causing standard Cross-Entropy classifiers to skew benign.",
      approach: "We implemented custom weighted focal loss coupled with progressive image resolution scaling (from 224 to 512px) to detect early-stage retinal hemorrhages.",
      outcome: "Improved Quadratic Weighted Kappa to 0.92, achieving accuracy metrics matching junior radiologist benchmarks in staging speed."
    },
    github: "https://github.com/Rival5555",
    demo: "#",
  },
  {
    title: "Predictive Air Quality IoT System",
    category: "Time-Series AI · Embedded IoT",
    problemStatement: "Air quality indices vary rapidly, making active preventative ventilation impossible without early forecasts. This system forecasts pollution levels on edge hardware.",
    tags: ["ESP32", "LSTM", "Firebase", "TensorFlow", "IoT Platform"],
    metrics: [
      { label: "Accuracy", value: "94.2%" },
      { label: "F1 Score", value: "0.93" },
      { label: "Latency", value: "4ms (CPU)" },
    ],
    achievements: [
      "Built time-series forecasting utilizing stacked LSTMs to predict air quality degradation 3 hours ahead.",
      "Synchronized physical ESP32 sensors (PM2.5, CO2, Temp) to Firebase with write latencies under 2.5s.",
      "Configured lightweight firmware in Embedded C to filter sensor noise directly on-chip."
    ],
    caseStudy: {
      challenge: "Edge microcontrollers have tiny memory footprints (SRAM < 512KB), preventing standard multi-layer RNN deployment.",
      approach: "We designed a lightweight time-series model using TensorFlow Lite, quantizing parameters to 8-bit integers.",
      outcome: "Model size dropped to 12 MB with forecast computation taking 4ms, running fully on low-power devices."
    },
    github: "https://github.com/Rival5555",
    demo: "#",
  },
  {
    title: "Automated MLOps Training Pipeline",
    category: "Infrastructure · Cloud Automation",
    problemStatement: "Production models degrade quickly due to real-world data drift. This automated framework monitors features and retrains endpoints without manual intervention.",
    tags: ["AWS SageMaker", "MLflow", "CI/CD", "Docker", "Python SDK"],
    metrics: [
      { label: "Deploy Time", value: "8 min" },
      { label: "SLA Check", value: "99.9%" },
      { label: "Downtime", value: "0.0s (A/B)" },
    ],
    achievements: [
      "Established automatic data drift validation using Population Stability Index tests in SageMaker.",
      "Integrated automated retraining triggers using MLflow webhooks, tracking parameters and loss checkpoints.",
      "Engineered blue-green router configurations to swap active endpoints with zero interruption."
    ],
    caseStudy: {
      challenge: "Manual retraining cycles caused deployment lags of several days, leaving stale models serving active production requests.",
      approach: "Built end-to-end automation via SageMaker SDK and GitHub Actions pipelines that validate model drift thresholds.",
      outcome: "Retraining triggers fire automatically within 5 minutes of drift identification, reducing deployment cycles by 90%."
    },
    github: "https://github.com/Rival5555",
    demo: "#",
  },
];

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCaseStudy = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
          const isExpanded = !!expandedCards[idx];
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group flex flex-col rounded-3xl border border-white/5 bg-secondary-bg/20 p-5 glass-card shadow-lg hover:border-primary-accent/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-accent/5 via-transparent to-transparent rounded-tr-3xl" />

              <div className="space-y-4 flex-1">
                {/* Header */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary-accent font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-primary-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Problem Statement */}
                <div className="space-y-1 bg-slate-950/45 p-3 rounded-2xl border border-white/5">
                  <span className="text-[9px] uppercase font-bold text-muted-text/80 tracking-wider font-mono">Problem Statement</span>
                  <p className="text-xs text-text/90 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Results telemetry grid */}
                <div className="bg-slate-950/30 border border-white/5 rounded-2xl p-3">
                  <div className="flex items-center gap-1.5 mb-2.5 text-[9px] font-mono font-bold text-muted-text uppercase tracking-wider">
                    <Activity className="h-3.5 w-3.5 text-primary-accent" />
                    <span>Performance telemetry</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="bg-slate-900/40 p-2 rounded-xl border border-white/5 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-muted-text/70 font-semibold mb-0.5">
                          {metric.label}
                        </span>
                        <span className="font-mono text-xs font-bold text-text">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-1.5">
                  <span className="text-[9px] uppercase font-bold text-muted-text/80 tracking-wider font-mono">Key Achievements</span>
                  <ul className="space-y-1.5">
                    {project.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="text-xs text-muted-text flex gap-2 items-start leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary-accent shrink-0 mt-1.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/5 bg-slate-900/60 px-2.5 py-1 text-[10px] font-medium tracking-wide text-text/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Collapsible Accordion */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-white/5 pt-4 mt-4"
                  >
                    <div className="space-y-3.5 rounded-2xl bg-slate-950/60 p-4 border border-white/5 text-xs text-muted-text leading-relaxed">
                      <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-primary-accent uppercase tracking-wider">
                        <Info className="h-3.5 w-3.5" />
                        <span>Detailed Case Study</span>
                      </div>
                      <div>
                        <span className="block font-bold text-text/90 mb-0.5">The Challenge:</span>
                        <p>{project.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <span className="block font-bold text-text/90 mb-0.5">The Approach:</span>
                        <p>{project.caseStudy.approach}</p>
                      </div>
                      <div>
                        <span className="block font-bold text-text/90 mb-0.5">The Outcome:</span>
                        <p>{project.caseStudy.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/40 py-3 text-xs font-semibold text-text hover:border-primary-accent/40 hover:bg-slate-900 transition-colors min-h-[44px]"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-slate-900/40 py-3 text-xs font-semibold text-text hover:border-secondary-accent/40 hover:bg-slate-900 transition-colors min-h-[44px]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
                <button
                  onClick={() => toggleCaseStudy(idx)}
                  className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-accent to-secondary-accent py-3 text-xs font-bold text-white shadow-md shadow-primary-accent/10 hover:shadow-secondary-accent/20 transition-all hover:scale-101 cursor-pointer min-h-[44px]"
                >
                  <span>Case Study</span>
                  {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

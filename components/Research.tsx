"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, ChevronUp, Github, Eye, MessageSquare, Cpu, Layers } from "lucide-react";

type FocusArea = {
  title: string;
  description: string;
  icon: any;
};

type Paper = {
  title: string;
  journal: string;
  authors: string;
  abstract: string;
  pdfUrl: string;
  codeUrl: string;
  date: string;
};

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Computer Vision",
    description: "Spatial attention mechanisms, convolutional neural networks (CNNs), and automated medical imaging diagnostics.",
    icon: Eye,
  },
  {
    title: "Large Language Models",
    description: "Efficient model fine-tuning methodologies, context window optimization, and prompt routing infrastructures.",
    icon: MessageSquare,
  },
  {
    title: "MLOps Architectures",
    description: "Data drift monitoring loops, experiment tracking integrations, and zero-downtime inference deployment pipelines.",
    icon: Layers,
  },
  {
    title: "Edge & Embedded AI",
    description: "Post-training quantization configurations (INT8/FP16) and low-latency model compilation for microcontrollers.",
    icon: Cpu,
  },
];

const PAPERS_DATA: Paper[] = [
  {
    title: "Ensemble Convolutional Networks with Spatial Attention for Retinopathy Severity Grading",
    journal: "Journal of Clinical Deep Learning (Preprint)",
    authors: "Hassan Ali, Sarah Johnson, M. Amin",
    date: "2024",
    abstract:
      "Automated diabetic retinopathy grading is key to preventing blindness. We present an ensemble approach using ResNet and EfficientNet backbones enhanced with spatial attention modules. By applying spatial attention, our models focus on microaneurysms and hemorrhages. Trained on the APTOS 2019 dataset, our model achieves a Quadratic Weighted Kappa score of 0.92 and a classification accuracy of 96.4%, showing strong robustness against varying image lightings.",
    pdfUrl: "#",
    codeUrl: "https://github.com/Rival5555",
  },
  {
    title: "Lightweight Time-Series Prediction and Anomaly Detection for Resource-Constrained IoT Nodes",
    journal: "Proceedings of the International Conference on Embedded AI & IoT (IC-EA-IoT)",
    authors: "Hassan Ali, Dr. F. Ahmed",
    date: "2023",
    abstract:
      "Deploying time-series models on edge microcontrollers requires strict latency and memory limits. This paper proposes a lightweight LSTM network architecture for air quality prediction on ESP32 microcontrollers. By quantizing LSTM weights to 8-bit integers, we reduce storage requirements by 75% (down to 12 MB) and inference latency to 4ms, while maintaining a 94.2% forecasting accuracy for PM2.5 levels. Data is synced in real-time to a Firebase Cloud Database.",
    pdfUrl: "#",
    codeUrl: "https://github.com/Rival5555",
  },
];

export default function Research() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="research" className="relative space-y-12 py-3 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-violet absolute left-0 bottom-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Research &{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Publications
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-sm text-muted-text pt-2 leading-relaxed">
          Technical writing and academic research covering medical image classifiers and lightweight edge computing architectures.
        </p>
      </div>

      {/* Focus Areas Grid */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-text/80 font-mono">Core Focus Areas</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                viewport={{ once: true, amount: 0.15 }}
                className="glass-card rounded-2xl p-4.5 border border-white/5 relative overflow-hidden group hover:border-primary-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-primary-accent/10 border border-primary-accent/10 text-primary-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-wide">{area.title}</h4>
                </div>
                <p className="text-[11px] text-muted-text leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-text/80 font-mono">Academic Publications</h3>
        <div className="space-y-6">
          {PAPERS_DATA.map((paper, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card rounded-3xl p-5 border border-white/5 space-y-4 relative overflow-hidden group hover:border-primary-accent/30 transition-all duration-300"
              >
                {/* Paper Details */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono font-bold text-secondary-accent bg-secondary-accent/10 border border-secondary-accent/20 px-2.5 py-0.5 rounded-full">
                    PAPER · {paper.date}
                  </span>
                  <h4 className="text-base font-bold text-white tracking-wide leading-snug group-hover:text-primary-accent transition-colors">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-primary-accent font-semibold">{paper.journal}</p>
                  <p className="text-xs text-muted-text">
                    <span className="font-semibold text-text/80">Authors:</span> {paper.authors}
                  </p>
                </div>

                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="flex items-center gap-1.5 text-xs font-bold text-text hover:text-primary-accent transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? "Hide Abstract" : "View Abstract"}</span>
                  {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>

                {/* Abstract Accordion */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden bg-slate-950/40 rounded-2xl border border-white/5"
                    >
                      <div className="p-4 space-y-1.5">
                        <span className="block text-[9px] uppercase font-bold text-muted-text tracking-wider font-mono">
                          Abstract
                        </span>
                        <p className="text-xs text-muted-text leading-relaxed">
                          {paper.abstract}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex gap-4 pt-3 border-t border-white/5">
                  <a
                    href={paper.pdfUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-text hover:text-primary-accent transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Preprint PDF</span>
                  </a>
                  <a
                    href={paper.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-text hover:text-primary-accent transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code Repository</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

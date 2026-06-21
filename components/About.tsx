"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, BookOpen, Target, GraduationCap } from "lucide-react";

type TabType = "expertise" | "education" | "goals";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("expertise");

  const tabContents = {
    expertise: (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="space-y-4"
      >
        <p className="text-muted-text text-sm leading-relaxed">
          I specialize in designing and deploying end-to-end Machine Learning systems. My expertise bridges the gap between deep mathematical modeling and production-scale software engineering, focusing on pipeline automation and low-latency deployments.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <div className="bg-[#1a1a2e] shadow-neu-sm border border-white/5 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-primary-accent uppercase tracking-wider mb-1">Production AI Systems</h4>
            <p className="text-[11px] text-muted-text leading-normal">Implementing customized computer vision architectures, time-series forecasting frameworks, and NLP pipelines optimized for deployment environments.</p>
          </div>
          <div className="bg-[#1a1a2e] shadow-neu-sm border border-white/5 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-primary-accent uppercase tracking-wider mb-1">MLOps Infrastructure</h4>
            <p className="text-[11px] text-muted-text leading-normal">Orchestrating model serving endpoints with FastAPI and Docker, configuring S3 data stores, and establishing automated model tracking via MLflow.</p>
          </div>
        </div>
      </motion.div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="space-y-4"
      >
        <div className="space-y-4">
          <div className="flex gap-4 items-start bg-[#1a1a2e] shadow-neu-sm border border-white/5 rounded-2xl p-4">
            <div className="p-2.5 rounded-xl bg-primary-accent/10 border border-primary-accent/20 text-primary-accent shrink-0">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs text-primary-accent font-semibold font-mono-custom">2023 - Onward</span>
              <h4 className="text-base font-bold text-white leading-snug">Bachelor of Science in Artificial Intelligence</h4>
              <p className="text-xs text-muted-text">Specialization in Deep Learning & Machine Learning Systems</p>
              <p className="text-[11px] text-muted-text/80 mt-1.5">Key coursework: Neural Networks, Machine Learning Architectures, Distributed Systems, Probability Models, Computer Vision, NLP.</p>
            </div>
          </div>
        </div>
      </motion.div>
    ),
    goals: (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="space-y-4"
      >
        <p className="text-muted-text text-sm leading-relaxed">
          My primary objective is to contribute to forward-thinking tech teams pushing the boundaries of AI deployment. I aim to write highly optimized code that accelerates inference and lowers compute budgets.
        </p>
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary-accent" />
            <span className="text-xs text-text font-medium font-mono-custom">Standardize MLOps automation templates to reduce lead time</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-secondary-accent" />
            <span className="text-xs text-text font-medium font-mono-custom">Optimize models for ultra-low latency inference in production</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-text font-medium font-mono-custom">Establish automated model retraining triggered on population drift detection</span>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <section id="about" className="relative rounded-[20px] bg-[#1a1a2e] shadow-neu-raised p-6 md:p-8 lg:p-10 scroll-mt-20 border border-white/5 space-y-10">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-cyan absolute right-0 top-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-white">
          About{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Me
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        {/* Left: Circular Avatar headshot */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Animated background glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent opacity-30 blur-lg transition duration-700 group-hover:opacity-50" />
            
            {/* Circular Headshot Container (Neumorphic Double Ring) */}
            <div 
              className="relative h-56 w-56 rounded-full bg-[#1a1a2e] p-2 overflow-hidden shadow-neu-raised transition-all duration-300"
              style={{ boxShadow: "0 0 0 4px #1a1a2e, 0 0 0 6px rgba(2, 62, 138, 0.6)" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#1a1a2e]">
                <Image
                  src="/hassan-portrait.jpg"
                  alt="Hassan Ali Portrait"
                  fill
                  priority
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                  sizes="14rem"
                />
                {/* Subtle vertical scan line */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-secondary-accent to-transparent opacity-85 animate-[scan_4s_infinite_linear]" style={{ top: "0%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tabs and biography */}
        <div className="space-y-6">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-fluid-sub font-bold text-white tracking-wide">
              Engineering Scalable Machine Learning Solutions
            </h3>
            <div className="space-y-4 text-fluid-body text-muted-text leading-relaxed mx-auto lg:mx-0">
              <p>
                I am Hassan Ali, a Machine Learning Engineer based in Pakistan specializing in designing and deploying end-to-end AI systems. I focus on translating complex mathematical concepts into reliable, production-ready applications. I am motivated by the challenge of building concrete systems that operate robustly under real-world constraints.
              </p>
              <p>
                My technical approach centers on writing clean, optimized code and designing scalable pipelines using PyTorch, FastAPI, and Docker. I view model training as only one part of the pipeline, dedicating equal attention to data validation, model versioning, and latency performance. This comprehensive view ensures that the systems I build are stable, measurable, and easy to maintain over time.
              </p>
              <p>
                Currently, I am designing automated MLOps pipelines to streamline model deployment and testing on edge architectures. If you need assistance engineering a scalable machine learning pipeline or want to discuss deployable AI systems, feel free to reach out.
              </p>
            </div>
          </div>

          {/* Tabs header (Neumorphic Inset / Raised) */}
          <div className="flex border-b border-white/5 pb-3 gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
            {[
              { id: "expertise", label: "Expertise", icon: BrainCircuit },
              { id: "education", label: "Education", icon: BookOpen },
              { id: "goals", label: "Career Goals", icon: Target },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`relative flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer font-mono-custom ${
                    isActive 
                      ? "bg-[#1a1a2e] shadow-neu-inset text-secondary-accent border border-white/5" 
                      : "text-muted-text hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tabs content container (Neumorphic Raised) */}
          <div className="min-h-[220px] bg-[#1a1a2e] shadow-neu-raised border border-white/5 rounded-3xl p-6 relative">
            <AnimatePresence mode="wait">
              {tabContents[activeTab]}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0%, 100% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Mail, Briefcase } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center overflow-hidden pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-12 lg:pb-12 scroll-mt-20 scanlines bg-[#0a0a0a]"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[#00f5d4]/5 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-[#00f5d4]/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        
        {/* LEFT COLUMN */}
        <div className="space-y-6 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f5d4]/30 bg-[#00f5d4]/10 px-4 py-1.5 text-xs font-semibold text-[#00f5d4] backdrop-blur-md font-mono-custom">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Machine Learning Engineer | AI Developer | MLOps</span>
          </div>

          {/* Headline and Subheadline */}
          <div className="space-y-3 w-full">
            <h1 className="text-fluid-h1 font-extrabold tracking-tight text-white uppercase leading-none h1-cursor">
              I'm Hassan, <br />
              <span className="bg-gradient-to-r from-[#00f5d4] via-cyan-400 to-[#00f5ff] bg-clip-text text-transparent font-black">
                I Build ML Systems
              </span> <br />
              That Actually Ship
            </h1>
            <p className="text-fluid-sub font-semibold text-text max-w-2xl leading-relaxed mx-auto lg:mx-0">
              I design, train, deploy, and optimize machine learning solutions that solve real-world problems at scale.
            </p>
          </div>

          {/* Stat line (Subtle badge-style inline stats) */}
          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/25 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-[#00f5d4] font-mono-custom">
              📊 APTOS Dataset: 92% Accuracy
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text/80 font-mono-custom">
              ⚙️ 4 Architectures Benchmarked
            </span>
          </div>

          {/* Biography narrative */}
          <p className="text-fluid-body text-muted-text max-w-xl leading-relaxed mx-auto lg:mx-0 font-mono-custom">
            I engineer scalable machine learning systems and deploy them to production.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-6 pt-2 w-full sm:w-auto font-mono-custom">
            {/* Primary CTA */}
            <button
              onClick={() => handleScroll("projects")}
              className="group flex items-center justify-center gap-2 rounded-full bg-[#00f5d4] hover:bg-[#00f5d4]/90 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-[#00f5d4]/15 transition-all hover:-translate-y-0.5 hover:scale-103 cursor-pointer w-full sm:w-auto min-h-[44px]"
            >
              <span>View Projects</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            {/* Secondary CTA */}
            <a
              href="/Hassan Ali [Resume].pdf"
              download
              className="flex items-center justify-center gap-2 rounded-full border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4]/10 bg-transparent px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 w-full sm:w-auto min-h-[44px]"
            >
              <span>Download Resume</span>
            </a>
            {/* Tertiary CTA */}
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center justify-center gap-2 text-muted-text hover:text-[#00f5d4] transition-colors text-sm font-semibold cursor-pointer w-full sm:w-auto min-h-[44px]"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-sm mx-auto w-full gap-6">
          {/* Avatar floating boundary wrapper */}
          <div className="relative group p-4">
            {/* Ambient blur behind headshot */}
            <div className="absolute -inset-1 rounded-full bg-[#00f5d4]/15 opacity-25 blur-lg transition duration-700 group-hover:opacity-45" />

            {/* Circular Headshot Card */}
            <div className="relative h-48 w-48 rounded-full bg-[#0a0a0a] p-2 border border-[#00f5d4]/20 overflow-hidden shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0a0a0a]">
                <Image
                  src="/hassan-portrait.jpg"
                  alt="Hassan Ali Portrait"
                  fill
                  priority
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                  sizes="12rem"
                />
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00f5d4] to-transparent opacity-70 animate-[scan_4s_infinite_linear]" style={{ top: "0%" }} />
              </div>
            </div>
          </div>

          {/* Labeled Skills layout */}
          <div className="w-full space-y-4 text-left">
            {/* Row 1: Core ML */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00f5d4]/80 font-mono-custom block">Core ML</span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  🐍 Python
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  🔥 PyTorch
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  🤖 TensorFlow
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  🌊 OpenCV
                </span>
              </div>
            </div>

            {/* Row 2: Deploy & Infra */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00f5d4]/80 font-mono-custom block">Deploy & Infra</span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  ⚡ FastAPI
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  📦 Docker
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#00f5d4]/20 bg-[#111111] px-3.5 py-1 text-xs font-semibold text-text font-mono-custom">
                  ☁️ AWS
                </span>
              </div>
            </div>
          </div>

          {/* Current Focus banner below avatar */}
          <div className="w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-card border border-white/5 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5d4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5d4]"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text font-mono-custom">Current Focus:</span>
              <span className="text-xs text-text font-bold font-mono-custom">Building scalable AI and MLOps solutions</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Scan animation */}
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

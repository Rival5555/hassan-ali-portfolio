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
      className="relative flex flex-col justify-center overflow-hidden pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-12 lg:pb-12 scroll-mt-20"
    >

      {/* Ambient backgrounds */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-accent/10 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        
        {/* LEFT COLUMN */}
        <div className="space-y-6 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/30 bg-primary-accent/10 px-4 py-1.5 text-xs font-semibold text-primary-accent backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Machine Learning Engineer | AI Developer | MLOps</span>
          </div>

          {/* Headline and Subheadline */}
          <div className="space-y-3 w-full">
            <h1 className="text-fluid-h1 font-extrabold tracking-tight text-white uppercase leading-none">
              Building Production-Ready <br />
              <span className="bg-gradient-to-r from-primary-accent via-cyan-400 to-secondary-accent bg-clip-text text-transparent font-black">
                AI Systems
              </span>
            </h1>
            <p className="text-fluid-sub font-semibold text-text max-w-2xl leading-relaxed mx-auto lg:mx-0">
              I design, train, deploy, and optimize machine learning solutions that solve real-world problems at scale.
            </p>
          </div>

          {/* Biography narrative */}
          <p className="text-fluid-body text-muted-text max-w-xl leading-relaxed mx-auto lg:mx-0">
            Passionate Machine Learning Engineer specializing in Deep Learning, Computer Vision, NLP, and MLOps. Experienced in developing end-to-end AI systems from data pipelines to production deployment.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => handleScroll("projects")}
              className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-accent/15 transition-all hover:-translate-y-0.5 hover:shadow-secondary-accent/25 hover:scale-103 cursor-pointer w-full sm:w-auto min-h-[44px]"
            >
              <span>View Projects</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/Hassan Ali [Resume].pdf"
              download
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/30 px-6 py-3 text-sm font-semibold text-text backdrop-blur-md transition-all hover:border-primary-accent/40 hover:bg-slate-900/80 hover:-translate-y-0.5 w-full sm:w-auto min-h-[44px]"
            >
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center justify-center gap-2 rounded-full border border-primary-accent/20 bg-primary-accent/5 px-6 py-3 text-sm font-semibold text-primary-accent backdrop-blur-md transition-all hover:border-primary-accent/50 hover:bg-primary-accent/15 hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto min-h-[44px]"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[380px] lg:min-h-[420px] max-w-sm mx-auto w-full">
          {/* Avatar floating boundary wrapper */}
          <div className="relative group p-4">
            
            {/* Ambient blur behind headshot */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent opacity-25 blur-lg transition duration-700 group-hover:opacity-45" />

            {/* Circular Headshot Card */}
            <div className="relative h-48 w-48 rounded-full bg-[#0b0f19] p-2 border border-white/10 overflow-hidden shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-950">
                <Image
                  src="/hassan-portrait.jpg"
                  alt="Hassan Ali Portrait"
                  fill
                  priority
                  className="object-cover transition-transform duration-750 group-hover:scale-105"
                  sizes="12rem"
                />
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary-accent to-transparent opacity-70 animate-[scan_4s_infinite_linear]" style={{ top: "0%" }} />
              </div>
            </div>

            {/* Absolute Orbiting badges (hidden on mobile, floating on desktop/tablet) */}
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-1 top-2 -left-8">
              🐍 Python
            </span>
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-2 top-0 -right-8">
              🔥 PyTorch
            </span>
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-3 top-24 -left-12">
              🌊 OpenCV
            </span>
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-4 top-20 -right-14">
              📦 Docker
            </span>
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-5 bottom-8 -left-8">
              ⚡ FastAPI
            </span>
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-6 bottom-4 -right-6">
              ☁️ AWS
            </span>
            <span className="hidden sm:inline-flex absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-7 -bottom-6 left-12">
              🤖 TensorFlow
            </span>
          </div>

          {/* Mobile Tag list (only visible under sm) */}
          <div className="flex flex-wrap gap-2 justify-center pt-6 sm:hidden w-full">
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">🐍 Python</span>
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">🔥 PyTorch</span>
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">🌊 OpenCV</span>
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">📦 Docker</span>
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">⚡ FastAPI</span>
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">☁️ AWS</span>
            <span className="text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none">🤖 TensorFlow</span>
          </div>

          {/* Current Focus banner below avatar */}
          <div className="mt-8 w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-card border border-white/5 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text font-mono">Current Focus:</span>
              <span className="text-xs text-text font-bold font-mono">Building scalable AI and MLOps solutions</span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Badges and Marquee Keyframes Inline Style */}
      <style jsx global>{`
        @keyframes scan {
          0%, 100% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
        }

        /* Floating Badge Animations */
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-2deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(1deg); }
        }
        
        .animate-float-badge-1 { animation: float-1 4s infinite ease-in-out; }
        .animate-float-badge-2 { animation: float-2 4.5s infinite ease-in-out; }
        .animate-float-badge-3 { animation: float-3 5s infinite ease-in-out; }
        .animate-float-badge-4 { animation: float-4 3.8s infinite ease-in-out; }
        .animate-float-badge-5 { animation: float-2 4.2s infinite ease-in-out; }
        .animate-float-badge-6 { animation: float-1 4.7s infinite ease-in-out; }
        .animate-float-badge-7 { animation: float-3 5.2s infinite ease-in-out; }
      `}</style>
    </section>
  );
}

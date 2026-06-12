"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Mail, Briefcase, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural network particle canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(45, Math.floor((width * height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.3)";
        ctx.fill();
      });

      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mouseDist = Math.hypot(particles[i].x - mouseX, particles[i].y - mouseY);
        if (mouseDist < 120) {
          const alpha = (1 - mouseDist / 120) * 0.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const marqueeTags = [
    "Python", "PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", 
    "FastAPI", "Docker", "MLflow", "AWS", "GCP", "Linux", "Git"
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center overflow-hidden py-4 lg:py-6 scroll-mt-20"
    >
      {/* Interactive Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 -z-10 h-full w-full opacity-60"
      />

      {/* Ambient backgrounds */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-accent/10 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        
        {/* LEFT COLUMN */}
        <div className="space-y-6 z-10">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-accent/30 bg-primary-accent/10 px-4 py-1.5 text-xs font-semibold text-primary-accent backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Machine Learning Engineer | AI Developer | MLOps</span>
          </div>

          {/* Headline and Subheadline */}
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
              Building Production-Ready <br />
              <span className="bg-gradient-to-r from-primary-accent via-cyan-400 to-secondary-accent bg-clip-text text-transparent font-black">
                AI Systems
              </span>
            </h1>
            <p className="text-base font-semibold text-text sm:text-lg max-w-2xl leading-relaxed">
              I design, train, deploy, and optimize machine learning solutions that solve real-world problems at scale.
            </p>
          </div>

          {/* Biography narrative */}
          <p className="text-xs text-muted-text max-w-xl leading-relaxed">
            Passionate Machine Learning Engineer specializing in Deep Learning, Computer Vision, NLP, and MLOps. Experienced in developing end-to-end AI systems from data pipelines to production deployment.
          </p>

          {/* Highlights checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-xl pt-2">
            {[
              "Machine Learning",
              "Deep Learning",
              "Computer Vision",
              "MLOps Systems",
              "Cloud Deployment",
            ].map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 text-xs text-text/90">
                <CheckCircle2 className="h-4 w-4 text-primary-accent shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-6 pt-5 pb-2 border-t border-b border-white/5 max-w-lg">
            <div>
              <p className="text-xl font-bold text-primary-accent">10+</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-text font-bold">AI Projects</p>
            </div>
            <div>
              <p className="text-xl font-bold text-secondary-accent">96.4%</p>
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-text font-bold">Best Accuracy</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => handleScroll("projects")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-accent/15 transition-all hover:-translate-y-0.5 hover:shadow-secondary-accent/25 hover:scale-103 cursor-pointer"
            >
              <span>View Projects</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="/Hassan Ali [Resume].pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/30 px-6 py-3 text-sm font-semibold text-text backdrop-blur-md transition-all hover:border-primary-accent/40 hover:bg-slate-900/80 hover:-translate-y-0.5"
            >
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-2 rounded-full border border-primary-accent/20 bg-primary-accent/5 px-6 py-3 text-sm font-semibold text-primary-accent backdrop-blur-md transition-all hover:border-primary-accent/50 hover:bg-primary-accent/15 hover:-translate-y-0.5 cursor-pointer"
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

            {/* Absolute Orbiting badges */}
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-1 top-2 -left-8">
              🐍 Python
            </span>
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-2 top-0 -right-8">
              🔥 PyTorch
            </span>
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-3 top-24 -left-12">
              🌊 OpenCV
            </span>
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-4 top-20 -right-14">
              📦 Docker
            </span>
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-5 bottom-8 -left-8">
              ⚡ FastAPI
            </span>
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-6 bottom-4 -right-6">
              ☁️ AWS
            </span>
            <span className="absolute text-[10px] font-mono font-bold text-white px-2.5 py-1 rounded-xl glass-card select-none animate-float-badge-7 -bottom-6 left-12">
              🤖 TensorFlow
            </span>
          </div>

          {/* Current Focus banner below avatar */}
          <div className="mt-12 w-full text-center">
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

      {/* TECH STACK STRIP - INFINITE SCROLL MARQUEE */}
      <div className="mt-16 pt-8 border-t border-white/5 w-full relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex select-none overflow-hidden gap-8 py-2 w-full">
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee">
            {marqueeTags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="text-sm font-bold uppercase tracking-widest text-muted-text/50 font-mono hover:text-primary-accent transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee" aria-hidden="true">
            {marqueeTags.map((tag, tagIdx) => (
              <span
                key={`dup-${tagIdx}`}
                className="text-sm font-bold uppercase tracking-widest text-muted-text/50 font-mono hover:text-primary-accent transition-colors"
              >
                {tag}
              </span>
            ))}
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
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
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

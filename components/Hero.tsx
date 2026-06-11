"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Play, CheckCircle2, ChevronRight, MapPin, Briefcase, Mail } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initializing MLOps pipeline...",
    "Loading base model: ResNet-101-Backbone",
    "Loaded pre-trained weights on ImageNet-1k",
  ]);
  const [inferenceStats, setInferenceStats] = useState({
    latency: 14.2,
    throughput: 1240,
    accuracy: 96.4,
  });

  // Terminal metrics simulation
  useEffect(() => {
    const metricsInterval = setInterval(() => {
      setInferenceStats((prev) => {
        const deltaLatency = (Math.random() - 0.5) * 0.8;
        const deltaThroughput = Math.floor((Math.random() - 0.5) * 20);
        return {
          latency: parseFloat(Math.min(20, Math.max(8.5, prev.latency + deltaLatency)).toFixed(1)),
          throughput: Math.min(1350, Math.max(1180, prev.throughput + deltaThroughput)),
          accuracy: 96.4, // Keep locked at best model accuracy
        };
      });
    }, 1500);

    const logsList = [
      "Running data ingestion validation (Great Expectations)... OK",
      "Model checkpoint saved: epochs=145 loss=0.082",
      "Uploading model artifacts to S3 bucket... DONE",
      "Serving new inference endpoint via Triton...",
      "Incoming inference request: shape=[1, 3, 224, 224]",
      "Inference server status: HEALTHY (CPU: 32%, GPU: 68%)",
      "Optimizing weights using TensorRT... -12% inference latency",
      "Triggering pipeline run on Airflow... OK",
    ];

    const logsInterval = setInterval(() => {
      setTerminalLogs((prev) => {
        const nextLog = logsList[Math.floor(Math.random() * logsList.length)];
        const timestamp = new Date().toLocaleTimeString();
        const formattedLog = `[${timestamp}] ${nextLog}`;
        return [...prev.slice(-4), formattedLog];
      });
    }, 3500);

    return () => {
      clearInterval(metricsInterval);
      clearInterval(logsInterval);
    };
  }, []);

  // Neural network particle canvas
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

    const particleCount = Math.min(60, Math.floor((width * height) / 12000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
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
        ctx.fillStyle = "rgba(6, 182, 212, 0.35)";
        ctx.fill();
      });

      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.15;
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
          const alpha = (1 - mouseDist / 120) * 0.35;
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

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center overflow-hidden py-10 lg:py-0"
    >
      {/* Interactive Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 -z-10 h-full w-full opacity-65"
      />

      {/* Decorative Blur Backgrounds */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-accent/10 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        {/* Left Intro Column */}
        <div className="space-y-8 z-10">
          {/* Metadata Badges row */}
          <div className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-accent/30 bg-primary-accent/10 px-3.5 py-1 text-xs font-semibold text-primary-accent backdrop-blur-md">
              <Briefcase className="h-3 w-3" />
              <span>Open to Opportunities</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-slate-900/60 px-3.5 py-1 text-xs font-semibold text-muted-text backdrop-blur-md">
              <MapPin className="h-3 w-3" />
              <span>Pakistan (Remote / Relocation)</span>
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
              Machine Learning <br />
              <span className="bg-gradient-to-r from-primary-accent via-cyan-400 to-secondary-accent bg-clip-text text-transparent font-black">
                Engineer
              </span>
            </h1>

            <p className="text-lg font-medium text-text/90 sm:text-xl leading-relaxed max-w-2xl border-l-2 border-primary-accent/40 pl-4">
              Building scalable AI systems, production-ready ML pipelines, and high-performance machine learning applications.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-b border-white/5 max-w-xl">
            <div>
              <p className="text-2xl font-bold text-primary-accent">10+</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-text font-bold">AI Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-accent">96.4%</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-text font-bold">Model Accuracy</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-400">5+</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-text font-bold">Certifications</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Production</p>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted-text font-bold">ML Experience</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap items-center gap-4">
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
              className="flex items-center gap-2 rounded-full border border-white/10 bg-secondary-bg/30 px-6 py-3 text-sm font-semibold text-text backdrop-blur-md transition-all hover:border-primary-accent/40 hover:bg-secondary-bg/60 hover:-translate-y-0.5"
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

        {/* Right MLOps live server simulation */}
        <div className="relative z-10 w-full lg:max-w-md mx-auto">
          {/* Glassmorphic Container */}
          <div className="glass-card rounded-3xl p-5 shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-accent/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-accent/5 rounded-full blur-2xl" />

            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary-accent" />
                <span className="font-mono text-[11px] font-semibold text-text/80">production_monitor.sh</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[9px] uppercase font-bold text-emerald-400">ACTIVE</span>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-background/40 rounded-xl p-2.5 border border-white/5 text-center">
                <span className="block text-[8px] uppercase tracking-wider text-muted-text font-bold mb-0.5">LATENCY</span>
                <span className="text-xs font-mono font-bold text-primary-accent">{inferenceStats.latency}ms</span>
              </div>
              <div className="bg-background/40 rounded-xl p-2.5 border border-white/5 text-center">
                <span className="block text-[8px] uppercase tracking-wider text-muted-text font-bold mb-0.5">THROUGHPUT</span>
                <span className="text-xs font-mono font-bold text-secondary-accent">{inferenceStats.throughput}/s</span>
              </div>
              <div className="bg-background/40 rounded-xl p-2.5 border border-white/5 text-center">
                <span className="block text-[8px] uppercase tracking-wider text-muted-text font-bold mb-0.5">ACCURACY</span>
                <span className="text-xs font-mono font-bold text-emerald-400">{inferenceStats.accuracy}%</span>
              </div>
            </div>

            {/* Log Console */}
            <div className="rounded-xl bg-background/90 p-4 font-mono text-[10px] leading-relaxed text-slate-300 min-h-[140px] flex flex-col justify-end border border-white/5">
              <div className="space-y-2">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-secondary-accent font-bold select-none">&gt;&gt;</span>
                    <span className="break-all">{log}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] text-muted-text font-mono border-t border-white/5 pt-4">
              <span className="flex items-center gap-1">
                <Play className="h-3 w-3 text-emerald-400" /> Model: ResNet101
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-primary-accent" /> Triton Server
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

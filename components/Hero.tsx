"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "AI Engineer",
  "MLOps Specialist",
  "Model Deployment Expert",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayText.length + 1);
        setDisplayText(nextText);
        if (nextText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const nextText = currentRole.slice(0, displayText.length - 1);
        setDisplayText(nextText);
        if (nextText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="relative flex min-h-[calc(100vh-72px)] flex-col justify-center overflow-hidden py-10 md:py-0"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-900/10 blur-[100px]" />
        <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-1 text-xs font-medium text-teal-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            <span>AI Engineer · MLOps · Cloud</span>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Building Intelligent Systems.{" "}
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Deploying Real-World AI.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-lg font-medium text-zinc-200 sm:text-xl"
            >
              <span className="text-zinc-400">I specialize as an</span>{" "}
              <span className="inline-block min-h-[1.5em] bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                {displayText}
                <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-teal-400 align-middle" />
              </span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl text-base text-zinc-400 sm:text-lg"
          >
            I bridge the gap between experimental models and production-ready
            systems. With deep expertise in{" "}
            <span className="text-zinc-200">MLOps</span>, I leverage tools like{" "}
            <span className="text-zinc-200">FastAPI</span> and{" "}
            <span className="text-zinc-200">AWS SageMaker</span> to construct
            efficient pipelines that ensure AI solutions deliver reliable,
            real-world value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:shadow-blue-500/40"
            >
              View My Projects
            </button>
            <a
              href="/Hassan-Ali-Resume.pdf"
              className="rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-teal-500 hover:bg-zinc-900/90"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-300"
          >
            {[
              "Python",
              "PyTorch",
              "FastAPI",
              "Docker",
              "AWS SageMaker",
              "MLflow",
              "CI/CD",
              "Kubernetes",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3 py-1 font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 10 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="relative rounded-3xl border border-white/5 bg-[#0D1117] p-5 shadow-2xl shadow-teal-500/10">
            <div className="mb-6 flex items-center justify-between text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                deploy_pipeline.py · aws
              </span>
              <span className="rounded-full bg-teal-500/10 px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider text-teal-400">
                ACTIVE
              </span>
            </div>

            <div className="space-y-3.5 rounded-2xl bg-[#010409]/60 p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
              <p>
                <span className="text-zinc-500">{">"}</span> endpoint: <span className="text-teal-400">sagemaker-inference-v1</span>
              </p>
              <p>
                <span className="text-zinc-500">{">"}</span> state: <span className="text-teal-400">InService</span> ·
                latency: 42ms
              </p>
              <p>
                <span className="text-zinc-500">{">"}</span> fast_api_status:{" "}
                <span className="text-teal-400">200 OK</span> · requests/s:{" "}
                <span className="text-blue-400">1,240</span>
              </p>
              <p>
                <span className="text-zinc-500">{">"}</span> latest_run:{" "}
                <span className="text-zinc-400">MLflow Run ID: a92b3...</span>
              </p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-zinc-300">
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/5 p-3 transition-colors hover:bg-teal-500/10">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-teal-100/70">
                  FOCUS
                </p>
                <p className="text-[13px] font-bold text-white">MLOps</p>
              </div>
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-3 transition-colors hover:bg-purple-500/10">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-purple-100/70">
                  EXPERTISE
                </p>
                <p className="text-[13px] font-bold text-white">
                  ML · DL · IoT
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3 transition-colors hover:bg-emerald-500/10">
                <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-emerald-100/70">
                  STATUS
                </p>
                <p className="text-[13px] font-bold text-emerald-400">
                  Open to work
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;


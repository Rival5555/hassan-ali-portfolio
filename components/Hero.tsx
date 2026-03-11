"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Machine Learning Engineer",
  "Deep Learning Developer",
  "IoT Engineer",
  "React.js Developer",
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
      className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />
      </div>

      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-xs font-medium text-blue-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Machine Learning Engineer · IoT · React</span>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Hassan
              </span>
              , I build intelligent systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-lg font-medium text-zinc-200 sm:text-xl"
            >
              <span className="text-zinc-400">I specialize in</span>{" "}
              <span className="inline-block min-h-[1.5em] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold text-transparent">
                {displayText}
                <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-blue-400 align-middle" />
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
            2 years of experience taking models from{" "}
            <span className="text-zinc-200">research to production</span> —
            from training CNNs and fine-tuning LLMs, to deploying{" "}
            <span className="text-zinc-200">edge AI on ESP32</span> and
            delivering real-time insights through{" "}
            <span className="text-zinc-200">Next.js dashboards</span>.
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
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:shadow-purple-500/40"
            >
              View Projects
            </button>
            <a
              href="/Hassan-Ali-Resume.pdf"
              className="rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-blue-500 hover:bg-zinc-900/90"
            >
              Download CV
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
              "TensorFlow",
              "Keras",
              "LLMs",
              "ESP32",
              "Firebase",
              "Docker",
              "Next.js",
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
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-900/80 p-4 shadow-2xl shadow-blue-500/40 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                training.py · gpu:0
              </span>
              <span className="rounded-full bg-zinc-900/80 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                live metrics
              </span>
            </div>

            <div className="space-y-2 rounded-2xl bg-zinc-950/80 p-3 font-mono text-[11px] text-zinc-300">
              <p>
                {">"} model: CNN (resnet18) · dataset: retinal\_fundus
              </p>
              <p>
                {">"} epoch <span className="text-emerald-300">42</span> / 50 ·
                lr=1e-4
              </p>
              <p>
                {">"} val\_accuracy:{" "}
                <span className="text-emerald-300">97.4%</span> · loss:{" "}
                <span className="text-red-300">0.13</span>
              </p>
              <p>
                {">"} deployment:{" "}
                <span className="text-sky-300">edge · ESP32 · MQTT</span>
              </p>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
              <div className="rounded-2xl border border-blue-500/40 bg-blue-500/10 p-2">
                <p className="text-[10px] uppercase tracking-wide text-blue-200">
                  Experience
                </p>
                <p className="text-sm font-semibold text-white">2+ years</p>
              </div>
              <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-2">
                <p className="text-[10px] uppercase tracking-wide text-purple-200">
                  Focus
                </p>
                <p className="text-sm font-semibold text-white">
                  ML · DL · IoT
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-2">
                <p className="text-[10px] uppercase tracking-wide text-emerald-200">
                  Status
                </p>
                <p className="text-sm font-semibold text-emerald-300">
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


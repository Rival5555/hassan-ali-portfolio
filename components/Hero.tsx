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

      <div className="relative space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-xs font-medium text-blue-200 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Available for ML & IoT projects</span>
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
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg font-medium text-zinc-200 sm:text-xl"
          >
            <span className="text-zinc-400">I&apos;m a</span>{" "}
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
          2 years of experience building intelligent systems across{" "}
          <span className="text-zinc-200">Machine Learning</span>,{" "}
          <span className="text-zinc-200">Deep Learning</span>,{" "}
          <span className="text-zinc-200">IoT</span>, and{" "}
          <span className="text-zinc-200">modern web</span>. I love crafting
          end-to-end solutions, from training models and deploying to edge
          devices to building clean, responsive user interfaces.
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
            href="/cv.pdf"
            className="rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-blue-500 hover:bg-zinc-900/90"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;


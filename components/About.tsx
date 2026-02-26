"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-8"
    >
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          About{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          WHO I AM
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-center">
        <div className="relative flex justify-center md:justify-start">
          <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-500/50 via-purple-500/40 to-transparent p-[2px] shadow-xl shadow-blue-500/40 sm:h-48 sm:w-48">
            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-zinc-950/80">
              <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-80 blur-sm" />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-2xl border border-dashed border-purple-500/40 md:block" />
        </div>

        <div className="space-y-4 text-zinc-300">
          <p>
            I&apos;m Hassan, a developer with{" "}
            <span className="font-semibold text-white">
              2 years of hands-on experience
            </span>{" "}
            working across Machine Learning, Deep Learning, IoT systems, and
            Frontend Development.
          </p>
          <p>
            I enjoy building{" "}
            <span className="font-semibold text-white">
              end-to-end intelligent systems
            </span>{" "}
            — from experimenting with models, training and optimizing them, to
            deploying solutions on{" "}
            <span className="text-white">edge devices like ESP32</span> and
            connecting everything through scalable cloud backends.
          </p>
          <p>
            On the frontend, I focus on{" "}
            <span className="text-white">
              clean, modern, and responsive interfaces
            </span>{" "}
            using React and Next.js, with extra attention to performance,
            animations, and developer experience.
          </p>
          <p>
            I&apos;m always looking for opportunities where{" "}
            <span className="font-semibold text-white">
              AI, IoT, and web
            </span>{" "}
            come together to solve real-world problems.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;



"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          WHO I AM
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-center">
        <div className="relative flex justify-center md:justify-start">
          <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-teal-500/40 bg-gradient-to-br from-teal-500/50 via-blue-500/40 to-transparent p-[2px] shadow-[0_0_30px_rgba(20,184,166,0.2)] sm:h-48 sm:w-48">
            <div className="relative h-full w-full overflow-hidden rounded-3xl bg-zinc-950/80">
              <Image
                src="/hassan-portrait.jpg"
                alt="Hassan Ali portrait"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 12rem, 10rem"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-2xl border border-dashed border-blue-500/40 md:block" />
        </div>

        <div className="space-y-4 text-zinc-300">
          <p>
            I am an aspiring{" "}
            <span className="font-semibold text-white">AI Engineer</span> with a
            strong foundation in machine learning, deep learning, and modern AI
            frameworks. My primary focus lies in{" "}
            <span className="text-white">MLOps and model deployment</span> —
            bridging the gap between experimental models and production-ready
            systems through scalable, reliable, and efficient pipelines.
          </p>
          <p>
            I am passionate about building{" "}
            <span className="font-semibold text-white">
              end-to-end AI workflows
            </span>
            , from data preprocessing and model training to containerisation,
            CI/CD integration, and cloud deployment. I have hands-on experience
            deploying models using <span className="text-white">FastAPI</span>{" "}
            for building robust, high-performance REST APIs and{" "}
            <span className="text-white">AWS SageMaker</span> for scalable
            cloud-based model training and inference. I further leverage tools
            such as Docker, Kubernetes, and MLflow to ensure models deliver
            real-world value beyond the notebook.
          </p>
          <p>
            As a fresher, I bring a{" "}
            <span className="text-white">growth-oriented mindset</span>, a
            commitment to engineering best practices, and a keen interest in
            keeping pace with the rapidly evolving AI landscape.
          </p>
          <p>
            I am actively seeking opportunities where I can contribute to{" "}
            <span className="font-semibold text-white">
              impactful AI projects
            </span>{" "}
            and grow within a collaborative, forward-thinking team.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;



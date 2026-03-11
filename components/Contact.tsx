"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="space-y-8"
    >
      <div className="space-y-3 text-center md:text-left">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-sm text-zinc-400 sm:text-base">
          Have an opportunity, project, or idea in mind? Reach out and
          let&apos;s explore how we can work together.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-blue-500/15 backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="name"
                className="text-xs font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                suppressHydrationWarning
                className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/60"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="email"
                className="text-xs font-medium text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                suppressHydrationWarning
                className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/60"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label
              htmlFor="message"
              className="text-xs font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me a bit about what you're working on..."
              suppressHydrationWarning
              className="w-full rounded-xl border border-zinc-700/80 bg-zinc-950/80 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/60"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:shadow-purple-500/40"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-4 rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/40 p-5"
        >
          <p className="text-sm text-zinc-300">
            Prefer reaching out directly? Connect with me on these platforms:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-950/70 px-3 py-2 text-xs font-medium text-zinc-100 transition hover:border-blue-500 hover:bg-zinc-900"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-950/70 px-3 py-2 text-xs font-medium text-zinc-100 transition hover:border-blue-500 hover:bg-zinc-900"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-950/70 px-3 py-2 text-xs font-medium text-zinc-100 transition hover:border-blue-500 hover:bg-zinc-900"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;


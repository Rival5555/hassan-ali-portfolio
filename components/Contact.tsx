"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2, FileText } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("success");
      const form = event.currentTarget;
      form.reset();
      setTimeout(() => setFormState("idle"), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative space-y-10 py-12 md:py-16 lg:py-24 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-cyan absolute left-0 bottom-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-white uppercase">
          Let&apos;s Build{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            AI Solutions Together
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full mx-auto md:mx-0" />
        <p className="max-w-xl text-fluid-body text-muted-text pt-2 leading-relaxed mx-auto md:mx-0">
          Have an AI pipeline optimization challenge, a model deployment project, or want to collaborate? Send a message directly.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-start">
        {/* Form panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 text-left">
                <label htmlFor="name" className="text-xs font-semibold text-text/80 tracking-wide">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Hassan Ali"
                  className="w-full rounded-2xl border border-white/5 bg-slate-950/60 px-4 py-3 text-sm text-text placeholder-muted-text/50 outline-none transition focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label htmlFor="email" className="text-xs font-semibold text-text/80 tracking-wide">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="hassanali93r@gmail.com"
                  className="w-full rounded-2xl border border-white/5 bg-slate-950/60 px-4 py-3 text-sm text-text placeholder-muted-text/50 outline-none transition focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label htmlFor="message" className="text-xs font-semibold text-text/80 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Describe your project, model parameters, or MLOps setup..."
                className="w-full rounded-2xl border border-white/5 bg-slate-950/60 px-4 py-3 text-sm text-text placeholder-muted-text/50 outline-none transition focus:border-primary-accent focus:ring-1 focus:ring-primary-accent/30 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formState !== "idle"}
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary-accent to-secondary-accent py-3 text-sm font-bold text-white shadow-lg shadow-primary-accent/10 hover:shadow-secondary-accent/20 transition-all hover:scale-101 disabled:opacity-75 cursor-pointer"
            >
              {formState === "idle" && (
                <>
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
              {formState === "sending" && (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Transmitting payload...</span>
                </>
              )}
              {formState === "success" && (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Payload Transmitted successfully!</span>
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {/* Quick info card */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Direct Connections</h3>
            <p className="text-xs text-muted-text leading-relaxed">
              Prefer standard communication? Feel free to reach out via these nodes. Checked regularly.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href="mailto:hassanali93r@gmail.com"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-primary-accent/30 transition-all group"
              >
                <div className="p-2 rounded-xl bg-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950 transition-all">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-muted-text font-mono">Email Address</span>
                  <span className="text-xs font-semibold text-text group-hover:text-primary-accent transition-colors">hassanali93r@gmail.com</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/hasanali09"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-secondary-accent/30 transition-all group"
              >
                <div className="p-2 rounded-xl bg-secondary-accent/10 text-secondary-accent group-hover:bg-secondary-accent group-hover:text-slate-950 transition-all">
                  <Linkedin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-muted-text font-mono">LinkedIn Profile</span>
                  <span className="text-xs font-semibold text-text group-hover:text-secondary-accent transition-colors">hasanali09</span>
                </div>
              </a>
              <a
                href="https://github.com/Rival5555"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-primary-accent/30 transition-all group"
              >
                <div className="p-2 rounded-xl bg-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950 transition-all">
                  <Github className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-muted-text font-mono">GitHub Repositories</span>
                  <span className="text-xs font-semibold text-text group-hover:text-primary-accent transition-colors">Rival5555</span>
                </div>
              </a>
              <a
                href="/Hassan Ali [Resume].pdf"
                download
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-secondary-accent/30 transition-all group"
              >
                <div className="p-2 rounded-xl bg-secondary-accent/10 text-secondary-accent group-hover:bg-secondary-accent group-hover:text-slate-950 transition-all">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase font-bold text-muted-text font-mono">Download Resume</span>
                  <span className="text-xs font-semibold text-text group-hover:text-secondary-accent transition-colors">Hassan Ali [Resume].pdf</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

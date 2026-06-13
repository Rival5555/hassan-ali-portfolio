"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background relative overflow-hidden py-10 md:py-12">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-20 bg-secondary-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-xs sm:flex-row md:px-6 lg:px-8">
        <div className="text-center sm:text-left space-y-1">
          <p className="text-text/90 font-medium text-sm">
            &copy; {year} <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-bold">Hassan Ali</span>. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-text/80 font-mono">
            Optimized for production-grade deployments.
          </p>
        </div>

        {/* Social Link circles */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Rival5555"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 p-2 text-muted-text hover:text-primary-accent hover:border-primary-accent/40 hover:scale-105 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/hasanali09"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 p-2 text-muted-text hover:text-secondary-accent hover:border-secondary-accent/40 hover:scale-105 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hassanali93r@gmail.com"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 p-2 text-muted-text hover:text-primary-accent hover:border-primary-accent/40 hover:scale-105 transition-all"
            aria-label="Email Contact"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

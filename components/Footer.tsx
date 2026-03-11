"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-0">
        <p className="text-center sm:text-left">
          &copy; {year}{" "}
          <span className="font-medium text-zinc-300">Hassan</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Rival5555"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/70 p-1.5 text-zinc-300 transition hover:border-blue-500 hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/hasanali09"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/70 p-1.5 text-zinc-300 transition hover:border-blue-500 hover:text-white"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950/70 p-1.5 text-zinc-300 transition hover:border-blue-500 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


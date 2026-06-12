"use client";

import { useEffect, useState } from "react";
import { Menu, X, Cpu, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2.5 text-left cursor-pointer group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-accent to-secondary-accent text-white shadow-md shadow-primary-accent/15 group-hover:scale-105 transition-transform">
            <Cpu className="h-4.5 w-4.5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-white tracking-wide">Hassan Ali</p>
            <span className="text-[10px] text-muted-text font-mono">ML Engineer</span>
          </div>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`relative text-[10px] uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                activeSection === section.id
                  ? "text-primary-accent"
                  : "text-muted-text hover:text-white"
              }`}
            >
              <span>{section.label}</span>
              {activeSection === section.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-primary-accent to-secondary-accent shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}

          {/* Download Resume Button */}
          <a
            href="/Hassan Ali [Resume].pdf"
            download
            className="flex items-center gap-1.5 rounded-full border border-primary-accent/30 bg-primary-accent/10 px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-bold text-primary-accent backdrop-blur-md transition-all hover:border-primary-accent/60 hover:bg-primary-accent/20 hover:-translate-y-0.5"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 p-2 text-text/80 transition hover:border-primary-accent/40 hover:text-white md:hidden cursor-pointer"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-background/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5 px-4 py-3 sm:px-6">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className={`rounded-xl px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-primary-accent/15 to-secondary-accent/15 text-primary-accent border-l-2 border-primary-accent"
                      : "text-muted-text hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}

              {/* Mobile Download Resume */}
              <a
                href="/Hassan Ali [Resume].pdf"
                download
                className="flex items-center justify-center gap-2 rounded-xl border border-primary-accent/30 bg-primary-accent/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-primary-accent transition-all hover:bg-primary-accent/20"
                onClick={() => setIsOpen(false)}
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

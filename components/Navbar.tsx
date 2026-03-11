"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
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
        threshold: 0.4,
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-b from-black/80 via-black/70 to-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2 text-left"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-semibold text-white shadow-md shadow-blue-500/40">
            HA
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-zinc-100">
              Hassan Ali
            </p>
            <p className="text-[11px] font-medium text-zinc-400">
              Machine Learning Engineer
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "text-zinc-50"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              <span>{section.label}</span>
              {activeSection === section.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              )}
            </button>
          ))}
          <a
            href="/Hassan-Ali-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/60 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-100 shadow-sm shadow-blue-500/40 transition hover:bg-blue-500/20"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-black/40 p-2 text-zinc-200 shadow-lg shadow-blue-500/20 transition hover:border-blue-500/60 hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/10 bg-black/90 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col space-y-1 px-4 py-3 sm:px-6 lg:px-0">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}
            <a
              href="/Hassan-Ali-Resume.pdf"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/60 bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-100 shadow-sm shadow-blue-500/40"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;


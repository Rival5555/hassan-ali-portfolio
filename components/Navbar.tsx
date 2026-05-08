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
      className="fixed inset-x-0 top-0 z-50 border-b border-teal-500/10 bg-[#050914]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-0">
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-blue-600 text-sm font-bold text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]">
            HA
          </div>
          <div className="hidden leading-tight sm:block">
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-semibold text-white">
                Hassan Ali
              </p>
            </div>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? "text-teal-300"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>{section.label}</span>
              {activeSection === section.id && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-teal-400 to-blue-500 shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
              )}
            </button>
          ))}

        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-white/10 bg-[#0A0F1E]/40 p-2 text-zinc-200 shadow-lg transition hover:border-teal-500/60 hover:text-white md:hidden"
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
          className="border-t border-teal-500/10 bg-[#050914]/95 backdrop-blur-3xl md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col space-y-1 px-4 py-3 sm:px-6 lg:px-0">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className={`rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {section.label}
              </button>
            ))}

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;


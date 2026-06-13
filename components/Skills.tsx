"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Code2,
  Terminal,
  Database,
  HardDrive,
  BarChart3,
  LayoutGrid,
  PieChart,
  Cloud,
  Box,
  Globe,
  GitBranch
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative space-y-10 py-6 md:py-8 lg:py-12 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-violet absolute left-0 bottom-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-white">
          Technical{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Competencies
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-fluid-body text-muted-text pt-2 leading-relaxed">
          A targeted stack specialized in constructing high-performing model architectures and orchestrating production deployments.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* CARD 1: AI & ML */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-primary-accent/30 transition-all duration-300"
        >
          {/* Top gradient line hover effect */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 group-hover:opacity-40 transition-opacity" />

          {/* Watermark outline icon */}
          <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-primary-accent/[0.03] transition-colors pointer-events-none z-0">
            <Brain className="w-28 h-28" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
              <div className="p-2 rounded-xl bg-primary-accent/10 border border-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950 transition-colors">
                <Brain className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">AI & ML</h3>
            </div>

            <ul className="space-y-3 pt-2 text-sm text-muted-text font-medium">
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary-accent" />
                <span>Scikit-learn, XGBoost</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary-accent" />
                <span>TensorFlow, PyTorch</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary-accent" />
                <span>NLP & Computer Vision</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CARD 2: GenAI & LLMs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-secondary-accent/30 transition-all duration-300"
        >
          {/* Top gradient line hover effect */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 group-hover:opacity-40 transition-opacity" />

          {/* Watermark outline icon */}
          <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-secondary-accent/[0.03] transition-colors pointer-events-none z-0">
            <Sparkles className="w-28 h-28" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
              <div className="p-2 rounded-xl bg-secondary-accent/10 border border-secondary-accent/10 text-secondary-accent group-hover:bg-secondary-accent group-hover:text-slate-950 transition-colors">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">GenAI & LLMs</h3>
            </div>

            <ul className="space-y-3 pt-2 text-sm text-muted-text font-medium">
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-secondary-accent" />
                <span>OpenAI API, Gemini</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-secondary-accent" />
                <span>LangChain, LlamaIndex</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-secondary-accent" />
                <span>RAG Architectures</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CARD 3: Full-Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-primary-accent/30 transition-all duration-300"
        >
          {/* Top gradient line hover effect */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 group-hover:opacity-40 transition-opacity" />

          {/* Watermark outline icon */}
          <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-primary-accent/[0.03] transition-colors pointer-events-none z-0">
            <Terminal className="w-28 h-28" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
              <div className="p-2 rounded-xl bg-primary-accent/10 border border-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950 transition-colors">
                <Code2 className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Full-Stack</h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Next.js 14", "React", "TypeScript", "Tailwind", "FastAPI", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-slate-900/50 px-2.5 py-1 text-xs text-text/90 font-mono tracking-wide hover:border-primary-accent/30 hover:bg-slate-900 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CARD 4: Data & Databases */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-primary-accent/30 transition-all duration-300 md:col-span-2"
        >
          {/* Top gradient line hover effect */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 group-hover:opacity-40 transition-opacity" />

          {/* Watermark outline icon */}
          <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-primary-accent/[0.03] transition-colors pointer-events-none z-0">
            <Database className="w-28 h-28" strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
                <div className="p-2 rounded-xl bg-primary-accent/10 border border-primary-accent/10 text-primary-accent group-hover:bg-primary-accent group-hover:text-slate-950 transition-colors">
                  <Database className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Data & Databases</h3>
              </div>

              <p className="text-xs md:text-sm text-muted-text leading-relaxed font-medium">
                Capable of handling complex data pipelines and storage solutions. From raw data processing with Pandas/NumPy to storing efficiently in PostgreSQL, MongoDB, or Oracle XE.
              </p>
            </div>

            <div className="flex items-center gap-3.5 mt-4 text-muted-text/30 group-hover:text-primary-accent/40 transition-colors pt-2">
              <BarChart3 className="h-4.5 w-4.5" />
              <LayoutGrid className="h-4.5 w-4.5" />
              <PieChart className="h-4.5 w-4.5" />
            </div>
          </div>
        </motion.div>

        {/* CARD 5: Deployment */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32 }}
          viewport={{ once: true, amount: 0.15 }}
          className="glass-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group hover:border-secondary-accent/30 transition-all duration-300"
        >
          {/* Top gradient line hover effect */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 group-hover:opacity-40 transition-opacity" />

          {/* Watermark outline icon */}
          <div className="absolute -right-4 -top-4 text-white/[0.02] group-hover:text-secondary-accent/[0.03] transition-colors pointer-events-none z-0">
            <Cloud className="w-28 h-28" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-4 border-b border-white/5 pb-3">
              <div className="p-2 rounded-xl bg-secondary-accent/10 border border-secondary-accent/10 text-secondary-accent group-hover:bg-secondary-accent group-hover:text-slate-950 transition-colors">
                <Cloud className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">Deployment</h3>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-4 pt-2 text-sm text-muted-text font-mono font-medium">
              <div className="flex items-center gap-2 group/item hover:text-white transition-colors duration-200">
                <Box className="h-4.5 w-4.5 text-secondary-accent/60 group-hover/item:text-secondary-accent transition-colors" />
                <span>Docker</span>
              </div>
              <div className="flex items-center gap-2 group/item hover:text-white transition-colors duration-200">
                <HardDrive className="h-4.5 w-4.5 text-secondary-accent/60 group-hover/item:text-secondary-accent transition-colors" />
                <span>AWS</span>
              </div>
              <div className="flex items-center gap-2 group/item hover:text-white transition-colors duration-200">
                <Globe className="h-4.5 w-4.5 text-secondary-accent/60 group-hover/item:text-secondary-accent transition-colors" />
                <span>Streamlit</span>
              </div>
              <div className="flex items-center gap-2 group/item hover:text-white transition-colors duration-200">
                <GitBranch className="h-4.5 w-4.5 text-secondary-accent/60 group-hover/item:text-secondary-accent transition-colors" />
                <span>CI/CD</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


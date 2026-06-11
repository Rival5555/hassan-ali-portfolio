"use client";

import { motion } from "framer-motion";
import { GitPullRequest, Star, BookOpen, Activity, Terminal } from "lucide-react";

export default function Github() {
  // Generate mock contribution data (53 columns x 7 rows)
  const columns = 36; // Responsive sizing for standard displays
  const rows = 7;
  
  // Custom activity level maps (0 = none, 1 = low, 2 = medium, 3 = high)
  const getActivityColor = (level: number) => {
    switch (level) {
      case 1: return "bg-[#1E293B] border border-white/5"; // Very low
      case 2: return "bg-cyan-950/60 border border-cyan-800/20"; // Low
      case 3: return "bg-cyan-800/70 border border-cyan-500/10"; // Medium
      case 4: return "bg-primary-accent border border-cyan-400/30"; // High
      case 5: return "bg-secondary-accent border border-purple-400/30"; // Special push
      default: return "bg-slate-900/30 border border-white/5"; // No contributions
    }
  };

  // Pre-seed mock activity values for clean aesthetic
  const mockActivityGrid = Array.from({ length: columns }, (_, colIdx) => 
    Array.from({ length: rows }, (_, rowIdx) => {
      // Create some organic looking visual clumps
      const noise = Math.sin(colIdx * 0.3) * Math.cos(rowIdx * 0.5);
      const rand = Math.random();
      if (rand > 0.85) return 5;
      if (noise > 0.4) return 4;
      if (noise > 0.1) return 3;
      if (noise > -0.2 && rand > 0.4) return 2;
      if (rand > 0.7) return 1;
      return 0;
    })
  );

  return (
    <section id="github" className="relative space-y-10 py-8 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-cyan absolute left-1/3 bottom-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          GitHub{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Metrics
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-sm text-muted-text pt-2 leading-relaxed">
          Tracking commit telemetry, repository architectures, and continuous developer integrations.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        {/* Left: Github metrics card */}
        <div className="space-y-4">
          <div className="glass-card rounded-3xl p-5 border border-white/5 space-y-4">
            <div className="flex items-center gap-2 border-b border-white/5 pb-3">
              <Terminal className="h-4 w-4 text-primary-accent" />
              <span className="font-mono text-[10px] text-muted-text uppercase font-bold tracking-wider">api.github.com/Rival5555</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1.5 text-muted-text mb-1">
                  <BookOpen className="h-3.5 w-3.5 text-primary-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Repos</span>
                </div>
                <span className="text-xl font-bold text-text">28</span>
              </div>
              <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1.5 text-muted-text mb-1">
                  <Star className="h-3.5 w-3.5 text-secondary-accent" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Stars</span>
                </div>
                <span className="text-xl font-bold text-text">45</span>
              </div>
              <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1.5 text-muted-text mb-1">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Commits</span>
                </div>
                <span className="text-xl font-bold text-text">843</span>
              </div>
              <div className="bg-slate-950/40 p-3 rounded-2xl border border-white/5">
                <div className="flex items-center gap-1.5 text-muted-text mb-1">
                  <GitPullRequest className="h-3.5 w-3.5 text-[#F8FAFC]" />
                  <span className="text-[10px] uppercase font-bold tracking-wider font-mono">PRs</span>
                </div>
                <span className="text-xl font-bold text-text">32</span>
              </div>
            </div>

            <a
              href="https://github.com/Rival5555"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 border border-white/10 hover:border-primary-accent/40 py-2.5 text-xs font-semibold text-text transition-colors cursor-pointer"
            >
              <span>Explore GitHub Repositories</span>
            </a>
          </div>
        </div>

        {/* Right: Contributions grid card */}
        <div className="glass-card rounded-3xl p-5 border border-white/5 space-y-4 flex flex-col justify-between overflow-x-auto">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white tracking-wide uppercase font-mono">1,420 Contributions in the last year</h3>
            <p className="text-[10px] text-muted-text">Aggregated developer commit logs, issue openings, and pull request validations.</p>
          </div>

          {/* Grid Chart */}
          <div className="pt-2 min-w-[560px]">
            <div className="flex gap-[3px]">
              {mockActivityGrid.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {col.map((level, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`h-[9.5px] w-[9.5px] rounded-[1.5px] transition-colors duration-500 hover:scale-115 ${getActivityColor(level)}`}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Months Label row */}
            <div className="flex justify-between text-[9px] text-muted-text/80 font-mono mt-3 px-2">
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1.5 text-[9px] text-muted-text font-mono border-t border-white/5 pt-3">
            <span>Less</span>
            <div className="h-[9px] w-[9px] rounded-[1.5px] bg-slate-900/30 border border-white/5" />
            <div className="h-[9px] w-[9px] rounded-[1.5px] bg-[#1E293B]" />
            <div className="h-[9px] w-[9px] rounded-[1.5px] bg-cyan-950/60" />
            <div className="h-[9px] w-[9px] rounded-[1.5px] bg-cyan-800/70" />
            <div className="h-[9px] w-[9px] rounded-[1.5px] bg-primary-accent" />
            <div className="h-[9px] w-[9px] rounded-[1.5px] bg-secondary-accent" />
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

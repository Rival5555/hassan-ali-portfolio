"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  skills: string[];
  logo: React.ReactNode;
};

const AWSLogo = () => (
  <svg className="w-8 h-8 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 12.28c-.48.36-1.08.56-1.72.56-1.12 0-1.84-.68-1.84-1.88 0-1.2.72-1.88 1.84-1.88.64 0 1.24.2 1.72.56v2.64zm.44-4.88c-.68-.44-1.52-.68-2.4-.68-1.92 0-3.24 1.16-3.24 3.08s1.32 3.08 3.24 3.08c.88 0 1.72-.24 2.4-.68v.92c-.68.32-1.52.48-2.4.48-2.48 0-4.28-1.52-4.28-4.12s1.8-4.12 4.28-4.12c.88 0 1.72.16 2.4.48v.92zm2.2 7.12h-1.04V9.48h1.04v9.04z" />
  </svg>
);

const TFLogo = () => (
  <svg className="w-8 h-8 text-[#FF6F00]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7.5v11L12 24l10-5.5v-11L12 2zm8 15.3l-8 4.4-8-4.4V8.7l8-4.4 8 4.4v8.6z M12 6.8l5 2.7v5l-5 2.7-5-2.7v-5l5-2.7z" />
  </svg>
);

const DLALogo = () => (
  <svg className="w-8 h-8 text-[#E23237]" viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
    <path d="M7 10h10v4H7z" opacity="0.3" />
  </svg>
);

const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Apr 2024",
    credentialUrl: "https://aws.amazon.com",
    skills: ["SageMaker", "Cloud Security", "Data Engineering", "Distributed Training"],
    logo: <AWSLogo />,
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google Developers",
    date: "Issued Dec 2023",
    credentialUrl: "https://www.tensorflow.org/certificate",
    skills: ["Computer Vision", "NLP", "Time-Series forecasting", "TensorFlow API"],
    logo: <TFLogo />,
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "Issued Aug 2023",
    credentialUrl: "https://www.coursera.org/specializations/deep-learning",
    skills: ["Neural Networks", "Structuring ML Projects", "CNNs", "Sequence Models"],
    logo: <DLALogo />,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative space-y-10 py-8 scroll-mt-20">
      {/* Decorative Glow Spot */}
      <div className="glow-spot-cyan absolute right-0 top-1/4 h-80 w-80 rounded-full" />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Licenses &{" "}
          <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent font-black">
            Certifications
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary-accent to-secondary-accent rounded-full" />
        <p className="max-w-xl text-sm text-muted-text pt-2 leading-relaxed">
          Validating ML engineering expertise and cloud systems competence through industry-standard credentials.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS_DATA.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group glass-card rounded-3xl p-5 border border-white/5 hover:border-primary-accent/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Logo Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-colors">
                  {cert.logo}
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="h-3 w-3" /> VERIFIED
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-primary-accent transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-text font-medium">{cert.issuer}</p>
                <p className="text-[10px] text-muted-text/70 font-mono">{cert.date}</p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-slate-950/40 px-2 py-0.5 text-[10px] text-muted-text font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Link */}
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs font-semibold text-text hover:text-primary-accent transition-colors group/link cursor-pointer"
              >
                <span>Verify Credential</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-text group-hover/link:text-primary-accent transition-colors group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

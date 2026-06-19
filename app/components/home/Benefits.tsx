"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "~4 min",
    label: "Analysis time",
    description: "From document upload to full income report",
    icon: "⚡",
  },
  {
    value: "40+",
    label: "Income types",
    description: "W-2, SE, rental, investment, and more",
    icon: "📊",
  },
  {
    value: "$300+",
    label: "Avg. income recovered",
    description: "Additional qualifying income found per file",
    icon: "💰",
  },
  {
    value: "5",
    label: "Loan programs",
    description: "Conventional, FHA, VA, USDA, Non-QM",
    icon: "🏠",
  },
];

const benefits = [
  {
    icon: "🧠",
    title: "AI that thinks like an underwriter",
    description:
      "Trained on underwriting guidelines and real loan scenarios, Auxilium Logic catches what humans miss — and validates what humans second-guess.",
  },
  {
    icon: "🔗",
    title: "Built to fit your workflow",
    description:
      "Export to your LOS or share directly with underwriters. Designed to slot into how you already work, not replace it.",
  },
  {
    icon: "📜",
    title: "Audit-ready documentation",
    description:
      "Every analysis includes a clear paper trail showing how income was calculated, which guidelines were applied, and why each decision was made.",
  },
  {
    icon: "🏢",
    title: "Built for teams and solo brokers",
    description:
      "Whether you're an independent broker or running a team, the platform scales with you — role-based access and shared pipelines included.",
  },
  {
    icon: "🔒",
    title: "Secure by design",
    description:
      "Bank-level encryption at rest and in transit. Your borrower data is never used to train our models, and you control who sees what.",
  },
  {
    icon: "🔄",
    title: "Always current guidelines",
    description:
      "Fannie Mae, Freddie Mac, FHA, and VA guidelines are kept up to date automatically. You never work with outdated rules.",
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Why Auxilium Logic
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            The productivity platform
            <br />
            mortgage brokers needed
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="bg-slate-900 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-blue-400 font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-xs leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-lg shrink-0 mt-0.5">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

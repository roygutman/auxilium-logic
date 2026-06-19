"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "⏱",
    label: "Time-Consuming Reviews",
    title: "Hours lost per loan file",
    description:
      "Manually reviewing W-2s, tax returns, pay stubs, and bank statements for a single borrower takes 3–5 hours on average. Multiply that across your pipeline and it's a full-time job.",
    stat: "3–5 hrs",
    statLabel: "per loan file",
    color: "from-orange-50 to-red-50",
    border: "border-orange-100",
    statColor: "text-orange-600",
  },
  {
    icon: "💸",
    label: "Missed Income Opportunities",
    title: "Qualifying income left on the table",
    description:
      "Addbacks, rental income, self-employment adjustments, and bonus income are frequently miscalculated or missed entirely — turning a qualifying borrower into a declined loan.",
    stat: "1 in 3",
    statLabel: "loans have missed income",
    color: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
    statColor: "text-cyan-600",
  },
  {
    icon: "⚠️",
    label: "Underwriting Risks",
    title: "Risks caught late, or not at all",
    description:
      "Undisclosed liabilities, inconsistent employment histories, and income documentation gaps often surface at underwriting — causing costly delays and deal fallout.",
    stat: "23%",
    statLabel: "of files have hidden risk flags",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    statColor: "text-purple-600",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white" id="problems">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            The Problem
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            Manual income analysis
            <br />
            is broken.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Mortgage brokers spend too much time on low-value data entry and not
            enough time closing loans. The manual process is slow, error-prone,
            and costly.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.label}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative bg-gradient-to-br ${problem.color} border ${problem.border} rounded-2xl p-8 group hover:shadow-md transition-shadow duration-300`}
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <div className="inline-block bg-white/70 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {problem.label}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {problem.description}
              </p>
              <div className="border-t border-white/60 pt-5">
                <span className={`text-3xl font-bold ${problem.statColor}`}>
                  {problem.stat}
                </span>
                <p className="text-slate-500 text-xs mt-1">{problem.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

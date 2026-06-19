"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    icon: "📊",
    title: "Income Analysis",
    description:
      "Instantly parse and calculate qualifying income from W-2s, 1040s, 1099s, K-1s, pay stubs, and rental agreements. Handles every income type across all major guidelines.",
    tags: ["W-2 & Self-Employed", "FHA · VA · Conv.", "Fannie & Freddie"],
    highlight: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    icon: "🎯",
    title: "Opportunity Detection",
    description:
      "AI scans every file for income addbacks, averaging strategies, and underwriter-accepted workarounds that increase qualifying income without changing the loan terms.",
    tags: ["Addback Detection", "Income Averaging", "Rental Addbacks"],
    highlight: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
  },
  {
    icon: "🛡️",
    title: "Risk Identification",
    description:
      "Surface underwriting risks before they become surprises. Employment gaps, declining income trends, undisclosed liabilities, and documentation inconsistencies — flagged instantly.",
    tags: ["Early Warning System", "DTI Monitoring", "File Completeness"],
    highlight: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
  {
    icon: "📐",
    title: "Scenario Analysis",
    description:
      "Run multiple loan scenarios side-by-side. Compare income calculation methods, loan programs, and rate options to find the best path to qualification for every borrower.",
    tags: ["Multi-Scenario", "Program Comparison", "What-If Analysis"],
    highlight: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            The Solution
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            Everything you need to close more loans
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Auxilium Logic replaces hours of manual work with AI-powered analysis
            that&apos;s faster, more accurate, and more comprehensive than any
            human review.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div
                className={`inline-flex w-12 h-12 ${solution.iconBg} rounded-xl items-center justify-center text-2xl mb-5`}
              >
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5 text-sm">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">
              Supports all major loan programs
            </p>
            <p className="text-slate-400 text-sm">
              Conventional, FHA, VA, USDA, Jumbo, and Non-QM — all guidelines
              built in.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            {["Fannie Mae", "Freddie Mac", "FHA", "VA", "Non-QM"].map(
              (prog) => (
                <span
                  key={prog}
                  className="bg-white/10 text-white text-xs px-3 py-1.5 rounded-lg font-medium border border-white/10"
                >
                  {prog}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const values = [
  {
    icon: "🎯",
    title: "Accuracy first",
    description:
      "Every income calculation is explainable, auditable, and grounded in the actual guidelines.",
  },
  {
    icon: "⚡",
    title: "Speed matters",
    description:
      "Brokers shouldn't choose between being thorough and being fast. We make both possible.",
  },
  {
    icon: "🤝",
    title: "Built for brokers",
    description:
      "Designed with input from working mortgage professionals, not just engineers.",
  },
];

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight mb-6">
              Built by people who understand mortgages
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Auxilium Logic was founded by a team of mortgage industry veterans
              and AI engineers who watched talented brokers lose hours every day
              to manual income analysis.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We built the platform we wished existed — one that handles the
              tedious, high-stakes work of income qualification so brokers can
              focus on what they do best: building relationships and closing
              loans.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-colors group"
            >
              Learn our story
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-xl shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

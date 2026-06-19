"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import type { FinalCTAContent } from "@/lib/content";

export default function FinalCTA({ content }: { content: FinalCTAContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [headlinePart1, headlinePart2] = content.headline.split("\n");

  return (
    <section ref={ref} className="py-28 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12)_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(56,189,248,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            {content.badge}
          </div>

          <h2 className="text-5xl font-bold text-white leading-tight mb-6">
            {headlinePart1}
            <br />
            <span className="text-blue-400">{headlinePart2}</span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            {content.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-lg"
            >
              Request Beta Access
              <svg
                className="w-5 h-5"
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 text-lg"
            >
              Talk to the Founders
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
            {[
              "No credit card required",
              "Free during beta",
              "Your data stays yours",
              "Cancel anytime",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="text-blue-500">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

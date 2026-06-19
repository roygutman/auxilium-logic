"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { HowItWorksContent } from "@/lib/content";

export default function HowItWorks({ content }: { content: HowItWorksContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            {content.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-blue-200 via-slate-200 to-slate-100 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {content.steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${i > 0 ? "lg:mt-20" : ""}`}
                >
                  {/* Step content */}
                  <div className={isLeft ? "lg:text-right" : "lg:col-start-2"}>
                    <div
                      className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:flex-row-reverse" : ""}`}
                    >
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                        Step {step.number}
                      </span>
                      <div className="h-px flex-1 bg-slate-100 lg:hidden" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <span className="inline-block bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {step.detail}
                    </span>
                  </div>

                  {/* Center icon */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${i === 0 ? "top-8 -translate-y-0" : ""}`}
                  >
                    <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-2xl shadow-md flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className="lg:hidden flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {step.icon}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

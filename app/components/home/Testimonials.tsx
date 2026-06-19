"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TestimonialsContent } from "@/lib/content";

export default function Testimonials({ content }: { content: TestimonialsContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            {content.eyebrow}
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.items.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">
                    {t.author}
                  </p>
                  <p className="text-slate-500 text-xs">{t.title}</p>
                  <p className="text-slate-400 text-xs">{t.company}</p>
                </div>
              </div>
              <div className="mt-3 bg-slate-50 rounded-lg px-3 py-1.5 text-xs text-slate-500 text-center">
                {t.loans}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500 text-sm"
        >
          {content.social_proof.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-lg">
                {item.value}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

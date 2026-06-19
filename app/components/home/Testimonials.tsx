"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Auxilium Logic cut our income review time from 4 hours to 20 minutes. It caught two addback opportunities our team had missed and the borrower qualified at a $40k higher purchase price. This is genuinely a game-changer.",
    author: "Jennifer Malik",
    title: "Senior Mortgage Broker",
    company: "Apex Home Lending",
    initials: "JM",
    color: "bg-blue-500",
    loans: "312 loans closed with Auxilium",
  },
  {
    quote:
      "Our first-time submission approval rate went from 64% to 89% in three months. The risk flagging is incredibly accurate — it surfaces issues that would have killed deals at underwriting. My team submits with a lot more confidence now.",
    author: "Marcus Webb",
    title: "Branch Manager",
    company: "Pacific Northwest Mortgage",
    initials: "MW",
    color: "bg-cyan-500",
    loans: "180+ loan team",
  },
  {
    quote:
      "I was skeptical that AI could handle the complexity of self-employed borrower income. After running my first 50 files, I was wrong. It correctly handled K-1s, S-corp addbacks, and depreciation with zero errors. I trust it more than a junior processor.",
    author: "Rachel Kim",
    title: "Independent Mortgage Broker",
    company: "Kim & Associates",
    initials: "RK",
    color: "bg-violet-500",
    loans: "Solo broker, 40+ files/mo",
  },
];

export default function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            Trusted by mortgage professionals
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join hundreds of brokers who are closing more loans with less effort.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
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
          {[
            { value: "500+", label: "Active brokers" },
            { value: "47,000+", label: "Loans analyzed" },
            { value: "4.9/5", label: "Average rating" },
          ].map((item) => (
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

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const milestones = [
  {
    year: "Early 2026",
    event: "Founded after seeing firsthand how much time mortgage brokers lose to manual income analysis",
  },
  {
    year: "Mid 2026",
    event: "Built and validated our core income analysis engine across major loan programs and guideline sets",
  },
  {
    year: "Late 2026",
    event: "Launched beta — onboarding early-access brokers and incorporating their feedback into the platform",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h1 className="mt-4 text-5xl font-bold text-white leading-tight mb-6">
              We&apos;re on a mission to make mortgage qualification
              <span className="text-blue-400"> effortless.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Auxilium Logic was founded in 2026 by people who saw how much time
              and revenue mortgage brokers were losing to slow, manual income
              analysis — and decided to fix it.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Currently in Beta
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why we built Auxilium Logic
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Working with mortgage brokers, we kept seeing the same problem:
                  the most skilled professionals in the industry were spending
                  the majority of their day on manual data entry. Reviewing W-2s,
                  tax returns, pay stubs, bank statements, rental agreements —
                  one loan file could take hours.
                </p>
                <p>
                  The cost was real. Deals fell through because analysis took
                  too long. Qualifying income was miscalculated — sometimes in
                  the borrower&apos;s favor, often not. And errors that slipped
                  through to underwriting cost everyone time and money.
                </p>
                <p>
                  We knew AI could do this work faster and more consistently
                  than any manual process. Not to replace the broker — but to
                  give them back the hours they were losing, so they could focus
                  on what only they can do: building relationships, structuring
                  deals, and closing loans.
                </p>
                <p>
                  That&apos;s why we built Auxilium Logic.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 text-xl mb-6">Our journey so far</h3>
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="bg-slate-900 rounded-xl px-3 py-2 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-xs whitespace-nowrap">{m.year}</span>
                      </div>
                    </div>
                    <div className="pt-1.5">
                      <p className="text-slate-700 text-sm leading-relaxed">{m.event}</p>
                      {i < milestones.length - 1 && (
                        <div className="w-px h-4 bg-slate-200 ml-0 mt-3" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Our Vision
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 mb-6">
              The future of mortgage lending
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We envision a future where every mortgage broker has the analytical
              power of a full team — at their fingertips, in real time. Where no
              qualifying borrower is denied because of a calculation error. Where
              the best loan option is always surfaced, not guessed.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Auxilium Logic is building the intelligence layer for mortgage
              brokers — one that makes them more capable, lenders more
              confident, and homeownership more accessible. We&apos;re early in
              that journey, and we&apos;re building it in close partnership with
              the brokers who use it every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { value: "Zero", label: "manual calculations", icon: "🧮" },
                { value: "100%", label: "guideline coverage", icon: "📋" },
                { value: "Every", label: "borrower qualified fairly", icon: "🏠" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-slate-200 p-6"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {item.value}
                  </div>
                  <div className="text-slate-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-white">How we operate</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Accuracy first",
                description:
                  "We will never ship a calculation we can&apos;t verify against the official guidelines. Accuracy is non-negotiable — especially in mortgage.",
              },
              {
                icon: "🔍",
                title: "Explainability matters",
                description:
                  "Every AI decision is transparent. Brokers can see exactly how income was calculated and why — no black boxes, no guesswork.",
              },
              {
                icon: "🤝",
                title: "Built with brokers",
                description:
                  "We build features based on real broker workflows. Our beta users are co-designers, not just customers — their feedback shapes every release.",
              },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-slate-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: v.description }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Want to join the beta?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            We&apos;re onboarding brokers now. Talk to us directly — we&apos;d love to
            show you what we&apos;re building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Request Beta Access
            <svg
              className="w-4 h-4"
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
      </section>
    </div>
  );
}

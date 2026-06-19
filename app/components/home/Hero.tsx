"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Glow behind card */}
      <div className="absolute inset-0 translate-y-4 scale-95 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-3xl rounded-3xl" />

      {/* Floating top-right — beta badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-lg border border-slate-200/80 px-4 py-3 z-10"
      >
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <p className="text-xs font-semibold text-slate-700">Beta Access Open</p>
        </div>
        <p className="text-slate-400 text-xs">Early adopter program</p>
      </motion.div>

      {/* Floating bottom-left stat */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border border-slate-200/80 px-4 py-3 z-10"
      >
        <p className="text-xs text-slate-500 mb-0.5">Avg. Analysis Time</p>
        <p className="text-xl font-bold text-slate-900">~4 min</p>
        <p className="text-xs text-blue-600 font-medium">vs. hours manually</p>
      </motion.div>

      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/90" />
            <div className="w-3 h-3 rounded-full bg-amber-400/90" />
            <div className="w-3 h-3 rounded-full bg-blue-400/90" />
          </div>
          <div className="flex-1 bg-white rounded-md border border-slate-200 text-center text-xs text-slate-400 py-1 px-3">
            app.auxiliumlogic.com/analysis/24-8291
          </div>
        </div>

        {/* App layout */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-44 bg-slate-900 flex flex-col p-4 gap-1 shrink-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-400 rounded-sm" />
              </div>
              <span className="text-white font-bold text-xs">Auxilium</span>
            </div>
            {[
              { label: "Dashboard", icon: "⬛" },
              { label: "Borrowers", icon: "👥" },
              { label: "Analysis", icon: "📊", active: true },
              { label: "Reports", icon: "📋" },
              { label: "Settings", icon: "⚙️" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs cursor-pointer ${
                  item.active
                    ? "bg-blue-500 text-white font-medium"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 bg-slate-50 p-4">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-900 text-sm">
                Income Analysis
              </h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-semibold">
                Qualifying ✓
              </span>
            </div>

            {/* Borrower card */}
            <div className="bg-white rounded-xl border border-slate-200 p-3.5 mb-2.5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 text-xs font-bold shrink-0">
                  SJ
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-xs leading-tight">
                    Sarah Johnson
                  </p>
                  <p className="text-slate-500 text-xs">
                    App #24-8291 · Purchase · $485,000
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-slate-500 text-xs">AI Score</p>
                  <p className="text-blue-600 font-bold text-sm">92/100</p>
                </div>
              </div>

              {/* Income table */}
              <div className="text-xs">
                <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-100">
                  <span>Income Source</span>
                  <div className="flex gap-6">
                    <span>Monthly</span>
                    <span>Annual</span>
                  </div>
                </div>
                {[
                  { source: "W-2 Employment", monthly: "$8,500", annual: "$102,000" },
                  { source: "Self-Employment", monthly: "$2,200", annual: "$26,400" },
                  { source: "Rental Income", monthly: "$1,100", annual: "$13,200" },
                ].map((row) => (
                  <div
                    key={row.source}
                    className="flex items-center justify-between py-1.5 border-b border-slate-50 text-slate-700"
                  >
                    <span>{row.source}</span>
                    <div className="flex gap-6">
                      <span>{row.monthly}</span>
                      <span className="text-blue-600">{row.annual}</span>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 font-semibold text-slate-900">
                  <span>Qualifying Income</span>
                  <div className="flex gap-6">
                    <span>$11,800</span>
                    <span>$141,600</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2 mb-2.5">
              <div className="bg-white rounded-xl border border-slate-200 p-3">
                <p className="text-slate-500 text-xs mb-1">DTI Ratio</p>
                <p className="text-slate-900 font-bold text-lg leading-none mb-1.5">
                  28.4%
                </p>
                <div className="h-1.5 bg-slate-100 rounded-full">
                  <div
                    className="h-1.5 bg-blue-500 rounded-full"
                    style={{ width: "28.4%" }}
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-3">
                <p className="text-slate-500 text-xs mb-1">AI Risk Score</p>
                <p className="text-blue-600 font-bold text-lg leading-none mb-1.5">
                  92 / 100
                </p>
                <div className="h-1.5 bg-slate-100 rounded-full">
                  <div
                    className="h-1.5 bg-blue-500 rounded-full"
                    style={{ width: "92%" }}
                  />
                </div>
              </div>
            </div>

            {/* Opportunities */}
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-3">
              <p className="text-blue-800 font-semibold text-xs mb-1.5">
                ✨ 3 Opportunities Detected
              </p>
              {[
                "Rental addback increases qualifying income by $220/mo",
                "2-year avg SE income favors borrower",
                "VOE confirms employment continuity",
              ].map((opp) => (
                <div key={opp} className="flex items-start gap-1.5 text-blue-700 text-xs mb-1 last:mb-0">
                  <span className="text-blue-500 mt-px shrink-0">✓</span>
                  <span>{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.06)_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(56,189,248,0.05)_0%,_transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2304112D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8"
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Now in Beta — Early Access Available
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              AI-Powered
              <br />
              <span className="text-blue-500">Mortgage Income</span>
              <br />
              Analysis
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg"
            >
              Analyze borrower income, uncover qualifying opportunities, identify
              underwriting risks, and accelerate loan decisions in minutes instead
              of hours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/25 hover:-translate-y-0.5"
              >
                Request Beta Access
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-slate-500 text-sm"
            >
              {[
                { icon: "🔒", text: "Bank-level security" },
                { icon: "✓", text: "No credit card required" },
                { icon: "⚡", text: "Setup in minutes" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

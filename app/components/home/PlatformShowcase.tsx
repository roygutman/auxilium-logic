"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const tabs = [
  { id: "income", label: "Income Analysis" },
  { id: "risk", label: "Risk Assessment" },
  { id: "scenarios", label: "Scenario Planning" },
];

function IncomeView() {
  return (
    <div className="h-full flex">
      {/* Sidebar */}
      <div className="w-52 bg-slate-900 flex flex-col p-4 gap-0.5 shrink-0">
        <div className="flex items-center gap-2 mb-5 mt-1">
          <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-400 rounded-sm" />
          </div>
          <span className="text-white font-bold text-xs">Auxilium Logic</span>
        </div>
        {[
          { label: "Dashboard", icon: "⊞" },
          { label: "Borrowers", icon: "👥" },
          { label: "Analysis", icon: "📊", active: true },
          { label: "Reports", icon: "📋" },
          { label: "Pipeline", icon: "🏗" },
          { label: "Settings", icon: "⚙" },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs cursor-pointer ${
              item.active
                ? "bg-blue-500 text-white font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="w-4 text-center">{item.icon}</span>
            {item.label}
          </div>
        ))}
        <div className="mt-auto pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 px-3">
            <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              RG
            </div>
            <div>
              <p className="text-white text-xs font-medium">Roy Gutman</p>
              <p className="text-slate-500 text-xs">Senior Broker</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="bg-white border-b border-slate-200 px-5 py-3 flex items-center justify-between shrink-0">
          <div>
            <h2 className="font-semibold text-slate-900 text-sm">
              Income Analysis — Sarah Johnson
            </h2>
            <p className="text-slate-500 text-xs">
              App #24-8291 · Last updated 2 min ago
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-semibold">
              Qualifying ✓
            </span>
            <button className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg font-medium">
              Export Report
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto grid grid-cols-3 gap-4">
          {/* Left column */}
          <div className="col-span-2 space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Qualifying Income", value: "$11,800/mo", sub: "+$340 via addbacks", color: "text-blue-600" },
                { label: "DTI Ratio", value: "28.4%", sub: "Below 45% threshold", color: "text-slate-900" },
                { label: "AI Risk Score", value: "92/100", sub: "Low risk profile", color: "text-blue-600" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl border border-slate-200 p-4"
                >
                  <p className="text-slate-500 text-xs mb-1">{stat.label}</p>
                  <p className={`text-xl font-bold ${stat.color} leading-none mb-1`}>
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Income table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 text-sm">
                  Income Breakdown
                </h3>
                <span className="text-blue-600 text-xs font-medium">
                  3 sources detected
                </span>
              </div>
              <div className="divide-y divide-slate-50">
                {[
                  {
                    source: "W-2 Employment — Apex Financial Corp",
                    docs: "W-2 (2022, 2023), VOE",
                    monthly: "$8,500",
                    annual: "$102,000",
                    method: "Current salary",
                    status: "Verified",
                  },
                  {
                    source: "Self-Employment — JG Consulting LLC",
                    docs: "1040 (2022, 2023), P&L",
                    monthly: "$2,200",
                    annual: "$26,400",
                    method: "2-yr avg net income",
                    status: "Verified",
                  },
                  {
                    source: "Rental Income — 421 Oak Street",
                    docs: "Schedule E, Lease Agreement",
                    monthly: "$1,100",
                    annual: "$13,200",
                    method: "75% gross rent",
                    status: "Addback applied",
                  },
                ].map((row, i) => (
                  <div key={i} className="px-5 py-3.5 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-slate-900 font-medium text-xs mb-0.5">
                          {row.source}
                        </p>
                        <p className="text-slate-400 text-xs">{row.docs}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-slate-900 font-semibold text-xs">
                          {row.monthly}/mo
                        </p>
                        <p className="text-blue-600 text-xs">{row.annual}/yr</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-md">
                        {row.method}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                          row.status === "Addback applied"
                            ? "bg-cyan-50 text-cyan-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="px-5 py-3.5 bg-slate-50 flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">
                    Total Qualifying Income
                  </span>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 text-sm">
                      $11,800/mo
                    </span>
                    <span className="text-blue-600 text-xs ml-2">
                      $141,600/yr
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Opportunities */}
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-4">
              <p className="text-blue-800 font-semibold text-xs mb-3">
                ✨ Opportunities Found
              </p>
              <div className="space-y-2">
                {[
                  "Rental addback adds $220/mo qualifying income",
                  "2-yr SE avg favors borrower by $180/mo",
                  "Commission income trending up 12%",
                ].map((opp) => (
                  <div key={opp} className="flex items-start gap-2">
                    <span className="text-blue-500 text-xs mt-px shrink-0">
                      ✓
                    </span>
                    <span className="text-blue-800 text-xs">{opp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk flags */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-slate-700 font-semibold text-xs mb-3">
                Risk Flags (0 Critical)
              </p>
              <div className="space-y-2">
                {[
                  { text: "Employment gap 2021: 2 months", level: "low" },
                  { text: "SE income declined 3% in 2022", level: "low" },
                ].map((flag) => (
                  <div key={flag.text} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0 mt-1" />
                    <span className="text-slate-600 text-xs">{flag.text}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 text-xs">—</span>
                  <span className="text-slate-400 text-xs">
                    No critical risks detected
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-slate-700 font-semibold text-xs mb-3">
                Quick Actions
              </p>
              <div className="space-y-2">
                {[
                  "Generate 1084 Worksheet",
                  "Run Scenario Comparison",
                  "Export to Encompass",
                  "Share with Underwriter",
                ].map((action) => (
                  <button
                    key={action}
                    className="w-full text-left text-xs text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{action}</span>
                    <span className="text-slate-400">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiskView() {
  return (
    <div className="h-full flex bg-slate-50">
      <div className="w-52 bg-slate-900 p-4 shrink-0">
        <div className="flex items-center gap-2 mb-5 mt-1">
          <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-400 rounded-sm" />
          </div>
          <span className="text-white font-bold text-xs">Auxilium Logic</span>
        </div>
        {[
          { label: "Dashboard", icon: "⊞" },
          { label: "Borrowers", icon: "👥" },
          { label: "Analysis", icon: "📊" },
          { label: "Reports", icon: "📋" },
          { label: "Risk Review", icon: "🛡️", active: true },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs cursor-pointer mb-0.5 ${
              item.active
                ? "bg-blue-500 text-white font-medium"
                : "text-slate-400"
            }`}
          >
            <span className="w-4 text-center">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
      <div className="flex-1 p-5">
        <h2 className="font-bold text-slate-900 text-base mb-4">
          Risk Assessment Overview
        </h2>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Pipeline Loans", value: "47", sub: "Active files", color: "text-slate-900" },
            { label: "Low Risk", value: "38", sub: "Ready to submit", color: "text-blue-600" },
            { label: "Needs Review", value: "9", sub: "Flagged items", color: "text-amber-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-slate-500 text-xs mb-1">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-slate-400 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-100">
            <h3 className="font-semibold text-slate-900 text-sm">
              Recent Risk Flags
            </h3>
          </div>
          {[
            { borrower: "Michael Chen", flag: "2-year employment gap", severity: "medium", score: 71 },
            { borrower: "Amanda Torres", flag: "SE income declined 18% YoY", severity: "high", score: 58 },
            { borrower: "David Kim", flag: "Missing 2023 W-2 — employer B", severity: "low", score: 84 },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-3.5 border-b border-slate-50 last:border-0"
            >
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 text-xs font-bold shrink-0">
                {item.borrower.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <p className="text-slate-900 font-medium text-xs">
                  {item.borrower}
                </p>
                <p className="text-slate-500 text-xs">{item.flag}</p>
              </div>
              <div className="text-right">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.severity === "high"
                      ? "bg-red-50 text-red-600"
                      : item.severity === "medium"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.severity}
                </span>
                <p className="text-slate-900 font-bold text-xs mt-1">
                  Score: {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScenarioView() {
  return (
    <div className="h-full bg-slate-50 p-5">
      <h2 className="font-bold text-slate-900 text-base mb-5">
        Scenario Analysis — Michael Torres
      </h2>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          {
            name: "Scenario A",
            program: "Conventional 30yr",
            income: "$9,400/mo",
            dti: "36.2%",
            approved: true,
          },
          {
            name: "Scenario B",
            program: "FHA 30yr",
            income: "$9,400/mo",
            dti: "33.8%",
            approved: true,
          },
          {
            name: "Scenario C",
            program: "VA 30yr",
            income: "$9,400/mo",
            dti: "29.1%",
            approved: true,
            best: true,
          },
        ].map((sc) => (
          <div
            key={sc.name}
            className={`bg-white rounded-xl border p-5 ${
              sc.best ? "border-blue-300 ring-1 ring-blue-200" : "border-slate-200"
            }`}
          >
            {sc.best && (
              <span className="inline-block bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full mb-2 font-medium">
                Best Option
              </span>
            )}
            <p className="font-bold text-slate-900 text-sm mb-0.5">{sc.name}</p>
            <p className="text-slate-500 text-xs mb-3">{sc.program}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Qualifying Income</span>
                <span className="text-slate-900 font-semibold">{sc.income}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">DTI</span>
                <span
                  className={`font-semibold ${
                    sc.best ? "text-blue-600" : "text-slate-900"
                  }`}
                >
                  {sc.dti}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Status</span>
                <span className="text-blue-600 font-semibold">Approved</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <p className="text-slate-900 font-semibold text-sm mb-1">
          AI Recommendation
        </p>
        <p className="text-slate-600 text-xs leading-relaxed">
          Scenario C (VA 30yr) provides the lowest DTI at 29.1% and eliminates
          PMI requirements. Borrower qualifies for 100% financing — recommend
          this program for fastest approval path.
        </p>
      </div>
    </div>
  );
}

const tabViews: Record<string, React.FC> = {
  income: IncomeView,
  risk: RiskView,
  scenarios: ScenarioView,
};

export default function PlatformShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("income");
  const ActiveView = tabViews[activeTab];

  return (
    <section ref={ref} className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            The Platform
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
            A command center built for mortgage brokers
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Every tool you need to analyze, qualify, and close loans — in one
            intelligent platform.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-6"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 translate-y-6 scale-[0.97] bg-gradient-to-br from-blue-500/15 to-cyan-400/15 blur-3xl rounded-3xl" />
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-blue-400/80" />
              </div>
              <div className="flex-1 bg-white rounded-md border border-slate-200 text-center text-xs text-slate-400 py-1 px-3 max-w-xs mx-auto">
                app.auxiliumlogic.com
              </div>
            </div>

            {/* Dashboard content */}
            <div style={{ height: "520px" }}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ActiveView />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature pills below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            "Automated document parsing",
            "Real-time DTI calculations",
            "Fannie/Freddie/FHA guidelines built-in",
            "One-click export",
            "Team collaboration",
            "Audit-ready documentation",
          ].map((feature) => (
            <span
              key={feature}
              className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full"
            >
              <span className="text-blue-500">✓</span>
              {feature}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "info@auxiliumlogic.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: "📅",
    label: "Book a Demo",
    value: "30-minute walkthrough",
    sub: "See the platform live with your own files",
  },
];

const loanVolumes = [
  "Under 10 loans/month",
  "10–30 loans/month",
  "30–75 loans/month",
  "75–150 loans/month",
  "150+ loans/month",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    loanVolume: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-150";

  const labelClass = "block text-sm font-medium text-slate-700 mb-2";

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </span>
            <h1 className="mt-4 text-5xl font-bold text-white leading-tight mb-4">
              Let&apos;s talk about
              <span className="text-blue-400"> beta access.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Request beta access, ask a question, or just talk to the
              founders. We respond personally to every message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left sidebar */}
            <div className="space-y-6">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-bold text-slate-900 text-lg mb-5">
                  Get in touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-4 bg-white rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="text-2xl mt-0.5">{item.icon}</div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-slate-900 font-semibold text-sm">
                          {item.value}
                        </p>
                        <p className="text-slate-500 text-xs">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Demo benefits */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
              >
                <h3 className="font-bold text-blue-900 text-base mb-4">
                  What to expect in a demo
                </h3>
                <div className="space-y-3">
                  {[
                    "Live walkthrough with a real loan file",
                    "Income analysis in under 5 minutes",
                    "Custom scenario for your borrower type",
                    "Integration options for your LOS",
                    "Transparent pricing discussion",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-blue-500 text-sm mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span className="text-blue-800 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Form header */}
                <div className="border-b border-slate-100 px-8 py-6 bg-slate-50">
                  <h2 className="text-xl font-bold text-slate-900">
                    Request Beta Access
                  </h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Fill out the form and we&apos;ll reach out within one business day
                    to schedule your personalized demo.
                  </p>
                </div>

                {submitted ? (
                  <div className="px-8 py-16 text-center">
                    <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                      ✅
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Request received!
                    </h3>
                    <p className="text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest. A member of our team will
                      reach out personally within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className={labelClass}>
                          First name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          placeholder="Sarah"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className={labelClass}>
                          Last name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Work email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="sarah@yourmortgagefirm.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    {/* Company + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className={labelClass}>
                          Company / Brokerage
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Apex Home Lending"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Loan volume */}
                    <div>
                      <label htmlFor="loanVolume" className={labelClass}>
                        Monthly loan volume
                      </label>
                      <select
                        id="loanVolume"
                        name="loanVolume"
                        value={formData.loanVolume}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select your volume</option>
                        {loanVolumes.map((v) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
                      >
                        Request Demo
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
                      </button>
                      <p className="text-center text-slate-400 text-xs mt-3">
                        No credit card required. We respond within one business
                        day.
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Common questions
            </h2>
          </motion.div>
          <div className="space-y-5">
            {[
              {
                q: "How long does a demo typically take?",
                a: "About 30 minutes. We do a live walkthrough using a real or sample loan file, show you the key features, and leave time for Q&A.",
              },
              {
                q: "Do I need to upload actual borrower data for a demo?",
                a: "No. We have anonymized sample files we use for demos. You're welcome to bring your own, but it's not required.",
              },
              {
                q: "What loan programs does Auxilium Logic support?",
                a: "Conventional (Fannie Mae, Freddie Mac), FHA, VA, USDA, Jumbo, and Non-QM. All major guidelines are built in and updated automatically.",
              },
              {
                q: "How does pricing work?",
                a: "We offer per-seat and volume-based pricing depending on your team size and loan volume. We'll walk through options during the demo.",
              },
              {
                q: "Can Auxilium Logic integrate with our LOS?",
                a: "Yes. We have native integrations with Encompass, BytePro, and a REST API for custom LOS integrations. Your team can export directly from the platform.",
              },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

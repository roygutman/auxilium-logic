"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveSection, logout } from "./actions";
import type { SiteContent } from "@/lib/content";

type Tab = "hero" | "how_it_works" | "benefits" | "testimonials" | "final_cta" | "contact";

const TABS: { id: Tab; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "how_it_works", label: "How It Works" },
  { id: "benefits", label: "Benefits" },
  { id: "testimonials", label: "Testimonials" },
  { id: "final_cta", label: "Final CTA" },
  { id: "contact", label: "Contact" },
];

function SaveButton({ saving, saved }: { saving: boolean; saved: boolean }) {
  return (
    <button
      type="submit"
      disabled={saving}
      className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
    >
      {saving ? "Saving…" : saved ? "Saved ✓" : "Save changes"}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-white";
const textareaCls = `${inputCls} resize-y min-h-[80px]`;

export default function AdminDashboard({ content }: { content: SiteContent }) {
  const [tab, setTab] = useState<Tab>("hero");
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">⚙️</span>
          </div>
          <span className="font-bold text-slate-900">Content Editor</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            target="_blank"
            className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            View site ↗
          </a>
          <form action={async () => { await logout(); router.refresh(); }}>
            <button type="submit" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Log out
            </button>
          </form>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Tab nav */}
        <div className="flex gap-1 bg-white border border-slate-200 rounded-xl p-1 mb-8 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 min-w-max px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                tab === t.id
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "hero" && <HeroEditor initial={content.hero} />}
        {tab === "how_it_works" && <HowItWorksEditor initial={content.how_it_works} />}
        {tab === "benefits" && <BenefitsEditor initial={content.benefits} />}
        {tab === "testimonials" && <TestimonialsEditor initial={content.testimonials} />}
        {tab === "final_cta" && <FinalCTAEditor initial={content.final_cta} />}
        {tab === "contact" && <ContactEditor initial={content.contact} />}
      </div>
    </div>
  );
}

function useSave(key: string) {
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function save(value: unknown) {
    setSaved(false);
    setError("");
    startTransition(async () => {
      const result = await saveSection(key, value);
      if (result.error) {
        setError(result.error);
      } else {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    });
  }

  return { save, saving: isPending, saved, error };
}

function HeroEditor({ initial }: { initial: SiteContent["hero"] }) {
  const [data, setData] = useState(initial);
  const { save, saving, saved, error } = useSave("hero");

  function setField(field: string, value: unknown) {
    setData((d) => ({ ...d, [field]: value }));
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); save(data); }}
      className="space-y-6"
    >
      <SectionHeader title="Hero Section" />
      <Field label="Badge text">
        <input className={inputCls} value={data.badge} onChange={(e) => setField("badge", e.target.value)} />
      </Field>
      <Field label="Headline — line 1 (plain)">
        <input className={inputCls} value={data.headline[0]} onChange={(e) => setData((d) => ({ ...d, headline: [e.target.value, d.headline[1], d.headline[2]] }))} />
      </Field>
      <Field label="Headline — line 2 (blue)">
        <input className={inputCls} value={data.headline[1]} onChange={(e) => setData((d) => ({ ...d, headline: [d.headline[0], e.target.value, d.headline[2]] }))} />
      </Field>
      <Field label="Headline — line 3 (plain)">
        <input className={inputCls} value={data.headline[2]} onChange={(e) => setData((d) => ({ ...d, headline: [d.headline[0], d.headline[1], e.target.value] }))} />
      </Field>
      <Field label="Subheadline">
        <textarea className={textareaCls} value={data.subheadline} onChange={(e) => setField("subheadline", e.target.value)} />
      </Field>
      <Field label="CTA button text">
        <input className={inputCls} value={data.cta_text} onChange={(e) => setField("cta_text", e.target.value)} />
      </Field>

      <Divider label="Floating badge (top-right of mockup)" />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Title">
          <input className={inputCls} value={data.floating_badge.title} onChange={(e) => setField("floating_badge", { ...data.floating_badge, title: e.target.value })} />
        </Field>
        <Field label="Subtitle">
          <input className={inputCls} value={data.floating_badge.sub} onChange={(e) => setField("floating_badge", { ...data.floating_badge, sub: e.target.value })} />
        </Field>
      </div>

      <Divider label="Floating stat (bottom-left of mockup)" />
      <div className="grid grid-cols-3 gap-4">
        <Field label="Label">
          <input className={inputCls} value={data.floating_stat.label} onChange={(e) => setField("floating_stat", { ...data.floating_stat, label: e.target.value })} />
        </Field>
        <Field label="Value">
          <input className={inputCls} value={data.floating_stat.value} onChange={(e) => setField("floating_stat", { ...data.floating_stat, value: e.target.value })} />
        </Field>
        <Field label="Sub-text">
          <input className={inputCls} value={data.floating_stat.sub} onChange={(e) => setField("floating_stat", { ...data.floating_stat, sub: e.target.value })} />
        </Field>
      </div>

      <Divider label="Trust signals" />
      {data.trust_signals.map((sig, i) => (
        <div key={i} className="grid grid-cols-4 gap-3">
          <Field label={`Icon ${i + 1}`}>
            <input className={inputCls} value={sig.icon} onChange={(e) => { const s = [...data.trust_signals]; s[i] = { ...s[i], icon: e.target.value }; setField("trust_signals", s); }} />
          </Field>
          <div className="col-span-3">
            <Field label={`Text ${i + 1}`}>
              <input className={inputCls} value={sig.text} onChange={(e) => { const s = [...data.trust_signals]; s[i] = { ...s[i], text: e.target.value }; setField("trust_signals", s); }} />
            </Field>
          </div>
        </div>
      ))}

      <FormFooter saving={saving} saved={saved} error={error} />
    </form>
  );
}

function HowItWorksEditor({ initial }: { initial: SiteContent["how_it_works"] }) {
  const [data, setData] = useState(initial);
  const { save, saving, saved, error } = useSave("how_it_works");

  function setStep(i: number, field: string, value: string) {
    const steps = [...data.steps];
    steps[i] = { ...steps[i], [field]: value };
    setData((d) => ({ ...d, steps }));
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); save(data); }} className="space-y-6">
      <SectionHeader title="How It Works" />
      <div className="grid grid-cols-3 gap-4">
        <Field label="Eyebrow">
          <input className={inputCls} value={data.eyebrow} onChange={(e) => setData((d) => ({ ...d, eyebrow: e.target.value }))} />
        </Field>
        <div className="col-span-2">
          <Field label="Title">
            <input className={inputCls} value={data.title} onChange={(e) => setData((d) => ({ ...d, title: e.target.value }))} />
          </Field>
        </div>
      </div>
      <Field label="Subtitle">
        <textarea className={textareaCls} value={data.subtitle} onChange={(e) => setData((d) => ({ ...d, subtitle: e.target.value }))} />
      </Field>

      {data.steps.map((step, i) => (
        <div key={step.number} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
          <p className="font-semibold text-slate-700 text-sm">Step {step.number}</p>
          <div className="grid grid-cols-4 gap-3">
            <Field label="Icon (emoji)">
              <input className={inputCls} value={step.icon} onChange={(e) => setStep(i, "icon", e.target.value)} />
            </Field>
            <div className="col-span-3">
              <Field label="Title">
                <input className={inputCls} value={step.title} onChange={(e) => setStep(i, "title", e.target.value)} />
              </Field>
            </div>
          </div>
          <Field label="Description">
            <textarea className={textareaCls} value={step.description} onChange={(e) => setStep(i, "description", e.target.value)} />
          </Field>
          <Field label="Detail badge">
            <input className={inputCls} value={step.detail} onChange={(e) => setStep(i, "detail", e.target.value)} />
          </Field>
        </div>
      ))}

      <FormFooter saving={saving} saved={saved} error={error} />
    </form>
  );
}

function BenefitsEditor({ initial }: { initial: SiteContent["benefits"] }) {
  const [data, setData] = useState(initial);
  const { save, saving, saved, error } = useSave("benefits");

  return (
    <form onSubmit={(e) => { e.preventDefault(); save(data); }} className="space-y-6">
      <SectionHeader title="Benefits" />
      <div className="grid grid-cols-3 gap-4">
        <Field label="Eyebrow">
          <input className={inputCls} value={data.eyebrow} onChange={(e) => setData((d) => ({ ...d, eyebrow: e.target.value }))} />
        </Field>
        <div className="col-span-2">
          <Field label="Title (use \n for line break)">
            <input className={inputCls} value={data.title} onChange={(e) => setData((d) => ({ ...d, title: e.target.value }))} />
          </Field>
        </div>
      </div>

      <Divider label="Stats cards" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.stats.map((stat, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Icon">
                <input className={inputCls} value={stat.icon} onChange={(e) => { const s = [...data.stats]; s[i] = { ...s[i], icon: e.target.value }; setData((d) => ({ ...d, stats: s })); }} />
              </Field>
              <Field label="Value">
                <input className={inputCls} value={stat.value} onChange={(e) => { const s = [...data.stats]; s[i] = { ...s[i], value: e.target.value }; setData((d) => ({ ...d, stats: s })); }} />
              </Field>
            </div>
            <Field label="Label">
              <input className={inputCls} value={stat.label} onChange={(e) => { const s = [...data.stats]; s[i] = { ...s[i], label: e.target.value }; setData((d) => ({ ...d, stats: s })); }} />
            </Field>
            <Field label="Description">
              <input className={inputCls} value={stat.description} onChange={(e) => { const s = [...data.stats]; s[i] = { ...s[i], description: e.target.value }; setData((d) => ({ ...d, stats: s })); }} />
            </Field>
          </div>
        ))}
      </div>

      <Divider label="Feature benefits" />
      <div className="space-y-4">
        {data.benefits.map((benefit, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="grid grid-cols-4 gap-3">
              <Field label="Icon">
                <input className={inputCls} value={benefit.icon} onChange={(e) => { const b = [...data.benefits]; b[i] = { ...b[i], icon: e.target.value }; setData((d) => ({ ...d, benefits: b })); }} />
              </Field>
              <div className="col-span-3">
                <Field label="Title">
                  <input className={inputCls} value={benefit.title} onChange={(e) => { const b = [...data.benefits]; b[i] = { ...b[i], title: e.target.value }; setData((d) => ({ ...d, benefits: b })); }} />
                </Field>
              </div>
            </div>
            <Field label="Description">
              <textarea className={textareaCls} value={benefit.description} onChange={(e) => { const b = [...data.benefits]; b[i] = { ...b[i], description: e.target.value }; setData((d) => ({ ...d, benefits: b })); }} />
            </Field>
          </div>
        ))}
      </div>

      <FormFooter saving={saving} saved={saved} error={error} />
    </form>
  );
}

function TestimonialsEditor({ initial }: { initial: SiteContent["testimonials"] }) {
  const [data, setData] = useState(initial);
  const { save, saving, saved, error } = useSave("testimonials");

  const COLORS = ["bg-blue-500", "bg-cyan-500", "bg-violet-500", "bg-emerald-500", "bg-orange-500", "bg-rose-500"];

  return (
    <form onSubmit={(e) => { e.preventDefault(); save(data); }} className="space-y-6">
      <SectionHeader title="Testimonials" />
      <div className="grid grid-cols-3 gap-4">
        <Field label="Eyebrow">
          <input className={inputCls} value={data.eyebrow} onChange={(e) => setData((d) => ({ ...d, eyebrow: e.target.value }))} />
        </Field>
        <div className="col-span-2">
          <Field label="Title">
            <input className={inputCls} value={data.title} onChange={(e) => setData((d) => ({ ...d, title: e.target.value }))} />
          </Field>
        </div>
      </div>
      <Field label="Subtitle">
        <input className={inputCls} value={data.subtitle} onChange={(e) => setData((d) => ({ ...d, subtitle: e.target.value }))} />
      </Field>

      <Divider label="Testimonial cards" />
      {data.items.map((t, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
          <p className="font-semibold text-slate-700 text-sm">Testimonial {i + 1}</p>
          <Field label="Quote">
            <textarea className={textareaCls} style={{ minHeight: 100 }} value={t.quote} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], quote: e.target.value }; setData((d) => ({ ...d, items })); }} />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Author name">
              <input className={inputCls} value={t.author} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], author: e.target.value }; setData((d) => ({ ...d, items })); }} />
            </Field>
            <Field label="Initials (avatar)">
              <input className={inputCls} maxLength={2} value={t.initials} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], initials: e.target.value }; setData((d) => ({ ...d, items })); }} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Title">
              <input className={inputCls} value={t.title} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], title: e.target.value }; setData((d) => ({ ...d, items })); }} />
            </Field>
            <Field label="Company">
              <input className={inputCls} value={t.company} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], company: e.target.value }; setData((d) => ({ ...d, items })); }} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Footer badge (e.g. '312 loans closed')">
              <input className={inputCls} value={t.loans} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], loans: e.target.value }; setData((d) => ({ ...d, items })); }} />
            </Field>
            <Field label="Avatar color">
              <select className={inputCls} value={t.color} onChange={(e) => { const items = [...data.items]; items[i] = { ...items[i], color: e.target.value }; setData((d) => ({ ...d, items })); }}>
                {COLORS.map((c) => <option key={c} value={c}>{c.replace("bg-", "").replace("-500", "")}</option>)}
              </select>
            </Field>
          </div>
        </div>
      ))}

      <Divider label="Social proof bar" />
      <div className="grid grid-cols-3 gap-4">
        {data.social_proof.map((sp, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <Field label="Value">
              <input className={inputCls} value={sp.value} onChange={(e) => { const s = [...data.social_proof]; s[i] = { ...s[i], value: e.target.value }; setData((d) => ({ ...d, social_proof: s })); }} />
            </Field>
            <Field label="Label">
              <input className={inputCls} value={sp.label} onChange={(e) => { const s = [...data.social_proof]; s[i] = { ...s[i], label: e.target.value }; setData((d) => ({ ...d, social_proof: s })); }} />
            </Field>
          </div>
        ))}
      </div>

      <FormFooter saving={saving} saved={saved} error={error} />
    </form>
  );
}

function FinalCTAEditor({ initial }: { initial: SiteContent["final_cta"] }) {
  const [data, setData] = useState(initial);
  const { save, saving, saved, error } = useSave("final_cta");

  return (
    <form onSubmit={(e) => { e.preventDefault(); save(data); }} className="space-y-6">
      <SectionHeader title="Final CTA" />
      <Field label="Badge text">
        <input className={inputCls} value={data.badge} onChange={(e) => setData((d) => ({ ...d, badge: e.target.value }))} />
      </Field>
      <Field label="Headline (use \n between line 1 and line 2 — line 2 appears in blue)">
        <input className={inputCls} value={data.headline} onChange={(e) => setData((d) => ({ ...d, headline: e.target.value }))} />
      </Field>
      <Field label="Body text">
        <textarea className={textareaCls} value={data.body} onChange={(e) => setData((d) => ({ ...d, body: e.target.value }))} />
      </Field>
      <FormFooter saving={saving} saved={saved} error={error} />
    </form>
  );
}

function ContactEditor({ initial }: { initial: SiteContent["contact"] }) {
  const [data, setData] = useState(initial);
  const { save, saving, saved, error } = useSave("contact");

  function setFaq(i: number, field: "q" | "a", value: string) {
    const faq = [...data.faq];
    faq[i] = { ...faq[i], [field]: value };
    setData((d) => ({ ...d, faq }));
  }

  function setBenefit(i: number, value: string) {
    const demo_benefits = [...data.demo_benefits];
    demo_benefits[i] = value;
    setData((d) => ({ ...d, demo_benefits }));
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); save(data); }} className="space-y-6">
      <SectionHeader title="Contact Page" />
      <div className="grid grid-cols-2 gap-4">
        <Field label="Email address">
          <input className={inputCls} type="email" value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} />
        </Field>
        <Field label="Email sub-text">
          <input className={inputCls} value={data.email_sub} onChange={(e) => setData((d) => ({ ...d, email_sub: e.target.value }))} />
        </Field>
      </div>

      <Divider label="Demo benefits list" />
      <div className="space-y-3">
        {data.demo_benefits.map((item, i) => (
          <Field key={i} label={`Item ${i + 1}`}>
            <input className={inputCls} value={item} onChange={(e) => setBenefit(i, e.target.value)} />
          </Field>
        ))}
      </div>

      <Divider label="FAQ" />
      <div className="space-y-5">
        {data.faq.map((faq, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
            <Field label={`Question ${i + 1}`}>
              <input className={inputCls} value={faq.q} onChange={(e) => setFaq(i, "q", e.target.value)} />
            </Field>
            <Field label="Answer">
              <textarea className={textareaCls} value={faq.a} onChange={(e) => setFaq(i, "a", e.target.value)} />
            </Field>
          </div>
        ))}
      </div>

      <FormFooter saving={saving} saved={saved} error={error} />
    </form>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="pb-4 border-b border-slate-200">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

function FormFooter({ saving, saved, error }: { saving: boolean; saved: boolean; error: string }) {
  return (
    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
      {error ? <p className="text-sm text-red-500">{error}</p> : <span />}
      <SaveButton saving={saving} saved={saved} />
    </div>
  );
}

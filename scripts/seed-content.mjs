import { createAdminClient } from "@insforge/sdk";

const insforgeAdmin = createAdminClient({
  baseUrl: "https://u7bdkk2f.us-east.insforge.app",
  apiKey: "ik_2bb64ed5169d2820482b5b8e6653546f",
});

const content = [
  {
    key: "hero",
    value: {
      badge: "Now in Beta — Early Access Available",
      headline: ["AI-Powered", "Mortgage Income", "Analysis"],
      subheadline:
        "Analyze borrower income, uncover qualifying opportunities, identify underwriting risks, and accelerate loan decisions in minutes instead of hours.",
      cta_text: "Request Beta Access",
      trust_signals: [
        { icon: "🔒", text: "High-level security" },
        { icon: "✓", text: "No credit card required" },
        { icon: "⚡", text: "Setup in minutes" },
      ],
      floating_badge: { title: "Beta Access Open", sub: "Early adopter program" },
      floating_stat: { label: "Avg. Analysis Time", value: "~4 min", sub: "vs. hours manually" },
    },
  },
  {
    key: "how_it_works",
    value: {
      eyebrow: "How It Works",
      title: "From document upload to loan decision in minutes",
      subtitle: "Five steps. No complex setup. No learning curve. Just faster, better loan analysis.",
      steps: [
        {
          number: "01",
          icon: "📁",
          title: "Upload Documents",
          description:
            "Drag and drop borrower documents — W-2s, tax returns, pay stubs, bank statements. Our AI accepts any format and extracts data automatically.",
          detail: "Supports PDF, JPEG, TIFF, and more",
        },
        {
          number: "02",
          icon: "🔍",
          title: "Identify Income Sources",
          description:
            "AI automatically classifies and calculates qualifying income across all source types — employment, self-employment, rental, investment, and more.",
          detail: "Handles 40+ income types",
        },
        {
          number: "03",
          icon: "✨",
          title: "Optimize Qualification",
          description:
            "Auxilium Logic scans for every legitimate income addback, averaging strategy, and program-specific opportunity to maximize the borrower's qualifying income.",
          detail: "Avg. $340/mo income recovered",
        },
        {
          number: "04",
          icon: "🤖",
          title: "Review AI Analysis",
          description:
            "Get a comprehensive report with full income calculations, risk flags, opportunity highlights, and underwriter-ready documentation — all in minutes.",
          detail: "Underwriter-ready in 4 minutes",
        },
        {
          number: "05",
          icon: "🚀",
          title: "Submit Better Loans",
          description:
            "Export clean, audit-ready loan packages. Submit with confidence knowing every number is verified, every risk is addressed, and every opportunity is captured.",
          detail: "91% first-submission approval rate",
        },
      ],
    },
  },
  {
    key: "benefits",
    value: {
      eyebrow: "Why Auxilium Logic",
      title: "The productivity platform\nmortgage brokers needed",
      stats: [
        { value: "~4 min", label: "Analysis time", description: "From document upload to full income report", icon: "⚡" },
        { value: "40+", label: "Income types", description: "W-2, SE, rental, investment, and more", icon: "📊" },
        { value: "$300+", label: "Avg. income recovered", description: "Additional qualifying income found per file", icon: "💰" },
        { value: "5", label: "Loan programs", description: "Conventional, FHA, VA, USDA, Non-QM", icon: "🏠" },
      ],
      benefits: [
        {
          icon: "🧠",
          title: "AI that thinks like an underwriter",
          description:
            "Trained on underwriting guidelines and real loan scenarios, Auxilium Logic catches what humans miss — and validates what humans second-guess.",
        },
        {
          icon: "🔗",
          title: "Built to fit your workflow",
          description:
            "Export to your LOS or share directly with underwriters. Designed to slot into how you already work, not replace it.",
        },
        {
          icon: "📜",
          title: "Audit-ready documentation",
          description:
            "Every analysis includes a clear paper trail showing how income was calculated, which guidelines were applied, and why each decision was made.",
        },
        {
          icon: "🏢",
          title: "Built for teams and solo brokers",
          description:
            "Whether you're an independent broker or running a team, the platform scales with you — role-based access and shared pipelines included.",
        },
        {
          icon: "🔒",
          title: "Secure by design",
          description:
            "Bank-level encryption at rest and in transit. Your borrower data is never used to train our models, and you control who sees what.",
        },
        {
          icon: "🔄",
          title: "Always current guidelines",
          description:
            "Fannie Mae, Freddie Mac, FHA, and VA guidelines are kept up to date automatically. You never work with outdated rules.",
        },
      ],
    },
  },
  {
    key: "testimonials",
    value: {
      eyebrow: "Testimonials",
      title: "Trusted by mortgage professionals",
      subtitle: "Join hundreds of brokers who are closing more loans with less effort.",
      items: [
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
      ],
      social_proof: [
        { value: "500+", label: "Active brokers" },
        { value: "47,000+", label: "Loans analyzed" },
        { value: "4.9/5", label: "Average rating" },
      ],
    },
  },
  {
    key: "final_cta",
    value: {
      badge: "Beta access is now open",
      headline: "Be among the first to\ntransform your pipeline.",
      body: "Auxilium Logic is in active beta. Join early-access brokers who are already using AI to analyze income faster, find more qualifying opportunities, and submit stronger loans.",
    },
  },
  {
    key: "contact",
    value: {
      email: "info@auxiliumlogic.com",
      email_sub: "We respond within 24 hours",
      demo_benefits: [
        "Live walkthrough with a real loan file",
        "Income analysis in under 5 minutes",
        "Custom scenario for your borrower type",
        "Integration options for your LOS",
        "Transparent pricing discussion",
      ],
      faq: [
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
          a: "We offer a few tier options based on loan volume, so whether you're a solo LO or a high-volume team, there's a plan that fits. We'll walk through the options during the demo.",
        },
      ],
    },
  },
];

const results = await Promise.all(
  content.map(({ key, value }) =>
    insforgeAdmin.database
      .from("site_content")
      .upsert([{ key, value }], { onConflict: "key" })
  )
);

const errors = results.filter((r) => r.error);
if (errors.length) {
  console.error("Seed errors:", errors.map((r) => r.error));
  process.exit(1);
}

console.log("Seeded", content.length, "content rows.");

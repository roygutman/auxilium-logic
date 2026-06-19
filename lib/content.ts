import { insforgeAdmin } from "./insforge";

export type HeroContent = {
  badge: string;
  headline: string[];
  subheadline: string;
  cta_text: string;
  trust_signals: { icon: string; text: string }[];
  floating_badge: { title: string; sub: string };
  floating_stat: { label: string; value: string; sub: string };
};

export type HowItWorksContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: { number: string; icon: string; title: string; description: string; detail: string }[];
};

export type BenefitsContent = {
  eyebrow: string;
  title: string;
  stats: { value: string; label: string; description: string; icon: string }[];
  benefits: { icon: string; title: string; description: string }[];
};

export type TestimonialsContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { quote: string; author: string; title: string; company: string; initials: string; color: string; loans: string }[];
  social_proof: { value: string; label: string }[];
};

export type FinalCTAContent = {
  badge: string;
  headline: string;
  body: string;
};

export type ContactContent = {
  faq: { q: string; a: string }[];
  demo_benefits: string[];
  email: string;
  email_sub: string;
};

export type SiteContent = {
  hero: HeroContent;
  how_it_works: HowItWorksContent;
  benefits: BenefitsContent;
  testimonials: TestimonialsContent;
  final_cta: FinalCTAContent;
  contact: ContactContent;
};

export async function getSiteContent(): Promise<SiteContent> {
  const { data, error } = await insforgeAdmin.database
    .from("site_content")
    .select("key, value");

  if (error) throw new Error(`Failed to load content: ${error.message}`);

  const map = Object.fromEntries((data ?? []).map((r: { key: string; value: unknown }) => [r.key, r.value]));

  return {
    hero: map.hero as HeroContent,
    how_it_works: map.how_it_works as HowItWorksContent,
    benefits: map.benefits as BenefitsContent,
    testimonials: map.testimonials as TestimonialsContent,
    final_cta: map.final_cta as FinalCTAContent,
    contact: map.contact as ContactContent,
  };
}

import { getSiteContent } from "@/lib/content";
import Hero from "./components/home/Hero";
import ProblemSection from "./components/home/ProblemSection";
import SolutionSection from "./components/home/SolutionSection";
import HowItWorks from "./components/home/HowItWorks";
import PlatformShowcase from "./components/home/PlatformShowcase";
import Benefits from "./components/home/Benefits";
import Testimonials from "./components/home/Testimonials";
import AboutPreview from "./components/home/AboutPreview";
import FinalCTA from "./components/home/FinalCTA";

export const revalidate = 60;

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <Hero content={content.hero} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks content={content.how_it_works} />
      <PlatformShowcase />
      <Benefits content={content.benefits} />
      <Testimonials content={content.testimonials} />
      <AboutPreview />
      <FinalCTA content={content.final_cta} />
    </>
  );
}

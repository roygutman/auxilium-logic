import Hero from "./components/home/Hero";
import ProblemSection from "./components/home/ProblemSection";
import SolutionSection from "./components/home/SolutionSection";
import HowItWorks from "./components/home/HowItWorks";
import PlatformShowcase from "./components/home/PlatformShowcase";
import Benefits from "./components/home/Benefits";
import AboutPreview from "./components/home/AboutPreview";
import FinalCTA from "./components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PlatformShowcase />
      <Benefits />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}

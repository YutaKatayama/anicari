import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { GreetingSection } from "@/components/sections/GreetingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="main">
        <HeroSection />
        <MissionSection />
        <ServiceSection />
        <FeaturesSection />
        <ResultsSection />
        <EventsSection />
        <CompanySection />
        <GreetingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

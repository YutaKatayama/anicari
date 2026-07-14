import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServiceSection } from "@/components/sections/ServiceSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CompanySection } from "@/components/sections/CompanySection";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { GreetingSection } from "@/components/sections/GreetingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { SEO, SEO_H1 } from "@/constants/seo";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">{SEO_H1}</h1>
      <main className="main overflow-x-hidden">
        <HeroSection />
        <MissionSection />
        <ServiceSection />
        <FeaturesSection />
        <ResultsSection />
        <EventsSection />
        <CompanySection />
        <MaterialsSection />
        <GreetingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import { FEATURES } from "@/constants/features";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTransition } from "@/components/ui/SectionTransition";

export function FeaturesSection() {
  const lastFeatureBg = FEATURES[FEATURES.length - 1].bgColor;

  return (
    <section id="features" className="features-section overflow-x-hidden bg-background">
      <ScrollReveal variant="fade-up">
        <div className="features-section-top px-5 pt-12 pb-6 text-brand sm:pt-15 sm:pb-7.5 md:pl-[12.5vw]">
          <h2 className="features-section-top__title section-title-en leading-none">
            FEATURES
          </h2>
          <p className="features-section-top__note mt-2 text-xs leading-6 font-bold tracking-[1.5px] sm:text-[13px] sm:tracking-[2px]">
            AniCariの特徴
          </p>
        </div>
      </ScrollReveal>

      <div className="features-list overflow-hidden rounded-tr-3xl sm:rounded-tr-[2rem]">
        {FEATURES.map((feature) => (
          <FeatureBlock key={feature.id} feature={feature} />
        ))}
      </div>

      <div className="leading-[0]" style={{ backgroundColor: lastFeatureBg }}>
        <SectionTransition to="section" className="-mb-px" />
      </div>
    </section>
  );
}

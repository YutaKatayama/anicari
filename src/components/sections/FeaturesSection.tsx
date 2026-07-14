import { FEATURES } from "@/constants/features";
import { FeatureBlock } from "@/components/sections/FeatureBlock";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeaturesSection() {
  return (
    <section id="features" className="features-section bg-background">
      <ScrollReveal variant="fade-up">
        <div className="features-section-top px-5 pt-15 pb-7.5 text-brand md:pl-[12.5vw]">
        <h2 className="features-section-top__title text-[58px] leading-[54px] font-bold tracking-[6.7px]">
          FEATURES
        </h2>
        <p className="features-section-top__note mt-2 text-[13px] leading-6 font-bold tracking-[2px]">
          AniCariの特徴
        </p>
        </div>
      </ScrollReveal>

      <div className="features-list overflow-hidden rounded-tr-[2rem]">
        {FEATURES.map((feature, index) => (
          <FeatureBlock key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

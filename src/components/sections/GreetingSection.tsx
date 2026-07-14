import Image from "next/image";
import { GREETING } from "@/constants/greeting";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GreetingSection() {
  return (
    <section
      id="greeting"
      className="bg-section px-5 py-14 sm:py-20 md:px-10 md:py-24"
      aria-labelledby="greeting-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            en={GREETING.titleEn}
            ja={GREETING.titleJa}
            primary="ja"
            className="mb-8 sm:mb-10 md:mb-14"
          />
        </ScrollReveal>

        <div className="mx-auto flex max-w-[900px] flex-col items-stretch gap-8 sm:gap-10 md:max-w-[1140px] md:flex-row md:items-start md:gap-12 lg:gap-16">
          <ScrollReveal
            variant="fade-up"
            className="w-full shrink-0 md:w-[42%] md:max-w-[480px] lg:max-w-[520px]"
          >
            <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-none">
              <div className="overflow-hidden rounded-tr-[0.8rem] bg-surface shadow-[0_4px_24px_rgba(168,148,148,0.1)] md:bg-transparent md:shadow-none">
                <Image
                  src={GREETING.image}
                  alt={GREETING.imageAlt}
                  width={520}
                  height={693}
                  className="mx-auto h-auto w-full object-contain md:rounded-tr-[0.8rem] xl:rounded-[0.8rem]"
                />
              </div>
              <p className="mt-4 text-center text-xs font-bold tracking-[0.2em] text-brand sm:text-sm md:mt-5">
                {GREETING.role}
              </p>
              <p className="mt-1 text-center text-sm tracking-[0.15em] text-foreground sm:text-base">
                {GREETING.name}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={120} className="w-full flex-1 md:min-w-0">
            <blockquote className="border-t border-brand/15 pt-6 md:border-t-0 md:border-l-2 md:border-brand/30 md:pt-0 md:pl-10">
              <div className="space-y-5 text-sm leading-7 tracking-[1.5px] text-foreground sm:space-y-6 sm:text-[15px] sm:leading-8 sm:tracking-[1.8px]">
                {GREETING.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                <p className="text-right text-xs tracking-[0.1em] text-foreground/70 sm:text-sm">
                  {GREETING.dateNote}
                </p>
              </div>
            </blockquote>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

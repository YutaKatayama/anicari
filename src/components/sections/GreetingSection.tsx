import Image from "next/image";
import { GREETING } from "@/constants/greeting";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function GreetingSection() {
  return (
    <section
      id="greeting"
      className="bg-section px-5 py-20 md:px-10 md:py-24"
      aria-labelledby="greeting-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-sm tracking-[0.2em] text-brand uppercase">
              {GREETING.titleEn}
            </p>
            <h2
              id="greeting-title"
              className="mt-3 text-[42px] leading-tight font-bold tracking-[4px] text-brand md:text-[58px]"
            >
              {GREETING.titleJa}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-10 md:flex-row md:items-start md:gap-14">
          <ScrollReveal variant="fade-right" className="shrink-0">
            <Image
              src={GREETING.image}
              alt={GREETING.imageAlt}
              width={360}
              height={480}
              className="h-auto w-[280px] rounded-tr-[0.8rem] object-contain md:w-[320px] xl:rounded-[0.8rem]"
            />
            <p className="mt-4 text-center text-sm font-bold tracking-[0.2em] text-brand">
              {GREETING.role}
            </p>
            <p className="mt-1 text-center text-base tracking-[0.15em] text-foreground">
              {GREETING.name}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-left" delay={120} className="flex-1">
            <blockquote className="border-l-0 md:border-l-2 md:border-brand/30 md:pl-10">
              <div className="space-y-6 text-[15px] leading-8 tracking-[1.8px] text-foreground">
                {GREETING.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
                <p className="text-right text-sm tracking-[0.1em] text-foreground/70">
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

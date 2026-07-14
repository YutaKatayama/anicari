import { MATERIALS } from "@/constants/materials";
import { BlankButton } from "@/components/ui/BlankButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MaterialsSection() {
  return (
    <section
      id="materials"
      className="bg-background px-5 py-14 sm:py-20 md:px-10 md:py-24"
      aria-labelledby="materials-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            en={MATERIALS.titleEn}
            ja={MATERIALS.titleJa}
            description={MATERIALS.description}
            primary="ja"
            className="mb-8 sm:mb-10 md:mb-14"
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="overflow-hidden rounded-2xl border border-brand/15 bg-surface shadow-[0_8px_32px_rgba(168,148,148,0.12)]">
            <div className="border-b border-brand/10 px-4 py-3 sm:px-6 sm:py-4 md:px-8">
              <p className="text-[10px] font-bold tracking-[0.2em] text-brand uppercase sm:text-xs">
                Canva Document
              </p>
              <p className="mt-1 text-sm font-bold tracking-[0.08em] text-foreground sm:text-base sm:tracking-[0.1em]">
                {MATERIALS.documentTitle}
              </p>
            </div>

            <div className="relative aspect-[3/4] w-full bg-section sm:aspect-[4/3] md:aspect-[16/9]">
              <iframe
                src={MATERIALS.canvaEmbedUrl}
                title={MATERIALS.documentTitle}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                allow="fullscreen"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={180}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center">
            <BlankButton
              label="資料を開く"
              href={MATERIALS.canvaUrl}
              external
              className="w-full max-w-[280px]"
            />
            <p className="max-w-[240px] text-center text-[10px] tracking-[0.12em] text-foreground/70 sm:max-w-none sm:text-xs sm:tracking-[0.15em]">
              別タブで Canva の資料ページが開きます
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

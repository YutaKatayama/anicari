import { MATERIALS } from "@/constants/materials";
import { BlankButton } from "@/components/ui/BlankButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MaterialsSection() {
  return (
    <section
      id="materials"
      className="bg-background px-5 py-20 md:px-10 md:py-24"
      aria-labelledby="materials-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-sm tracking-[0.2em] text-brand uppercase">
              {MATERIALS.titleEn}
            </p>
            <h2
              id="materials-title"
              className="mt-3 text-[42px] leading-tight font-bold tracking-[4px] text-brand md:text-[58px]"
            >
              {MATERIALS.titleJa}
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 tracking-[1.8px] text-foreground">
              {MATERIALS.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="overflow-hidden rounded-2xl border border-brand/15 bg-surface shadow-[0_8px_32px_rgba(168,148,148,0.12)]">
            <div className="border-b border-brand/10 px-6 py-4 md:px-8">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                Canva Document
              </p>
              <p className="mt-1 text-base font-bold tracking-[0.1em] text-foreground">
                {MATERIALS.documentTitle}
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full bg-section md:aspect-[16/9]">
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
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <BlankButton
              label="資料を開く"
              href={MATERIALS.canvaUrl}
              external
            />
            <p className="text-center text-xs tracking-[0.15em] text-foreground/70">
              別タブで Canva の資料ページが開きます
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { COMPANY } from "@/constants/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function LineBreakText({
  text,
  mobileOnly = false,
}: {
  text: string;
  mobileOnly?: boolean;
}) {
  const lines = text.split("\n");

  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index < lines.length - 1 &&
            (mobileOnly ? (
              <br className="md:hidden" />
            ) : (
              <br />
            ))}
        </Fragment>
      ))}
    </>
  );
}

export function MissionSection() {
  return (
    <section
      id="re-branding"
      className="relative"
      aria-labelledby="mission-title"
    >
      <div className="relative z-20 flex justify-end px-0 md:px-0">
        <ScrollReveal variant="fade-up" className="w-full md:w-auto">
          <div
            id="about"
            className="branding-mission -mt-20 w-[calc(100vw-2.5rem)] rounded-tl-[0.6rem] rounded-bl-[0.6rem] bg-surface px-[6%] py-[7%] text-brand shadow-[0_8px_32px_rgba(168,148,148,0.18)] md:-mt-24 md:w-[60vw] md:px-[5%] md:py-[2.4%]"
          >
            <p className="branding-mission__text mb-0 text-sm leading-[2.1] tracking-[1.7px]">
              <span className="font-sans">MISSION / </span>
              私たちの存在理由
            </p>
            <h2
              id="mission-title"
              className="branding-mission__title mt-0 mb-0 text-[28px] leading-[1.4] font-bold tracking-[4.2px]"
            >
              <LineBreakText text={COMPANY.vision} mobileOnly />
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-0 bg-section pb-15 pt-8 md:pt-12">
        <div className="flex flex-col items-center gap-8 px-0 md:flex-row md:items-end md:justify-center md:gap-12">
          <ScrollReveal variant="fade-up" className="w-full md:max-w-2xl">
            <div className="branding-strategy w-full px-5 text-brand md:px-5">
              <p className="branding-strategy__text mb-0 text-sm leading-[2.1] tracking-[1.7px]">
                <span className="font-sans">STRATEGY / </span>
                私たちの事業
              </p>
              <p className="branding-strategy__title mt-0 mb-4 text-[28px] leading-[1.4] font-bold tracking-[4.2px]">
                <LineBreakText text={COMPANY.strategyTitle} mobileOnly />
              </p>
              <p className="branding-strategy__note mb-0 text-[15px] leading-[1.6] tracking-[1.8px] text-foreground">
                {COMPANY.missionLead}
              </p>
              <p className="branding-strategy__note mt-3 mb-0 text-[15px] leading-[1.6] tracking-[1.8px] text-foreground">
                {COMPANY.mission}
              </p>
              <p className="branding-strategy__note mt-3 mb-4 text-[15px] leading-[1.6] tracking-[1.8px] text-foreground">
                {COMPANY.strategyNote}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <Link
              href="#service"
              className="btn--self relative mx-10 mb-4 flex h-[50px] w-[280px] shrink-0 items-center justify-center rounded-[25px] bg-button no-underline transition-opacity hover:opacity-90 md:mx-0"
            >
              <span className="self__text text-base leading-[26px] font-bold tracking-[1.9px] text-on-brand">
                VIEW SERVICE
              </span>
              <span className="absolute top-1/2 right-5 -translate-y-1/2">
                <Image
                  src="/icons/arrow-light.svg"
                  alt=""
                  width={20}
                  height={14}
                  aria-hidden
                  className="max-h-5 max-w-5 object-contain"
                />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

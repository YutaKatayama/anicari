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
      className="relative overflow-x-hidden bg-surface"
      aria-labelledby="mission-title"
    >
      <div className="relative z-20 flex justify-end px-5 md:px-0">
        <ScrollReveal variant="fade-up" className="w-full md:w-auto">
          <div
            id="about"
            className="branding-mission -mt-14 w-full max-w-full rounded-tl-[0.6rem] rounded-bl-[0.6rem] bg-surface px-5 py-6 text-brand shadow-[0_10px_32px_-12px_rgba(168,148,148,0.18)] sm:-mt-16 sm:px-[6%] sm:py-[7%] md:-mt-24 md:w-[60vw] md:max-w-[720px] md:px-[5%] md:py-[2.4%]"
          >
            <p className="branding-mission__text mb-0 text-xs leading-[2.1] tracking-[1.4px] sm:text-sm sm:tracking-[1.7px]">
              <span className="font-sans">MISSION / </span>
              私たちの存在理由
            </p>
            <h2
              id="mission-title"
              className="branding-mission__title mission-title mt-2 mb-0 sm:mt-0"
            >
              <LineBreakText text={COMPANY.vision} mobileOnly />
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-0 pb-12 sm:pb-15">
        <div className="flex flex-col items-center gap-6 px-0 sm:gap-8 md:flex-row md:items-end md:justify-center md:gap-12">
          <ScrollReveal variant="fade-up" className="w-full md:max-w-2xl">
            <div className="branding-strategy w-full px-5 text-brand md:px-5">
              <p className="branding-strategy__text mb-0 text-xs leading-[2.1] tracking-[1.4px] sm:text-sm sm:tracking-[1.7px]">
                <span className="font-sans">STRATEGY / </span>
                私たちの事業
              </p>
              <p className="branding-strategy__title mission-title mt-2 mb-4 sm:mt-0">
                <LineBreakText text={COMPANY.strategyTitle} mobileOnly />
              </p>
              <p className="branding-strategy__note mb-0 text-sm leading-[1.7] tracking-[1.5px] text-foreground sm:text-[15px] sm:leading-[1.6] sm:tracking-[1.8px]">
                {COMPANY.missionLead}
              </p>
              <p className="branding-strategy__note mt-3 mb-0 text-sm leading-[1.7] tracking-[1.5px] text-foreground sm:text-[15px] sm:leading-[1.6] sm:tracking-[1.8px]">
                {COMPANY.mission}
              </p>
              <p className="branding-strategy__note mt-3 mb-4 text-sm leading-[1.7] tracking-[1.5px] text-foreground sm:text-[15px] sm:leading-[1.6] sm:tracking-[1.8px]">
                {COMPANY.strategyNote}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <Link
              href="#service"
              className="btn--self relative mx-auto mb-4 flex h-[50px] w-full max-w-[280px] shrink-0 items-center justify-center rounded-[25px] bg-button no-underline transition-opacity hover:opacity-90 sm:mx-10 md:mx-0"
            >
              <span className="self__text text-sm leading-[26px] font-bold tracking-[1.6px] text-on-brand sm:text-base sm:tracking-[1.9px]">
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

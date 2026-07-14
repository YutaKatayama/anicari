import { SERVICES, SERVICE_INTRO } from "@/constants/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceSection() {
  return (
    <section id="service" className="relative overflow-x-hidden bg-background pb-10">
      <div className="heading-section-bg overflow-hidden bg-brand pt-6 pb-12 sm:pt-8 sm:pb-16 md:pb-20">
        <div className="heading-section-bg__text-slide relative overflow-hidden text-[clamp(2.75rem,14vw,6.25rem)] leading-[0.91] font-bold tracking-[clamp(4px,1.5vw,12px)] text-on-brand/60 before:content-['\00a0']">
          <div className="heading-section-bg__text-slide-01 absolute top-0 left-0 inline-block min-w-full animate-marquee whitespace-nowrap">
            ABOUT ANICARI&nbsp;
          </div>
          <div className="heading-section-bg__text-slide-02 absolute top-0 left-0 inline-block min-w-full animate-marquee whitespace-nowrap opacity-0 [animation-delay:10s]">
            ABOUT ANICARI&nbsp;
          </div>
        </div>
      </div>

      <ScrollReveal variant="fade-up">
        <div className="heading-section relative -mt-8 px-5 text-sm leading-6 tracking-[1.3px] text-foreground sm:-mt-12.5 sm:text-[15px] sm:tracking-[1.5px]">
          <p className="mb-4 hidden text-center md:block">
            {SERVICE_INTRO.desktop.split("\n").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="mb-4 text-left md:hidden">{SERVICE_INTRO.mobile}</p>
          <p className="mt-4 text-left md:mx-auto md:max-w-2xl md:text-center">
            {SERVICE_INTRO.note}
          </p>
        </div>
      </ScrollReveal>

      <div className="heading__box relative mt-8 sm:mt-10" id="inService">
        <ScrollReveal variant="fade-up">
          <div className="heading__box-title section-title-en text-center">
            SERVICE
          </div>
          <div className="heading__box-subtitle mt-1.5 mb-6 text-center text-xs leading-4 font-bold tracking-[1.44px] text-brand sm:mb-7.5">
            サービス紹介
          </div>
        </ScrollReveal>

        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

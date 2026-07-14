import { SERVICES, SERVICE_INTRO } from "@/constants/services";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceSection() {
  return (
    <section id="service" className="relative bg-background pb-10">
      <div className="heading-section-bg overflow-hidden bg-brand pt-8 pb-20">
        <div className="heading-section-bg__text-slide relative overflow-hidden text-[100px] leading-[91px] font-bold tracking-[12px] text-on-brand/60 before:content-['\00a0']">
          <div className="heading-section-bg__text-slide-01 absolute top-0 left-0 inline-block min-w-full animate-marquee whitespace-nowrap">
            ABOUT ANICARI&nbsp;
          </div>
          <div className="heading-section-bg__text-slide-02 absolute top-0 left-0 inline-block min-w-full animate-marquee whitespace-nowrap opacity-0 [animation-delay:10s]">
            ABOUT ANICARI&nbsp;
          </div>
        </div>
      </div>

      <ScrollReveal variant="fade-up">
        <div className="heading-section relative -mt-12.5 px-5 text-[15px] leading-6 tracking-[1.5px] text-foreground">
        <p className="mb-4 hidden text-center md:block">
          {SERVICE_INTRO.desktop.split("\n").map((line, index, lines) => (
            <span key={line}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="mb-4 md:hidden">{SERVICE_INTRO.mobile}</p>
        <p className="mt-4 text-center md:mx-auto md:max-w-2xl">
          {SERVICE_INTRO.note}
        </p>
        </div>
      </ScrollReveal>

      <div className="heading__box relative mt-10" id="inService">
        <ScrollReveal variant="fade-up">
          <div className="heading__box-title text-center text-[58px] leading-[48px] font-bold tracking-[7px] text-brand">
            SERVICE
          </div>
          <div className="heading__box-subtitle mt-1.5 mb-7.5 text-center text-xs leading-4 font-bold tracking-[1.44px] text-brand">
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

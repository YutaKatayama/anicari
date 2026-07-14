import Image from "next/image";
import { Fragment } from "react";
import type { ServiceItem } from "@/constants/services";
import { BlankButton } from "@/components/ui/BlankButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function ServiceDescription({ service }: { service: ServiceItem }) {
  return <p>{service.description}</p>;
}

function ServiceTitle({ titleEn }: { titleEn: string }) {
  return (
    <>
      {titleEn.split("\n").map((line, index, lines) => (
        <Fragment key={line}>
          {line}
          {index < lines.length - 1 && (
            <>
              <br className="md:hidden" />
              <br className="hidden md:block" />
            </>
          )}
        </Fragment>
      ))}
    </>
  );
}

function ServiceBadge() {
  return (
    <div className="fixed-item--rotate relative hidden h-[280px] w-[280px] md:block">
      <div className="absolute top-0 right-0 flex h-[220px] w-[220px] scale-[0.7] items-center justify-center rounded-full border-2 border-brand/30 bg-surface/80">
        <span className="text-center text-xs font-bold tracking-[0.3em] text-brand uppercase">
          Career
          <br />
          Matching
        </span>
      </div>
      <div className="animate-rotate-slow absolute top-0 right-0 h-[220px] w-[220px] rounded-full border border-dashed border-brand/40" />
    </div>
  );
}

function ServiceCardLeft({ service }: { service: ServiceItem }) {
  return (
    <div className="heading__box-foods relative flex flex-col items-end overflow-hidden pb-15 md:mx-auto md:max-w-[1280px] md:flex-row md:items-end">
      <ScrollReveal variant="fade-right" className="heading__box-foods__image w-full shrink-0 md:w-auto">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={680}
          height={480}
          className="h-auto w-full rounded-tr-[0.8rem] object-contain md:max-w-[680px] xl:rounded-[0.8rem]"
        />
      </ScrollReveal>

      <ScrollReveal variant="fade-left" delay={100} className="contain-item -ml-14 max-w-[500px] bg-surface pt-14 pl-14 md:rounded-tl-[0.8rem]">
        <div className="heading__box-foods-title mb-2.5 font-bold text-brand">
          <p className="heading__box-foods-title-01 relative z-[1] mb-0 text-[45px] leading-[42px] tracking-[5.4px]">
            <ServiceTitle titleEn={service.titleEn} />
          </p>
          <p className="heading__box-foods-title-02 relative z-[1] mt-[3.5px] mb-0 text-xl leading-[30px] tracking-[2.4px]">
            {service.subtitle.split("\n").map((line, i, arr) => (
              <Fragment key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        </div>

        <div className="heading__box-foods-content relative z-[1] text-[15px] leading-6 tracking-[1.8px] text-foreground">
          <ServiceDescription service={service} />
          <div className="hidden md:block">
            <BlankButton
              label={service.buttonLabel}
              href={service.buttonHref}
              external={service.external}
            />
          </div>
        </div>
      </ScrollReveal>

      <div className="fixed-item -mt-[10vh] md:absolute md:top-0 md:right-[max(0px,calc((100vw-1280px)/2))] md:mt-0">
        <ServiceBadge />
      </div>

      <div className="mt-7.5 w-full px-5 md:hidden">
        <BlankButton
          label={service.buttonLabel}
          href={service.buttonHref}
          external={service.external}
          className="mx-auto"
        />
      </div>
    </div>
  );
}

function ServiceCardRight({ service }: { service: ServiceItem }) {
  return (
    <div className="heading__box-media">
      <div className="container-item mx-auto flex max-w-[1280px] flex-col items-end md:flex-row md:items-end">
        <ScrollReveal
          variant="fade-right"
          delay={100}
          className="heading__box-media-content relative -mr-10 w-full max-w-[500px] shrink-0 rounded-tr-2xl bg-surface pt-10 pr-10 pl-5 md:mr-0 md:w-auto"
        >
          <div className="heading__box-media-content-title text-[45px] leading-[42px] font-bold tracking-[5.4px] text-brand">
            <ServiceTitle titleEn={service.titleEn} />
          </div>
          <div className="heading__box-media-content-subtitle mt-[3.5px] text-xl leading-[30px] font-bold tracking-[2.4px] text-brand">
            {service.subtitle.split("\n").map((line, i, arr) => (
              <Fragment key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </div>
          <div className="heading__box-media-content-detail mt-2.5 mb-8 text-[15px] leading-6 tracking-[1.8px] text-foreground">
            {service.description}
          </div>
          <div className="hidden md:block">
            <BlankButton
              label={service.buttonLabel}
              href={service.buttonHref}
              external={service.external}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="fade-left"
          className="heading__box-media__image w-full shrink-0 md:w-auto"
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            width={680}
            height={480}
            className="h-auto w-full rounded-tl-[0.8rem] object-contain md:max-w-[680px] xl:rounded-[0.8rem]"
          />
        </ScrollReveal>
      </div>

      <div className="fixed-item mt-7.5 mb-15 flex justify-center overflow-hidden px-5">
        <div className="max-w-[620px] rounded-2xl border border-brand/20 bg-surface/70 px-8 py-4 text-center text-sm tracking-[0.2em] text-brand uppercase">
          Intro → Workshop → Interview → Networking
        </div>
      </div>

      <div className="px-5 pb-15 md:hidden">
        <BlankButton
          label={service.buttonLabel}
          href={service.buttonHref}
          external={service.external}
          className="mx-auto"
        />
      </div>
    </div>
  );
}

function ServiceCardBottom({ service }: { service: ServiceItem }) {
  return (
    <div className="heading__box-omusubi mx-auto flex max-w-[1280px] flex-col overflow-x-hidden md:flex-row md:items-end">
      <ScrollReveal
        variant="fade-right"
        className="heading__box-omusubi__image w-full shrink-0 md:w-auto"
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={680}
          height={480}
          className="h-auto w-full rounded-tr-[0.8rem] object-contain md:max-w-[680px] xl:rounded-[0.8rem]"
        />
      </ScrollReveal>

      <div className="container__box w-full min-w-0 flex-1">
        <ScrollReveal variant="fade-left" delay={100}>
          <div className="heading__box-omusubi-content relative max-w-[500px] md:-ml-10 md:rounded-tl-2xl md:bg-surface md:pt-10 md:pl-10">
            <div className="heading__box-omusubi-content__title -mt-7.5 w-[83.2vw] rounded-tr-2xl bg-surface pt-6 pl-5 text-[45px] leading-[42px] font-bold tracking-[5.4px] text-brand md:mt-0 md:w-auto md:rounded-none md:bg-transparent md:p-0">
              <ServiceTitle titleEn={service.titleEn} />
            </div>
            <div className="heading__box-omusubi-content__subtitle mt-[3.5px] pl-5 text-xl leading-[30px] font-bold tracking-[2.4px] text-brand md:pl-0">
              {service.subtitle.split("\n").map((line, i, arr) => (
                <Fragment key={line}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
            <div className="heading__box-omusubi-content__detail mt-2.5 mb-8 px-5 text-[15px] leading-6 tracking-[1.8px] text-foreground md:px-0">
              {service.description}
            </div>
            <div className="hidden px-5 md:block md:px-0">
              <BlankButton
                label={service.buttonLabel}
                href={service.buttonHref}
                external={service.external}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="heading__box-omusubi__slide relative mt-8 overflow-hidden py-4">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0">
                {["TACOPA", "NETWORK", "MATCHING", "CAREER", "WORKSHOP"].map(
                  (tag) => (
                    <span
                      key={`${group}-${tag}`}
                      className="mx-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-brand/30 text-[10px] font-bold tracking-wider text-brand"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 px-5 pb-15 md:hidden">
          <BlankButton
            label={service.buttonLabel}
            href={service.buttonHref}
            external={service.external}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  if (service.layout === "right") return <ServiceCardRight service={service} />;
  if (service.layout === "bottom") return <ServiceCardBottom service={service} />;
  return <ServiceCardLeft service={service} />;
}

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
    <div className="heading__box-foods relative flex flex-col overflow-hidden pb-10 sm:pb-15 md:mx-auto md:max-w-[1280px] md:flex-row md:items-end">
      <ScrollReveal
        variant="fade-right"
        className="heading__box-foods__image w-full shrink-0 px-5 md:w-auto md:px-0"
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={680}
          height={480}
          className="h-auto w-full rounded-tr-[0.8rem] object-contain md:max-w-[680px] xl:rounded-[0.8rem]"
        />
      </ScrollReveal>

      <ScrollReveal
        variant="fade-left"
        delay={100}
        className="contain-item z-10 -mt-6 w-full max-w-none bg-surface px-5 pt-8 sm:-mt-8 sm:px-8 sm:pt-10 md:-ml-14 md:max-w-[500px] md:rounded-tl-[0.8rem] md:pt-14 md:pl-14"
      >
        <div className="heading__box-foods-title mb-2.5 font-bold text-brand">
          <p className="heading__box-foods-title-01 card-title relative z-[1] mb-0">
            <ServiceTitle titleEn={service.titleEn} />
          </p>
          <p className="heading__box-foods-title-02 card-subtitle relative z-[1] mt-2 mb-0 text-brand sm:mt-[3.5px]">
            {service.subtitle.split("\n").map((line, i, arr) => (
              <Fragment key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </p>
        </div>

        <div className="heading__box-foods-content relative z-[1] text-sm leading-6 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
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

      <div className="fixed-item hidden md:absolute md:top-0 md:right-[max(0px,calc((100vw-1280px)/2))] md:block md:mt-0">
        <ServiceBadge />
      </div>

      <div className="mt-6 w-full px-5 md:hidden">
        <BlankButton
          label={service.buttonLabel}
          href={service.buttonHref}
          external={service.external}
          className="mx-auto w-full max-w-[280px]"
        />
      </div>
    </div>
  );
}

function ServiceCardRight({ service }: { service: ServiceItem }) {
  return (
    <div className="heading__box-media overflow-x-hidden">
      <div className="container-item mx-auto flex max-w-[1280px] flex-col md:flex-row md:items-end">
        <ScrollReveal
          variant="fade-right"
          delay={100}
          className="heading__box-media-content relative order-2 w-full max-w-none shrink-0 rounded-tr-2xl bg-surface px-5 pt-8 pb-2 sm:px-8 sm:pt-10 md:order-1 md:-mr-10 md:max-w-[500px] md:pr-10 md:pl-5"
        >
          <div className="heading__box-media-content-title card-title text-brand">
            <ServiceTitle titleEn={service.titleEn} />
          </div>
          <div className="heading__box-media-content-subtitle card-subtitle mt-2 text-brand sm:mt-[3.5px]">
            {service.subtitle.split("\n").map((line, i, arr) => (
              <Fragment key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </Fragment>
            ))}
          </div>
          <div className="heading__box-media-content-detail mt-2.5 mb-6 text-sm leading-6 tracking-[1.5px] text-foreground sm:mb-8 sm:text-[15px] sm:tracking-[1.8px]">
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
          className="heading__box-media__image order-1 w-full shrink-0 px-5 md:order-2 md:w-auto md:px-0"
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

      <div className="fixed-item mt-6 mb-10 flex justify-center overflow-hidden px-5 sm:mt-7.5 sm:mb-15">
        <div className="w-full max-w-[620px] rounded-2xl border border-brand/20 bg-surface/70 px-4 py-3 text-center text-[10px] tracking-[0.12em] text-brand uppercase sm:px-8 sm:py-4 sm:text-sm sm:tracking-[0.2em]">
          Intro → Workshop → Interview → Networking
        </div>
      </div>

      <div className="px-5 pb-10 md:hidden">
        <BlankButton
          label={service.buttonLabel}
          href={service.buttonHref}
          external={service.external}
          className="mx-auto w-full max-w-[280px]"
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
        className="heading__box-omusubi__image w-full shrink-0 px-5 md:w-auto md:px-0"
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
          <div className="heading__box-omusubi-content relative max-w-none md:-ml-10 md:max-w-[500px] md:rounded-tl-2xl md:bg-surface md:pt-10 md:pl-10">
            <div className="heading__box-omusubi-content__title -mt-6 mx-5 rounded-tr-2xl bg-surface px-4 pt-5 text-brand sm:-mt-7.5 sm:px-5 sm:pt-6 md:mx-0 md:mt-0 md:w-auto md:rounded-none md:bg-transparent md:p-0">
              <p className="card-title">
                <ServiceTitle titleEn={service.titleEn} />
              </p>
            </div>
            <div className="heading__box-omusubi-content__subtitle card-subtitle mt-2 px-5 text-brand sm:mt-[3.5px] md:px-0">
              {service.subtitle.split("\n").map((line, i, arr) => (
                <Fragment key={line}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
            <div className="heading__box-omusubi-content__detail mt-2.5 mb-6 px-5 text-sm leading-6 tracking-[1.5px] text-foreground sm:mb-8 sm:text-[15px] sm:tracking-[1.8px] md:px-0">
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

        <div className="heading__box-omusubi__slide relative mt-6 overflow-hidden py-4 sm:mt-8">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0">
                {["TACOPA", "NETWORK", "MATCHING", "CAREER", "WORKSHOP"].map(
                  (tag) => (
                    <span
                      key={`${group}-${tag}`}
                      className="mx-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 text-[9px] font-bold tracking-wider text-brand sm:mx-4 sm:h-16 sm:w-16 sm:text-[10px]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 px-5 pb-10 md:hidden">
          <BlankButton
            label={service.buttonLabel}
            href={service.buttonHref}
            external={service.external}
            className="mx-auto w-full max-w-[280px]"
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

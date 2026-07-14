"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { COMPANY, HERO_SLIDES } from "@/constants/company";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const SLIDE_INTERVAL_MS = 8000;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="main-header relative z-0 w-full overflow-x-hidden">
      <div id="header-logo" className="relative z-[1] bg-brand">
        <div className="logo__box mx-auto w-full max-w-full px-5 pt-10 pb-2 sm:pt-12 sm:pb-3 md:mx-0 md:w-fit md:pl-10 md:pt-14 md:pb-4">
          <div className="logo__box-image animate-fade-in">
            <Image
              src="/logo-sp.svg"
              alt={COMPANY.name}
              width={320}
              height={48}
              priority
              className="mx-auto h-auto w-full max-w-[min(100%,320px)] object-contain md:hidden"
            />
            <Image
              src="/logo-pc.svg"
              alt={COMPANY.name}
              width={600}
              height={72}
              priority
              className="hidden h-auto w-full max-w-[min(93vw,600px)] object-contain md:block"
            />
          </div>

          <div className="logo__box-content relative animate-fade-in text-right">
            <span className="logo__box-content--small absolute -top-1 right-0 text-[0.72rem] leading-[3.2] font-bold tracking-[1.8px] text-on-brand sm:text-[0.82rem] sm:tracking-[2.2px] md:text-[1.32rem] md:leading-[2.9] md:tracking-[3px]">
              {COMPANY.taglineEn}
            </span>
          </div>
        </div>
      </div>

      <div id="header-carousel" className="relative bg-brand pb-0">
        <div className="flex min-w-0">
          <div className="indicators__box relative -ml-px flex w-8 shrink-0 flex-col sm:w-10 md:w-[6.25rem]">
            <ol className="carousel-indicators relative m-0 flex list-none flex-col items-center p-0">
              {HERO_SLIDES.map((_, index) => (
                <li key={index} className="mt-2 sm:mt-2.5">
                  <button
                    type="button"
                    aria-label={`スライド ${index + 1} へ移動`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    onClick={() => goToSlide(index)}
                    className={`block h-1.5 w-1.5 rounded-full border border-on-brand transition-colors ${
                      activeIndex === index
                        ? "bg-on-brand"
                        : "bg-transparent"
                    }`}
                  />
                </li>
              ))}
            </ol>

            <div className="mt-auto hidden pb-6 sm:block md:pb-8">
              <ScrollIndicator />
            </div>
          </div>

          <div className="carousel-inner relative min-w-0 flex-1 overflow-hidden rounded-tr-[0.6rem] bg-surface sm:rounded-tr-[0.8rem]">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={`${slide.src}-${activeIndex === index ? "active" : "idle"}`}
                className={`carousel-item absolute inset-0 transition-[opacity,filter] duration-1000 ease-linear ${
                  activeIndex === index
                    ? "animate-hero-zoom z-10 opacity-100 brightness-100"
                    : "z-0 opacity-0 brightness-150"
                }`}
                aria-hidden={activeIndex !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) calc(100vw - 2.5rem), calc(100vw - 6.25rem)"
                  className="rounded-tr-[0.6rem] object-cover object-center sm:rounded-tr-[0.8rem]"
                />
              </div>
            ))}

            <div className="pointer-events-none relative h-[52svh] min-h-[220px] w-full sm:h-[58svh] sm:min-h-[280px] md:h-[calc(100svh-8.5rem)] md:min-h-[420px]" />
          </div>
        </div>
      </div>

      <div className="bg-brand px-5 py-3 sm:px-6 sm:py-4 md:hidden">
        <p className="text-center text-[10px] leading-relaxed tracking-[0.15em] text-on-brand sm:text-xs sm:tracking-[0.2em]">
          {COMPANY.tagline}
        </p>
      </div>
    </header>
  );
}

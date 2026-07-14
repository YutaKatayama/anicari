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
    <header className="main-header relative z-0 w-full">
      <div
        id="header-logo"
        className="relative z-[1] bg-brand"
      >
        <div className="logo__box mx-auto w-fit px-0 pt-12 pb-3 md:mx-0 md:pl-10 md:pt-14 md:pb-4">
          <div className="logo__box-image animate-fade-in">
            <Image
              src="/logo-sp.svg"
              alt={COMPANY.name}
              width={320}
              height={48}
              priority
              className="h-auto w-[93vw] max-w-full object-contain md:hidden"
            />
            <Image
              src="/logo-pc.svg"
              alt={COMPANY.name}
              width={600}
              height={72}
              priority
              className="hidden h-auto w-[93vw] max-w-[600px] object-contain md:block"
            />
          </div>

          <div className="logo__box-content relative animate-fade-in text-right">
            <span className="logo__box-content--small absolute -top-2 right-[3px] text-[0.82rem] leading-[3.5] font-bold tracking-[2.2px] text-on-brand md:text-[1.32rem] md:leading-[2.9] md:tracking-[3px]">
              {COMPANY.taglineEn}
            </span>
          </div>
        </div>
      </div>

      <div id="header-carousel" className="relative bg-brand pb-0">
        <div className="flex">
          <div className="indicators__box relative -ml-px flex w-10 shrink-0 flex-col md:w-[6.25rem]">
            <ol className="carousel-indicators relative m-0 flex list-none flex-col items-center p-0">
              {HERO_SLIDES.map((_, index) => (
                <li key={index} className="mt-2.5">
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

            <div className="mt-auto pb-6 md:pb-8">
              <ScrollIndicator />
            </div>
          </div>

          <div className="carousel-inner relative flex-1 overflow-hidden rounded-tr-[0.8rem] bg-surface">
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
                  sizes="(max-width: 768px) calc(100vw - 2.5rem), calc(100vw - 6.25rem)"
                  className="rounded-tr-[0.8rem] object-cover object-center"
                />
              </div>
            ))}

            <div className="pointer-events-none relative h-[calc(100svh-12rem)] min-h-[360px] w-[calc(100vw-2.5rem)] max-w-none md:h-[calc(100svh-8.5rem)] md:min-h-[420px] md:w-[calc(100vw-6.25rem)]" />
          </div>
        </div>
      </div>

      <div className="bg-brand px-6 py-4 md:hidden">
        <p className="text-center text-xs leading-relaxed tracking-[0.2em] text-on-brand">
          {COMPANY.tagline}
        </p>
      </div>
    </header>
  );
}

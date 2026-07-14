import {
  EVENT_RESULTS,
  PARTICIPATING_GRADUATES,
  PARTICIPATING_HOSPITALS,
  PARTICIPATING_SCHOOLS,
  RESULTS_HIGHLIGHT,
} from "@/constants/results";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ResultsSection() {
  return (
    <section id="results" className="bg-section px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="text-center">
            <h2 className="text-[58px] leading-[48px] font-bold tracking-[7px] text-brand">
              RESULTS
            </h2>
            <p className="mt-2 text-xs font-bold tracking-[1.44px] text-brand">
              実績
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EVENT_RESULTS.map((event, index) => (
            <ScrollReveal key={event.vol} variant="fade-up" delay={index * 80}>
              <div className="rounded-2xl bg-surface px-6 py-8 text-center shadow-sm">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                第{event.vol}回
              </p>
              <p className="mt-4 text-3xl font-bold text-foreground">
                学生 {event.students}名
              </p>
              <p className="mt-2 text-base text-foreground/80">
                動物病院 {event.hospitals}院
              </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mt-12 rounded-2xl bg-brand px-8 py-10 text-center text-on-brand md:px-12">
          <p className="text-5xl font-bold tracking-[4px] md:text-6xl">
            {RESULTS_HIGHLIGHT.rate}%
          </p>
          <p className="mt-4 text-[15px] leading-7 tracking-[1.8px] md:text-base">
            {RESULTS_HIGHLIGHT.label}
          </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal variant="fade-up" delay={80}>
            <div className="rounded-2xl bg-surface p-6 md:p-8">
            <h3 className="text-sm font-bold tracking-[0.2em] text-brand uppercase">
              学校別
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-7 tracking-[1.8px] text-foreground">
              {PARTICIPATING_SCHOOLS.map((school) => (
                <li key={school}>{school}</li>
              ))}
            </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={160}>
            <div className="rounded-2xl bg-surface p-6 md:p-8">
            <h3 className="text-sm font-bold tracking-[0.2em] text-brand uppercase">
              学年別
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-7 tracking-[1.8px] text-foreground">
              {PARTICIPATING_GRADUATES.map((item) => (
                <li key={item.year}>
                  {item.year} {item.count}名
                </li>
              ))}
            </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={240}>
            <div className="rounded-2xl bg-surface p-6 md:p-8 lg:col-span-1">
            <h3 className="text-sm font-bold tracking-[0.2em] text-brand uppercase">
              参加病院様
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-7 tracking-[1.8px] text-foreground">
              {PARTICIPATING_HOSPITALS.map((hospital) => (
                <li key={hospital}>{hospital} 様</li>
              ))}
              <li className="text-foreground/70">他</li>
            </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import {
  EVENT_RESULTS,
  PARTICIPATING_GRADUATES,
  PARTICIPATING_HOSPITALS,
  PARTICIPATING_SCHOOLS,
  RESULTS_HIGHLIGHT,
} from "@/constants/results";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ResultsSection() {
  return (
    <section id="results" className="bg-section px-5 py-14 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <SectionHeading en="RESULTS" ja="実績" />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-12 lg:grid-cols-4">
          {EVENT_RESULTS.map((event, index) => (
            <ScrollReveal key={event.vol} variant="fade-up" delay={index * 80}>
              <div className="h-full rounded-2xl bg-surface px-5 py-6 text-center shadow-sm sm:px-6 sm:py-8">
                <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                  第{event.vol}回
                </p>
                <p className="mt-3 text-2xl font-bold text-foreground sm:mt-4 sm:text-3xl">
                  学生 {event.students}名
                </p>
                <p className="mt-2 text-sm text-foreground/80 sm:text-base">
                  動物病院 {event.hospitals}院
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mt-8 rounded-2xl bg-brand px-6 py-8 text-center text-on-brand sm:mt-12 sm:px-8 sm:py-10 md:px-12">
            <p className="text-4xl font-bold tracking-[3px] sm:text-5xl md:text-6xl md:tracking-[4px]">
              {RESULTS_HIGHLIGHT.rate}%
            </p>
            <p className="mt-3 text-sm leading-7 tracking-[1.5px] sm:mt-4 sm:text-[15px] sm:tracking-[1.8px] md:text-base">
              {RESULTS_HIGHLIGHT.label}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal variant="fade-up" delay={80}>
            <div className="h-full rounded-2xl bg-surface p-5 sm:p-6 md:p-8">
              <h3 className="text-sm font-bold tracking-[0.2em] text-brand uppercase">
                学校別
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
                {PARTICIPATING_SCHOOLS.map((school) => (
                  <li key={school}>{school}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={160}>
            <div className="h-full rounded-2xl bg-surface p-5 sm:p-6 md:p-8">
              <h3 className="text-sm font-bold tracking-[0.2em] text-brand uppercase">
                学年別
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
                {PARTICIPATING_GRADUATES.map((item) => (
                  <li key={item.year}>
                    {item.year} {item.count}名
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={240}>
            <div className="h-full rounded-2xl bg-surface p-5 sm:p-6 md:p-8 lg:col-span-1">
              <h3 className="text-sm font-bold tracking-[0.2em] text-brand uppercase">
                参加病院様
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
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

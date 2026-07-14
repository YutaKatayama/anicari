import { EVENT_CTA, EVENTS } from "@/constants/events";
import { BlankButton } from "@/components/ui/BlankButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EventsSection() {
  return (
    <section id="events" className="bg-background px-5 py-14 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <SectionHeading en="EVENTS" ja="イベント情報" />
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
          {EVENTS.map((event, index) => (
            <ScrollReveal key={event.id} variant="fade-up" delay={index * 100}>
              <article
                className={`h-full overflow-hidden rounded-2xl border ${
                  event.featured
                    ? "border-brand bg-brand text-on-brand"
                    : "border-brand/20 bg-surface text-foreground"
                }`}
              >
                <div className="p-5 sm:p-6 md:p-8">
                  {event.featured && (
                    <span className="inline-block rounded-full bg-on-brand/15 px-3 py-1 text-[10px] font-bold tracking-[0.15em] uppercase sm:text-xs">
                      Next Event
                    </span>
                  )}
                  <p className="mt-3 text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 sm:text-xs">
                    {event.title}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-[1px] sm:text-2xl sm:tracking-[2px] md:text-3xl">
                    {event.subtitle}
                  </h3>

                  <dl className="mt-5 space-y-4 text-sm leading-7 tracking-[1.5px] sm:mt-6 sm:text-[15px] sm:tracking-[1.8px]">
                    <div>
                      <dt className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-70 sm:text-xs">
                        日時
                      </dt>
                      <dd className="mt-1 font-bold break-words">
                        {event.date} {event.time}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-70 sm:text-xs">
                        会場
                      </dt>
                      <dd className="mt-1 break-words">{event.venue}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-bold tracking-[0.15em] uppercase opacity-70 sm:text-xs">
                        流れ
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {event.flow.map((step, stepIndex) => (
                          <span key={step} className="inline-flex items-center">
                            <span
                              className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] sm:px-3 sm:text-xs sm:tracking-[0.1em] ${
                                event.featured
                                  ? "bg-on-brand/15"
                                  : "bg-section text-foreground"
                              }`}
                            >
                              {step}
                            </span>
                            {stepIndex < event.flow.length - 1 && (
                              <span className="mx-0.5 opacity-50 sm:mx-1">→</span>
                            )}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade-up" delay={120}>
          <div className="mt-8 flex justify-center sm:mt-10">
            <BlankButton
              label={EVENT_CTA.label}
              href={EVENT_CTA.href}
              external
              className="w-full max-w-[280px]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { EVENT_CTA, EVENTS } from "@/constants/events";
import { BlankButton } from "@/components/ui/BlankButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EventsSection() {
  return (
    <section id="events" className="bg-background px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="text-center">
            <h2 className="text-[58px] leading-[48px] font-bold tracking-[7px] text-brand">
              EVENTS
            </h2>
            <p className="mt-2 text-xs font-bold tracking-[1.44px] text-brand">
              イベント情報
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {EVENTS.map((event, index) => (
            <ScrollReveal key={event.id} variant="fade-up" delay={index * 100}>
              <article
              className={`overflow-hidden rounded-2xl border ${
                event.featured
                  ? "border-brand bg-brand text-on-brand"
                  : "border-brand/20 bg-surface text-foreground"
              }`}
            >
              <div className="p-6 md:p-8">
                {event.featured && (
                  <span className="inline-block rounded-full bg-on-brand/15 px-3 py-1 text-xs font-bold tracking-[0.15em] uppercase">
                    Next Event
                  </span>
                )}
                <p className="mt-3 text-xs font-bold tracking-[0.2em] uppercase opacity-80">
                  {event.title}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-[2px] md:text-3xl">
                  {event.subtitle}
                </h3>

                <dl className="mt-6 space-y-4 text-[15px] leading-7 tracking-[1.8px]">
                  <div>
                    <dt className="text-xs font-bold tracking-[0.15em] uppercase opacity-70">
                      日時
                    </dt>
                    <dd className="mt-1 font-bold">
                      {event.date} {event.time}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-[0.15em] uppercase opacity-70">
                      会場
                    </dt>
                    <dd className="mt-1">{event.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold tracking-[0.15em] uppercase opacity-70">
                      流れ
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {event.flow.map((step, index) => (
                        <span key={step} className="inline-flex items-center">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-bold tracking-[0.1em] ${
                              event.featured
                                ? "bg-on-brand/15"
                                : "bg-section text-foreground"
                            }`}
                          >
                            {step}
                          </span>
                          {index < event.flow.length - 1 && (
                            <span className="mx-1 opacity-50">→</span>
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
          <div className="mt-10 flex justify-center">
          <BlankButton
            label={EVENT_CTA.label}
            href={EVENT_CTA.href}
            external
          />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { COMPANY } from "@/constants/company";
import { BlankButton } from "@/components/ui/BlankButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BOOKING_LINKS } from "@/constants/booking";
import { SOCIAL_BY_ID } from "@/constants/social";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background px-5 py-14 sm:py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <SectionHeading
            en="Contact"
            ja="CONTACT"
            primary="ja"
            description="お問い合わせ・イベントお申込み"
            align="left"
            className="mb-8 sm:mb-10 md:mb-14"
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <SocialLinks className="mb-8 sm:mb-12" />
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="h-full rounded-2xl bg-section px-5 py-6 sm:px-6 sm:py-8 md:px-8">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                For Entry
              </p>
              <p className="mt-4 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
                イベントへの参加申込みやご質問は、公式LINEからお気軽にどうぞ。
              </p>
              <div className="mt-6">
                <BlankButton
                  label="公式LINEへ"
                  href={SOCIAL_BY_ID.line.href}
                  external
                  className="w-full max-w-[280px]"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={140}>
            <div className="h-full rounded-2xl bg-section px-5 py-6 sm:px-6 sm:py-8 md:px-8">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                Interview
              </p>
              <p className="mt-4 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
                {BOOKING_LINKS.interview.description}
              </p>
              <div className="mt-6">
                <BlankButton
                  label={BOOKING_LINKS.interview.label}
                  href={BOOKING_LINKS.interview.href}
                  external
                  className="w-full max-w-[280px]"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={180}>
            <div className="h-full rounded-2xl bg-section px-5 py-6 sm:px-6 sm:py-8 md:px-8">
              <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
                Direct Contact
              </p>
              <dl className="mt-4 space-y-4 text-sm leading-7 tracking-[1.5px] text-foreground sm:text-[15px] sm:tracking-[1.8px]">
                <div>
                  <dt className="text-xs font-bold tracking-[0.15em] text-brand uppercase">
                    Mail
                  </dt>
                  <dd className="break-all">
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-foreground no-underline hover:text-brand"
                    >
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-[0.15em] text-brand uppercase">
                    Tel
                  </dt>
                  <dd>
                    <a
                      href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                      className="text-foreground no-underline hover:text-brand"
                    >
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up" delay={120}>
          <div className="mt-8 border-t border-brand/15 pt-6 sm:mt-12 sm:pt-8">
            <SocialLinks variant="inline" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

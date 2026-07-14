import { COMPANY } from "@/constants/company";
import { BlankButton } from "@/components/ui/BlankButton";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SOCIAL_BY_ID } from "@/constants/social";

export function ContactSection() {
  return (
    <section id="contact" className="bg-background px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="mb-10 md:mb-14">
            <p className="text-sm tracking-[0.2em] text-brand uppercase">Contact</p>
            <h2 className="mt-3 text-[42px] leading-tight font-bold tracking-[4px] text-brand md:text-[58px]">
              CONTACT
            </h2>
            <p className="mt-2 text-[13px] font-bold tracking-[2px] text-foreground">
              お問い合わせ・イベントお申込み
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <SocialLinks className="mb-12" />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="rounded-2xl bg-section px-6 py-8 md:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
              For Entry
            </p>
            <p className="mt-4 text-[15px] leading-7 tracking-[1.8px] text-foreground">
              イベントへの参加申込みやご質問は、公式LINEからお気軽にどうぞ。
            </p>
            <div className="mt-6">
              <BlankButton
                label="公式LINEへ"
                href={SOCIAL_BY_ID.line.href}
                external
              />
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={180}>
            <div className="rounded-2xl bg-section px-6 py-8 md:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand uppercase">
              Direct Contact
            </p>
            <dl className="mt-4 space-y-4 text-[15px] leading-7 tracking-[1.8px] text-foreground">
              <div>
                <dt className="text-xs font-bold tracking-[0.15em] text-brand uppercase">
                  Mail
                </dt>
                <dd>
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
          <div className="mt-12 border-t border-brand/15 pt-8">
            <SocialLinks variant="inline" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

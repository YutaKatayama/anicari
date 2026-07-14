import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/company";
import {
  EXTERNAL_NAV_LINKS,
  MAIN_NAV_LINKS,
} from "@/constants/navigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navMid = Math.ceil(MAIN_NAV_LINKS.length / 2);

  return (
    <footer id="footer" className="bg-brand px-5 py-10 text-on-brand sm:py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="footer-logo mb-8 sm:mb-10">
            <Link href="/">
              <Image
                src="/logo-pc.svg"
                alt={COMPANY.name}
                width={280}
                height={34}
                className="h-auto max-w-[180px] brightness-0 invert sm:max-w-[220px] md:max-w-[280px]"
              />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            <div className="box-part-1 space-y-2 sm:space-y-3">
              {MAIN_NAV_LINKS.slice(0, navMid).map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold tracking-[1.4px] text-on-brand no-underline hover:opacity-80 sm:text-sm sm:tracking-[1.9px]"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="box-part-2 space-y-2 sm:space-y-3">
              {MAIN_NAV_LINKS.slice(navMid).map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-bold tracking-[1.4px] text-on-brand no-underline hover:opacity-80 sm:text-sm sm:tracking-[1.9px]"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="box-part-3 col-span-2 space-y-2 sm:col-span-1 sm:space-y-3">
              {EXTERNAL_NAV_LINKS.flat().map((link) =>
                link.external ? (
                  <div key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold tracking-[1.4px] text-on-brand no-underline hover:opacity-80 sm:text-sm sm:tracking-[1.9px]"
                    >
                      {link.label}
                      <Image
                        src="/icons/go-out.svg"
                        alt=""
                        width={12}
                        height={12}
                        aria-hidden
                        className="ml-2 brightness-0 invert"
                      />
                    </a>
                  </div>
                ) : (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-bold tracking-[1.4px] text-on-brand no-underline hover:opacity-80 sm:text-sm sm:tracking-[1.9px]"
                    >
                      {link.label}
                    </Link>
                  </div>
                ),
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={160}>
          <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/sitemap"
              className="text-[10px] font-bold tracking-[0.12em] text-on-brand/80 no-underline hover:text-on-brand sm:text-xs sm:tracking-[0.15em]"
            >
              SITE MAP
            </Link>
            <p className="text-[10px] tracking-[0.12em] text-on-brand/80 sm:text-xs sm:tracking-[0.15em]">
              ©{currentYear} {COMPANY.name} All Rights Reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

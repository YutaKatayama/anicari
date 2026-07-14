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

  return (
    <footer id="footer" className="bg-brand px-5 py-12 text-on-brand md:px-10 md:py-16">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal variant="fade-up">
          <div className="footer-logo mb-10">
          <Link href="/">
            <Image
              src="/logo-pc.svg"
              alt={COMPANY.name}
              width={280}
              height={34}
              className="h-auto max-w-[220px] brightness-0 invert md:max-w-[280px]"
            />
          </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <div className="grid gap-10 md:grid-cols-3">
          <div className="box-part-1 space-y-3">
            {MAIN_NAV_LINKS.slice(0, 4).map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold tracking-[1.9px] text-on-brand no-underline hover:opacity-80"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="box-part-2 space-y-3">
            {MAIN_NAV_LINKS.slice(4).map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-bold tracking-[1.9px] text-on-brand no-underline hover:opacity-80"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="box-part-3 space-y-3">
            {EXTERNAL_NAV_LINKS.flat().map((link) =>
              link.external ? (
                <div key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold tracking-[1.9px] text-on-brand no-underline hover:opacity-80"
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
                    className="text-sm font-bold tracking-[1.9px] text-on-brand no-underline hover:opacity-80"
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
          <p className="mt-12 text-xs tracking-[0.15em] text-on-brand/80">
          ©{currentYear} {COMPANY.name} All Rights Reserved.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}

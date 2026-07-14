import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/constants/company";
import {
  EXTERNAL_NAV_LINKS,
  MAIN_NAV_LINKS,
} from "@/constants/navigation";
import { SITE_URL } from "@/constants/seo";

export const metadata: Metadata = {
  title: "サイトマップ",
  description: `${COMPANY.nameJa}（AniCari）公式サイトのサイトマップ。各セクション・外部リンク一覧。`,
  alternates: {
    canonical: "/site-map",
  },
};

const SECTION_LABELS: Record<string, string> = {
  "#about": "AniCariについて",
  "#service": "サービス",
  "#features": "特徴",
  "#results": "実績",
  "#events": "イベント",
  "#company": "会社概要",
  "#materials": "団体資料",
  "#greeting": "代表挨拶",
  "#contact": "お問い合わせ",
};

export default function SiteMapPage() {
  const externalLinks = EXTERNAL_NAV_LINKS.flat();

  return (
    <>
      <main className="main overflow-x-hidden bg-background pt-[60px]">
        <section className="px-5 py-14 sm:py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[800px]">
            <ScrollReveal variant="fade-up">
              <SectionHeading
                en="SITE MAP"
                ja="サイトマップ"
                description={`${COMPANY.nameJa}公式サイトのページ一覧です。`}
              />
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={80}>
              <div className="mt-10 space-y-10 sm:mt-12">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.15em] text-brand uppercase">
                    ページ
                  </h2>
                  <ul className="mt-4 space-y-3 border-t border-foreground/10 pt-4">
                    <li>
                      <Link
                        href="/"
                        className="text-sm font-bold tracking-[0.08em] text-foreground no-underline hover:text-brand"
                      >
                        トップページ
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-bold tracking-[0.15em] text-brand uppercase">
                    セクション
                  </h2>
                  <ul className="mt-4 space-y-3 border-t border-foreground/10 pt-4">
                    {MAIN_NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm font-bold tracking-[0.08em] text-foreground no-underline hover:text-brand"
                        >
                          {SECTION_LABELS[link.href] ?? link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-sm font-bold tracking-[0.15em] text-brand uppercase">
                    外部リンク
                  </h2>
                  <ul className="mt-4 space-y-3 border-t border-foreground/10 pt-4">
                    {externalLinks.map((link) => (
                      <li key={link.href}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold tracking-[0.08em] text-foreground no-underline hover:text-brand"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm font-bold tracking-[0.08em] text-foreground no-underline hover:text-brand"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs leading-relaxed text-foreground/70">
                  検索エンジン向け XML サイトマップ:{" "}
                  <a
                    href="/sitemap.xml"
                    className="font-bold text-brand no-underline hover:underline"
                  >
                    {SITE_URL}/sitemap.xml
                  </a>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

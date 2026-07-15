import { COMPANY } from "@/constants/company";
import { EVENTS } from "@/constants/events";
import { SEO, SITE_URL } from "@/constants/seo";
import { SOCIAL_LINKS } from "@/constants/social";
import { createEventSchema } from "@/lib/seo/event-schema";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SEO.siteName,
    alternateName: [SEO.siteNameJa, "AniCari", "anicari"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}${SEO.ogImagePath}`,
    description: SEO.description,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "町田市",
      addressRegion: "東京都",
      addressCountry: "JP",
    },
    founder: {
      "@type": "Person",
      name: COMPANY.representative,
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    keywords: SEO.keywords.join(", "),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SEO.siteName,
    description: SEO.description,
    inLanguage: "ja-JP",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: SEO.title,
    description: SEO.description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "ja-JP",
  };

  const featuredEvent = EVENTS.find((event) => event.featured);
  const eventSchema = featuredEvent ? createEventSchema(featuredEvent) : null;

  const schemas = [organization, website, webPage, eventSchema].filter(Boolean);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

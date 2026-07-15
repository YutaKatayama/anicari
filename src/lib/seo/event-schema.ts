import type { EventItem } from "@/constants/events";
import { EVENT_CTA } from "@/constants/events";
import { SEO, SITE_URL } from "@/constants/seo";

export function createEventSchema(event: EventItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${SITE_URL}/#event-${event.id}`,
    name: `${event.title} ${event.subtitle}`,
    description: `${SEO.siteNameJa}の${event.title}。動物看護師就活・ペット業界のキャリアイベント。`,
    startDate: event.startDate,
    endDate: event.endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: [`${SITE_URL}${event.image}`],
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.venue,
        addressLocality: event.addressLocality,
        addressRegion: "東京都",
        addressCountry: "JP",
      },
    },
    organizer: {
      "@id": `${SITE_URL}/#organization`,
    },
    performer: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SEO.siteName,
    },
    offers: {
      "@type": "Offer",
      url: EVENT_CTA.href,
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "JPY",
      validFrom: "2026-07-01T00:00:00+09:00",
    },
  };
}

import type { Metadata } from "next";
import { COMPANY } from "@/constants/company";
import { SEO, SITE_URL } from "@/constants/seo";

const ogImageUrl = `${SITE_URL}${SEO.ogImagePath}`;

export function createSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO.title,
      template: `%s | ${SEO.siteName}`,
    },
    description: SEO.description,
    keywords: SEO.keywords,
    applicationName: SEO.siteName,
    authors: [{ name: COMPANY.representative, url: SITE_URL }],
    creator: SEO.siteName,
    publisher: SEO.siteName,
    category: "education",
    alternates: {
      canonical: "/",
      languages: {
        "ja-JP": "/",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: SEO.googleSiteVerification,
    },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url: SITE_URL,
      siteName: SEO.siteName,
      title: SEO.title,
      description: SEO.ogDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SEO.siteName} - 動物看護師就活・ペット業界キャリアイベント`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SEO.twitterHandle,
      creator: SEO.twitterHandle,
      title: SEO.title,
      description: SEO.ogDescription,
      images: [ogImageUrl],
    },
    icons: {
      icon: "/favicon.ico",
    },
    other: {
      "format-detection": "telephone=no, email=no, address=no",
    },
  };
}

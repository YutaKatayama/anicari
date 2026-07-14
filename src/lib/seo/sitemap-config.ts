import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/seo";

type SitemapPage = {
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
};

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/site-map",
    changeFrequency: "monthly",
    priority: 0.5,
  },
];

export function createSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_PAGES.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

import type { MetadataRoute } from "next";
import { createSitemapEntries } from "@/lib/seo/sitemap-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return createSitemapEntries();
}

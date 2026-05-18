import type { MetadataRoute } from "next";

const SITE_URL = "https://queue-tech.jp/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-05-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

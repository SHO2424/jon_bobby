import type { MetadataRoute } from "next";

const LP_DEPLOY_URL = "https://jon-bobby.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: LP_DEPLOY_URL,
      lastModified: new Date("2026-05-18"),
      changeFrequency: "daily", 
      priority: 1.0,
    },
  ];
}
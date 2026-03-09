import type { MetadataRoute } from "next";

const BASE_URL = "https://cannabisclubsspain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/cannabis-laws-spain", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/how-to-join", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/prices", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/barcelona", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/madrid", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/valencia", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/malaga", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/ibiza", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/seville", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/spain-vs-amsterdam", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/cannabis-tourism-guide", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date("2026-03-09"),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

import type { MetadataRoute } from "next";

import { notebooks } from "@/content/notebooks";
import { LOCALES } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const home = LOCALES.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const notebookList = LOCALES.map((locale) => ({
    url: `${site.url}/${locale}/notebooks`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const notebookPages = LOCALES.flatMap((locale) =>
    notebooks.map((n) => ({
      url: `${site.url}/${locale}/notebooks/${n.slug}`,
      lastModified: n.date ? new Date(n.date).toISOString() : now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    }))
  );

  return [...home, ...notebookList, ...notebookPages];
}

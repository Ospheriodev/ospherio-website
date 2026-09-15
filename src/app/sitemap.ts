import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

const isDraft = (text: string) => /\[[^\]]+\]/.test(text);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/services/"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}/`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/work/"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...projects
      .filter((p) => !isDraft(p.overview + p.summary))
      .map((p) => ({
        url: absoluteUrl(`/work/${p.slug}/`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    { url: absoluteUrl("/about/"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: absoluteUrl("/contact/"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}

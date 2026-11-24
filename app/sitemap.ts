import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const languages = { es: `${base}/es`, en: `${base}/en` }
  return [
    { url: `${base}/es`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${base}/en`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
    { url: `${base}/es/cv`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/en/cv`, changeFrequency: "monthly", priority: 0.6 },
  ]
}

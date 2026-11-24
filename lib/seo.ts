import type { Metadata } from "next"

import { profile } from "@/data/profile"
import type { Dictionary } from "@/types/dictionary"

import { siteUrl } from "./site"

const KEYWORDS = [
  "Camilo Guapacha",
  "Full Stack Developer",
  "Desarrollador Full Stack",
  "Ingeniería de Sistemas UTP",
  "Next.js",
  "NestJS",
  "TypeScript",
  "DevOps",
  "Pereira",
  "Colombia",
  "Tourwright",
]

export function pageMetadata(d: Dictionary, path = ""): Metadata {
  const base = siteUrl()
  const l = d.locale
  return {
    metadataBase: new URL(base),
    title: { default: d.site.meta.title, template: `%s — ${profile.name}` },
    description: d.site.meta.description,
    authors: [{ name: profile.name, url: base }],
    creator: profile.name,
    keywords: KEYWORDS,
    alternates: {
      canonical: `/${l}${path}`,
      languages: { es: `/es${path}`, en: `/en${path}`, "x-default": `/es${path}` },
    },
    openGraph: {
      type: "profile",
      locale: l === "es" ? "es_CO" : "en_US",
      url: `/${l}${path}`,
      siteName: profile.name,
      title: d.site.meta.title,
      description: d.site.meta.description,
      firstName: "Camilo",
      lastName: "Guapacha",
    },
    twitter: { card: "summary_large_image", title: d.site.meta.title, description: d.site.meta.description },
    robots: { index: true, follow: true },
  }
}

/** schema.org Person, so search engines understand who the site is about. */
export function personJsonLd(d: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.fullName,
    jobTitle: d.hero.role,
    url: siteUrl(),
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Pereira", addressCountry: "CO" },
    sameAs: [profile.github.url, profile.linkedin.url, profile.npm.url],
    knowsAbout: ["Next.js", "React", "NestJS", "TypeScript", "Prisma", "MySQL", "Docker", "Proxmox", "DevOps"],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "SENA" },
      { "@type": "CollegeOrUniversity", name: "Universidad Tecnológica de Pereira" },
    ],
  }
}

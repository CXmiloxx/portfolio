import type { CaseStudyFacts, ProjectBrief } from "@/types/project"

const ALL_LAYERS = ["ui", "api", "data", "infra"] as const

/** Deep-dive projects, in display order. Copy lives in i18n/<locale>/work.ts. */
export const caseStudies: CaseStudyFacts[] = [
  {
    id: "micupoya",
    year: "2026",
    status: "done",
    layers: [...ALL_LAYERS],
    stack: ["NestJS 11", "Next.js 16", "Prisma 7", "MySQL 8.4", "Redis", "Docker", "Hexagonal"],
  },
  {
    id: "lending",
    year: "2026",
    status: "live",
    layers: [...ALL_LAYERS],
    stack: ["NestJS 11", "Next.js", "Prisma 7", "MySQL 8", "BullMQ", "DataCrédito", "Docker"],
  },
  {
    id: "insyte",
    year: "2026",
    status: "live",
    layers: [...ALL_LAYERS],
    stack: ["NestJS", "BullMQ", "Redis", "Next.js", "Prisma", "MySQL"],
  },
  {
    id: "hr",
    year: "2026",
    status: "live",
    layers: [...ALL_LAYERS],
    stack: ["Next.js", "NestJS", "Prisma", "MySQL", "Multi-tenant"],
  },
  {
    id: "legal",
    year: "2026",
    status: "live",
    layers: [...ALL_LAYERS],
    stack: ["Next.js", "Express", "Prisma", "MySQL", "Scraping"],
  },
]

/** Shorter entries for the project index. */
export const projects: ProjectBrief[] = [
  { id: "boletazo", year: "2026", status: "done", layers: [...ALL_LAYERS], stack: ["NestJS", "Next.js", "MariaDB", "Worker"] },
  { id: "documents", year: "2026", status: "live", layers: [...ALL_LAYERS], stack: ["NestJS", "React", "Redis"] },
  { id: "budget", year: "2026", status: "live", layers: ["ui", "api", "data"], stack: ["Next.js", "NestJS", "Azure AD"] },
  { id: "medical", year: "2025", status: "live", layers: ["ui", "infra"], stack: ["React", "PWA", "Docker"] },
]

import type { EducationId, JobFacts } from "@/types/career"

/** Most recent first. Copy lives in i18n/<locale>/career.ts. */
export const jobs: JobFacts[] = [{ id: "developer", current: true }, { id: "freelance" }, { id: "internship" }]

export const education: EducationId[] = ["utp", "sena"]

/** Headline numbers, shown in the summary and the CV. */
export const metrics = {
  systemsInProduction: 10,
  servicesInLendingPlatform: 13,
  openSourceProjects: 2,
} as const

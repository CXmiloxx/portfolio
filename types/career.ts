export type JobId = "developer" | "freelance" | "internship"
export type EducationId = "utp" | "sena"

export interface JobFacts {
  id: JobId
  current?: boolean
}

export interface JobCopy {
  period: string
  role: string
  org: string
  kind: string
  summary: string
  highlights: string[]
}

export type Job = JobFacts & JobCopy

export interface EducationCopy {
  title: string
  org: string
  period: string
}

export interface Principle {
  title: string
  body: string
  /** Technical names behind the principle. */
  tech?: string
  /** Visually emphasised card. */
  highlight?: boolean
}

/** The four layers of a web system. Each project says which ones I built. */
export type Layer = "ui" | "api" | "data" | "infra"

export type Status = "live" | "done" | "building"

export type CaseStudyId = "micupoya" | "lending" | "insyte" | "hr" | "legal"

export type ProjectId = "boletazo" | "documents" | "budget" | "medical"

/** Facts shared by every language. */
export interface ProjectFacts {
  year: string
  status: Status
  layers: Layer[]
  stack: string[]
}

export interface CaseStudyFacts extends ProjectFacts {
  id: CaseStudyId
}

export interface CaseStudyCopy {
  title: string
  kicker: string
  /** What it is for, in words anyone understands. */
  plain: string
  built: string[]
  /** How it is built, for engineers. */
  architecture: string
}

export type CaseStudy = CaseStudyFacts & CaseStudyCopy

export interface ProjectBrief extends ProjectFacts {
  id: ProjectId
}

export interface ProjectBriefCopy {
  title: string
  plain: string
}

export type Project = ProjectBrief & ProjectBriefCopy

export type OpenSourceId = "tourwright" | "gitmoji-commits"

export interface OpenSourceFacts {
  id: OpenSourceId
  name: string
  repo: string
  site?: string
  install?: string
  stack: string[]
  featured?: boolean
}

export interface OpenSourceCopy {
  tagline: string
  description: string
  points: string[]
  /** Before/after sample taken from the project's own README. */
  demo?: { beforeLabel: string; before: string; afterLabel: string; after: string }
}

export type OpenSourceProject = OpenSourceFacts & OpenSourceCopy

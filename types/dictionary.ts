import type { EducationCopy, EducationId, JobCopy, JobId, Principle } from "./career"
import type { Locale } from "./i18n"
import type { OpenSourceCopy, OpenSourceId } from "./open-source"
import type { CaseStudyCopy, CaseStudyId, Layer, ProjectBriefCopy, ProjectId, Status } from "./project"
import type { SkillGroupCopy, SkillGroupId } from "./skills"

/** Copy shared by the whole site: metadata, navigation, chrome. */
export interface SiteCopy {
  meta: { title: string; description: string; cvTitle: string }
  nav: {
    about: string
    work: string
    openSource: string
    experience: string
    skills: string
    contact: string
    switchTo: string
    main: string
    menu: string
    close: string
  }
  skipToContent: string
  theme: { light: string; dark: string }
  /** Accessible name of the language switch group. */
  language: { label: string }
  social: { label: string }
  boot: { lines: string[]; ready: string; skip: string }
  footer: { built: string; source: string }
  copy: { copy: string; copied: string }
}

export interface HeroCopy {
  status: string
  localTime: string
  role: string
  headline: string
  headlineEm: string
  intro: string
  cta: string
  cv: string
  facts: { systems: string; study: string; downloads: string }
  flow: {
    title: string
    caption: string
    steps: { node: string; text: string }[]
  }
}

export interface AboutCopy {
  eyebrow: string
  title: string
  intro: string
  process: { title: string; body: string; tech: string }[]
  whoTitle: string
  who: string
  nowTitle: string
  now: { label: string; value: string; detail: string }[]
}

export interface WorkCopy {
  eyebrow: string
  title: string
  intro: string
  privacy: string
  labels: {
    plain: string
    details: string
    built: string
    architecture: string
    layers: string
    diagram: string
  }
  layerLegend: Record<Layer, string>
  nodeLegend: { client: string; service: string; data: string; external: string; queue: string }
  status: Record<Status, string>
  cases: Record<CaseStudyId, CaseStudyCopy>
  moreTitle: string
  more: Record<ProjectId, ProjectBriefCopy>
}

export interface OpenSourceSectionCopy {
  eyebrow: string
  title: string
  intro: string
  featuredLabel: string
  watch: string
  code: string
  site: string
  demo: string
  downloads: string
  latest: string
  demoSource: string
  skillLabel: string
  projects: Record<OpenSourceId, OpenSourceCopy>
}

export interface ExperienceCopy {
  eyebrow: string
  title: string
  current: string
  jobs: Record<JobId, JobCopy>
  educationTitle: string
  education: Record<EducationId, EducationCopy>
}

export interface PrinciplesCopy {
  eyebrow: string
  title: string
  intro: string
  items: Principle[]
}

export interface SkillsCopy {
  eyebrow: string
  title: string
  alsoLabel: string
  groups: Record<SkillGroupId, SkillGroupCopy>
  languagesTitle: string
  languages: { name: string; level: string }[]
}

export interface ContactCopy {
  eyebrow: string
  big: string
  title: string
  body: string
  channels: { email: string; whatsapp: string; linkedin: string; github: string; cv: string }
}

export interface CvCopy {
  back: string
  print: string
  summaryTitle: string
  summary: string
  achievementsTitle: string
  achievements: string[]
  experienceTitle: string
  projectsTitle: string
  skillsTitle: string
  educationTitle: string
  languagesTitle: string
  openSourceTitle: string
}

export interface Dictionary {
  locale: Locale
  site: SiteCopy
  hero: HeroCopy
  about: AboutCopy
  work: WorkCopy
  openSource: OpenSourceSectionCopy
  experience: ExperienceCopy
  principles: PrinciplesCopy
  skills: SkillsCopy
  contact: ContactCopy
  cv: CvCopy
}

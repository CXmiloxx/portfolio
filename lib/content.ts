/**
 * Selectors that join language-neutral facts (data/) with the copy of one
 * language (i18n/). Components receive ready-to-render view models.
 */
import { education, jobs } from "@/data/career"
import { openSource } from "@/data/open-source"
import { caseStudies, projects } from "@/data/projects"
import { skillGroups } from "@/data/skills"
import { localize } from "@/i18n/config"
import type { Job } from "@/types/career"
import type { Dictionary } from "@/types/dictionary"
import type { OpenSourceProject } from "@/types/open-source"
import type { CaseStudy, Project } from "@/types/project"

export function getCaseStudies(d: Dictionary): CaseStudy[] {
  return caseStudies.map((facts) => ({ ...facts, ...d.work.cases[facts.id] }))
}

export function getProjects(d: Dictionary): Project[] {
  return projects.map((facts) => ({ ...facts, ...d.work.more[facts.id] }))
}

export function getOpenSource(d: Dictionary): OpenSourceProject[] {
  return openSource.map((facts) => ({ ...facts, ...d.openSource.projects[facts.id] }))
}

export function getJobs(d: Dictionary): Job[] {
  return jobs.map((facts) => ({ ...facts, ...d.experience.jobs[facts.id] }))
}

export function getEducation(d: Dictionary) {
  return education.map((id) => ({ id, ...d.experience.education[id] }))
}

export function getSkillGroups(d: Dictionary) {
  return skillGroups.map((g) => ({
    id: g.id,
    ...d.skills.groups[g.id],
    daily: g.daily.map((t) => localize(t, d.locale)),
    also: g.also.map((t) => localize(t, d.locale)),
  }))
}

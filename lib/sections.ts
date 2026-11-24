/** Anchor ids of the home page sections. Navigation and sections share them. */
export const SECTION = {
  about: "about",
  work: "work",
  openSource: "open-source",
  experience: "experience",
  skills: "skills",
  contact: "contact",
} as const

export const NAV_ORDER = ["about", "work", "openSource", "experience", "skills", "contact"] as const

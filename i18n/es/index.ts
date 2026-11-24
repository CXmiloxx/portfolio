import type { Dictionary } from "@/types/dictionary"

import { about } from "./about"
import { experience, principles, skills } from "./career"
import { contact, cv } from "./contact"
import { openSource } from "./open-source"
import { hero, site } from "./site"
import { work } from "./work"

export const es: Dictionary = {
  locale: "es",
  site,
  hero,
  about,
  work,
  openSource,
  experience,
  principles,
  skills,
  contact,
  cv,
}

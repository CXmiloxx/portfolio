import type { Dictionary } from "@/types/dictionary"
import type { Locale } from "@/types/i18n"

import { en } from "./en"
import { es } from "./es"

const dictionaries: Record<Locale, Dictionary> = { es, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

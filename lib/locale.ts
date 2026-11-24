import { notFound } from "next/navigation"
import { lang } from "next/root-params"

import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import type { Dictionary } from "@/types/dictionary"

/** Dictionary for the current [lang] segment; 404 for unknown languages. */
export async function currentDictionary(): Promise<Dictionary> {
  const l = await lang()
  if (!isLocale(l)) notFound()
  return getDictionary(l)
}

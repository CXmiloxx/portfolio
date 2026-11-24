import { locales, type Locale, type Text } from "@/types/i18n"

export const defaultLocale: Locale = "es"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es"
}

/** Resolves a Text (plain or per-language) for the given locale. */
export function localize(text: Text | undefined, locale: Locale): string {
  if (text === undefined) return ""
  return typeof text === "string" ? text : text[locale]
}

/** BCP 47 tag used for number and date formatting. */
export function intlLocale(locale: Locale): string {
  return locale === "es" ? "es-CO" : "en-US"
}

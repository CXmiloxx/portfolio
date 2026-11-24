export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]

/** A value written once per language. */
export type Localized<T = string> = Record<Locale, T>

/** Plain text, or text that changes with the language. */
export type Text = string | Localized

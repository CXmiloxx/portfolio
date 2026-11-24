import { intlLocale } from "@/i18n/config"
import type { Locale } from "@/types/i18n"

export function formatNumber(n: number, locale: Locale): string {
  return new Intl.NumberFormat(intlLocale(locale)).format(n)
}

export function pad2(n: number): string {
  return String(n).padStart(2, "0")
}

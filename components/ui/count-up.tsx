import { intlLocale } from "@/i18n/config"
import { formatNumber } from "@/lib/format"
import type { Locale } from "@/types/i18n"

/**
 * Renders the final number on the server; motion/scroll-motion counts up to it
 * when it scrolls into view (data-anim="count").
 */
export function CountUp({ to, suffix = "", locale }: { to: number; suffix?: string; locale: Locale }) {
  return (
    <span suppressHydrationWarning data-anim="count" data-to={to} data-suffix={suffix} data-locale={intlLocale(locale)}>
      {formatNumber(to, locale)}
      {suffix}
    </span>
  )
}

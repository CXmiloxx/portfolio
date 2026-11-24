import Link from "next/link"

import { PrintButton } from "@/components/interactive/print-button"
import { otherLocale } from "@/i18n/config"
import type { Dictionary } from "@/types/dictionary"

/** Screen-only bar above the sheet: back, language, print. */
export function CvToolbar({ d }: { d: Dictionary }) {
  const other = otherLocale(d.locale)
  return (
    <div className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[210mm] items-center justify-between px-4">
        <Link href={`/${d.locale}`} className="text-sm text-ink-2 hover:text-ink">
          ← {d.cv.back}
        </Link>
        <div className="flex items-center gap-2">
          <Link href={`/${other}/cv`} hrefLang={other} className="eyebrow px-3 py-2 text-ink-2 hover:text-ink">
            {other.toUpperCase()}
          </Link>
          <PrintButton label={d.cv.print} className="h-9 rounded-full bg-signal px-4 text-sm font-semibold text-on-signal" />
        </div>
      </div>
    </div>
  )
}

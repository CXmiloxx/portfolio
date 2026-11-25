import Link from "next/link"

import { LanguageSwitch } from "@/components/interactive/language-switch"
import { PrintButton } from "@/components/interactive/print-button"
import { localeHrefs } from "@/i18n/config"
import type { Dictionary } from "@/types/dictionary"

/** Screen-only bar above the sheet: back, language, print. */
export function CvToolbar({ d }: { d: Dictionary }) {
  return (
    <div className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[210mm] items-center justify-between px-4">
        <Link href={`/${d.locale}`} className="text-sm text-ink-2 hover:text-ink">
          ← {d.cv.back}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitch
            current={d.locale}
            hrefs={localeHrefs("/cv")}
            label={d.site.language.label}
            switchTo={d.site.nav.switchTo}
          />
          <PrintButton label={d.cv.print} className="h-9 rounded-full bg-signal px-4 text-sm font-semibold text-on-signal" />
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, type MouseEvent } from "react"

import { LOCALE_LEAVE_EVENT, LOCALE_SWITCH_KEY, type LocaleLeaveDetail, type LocaleSwitchState } from "@/lib/locale-switch"
import { locales, type Locale } from "@/types/i18n"

interface Props {
  current: Locale
  /** Destination for each language (same page in the other language). */
  hrefs: Record<Locale, string>
  label: string
  /** Accessible name of the inactive option, e.g. "Ver en inglés". */
  switchTo: string
}

/** Section of the home page currently in view, so the other language opens there. */
function sectionInView(): string | null {
  if (window.scrollY < window.innerHeight * 0.5) return null
  let found: string | null = null
  for (const s of document.querySelectorAll<HTMLElement>("main section[id]")) {
    if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) found = s.id
  }
  return found
}

/**
 * Two-option switch: the active language sits on a filled pill. Choosing the
 * other slides the pill across, then the curtain covers the page.
 */
export function LanguageSwitch({ current, hrefs, label, switchTo }: Props) {
  const [shown, setShown] = useState<Locale>(current)
  const index = locales.indexOf(shown)

  function go(e: MouseEvent<HTMLAnchorElement>, to: Locale) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    if (shown !== current) return
    setShown(to)
    const state: LocaleSwitchState = { to, section: sectionInView() }
    try {
      sessionStorage.setItem(LOCALE_SWITCH_KEY, JSON.stringify(state))
    } catch {}
    const detail: LocaleLeaveDetail = { ...state, href: hrefs[to] }
    window.dispatchEvent(new CustomEvent(LOCALE_LEAVE_EVENT, { detail }))
  }

  return (
    <div role="group" aria-label={label} className="relative grid h-9 grid-cols-2 rounded-full border border-current p-0.5">
      <span
        aria-hidden
        className="absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateX(${index * 100}%)` }}
      />
      {locales.map((loc) =>
        loc === current ? (
          <span
            key={loc}
            aria-current="true"
            className={`eyebrow relative z-10 grid w-9 place-items-center transition-colors duration-300 ${
              shown === loc ? "text-paper" : "text-ink-3"
            }`}
          >
            {loc.toUpperCase()}
          </span>
        ) : (
          <a
            key={loc}
            href={hrefs[loc]}
            hrefLang={loc}
            lang={loc}
            title={switchTo}
            aria-label={switchTo}
            onClick={(e) => go(e, loc)}
            className={`eyebrow relative z-10 grid w-9 place-items-center transition-colors duration-300 ${
              shown === loc ? "text-paper" : "text-ink-3 hover:text-ink"
            }`}
          >
            {loc.toUpperCase()}
          </a>
        ),
      )}
    </div>
  )
}

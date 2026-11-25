import type { Locale } from "@/types/i18n"

/**
 * A language switch is a full page load. The leaving page stores where the
 * reader was; the arriving page reads it to keep the curtain closed from the
 * first paint and to land on the same section.
 */
export const LOCALE_SWITCH_KEY = "locale-switch"

/** Fired on window by the switch; the curtain listens and runs the exit. */
export const LOCALE_LEAVE_EVENT = "locale:leave"

export interface LocaleSwitchState {
  to: Locale
  /** id of the section in view when leaving, if any. */
  section: string | null
}

export interface LocaleLeaveDetail extends LocaleSwitchState {
  href: string
}

/** Set by the preloader once it has played in this tab. */
export const INTRO_SEEN_KEY = "intro-seen"

/**
 * Inline script for <head>, before first paint: marks <html> while a switch is
 * arriving (curtain stays closed) and once the intro was seen (no preloader flash).
 */
export const localeSwitchBootScript = `try{var h=document.documentElement.dataset;if(sessionStorage.getItem('${LOCALE_SWITCH_KEY}'))h.localeSwitch='';if(sessionStorage.getItem('${INTRO_SEEN_KEY}'))h.introSeen=''}catch(e){}`

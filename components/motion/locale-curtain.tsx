"use client"

import { useEffect, useRef } from "react"

import { LogoMark } from "@/components/ui/logo"
import { LOCALE_LEAVE_EVENT, LOCALE_SWITCH_KEY, type LocaleLeaveDetail, type LocaleSwitchState } from "@/lib/locale-switch"

import { gsap, prefersReducedMotion, ScrollTrigger } from "./gsap"
import { finishIntro } from "./intro"

function readState(): LocaleSwitchState | null {
  try {
    const raw = sessionStorage.getItem(LOCALE_SWITCH_KEY)
    return raw ? (JSON.parse(raw) as LocaleSwitchState) : null
  } catch {
    return null
  }
}

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()))

/** ScrollTrigger refreshes itself on window load; measuring before that lands off target. */
const pageLoaded = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise<void>((r) => window.addEventListener("load", () => r(), { once: true }))

function jumpTo(target: HTMLElement) {
  // Lenis measures the page lazily; refresh its limit before jumping.
  window.__lenis?.resize()
  if (window.__lenis) window.__lenis.scrollTo(target, { immediate: true, force: true })
  else target.scrollIntoView()
}

/**
 * Signal-coloured curtain with the <cg/> mark for language changes. Leaving:
 * it slides up over the page, then the other locale loads. Arriving: the boot
 * script keeps it closed from the first paint; once the page is laid out it
 * jumps to the section the reader was on and the curtain lifts away.
 */
export function LocaleCurtain() {
  const root = useRef<HTMLDivElement>(null)

  // Leaving.
  useEffect(() => {
    const onLeave = (e: Event) => {
      const { href } = (e as CustomEvent<LocaleLeaveDetail>).detail
      if (prefersReducedMotion() || !root.current) {
        window.location.assign(href)
        return
      }
      window.__lenis?.stop()
      const el = root.current
      const q = gsap.utils.selector(el)
      gsap
        .timeline({ delay: 0.1, onComplete: () => window.location.assign(href) })
        .set(el, { visibility: "visible", yPercent: 100 })
        .to(el, { yPercent: 0, duration: 0.55, ease: "expo.inOut" })
        .fromTo(q("[data-mark]"), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, ease: "expo.out" }, "-=0.2")
    }
    window.addEventListener(LOCALE_LEAVE_EVENT, onLeave)
    return () => window.removeEventListener(LOCALE_LEAVE_EVENT, onLeave)
  }, [])

  // Arriving.
  useEffect(() => {
    const html = document.documentElement
    if (!("localeSwitch" in html.dataset)) return
    const state = readState()
    const el = root.current!
    let cancelled = false

    const reveal = async () => {
      await Promise.all([document.fonts.ready, pageLoaded()])
      await nextFrame()
      await nextFrame()
      if (cancelled) return
      const target = state?.section ? document.getElementById(state.section) : null
      if (target) {
        // Scroll animations (pins included) start on intro:done and change the
        // page height, so start them first, then measure and jump.
        finishIntro()
        await nextFrame()
        await nextFrame()
        ScrollTrigger.refresh()
        jumpTo(target)
        // A late refresh (pins rebuilt) moves the section: follow it briefly.
        const follow = () => jumpTo(target)
        ScrollTrigger.addEventListener("refresh", follow)
        setTimeout(() => ScrollTrigger.removeEventListener("refresh", follow), 1200)
      }
      const done = () => {
        try {
          sessionStorage.removeItem(LOCALE_SWITCH_KEY)
        } catch {}
        delete html.dataset.localeSwitch
        gsap.set(el, { clearProps: "all" })
        finishIntro() // no-op when already called above
      }
      if (prefersReducedMotion()) return done()
      const q = gsap.utils.selector(el)
      gsap
        .timeline({ onComplete: done })
        .to(q("[data-mark]"), { y: -24, autoAlpha: 0, duration: 0.3, ease: "expo.in" })
        .to(el, { yPercent: -100, duration: 0.6, ease: "expo.inOut" }, "-=0.1")
    }
    void reveal()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      ref={root}
      aria-hidden
      className="locale-curtain no-print pointer-events-none fixed inset-0 z-[99] grid place-items-center bg-signal text-on-signal"
    >
      <div data-mark>
        <LogoMark mono className="h-12 w-auto md:h-16" />
      </div>
    </div>
  )
}

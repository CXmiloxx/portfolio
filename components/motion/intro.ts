"use client"

import type Lenis from "lenis"

/**
 * The boot intro and the page animations meet through one window event,
 * so the hero only animates after the preloader leaves.
 */
const INTRO_EVENT = "intro:done"

declare global {
  interface Window {
    __introDone?: boolean
    __lenis?: Lenis
  }
}

export function onIntroDone(cb: () => void): () => void {
  if (window.__introDone) {
    cb()
    return () => {}
  }
  window.addEventListener(INTRO_EVENT, cb, { once: true })
  return () => window.removeEventListener(INTRO_EVENT, cb)
}

export function finishIntro() {
  if (window.__introDone) return
  window.__introDone = true
  window.dispatchEvent(new Event(INTRO_EVENT))
}

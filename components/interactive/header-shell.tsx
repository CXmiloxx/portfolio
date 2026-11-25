"use client"

import { useSyncExternalStore, type ReactNode } from "react"

const THRESHOLD = 24

function subscribe(cb: () => void) {
  window.addEventListener("scroll", cb, { passive: true })
  return () => window.removeEventListener("scroll", cb)
}

/**
 * Fixed header frame. Transparent over the top of the hero; once the page
 * scrolls it gets a solid, blurred paper background and a bottom rule so its
 * text never overlaps the section underneath.
 */
export function HeaderShell({ children }: { children: ReactNode }) {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > THRESHOLD,
    () => false,
  )
  return (
    <header
      data-scrolled={scrolled || undefined}
      className="no-print fixed inset-x-0 top-0 z-50 border-b border-transparent text-ink transition-[background-color,border-color,backdrop-filter] duration-300 data-scrolled:border-line data-scrolled:bg-paper/85 data-scrolled:backdrop-blur-md"
    >
      {children}
    </header>
  )
}

"use client"

import { useSyncExternalStore } from "react"

import { MoonIcon, SunIcon } from "@/components/ui/icons"
import { THEME_EVENT, type Theme } from "@/lib/theme"

function subscribe(cb: () => void) {
  window.addEventListener(THEME_EVENT, cb)
  return () => window.removeEventListener(THEME_EVENT, cb)
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

function applyTheme(next: Theme) {
  const root = document.documentElement
  root.classList.add("theme-swap")
  root.dataset.theme = next
  try {
    localStorage.setItem("theme", next)
  } catch {
    /* private mode: the choice lasts until reload */
  }
  window.dispatchEvent(new Event(THEME_EVENT))
  setTimeout(() => root.classList.remove("theme-swap"), 600)
}

export function ThemeToggle({ light, dark, className }: { light: string; dark: string; className?: string }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "dark" as Theme)
  const next: Theme = theme === "light" ? "dark" : "light"
  const label = next === "light" ? light : dark
  return (
    <button type="button" className={className} aria-label={label} title={label} onClick={() => applyTheme(next)}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

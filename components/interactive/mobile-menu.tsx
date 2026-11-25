"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface Item {
  href: string
  label: string
}

/**
 * Full-screen navigation for small screens. The panel is portalled to <body> so
 * it covers the whole page, header included.
 */
export function MobileMenu({ items, openLabel, closeLabel }: { items: Item[]; openLabel: string; closeLabel: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.documentElement.style.overflow = "hidden"
    window.__lenis?.stop()
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.__lenis?.start()
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="eyebrow inline-flex h-9 items-center rounded-full border border-current px-4 lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        {openLabel}
      </button>
      {open
        ? createPortal(
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={openLabel}
              className="fixed inset-0 z-[96] flex flex-col bg-paper px-6 pt-5 pb-10 text-ink"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  autoFocus
                  className="eyebrow inline-flex h-9 items-center rounded-full border border-line px-4"
                  onClick={() => setOpen(false)}
                >
                  {closeLabel}
                </button>
              </div>
              <nav className="mt-auto">
                <ul className="space-y-2">
                  {items.map((it, i) => (
                    <li key={it.href} className="border-b border-line">
                      <a
                        href={it.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 py-4 display text-4xl"
                      >
                        <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                        {it.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}

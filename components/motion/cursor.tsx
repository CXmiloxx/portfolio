"use client"

import { useEffect, useRef } from "react"

import { gsap, hasFinePointer, prefersReducedMotion } from "./gsap"

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return
    document.documentElement.classList.add("has-cursor")
    const xd = gsap.quickTo(dot.current, "x", { duration: 0.08, ease: "power3" })
    const yd = gsap.quickTo(dot.current, "y", { duration: 0.08, ease: "power3" })
    const xr = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" })
    const yr = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" })
    gsap.set([dot.current, ring.current], { autoAlpha: 1 })
    const move = (e: PointerEvent) => {
      xd(e.clientX)
      yd(e.clientY)
      xr(e.clientX)
      yr(e.clientY)
    }
    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("a, button, [data-cursor]")
      const text = t?.dataset.cursor ?? ""
      label.current!.textContent = text
      gsap.to(ring.current, {
        scale: t ? (text ? 2.6 : 1.7) : 1,
        backgroundColor: text ? "var(--signal)" : "transparent",
        borderColor: t ? "var(--signal)" : "var(--ink)",
        duration: 0.35,
        ease: "power3.out",
      })
      gsap.to(dot.current, { scale: t ? 0 : 1, duration: 0.25 })
    }
    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("pointerover", over, { passive: true })
    return () => {
      document.documentElement.classList.remove("has-cursor")
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", over)
    }
  }, [])
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[95]">
      <div
        ref={ring}
        className="invisible absolute top-0 left-0 -mt-5 -ml-5 grid size-10 place-items-center rounded-full border border-ink"
      >
        <span ref={label} className="text-[0.3rem] font-bold tracking-wider text-on-signal uppercase" />
      </div>
      <div ref={dot} className="invisible absolute top-0 left-0 -mt-[3px] -ml-[3px] size-1.5 rounded-full bg-signal" />
    </div>
  )
}

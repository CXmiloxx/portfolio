"use client"

import { useRef, useState } from "react"

import { gsap, prefersReducedMotion, useGSAP } from "./gsap"
import { finishIntro } from "./intro"

export function Preloader({ lines, ready, skip, name }: { lines: string[]; ready: string; skip: string; name: string }) {
  const root = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline>(null)
  const [gone, setGone] = useState(false)

  useGSAP(
    () => {
      const seen = sessionStorage.getItem("intro-seen") === "1"
      if (seen || prefersReducedMotion()) {
        setGone(true)
        finishIntro()
        return
      }
      document.documentElement.style.overflow = "hidden"
      window.__lenis?.stop()
      const counter = { v: 0 }
      const num = root.current!.querySelector<HTMLElement>("[data-count]")!
      const rows = gsap.utils.toArray<HTMLElement>("[data-line]", root.current)
      const bar = root.current!.querySelector<HTMLElement>("[data-bar]")!

      const done = () => {
        sessionStorage.setItem("intro-seen", "1")
        document.documentElement.style.overflow = ""
        window.__lenis?.start()
        setGone(true)
      }

      const tl = gsap.timeline({ onComplete: done })
      tlRef.current = tl
      tl.to(counter, {
        v: 100,
        duration: 1.9,
        ease: "power2.inOut",
        onUpdate: () => {
          num.textContent = String(Math.round(counter.v)).padStart(3, "0")
        },
      })
        .to(bar, { scaleX: 1, duration: 1.9, ease: "power2.inOut" }, 0)
        .from(rows, { autoAlpha: 0, x: -12, duration: 0.3, stagger: 0.32, ease: "power2.out" }, 0.1)
        .to("[data-ready]", { autoAlpha: 1, duration: 0.2 }, ">-0.1")
        .add(finishIntro, "+=0.15")
        .to(root.current, { yPercent: -100, duration: 1, ease: "expo.inOut" }, "<")
    },
    { scope: root },
  )

  if (gone) return null
  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-paper p-5 md:p-10"
      role="status"
      aria-label={name}
    >
      <div className="flex items-start justify-between eyebrow text-ink-3">
        <span>{name}</span>
        <button
          type="button"
          className="eyebrow text-ink-2 hover:text-ink"
          onClick={() => {
            tlRef.current?.progress(1)
          }}
        >
          {skip} →
        </button>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <ul className="space-y-1.5 font-mono text-sm text-ink-2">
          {lines.map((l) => (
            <li key={l} data-line className="flex gap-3">
              <span className="text-signal">✓</span>
              {l}
            </li>
          ))}
          <li data-ready className="invisible flex items-center gap-3 text-ink">
            <span className="live-dot size-2 rounded-full bg-signal" />
            {ready}
            <span className="caret">_</span>
          </li>
        </ul>
        <p data-count className="display text-right text-[clamp(6rem,22vw,20rem)] leading-[0.8] tabular-nums">
          000
        </p>
      </div>
      <div className="h-px w-full bg-line">
        <div data-bar className="h-px origin-left scale-x-0 bg-signal" />
      </div>
    </div>
  )
}

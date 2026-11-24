"use client"

import { useRef, type ReactNode } from "react"

import { EASE_OUT, gsap, prefersReducedMotion, SplitText, useGSAP } from "./gsap"
import { onIntroDone } from "./intro"

/**
 * Hero entrance after the boot intro:
 *  [data-split-lines]  heading revealed line by line
 *  [data-hero-fade]    fades up in order
 *  [data-hero-line]    rule that grows from the left
 */
export function HeroIntro({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const el = root.current!
      const lines = gsap.utils
        .toArray<HTMLElement>("[data-split-lines]", el)
        .flatMap((t) => new SplitText(t, { type: "lines", mask: "lines", linesClass: "block" }).lines)
      const fades = gsap.utils.toArray<HTMLElement>("[data-hero-fade]", el)
      const rules = gsap.utils.toArray<HTMLElement>("[data-hero-line]", el)
      gsap.set(lines, { yPercent: 110 })
      gsap.set(fades, { autoAlpha: 0, y: 24 })
      gsap.set(rules, { scaleX: 0 })
      const play = () => {
        gsap
          .timeline()
          .to(fades.slice(0, 1), { autoAlpha: 1, y: 0, duration: 0.8, ease: EASE_OUT })
          .to(lines, { yPercent: 0, duration: 1.2, stagger: 0.1, ease: EASE_OUT }, 0.1)
          .to(rules, { scaleX: 1, duration: 1.2, ease: "expo.inOut" }, 0.3)
          .to(fades.slice(1), { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease: EASE_OUT }, 0.5)
      }
      return onIntroDone(play)
    },
    { scope: root },
  )
  return <div ref={root}>{children}</div>
}

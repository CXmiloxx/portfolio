"use client"

import { useRef, type ReactNode } from "react"

import { EASE_OUT, gsap, prefersReducedMotion, useGSAP } from "./gsap"

/**
 * Pins its content while the four phases assemble:
 *  [data-slab]        3D plates that drop into the stack one by one
 *  [data-phase]       list items that light up with their plate
 *  [data-stack]       the stack, which turns once complete
 * Desktop only; on small screens the plates simply rise into view.
 */
export function ProcessPin({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const mm = gsap.matchMedia()
      mm.add("(min-width: 1024px)", () => {
        const slabs = gsap.utils.toArray<HTMLElement>("[data-slab]", root.current)
        const phases = gsap.utils.toArray<HTMLElement>("[data-phase]", root.current)
        gsap.set(slabs, { y: (i) => 260 + i * 40, autoAlpha: 0 })
        gsap.set(phases, { autoAlpha: 0.25 })
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: "top top", end: "+=200%", scrub: 0.6, pin: true },
        })
        slabs.forEach((slab, i) => {
          tl.to(slab, { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out" }, i)
          tl.to(phases[i], { autoAlpha: 1, duration: 0.4 }, i)
          if (i > 0) tl.to(phases[i - 1], { autoAlpha: 0.5, duration: 0.4 }, i)
        })
        tl.to(phases, { autoAlpha: 1, duration: 0.5 }, slabs.length)
        tl.to("[data-stack]", { rotateZ: -32, duration: 1, ease: "power2.inOut" }, slabs.length)
      })
      mm.add("(max-width: 1023px)", () => {
        gsap.from("[data-slab]", {
          y: 60,
          autoAlpha: 0,
          stagger: 0.15,
          duration: 1,
          ease: EASE_OUT,
          scrollTrigger: { trigger: "[data-stack]", start: "top 80%", once: true },
        })
      })
      return () => mm.revert()
    },
    { scope: root },
  )
  return (
    <div ref={root} className="relative">
      {children}
    </div>
  )
}

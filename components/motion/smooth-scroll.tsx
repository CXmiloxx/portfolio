"use client"

import Lenis from "lenis"
import { useEffect } from "react"

import { gsap, prefersReducedMotion, ScrollTrigger } from "./gsap"

export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    // Anchor offset comes from html { scroll-padding-top }, which Lenis honours.
    const lenis = new Lenis({ lerp: 0.1, anchors: true, autoRaf: false })
    window.__lenis = lenis
    lenis.on("scroll", ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])
  return null
}

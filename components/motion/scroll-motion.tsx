"use client"

import { EASE_OUT, gsap, prefersReducedMotion, ScrollTrigger, SplitText, useGSAP } from "./gsap"
import { onIntroDone } from "./intro"

/**
 * One place for every scroll-driven effect, keyed by data attributes so the
 * sections stay Server Components:
 *  data-anim="up"       fade + rise when entering
 *  data-anim="lines"    heading split into masked lines
 *  data-anim="words"    words light up while scrolling (scrub)
 *  data-anim="diagram"  draws an architecture diagram
 *  data-anim="count"    counts up to data-to
 *  data-anim="draw-y"   vertical line drawn with scroll (scrub)
 *  data-anim="clip"     media that opens from a framed inset (scrub)
 *  data-anim="scale-x"  rule that grows from the left
 *  data-anim="parallax" moves at data-speed
 */
export function ScrollMotion() {
  useGSAP(() => {
    const rm = prefersReducedMotion()
    const q = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel)

    q<HTMLElement>('[data-anim="diagram"]').forEach((el) => {
      if (rm) {
        el.dataset.on = "true"
        return
      }
      ScrollTrigger.create({ trigger: el, start: "top 80%", once: true, onEnter: () => (el.dataset.on = "true") })
    })
    q<HTMLElement>('[data-anim="count"]').forEach((el) => {
      const to = Number(el.dataset.to)
      const fmt = new Intl.NumberFormat(el.dataset.locale || "es-CO")
      const suffix = el.dataset.suffix ?? ""
      if (rm || !Number.isFinite(to)) return
      const o = { v: 0 }
      el.textContent = fmt.format(0) + suffix
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(o, {
            v: to,
            duration: 2,
            ease: "power3.out",
            onUpdate: () => (el.textContent = fmt.format(Math.round(o.v)) + suffix),
          }),
      })
    })
    if (rm) return

    const start = () => {
      ScrollTrigger.batch(q('[data-anim="up"]'), {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(els, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08, ease: EASE_OUT }),
      })

      q<HTMLElement>('[data-anim="lines"]').forEach((el) => {
        const split = new SplitText(el, { type: "lines", mask: "lines", linesClass: "block" })
        gsap.from(split.lines, {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.1,
          ease: EASE_OUT,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
      })

      q<HTMLElement>('[data-anim="words"]').forEach((el) => {
        const split = new SplitText(el, { type: "words" })
        gsap.fromTo(
          split.words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 45%", scrub: true },
          },
        )
      })

      q<HTMLElement>('[data-anim="draw-y"]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: { trigger: el.parentElement, start: "top 70%", end: "bottom 70%", scrub: true },
          },
        )
      })

      q<HTMLElement>('[data-anim="scale-x"]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "expo.inOut",
            transformOrigin: "left",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        )
      })

      q<HTMLElement>('[data-anim="clip"]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(12% 18% 12% 18% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 85%", end: "center 55%", scrub: true },
          },
        )
      })

      q<HTMLElement>('[data-anim="parallax"]').forEach((el) => {
        const speed = Number(el.dataset.speed ?? 0.2)
        gsap.to(el, {
          yPercent: -100 * speed,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        })
      })

      ScrollTrigger.refresh()
    }
    return onIntroDone(start)
  })
  return null
}

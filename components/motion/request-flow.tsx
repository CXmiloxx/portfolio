"use client"

import { useRef } from "react"

import { gsap, prefersReducedMotion, useGSAP } from "./gsap"

interface Step {
  node: string
  text: string
}

/**
 * Explains "full stack" without jargon: a request travels from the screen to the
 * API and the database and comes back. Each step lights up as the packet reaches it.
 */
export function RequestFlow({ title, caption, steps }: { title: string; caption: string; steps: Step[] }) {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const el = root.current!
      const items = gsap.utils.toArray<HTMLElement>("[data-step]", el)
      const markers = gsap.utils.toArray<HTMLElement>("[data-marker]", el)
      const packet = el.querySelector<HTMLElement>("[data-packet]")!
      const rail = el.querySelector<HTMLElement>("[data-rail-fill]")!

      if (prefersReducedMotion()) {
        items.forEach((i) => (i.dataset.active = "true"))
        gsap.set(packet, { autoAlpha: 0 })
        gsap.set(rail, { scaleY: 1 })
        return
      }

      const list = el.querySelector<HTMLElement>("ol")!
      const yOf = (i: number) => {
        const m = markers[i].getBoundingClientRect()
        return m.top - list.getBoundingClientRect().top + m.height / 2
      }
      const activate = (n: number) => items.forEach((it, i) => (it.dataset.active = String(i <= n)))

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, defaults: { ease: "power2.inOut" } })
      tl.set(packet, { y: () => yOf(0), autoAlpha: 0 })
        .set(rail, { scaleY: 0 })
        .call(() => activate(-1))
        .to(packet, { autoAlpha: 1, duration: 0.3 })
        .call(() => activate(0))
      for (let i = 1; i < steps.length; i++) {
        tl.to({}, { duration: 1.1 })
          .to(packet, { y: () => yOf(i), duration: 0.7 }, ">")
          .to(rail, { scaleY: i / (steps.length - 1), duration: 0.7 }, "<")
          .call(() => activate(i))
      }
      tl.to({}, { duration: 1.6 }).to(packet, { autoAlpha: 0, duration: 0.3 })
    },
    { scope: root },
  )

  return (
    <figure ref={root} className="relative border border-line bg-paper-2/85 p-6 backdrop-blur-sm md:p-8" aria-label={title}>
      <figcaption className="flex items-center justify-between gap-4 eyebrow text-ink-3">
        <span>{title}</span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-signal" />
        </span>
      </figcaption>

      <ol className="relative mt-7">
        <span className="absolute top-3 bottom-3 left-[13px] w-px bg-line" aria-hidden />
        <span data-rail-fill className="absolute top-3 bottom-3 left-[13px] w-px origin-top scale-y-0 bg-signal" aria-hidden />
        <span
          data-packet
          className="absolute top-0 left-[8px] z-10 -mt-[6px] size-3 rounded-full bg-signal shadow-[0_0_0_6px_color-mix(in_oklab,var(--signal)_25%,transparent)]"
          aria-hidden
        />
        {steps.map((s, i) => (
          <li
            key={s.node}
            data-step
            data-active="true"
            className="group relative grid grid-cols-[28px_1fr] gap-4 pb-6 last:pb-0"
          >
            <span
              data-marker
              className="relative z-[1] mt-0.5 grid size-[27px] place-items-center border border-line bg-paper font-mono text-[0.65rem] text-ink-3 transition-colors duration-500 group-data-[active=true]:border-signal group-data-[active=true]:text-signal"
            >
              {i + 1}
            </span>
            <div className="opacity-40 transition-opacity duration-500 group-data-[active=true]:opacity-100">
              <p className="display-narrow text-xl leading-tight">{s.node}</p>
              <p className="mt-1 text-[0.95rem] leading-snug text-ink-2">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-7 border-t border-line pt-5 display-narrow text-lg text-signal-ink">{caption}</p>
    </figure>
  )
}

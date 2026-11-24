import { BulletList } from "@/components/ui/bullet-list"
import { Eyebrow } from "@/components/ui/eyebrow"
import { SectionTitle } from "@/components/ui/section-title"
import { getEducation, getJobs } from "@/lib/content"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

/** Timeline whose signal line draws as you scroll. */
export function Experience({ d }: { d: Dictionary }) {
  const e = d.experience
  return (
    <section id={SECTION.experience} aria-labelledby="exp-title" className="wrap pt-20 md:pt-32">
      <Eyebrow className="text-ink-3">{e.eyebrow}</Eyebrow>
      <SectionTitle id="exp-title" className="mt-8 max-w-[16ch]">
        {e.title}
      </SectionTitle>

      <ol className="relative mt-16 md:mt-24">
        <span className="absolute top-0 left-[5px] h-full w-px bg-line" aria-hidden />
        <span data-anim="draw-y" className="absolute top-0 left-[5px] h-full w-px origin-top bg-signal" aria-hidden />
        {getJobs(d).map((j) => (
          <li key={j.id} className="relative grid gap-6 pb-12 pl-10 md:grid-cols-12 md:gap-10 md:pl-16">
            <span
              className={`absolute top-1.5 left-0 size-[11px] rounded-full border-2 ${
                j.current ? "live-dot border-signal bg-signal" : "border-ink-3 bg-paper"
              }`}
              aria-hidden
            />
            <div data-anim="up" className="md:col-span-3">
              <p className="font-mono text-sm text-ink">{j.period}</p>
              <p className="mt-2 eyebrow text-ink-3">
                {j.kind}
                {j.current ? <span className="text-signal-ink"> · {e.current}</span> : null}
              </p>
            </div>
            <div data-anim="up" className="md:col-span-4">
              <h3 className="display-narrow text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.02]">{j.role}</h3>
              <p className="mt-2 text-ink-2">{j.org}</p>
            </div>
            <div data-anim="up" className="md:col-span-5">
              <p className="leading-relaxed text-ink-2">{j.summary}</p>
              <BulletList items={j.highlights} className="mt-5" />
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {getEducation(d).map((ed) => (
          <div key={ed.id} data-anim="up" className="bg-paper p-8 md:p-10">
            <p className="eyebrow text-ink-3">
              {e.educationTitle} · {ed.period}
            </p>
            <h3 className="display-narrow mt-5 text-2xl leading-tight md:text-3xl">{ed.title}</h3>
            <p className="mt-2 text-ink-2">{ed.org}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

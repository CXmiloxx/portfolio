import { Eyebrow } from "@/components/ui/eyebrow"
import { Marquee } from "@/components/ui/marquee"
import { SectionTitle } from "@/components/ui/section-title"
import { getSkillGroups } from "@/lib/content"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

export function Skills({ d }: { d: Dictionary }) {
  const s = d.skills
  const groups = getSkillGroups(d)
  const all = groups.flatMap((g) => g.daily)
  return (
    <section id={SECTION.skills} aria-labelledby="skills-title" className="pt-20 md:pt-32">
      <div className="wrap">
        <Eyebrow className="text-ink-3">{s.eyebrow}</Eyebrow>
        <SectionTitle id="skills-title" size="md" className="mt-8 max-w-[18ch]">
          {s.title}
        </SectionTitle>
      </div>
      <div className="mt-12 md:mt-16" aria-hidden>
        <Marquee items={all} className="display outline-text text-[clamp(2.2rem,5.5vw,5rem)]" speed={60} />
      </div>
      <div className="wrap mt-12 md:mt-16">
        <div className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-5">
          {groups.map((g) => (
            <div key={g.id} data-anim="up" className="bg-paper p-5 last:col-span-2 md:p-6 lg:last:col-span-1">
              <h3 className="display-narrow text-xl">{g.name}</h3>
              <p className="mt-1 text-sm text-ink-3">{g.plain}</p>
              <ul className="mt-5 space-y-1.5">
                {g.daily.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[0.95rem]">
                    <span className="size-1 bg-signal" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 hidden eyebrow text-ink-3 md:block">{s.alsoLabel}</p>
              <p className="mt-2 hidden text-sm leading-relaxed text-ink-2 md:block">{g.also.join(" · ")}</p>
            </div>
          ))}
        </div>
        <div data-anim="up" className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-2 text-ink-2">
          <span className="eyebrow text-ink-3">{s.languagesTitle}</span>
          {s.languages.map((l) => (
            <span key={l.name}>
              <strong className="font-semibold text-ink">{l.name}</strong> — {l.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FeaturedProject } from "@/components/open-source/featured-project"
import { SkillShowcase } from "@/components/open-source/skill-showcase"
import { getOpenSource } from "@/lib/content"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

export function OpenSource({ d }: { d: Dictionary }) {
  const o = d.openSource
  const all = getOpenSource(d)
  const featured = all.find((p) => p.featured) ?? all[0]
  const rest = all.filter((p) => p !== featured)
  return (
    <section id={SECTION.openSource} aria-labelledby="oss-title" className="mt-20 bg-invert-bg py-20 text-invert-fg md:mt-32 md:py-28">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow flex items-center gap-3 text-invert-muted">
              <span className="size-2 bg-signal" aria-hidden />
              {o.eyebrow}
            </p>
            <h2 id="oss-title" data-anim="lines" className="display mt-6 text-[clamp(2rem,5.4vw,5.2rem)]">
              {o.title}
            </h2>
          </div>
          <p data-anim="up" className="text-lg leading-relaxed text-invert-muted md:col-span-5">
            {o.intro}
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          <FeaturedProject project={featured} d={d} />
        </div>

        {rest.map((p) => (
          <div key={p.id} className="mt-16 border-t border-invert-line pt-16 md:mt-24 md:pt-24">
            <SkillShowcase project={p} d={d} />
          </div>
        ))}
      </div>
    </section>
  )
}

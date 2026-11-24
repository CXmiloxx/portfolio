import { CaseStudy } from "@/components/projects/case-study"
import { ProjectIndex } from "@/components/projects/project-index"
import { LayerLegend } from "@/components/ui/layer-meter"
import { Marquee } from "@/components/ui/marquee"
import { SectionTitle } from "@/components/ui/section-title"
import { getCaseStudies, getProjects } from "@/lib/content"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

export function Work({ d }: { d: Dictionary }) {
  const w = d.work
  const studies = getCaseStudies(d)
  return (
    <section id={SECTION.work} aria-labelledby="work-title" className="pt-24 md:pt-32">
      <Marquee
        items={Array(4).fill(w.eyebrow.toUpperCase())}
        className="display -rotate-1 bg-signal py-3 text-[clamp(2rem,5vw,4.5rem)] text-on-signal"
        speed={30}
      />
      <div className="wrap pt-20 md:pt-28">
        <div className="grid gap-8 md:grid-cols-12">
          <SectionTitle id="work-title" size="xl" className="md:col-span-8">
            {w.title}
          </SectionTitle>
          <div className="space-y-5 md:col-span-4 md:self-end">
            <p data-anim="up" className="text-lg text-ink-2">
              {w.intro}
            </p>
            <div data-anim="up">
              <LayerLegend legend={w.layerLegend} />
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          {studies.map((study, i) => (
            <CaseStudy key={study.id} study={study} position={i + 1} total={studies.length} copy={w} locale={d.locale} />
          ))}
        </div>

        <div className="border-t border-line pt-16 md:pt-24">
          <SectionTitle as="h3" size="sm">
            {w.moreTitle}
          </SectionTitle>
          <ProjectIndex projects={getProjects(d)} copy={w} />
          <p className="mt-8 text-sm text-ink-3">{w.privacy}</p>
        </div>
      </div>
    </section>
  )
}

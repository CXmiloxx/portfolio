import { BulletList } from "@/components/ui/bullet-list"
import { Chip } from "@/components/ui/chip"
import { LayerMeter } from "@/components/ui/layer-meter"
import { SectionTitle } from "@/components/ui/section-title"
import { StatusTag } from "@/components/ui/status-tag"
import { pad2 } from "@/lib/format"
import type { WorkCopy } from "@/types/dictionary"
import type { Locale } from "@/types/i18n"
import type { CaseStudy as CaseStudyModel } from "@/types/project"

import { ArchitectureDiagram } from "./architecture-diagram"
import { DiagramLegend } from "./diagram-legend"

interface Props {
  study: CaseStudyModel
  position: number
  total: number
  copy: WorkCopy
  locale: Locale
}

/**
 * One project, two readings: the plain explanation and the system map are always
 * visible; the technical breakdown opens on demand so the page stays short.
 */
export function CaseStudy({ study, position, total, copy, locale }: Props) {
  const flipped = position % 2 === 0
  const { labels } = copy
  return (
    <article aria-labelledby={`case-${study.id}`} className="grid gap-10 border-t border-line py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-16">
      <div className={`lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}>
        <div data-anim="up" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink-2">
          <span className="font-mono text-sm">
            <span className="text-signal">{pad2(position)}</span> / {pad2(total)}
          </span>
          <StatusTag status={study.status} label={copy.status[study.status]} />
          <span className="eyebrow text-ink-3">{study.year}</span>
        </div>

        <SectionTitle id={`case-${study.id}`} as="h3" size="lg" className="mt-6">
          {study.title}
        </SectionTitle>
        <p data-anim="up" className="mt-3 eyebrow text-ink-3">
          {study.kicker}
        </p>

        <div data-anim="up" className="mt-7 border-l-2 border-signal pl-5">
          <p className="eyebrow text-signal-ink">{labels.plain}</p>
          <p className="display-narrow mt-3 text-[clamp(1.3rem,2vw,1.75rem)] leading-snug">{study.plain}</p>
        </div>

        <details data-anim="up" className="group mt-8 border-y border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 eyebrow text-ink-2 transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
            {labels.details}
            <span className="grid size-7 place-items-center rounded-full border border-line text-base transition-transform duration-300 group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <div className="space-y-6 pb-6">
            <div>
              <p className="eyebrow text-ink-3">{labels.built}</p>
              <BulletList items={study.built} className="mt-3" />
            </div>
            <div>
              <p className="eyebrow text-ink-3">{labels.architecture}</p>
              <p className="mt-3 leading-relaxed text-ink-2">{study.architecture}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <LayerMeter layers={study.layers} legend={copy.layerLegend} label={labels.layers} />
              <div className="flex flex-wrap gap-1.5">
                {study.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>

      <div className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
        <div className="dotgrid border border-line bg-paper-2 p-4 md:p-7">
          <p className="mb-5 eyebrow text-ink-3">{labels.diagram}</p>
          <ArchitectureDiagram id={study.id} locale={locale} />
          <div className="mt-5 border-t border-line pt-4">
            <DiagramLegend labels={copy.nodeLegend} />
          </div>
        </div>
      </div>
    </article>
  )
}

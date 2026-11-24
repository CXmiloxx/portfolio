import { ArrowUpRight } from "@/components/ui/icons"
import type { Dictionary } from "@/types/dictionary"
import type { OpenSourceProject } from "@/types/open-source"

import { InlineCode } from "./inline-code"
import { InstallCommand } from "./install-command"
import { NpmStats } from "./npm-stats"

/** Main open source project: demo video on one side, what it is and how to get it on the other. */
export function FeaturedProject({ project, d }: { project: OpenSourceProject; d: Dictionary }) {
  const o = d.openSource
  return (
    <article aria-labelledby="oss-featured" className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <figure data-anim="up" className="min-w-0 lg:col-span-7" data-cursor="Play">
        <div className="overflow-hidden rounded-2xl border border-invert-line bg-black">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden>
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <video
            className="aspect-video w-full"
            controls
            preload="none"
            playsInline
            poster="/media/tourwright-poster.jpg"
            aria-label={o.watch}
          >
            <source src="/media/tourwright-demo.mp4" type="video/mp4" />
          </video>
        </div>
        <figcaption className="mt-3 font-mono text-[0.72rem] text-invert-muted">▶ {o.watch} · 77 s</figcaption>
      </figure>

      <div className="min-w-0 lg:col-span-5">
        <p data-anim="up" className="eyebrow [color:var(--signal)]">
          {o.featuredLabel}
        </p>
        <h3 id="oss-featured" data-anim="up" className="display mt-3 text-[clamp(2.6rem,5vw,4.5rem)]">
          {project.name}
        </h3>
        <p data-anim="up" className="display-narrow mt-3 text-2xl leading-tight">
          {project.tagline}
        </p>
        <p data-anim="up" className="mt-5 leading-relaxed text-invert-muted">
          {project.description}
        </p>
        <ul data-anim="up" className="mt-6 space-y-3">
          {project.points.map((p) => (
            <li key={p} className="flex gap-3 leading-snug">
              <span className="mt-[0.45em] size-1.5 shrink-0 bg-signal" aria-hidden />
              <span>
                <InlineCode text={p} />
              </span>
            </li>
          ))}
        </ul>
        <div data-anim="up" className="mt-8 border-t border-invert-line pt-6">
          <NpmStats locale={d.locale} downloadsLabel={o.downloads} versionLabel={o.latest} />
        </div>
        <div data-anim="up" className="mt-8 space-y-4">
          {project.install ? <InstallCommand command={project.install} copy={d.site.copy.copy} copied={d.site.copy.copied} /> : null}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-invert-fg px-5 text-sm font-semibold text-invert-bg"
            >
              GitHub <ArrowUpRight className="size-3" />
            </a>
            {project.site ? (
              <a
                href={project.site}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-invert-line px-5 text-sm font-semibold transition-colors hover:border-invert-fg"
              >
                {o.site} <ArrowUpRight className="size-3" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

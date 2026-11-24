import { ArrowUpRight } from "@/components/ui/icons"
import { getLatestRelease } from "@/lib/github"
import type { Dictionary } from "@/types/dictionary"
import type { OpenSourceProject } from "@/types/open-source"

import { InstallCommand } from "./install-command"

function Terminal({ label, text, tone }: { label: string; text: string; tone: "bad" | "good" }) {
  return (
    <figure className={`overflow-hidden rounded-xl border ${tone === "good" ? "border-[color:var(--signal)]" : "border-invert-line"}`}>
      <figcaption className="flex items-center justify-between gap-3 border-b border-invert-line px-4 py-2.5 eyebrow text-invert-muted">
        <span>{label}</span>
        <span aria-hidden className={tone === "good" ? "[color:var(--signal)]" : ""}>
          {tone === "good" ? "✓" : "✕"}
        </span>
      </figcaption>
      <pre className={`overflow-x-auto px-4 py-4 font-mono text-[0.76rem] leading-relaxed break-words whitespace-pre-wrap md:whitespace-pre ${tone === "bad" ? "opacity-55" : ""}`}>
        {text}
      </pre>
    </figure>
  )
}

/** The agent skill: what it does, and a before/after commit taken from its README. */
export async function SkillShowcase({ project, d }: { project: OpenSourceProject; d: Dictionary }) {
  const o = d.openSource
  const repoPath = project.repo.replace("https://github.com/", "")
  const release = await getLatestRelease(repoPath)
  return (
    <article aria-labelledby={`oss-${project.id}`} className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="min-w-0 lg:col-span-5">
        <p data-anim="up" className="eyebrow flex flex-wrap items-center gap-3 text-invert-muted">
          <span>{o.skillLabel}</span>
          {release ? <span className="rounded-full border border-invert-line px-2.5 py-0.5">{release}</span> : null}
        </p>
        <h3 id={`oss-${project.id}`} data-anim="up" className="display mt-3 text-[clamp(2.2rem,4.4vw,4rem)] break-words">
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
              {p}
            </li>
          ))}
        </ul>
        <div data-anim="up" className="mt-8 space-y-4">
          {project.install ? <InstallCommand command={project.install} copy={d.site.copy.copy} copied={d.site.copy.copied} /> : null}
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-invert-fg px-5 text-sm font-semibold text-invert-bg"
          >
            GitHub <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>

      {project.demo ? (
        <div data-anim="up" className="min-w-0 space-y-4 lg:col-span-7 lg:self-center">
          <Terminal label={project.demo.beforeLabel} text={project.demo.before} tone="bad" />
          <Terminal label={project.demo.afterLabel} text={project.demo.after} tone="good" />
          <p className="font-mono text-[0.72rem] text-invert-muted">{o.demoSource}</p>
        </div>
      ) : null}
    </article>
  )
}

import { StatusTag } from "@/components/ui/status-tag"
import type { WorkCopy } from "@/types/dictionary"
import type { Project } from "@/types/project"

/** Compact list of other projects; each row fills with the signal on hover. */
export function ProjectIndex({ projects, copy }: { projects: Project[]; copy: WorkCopy }) {
  return (
    <ul className="mt-10 border-t border-ink-3">
      {projects.map((p) => (
        <li key={p.id} data-anim="up" className="group relative overflow-hidden border-b border-line">
          <span
            className="absolute inset-0 origin-bottom scale-y-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
            aria-hidden
          />
          <div className="relative grid gap-2 py-5 md:gap-3 md:py-6 transition-colors duration-300 group-hover:text-on-signal md:grid-cols-[5rem_1fr_minmax(0,24rem)_9rem] md:items-center md:gap-8">
            <span className="font-mono text-sm text-ink-3 group-hover:text-on-signal">{p.year}</span>
            <div>
              <h4 className="display-narrow text-[clamp(1.6rem,2.8vw,2.6rem)] leading-none transition-transform duration-500 group-hover:translate-x-3">
                {p.title}
              </h4>
              <p className="mt-2 font-mono text-[0.72rem] text-ink-3 group-hover:text-on-signal">{p.stack.join(" · ")}</p>
            </div>
            <p className="text-sm leading-relaxed text-ink-2 group-hover:text-on-signal">{p.plain}</p>
            <span className="text-ink-2 group-hover:text-on-signal md:justify-self-end">
              <StatusTag status={p.status} label={copy.status[p.status]} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

import { Eyebrow } from "@/components/ui/eyebrow"
import { SectionTitle } from "@/components/ui/section-title"
import { pad2 } from "@/lib/format"
import type { Dictionary } from "@/types/dictionary"

/** How I work, including how I use AI (the highlighted card). */
export function Principles({ d }: { d: Dictionary }) {
  const p = d.principles
  return (
    <section aria-labelledby="principles-title" className="wrap pt-20 md:pt-32">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Eyebrow className="text-ink-3">{p.eyebrow}</Eyebrow>
          <SectionTitle id="principles-title" size="md" className="mt-6">
            {p.title}
          </SectionTitle>
        </div>
        <p data-anim="up" className="text-ink-2 md:col-span-4">
          {p.intro}
        </p>
      </div>
      <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((item, i) => (
          <li
            key={item.title}
            data-anim="up"
            className={`group flex flex-col p-7 transition-colors duration-500 ${
              item.highlight ? "bg-signal text-on-signal" : "bg-paper hover:bg-paper-2"
            }`}
          >
            <span className={`display text-5xl ${item.highlight ? "" : "outline-text group-hover:[-webkit-text-stroke-color:var(--signal)]"}`}>
              {pad2(i + 1)}
            </span>
            <h3 className="display-narrow mt-8 text-2xl leading-tight">{item.title}</h3>
            <p className={`mt-3 leading-relaxed ${item.highlight ? "" : "text-ink-2"}`}>{item.body}</p>
            {item.tech ? (
              <p className={`mt-auto pt-6 font-mono text-[0.72rem] ${item.highlight ? "opacity-80" : "text-ink-3"}`}>{item.tech}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  )
}

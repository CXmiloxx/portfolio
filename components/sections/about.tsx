import { ProcessPin } from "@/components/motion/process-pin"
import { Eyebrow } from "@/components/ui/eyebrow"
import { LiveDot } from "@/components/ui/live-dot"
import { SectionTitle } from "@/components/ui/section-title"
import { pad2 } from "@/lib/format"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

/** What I do (from idea to running system) and who I am. */
export function About({ d }: { d: Dictionary }) {
  const a = d.about
  return (
    <section id={SECTION.about} aria-labelledby="about-title" className="wrap pt-20 md:pt-32">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow className="text-ink-3">{a.eyebrow}</Eyebrow>
          <SectionTitle id="about-title" size="lg" className="mt-8">
            {a.title}
          </SectionTitle>
        </div>
        <p data-anim="up" className="text-lg leading-relaxed text-ink-2 lg:col-span-4">
          {a.intro}
        </p>
      </div>

      <ProcessPin>
        <div className="grid min-h-[100svh] items-center gap-12 py-16 lg:grid-cols-12">
          <ol className="space-y-4 lg:col-span-5">
            {a.process.map((step, i) => (
              <li key={step.title} data-phase className="grid grid-cols-[2.75rem_1fr] gap-3 border-t border-line pt-5">
                <span className="grid size-9 place-items-center border border-signal font-mono text-xs text-signal">{pad2(i + 1)}</span>
                <div>
                  <h3 className="display-narrow text-2xl leading-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{step.body}</p>
                  <p className="mt-2 font-mono text-[0.72rem] text-ink-3">{step.tech}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative py-6 lg:col-span-7" style={{ perspective: "1600px" }} aria-hidden>
            <div
              data-stack
              className="relative mx-auto flex max-w-[30rem] flex-col-reverse"
              style={{ transform: "rotateX(56deg) rotateZ(-40deg)", transformStyle: "preserve-3d" }}
            >
              {a.process.map((step, i) => (
                <div
                  key={step.title}
                  data-slab
                  className={`relative -mt-10 h-32 border first:mt-0 md:h-44 ${
                    i === a.process.length - 1 ? "border-signal bg-signal text-on-signal" : "dotgrid border-ink-3 bg-paper-2 text-ink"
                  }`}
                  style={{ transform: `translateZ(${i * 52}px)`, boxShadow: "0 50px 60px -30px rgb(0 0 0 / 0.6)" }}
                >
                  <span className="display absolute bottom-4 left-5 text-2xl md:text-4xl">{step.title}</span>
                  <span className="absolute top-4 right-5 font-mono text-xs">{pad2(i + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProcessPin>

      <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p data-anim="up" className="eyebrow text-ink-3">
            {a.whoTitle}
          </p>
          <p data-anim="up" className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-2">
            {a.who}
          </p>
        </div>
        <aside className="lg:col-span-5 lg:col-start-8" aria-label={a.nowTitle}>
          <div data-anim="up" className="border border-line bg-paper-2">
            <p className="flex items-center justify-between border-b border-line px-6 py-4 eyebrow text-ink-3">
              <span className="flex items-center gap-2">
                <LiveDot />
                {a.nowTitle}
              </span>
              <span>2026</span>
            </p>
            <dl>
              {a.now.map((n, i) => (
                <div key={n.label} className={`grid grid-cols-[6.5rem_1fr] gap-4 px-6 py-5 ${i ? "border-t border-line" : ""}`}>
                  <dt className="eyebrow pt-1 text-signal-ink">{n.label}</dt>
                  <dd>
                    <p className="display-narrow text-xl leading-tight">{n.value}</p>
                    <p className="mt-1 text-sm text-ink-3">{n.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}

import Link from "next/link"

import { HeroIntro } from "@/components/motion/hero-intro"
import { LocalClock } from "@/components/motion/local-clock"
import { Magnetic } from "@/components/motion/magnetic"
import { NetworkField } from "@/components/motion/network-field"
import { RequestFlow } from "@/components/motion/request-flow"
import { ArrowDown, ArrowUpRight } from "@/components/ui/icons"
import { LiveDot } from "@/components/ui/live-dot"
import { SocialRow } from "@/components/ui/social-links"
import { metrics } from "@/data/career"
import { profile } from "@/data/profile"
import { formatNumber } from "@/lib/format"
import { getMonthlyDownloads } from "@/lib/npm"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

/** First screen: what I do in one sentence, who I am, proof, and how a system works. */
export async function Hero({ d }: { d: Dictionary }) {
  const { hero } = d
  const downloads = await getMonthlyDownloads()
  const facts = [
    { value: `${metrics.systemsInProduction}+`, label: hero.facts.systems },
    { value: "UTP", label: hero.facts.study },
    ...(downloads === null ? [] : [{ value: formatNumber(downloads, d.locale), label: hero.facts.downloads }]),
  ]

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <NetworkField />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper to-transparent" aria-hidden />

      <HeroIntro>
        <div className="wrap relative grid min-h-[100svh] items-center gap-12 pt-28 pb-16 lg:grid-cols-12 lg:gap-16 lg:pt-32">
          <div className="lg:col-span-7">
            <div data-hero-fade className="flex flex-wrap items-center gap-x-5 gap-y-2 eyebrow text-ink-2">
              <span className="flex items-center gap-2.5">
                <LiveDot className="size-2" />
                {profile.name} · {hero.role}
              </span>
              <span className="text-ink-3">
                {hero.status} · <LocalClock locale={d.locale} />
              </span>
            </div>

            <h1 id="hero-title" data-split-lines className="display mt-8 text-[clamp(2.5rem,5.4vw,5.6rem)] leading-[0.95]">
              {hero.headline} <span className="text-signal">{hero.headlineEm}</span>
            </h1>

            <div data-hero-line className="mt-8 h-px origin-left bg-line" aria-hidden />

            <p data-hero-fade className="mt-8 max-w-[56ch] text-lg leading-relaxed text-pretty text-ink-2">
              {hero.intro}
            </p>

            <dl data-hero-fade className="mt-10 grid max-w-2xl grid-cols-3 gap-6">
              {facts.map((f) => (
                <div key={f.label} className="flex flex-col gap-2 border-l border-line pl-4">
                  <dt className="order-last text-sm leading-snug text-ink-3">{f.label}</dt>
                  <dd className="display text-[clamp(1.6rem,2.6vw,2.4rem)] tabular-nums">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`#${SECTION.work}`}
                  data-cursor="↓"
                  className="inline-flex h-12 items-center gap-3 rounded-full bg-signal px-6 font-semibold text-on-signal"
                >
                  {hero.cta}
                  <ArrowDown className="size-4" />
                </a>
              </Magnetic>
              <Link
                href={`/${d.locale}/cv`}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 font-semibold transition-colors hover:border-ink"
              >
                {hero.cv}
                <ArrowUpRight className="size-3.5" />
              </Link>
              <SocialRow label={d.site.social.label} className="sm:ml-3" />
            </div>
          </div>

          <div data-hero-fade className="lg:col-span-5">
            <RequestFlow title={hero.flow.title} caption={hero.flow.caption} steps={hero.flow.steps} />
          </div>
        </div>
      </HeroIntro>
    </section>
  )
}

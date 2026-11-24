import { LogoMark } from "@/components/ui/logo"
import { profile } from "@/data/profile"
import { getCaseStudies, getEducation, getJobs, getOpenSource, getSkillGroups } from "@/lib/content"
import { siteHost, siteUrl } from "@/lib/site"
import type { Dictionary } from "@/types/dictionary"

import { CvHeading } from "./cv-heading"

/** A4 résumé. Uses the light "sheet" token scope so it prints the same in any theme. */
export function CvSheet({ d }: { d: Dictionary }) {
  const { cv } = d
  return (
    <main className="sheet mx-auto my-8 max-w-[210mm] bg-white px-[12mm] py-[12mm] shadow-2xl print:my-0 print:p-0 print:shadow-none">
      <header className="flex items-start justify-between gap-6 border-b-2 border-ink pb-5">
        <div>
          <h1 className="display text-[2.2rem]">{profile.name}</h1>
          <p className="mt-2 text-[1.05rem] font-medium">{d.hero.role}</p>
          <p className="mt-1 text-sm text-ink-2">{d.hero.status}</p>
        </div>
        <LogoMark className="h-10 w-auto shrink-0 text-ink" />
      </header>

      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.72rem] text-ink-2">
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>{profile.phone}</li>
        <li>{profile.location}</li>
        <li>
          <a href={profile.linkedin.url}>linkedin.com/in/camilo-guapacha</a>
        </li>
        <li>
          <a href={profile.github.url}>github.com/{profile.github.handle}</a>
        </li>
        <li>
          <a href={siteUrl()}>{siteHost()}</a>
        </li>
      </ul>

      <div className="mt-6 grid grid-cols-[1fr_15rem] gap-8 max-sm:grid-cols-1 print:grid-cols-[1fr_58mm]">
        <div className="space-y-6">
          <section className="print-avoid">
            <CvHeading>{cv.summaryTitle}</CvHeading>
            <p className="mt-2.5 text-[0.86rem] leading-relaxed text-ink-2">{cv.summary}</p>
          </section>

          <section className="print-avoid">
            <CvHeading>{cv.achievementsTitle}</CvHeading>
            <ul className="mt-2.5 space-y-1.5 text-[0.84rem] leading-snug">
              {cv.achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-[0.5em] h-px w-2.5 shrink-0 bg-signal" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <CvHeading>{cv.experienceTitle}</CvHeading>
            <ol className="mt-2.5 space-y-4">
              {getJobs(d).map((j) => (
                <li key={j.id} className="print-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-[1rem] font-semibold">{j.role}</h3>
                    <span className="font-mono text-[0.7rem] text-ink-3">{j.period}</span>
                  </div>
                  <p className="text-[0.8rem] text-ink-3">
                    {j.org} · {j.kind}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[0.82rem] leading-snug text-ink-2">
                    {j.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden>–</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <CvHeading>{cv.projectsTitle}</CvHeading>
            <ul className="mt-2.5 space-y-2.5">
              {getCaseStudies(d).map((c) => (
                <li key={c.id} className="print-avoid text-[0.82rem] leading-snug">
                  <p>
                    <strong className="font-semibold">{c.title}</strong>
                    <span className="text-ink-3"> — {c.kicker}</span>
                  </p>
                  <p className="text-ink-2">{c.plain}</p>
                  <p className="font-mono text-[0.68rem] text-ink-3">{c.stack.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="print-avoid">
            <CvHeading>{cv.skillsTitle}</CvHeading>
            <dl className="mt-2.5 space-y-2.5 text-[0.8rem]">
              {getSkillGroups(d).map((g) => (
                <div key={g.id}>
                  <dt className="font-semibold">{g.name}</dt>
                  <dd className="leading-snug text-ink-2">{[...g.daily, ...g.also.slice(0, 2)].join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="print-avoid">
            <CvHeading>{cv.openSourceTitle}</CvHeading>
            <ul className="mt-2.5 space-y-2 text-[0.8rem] leading-snug">
              {getOpenSource(d).map((p) => (
                <li key={p.id}>
                  <a href={p.repo} className="font-semibold">
                    {p.name}
                  </a>
                  <p className="text-ink-2">{p.tagline}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="print-avoid">
            <CvHeading>{cv.educationTitle}</CvHeading>
            <ul className="mt-2.5 space-y-2.5 text-[0.8rem] leading-snug">
              {getEducation(d).map((e) => (
                <li key={e.id}>
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-ink-2">{e.org}</p>
                  <p className="font-mono text-[0.68rem] text-ink-3">{e.period}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="print-avoid">
            <CvHeading>{cv.languagesTitle}</CvHeading>
            <ul className="mt-2.5 space-y-1 text-[0.8rem]">
              {d.skills.languages.map((x) => (
                <li key={x.name}>
                  <span className="font-semibold">{x.name}</span> <span className="text-ink-2">— {x.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  )
}

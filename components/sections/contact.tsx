import Link from "next/link"

import { CopyButton } from "@/components/interactive/copy-button"
import { Magnetic } from "@/components/motion/magnetic"
import { Eyebrow } from "@/components/ui/eyebrow"
import { ArrowUpRight } from "@/components/ui/icons"
import { externalLinkProps, SocialIcon, socialLinks } from "@/components/ui/social-links"
import { profile } from "@/data/profile"
import { SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

export function Contact({ d }: { d: Dictionary }) {
  const c = d.contact
  const channels = socialLinks.filter((s) => s.id !== "email" && s.id !== "npm")
  return (
    <section id={SECTION.contact} aria-labelledby="contact-title" className="relative mt-20 overflow-hidden md:mt-32">
      <div className="wrap pt-20 md:pt-28">
        <Eyebrow className="text-ink-3">{c.eyebrow}</Eyebrow>
        <h2 id="contact-title" data-anim="lines" className="display mt-6 text-[clamp(3.4rem,14.5vw,15rem)] leading-[0.84]">
          {c.big}
          <span className="text-signal">.</span>
        </h2>
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p data-anim="up" className="display-narrow text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.05]">
              {c.title}
            </p>
            <p data-anim="up" className="mt-5 max-w-[52ch] text-lg text-ink-2">
              {c.body}
            </p>
          </div>
          <div className="flex justify-start md:col-span-5 md:justify-end">
            <Magnetic strength={0.45}>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="@"
                className="grid size-40 place-items-center rounded-full bg-signal text-center font-semibold text-on-signal transition-transform duration-500 hover:scale-105 md:size-52"
              >
                <span>
                  {c.channels.email}
                  <ArrowUpRight className="mx-auto mt-2 size-5" />
                </span>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-y border-line py-6">
          <a href={`mailto:${profile.email}`} className="display-narrow draw text-[clamp(1.3rem,3.2vw,2.6rem)] break-all">
            {profile.email}
          </a>
          <CopyButton
            value={profile.email}
            label={d.site.copy.copy}
            done={d.site.copy.copied}
            className="h-10 rounded-full border border-line px-4 font-mono text-xs tracking-wider uppercase transition-colors hover:border-ink"
          />
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((ch) => (
            <li key={ch.id} className="border-b border-line lg:border-r">
              <a href={ch.href} {...externalLinkProps(ch.id)} className="group flex flex-col gap-2 py-6 lg:px-6">
                <span className="eyebrow flex items-center gap-2 text-ink-3">
                  <SocialIcon id={ch.id} className="size-3.5" />
                  {ch.label}
                </span>
                <span className="flex items-center justify-between gap-3 text-lg">
                  {ch.handle}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
                </span>
              </a>
            </li>
          ))}
          <li className="border-b border-line">
            <Link href={`/${d.locale}/cv`} className="group flex flex-col gap-2 py-6 lg:px-6">
              <span className="eyebrow text-ink-3">{c.channels.cv}</span>
              <span className="flex items-center justify-between gap-3 text-lg">
                PDF
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

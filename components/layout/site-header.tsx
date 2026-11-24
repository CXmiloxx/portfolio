import Link from "next/link"

import { MobileMenu } from "@/components/interactive/mobile-menu"
import { ThemeToggle } from "@/components/interactive/theme-toggle"
import { ArrowUpRight } from "@/components/ui/icons"
import { LogoMark } from "@/components/ui/logo"
import { profile } from "@/data/profile"
import { otherLocale } from "@/i18n/config"
import { pad2 } from "@/lib/format"
import { NAV_ORDER, SECTION } from "@/lib/sections"
import type { Dictionary } from "@/types/dictionary"

/** Fixed header. mix-blend-difference keeps it legible over dark and light sections. */
export function SiteHeader({ d }: { d: Dictionary }) {
  const other = otherLocale(d.locale)
  const { nav } = d.site
  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 text-[#f2efe8] mix-blend-difference">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href={`/${d.locale}`} className="flex items-center gap-3" aria-label={profile.name}>
          <LogoMark mono className="h-6 w-auto" />
          <span className="hidden eyebrow sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label={nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_ORDER.map((key, i) => (
              <li key={key}>
                <a href={`#${SECTION[key]}`} className="eyebrow inline-flex items-baseline gap-1.5">
                  <span className="text-[0.6rem] opacity-50">{pad2(i + 1)}</span>
                  <span className="draw">{nav[key]}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle
            light={d.site.theme.light}
            dark={d.site.theme.dark}
            className="grid size-9 place-items-center rounded-full border border-current transition-transform duration-500 hover:rotate-45"
          />
          <Link href={`/${other}`} hrefLang={other} className="eyebrow" aria-label={nav.switchTo} title={nav.switchTo}>
            {d.locale.toUpperCase()} <span className="opacity-40">/ {other.toUpperCase()}</span>
          </Link>
          <Link
            href={`/${d.locale}/cv`}
            className="hidden eyebrow h-9 items-center gap-2 rounded-full border border-current px-4 sm:inline-flex"
          >
            CV <ArrowUpRight className="size-3" />
          </Link>
          <MobileMenu
            openLabel={nav.menu}
            closeLabel={nav.close}
            items={[
              ...NAV_ORDER.map((key) => ({ href: `#${SECTION[key]}`, label: nav[key] })),
              { href: `/${d.locale}/cv`, label: "CV" },
            ]}
          />
        </div>
      </div>
    </header>
  )
}

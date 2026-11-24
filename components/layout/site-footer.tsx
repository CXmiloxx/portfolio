import { ArrowUpRight } from "@/components/ui/icons"
import { LogoMark } from "@/components/ui/logo"
import { SocialRow } from "@/components/ui/social-links"
import { profile } from "@/data/profile"
import type { Dictionary } from "@/types/dictionary"

export function SiteFooter({ d }: { d: Dictionary }) {
  return (
    <footer className="wrap pb-10">
      <div className="pt-12">
        <SocialRow label={d.site.social.label} />
      </div>
      <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-ink">
          <LogoMark className="h-5 w-auto" />
          <span className="text-ink-3">
            © 2026 {profile.name}. {d.site.footer.built}
          </span>
        </div>
        <a href={profile.sourceCode} target="_blank" rel="noreferrer" className="draw inline-flex items-center gap-2">
          {d.site.footer.source} <ArrowUpRight className="size-3" />
        </a>
      </div>
    </footer>
  )
}

import { externalLinkProps, SocialIcon, socialLinks } from "@/components/ui/social-links"

/** Vertical rail of social links, fixed on wide screens. */
export function SocialRail({ label }: { label: string }) {
  return (
    <nav
      aria-label={label}
      className="no-print fixed bottom-0 left-[clamp(0.6rem,1.4vw,1.6rem)] z-40 hidden flex-col items-center gap-5 text-ink-3 xl:flex"
    >
      {socialLinks.map((s) => (
        <a
          key={s.id}
          href={s.href}
          {...externalLinkProps(s.id)}
          aria-label={s.label}
          title={s.label}
          className="transition-[color,transform] duration-300 hover:-translate-y-1 hover:text-signal"
        >
          <SocialIcon id={s.id} />
        </a>
      ))}
      <span className="h-24 w-px bg-line" aria-hidden />
    </nav>
  )
}

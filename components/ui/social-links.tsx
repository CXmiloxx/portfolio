import { profile } from "@/data/profile"

export type SocialId = "linkedin" | "github" | "email" | "whatsapp" | "npm"

const ICONS: Record<SocialId, string> = {
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  github:
    "M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z",
  email: "M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm10 8.2L3.2 6.3v.4L12 12.9l8.8-6.2v-.4L12 12.2ZM3 8.9V18h18V8.9l-9 6.3-9-6.3Z",
  whatsapp:
    "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.9 9.88M20.5 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.4",
  npm: "M0 0v24h24V0H0Zm19.2 19.2h-2.4V7.2H12v12H4.8V4.8h14.4v14.4Z",
}

export interface SocialLink {
  id: SocialId
  label: string
  href: string
  handle: string
}

export const socialLinks: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin.url, handle: profile.linkedin.handle },
  { id: "github", label: "GitHub", href: profile.github.url, handle: `@${profile.github.handle}` },
  { id: "email", label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
  { id: "whatsapp", label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, handle: profile.phone },
  { id: "npm", label: "npm", href: profile.npm.url, handle: profile.npm.package },
]

export function SocialIcon({ id, className = "size-[18px]" }: { id: SocialId; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={ICONS[id]} />
    </svg>
  )
}

function external(id: SocialId) {
  return id === "email" ? {} : { target: "_blank", rel: "noreferrer" }
}

/** Round icon buttons, used in the hero and the footer. */
export function SocialRow({ label, className = "" }: { label: string; className?: string }) {
  return (
    <ul aria-label={label} className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            {...external(s.id)}
            aria-label={s.label}
            title={s.label}
            className="grid size-11 place-items-center rounded-full border border-line text-ink-2 transition-colors duration-300 hover:border-signal hover:bg-signal hover:text-on-signal"
          >
            <SocialIcon id={s.id} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export { external as externalLinkProps }

import type { ReactNode } from "react"

export function CvHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="eyebrow flex items-center gap-3 border-b border-ink pb-1.5 font-semibold text-ink">
      <span className="size-2 bg-signal" aria-hidden />
      {children}
    </h2>
  )
}

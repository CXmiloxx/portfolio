import type { ReactNode } from "react"

/** Small uppercase label that opens a section, with the signal square. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="size-2 bg-signal" aria-hidden />
      {children}
    </p>
  )
}

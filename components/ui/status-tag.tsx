import type { Status } from "@/types/project"

import { LiveDot } from "./live-dot"

export function StatusTag({ status, label }: { status: Status; label: string }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      {status === "live" ? (
        <LiveDot />
      ) : status === "done" ? (
        <span className="size-1.5 bg-current" aria-hidden />
      ) : (
        <span className="size-1.5 rounded-full border border-current" aria-hidden />
      )}
      {label}
    </span>
  )
}

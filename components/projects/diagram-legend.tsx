import type { NodeKind } from "@/types/diagram"

import { nodeStyle } from "./architecture-diagram"

const ORDER: NodeKind[] = ["client", "service", "data", "external", "queue"]

/** Explains what each box shape means, so anyone can read the map. */
export function DiagramLegend({ labels }: { labels: Record<NodeKind, string> }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.7rem] text-ink-3">
      {ORDER.map((k) => {
        const s = nodeStyle[k]
        return (
          <li key={k} className="flex items-center gap-2">
            <svg viewBox="0 0 14 10" className="h-2.5 w-3.5" aria-hidden>
              <rect x="0.6" y="0.6" width="12.8" height="8.8" fill={s.fill} stroke={s.stroke} strokeDasharray={s.dash ? "2 2" : undefined} />
            </svg>
            {labels[k]}
          </li>
        )
      })}
    </ul>
  )
}

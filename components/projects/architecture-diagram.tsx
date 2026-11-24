import type { CSSProperties } from "react"

import { diagrams } from "@/data/diagrams"
import { localize as t } from "@/i18n/config"
import type { DiagramNode, NodeKind } from "@/types/diagram"
import type { Locale } from "@/types/i18n"
import type { CaseStudyId } from "@/types/project"

/** Curved connector between the nearest sides of two nodes. */
function edgePath(a: DiagramNode, b: DiagramNode) {
  const ac = { x: a.x + a.w / 2, y: a.y + a.h / 2 }
  const bc = { x: b.x + b.w / 2, y: b.y + b.h / 2 }
  const dx = bc.x - ac.x
  const dy = bc.y - ac.y
  if (Math.abs(dy) >= Math.abs(dx) * 0.6) {
    const down = dy > 0
    const sx = ac.x
    const sy = down ? a.y + a.h : a.y
    const ex = bc.x
    const ey = down ? b.y : b.y + b.h
    const my = (sy + ey) / 2
    return { d: `M${sx},${sy} C${sx},${my} ${ex},${my} ${ex},${ey}`, len: Math.hypot(ex - sx, ey - sy) * 1.25 }
  }
  const right = dx > 0
  const sx = right ? a.x + a.w : a.x
  const sy = ac.y
  const ex = right ? b.x : b.x + b.w
  const ey = bc.y
  const mx = (sx + ex) / 2
  return { d: `M${sx},${sy} C${mx},${sy} ${mx},${ey} ${ex},${ey}`, len: Math.hypot(ex - sx, ey - sy) * 1.25 }
}

export const nodeStyle: Record<NodeKind, { fill: string; stroke: string; dash?: string; text: string }> = {
  client: { fill: "var(--paper)", stroke: "var(--ink)", text: "var(--ink)" },
  service: { fill: "var(--paper-3)", stroke: "var(--ink-3)", text: "var(--ink)" },
  data: { fill: "var(--paper)", stroke: "var(--signal)", text: "var(--ink)" },
  external: { fill: "var(--paper-2)", stroke: "var(--ink-3)", dash: "4 4", text: "var(--ink-2)" },
  queue: { fill: "var(--signal)", stroke: "var(--signal)", text: "var(--on-signal)" },
}

/** Animated system map: nodes draw in, live edges carry packets. */
export function ArchitectureDiagram({ id, locale }: { id: CaseStudyId; locale: Locale }) {
  const dg = diagrams[id]
  const byId = new Map(dg.nodes.map((n) => [n.id, n]))
  const caption = t(dg.caption, locale)
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 480 330"
        className="diagram h-auto w-full overflow-visible"
        data-anim="diagram"
        role="img"
        aria-label={caption}
      >
        <g fill="none" strokeWidth="1.2">
          {dg.edges.map(([from, to, live], i) => {
            const a = byId.get(from)!
            const b = byId.get(to)!
            const { d, len } = edgePath(a, b)
            return (
              <g key={`${from}-${to}`}>
                <path
                  d={d}
                  className="edge"
                  stroke={live ? "var(--signal)" : "var(--ink-3)"}
                  strokeOpacity={live ? 0.75 : 0.55}
                  style={{ "--len": Math.ceil(len), "--i": i } as CSSProperties}
                />
                {live ? (
                  <circle r="2.6" fill="var(--signal)" className="packet">
                    <animateMotion dur={`${2 + (i % 3) * 0.5}s`} begin={`${(i * 0.37) % 2}s`} repeatCount="indefinite" path={d} />
                  </circle>
                ) : null}
              </g>
            )
          })}
        </g>
        {dg.nodes.map((n, i) => {
          const s = nodeStyle[n.kind]
          const sub = t(n.sub, locale)
          return (
            <g key={n.id} className="node" style={{ "--i": i } as CSSProperties}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                fill={s.fill}
                stroke={s.stroke}
                strokeDasharray={s.dash}
                strokeWidth="1.2"
              />
              <text
                x={n.x + n.w / 2}
                y={n.y + n.h / 2 + (sub ? -3 : 4)}
                textAnchor="middle"
                fill={s.text}
                style={{ font: "600 10.5px var(--font-mono)", letterSpacing: "0.06em" }}
              >
                {t(n.label, locale)}
              </text>
              {sub ? (
                <text
                  x={n.x + n.w / 2}
                  y={n.y + n.h / 2 + 11}
                  textAnchor="middle"
                  fill={n.kind === "queue" ? "var(--on-signal)" : "var(--ink-3)"}
                  style={{ font: "400 8.5px var(--font-mono)" }}
                >
                  {sub}
                </text>
              ) : null}
            </g>
          )
        })}
      </svg>
      <figcaption className="mt-4 flex items-center gap-3 eyebrow text-ink-3">
        <span className="live-dot size-1.5 rounded-full bg-signal" aria-hidden />
        {caption}
      </figcaption>
    </figure>
  )
}

import type { Layer } from "@/types/project"

export const LAYERS: Layer[] = ["ui", "api", "data", "infra"]

const SHORT: Record<Layer, string> = { ui: "UI", api: "API", data: "DB", infra: "OPS" }

/** Four squares that show which layers of a system a project covered. */
export function LayerMeter({ layers, legend, label }: { layers: Layer[]; legend: Record<Layer, string>; label: string }) {
  const covered = layers.map((l) => legend[l]).join(", ")
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${label}: ${covered}`}>
      {LAYERS.map((l) => (
        <span
          key={l}
          title={legend[l]}
          className={`eyebrow grid h-6 min-w-9 place-items-center border px-1 text-[0.6rem] ${
            layers.includes(l) ? "border-ink bg-ink text-paper" : "border-line text-ink-3"
          }`}
        >
          {SHORT[l]}
        </span>
      ))}
    </div>
  )
}

/** Explains the squares: UI = interface, API = logic… */
export function LayerLegend({ legend }: { legend: Record<Layer, string> }) {
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[0.72rem] text-ink-3">
      {LAYERS.map((l) => (
        <span key={l}>
          <span className="text-ink">{SHORT[l]}</span> = {legend[l]}
        </span>
      ))}
    </p>
  )
}

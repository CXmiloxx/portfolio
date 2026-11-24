import type { ReactNode } from "react"

/** List with the square signal bullet used across the site. */
export function BulletList({ items, divided = false, className = "" }: { items: ReactNode[]; divided?: boolean; className?: string }) {
  return (
    <ul className={`${divided ? "divide-y divide-line border-y border-line" : "space-y-2.5"} ${className}`}>
      {items.map((item, i) => (
        <li key={i} className={`flex gap-4 leading-snug ${divided ? "py-3" : ""}`}>
          <span className="mt-[0.45em] size-1.5 shrink-0 bg-signal" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

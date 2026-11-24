import type { CSSProperties } from "react"

/** Infinite horizontal ticker. The second copy is hidden from assistive tech. */
export function Marquee({
  items,
  className = "",
  reverse = false,
  speed = 38,
}: {
  items: string[]
  className?: string
  reverse?: boolean
  speed?: number
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <li key={`${it}-${i}`} className="flex items-center">
          <span className="px-6 md:px-10">{it}</span>
          <span className="size-[0.22em] rotate-45 bg-current" aria-hidden />
        </li>
      ))}
    </ul>
  )
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`marquee flex w-max ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--marquee-speed": `${speed}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

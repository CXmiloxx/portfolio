import type { ReactNode } from "react"

const sizes = {
  xl: "text-[clamp(2.6rem,6.4vw,6.2rem)]",
  lg: "text-[clamp(2.4rem,5.4vw,5.2rem)]",
  md: "text-[clamp(2.2rem,4.6vw,4.6rem)]",
  sm: "text-[clamp(2rem,3.6vw,3.4rem)]",
} as const

/** Display heading revealed line by line on scroll (see motion/scroll-motion). */
export function SectionTitle({
  id,
  children,
  size = "lg",
  as: Tag = "h2",
  className = "",
  animate = true,
}: {
  id?: string
  children: ReactNode
  size?: keyof typeof sizes
  as?: "h2" | "h3"
  className?: string
  animate?: boolean
}) {
  return (
    <Tag id={id} data-anim={animate ? "lines" : undefined} className={`display ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  )
}

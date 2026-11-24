export function LiveDot({ className = "size-1.5" }: { className?: string }) {
  return <span className={`live-dot rounded-full bg-signal ${className}`} aria-hidden />
}

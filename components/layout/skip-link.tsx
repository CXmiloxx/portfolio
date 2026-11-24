export function SkipLink({ label, target = "main" }: { label: string; target?: string }) {
  return (
    <a
      href={`#${target}`}
      className="sr-only z-[110] bg-signal px-4 py-2 text-on-signal focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      {label}
    </a>
  )
}

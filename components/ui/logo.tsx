/**
 * Brand mark: my initials as a self-closing code tag, <cg/>.
 * The brackets carry the signal colour; the letters use the text colour.
 * Geometry is shared with app/icon.svg and brand/*.svg (see brand/README.md).
 */
const BRACKETS = ["M20 12L6 26L20 40", "M84 42L96 10", "M110 12L124 26L110 40"]
const LETTERS = ["M47 18.5A9.5 9.5 0 1 0 47 33.5", "M73.5 16.5V38A9 9 0 0 1 64.5 47H58"]

export function LogoMark({
  className = "h-7 w-auto",
  title,
  mono = false,
}: {
  className?: string
  title?: string
  /** Single colour (currentColor), e.g. over blended headers. */
  mono?: boolean
}) {
  const accent = mono ? "currentColor" : "var(--signal)"
  return (
    <svg
      viewBox="0 0 130 56"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {BRACKETS.map((d) => (
        <path key={d} d={d} stroke={accent} />
      ))}
      {LETTERS.map((d) => (
        <path key={d} d={d} stroke="currentColor" />
      ))}
      <circle cx="64" cy="26" r="9.5" stroke="currentColor" />
    </svg>
  )
}

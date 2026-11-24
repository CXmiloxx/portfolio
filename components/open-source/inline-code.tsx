/** Turns `backticks` in copy into <code>. Copy is our own, so this stays tiny. */
export function InlineCode({ text }: { text: string }) {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") ? (
      <code key={i} className="rounded bg-invert-fg/10 px-1.5 py-0.5 font-mono text-[0.88em]">
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  )
}

import { CopyButton } from "@/components/interactive/copy-button"

/** Full command (scrolls sideways on narrow screens instead of being cut) with a copy button. */
export function InstallCommand({ command, copy, copied }: { command: string; copy: string; copied: string }) {
  return (
    <div className="flex w-full max-w-full items-stretch overflow-hidden rounded-xl border border-invert-line font-mono text-[0.8rem]">
      <code className="min-w-0 flex-1 overflow-x-auto px-4 py-3 whitespace-nowrap">
        <span className="[color:var(--signal)]">$</span> {command}
      </code>
      <CopyButton
        value={command}
        label={copy}
        done={copied}
        className="shrink-0 border-l border-invert-line px-4 text-xs tracking-wider uppercase transition-colors hover:bg-invert-fg hover:text-invert-bg"
      />
    </div>
  )
}

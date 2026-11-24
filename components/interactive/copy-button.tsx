"use client"

import { useEffect, useRef, useState } from "react"

export function CopyButton({ value, label, done, className }: { value: string; label: string; done: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked: nothing to do */
    }
  }

  return (
    <button type="button" className={className} onClick={copy} aria-live="polite">
      {copied ? done : label}
    </button>
  )
}

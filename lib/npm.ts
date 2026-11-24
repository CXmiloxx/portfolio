import { cacheLife } from "next/cache"

import { profile } from "@/data/profile"

const TIMEOUT_MS = 4000

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) })
    return res.ok ? ((await res.json()) as T) : null
  } catch {
    return null
  }
}

/** Live npm figures for Tourwright. Cached for a day; null when npm is unreachable. */
export async function getMonthlyDownloads(): Promise<number | null> {
  "use cache"
  cacheLife("days")
  const data = await getJson<{ downloads?: number }>(
    `https://api.npmjs.org/downloads/point/last-month/${profile.npm.package}`,
  )
  return typeof data?.downloads === "number" ? data.downloads : null
}

export async function getLatestVersion(): Promise<string | null> {
  "use cache"
  cacheLife("days")
  const data = await getJson<{ version?: string }>(`https://registry.npmjs.org/${profile.npm.package}/latest`)
  return data?.version ?? null
}

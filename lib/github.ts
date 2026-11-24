import { cacheLife } from "next/cache"

/** Latest published release tag of a public repository ("owner/name"). Null when unreachable. */
export async function getLatestRelease(repo: string): Promise<string | null> {
  "use cache"
  cacheLife("days")
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) return null
    const data = (await res.json()) as { tag_name?: string }
    return data.tag_name ?? null
  } catch {
    return null
  }
}

const PRODUCTION_URL = "https://portafolio.buildrion.com"

/** Canonical site URL without a trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_URL).replace(/\/+$/, "")
}

export function siteHost(): string {
  return siteUrl().replace(/^https?:\/\//, "")
}

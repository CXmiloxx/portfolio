import { ImageResponse } from "next/og"

import { profile } from "@/data/profile"
import { defaultLocale, isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

export const alt = `${profile.name} — Full Stack Developer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const INK = "#0a0a0b"
const BONE = "#edeae3"
const SIGNAL = "#ff5a1f"

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const d = getDictionary(isLocale(lang) ? lang : defaultLocale)
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          color: BONE,
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24, letterSpacing: 4 }}>
          <div style={{ width: 16, height: 16, background: SIGNAL }} />
          <span>{`${profile.name} · ${d.hero.role}`.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1, fontWeight: 900, letterSpacing: -2 }}>
          <span>{d.hero.headline}</span>
          <span style={{ color: SIGNAL }}>{d.hero.headlineEm}</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#b4b0a7", letterSpacing: 3 }}>PORTAFOLIO.BUILDRION.COM</div>
      </div>
    ),
    size,
  )
}

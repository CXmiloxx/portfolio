import type { Metadata, Viewport } from "next"

import { archivo, jetbrainsMono } from "@/lib/fonts"
import { LocaleCurtain } from "@/components/motion/locale-curtain"
import { currentDictionary } from "@/lib/locale"
import { localeSwitchBootScript } from "@/lib/locale-switch"
import { pageMetadata, personJsonLd } from "@/lib/seo"
import { themeBootScript } from "@/lib/theme"
import { locales } from "@/types/i18n"

import "../globals.css"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const viewport: Viewport = { themeColor: "#0a0a0b" }

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await currentDictionary())
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const d = await currentDictionary()
  return (
    <html lang={d.locale} className={`${archivo.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript + localeSwitchBootScript }} />
      </head>
      <body className="grain min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(d)).replace(/</g, "\\u003c") }}
        />
        {children}
        <LocaleCurtain />
      </body>
    </html>
  )
}

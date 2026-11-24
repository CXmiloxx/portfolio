import { Archivo, JetBrains_Mono } from "next/font/google"

/** Archivo with its width axis: wide for display, normal for body (styles/utilities.css). */
export const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" })

export const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

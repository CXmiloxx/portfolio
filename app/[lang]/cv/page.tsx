import type { Metadata } from "next"

import { CvSheet } from "@/components/cv/cv-sheet"
import { CvToolbar } from "@/components/cv/cv-toolbar"
import { currentDictionary } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  const d = await currentDictionary()
  return { ...pageMetadata(d, "/cv"), title: { absolute: d.site.meta.cvTitle } }
}

export default async function CvPage() {
  const d = await currentDictionary()
  return (
    <>
      <CvToolbar d={d} />
      <CvSheet d={d} />
    </>
  )
}

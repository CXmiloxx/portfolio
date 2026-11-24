import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { SkipLink } from "@/components/layout/skip-link"
import { SocialRail } from "@/components/layout/social-rail"
import { Cursor } from "@/components/motion/cursor"
import { Preloader } from "@/components/motion/preloader"
import { ScrollMotion } from "@/components/motion/scroll-motion"
import { ScrollProgress } from "@/components/motion/scroll-progress"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { OpenSource } from "@/components/sections/open-source"
import { Principles } from "@/components/sections/principles"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"
import { profile } from "@/data/profile"
import { currentDictionary } from "@/lib/locale"

export default async function HomePage() {
  const d = await currentDictionary()
  return (
    <>
      <SkipLink label={d.site.skipToContent} />
      <Preloader lines={d.site.boot.lines} ready={d.site.boot.ready} skip={d.site.boot.skip} name={profile.name} />
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <SiteHeader d={d} />
      <SocialRail label={d.site.social.label} />

      <main id="main" className="overflow-x-clip">
        <Hero d={d} />
        <About d={d} />
        <Work d={d} />
        <OpenSource d={d} />
        <Principles d={d} />
        <Experience d={d} />
        <Skills d={d} />
        <Contact d={d} />
      </main>
      <SiteFooter d={d} />

      <ScrollMotion />
    </>
  )
}

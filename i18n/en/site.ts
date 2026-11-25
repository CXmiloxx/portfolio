import type { HeroCopy, SiteCopy } from "@/types/dictionary"

export const site: SiteCopy = {
  meta: {
    title: "Camilo Guapacha — Full Stack Developer",
    description:
      "Full stack developer in Pereira, Colombia, and Systems Engineering student at UTP. I build complete web systems: screens, logic, database and deployment.",
    cvTitle: "Résumé — Camilo Guapacha",
  },
  nav: {
    about: "What I do",
    work: "Projects",
    openSource: "Open source",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    switchTo: "View in Spanish",
    menu: "Menu",
    close: "Close",
    main: "Main",
  },
  skipToContent: "Skip to content",
  theme: { light: "Switch to light theme", dark: "Switch to dark theme" },
  language: { label: "Language" },
  social: { label: "Social and contact" },
  boot: {
    lines: ["mounting /interface", "starting api :443", "migrating database", "issuing ssl certificate", "deploying to production"],
    ready: "online",
    skip: "Skip intro",
  },
  footer: { built: "Designed and built by Camilo Guapacha with Next.js.", source: "Source code" },
  copy: { copy: "Copy", copied: "Copied" },
}

export const hero: HeroCopy = {
  status: "Pereira, Colombia",
  localTime: "Local time in Pereira",
  role: "Full Stack Developer",
  headline: "I build complete web systems,",
  headlineEm: "from the screen to the database.",
  intro:
    "I work on what people see —screens and forms— and on what they don't: the logic that handles every request and the database where information is stored. Then I put it online and keep it running.",
  cta: "See projects",
  cv: "Résumé",
  facts: {
    systems: "systems in production",
    study: "Systems Engineering, in progress",
    downloads: "monthly Tourwright downloads",
  },
  flow: {
    title: "What happens when someone uses a system",
    caption: "I build all four parts.",
    steps: [
      { node: "Screen", text: "Someone applies for a loan on the website." },
      { node: "API", text: "The logic checks the data and applies the business rules." },
      { node: "Database", text: "The application is stored safely." },
      { node: "Response", text: "The person sees the result within seconds." },
    ],
  },
}

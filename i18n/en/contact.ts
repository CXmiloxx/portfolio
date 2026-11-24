import type { ContactCopy, CvCopy } from "@/types/dictionary"

export const contact: ContactCopy = {
  eyebrow: "Contact",
  big: "Contact",
  title: "Want to know more about a project?",
  body: "Reach me through any of these channels. I can explain any system on this page in plain language or in full technical detail.",
  channels: { email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn", github: "GitHub", cv: "Résumé" },
}

export const cv: CvCopy = {
  back: "Back to portfolio",
  print: "Save as PDF",
  summaryTitle: "Profile",
  summary:
    "Full stack developer and Systems & Computer Engineering student (UTP). I take multi-company web systems to production end to end: interface, API, database and infrastructure. TypeScript across the stack (Next.js, NestJS, Prisma, MySQL) and deployment with Docker on Linux servers, with SSL and Cloudflare. Maintainer of Tourwright, an open source tool published on npm.",
  achievementsTitle: "Highlights",
  achievements: [
    "Built a 13-service lending platform with hexagonal architecture, connected to DataCrédito (Experian) and CONSULTAR, with monthly portfolio reporting to the bureau.",
    "Delivered 10+ systems that companies use today, covering frontend, backend, data and deployment.",
    "Automated court case tracking: filings and documents sync themselves from the judicial branch and SAMAI.",
    "Created and maintain Tourwright, open source with thousands of monthly npm downloads (CLI, API and MCP server).",
  ],
  experienceTitle: "Experience",
  projectsTitle: "Selected projects",
  skillsTitle: "Skills",
  educationTitle: "Education",
  languagesTitle: "Languages",
  openSourceTitle: "Open source",
}

import type { ExperienceCopy, PrinciplesCopy, SkillsCopy } from "@/types/dictionary"

export const experience: ExperienceCopy = {
  eyebrow: "Experience",
  title: "From intern to owning complete systems in two years.",
  current: "Current",
  jobs: {
    developer: {
      period: "Oct 2025 — now",
      role: "Software Developer",
      org: "Software company, financial sector",
      kind: "Full time",
      summary: "I build and maintain systems for clients end to end: screens, logic, databases and deployment.",
      highlights: [
        "13-service lending platform with hexagonal architecture",
        "Multi-company HR system and court case tracking for public agencies",
      ],
    },
    freelance: {
      period: "Jun 2025 — Oct 2025",
      role: "Independent developer",
      org: "Own projects with clients",
      kind: "Freelance",
      summary: "Custom development combining web applications with AI solutions.",
      highlights: ["Business wallet with NestJS", "RAW image processing with AI in Python"],
    },
    internship: {
      period: "Jan 2025 — Jul 2025",
      role: "Full Stack Developer (SENA apprenticeship)",
      org: "World Travel Assist by HAS",
      kind: "Apprenticeship",
      summary: "Six months building systems for a medical assistance operation, focused on screens and on getting them into production.",
      highlights: [
        "Appointments & emergencies system that replaced coordination over WhatsApp",
        "Installable multi-company application (PWA)",
      ],
    },
  },
  educationTitle: "Education",
  education: {
    utp: { title: "B.Eng. Systems & Computer Engineering", org: "Universidad Tecnológica de Pereira", period: "2026 — in progress" },
    sena: { title: "Software Analysis & Development Technologist", org: "SENA, Pereira", period: "2023 — 2025" },
  },
}

export const principles: PrinciplesCopy = {
  eyebrow: "How I work",
  title: "Four practices I follow on every project.",
  intro: "They are what make a system reliable and easy to maintain.",
  items: [
    {
      title: "Structure first",
      body: "Before any screen I decide how the system splits into parts, so it can grow without being rebuilt.",
      tech: "Separate domains · hexagonal architecture",
    },
    {
      title: "AI, reviewed",
      body: "I use AI assistants to plan, test and document faster, and I build tools for them. Everything they produce, I read, test and understand.",
      tech: "Claude Code · MCP server in Tourwright · gitmoji-commits",
      highlight: true,
    },
    {
      title: "Same environment for everyone",
      body: "Any developer starts the whole project with a single command and gets the same result.",
      tech: "Docker · Docker Compose",
    },
    {
      title: "Running and documented",
      body: "I publish the system with its domain and security certificate, and I write down how it works and why.",
      tech: "Docker · Linux · Cloudflare · READMEs",
    },
  ],
}

export const skills: SkillsCopy = {
  eyebrow: "Skills",
  title: "The tools I build with.",
  alsoLabel: "Also",
  groups: {
    frontend: { name: "Frontend", plain: "Screens and user experience" },
    backend: { name: "Backend", plain: "Logic, services and APIs" },
    data: { name: "Data", plain: "Databases and storage" },
    infra: { name: "Deployment", plain: "Publishing and keeping systems online" },
    ai: { name: "AI & automation", plain: "Agents, tests and automated jobs" },
  },
  languagesTitle: "Languages",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Technical: reading, docs and writing" },
  ],
}

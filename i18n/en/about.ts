import type { AboutCopy } from "@/types/dictionary"

export const about: AboutCopy = {
  eyebrow: "What I do",
  title: "I build complete systems: from the idea to the moment people use them.",
  intro:
    "A company comes with a need —automating a process, offering a service online or organizing its information— and I take care of the whole path: understanding what it needs, designing how it will work, building it and leaving it online and running.",
  process: [
    {
      title: "Understand",
      body: "I talk with the people who will use the system and define what it must do and what it won't.",
      tech: "Requirements · flows · scope",
    },
    {
      title: "Design",
      body: "I decide how it is organized: the screens, the data it stores and the business rules.",
      tech: "Architecture · data model · prototypes",
    },
    {
      title: "Build",
      body: "I write the screens, the logic that handles every request and the database.",
      tech: "Next.js · NestJS · Prisma · MySQL",
    },
    {
      title: "Launch and improve",
      body: "I put it online, maintain it and adjust it based on real use.",
      tech: "Docker · Linux · Cloudflare",
    },
  ],
  whoTitle: "Who I am",
  who: "I'm Juan Camilo Guapacha, from Pereira, Colombia. I trained as a Software Analysis & Development technologist at SENA and since 2025 I've been building systems for companies. Today I also study Systems & Computer Engineering at Universidad Tecnológica de Pereira.",
  nowTitle: "Right now",
  now: [
    { label: "Studying", value: "Systems & Computer Engineering", detail: "Universidad Tecnológica de Pereira · since August 2026" },
    { label: "Working", value: "Software developer", detail: "Systems for the financial and public sectors" },
    { label: "Building", value: "Tourwright", detail: "Open source: automatic tutorial videos" },
  ],
}

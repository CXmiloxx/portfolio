import type { SkillGroup } from "@/types/skills"

export const skillGroups: SkillGroup[] = [
  { id: "frontend", daily: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"], also: ["PWA", "Angular", "Vite"] },
  { id: "backend", daily: ["Node.js", "NestJS", "Express", "REST", "Swagger"], also: ["BullMQ", "Webhooks", "PHP / Laravel", "Python"] },
  {
    id: "data",
    daily: ["MySQL", "Prisma", "Redis"],
    also: ["MariaDB", { es: "Migraciones", en: "Migrations" }, { es: "Triggers de auditoría", en: "Audit triggers" }],
  },
  { id: "infra", daily: ["Docker", "Docker Compose", "Linux / Ubuntu", "Cloudflare"], also: ["Certbot / SSL", "cPanel", "Proxmox", "GitHub Actions"] },
  { id: "ai", daily: [{ es: "Agentes de IA", en: "AI agents" }, "MCP", "Claude Code"], also: ["Playwright", "FFmpeg", "Scraping"] },
]

import type { OpenSourceFacts } from "@/types/open-source"

export const openSource: OpenSourceFacts[] = [
  {
    id: "tourwright",
    name: "Tourwright",
    repo: "https://github.com/CXmiloxx/TOURWRIGHT",
    site: "https://cxmiloxx.github.io/TOURWRIGHT/",
    install: "npm i -g tourwright",
    stack: ["Node.js", "Playwright", "FFmpeg", "MCP", "TTS"],
    featured: true,
  },
  {
    id: "gitmoji-commits",
    name: "gitmoji-commits",
    repo: "https://github.com/CXmiloxx/gitmoji-commits",
    install: "npx skills add CXmiloxx/gitmoji-commits",
    stack: ["Python", "Git", "Agent Skills"],
  },
]

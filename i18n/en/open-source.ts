import type { OpenSourceSectionCopy } from "@/types/dictionary"

export const openSource: OpenSourceSectionCopy = {
  eyebrow: "Open source",
  title: "Two tools other developers use.",
  intro:
    "Besides my job, I publish open tools: anyone can read the code, install them and use them. Both are built to work with AI assistants.",
  featuredLabel: "Main project",
  watch: "Watch the demo video",
  code: "Code",
  site: "Website",
  demo: "Demo",
  downloads: "downloads last month",
  latest: "latest version on npm",
  demoSource: "Example taken from the project's README.",
  skillLabel: "AI agent skill",
  projects: {
    tourwright: {
      tagline: "Software tutorial videos, no recording or editing.",
      description:
        "You describe the walkthrough in a text file and Tourwright opens the app in a real browser, walks through it, points at each element, narrates with a natural voice and delivers the video with captions. If the app changes, the video is regenerated in minutes.",
      points: [
        "Runs from the terminal, as an HTTP API with a job queue, or as an MCP server for AI agents",
        "Offline voices (Piper, Pocket TTS) or online ones, cached per sentence",
        "`tourwright check` in CI flags when a video went stale",
      ],
    },
    "gitmoji-commits": {
      tagline: "A skill that teaches AI assistants to record code changes the way an experienced developer would.",
      description:
        "It reads the repository history to learn the team's language, scopes and style; splits changes into single-intent commits and writes a title that says what changed and a body that explains why it matters.",
      points: [
        "gitmoji + Conventional Commits, in the project's language",
        "Catches keys, passwords and files that shouldn't be committed",
        "Needs only git: Linux, macOS and Windows, no dependencies",
      ],
      demo: {
        beforeLabel: "What an agent usually commits",
        before: "Update files and fix bug\n\n- Modified src/components/LoginForm.tsx\n- Updated package.json\n- Fixed bug in auth\n\n🤖 Generated with AI",
        afterLabel: "With gitmoji-commits",
        after:
          "🐛 fix(auth): sessions closed after a password change\n\nChanging the password left other devices signed in, so a stolen session\nkept working. Every active session now ends when the password changes.",
      },
    },
  },
}

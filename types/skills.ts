import type { Text } from "./i18n"

export type SkillGroupId = "frontend" | "backend" | "data" | "infra" | "ai"

export interface SkillGroup {
  id: SkillGroupId
  daily: Text[]
  also: Text[]
}

export interface SkillGroupCopy {
  name: string
  plain: string
}

import type { Text } from "./i18n"
import type { CaseStudyId } from "./project"

export type NodeKind = "client" | "service" | "data" | "external" | "queue"

export interface DiagramNode {
  id: string
  x: number
  y: number
  w: number
  h: number
  label: Text
  sub?: Text
  kind: NodeKind
}

/** [from, to, animated packet] */
export type DiagramEdge = [from: string, to: string, live?: boolean]

export interface Diagram {
  caption: Text
  nodes: DiagramNode[]
  edges: DiagramEdge[]
}

export type DiagramMap = Record<CaseStudyId, Diagram>

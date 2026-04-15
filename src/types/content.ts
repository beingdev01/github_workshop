// ═══════════════════════════════════════
// Content Type Definitions
// ═══════════════════════════════════════

export interface WorkshopDay {
  id: number
  title: string
  subtitle: string
  icon: string
  color: string
  sections: WorkshopSection[]
}

export interface WorkshopSection {
  id: string
  title: string
  icon: string
  blocks: ContentBlock[]
}

export type ContentBlock =
  | HeadingBlock
  | TextBlock
  | CodeBlock
  | CalloutBlock
  | ListBlock
  | PlaygroundBlock
  | QAndABlock
  | DividerBlock
  | ImageBlock
  | MemoryDiagramBlock
  | MemoryLabBlock
  | SliceVisualizerBlock
  | ComplexityRacerBlock
  | SetVennBlock
  | TruthyTesterBlock

export interface HeadingBlock {
  type: 'heading'
  level: 1 | 2 | 3
  text: string
}

export interface TextBlock {
  type: 'text'
  content: string // supports basic markdown
}

export interface CodeBlock {
  type: 'code'
  code: string
  language?: string
  runnable?: boolean
  filename?: string
}

export interface CalloutBlock {
  type: 'callout'
  variant: 'info' | 'warning' | 'tip' | 'danger' | 'python'
  title?: string
  content: string
}

export interface ListBlock {
  type: 'list'
  items: string[]
  ordered?: boolean
}

export interface PlaygroundBlock {
  type: 'playground'
  defaultCode: string
  instructions: string
  expectedOutput?: string
}

export interface QAndABlock {
  type: 'qna'
  items: QAndAItem[]
}

export interface QAndAItem {
  question: string
  answer: string
}

export interface DividerBlock {
  type: 'divider'
}

export interface ImageBlock {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export type AccentTone = 'mint' | 'amber' | 'coral' | 'sky' | 'neutral'

export interface MemoryBinding {
  name: string
  objectId: string
  scope?: string
}

export interface MemoryObject {
  id: string
  type: string
  value: string
  mutable?: boolean
  refCount?: number
  note?: string
  accent?: AccentTone
}

export interface MemoryDiagramBlock {
  type: 'memoryDiagram'
  title: string
  description?: string
  bindings: MemoryBinding[]
  objects: MemoryObject[]
  insights?: string[]
}

export interface MemoryLabStep {
  title: string
  action?: string
  code?: string
  bindings: MemoryBinding[]
  objects: MemoryObject[]
  explanation: string
}

export interface MemoryLabBlock {
  type: 'memoryLab'
  title: string
  prompt?: string
  steps: MemoryLabStep[]
}

export interface SliceVisualizerBlock {
  type: 'sliceVisualizer'
  title?: string
  description?: string
  items?: (string | number)[]
}

export interface ComplexityRacerBlock {
  type: 'complexityRacer'
  title?: string
  description?: string
}

export interface SetVennBlock {
  type: 'setVenn'
  title?: string
  description?: string
}

export interface TruthyTesterBlock {
  type: 'truthyTester'
  title?: string
  description?: string
}

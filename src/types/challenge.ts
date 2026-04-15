// ═══════════════════════════════════════
// Challenge Type Definitions
// ═══════════════════════════════════════

export interface Challenge {
  id: string
  title: string
  difficulty: 'easy' | 'medium' | 'hard'
  description: string
  starterCode: string
  testCases: TestCase[]
  hints: string[]
  solution: string
}

export interface TestCase {
  input?: string
  expected: string
  description?: string
  hidden?: boolean
}

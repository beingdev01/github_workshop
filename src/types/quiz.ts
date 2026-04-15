// ═══════════════════════════════════════
// Quiz Type Definitions
// ═══════════════════════════════════════

export interface Quiz {
  id: string
  title?: string
  questions: QuizQuestion[]
}

export type QuizQuestion = MCQQuestion | PredictOutputQuestion | FillBlankQuestion

export interface MCQQuestion {
  type: 'mcq'
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface PredictOutputQuestion {
  type: 'predict-output'
  code: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface FillBlankQuestion {
  type: 'fill-blank'
  prompt: string         // Use ___ for blank
  answer: string
  caseSensitive?: boolean
  explanation: string
}

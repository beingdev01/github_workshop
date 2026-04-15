// ═══════════════════════════════════════
// Progress Type Definitions
// ═══════════════════════════════════════

export interface UserProgress {
  currentDay: number
  currentSection: string
  completedSections: string[]
  quizScores: Record<string, QuizScore>
  challengeCompletions: string[]
  lastVisited: string // ISO date
  totalTimeSpent: number // in seconds
}

export interface QuizScore {
  quizId: string
  correct: number
  total: number
  attempts: number
  completedAt?: string
}

export const defaultProgress: UserProgress = {
  currentDay: 1,
  currentSection: 'day1-welcome',
  completedSections: [],
  quizScores: {},
  challengeCompletions: [],
  lastVisited: new Date().toISOString(),
  totalTimeSpent: 0,
}

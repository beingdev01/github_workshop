import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { type UserProgress, defaultProgress } from '@/types/progress'

const STORAGE_KEY = 'python-workshop-progress'

function loadProgress(): UserProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) return { ...defaultProgress, ...JSON.parse(data) }
  } catch {}
  return { ...defaultProgress }
}

function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {}
}

export const useProgressStore = defineStore('progress', () => {
  const progress = ref<UserProgress>(loadProgress())

  // Computed
  const completedCount = computed(() => progress.value.completedSections.length)
  const totalSections = 21 // 6 + 5 + 5 + 5

  const overallPercentage = computed(() =>
    Math.round((completedCount.value / totalSections) * 100)
  )

  const currentDay = computed(() => progress.value.currentDay)
  const currentSection = computed(() => progress.value.currentSection)

  function isSectionCompleted(sectionId: string): boolean {
    return progress.value.completedSections.includes(sectionId)
  }

  function completeSection(sectionId: string) {
    if (!progress.value.completedSections.includes(sectionId)) {
      progress.value.completedSections.push(sectionId)
      persist()
    }
  }

  function setCurrentLocation(day: number, sectionId: string) {
    progress.value.currentDay = day
    progress.value.currentSection = sectionId
    progress.value.lastVisited = new Date().toISOString()
    persist()
  }

  function saveQuizScore(quizId: string, correct: number, total: number) {
    const existing = progress.value.quizScores[quizId]
    progress.value.quizScores[quizId] = {
      quizId,
      correct,
      total,
      attempts: (existing?.attempts || 0) + 1,
      completedAt: new Date().toISOString(),
    }
    persist()
  }

  function getQuizScore(quizId: string) {
    return progress.value.quizScores[quizId]
  }

  function completeChallenge(challengeId: string) {
    if (!progress.value.challengeCompletions.includes(challengeId)) {
      progress.value.challengeCompletions.push(challengeId)
      persist()
    }
  }

  function isChallengeCompleted(challengeId: string): boolean {
    return progress.value.challengeCompletions.includes(challengeId)
  }

  function resetProgress() {
    progress.value = { ...defaultProgress }
    persist()
  }

  function persist() {
    saveProgress(progress.value)
  }

  return {
    progress,
    completedCount,
    totalSections,
    overallPercentage,
    currentDay,
    currentSection,
    isSectionCompleted,
    completeSection,
    setCurrentLocation,
    saveQuizScore,
    getQuizScore,
    completeChallenge,
    isChallengeCompleted,
    resetProgress,
  }
})

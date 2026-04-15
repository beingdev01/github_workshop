<template>
  <div class="rounded-2xl border border-border bg-card overflow-hidden">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-lavender/5">
      <div class="flex items-center gap-3">
        <span class="text-lavender text-base">🧠</span>
        <span class="text-base font-semibold text-text-primary">{{ quiz.title || 'Knowledge Check' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-sm text-text-muted">
          {{ answeredCount }}/{{ quiz.questions.length }} answered
        </span>
        <div class="h-1.5 w-24 rounded-full bg-surface overflow-hidden">
          <div
            class="h-full bg-lavender transition-all duration-500"
            :style="{ width: `${(answeredCount / quiz.questions.length) * 100}%` }"
          />
        </div>
      </div>
    </div>

    <!-- Questions -->
    <div class="divide-y divide-border/30">
      <div v-for="(q, i) in quiz.questions" :key="i" class="p-6">
        <!-- MCQ -->
        <template v-if="q.type === 'mcq'">
          <p class="text-lg font-medium text-text-primary mb-4">{{ i + 1 }}. {{ q.question }}</p>
          <div class="space-y-3">
            <button
              v-for="(opt, j) in q.options"
              :key="j"
              :class="[
                'w-full text-left rounded-lg border px-4 py-3 text-base transition-all',
                getOptionClass(i, j, q.correctIndex),
              ]"
              :disabled="answers[i] !== undefined"
              @click="selectAnswer(i, j)"
            >
              <span class="font-mono text-text-muted mr-3">{{ String.fromCharCode(65 + j) }}.</span>
              {{ opt }}
            </button>
          </div>
        </template>

        <!-- Predict Output -->
        <template v-else-if="q.type === 'predict-output'">
          <p class="text-lg font-medium text-text-primary mb-3">{{ i + 1 }}. What will this code output?</p>
          <pre class="mb-4 rounded-lg bg-[#0a0a1f] border border-border/30 p-4 font-mono text-base text-mint/80">{{ q.code }}</pre>
          <div class="space-y-3">
            <button
              v-for="(opt, j) in q.options"
              :key="j"
              :class="[
                'w-full text-left rounded-lg border px-4 py-3 text-base font-mono transition-all',
                getOptionClass(i, j, q.correctIndex),
              ]"
              :disabled="answers[i] !== undefined"
              @click="selectAnswer(i, j)"
            >
              {{ opt }}
            </button>
          </div>
        </template>

        <!-- Fill in the Blank -->
        <template v-else-if="q.type === 'fill-blank'">
          <p class="text-lg font-medium text-text-primary mb-4">{{ i + 1 }}. Fill in the blank:</p>
          <pre class="mb-4 rounded-lg bg-[#0a0a1f] border border-border/30 p-4 font-mono text-base text-text-secondary">{{ q.prompt }}</pre>
          <div class="flex gap-3">
            <input
              v-model="fillAnswers[i]"
              type="text"
              class="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-base font-mono text-text-primary focus:border-mint/50 focus:outline-none"
              placeholder="Type your answer..."
              :disabled="answers[i] !== undefined"
              @keyup.enter="checkFillBlank(i, q)"
            />
            <button
              v-if="answers[i] === undefined"
              class="rounded-lg bg-lavender/10 border border-lavender/20 px-4 py-3 text-base text-lavender hover:bg-lavender/20 transition-all"
              @click="checkFillBlank(i, q)"
            >
              Check
            </button>
          </div>
        </template>

        <!-- Explanation -->
        <transition name="fade">
          <div
            v-if="answers[i] !== undefined"
            :class="[
              'mt-4 rounded-lg p-4 text-base leading-relaxed',
              answers[i] === true ? 'bg-mint/5 text-mint/80 border border-mint/20' : 'bg-coral/5 text-coral/80 border border-coral/20',
            ]"
          >
            <span class="font-semibold">{{ answers[i] === true ? '✅ Correct!' : '❌ Not quite.' }}</span>
            {{ q.explanation }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Quiz, QuizQuestion, FillBlankQuestion } from '@/types/quiz'
import { useProgressStore } from '@/stores/progress'

const props = defineProps<{
  quiz: Quiz
}>()

const progressStore = useProgressStore()
const answers = ref<Record<number, boolean>>({})
const fillAnswers = ref<Record<number, string>>({})

const answeredCount = computed(() => Object.keys(answers.value).length)

function selectAnswer(questionIdx: number, optionIdx: number) {
  const q = props.quiz.questions[questionIdx] as any
  const correct = optionIdx === q.correctIndex
  answers.value[questionIdx] = correct
  saveScore()
}

function checkFillBlank(questionIdx: number, q: FillBlankQuestion) {
  const userAnswer = (fillAnswers.value[questionIdx] || '').trim()
  const expected = q.answer.trim()
  const correct = q.caseSensitive
    ? userAnswer === expected
    : userAnswer.toLowerCase() === expected.toLowerCase()
  answers.value[questionIdx] = correct
  saveScore()
}

function getOptionClass(qIdx: number, optIdx: number, correctIdx: number): string {
  const answered = answers.value[qIdx]
  if (answered === undefined) {
    return 'border-border hover:border-lavender/30 hover:bg-lavender/5 text-text-secondary'
  }
  if (optIdx === correctIdx) {
    return 'border-mint/40 bg-mint/10 text-mint'
  }
  if (answers.value[qIdx] === false && optIdx !== correctIdx) {
    // Only highlight the wrong answer if they clicked this one
    return 'border-border/30 text-text-muted'
  }
  return 'border-border/30 text-text-muted'
}

function saveScore() {
  const total = props.quiz.questions.length
  const correct = Object.values(answers.value).filter(Boolean).length
  progressStore.saveQuizScore(props.quiz.id, correct, total)
}
</script>

<style scoped>
.fade-enter-active { transition: all 0.3s ease; }
.fade-enter-from { opacity: 0; transform: translateY(-8px); }
</style>

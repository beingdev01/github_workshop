<template>
  <div class="rounded-lg border border-border bg-card overflow-hidden shadow-sm my-6">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
      <div class="flex items-center gap-2">
        <svg class="h-4 w-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        <span class="text-[13px] font-semibold text-text-primary tracking-wide flex items-center gap-2">
          {{ quiz.title || 'Knowledge Check' }}
        </span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-[11px] font-medium uppercase tracking-wider text-text-muted">
          {{ answeredCount }}/{{ quiz.questions.length }} answered
        </span>
        <div class="h-1.5 w-16 rounded-sm bg-void border border-border overflow-hidden">
          <div
            class="h-full bg-text-primary transition-all duration-500"
            :style="{ width: `${(answeredCount / quiz.questions.length) * 100}%` }"
          />
        </div>
      </div>
    </div>

    <!-- Questions -->
    <div class="divide-y divide-border bg-void">
      <div v-for="(q, i) in quiz.questions" :key="i" class="p-4 sm:p-5">
        <!-- MCQ -->
        <template v-if="q.type === 'mcq'">
          <p class="text-[14px] font-medium text-text-primary mb-3">{{ i + 1 }}. {{ q.question }}</p>
          <div class="space-y-2">
            <button
              v-for="(opt, j) in q.options"
              :key="j"
              :class="[
                'w-full text-left rounded-md border px-3 py-2 text-[13px] transition-colors focus:outline-none focus:ring-2 focus:ring-mint',
                getOptionClass(i, j, q.correctIndex),
              ]"
              :disabled="answers[i] !== undefined"
              @click="selectAnswer(i, j)"
            >
              <span class="font-mono text-[11px] text-text-muted mr-2">{{ String.fromCharCode(65 + j) }}.</span>
              {{ opt }}
            </button>
          </div>
        </template>

        <!-- Predict Output -->
        <template v-else-if="q.type === 'predict-output'">
          <p class="text-[14px] font-medium text-text-primary mb-2">{{ i + 1 }}. What will this code output?</p>
          <pre class="mb-3 rounded border border-border bg-surface p-3 font-mono text-[12px] text-text-primary">{{ q.code }}</pre>
          <div class="space-y-2">
            <button
              v-for="(opt, j) in q.options"
              :key="j"
              :class="[
                'w-full text-left rounded-md border px-3 py-2 text-[13px] font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-mint',
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
          <p class="text-[14px] font-medium text-text-primary mb-2">{{ i + 1 }}. Fill in the blank:</p>
          <pre class="mb-3 rounded border border-border bg-surface p-3 font-mono text-[12px] text-text-secondary">{{ q.prompt }}</pre>
          <div class="flex gap-2">
            <input
              v-model="fillAnswers[i]"
              type="text"
              class="flex-1 rounded-md border border-border bg-void px-3 py-2 text-[13px] font-mono text-text-primary placeholder:font-sans placeholder-text-muted focus:border-mint focus:outline-none focus:ring-1 focus:ring-mint transition-colors"
              placeholder="Type your answer..."
              :disabled="answers[i] !== undefined"
              @keyup.enter="checkFillBlank(i, q)"
            />
            <button
              v-if="answers[i] === undefined"
              class="rounded-md bg-text-primary border border-transparent px-4 py-2 text-[13px] font-semibold text-void hover:bg-text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-mint"
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
              'mt-3 rounded-md p-3 text-[12px] leading-relaxed border',
              answers[i] === true ? 'bg-surface border-mint/20 text-text-primary' : 'bg-surface border-coral/30 text-text-primary',
            ]"
          >
            <span :class="['font-semibold mr-1', answers[i] === true ? 'text-mint' : 'text-coral']">
              {{ answers[i] === true ? '✓ Correct!' : '✗ Not quite.' }}
            </span>
            <span class="text-text-secondary">{{ q.explanation }}</span>
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
    return 'border-border hover:border-text-primary bg-void text-text-primary cursor-pointer'
  }
  if (optIdx === correctIdx) {
    return 'border-mint bg-surface text-text-primary font-medium'
  }
  if (answers.value[qIdx] === false && optIdx !== correctIdx) {
    return 'border-border bg-void text-text-muted'
  }
  return 'border-border bg-void text-text-muted'
}

function saveScore() {
  const total = props.quiz.questions.length
  const correct = Object.values(answers.value).filter(Boolean).length
  progressStore.saveQuizScore(props.quiz.id, correct, total)
}
</script>

<style scoped>
.fade-enter-active { transition: all 0.3s ease; }
.fade-enter-from { opacity: 0; transform: translateY(-4px); }
</style>

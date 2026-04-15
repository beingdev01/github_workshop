<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <!-- Header -->
    <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70">
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber/15 text-amber">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        </span>
        <span class="text-base font-bold font-display text-text-primary tracking-tight">{{ challenge.title }}</span>
      </div>
      <Badge :color="difficultyColor" class="capitalize">{{ challenge.difficulty }}</Badge>
    </div>

    <!-- Description -->
    <div class="p-5 border-b border-border">
      <div class="text-lg leading-[1.7] text-text-primary/90" v-html="renderText(challenge.description)" />

      <!-- Test Cases Preview -->
      <div v-if="visibleTests.length" class="mt-5">
        <div class="text-xs font-bold text-mint uppercase tracking-[0.2em] mb-3">Examples</div>
        <div class="space-y-2.5">
          <div v-for="(tc, i) in visibleTests" :key="i" class="rounded-lg border border-border bg-surface/70 p-3.5 text-sm font-mono">
            <div v-if="tc.input" class="text-text-muted flex gap-2"><span class="font-semibold">Input:</span> <span class="text-text-primary">{{ tc.input }}</span></div>
            <div class="text-text-muted flex gap-2 mt-1"><span class="font-semibold">Expected:</span> <span class="text-mint font-semibold">{{ tc.expected }}</span></div>
            <div v-if="tc.description" class="text-text-muted mt-2 text-xs font-body italic border-t border-border pt-2">{{ tc.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Editor -->
    <div class="border-b border-border">
      <div ref="editorContainer" class="min-h-[200px]" />
    </div>

    <!-- Controls -->
    <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70 flex-wrap gap-3">
      <div class="flex items-center gap-2">
        <button
          class="flex items-center gap-2 rounded-lg text-base font-bold bg-gradient-to-r from-mint to-amber text-white px-5 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-px transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="pyodide.isRunning"
          @click="runTests"
        >
          <svg v-if="pyodide.isRunning" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          {{ pyodide.isRunning ? 'Running...' : 'Check Tests' }}
        </button>
        <button
          class="text-sm font-semibold text-text-muted hover:text-text-primary px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-mint transition-colors"
          @click="resetCode"
        >
          Reset
        </button>
      </div>

      <div class="flex gap-2">
        <button
          v-if="!showHints && currentHint < challenge.hints.length"
          class="text-sm font-semibold text-amber border border-amber/30 bg-amber/5 hover:bg-amber/10 px-3.5 py-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-mint"
          @click="showHints = true"
        >
          💡 Hint ({{ currentHint + 1 }}/{{ challenge.hints.length }})
        </button>
        <button
          v-if="!showSolution"
          class="text-sm font-semibold text-text-secondary border border-border hover:bg-surface px-3.5 py-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-mint"
          @click="showSolution = true"
        >
          View Solution
        </button>
      </div>
    </div>

    <!-- Test Results -->
    <div v-if="testResults.length" class="p-5 border-b border-border bg-card">
      <div class="text-xs font-bold text-mint uppercase tracking-[0.2em] mb-3">Test Results</div>
      <div class="space-y-2">
        <div v-for="(result, i) in testResults" :key="i"
          :class="[
            'flex items-center gap-3 rounded-lg border px-3.5 py-2.5 text-sm font-mono',
            result.passed ? 'bg-mint/5 border-mint/30' : 'bg-coral/5 border-coral/30',
          ]">
          <span :class="result.passed ? 'text-mint' : 'text-coral'">
            <svg v-if="result.passed" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </span>
          <span class="text-text-muted font-semibold">Test {{ i + 1 }}</span>
          <span class="text-text-secondary flex-1 truncate">Expected {{ result.expected }}</span>
          <span class="text-text-muted">→</span>
          <span :class="result.passed ? 'text-mint' : 'text-coral'" class="font-semibold truncate">Got {{ result.actual }}</span>
        </div>
      </div>
      <div v-if="allPassed" class="flex items-center gap-2 mt-4 pt-3 border-t border-border text-base font-bold text-mint">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        All tests passed! Challenge marked complete.
      </div>
    </div>

    <!-- Hints -->
    <div v-if="showHints" class="p-5 border-b border-border bg-amber/5">
      <div class="text-xs font-bold text-amber uppercase tracking-[0.2em] mb-3">Hints</div>
      <div v-for="(hint, i) in challenge.hints.slice(0, currentHint + 1)" :key="i"
        class="rounded-lg border border-amber/20 bg-card p-3.5 mb-2.5 text-base leading-relaxed text-text-primary/90 flex gap-3">
        <span class="text-lg mt-0.5">💡</span>
        <span>{{ hint }}</span>
      </div>
      <button
        v-if="currentHint < challenge.hints.length - 1"
        class="text-sm font-semibold text-amber hover:text-mint px-2 py-1 mt-1 rounded focus:outline-none focus:ring-2 focus:ring-mint"
        @click="currentHint++"
      >
        + Show next hint
      </button>
    </div>

    <!-- Solution -->
    <div v-if="showSolution" class="p-5 bg-card">
      <div class="text-xs font-bold text-lavender uppercase tracking-[0.2em] mb-3">Solution</div>
      <pre class="rounded-lg border border-border bg-surface/70 p-4 font-mono text-[15px] leading-relaxed text-text-primary overflow-auto">{{ challenge.solution }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Challenge } from '@/types/challenge'
import Badge from '@/components/ui/Badge.vue'
import { usePyodideStore } from '@/stores/pyodide'
import { useProgressStore } from '@/stores/progress'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { indentOnInput, bracketMatching } from '@codemirror/language'
import { closeBrackets } from '@codemirror/autocomplete'

const props = defineProps<{ challenge: Challenge }>()

const pyodide = usePyodideStore()
const progressStore = useProgressStore()
const editorContainer = ref<HTMLElement>()
let editorView: EditorView | null = null

const showHints = ref(false)
const currentHint = ref(0)
const showSolution = ref(false)
const testResults = ref<{ passed: boolean; expected: string; actual: string }[]>([])

const visibleTests = computed(() => props.challenge.testCases.filter(tc => !tc.hidden))

const allPassed = computed(() =>
  testResults.value.length > 0 && testResults.value.every(r => r.passed)
)

const difficultyColor = computed(() => ({
  easy: 'mint' as const,
  medium: 'amber' as const,
  hard: 'coral' as const,
}[props.challenge.difficulty]))

onMounted(() => {
  if (editorContainer.value) {
    const state = EditorState.create({
      doc: props.challenge.starterCode,
      extensions: [
        lineNumbers(),
        python(),
        oneDark,
        keymap.of([...defaultKeymap, indentWithTab]),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        EditorView.theme({
          '&': { backgroundColor: 'transparent' },
          '.cm-gutters': { backgroundColor: 'transparent', borderRight: '1px solid hsl(var(--border))' },
        }),
      ],
    })
    editorView = new EditorView({ state, parent: editorContainer.value })
  }
})

async function runTests() {
  if (!editorView) return
  const code = editorView.state.doc.toString()
  testResults.value = []

  const results: typeof testResults.value = []
  for (const tc of props.challenge.testCases) {
    const fullCode = tc.input ? `${code}\n${tc.input}` : code
    const result = await pyodide.runCode(fullCode)
    const actual = (result.error || result.output).trim()
    results.push({
      passed: actual === tc.expected.trim(),
      expected: tc.expected.trim(),
      actual,
    })
  }
  testResults.value = results
  if (allPassed.value) {
    progressStore.completeChallenge(props.challenge.id)
  }
}

function resetCode() {
  if (editorView) {
    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: props.challenge.starterCode }
    })
    testResults.value = []
  }
}

function renderText(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="px-2 py-0.5 border border-mint/20 bg-mint/10 text-mint rounded-md font-mono text-[0.92em] font-medium">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
}
</script>

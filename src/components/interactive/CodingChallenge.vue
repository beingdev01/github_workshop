<template>
  <div class="rounded-2xl border border-border bg-card overflow-hidden">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-amber/5">
      <div class="flex items-center gap-3">
        <span class="text-amber text-base">🏆</span>
        <span class="text-base font-semibold text-text-primary">{{ challenge.title }}</span>
      </div>
      <Badge :color="difficultyColor">{{ challenge.difficulty }}</Badge>
    </div>

    <!-- Description -->
    <div class="p-6 border-b border-border/30">
      <p class="text-lg text-text-secondary leading-relaxed" v-html="renderText(challenge.description)" />

      <!-- Test Cases Preview -->
      <div v-if="visibleTests.length" class="mt-4 space-y-3">
        <p class="text-sm font-semibold text-text-muted uppercase tracking-wider">Examples:</p>
        <div v-for="(tc, i) in visibleTests" :key="i" class="rounded-lg bg-surface/50 p-4 text-base font-mono">
          <div v-if="tc.input" class="text-text-muted">Input: <span class="text-sky">{{ tc.input }}</span></div>
          <div class="text-text-muted">Expected: <span class="text-mint">{{ tc.expected }}</span></div>
          <div v-if="tc.description" class="text-text-muted mt-2 text-sm font-body">{{ tc.description }}</div>
        </div>
      </div>
    </div>

    <!-- Editor -->
    <div class="border-b border-border/50">
      <div ref="editorContainer" class="min-h-[180px]" />
    </div>

    <!-- Controls -->
    <div class="flex items-center gap-3 px-6 py-4 border-b border-border/30 bg-surface/10">
      <button
        class="flex items-center gap-2 rounded-lg bg-amber/10 border border-amber/20 px-4 py-2 text-base font-medium text-amber hover:bg-amber/20 transition-all"
        :disabled="pyodide.isRunning"
        @click="runTests"
      >
        <span v-if="pyodide.isRunning" class="animate-spin">⏳</span>
        <span v-else>🧪</span>
        Run Tests
      </button>
      <button
        class="rounded-lg px-4 py-2 text-base text-text-muted hover:text-text-primary hover:bg-surface/50 transition-all"
        @click="resetCode"
      >
        ↻ Reset
      </button>
      <div class="ml-auto flex gap-3">
        <button
          v-if="!showHints && currentHint < challenge.hints.length"
          class="rounded-lg px-4 py-2 text-base text-lavender hover:bg-lavender/10 transition-all"
          @click="showHints = true"
        >
          💡 Hint {{ currentHint + 1 }}/{{ challenge.hints.length }}
        </button>
        <button
          v-if="!showSolution"
          class="rounded-lg px-4 py-2 text-base text-text-muted hover:text-coral hover:bg-coral/10 transition-all"
          @click="showSolution = true"
        >
          👀 Solution
        </button>
      </div>
    </div>

    <!-- Test Results -->
    <div v-if="testResults.length" class="p-6 space-y-3 border-b border-border/30">
      <div v-for="(result, i) in testResults" :key="i"
        :class="[
          'flex items-center gap-3 rounded-lg px-4 py-3 text-base font-mono',
          result.passed ? 'bg-mint/5 text-mint border border-mint/20' : 'bg-coral/5 text-coral border border-coral/20',
        ]">
        <span>{{ result.passed ? '✅' : '❌' }}</span>
        <span>Test {{ i + 1 }}:</span>
        <span class="text-text-muted">Expected {{ result.expected }}</span>
        <span>→ Got {{ result.actual }}</span>
      </div>
      <div v-if="allPassed" class="flex items-center gap-3 text-lg text-mint font-semibold mt-4">
        🎉 All tests passed! Challenge complete!
      </div>
    </div>

    <!-- Hints -->
    <div v-if="showHints" class="p-6 border-b border-border/30">
      <div v-for="(hint, i) in challenge.hints.slice(0, currentHint + 1)" :key="i"
        class="rounded-lg bg-lavender/5 border border-lavender/10 p-4 mb-3 text-base text-lavender/90">
        💡 Hint {{ i + 1 }}: {{ hint }}
      </div>
      <button
        v-if="currentHint < challenge.hints.length - 1"
        class="text-sm text-lavender hover:underline mt-2"
        @click="currentHint++"
      >
        Show next hint →
      </button>
    </div>

    <!-- Solution -->
    <div v-if="showSolution" class="p-6">
      <p class="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Solution:</p>
      <pre class="rounded-lg bg-[#18120f] border border-border/30 p-4 font-mono text-base text-mint/90 overflow-auto">{{ challenge.solution }}</pre>
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
          '&': { backgroundColor: '#18120f' },
          '.cm-gutters': { backgroundColor: '#18120f', borderRight: '1px solid #3f2b1c' },
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
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-surface text-mint font-mono text-xs">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>')
}
</script>

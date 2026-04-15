<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <!-- Header -->
    <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70">
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </span>
        <span class="text-base font-bold font-display text-text-primary tracking-tight">Interactive Playground</span>
      </div>
      <button
        class="text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-mint transition-colors px-3 py-1.5 rounded-md border border-transparent hover:border-mint/30 hover:bg-mint/10"
        @click="resetCode"
      >
        Reset
      </button>
    </div>

    <!-- Instructions -->
    <div v-if="instructions" class="px-5 py-4 border-b border-border bg-mint/5 text-base leading-relaxed flex gap-3 text-text-primary/90">
      <span class="shrink-0 text-lg mt-0.5">ℹ️</span>
      <span class="font-medium">{{ instructions }}</span>
    </div>

    <!-- Editor -->
    <div class="border-b border-border">
      <div ref="editorContainer" class="min-h-[200px]" />
    </div>

    <!-- Controls -->
    <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70">
      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-2 rounded-lg text-base font-bold bg-gradient-to-r from-mint to-amber text-white px-5 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-px transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="pyodideStore.isRunning"
          @click="runCode"
        >
          <svg v-if="pyodideStore.isRunning" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
          <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          {{ pyodideStore.isRunning ? 'Executing...' : 'Run Code' }}
        </button>
        <span v-if="pyodideStore.isLoading" class="text-xs text-text-muted tracking-wider uppercase flex items-center gap-2 font-semibold">
          Loading <span class="h-1.5 w-1.5 rounded-full bg-mint animate-pulse"></span>
        </span>
      </div>
    </div>

    <!-- Output -->
    <div class="bg-card">
      <div class="flex items-center justify-between px-5 py-2 border-b border-border bg-surface/50">
        <span class="text-xs font-mono text-mint font-semibold uppercase tracking-[0.2em]">Output</span>
      </div>
      <pre
        class="px-5 py-4 font-mono text-[15px] leading-[1.7] min-h-[80px] max-h-[320px] overflow-auto whitespace-pre-wrap"
        :class="hasError ? 'text-coral' : 'text-text-primary'"
      >{{ outputText || '# Output will appear here' }}</pre>

      <!-- Expected output comparison -->
      <div v-if="expectedOutput && outputText && !hasError" class="px-5 py-3 border-t border-border bg-surface/30">
        <div v-if="outputMatches" class="flex items-center gap-2 text-base font-semibold text-mint">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          Output matches expected
        </div>
        <div v-else class="text-base text-text-secondary flex items-start gap-2">
          <svg class="h-5 w-5 text-amber shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <div>
            Expected: <code class="font-mono text-text-primary bg-surface border border-border px-2 py-0.5 rounded text-[13px]">{{ expectedOutput }}</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { usePyodideStore } from '@/stores/pyodide'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { indentOnInput, bracketMatching } from '@codemirror/language'
import { closeBrackets } from '@codemirror/autocomplete'

const props = defineProps<{
  defaultCode: string
  instructions?: string
  expectedOutput?: string
}>()

const pyodideStore = usePyodideStore()
const editorContainer = ref<HTMLElement>()
let editorView: EditorView | null = null
const outputText = ref('')
const hasError = ref(false)

const outputMatches = computed(() => {
  if (!props.expectedOutput || !outputText.value) return false
  return outputText.value.trim() === props.expectedOutput.trim()
})

onMounted(() => {
  if (editorContainer.value) {
    const state = EditorState.create({
      doc: props.defaultCode,
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
    editorView = new EditorView({
      state,
      parent: editorContainer.value,
    })
  }
})

async function runCode() {
  if (!editorView) return
  const code = editorView.state.doc.toString()
  hasError.value = false
  outputText.value = ''

  const result = await pyodideStore.runCode(code)
  if (result.error) {
    hasError.value = true
    outputText.value = result.error
  } else {
    outputText.value = result.output
  }
}

function resetCode() {
  if (editorView) {
    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: props.defaultCode }
    })
    outputText.value = ''
    hasError.value = false
  }
}
</script>

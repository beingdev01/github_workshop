<template>
  <div class="rounded-2xl border border-border bg-card overflow-hidden">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-surface/20">
      <div class="flex items-center gap-3">
        <span class="text-mint text-base">▶</span>
        <span class="text-base font-semibold text-text-primary">Interactive Playground</span>
      </div>
      <div class="flex items-center gap-3">
        <button
          class="text-sm text-text-muted hover:text-amber transition-colors px-3 py-1.5 rounded hover:bg-surface/50"
          @click="resetCode"
        >
          ↻ Reset
        </button>
      </div>
    </div>

    <!-- Instructions -->
    <div v-if="instructions" class="px-6 py-4 bg-mint/5 border-b border-border/30 text-base text-mint/90 leading-relaxed">
      💡 {{ instructions }}
    </div>

    <!-- Editor -->
    <div class="border-b border-border/50">
      <div ref="editorContainer" class="min-h-[160px]" />
    </div>

    <!-- Controls -->
    <div class="flex items-center gap-3 px-6 py-4 border-b border-border/30 bg-surface/10">
      <button
        class="flex items-center gap-2 rounded-lg bg-mint/10 border border-mint/20 px-4 py-2 text-base font-medium text-mint hover:bg-mint/20 transition-all"
        :disabled="pyodideStore.isRunning"
        @click="runCode"
      >
        <span v-if="pyodideStore.isRunning" class="animate-spin">⏳</span>
        <span v-else>▶</span>
        {{ pyodideStore.isRunning ? 'Running...' : 'Run Code' }}
      </button>
      <span v-if="pyodideStore.isLoading" class="text-sm text-text-muted animate-pulse">
        Loading Python runtime...
      </span>
    </div>

    <!-- Output -->
    <div class="bg-[#080818]">
      <div class="flex items-center gap-3 px-6 py-3 border-b border-border/20">
        <span class="text-sm font-mono text-text-muted uppercase tracking-wider">Output</span>
      </div>
      <pre
        class="px-6 py-4 font-mono text-base min-h-[60px] max-h-[300px] overflow-auto whitespace-pre-wrap"
        :class="hasError ? 'text-coral' : 'text-mint/90'"
      >{{ outputText || '# Run your code to see output here' }}</pre>

      <!-- Expected output comparison -->
      <div v-if="expectedOutput && outputText && !hasError" class="px-6 py-3 border-t border-border/20">
        <div v-if="outputMatches" class="flex items-center gap-3 text-base text-mint">
          <span>✅</span> Output matches expected result!
        </div>
        <div v-else class="text-base text-amber">
          <span>⚡</span> Expected: <code class="font-mono">{{ expectedOutput }}</code>
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
          '&': { backgroundColor: '#0a0a1f' },
          '.cm-gutters': { backgroundColor: '#0a0a1f', borderRight: '1px solid #1a1a35' },
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

<template>
  <div class="relative group rounded-xl overflow-hidden border border-border bg-[#18120f]">
    <!-- Header -->
    <div class="flex items-center justify-between px-6 py-3 border-b border-border/50 bg-surface/30">
      <div class="flex items-center gap-3">
        <div class="flex gap-2">
          <span class="w-3 h-3 rounded-full bg-coral/60" />
          <span class="w-3 h-3 rounded-full bg-amber/60" />
          <span class="w-3 h-3 rounded-full bg-mint/60" />
        </div>
        <span v-if="filename" class="text-sm font-mono text-text-muted ml-3">{{ filename }}</span>
        <span v-else class="text-sm font-mono text-text-muted ml-3">python</span>
      </div>
      <button
        class="text-sm text-text-muted hover:text-mint transition-colors px-3 py-1.5 rounded opacity-0 group-hover:opacity-100"
        @click="copyCode"
      >
        {{ copied ? '✓ Copied' : 'Copy' }}
      </button>
    </div>
    <!-- Code -->
    <pre class="p-6 overflow-x-auto text-lg leading-relaxed font-mono"><code v-html="highlightedCode" /></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  code: string
  language?: string
  filename?: string
}>()

const copied = ref(false)

// ── Token-based syntax highlighter ──────────────────────────
// Single-pass tokenizer that never applies regex to its own HTML output.
// Each character is consumed exactly once, so no cascading corruption.

const KEYWORDS = new Set([
  'def', 'class', 'if', 'elif', 'else', 'for', 'while', 'return', 'import',
  'from', 'as', 'try', 'except', 'finally', 'with', 'raise', 'pass', 'break',
  'continue', 'and', 'or', 'not', 'in', 'is', 'lambda', 'yield', 'global',
  'nonlocal', 'assert', 'del', 'True', 'False', 'None', 'match', 'case',
  'async', 'await',
])

const BUILTINS = new Set([
  'print', 'input', 'len', 'range', 'type', 'int', 'float', 'str', 'bool',
  'list', 'dict', 'set', 'tuple', 'enumerate', 'zip', 'map', 'filter',
  'sorted', 'reversed', 'abs', 'max', 'min', 'sum', 'round', 'open',
  'super', 'isinstance', 'hasattr', 'getattr', 'setattr', 'any', 'all',
  'id', 'hex', 'oct', 'bin', 'ord', 'chr', 'repr', 'hash', 'callable',
  'dir', 'vars', 'help', 'iter', 'next', 'property', 'staticmethod',
  'classmethod', 'frozenset', 'bytes', 'bytearray', 'complex', 'divmod',
  'pow', 'format', 'object', 'slice',
  'ValueError', 'TypeError', 'KeyError', 'IndexError', 'AttributeError',
  'NameError', 'FileNotFoundError', 'PermissionError', 'IsADirectoryError',
  'ZeroDivisionError', 'StopIteration', 'RuntimeError', 'Exception',
  'NotImplementedError', 'IOError', 'OSError',
])

const SPECIAL = new Set(['self', 'cls'])

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function tok(cls: string, text: string): string {
  return `<span class="${cls}">${esc(text)}</span>`
}

/** Highlight a single line. Accepts optional multiline-string state. */
function highlightLine(line: string, mlQuote: string | null): { html: string; mlQuote: string | null } {
  // If we're continuing inside a multiline string from a previous line
  if (mlQuote) {
    const close = mlQuote.repeat(3)
    const endIdx = line.indexOf(close)
    if (endIdx !== -1) {
      const strPart = tok('hl-str', line.slice(0, endIdx + 3))
      const rest = highlightLine(line.slice(endIdx + 3), null)
      return { html: strPart + rest.html, mlQuote: rest.mlQuote }
    }
    return { html: tok('hl-str', line), mlQuote }
  }

  const parts: string[] = []
  let i = 0
  let prevWord = ''

  while (i < line.length) {
    // Whitespace — preserve, don't reset prevWord
    if (line[i] === ' ' || line[i] === '\t') {
      let j = i
      while (j < line.length && (line[j] === ' ' || line[j] === '\t')) j++
      parts.push(line.slice(i, j))
      i = j
      continue
    }

    // Comment — rest of line
    if (line[i] === '#') {
      parts.push(tok('hl-cm', line.slice(i)))
      i = line.length
      continue
    }

    // Decorator
    if (line[i] === '@') {
      let j = i + 1
      while (j < line.length && /[a-zA-Z0-9_.]/.test(line[j])) j++
      parts.push(tok('hl-dec', line.slice(i, j)))
      prevWord = ''
      i = j
      continue
    }

    // String
    if (line[i] === '"' || line[i] === "'") {
      const quote = line[i]
      const isTriple = line.startsWith(quote.repeat(3), i)
      if (isTriple) {
        const searchFrom = i + 3
        const endIdx = line.indexOf(quote.repeat(3), searchFrom)
        if (endIdx !== -1) {
          // Complete triple-quoted string on this line
          parts.push(tok('hl-str', line.slice(i, endIdx + 3)))
          i = endIdx + 3
        } else {
          // Unclosed — multiline string starts here
          parts.push(tok('hl-str', line.slice(i)))
          return { html: parts.join(''), mlQuote: quote }
        }
      } else {
        let j = i + 1
        while (j < line.length) {
          if (line[j] === '\\') { j += 2; continue }
          if (line[j] === quote) { j++; break }
          j++
        }
        parts.push(tok('hl-str', line.slice(i, j)))
        i = j
      }
      prevWord = ''
      continue
    }

    // Word (identifier / keyword / builtin)
    if (/[a-zA-Z_]/.test(line[i])) {
      let j = i
      while (j < line.length && /[a-zA-Z0-9_]/.test(line[j])) j++
      const word = line.slice(i, j)

      if (KEYWORDS.has(word)) {
        parts.push(tok('hl-kw', word))
      } else if (BUILTINS.has(word) && j < line.length && line[j] === '(') {
        parts.push(tok('hl-bi', word))
      } else if (SPECIAL.has(word)) {
        parts.push(tok('hl-sp', word))
      } else if (prevWord === 'def') {
        parts.push(tok('hl-fn', word))
      } else if (prevWord === 'class') {
        parts.push(tok('hl-cls', word))
      } else {
        parts.push(esc(word))
      }
      prevWord = word
      i = j
      continue
    }

    // Number
    if (/\d/.test(line[i])) {
      let j = i
      if (line[i] === '0' && j + 1 < line.length && /[xXoObB]/.test(line[j + 1])) {
        j += 2
        while (j < line.length && /[0-9a-fA-F_]/.test(line[j])) j++
      } else {
        while (j < line.length && /[\d_]/.test(line[j])) j++
        if (j < line.length && line[j] === '.') {
          j++
          while (j < line.length && /[\d_]/.test(line[j])) j++
        }
        if (j < line.length && /[eE]/.test(line[j])) {
          j++
          if (j < line.length && /[+-]/.test(line[j])) j++
          while (j < line.length && /[\d_]/.test(line[j])) j++
        }
      }
      parts.push(tok('hl-num', line.slice(i, j)))
      prevWord = ''
      i = j
      continue
    }

    // Everything else (operators, punctuation)
    parts.push(esc(line[i]))
    prevWord = ''
    i++
  }

  return { html: parts.join(''), mlQuote: null }
}

const highlightedCode = computed(() => {
  const lines = props.code.split('\n')
  let mlQuote: string | null = null
  const result: string[] = []

  for (const line of lines) {
    const r = highlightLine(line, mlQuote)
    result.push(r.html)
    mlQuote = r.mlQuote
  }

  return result.join('\n')
})

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {}
}
</script>

<style scoped>
:deep(.hl-cm)  { color: #666680; font-style: italic; }
:deep(.hl-str) { color: #ffd166; }
:deep(.hl-kw)  { color: #7b68ee; font-weight: 500; }
:deep(.hl-bi)  { color: #06d6a0; }
:deep(.hl-fn)  { color: #06d6a0; font-weight: 600; }
:deep(.hl-cls) { color: #118ab2; font-weight: 600; }
:deep(.hl-num) { color: #ef476f; }
:deep(.hl-dec) { color: #7b68ee; font-style: italic; }
:deep(.hl-sp)  { color: #ef476f; font-style: italic; }
</style>

<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <div class="px-5 py-4 border-b border-border bg-surface/65">
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber/15 text-amber">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <div>
          <h3 class="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight">{{ title }}</h3>
          <p v-if="description" class="text-sm md:text-base text-text-secondary mt-1">{{ description }}</p>
        </div>
      </div>
    </div>

    <div class="p-5 space-y-5">
      <div>
        <label class="block text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1.5">
          Type a Python literal — bool() will tell you the truth
        </label>
        <input
          v-model="raw"
          spellcheck="false"
          class="w-full rounded-md border border-border bg-surface/60 px-3 py-2.5 font-mono text-base text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
          placeholder='try: 0   ""   []   {0}   "False"   None'
        />
      </div>

      <div class="rounded-lg border border-border bg-surface/60 p-4">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Result</span>
          <code class="font-mono text-base text-text-primary bg-card border border-border rounded-md px-3 py-1.5">
            bool(<span class="text-mint">{{ raw || '...' }}</span>)
          </code>
          <span
            :class="[
              'rounded-md border px-3 py-1 text-sm font-bold font-mono transition-colors',
              evalResult.ok && evalResult.truthy
                ? 'border-mint text-mint bg-mint/10'
                : evalResult.ok
                  ? 'border-coral text-coral bg-coral/10'
                  : 'border-border text-text-muted bg-card',
            ]"
          >→ {{ evalResult.ok ? String(evalResult.truthy) : '?' }}</span>
        </div>
        <p class="text-sm text-text-secondary mt-2 leading-relaxed">{{ evalResult.reason }}</p>
      </div>

      <div>
        <div class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-2">Quick examples</div>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="ex in examples"
            :key="ex"
            type="button"
            class="rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-text-secondary hover:border-mint/50 hover:text-mint transition-colors"
            @click="raw = ex"
          >{{ ex }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Truthiness Tester',
  description: 'Python\'s bool() rule: most things are truthy. The "falsy" club is small — and surprising.',
})

const raw = ref('[]')

const examples = ['0', '1', '-1', '0.0', '""', '" "', '"False"', '[]', '[0]', '{}', '{0}', 'None', 'True', 'False', 'set()', 'range(0)']

interface EvalRes { ok: boolean; truthy: boolean; reason: string }

const evalResult = computed<EvalRes>(() => evaluate(raw.value.trim()))

function evaluate(src: string): EvalRes {
  if (!src) return { ok: false, truthy: false, reason: 'Type a literal above to test it.' }

  // Special tokens
  if (src === 'None') return { ok: true, truthy: false, reason: 'None is the singleton None — always falsy.' }
  if (src === 'True') return { ok: true, truthy: true, reason: 'Literal True.' }
  if (src === 'False') return { ok: true, truthy: false, reason: 'Literal False.' }
  if (src === 'set()') return { ok: true, truthy: false, reason: 'Empty set has length 0 — falsy.' }
  if (/^range\(\s*0\s*\)$/.test(src)) return { ok: true, truthy: false, reason: 'range(0) yields no items — falsy.' }
  if (/^range\(\s*[1-9]\d*\s*\)$/.test(src)) return { ok: true, truthy: true, reason: 'Non-empty range — truthy.' }

  // Number
  if (/^-?\d+(\.\d+)?$/.test(src)) {
    const n = parseFloat(src)
    return { ok: true, truthy: n !== 0, reason: n === 0 ? 'Zero numbers (int or float) are falsy.' : 'Non-zero numbers are truthy.' }
  }

  // String literal
  const strMatch = src.match(/^(['"])(.*)\1$/)
  if (strMatch) {
    const inner = strMatch[2]
    return { ok: true, truthy: inner.length > 0, reason: inner.length === 0 ? 'Empty string "" is falsy.' : 'Any non-empty string is truthy — even "False" or " ".' }
  }

  // List
  if (/^\[.*\]$/.test(src)) {
    const inner = src.slice(1, -1).trim()
    const empty = inner.length === 0
    return { ok: true, truthy: !empty, reason: empty ? 'Empty list [] is falsy.' : 'Any non-empty list is truthy — even [0] or [None].' }
  }

  // Tuple
  if (/^\(.*\)$/.test(src)) {
    const inner = src.slice(1, -1).trim()
    const empty = inner.length === 0
    return { ok: true, truthy: !empty, reason: empty ? 'Empty tuple () is falsy.' : 'Any non-empty tuple is truthy.' }
  }

  // Dict / Set with braces
  if (/^\{.*\}$/.test(src)) {
    const inner = src.slice(1, -1).trim()
    if (inner.length === 0) return { ok: true, truthy: false, reason: 'Empty dict {} is falsy.' }
    const isDict = /:/.test(inner)
    return { ok: true, truthy: true, reason: isDict ? 'Non-empty dict — truthy regardless of values.' : 'Non-empty set — truthy.' }
  }

  return { ok: false, truthy: false, reason: 'Could not parse — try a literal like 0, "", [], {}, None.' }
}
</script>

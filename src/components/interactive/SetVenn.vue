<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <div class="px-5 py-4 border-b border-border bg-surface/65">
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-sky/15 text-sky">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" />
          </svg>
        </span>
        <div>
          <h3 class="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight">{{ title }}</h3>
          <p v-if="description" class="text-sm md:text-base text-text-secondary mt-1">{{ description }}</p>
        </div>
      </div>
    </div>

    <div class="p-5 grid gap-5 md:grid-cols-[1fr_1fr] items-start">
      <!-- SVG Venn -->
      <div class="relative">
        <svg viewBox="0 0 360 240" class="w-full h-auto">
          <!-- A circle -->
          <circle
            cx="130" cy="120" r="90"
            :fill="opColor.A"
            :stroke="ringColor.A" stroke-width="2"
            class="transition-[fill] duration-300"
          />
          <!-- B circle -->
          <circle
            cx="230" cy="120" r="90"
            :fill="opColor.B"
            :stroke="ringColor.B" stroke-width="2"
            class="transition-[fill] duration-300"
          />
          <!-- Labels -->
          <text x="60" y="40" fill="#34d399" font-family="ui-monospace,monospace" font-weight="700" font-size="16">A</text>
          <text x="290" y="40" fill="#fbbf24" font-family="ui-monospace,monospace" font-weight="700" font-size="16">B</text>

          <!-- Element labels -->
          <g font-family="ui-monospace,monospace" font-size="13" font-weight="600" text-anchor="middle">
            <text v-for="(el, i) in onlyA" :key="`a${i}`" :x="80" :y="100 + i * 18" fill="#e5e7eb">{{ el }}</text>
            <text v-for="(el, i) in both" :key="`ab${i}`" :x="180" :y="100 + i * 18" fill="#e5e7eb">{{ el }}</text>
            <text v-for="(el, i) in onlyB" :key="`b${i}`" :x="280" :y="100 + i * 18" fill="#e5e7eb">{{ el }}</text>
          </g>
        </svg>

        <!-- Op picker -->
        <div class="mt-4 grid grid-cols-4 gap-2">
          <button
            v-for="o in ops"
            :key="o.id"
            type="button"
            :class="[
              'rounded-md border px-2 py-2 text-xs font-bold transition-all',
              op === o.id ? 'border-mint bg-mint/10 text-mint' : 'border-border bg-surface/60 text-text-secondary hover:border-mint/40',
            ]"
            @click="op = o.id"
          >
            <div class="font-mono text-base">{{ o.symbol }}</div>
            <div class="opacity-80">{{ o.name }}</div>
          </button>
        </div>
      </div>

      <!-- Inputs + Result -->
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1.5">Set A (comma separated)</label>
          <input
            v-model="rawA"
            class="w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
          />
        </div>
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.2em] text-amber mb-1.5">Set B (comma separated)</label>
          <input
            v-model="rawB"
            class="w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
          />
        </div>
        <div class="rounded-lg border border-border bg-surface/60 p-4 space-y-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Expression</span>
            <code class="font-mono text-sm text-text-primary bg-card border border-border rounded-md px-2 py-1">
              A {{ currentOp.symbol }} B
            </code>
            <span class="text-xs text-text-muted">— {{ currentOp.method }}</span>
          </div>
          <div class="flex items-start gap-2 flex-wrap">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mt-1">Result</span>
            <code class="font-mono text-sm text-mint bg-mint/10 border border-mint/30 rounded-md px-3 py-1.5">
              {{ resultDisplay }}
            </code>
          </div>
          <p class="text-xs text-text-muted leading-relaxed">{{ currentOp.note }}</p>
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
  title: 'Set Operations Venn',
  description: 'Pick an operator and watch how |, &, -, ^ carve the universe.',
})

type OpId = 'union' | 'intersect' | 'diff' | 'symdiff'
interface Op { id: OpId; symbol: string; name: string; method: string; note: string }

const ops: Op[] = [
  { id: 'union', symbol: '|', name: 'union', method: 'A.union(B)', note: 'Everything in A or B (no duplicates).' },
  { id: 'intersect', symbol: '&', name: 'intersection', method: 'A.intersection(B)', note: 'Only elements in BOTH A and B.' },
  { id: 'diff', symbol: '-', name: 'difference', method: 'A.difference(B)', note: 'In A but NOT in B (order matters).' },
  { id: 'symdiff', symbol: '^', name: 'symmetric diff', method: 'A.symmetric_difference(B)', note: 'In A or B but NOT both.' },
]

const op = ref<OpId>('union')
const rawA = ref('1, 2, 3, 4')
const rawB = ref('3, 4, 5, 6')

const A = computed(() => parse(rawA.value))
const B = computed(() => parse(rawB.value))

function parse(s: string): string[] {
  return [...new Set(s.split(',').map(x => x.trim()).filter(Boolean))]
}

const onlyA = computed(() => A.value.filter(x => !B.value.includes(x)))
const onlyB = computed(() => B.value.filter(x => !A.value.includes(x)))
const both = computed(() => A.value.filter(x => B.value.includes(x)))

const result = computed<string[]>(() => {
  switch (op.value) {
    case 'union': return [...new Set([...A.value, ...B.value])]
    case 'intersect': return both.value
    case 'diff': return onlyA.value
    case 'symdiff': return [...onlyA.value, ...onlyB.value]
  }
})

const resultDisplay = computed(() => `{${result.value.join(', ')}}`)
const currentOp = computed(() => ops.find(o => o.id === op.value)!)

const opColor = computed(() => {
  const high = 'rgba(52, 211, 153, 0.32)'
  const mid = 'rgba(52, 211, 153, 0.14)'
  const dim = 'rgba(100, 116, 139, 0.10)'
  switch (op.value) {
    case 'union': return { A: high, B: high }
    case 'intersect': return { A: dim, B: dim }
    case 'diff': return { A: high, B: dim }
    case 'symdiff': return { A: mid, B: mid }
  }
})

const ringColor = computed(() => ({
  A: '#34d399',
  B: '#fbbf24',
}))
</script>

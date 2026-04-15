<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <div class="px-5 py-4 border-b border-border bg-surface/65">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-3">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-coral/15 text-coral">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l6-6 4 4 8-8" />
            </svg>
          </span>
          <div>
            <h3 class="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight">{{ title }}</h3>
            <p v-if="description" class="text-sm md:text-base text-text-secondary mt-1">{{ description }}</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-md border border-border px-3 py-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-mint/40 transition-colors"
            @click="reset"
          >Reset</button>
          <button
            type="button"
            class="rounded-md bg-mint text-white px-4 py-1.5 text-sm font-semibold hover:bg-amber transition-colors"
            @click="toggle"
          >{{ running ? 'Pause' : 'Race' }}</button>
        </div>
      </div>
    </div>

    <div class="p-5 space-y-5">
      <!-- N control -->
      <div>
        <div class="flex items-center justify-between text-xs font-semibold mb-2">
          <span class="uppercase tracking-[0.18em] text-text-muted">Input size n</span>
          <span class="font-mono text-mint text-sm">n = {{ n }}</span>
        </div>
        <input
          type="range"
          min="1"
          :max="maxN"
          v-model.number="n"
          class="w-full accent-mint"
        />
      </div>

      <!-- Bars -->
      <div class="space-y-3">
        <div
          v-for="row in rows"
          :key="row.label"
          class="grid grid-cols-[110px_1fr_90px] items-center gap-3"
        >
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-sm" :style="{ background: row.color }"></span>
            <span class="font-mono text-sm font-bold text-text-primary">{{ row.label }}</span>
          </div>
          <div class="h-7 rounded-md bg-surface/60 border border-border relative overflow-hidden">
            <div
              class="h-full rounded-md transition-[width] duration-300 ease-out"
              :style="{ width: `${row.pct}%`, background: row.color, opacity: 0.85 }"
            ></div>
          </div>
          <div class="text-right font-mono text-xs text-text-secondary">{{ formatOps(row.ops) }} ops</div>
        </div>
      </div>

      <p class="text-xs text-text-muted leading-relaxed">
        Bars are normalized to the slowest curve at the current <code class="font-mono text-mint">n</code>.
        Hit <strong>Race</strong> to grow <code class="font-mono text-mint">n</code> over time and watch O(n²) explode while O(log n) barely moves.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Algorithm Complexity Racer',
  description: 'See how O(1), O(log n), O(n), O(n log n), and O(n²) scale as input grows.',
})

const maxN = 200
const n = ref(20)
const running = ref(false)
let timer: number | null = null

interface Curve { label: string; color: string; fn: (n: number) => number }
const curves: Curve[] = [
  { label: 'O(1)', color: '#34d399', fn: () => 1 },
  { label: 'O(log n)', color: '#60a5fa', fn: n => Math.max(1, Math.log2(n)) },
  { label: 'O(n)', color: '#fbbf24', fn: n => n },
  { label: 'O(n log n)', color: '#fb923c', fn: n => n * Math.max(1, Math.log2(n)) },
  { label: 'O(n²)', color: '#f87171', fn: n => n * n },
]

const rows = computed(() => {
  const ops = curves.map(c => ({ label: c.label, color: c.color, ops: c.fn(n.value) }))
  const max = Math.max(...ops.map(r => r.ops))
  return ops.map(r => ({ ...r, pct: (r.ops / max) * 100 }))
})

function formatOps(o: number): string {
  if (o >= 1000) return `${(o / 1000).toFixed(1)}k`
  if (o >= 100) return o.toFixed(0)
  if (o >= 10) return o.toFixed(1)
  return o.toFixed(2)
}

function tick() {
  if (n.value >= maxN) {
    stop()
    return
  }
  n.value = Math.min(maxN, n.value + 2)
}

function start() {
  if (timer !== null) return
  if (n.value >= maxN) n.value = 5
  running.value = true
  timer = window.setInterval(tick, 120)
}

function stop() {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
  running.value = false
}

function toggle() { running.value ? stop() : start() }
function reset() { stop(); n.value = 20 }

watch(running, () => { /* drives button label */ })
onBeforeUnmount(stop)
</script>

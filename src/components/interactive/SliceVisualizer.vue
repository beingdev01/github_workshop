<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <div class="px-5 py-4 border-b border-border bg-surface/65">
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 4v16m8-16v16M4 8h16M4 16h16" />
          </svg>
        </span>
        <div>
          <h3 class="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight">{{ title }}</h3>
          <p v-if="description" class="text-sm md:text-base text-text-secondary mt-1">{{ description }}</p>
        </div>
      </div>
    </div>

    <div class="p-5 space-y-5">
      <!-- Sequence display -->
      <div class="overflow-x-auto pb-2">
        <div class="inline-flex flex-col gap-1 min-w-full">
          <!-- Positive indices -->
          <div class="flex">
            <div
              v-for="(item, idx) in items"
              :key="`p-${idx}`"
              class="w-12 text-center text-[11px] font-mono text-text-muted"
            >{{ idx }}</div>
          </div>
          <!-- Items -->
          <div class="flex">
            <div
              v-for="(item, idx) in items"
              :key="`i-${idx}`"
              :class="[
                'w-12 h-12 flex items-center justify-center font-mono text-base font-bold border transition-all duration-300',
                idx === 0 ? 'rounded-l-lg' : '',
                idx === items.length - 1 ? 'rounded-r-lg' : '',
                idx > 0 ? '-ml-px' : '',
                isInSlice(idx)
                  ? 'bg-mint/20 border-mint text-mint scale-110 z-10'
                  : 'bg-surface/60 border-border text-text-secondary',
              ]"
            >{{ item }}</div>
          </div>
          <!-- Negative indices -->
          <div class="flex">
            <div
              v-for="(item, idx) in items"
              :key="`n-${idx}`"
              class="w-12 text-center text-[11px] font-mono text-amber/70"
            >{{ idx - items.length }}</div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="grid gap-4 md:grid-cols-3">
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1.5">start</label>
          <input
            v-model.number="start"
            type="number"
            :min="-items.length"
            :max="items.length"
            class="w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
          />
        </div>
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.2em] text-amber mb-1.5">stop</label>
          <input
            v-model.number="stop"
            type="number"
            :min="-items.length"
            :max="items.length"
            class="w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
          />
        </div>
        <div>
          <label class="block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-1.5">step</label>
          <input
            v-model.number="step"
            type="number"
            :min="-items.length"
            :max="items.length"
            class="w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"
          />
        </div>
      </div>

      <!-- Result row -->
      <div class="rounded-lg border border-border bg-surface/60 p-4 space-y-3">
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Expression</span>
          <code class="font-mono text-base text-text-primary bg-card border border-border rounded-md px-3 py-1.5">
            seq[<span class="text-mint">{{ start }}</span>:<span class="text-amber">{{ stop }}</span>:<span class="text-coral">{{ step }}</span>]
          </code>
        </div>
        <div class="flex items-center gap-3 flex-wrap">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Result</span>
          <code class="font-mono text-base text-mint bg-mint/10 border border-mint/30 rounded-md px-3 py-1.5">{{ resultDisplay }}</code>
          <span class="text-xs text-text-muted">{{ resultIndices.length }} items</span>
        </div>
      </div>

      <!-- Presets -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="preset in presets"
          :key="preset.label"
          type="button"
          class="rounded-md border border-border bg-surface/60 px-3 py-1.5 text-xs font-semibold text-text-secondary hover:border-mint/50 hover:text-mint transition-colors"
          @click="applyPreset(preset)"
        >{{ preset.label }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  description?: string
  items?: (string | number)[]
}>(), {
  title: 'Slice Visualizer',
  description: 'Drag the sliders to see how Python computes seq[start:stop:step].',
  items: () => ['P', 'y', 't', 'h', 'o', 'n', 'i', 's', 't', 'a'],
})

const start = ref(0)
const stop = ref(props.items.length)
const step = ref(1)

interface Preset { label: string; start: number; stop: number; step: number }
const presets: Preset[] = [
  { label: 'all', start: 0, stop: props.items.length, step: 1 },
  { label: 'reverse', start: props.items.length - 1, stop: -props.items.length - 1, step: -1 },
  { label: 'first 3', start: 0, stop: 3, step: 1 },
  { label: 'last 3', start: -3, stop: props.items.length, step: 1 },
  { label: 'every 2nd', start: 0, stop: props.items.length, step: 2 },
  { label: 'middle', start: 2, stop: -2, step: 1 },
]

function applyPreset(p: Preset) {
  start.value = p.start
  stop.value = p.stop
  step.value = p.step
}

const resultIndices = computed<number[]>(() => {
  const len = props.items.length
  const s = Number.isFinite(step.value) && step.value !== 0 ? step.value : 1
  const norm = (i: number) => (i < 0 ? Math.max(i + len, s > 0 ? 0 : -1) : Math.min(i, s > 0 ? len : len - 1))
  let i = norm(start.value)
  const j = norm(stop.value)
  const out: number[] = []
  if (s > 0) {
    for (; i < j; i += s) if (i >= 0 && i < len) out.push(i)
  } else {
    for (; i > j; i += s) if (i >= 0 && i < len) out.push(i)
  }
  return out
})

function isInSlice(idx: number): boolean {
  return resultIndices.value.includes(idx)
}

const resultDisplay = computed(() => {
  const vals = resultIndices.value.map(i => props.items[i])
  const allChars = props.items.every(it => typeof it === 'string' && (it as string).length === 1)
  if (allChars) return `'${vals.join('')}'`
  return `[${vals.map(v => typeof v === 'string' ? `'${v}'` : v).join(', ')}]`
})
</script>

<template>
  <div class="rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8">
    <div class="px-5 py-4 border-b border-border bg-surface/65">
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold uppercase tracking-[0.2em] text-amber">Interactive Memory Lab</span>
            <span class="rounded-md border border-border px-2 py-0.5 text-xs text-text-muted">
              Step {{ currentStep + 1 }} / {{ props.steps.length }}
            </span>
          </div>
          <h3 class="text-xl md:text-2xl font-display font-bold text-text-primary tracking-tight">{{ props.title }}</h3>
          <p v-if="props.prompt" class="text-sm md:text-base text-text-secondary mt-1">{{ props.prompt }}</p>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-md border border-border px-3 py-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-mint/40 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="currentStep === 0"
            @click="prevStep"
          >
            Previous
          </button>
          <button
            type="button"
            class="rounded-md bg-mint text-white px-3 py-1.5 text-sm font-semibold hover:bg-amber transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="currentStep >= props.steps.length - 1"
            @click="nextStep"
          >
            Next
          </button>
        </div>
      </div>

      <div class="mt-3 h-2 w-full rounded-full bg-surface border border-border overflow-hidden">
        <div class="h-full bg-gradient-to-r from-mint to-amber transition-all duration-300" :style="{ width: `${progressPercent}%` }" />
      </div>

      <div class="mt-3 flex flex-wrap gap-2">
        <button
          v-for="(step, idx) in props.steps"
          :key="idx"
          type="button"
          :class="[
            'rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors',
            idx === currentStep
              ? 'border-mint bg-mint/10 text-mint'
              : 'border-border text-text-muted hover:border-mint/40 hover:text-text-primary',
          ]"
          @click="currentStep = idx"
        >
          {{ idx + 1 }}. {{ step.title }}
        </button>
      </div>
    </div>

    <div class="p-5 space-y-4">
      <div class="rounded-lg border border-border bg-surface/60 px-4 py-3">
        <div class="text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1">Current Action</div>
        <p class="text-base md:text-lg text-text-primary font-semibold">{{ current.action || current.title }}</p>
      </div>

      <div v-if="current.code" class="rounded-lg border border-border overflow-hidden">
        <div class="px-3 py-2 border-b border-border bg-surface/70 text-xs font-bold uppercase tracking-[0.2em] text-text-muted">Code</div>
        <pre class="px-4 py-3 font-mono text-[14px] leading-[1.6] text-text-primary bg-card overflow-auto">{{ current.code }}</pre>
      </div>

      <MemoryDiagram
        embedded
        :title="`Memory Snapshot - ${current.title}`"
        :description="current.action"
        :bindings="current.bindings"
        :objects="current.objects"
      />

      <div class="rounded-lg border border-border bg-surface/60 px-4 py-3">
        <div class="text-xs font-bold uppercase tracking-[0.2em] text-amber mb-1">Explanation</div>
        <p class="text-base leading-relaxed text-text-primary/90" v-html="renderMarkdown(current.explanation)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MemoryLabStep } from '@/types/content'
import MemoryDiagram from '@/components/interactive/MemoryDiagram.vue'

const props = defineProps<{
  title: string
  prompt?: string
  steps: MemoryLabStep[]
}>()

const currentStep = ref(0)

const current = computed<MemoryLabStep>(() => {
  return props.steps[currentStep.value] ?? props.steps[0] ?? {
    title: 'No steps configured',
    action: 'Add at least one step to this memory lab.',
    code: '',
    bindings: [],
    objects: [],
    explanation: 'This lab has no configured steps yet.',
  }
})

const progressPercent = computed(() => {
  if (props.steps.length === 0) return 0
  return ((currentStep.value + 1) / props.steps.length) * 100
})

function nextStep() {
  if (currentStep.value < props.steps.length - 1) currentStep.value += 1
}

function prevStep() {
  if (currentStep.value > 0) currentStep.value -= 1
}

function renderMarkdown(content: string): string {
  return content
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="border border-mint/20 bg-mint/10 text-mint px-2 py-0.5 rounded-md font-mono text-[0.92em] font-medium">$1</code>')
    .replace(/\n/g, '<br />')
}
</script>

<template>
  <div
    :class="[
      'rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)]',
      props.embedded ? 'my-0' : 'my-8',
    ]"
  >
    <div class="px-5 py-4 border-b border-border bg-surface/60">
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-amber/15 text-amber">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </span>
        <div>
          <h3 class="text-lg md:text-xl font-display font-bold text-text-primary tracking-tight">{{ props.title }}</h3>
          <p v-if="props.description" class="text-sm md:text-base text-text-secondary mt-1">{{ props.description }}</p>
        </div>
      </div>
    </div>

    <div class="p-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr] items-start">
      <section>
        <div class="text-xs font-bold uppercase tracking-[0.2em] text-mint mb-3">Namespace Bindings</div>
        <div class="space-y-2.5">
          <button
            v-for="binding in props.bindings"
            :key="`${binding.scope || 'global'}-${binding.name}`"
            type="button"
            class="w-full rounded-lg border border-border bg-surface/70 px-3.5 py-3 text-left transition-all hover:border-mint/40 hover:bg-mint/5 focus:outline-none focus:ring-2 focus:ring-mint"
            @mouseenter="activeObjectId = binding.objectId"
            @mouseleave="activeObjectId = null"
            @focus="activeObjectId = binding.objectId"
            @blur="activeObjectId = null"
          >
            <div class="flex items-center justify-between gap-3">
              <span class="font-mono text-[14px] md:text-[15px] text-text-primary font-semibold">
                {{ bindingLabel(binding) }}
              </span>
              <span class="rounded-md bg-card border border-border px-2 py-0.5 font-mono text-[12px] text-text-secondary">
                id: {{ binding.objectId }}
              </span>
            </div>
            <div class="mt-2 flex items-center gap-2 text-xs text-text-muted uppercase tracking-[0.14em]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 12h14m0 0l-5-5m5 5l-5 5" />
              </svg>
              points to heap object
            </div>
          </button>
        </div>
      </section>

      <div class="hidden lg:flex h-full items-center justify-center px-2 pt-7">
        <div class="w-px h-[86%] bg-gradient-to-b from-transparent via-border to-transparent"></div>
      </div>

      <section>
        <div class="text-xs font-bold uppercase tracking-[0.2em] text-amber mb-3">Heap Objects</div>
        <div class="space-y-3">
          <article
            v-for="obj in props.objects"
            :key="obj.id"
            :class="[
              'rounded-lg border px-3.5 py-3 transition-all duration-200',
              toneClasses[obj.accent || 'neutral'],
              activeObjectId === obj.id
                ? 'border-mint shadow-[0_10px_20px_-16px_rgba(234,88,12,0.8)] ring-1 ring-mint/40'
                : 'border-border/80',
            ]"
          >
            <div class="flex items-center justify-between gap-3">
              <span class="font-mono text-[13px] font-bold text-text-primary">object #{{ obj.id }}</span>
              <span class="rounded-md border border-border/70 bg-card/70 px-2 py-0.5 text-xs font-semibold text-text-secondary">
                {{ obj.type }}
              </span>
            </div>

            <pre class="mt-2 font-mono text-[14px] leading-[1.6] whitespace-pre-wrap text-text-primary">{{ obj.value }}</pre>

            <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span class="rounded-md border border-border/70 bg-card/70 px-2 py-0.5 text-text-secondary">
                refs from names: {{ referenceCount(obj.id) }}
              </span>
              <span
                v-if="obj.mutable !== undefined"
                :class="obj.mutable ? 'text-mint' : 'text-text-secondary'"
                class="rounded-md border border-border/70 bg-card/70 px-2 py-0.5"
              >
                {{ obj.mutable ? 'mutable' : 'immutable' }}
              </span>
              <span v-if="obj.refCount !== undefined" class="rounded-md border border-border/70 bg-card/70 px-2 py-0.5 text-text-secondary">
                runtime refcount: {{ obj.refCount }}
              </span>
            </div>

            <p v-if="obj.note" class="mt-2 text-xs text-text-muted leading-relaxed">{{ obj.note }}</p>
          </article>
        </div>
      </section>
    </div>

    <div v-if="props.insights && props.insights.length" class="border-t border-border bg-surface/50 px-5 py-4">
      <div class="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-2">What To Notice</div>
      <ul class="list-disc ml-5 space-y-1 text-sm md:text-base text-text-secondary leading-relaxed">
        <li v-for="(insight, idx) in props.insights" :key="idx">{{ insight }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AccentTone, MemoryBinding, MemoryObject } from '@/types/content'

const props = defineProps<{
  title: string
  description?: string
  bindings: MemoryBinding[]
  objects: MemoryObject[]
  insights?: string[]
  embedded?: boolean
}>()

const activeObjectId = ref<string | null>(null)

const toneClasses: Record<AccentTone, string> = {
  mint: 'bg-mint/10',
  amber: 'bg-amber/10',
  coral: 'bg-coral/10',
  sky: 'bg-sky/15',
  neutral: 'bg-card',
}

function bindingLabel(binding: MemoryBinding): string {
  return binding.scope ? `${binding.scope}.${binding.name}` : binding.name
}

function referenceCount(objectId: string): number {
  return props.bindings.filter(b => b.objectId === objectId).length
}
</script>

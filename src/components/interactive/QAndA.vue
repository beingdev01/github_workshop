<template>
  <div class="space-y-3 my-8">
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="[
        'rounded-xl border overflow-hidden transition-all duration-300',
        expanded[i]
          ? 'border-mint/50 bg-mint/5 shadow-[0_12px_30px_-18px_rgba(234,88,12,0.35)]'
          : 'border-border bg-card hover:border-mint/30',
      ]"
    >
      <!-- Question -->
      <button
        @click="toggleAnswer(i)"
        class="w-full text-left px-5 py-4 flex items-start justify-between hover:bg-mint/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint transition-colors gap-4"
      >
        <span class="flex items-start gap-3">
          <span
            :class="[
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold mt-0.5 transition-colors',
              expanded[i]
                ? 'bg-mint text-white'
                : 'bg-mint/10 text-mint group-hover:bg-mint/20',
            ]"
          >{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="text-lg md:text-xl text-text-primary font-semibold font-display leading-snug tracking-tight" v-html="renderMarkdown(item.question)"></span>
        </span>
        <span
          :class="[
            'text-text-muted transition-transform duration-300 mt-2 shrink-0',
            expanded[i] ? 'rotate-180 text-mint' : '',
          ]"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>

      <!-- Answer -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[1200px] opacity-100"
        leave-from-class="max-h-[1200px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="expanded[i]"
          class="px-5 pb-5 pt-1"
        >
          <div class="border-l-2 border-mint/50 pl-5">
            <div
              v-if="item.answer.includes('<') || item.answer.includes('```')"
              class="text-lg leading-[1.75] text-text-primary/90 max-w-none"
              v-html="renderMarkdown(item.answer)"
            />
            <p
              v-else
              class="text-lg leading-[1.75] text-text-primary/90"
              v-html="renderMarkdown(item.answer)"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { QAndAItem } from '@/types/content'

interface Props {
  items: QAndAItem[]
}

defineProps<Props>()

const expanded = ref<Record<number, boolean>>({})

const toggleAnswer = (index: number) => {
  expanded.value[index] = !expanded.value[index]
}

const renderMarkdown = (content: string): string => {
  let html = content
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic text-text-primary/80">$1</em>')
    .replace(/`(.+?)`/g, '<code class="border border-mint/20 bg-mint/10 text-mint px-2 py-0.5 rounded-md font-mono text-[0.92em] font-medium">$1</code>')
    .replace(/\n/g, '<br />')

  return html
}
</script>

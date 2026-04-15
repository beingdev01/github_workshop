<template>
  <div class="space-y-3">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="rounded-lg border border-border bg-card overflow-hidden transition-all"
    >
      <!-- Question -->
      <button
        @click="toggleAnswer(i)"
        class="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-surface/50 transition-colors"
      >
        <span class="text-lg text-text-primary font-medium">{{ item.question }}</span>
        <span
          :class="[
            'text-xl text-lavender transition-transform duration-300',
            expanded[i] ? 'rotate-180' : '',
          ]"
        >
          ▼
        </span>
      </button>

      <!-- Answer -->
      <transition
        enter-active-class="transition-all duration-300"
        leave-active-class="transition-all duration-300"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-[1000px] opacity-100"
        leave-from-class="max-h-[1000px] opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="expanded[i]"
          class="px-6 py-4 border-t border-border/50 bg-surface/30"
        >
          <!-- Render as HTML if it contains HTML, otherwise as text -->
          <div
            v-if="item.answer.includes('<') || item.answer.includes('```')"
            class="prose prose-invert text-base text-text-secondary leading-relaxed"
            v-html="renderMarkdown(item.answer)"
          />
          <p
            v-else
            class="text-base text-text-secondary leading-relaxed"
            v-html="renderMarkdown(item.answer)"
          />
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
  // Convert markdown to HTML for inline formatting
  let html = content
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`(.+?)`/g, '<code class="bg-surface/50 px-2 py-1 rounded text-sky font-mono text-sm">$1</code>')
    // Line breaks
    .replace(/\n/g, '<br />')

  return html
}
</script>

<template>
  <div class="space-y-6 stagger-children">
    <template v-for="(block, i) in blocks" :key="i">
      <!-- Heading -->
      <component
        v-if="block.type === 'heading'"
        :is="'h' + block.level"
        :class="headingClasses[block.level]"
      >
        {{ block.text }}
      </component>

      <!-- Text (render as HTML for inline formatting) -->
      <div
        v-else-if="block.type === 'text'"
        class="text-lg md:text-[1.18rem] leading-[1.75] text-text-primary/90 max-w-[68ch]"
        v-html="renderMarkdown(block.content)"
      />

      <!-- Code Block -->
      <CodeBlock
        v-else-if="block.type === 'code'"
        :code="block.code"
        :language="block.language"
        :filename="block.filename"
      />

      <!-- Callout -->
      <Callout
        v-else-if="block.type === 'callout'"
        :variant="block.variant"
        :title="block.title"
        :content="renderMarkdown(block.content)"
      />

      <!-- List -->
      <component
        v-else-if="block.type === 'list'"
        :is="block.ordered ? 'ol' : 'ul'"
        :class="[
          'text-lg md:text-[1.15rem] text-text-primary/90 space-y-3 ml-6 marker:text-mint marker:font-semibold',
          block.ordered ? 'list-decimal' : 'list-disc',
        ]"
      >
        <li v-for="(item, j) in block.items" :key="j" v-html="renderMarkdown(item)" class="leading-[1.7] pl-2" />
      </component>

      <!-- Playground -->
      <CodePlayground
        v-else-if="block.type === 'playground'"
        :default-code="block.defaultCode"
        :instructions="block.instructions"
        :expected-output="block.expectedOutput"
      />

      <!-- Q&A -->
      <QAndA
        v-else-if="block.type === 'qna'"
        :items="block.items"
      />

      <!-- Divider -->
      <div v-else-if="block.type === 'divider'" class="my-10 flex items-center gap-3">
        <span class="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <span class="dotted-accent h-1 w-10 text-mint" />
        <span class="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ContentBlock } from '@/types/content'
import CodeBlock from '@/components/content/CodeBlock.vue'
import Callout from '@/components/content/Callout.vue'
import CodePlayground from '@/components/interactive/CodePlayground.vue'
import QAndA from '@/components/interactive/QAndA.vue'

defineProps<{
  blocks: ContentBlock[]
}>()

const headingClasses: Record<number, string> = {
  1: 'text-4xl md:text-5xl font-display font-extrabold text-text-primary mt-12 mb-5 tracking-tight text-balance',
  2: 'text-3xl md:text-[2rem] font-display font-bold text-text-primary mt-10 mb-4 tracking-tight text-balance flex items-baseline gap-3 before:content-[""] before:block before:w-1.5 before:h-7 before:bg-mint before:rounded-full',
  3: 'text-2xl font-display font-semibold text-text-primary mt-8 mb-3 tracking-tight',
}

function renderMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="px-2 py-0.5 rounded-md border border-mint/20 bg-mint/10 text-mint font-mono text-[0.92em] font-medium">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text-primary font-bold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="italic text-text-primary/80">$1</em>')
    .replace(/\n/g, '<br />')
}
</script>

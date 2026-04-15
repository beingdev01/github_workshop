<template>
  <div class="space-y-10 stagger-children">
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
        class="text-lg leading-relaxed text-text-secondary prose-invert"
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
          'text-lg text-text-secondary space-y-2 ml-6',
          block.ordered ? 'list-decimal' : 'list-disc',
        ]"
      >
        <li v-for="(item, j) in block.items" :key="j" v-html="renderMarkdown(item)" class="leading-relaxed" />
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
      <hr v-else-if="block.type === 'divider'" class="border-border/50 my-8" />
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
  1: 'text-5xl font-display font-bold text-text-primary mt-4 mb-6 gradient-text',
  2: 'text-3xl font-display font-semibold text-text-primary mt-10 mb-4',
  3: 'text-2xl font-display font-medium text-text-secondary mt-8 mb-3',
}

function renderMarkdown(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="px-2 py-1 rounded bg-surface text-mint font-mono text-base">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text-primary font-semibold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />')
}
</script>

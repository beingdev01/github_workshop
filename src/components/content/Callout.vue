<template>
  <aside
    :class="[
      'relative my-8 rounded-xl border-l-4 border-y border-r border-border/70 bg-card/80 px-5 py-5 shadow-[0_8px_24px_-16px_rgba(234,88,12,0.25)] overflow-hidden',
      variantBg[variant],
      variantBorder[variant],
    ]"
  >
    <span
      :class="['absolute -left-px top-0 bottom-0 w-1', variantBar[variant]]"
      aria-hidden="true"
    />
    <header v-if="title" class="flex items-center gap-3 mb-3">
      <span
        :class="[
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg shadow-sm ring-1 ring-black/5',
          variantChip[variant],
        ]"
      >{{ variantIcon[variant] }}</span>
      <span class="font-display text-lg font-bold text-text-primary tracking-tight">
        {{ title }}
      </span>
    </header>
    <div
      class="text-lg leading-[1.7] text-text-primary/90 [&>p]:mt-2 [&>p:first-child]:mt-0"
      v-html="content"
    />
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  variant: 'info' | 'warning' | 'tip' | 'danger' | 'python'
  title?: string
  content: string
}>()

const variantBg: Record<string, string> = {
  info:    'bg-sky/5',
  warning: 'bg-amber/5',
  tip:     'bg-mint/5',
  danger:  'bg-coral/5',
  python:  'bg-lavender/5',
}

const variantBorder: Record<string, string> = {
  info:    'border-l-sky',
  warning: 'border-l-amber',
  tip:     'border-l-mint',
  danger:  'border-l-coral',
  python:  'border-l-lavender',
}

const variantBar: Record<string, string> = {
  info:    'bg-sky',
  warning: 'bg-amber',
  tip:     'bg-mint',
  danger:  'bg-coral',
  python:  'bg-lavender',
}

const variantChip: Record<string, string> = {
  info:    'bg-sky/15 text-sky',
  warning: 'bg-amber/15 text-amber',
  tip:     'bg-mint/15 text-mint',
  danger:  'bg-coral/15 text-coral',
  python:  'bg-lavender/15 text-lavender',
}

const variantIcon: Record<string, string> = {
  info:    'ℹ️',
  warning: '⚠️',
  tip:     '💡',
  danger:  '🚫',
  python:  '🐍',
}
</script>

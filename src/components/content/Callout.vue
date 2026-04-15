<template>
  <div :class="[
    'rounded-xl border-l-4 p-6',
    variantClasses[variant],
  ]">
    <div v-if="title" class="flex items-center gap-3 mb-2">
      <span class="text-xl">{{ variantIcon[variant] }}</span>
      <span class="text-lg font-semibold">{{ title }}</span>
    </div>
    <div class="text-lg leading-relaxed" v-html="content" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant: 'info' | 'warning' | 'tip' | 'danger' | 'python'
  title?: string
  content: string
}>()

const variantClasses: Record<string, string> = {
  info: 'bg-sky/5 border-sky text-sky/90',
  warning: 'bg-amber/5 border-amber text-amber/90',
  tip: 'bg-mint/5 border-mint text-mint/90',
  danger: 'bg-coral/5 border-coral text-coral/90',
  python: 'bg-lavender/5 border-lavender text-lavender/90',
}

const variantIcon: Record<string, string> = {
  info: 'ℹ️',
  warning: '⚠️',
  tip: '💡',
  danger: '🚫',
  python: '🐍',
}
</script>

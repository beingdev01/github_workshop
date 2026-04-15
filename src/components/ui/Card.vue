<template>
  <div :class="[
    'rounded-xl border border-border bg-card shadow-[0_6px_18px_-12px_rgba(234,88,12,0.18)] transition-all',
    padded && 'p-6',
    hoverable && 'hover:border-mint/40 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgba(234,88,12,0.28)]'
  ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  padded?: boolean
  hoverable?: boolean
}>(), {
  padded: true,
  hoverable: false,
})
</script>

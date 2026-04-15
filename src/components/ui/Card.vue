<template>
  <div :class="[
    'rounded-2xl border transition-all duration-300',
    glow ? 'glass glass-hover' : 'border-border bg-card',
    padded && 'p-6',
  ]">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  glow?: boolean
  padded?: boolean
}>(), {
  glow: false,
  padded: true,
})
</script>

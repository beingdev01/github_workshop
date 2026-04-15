<template>
  <span :class="[
    'inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase',
    colorClasses,
  ]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  color?: 'mint' | 'amber' | 'coral' | 'lavender' | 'sky' | 'default'
}>(), {
  color: 'default',
})

const colorClasses = computed(() => ({
  default: 'bg-surface text-text-secondary border border-border',
  mint: 'bg-mint/10 text-mint border-transparent',
  amber: 'bg-amber/10 text-amber border-transparent',
  coral: 'bg-coral/10 text-coral border-transparent',
  lavender: 'bg-lavender/10 text-lavender border-transparent',
  sky: 'bg-sky/10 text-sky border-transparent',
}[props.color]))
</script>

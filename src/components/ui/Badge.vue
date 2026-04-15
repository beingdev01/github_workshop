<template>
  <span :class="[
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
    colorClasses,
  ]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  color?: 'mint' | 'amber' | 'coral' | 'lavender' | 'sky'
}>(), {
  color: 'mint',
})

const colorClasses = computed(() => ({
  mint: 'bg-mint/10 text-mint border border-mint/20',
  amber: 'bg-amber/10 text-amber border border-amber/20',
  coral: 'bg-coral/10 text-coral border border-coral/20',
  lavender: 'bg-lavender/10 text-lavender border border-lavender/20',
  sky: 'bg-sky/10 text-sky border border-sky/20',
}[props.color]))
</script>

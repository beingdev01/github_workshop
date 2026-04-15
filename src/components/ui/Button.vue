<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors font-body',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      sizeClasses,
      variantClasses,
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

defineEmits<{ click: [] }>()

const sizeClasses = computed(() => ({
  sm: 'px-3.5 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
}[props.size]))

const variantClasses = computed(() => ({
  primary: 'bg-gradient-to-r from-mint to-amber text-white hover:shadow-md hover:-translate-y-px focus:ring-mint border border-transparent shadow-sm',
  secondary: 'border-2 border-border bg-card text-text-primary hover:border-mint hover:text-mint focus:ring-border',
  ghost: 'text-text-secondary hover:text-mint hover:bg-mint/10 focus:ring-mint',
  danger: 'bg-coral/10 hover:bg-coral/20 text-coral border border-coral/30 focus:ring-coral',
}[props.variant]))
</script>

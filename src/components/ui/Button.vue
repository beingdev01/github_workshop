<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 font-body',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-void',
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
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}[props.size]))

const variantClasses = computed(() => ({
  primary: 'bg-gradient-to-r from-mint to-mint-dim text-white hover:shadow-lg hover:shadow-mint/20 focus:ring-mint',
  secondary: 'border border-border bg-surface text-text-primary hover:border-mint/30 hover:bg-card focus:ring-mint/50',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface/50 focus:ring-mint/30',
  danger: 'bg-coral/10 border border-coral/20 text-coral hover:bg-coral/20 focus:ring-coral',
}[props.variant]))
</script>

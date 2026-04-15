<template>
  <div v-if="sectionContent">
    <!-- Section Header -->
    <div class="mb-10">
      <div v-if="sectionMeta" class="flex items-center gap-3 mb-4">
        <Badge :color="dayColor">Day {{ sectionMeta.day.id }}</Badge>
        <span class="text-text-muted text-sm font-medium">{{ sectionMeta.day.title }}</span>
      </div>
    </div>

    <!-- Content -->
    <SectionRenderer :blocks="sectionContent" />

    <!-- Section Navigation -->
    <div class="mt-16 flex items-center justify-between border-t border-border pt-8">
      <router-link
        v-if="prevSection"
        :to="`/workshop/day/${prevSection.day.id}/${prevSection.section.id}`"
        class="group flex items-center gap-3 rounded-xl border border-border px-6 py-4 text-base text-text-secondary hover:border-mint/30 hover:text-mint transition-all"
      >
        <svg class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <div>
          <div class="text-xs text-text-muted">Previous</div>
          <div class="font-medium">{{ prevSection.section.title }}</div>
        </div>
      </router-link>
      <div v-else />

      <button
        v-if="!isCompleted"
        class="rounded-xl bg-mint/10 border border-mint/20 px-6 py-4 text-base font-medium text-mint hover:bg-mint/20 transition-all"
        @click="markComplete"
      >
        ✓ Mark Complete
      </button>
      <div v-else class="flex items-center gap-3 rounded-xl bg-mint/10 border border-mint/20 px-6 py-4 text-base text-mint">
        <span>✅</span> Completed
      </div>

      <router-link
        v-if="nextSection"
        :to="`/workshop/day/${nextSection.day.id}/${nextSection.section.id}`"
        class="group flex items-center gap-3 rounded-xl border border-border px-6 py-4 text-base text-text-secondary hover:border-mint/30 hover:text-mint transition-all"
      >
        <div class="text-right">
          <div class="text-xs text-text-muted">Next</div>
          <div class="font-medium">{{ nextSection.section.title }}</div>
        </div>
        <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
      <div v-else />
    </div>
  </div>

  <!-- Loading / Not Found -->
  <div v-else class="flex flex-col items-center justify-center py-20 text-center">
    <div class="text-4xl mb-4">📭</div>
    <h2 class="text-lg font-display font-semibold text-text-primary mb-2">Section Not Found</h2>
    <p class="text-sm text-text-secondary mb-4">This section doesn't exist or hasn't been created yet.</p>
    <router-link to="/workshop" class="text-sm text-mint hover:underline">← Go to Workshop</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getSectionContent } from '@/content'
import { getSectionById, getNextSection, getPrevSection } from '@/content/structure'
import { useProgressStore } from '@/stores/progress'
import SectionRenderer from '@/components/content/SectionRenderer.vue'
import Badge from '@/components/ui/Badge.vue'

const route = useRoute()
const progressStore = useProgressStore()

const props = defineProps<{
  day?: string
  section?: string
}>()

const sectionId = computed(() => (route.params.section as string) || props.section || '')

const sectionContent = computed(() => getSectionContent(sectionId.value))
const sectionMeta = computed(() => getSectionById(sectionId.value))
const nextSection = computed(() => getNextSection(sectionId.value))
const prevSection = computed(() => getPrevSection(sectionId.value))
const isCompleted = computed(() => progressStore.isSectionCompleted(sectionId.value))

const dayColor = computed(() => {
  const colors: Record<string, 'mint' | 'amber' | 'lavender' | 'coral'> = {
    '1': 'mint', '2': 'amber', '3': 'lavender', '4': 'coral'
  }
  return colors[String(sectionMeta.value?.day.id)] || 'mint'
})

function markComplete() {
  progressStore.completeSection(sectionId.value)
}

// Update current location
watch(sectionId, (id) => {
  if (id && sectionMeta.value) {
    progressStore.setCurrentLocation(sectionMeta.value.day.id, id)
  }
}, { immediate: true })
</script>

<template>
  <div v-if="sectionContent" class="max-w-4xl mx-auto">
    <!-- Section Header -->
    <div class="mb-10">
      <div v-if="sectionMeta" class="flex items-center gap-3 mb-4">
        <Badge :color="dayColor" class="text-sm px-3 py-1">Day {{ sectionMeta.day.id }}</Badge>
        <span class="text-text-muted text-sm font-bold uppercase tracking-[0.2em]">{{ sectionMeta.day.title }}</span>
      </div>
      <div class="h-1 w-16 rounded-full bg-gradient-to-r from-mint to-amber"></div>
    </div>

    <!-- Content -->
    <SectionRenderer :blocks="sectionContent" />

    <!-- Section Navigation -->
    <div class="mt-16 flex items-center justify-between border-t border-border pt-8 gap-4">
      <router-link
        v-if="prevSection"
        :to="`/workshop/day/${prevSection.day.id}/${prevSection.section.id}`"
        class="group flex items-center gap-3 rounded-xl border-2 border-border bg-card hover:border-mint hover:bg-mint/5 px-5 py-4 transition-all text-text-primary focus:outline-none focus:ring-2 focus:ring-mint flex-1 w-full justify-start max-w-[240px]"
      >
        <svg class="h-5 w-5 text-text-muted transition-transform group-hover:-translate-x-1 group-hover:text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <div class="truncate hidden sm:block">
          <div class="text-xs text-text-muted uppercase tracking-[0.2em] font-bold">Previous</div>
          <div class="text-base font-bold truncate">{{ prevSection.section.title }}</div>
        </div>
      </router-link>
      <div v-else class="flex-1 max-w-[240px]"></div>

      <button
        v-if="!isCompleted"
        class="rounded-xl bg-gradient-to-r from-mint to-amber px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_-12px_rgba(234,88,12,0.55)] hover:shadow-[0_14px_36px_-12px_rgba(234,88,12,0.7)] hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 whitespace-nowrap"
        @click="markComplete"
      >
        ✓ Mark Complete
      </button>
      <div v-else class="flex items-center gap-2 rounded-xl border-2 border-mint/40 bg-mint/10 px-5 py-3 text-base font-bold text-mint whitespace-nowrap">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        Completed
      </div>

      <router-link
        v-if="nextSection"
        :to="`/workshop/day/${nextSection.day.id}/${nextSection.section.id}`"
        class="group flex items-center justify-end gap-3 rounded-xl border-2 border-border bg-card hover:border-mint hover:bg-mint/5 px-5 py-4 transition-all text-text-primary focus:outline-none focus:ring-2 focus:ring-mint flex-1 w-full max-w-[240px]"
      >
        <div class="text-right truncate hidden sm:block">
          <div class="text-xs text-text-muted uppercase tracking-[0.2em] font-bold">Next</div>
          <div class="text-base font-bold truncate">{{ nextSection.section.title }}</div>
        </div>
        <svg class="h-5 w-5 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </router-link>
      <div v-else class="flex-1 max-w-[240px]"></div>
    </div>
  </div>

  <!-- Loading / Not Found -->
  <div v-else class="flex flex-col items-center justify-center py-24 text-center max-w-lg mx-auto">
    <div class="text-6xl mb-5">📝</div>
    <h2 class="text-2xl font-display font-bold text-text-primary mb-3">Section Not Found</h2>
    <p class="text-base text-text-secondary mb-7">This section doesn't exist or hasn't been created yet.</p>
    <router-link to="/" class="text-base font-bold text-mint border-2 border-mint/30 rounded-lg px-5 py-2.5 hover:bg-mint/10 transition-colors">
      Return to Home
    </router-link>
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
    '1': 'mint', '2': 'amber', '3': 'coral'
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

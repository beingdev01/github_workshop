<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-abyss/95 backdrop-blur-xl transition-all duration-300 overflow-hidden',
        sidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full'
      ]"
    >
      <!-- Logo -->
      <div class="flex h-16 items-center gap-3 border-b border-border px-4 min-w-[18rem]">
        <router-link to="/" class="flex items-center gap-2.5 overflow-hidden">
          <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-mint to-sky text-sm font-bold text-white">
            Py
          </div>
          <span class="font-display text-sm font-bold tracking-tight text-text-primary whitespace-nowrap">
            Python Workshop
          </span>
        </router-link>
        <button
          class="ml-auto rounded-md p-1 text-text-muted hover:text-text-primary lg:hidden"
          @click="sidebarOpen = false"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Progress -->
      <div class="border-b border-border px-4 py-4 min-w-[18rem]">
        <div class="flex items-center justify-between text-sm text-text-secondary mb-2">
          <span>Progress</span>
          <span class="font-mono text-mint">{{ progressStore.overallPercentage }}%</span>
        </div>
        <div class="h-2 w-full rounded-full bg-surface overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-mint to-sky transition-all duration-700 ease-out"
            :style="{ width: `${progressStore.overallPercentage}%` }"
          />
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-2 min-w-[18rem]">
        <div v-for="day in workshopDays" :key="day.id" class="mb-1">
          <!-- Day Header -->
          <button
            class="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface/50"
            @click="toggleDay(day.id)"
          >
            <span class="text-lg">{{ day.icon }}</span>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-text-primary">Day {{ day.id }}</div>
              <div class="text-xs text-text-muted truncate">{{ day.title }}</div>
            </div>
            <svg
              :class="['h-4 w-4 text-text-muted transition-transform', expandedDays.has(day.id) && 'rotate-90']"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Sections -->
          <transition name="expand">
            <div v-if="expandedDays.has(day.id)" class="overflow-hidden">
              <router-link
                v-for="section in day.sections"
                :key="section.id"
                :to="`/workshop/day/${day.id}/${section.id}`"
                :class="[
                  'flex items-center gap-3 py-2 pl-11 pr-4 text-sm transition-all',
                  route.params.section === section.id
                    ? 'bg-mint/10 text-mint border-r-2 border-mint'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface/30',
                ]"
              >
                <span class="text-base">{{ section.icon }}</span>
                <span class="truncate">{{ section.title }}</span>
                <svg
                  v-if="progressStore.isSectionCompleted(section.id)"
                  class="ml-auto h-4 w-4 text-mint shrink-0"
                  fill="currentColor" viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </router-link>
            </div>
          </transition>
        </div>
      </nav>

      <!-- Collapsed nav icons -->
      <!-- Removed to allow full hiding -->

      <!-- Bottom Links -->
      <div class="border-t border-border p-4 space-y-2 min-w-[18rem]">
        <router-link to="/playground" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-text-secondary hover:bg-surface/50 hover:text-text-primary transition-colors">
          <span>🎮</span> Code Playground
        </router-link>
        <router-link to="/cheatsheet" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-text-secondary hover:bg-surface/50 hover:text-text-primary transition-colors">
          <span>📋</span> Cheatsheet
        </router-link>
        <router-link to="/resources" class="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-text-secondary hover:bg-surface/50 hover:text-text-primary transition-colors">
          <span>📚</span> Resources
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <div :class="['flex-1 transition-all duration-300', sidebarOpen ? 'lg:ml-72' : 'ml-0']">
      <!-- Top Bar -->
      <header class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-border bg-void/80 backdrop-blur-xl px-4 lg:px-6">
        <button
          class="rounded-md p-1.5 text-text-muted hover:text-text-primary hover:bg-surface/50 transition-colors"
          @click="sidebarOpen = !sidebarOpen"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Breadcrumb -->
        <div v-if="currentMeta" class="flex items-center gap-3 text-base">
          <router-link to="/" class="text-text-muted hover:text-text-primary transition-colors">Home</router-link>
          <span class="text-text-muted">/</span>
          <span class="text-text-secondary">Day {{ currentMeta.day.id }}</span>
          <span class="text-text-muted">/</span>
          <span class="font-medium text-text-primary">{{ currentMeta.section.title }}</span>
        </div>

        <div class="ml-auto flex items-center gap-4">
          <router-link
            to="/"
            class="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary hover:border-mint/30 hover:text-mint transition-all"
          >
            ← Back to Home
          </router-link>
        </div>
      </header>

      <!-- Page Content -->
      <main class="mx-auto max-w-none px-8 py-12 lg:px-16">
        <router-view />
      </main>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-30 bg-black/50 lg:hidden"
      @click="sidebarOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProgressStore } from '@/stores/progress'
import { workshopDays, getSectionById } from '@/content/structure'

const route = useRoute()
const progressStore = useProgressStore()
const sidebarOpen = ref(true)
const expandedDays = ref(new Set([1]))

const currentMeta = computed(() => {
  const sectionId = route.params.section as string
  if (!sectionId) return null
  return getSectionById(sectionId)
})

function toggleDay(dayId: number) {
  if (expandedDays.value.has(dayId)) {
    expandedDays.value.delete(dayId)
  } else {
    expandedDays.value.add(dayId)
  }
}

// Auto-expand current day
watch(
  () => route.params.section,
  (sectionId) => {
    if (sectionId) {
      const meta = getSectionById(sectionId as string)
      if (meta) {
        expandedDays.value.add(meta.day.id)
      }
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

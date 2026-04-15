<template>
  <div class="flex min-h-screen bg-void text-text-primary selection:bg-mint/30">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-40 flex flex-col border-r border-border bg-surface transition-transform duration-300 overflow-hidden',
        sidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full'
      ]"
    >
      <!-- Logo -->
      <div class="flex h-16 items-center gap-3 border-b border-border px-5 min-w-[18rem] bg-card">
        <router-link to="/" class="flex items-center gap-3 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded-md">
          <img
            src="/site-logo.png"
            alt="Python Workshop logo"
            class="h-8 w-8 shrink-0 object-contain"
          />
          <span class="font-display text-base font-bold tracking-tight text-text-primary whitespace-nowrap">
            Python Workshop
          </span>
        </router-link>
        <button
          class="ml-auto rounded-md p-1.5 text-text-secondary hover:text-mint hover:bg-mint/10 lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          @click="sidebarOpen = false"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Progress -->
      <div class="border-b border-border p-5 min-w-[18rem] bg-card">
        <div class="flex items-center justify-between text-sm font-semibold text-text-secondary mb-2">
          <span class="uppercase tracking-wider text-xs text-text-muted">Progress</span>
          <span class="font-mono text-mint text-base font-bold">{{ progressStore.overallPercentage }}%</span>
        </div>
        <div class="h-2 w-full rounded-full bg-surface overflow-hidden border border-border">
          <div
            class="h-full bg-gradient-to-r from-mint to-amber transition-all duration-500"
            :style="{ width: `${progressStore.overallPercentage}%` }"
          />
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 overflow-y-auto py-4 min-w-[18rem]">
        <div v-for="day in workshopDays" :key="day.id" class="mb-5 px-3">
          <!-- Day Header -->
          <button
            class="group flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-mint/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            @click="toggleDay(day.id)"
          >
            <div class="flex-1 min-w-0 flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <span class="font-mono text-[11px] font-bold text-mint uppercase tracking-[0.2em]">Day {{ day.id }}</span>
                <span class="text-sm font-bold text-text-primary tracking-tight">{{ day.title }}</span>
              </div>
              <svg
                :class="['h-4 w-4 text-text-muted transition-transform', expandedDays.has(day.id) && 'rotate-180']"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Sections -->
          <div v-if="expandedDays.has(day.id)" class="mt-1 space-y-0.5">
            <router-link
              v-for="section in day.sections"
              :key="section.id"
              :to="`/workshop/day/${day.id}/${section.id}`"
              :class="[
                'group flex items-center gap-3 rounded-lg py-2 pl-3 pr-2.5 text-[15px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint',
                route.params.section === section.id
                  ? 'bg-mint/10 text-mint font-semibold border-l-2 border-mint pl-2.5'
                  : 'text-text-secondary hover:text-text-primary hover:bg-card-hover',
              ]"
            >
              <div :class="['flex h-6 w-6 shrink-0 items-center justify-center rounded-md border', route.params.section === section.id ? 'border-mint bg-mint/15 text-mint' : 'border-border bg-card text-text-muted group-hover:border-mint/40']">
                <span class="text-xs">{{ section.icon }}</span>
              </div>
              <span class="truncate leading-snug">{{ section.title }}</span>
              <svg
                v-if="progressStore.isSectionCompleted(section.id)"
                class="ml-auto h-4 w-4 text-mint shrink-0"
                fill="currentColor" viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </div>
      </nav>

      <!-- Bottom Links -->
      <div class="border-t border-border p-3 space-y-1 min-w-[18rem] bg-card">
        <router-link to="/playground" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-text-secondary hover:bg-mint/10 hover:text-mint transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint">
          <span class="text-lg">🎮</span> Playground
        </router-link>
        <router-link to="/cheatsheet" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-text-secondary hover:bg-mint/10 hover:text-mint transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint">
          <span class="text-lg">📋</span> Cheatsheet
        </router-link>
        <router-link to="/resources" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-text-secondary hover:bg-mint/10 hover:text-mint transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint">
          <span class="text-lg">📚</span> Resources
        </router-link>
      </div>
    </aside>

    <!-- Main Content -->
    <div :class="['flex-1 flex flex-col min-h-screen transition-all duration-300', sidebarOpen ? 'lg:ml-72' : 'ml-0']">
      <!-- Top Bar -->
      <header class="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-border glass px-5 lg:px-10">
        <div class="flex items-center gap-4 min-w-0">
          <button
            class="hidden lg:flex items-center justify-center rounded-md p-2 text-text-secondary hover:text-mint hover:bg-mint/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            @click="sidebarOpen = !sidebarOpen"
            aria-label="Toggle Sidebar"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="sidebarOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>

          <button
            class="flex lg:hidden items-center justify-center rounded-md p-2 text-text-secondary hover:text-mint hover:bg-mint/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            @click="sidebarOpen = true"
            aria-label="Open Sidebar"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Breadcrumb -->
          <nav v-if="currentMeta" class="hidden sm:flex items-center text-base font-semibold whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
            <span class="rounded-md bg-mint/10 text-mint px-2.5 py-1 text-xs font-bold uppercase tracking-wider">Day {{ currentMeta.day.id }}</span>
            <svg class="h-4 w-4 mx-3 text-border shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
            <span class="text-text-primary truncate tracking-tight">{{ currentMeta.section.title }}</span>
          </nav>
        </div>

        <div class="flex items-center gap-3 shrink-0 ml-4">
          <router-link
            to="/"
            class="hidden sm:inline-flex rounded-lg border-2 border-border bg-card px-4 py-2 text-sm font-bold text-text-secondary hover:border-mint hover:text-mint transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
          >
            Exit Course
          </router-link>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 w-full bg-paper px-6 py-8 lg:px-10 lg:py-12">
        <router-view />
      </main>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-30 bg-void/80 lg:hidden"
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

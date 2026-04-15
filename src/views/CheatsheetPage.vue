<template>
  <div class="min-h-screen bg-grid">
    <!-- Top Bar -->
    <nav class="sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-none items-center justify-between px-8">
        <div class="flex items-center gap-4">
          <router-link to="/" class="flex items-center gap-3">
            <img
              src="/site-logo.png"
              alt="Python Workshop logo"
              class="h-10 w-10 object-contain"
            />
            <span class="font-display text-base font-bold">Cheat Sheet</span>
          </router-link>
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/workshop" class="text-sm text-text-secondary hover:text-text-primary transition-colors">← Workshop</router-link>
          <router-link to="/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Home</router-link>
        </div>
      </div>
    </nav>

    <div class="mx-auto max-w-none px-8 py-10">
      <!-- Header -->
      <div class="mb-10">
        <h1 class="font-display text-4xl font-bold gradient-text mb-3">📝 Python Cheat Sheet</h1>
        <p class="text-lg text-text-secondary mb-6">Quick reference for everything you've learned. Click any category to jump there.</p>

        <!-- Search -->
        <div class="relative max-w-xl">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search cheatsheet..."
            class="w-full rounded-xl bg-surface/50 border border-border/60 px-5 py-3 text-base text-text-primary placeholder-text-muted focus:border-mint/50 focus:outline-none focus:ring-1 focus:ring-mint/30 transition-all"
          />
          <span class="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm">🔍</span>
        </div>
      </div>

      <!-- Category Quick Links -->
      <div class="flex flex-wrap gap-3 mb-10">
        <button
          v-for="cat in filteredCategories"
          :key="cat.id"
          class="rounded-lg px-4 py-2 text-sm font-medium border transition-all hover:scale-105"
          :class="categoryClasses(cat.color)"
          @click="scrollToCategory(cat.id)"
        >
          {{ cat.icon }} {{ cat.title }}
        </button>
      </div>

      <!-- Categories -->
      <div class="space-y-8">
        <section
          v-for="cat in filteredCategories"
          :key="cat.id"
          :id="`cat-${cat.id}`"
          class="scroll-mt-20"
        >
          <h2 class="font-display text-lg font-bold mb-4 flex items-center gap-2">
            <span>{{ cat.icon }}</span>
            <span>{{ cat.title }}</span>
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="item in cat.items"
              :key="item.title"
              class="glass rounded-xl p-4 hover:border-border transition-all group"
            >
              <h3 class="text-sm font-semibold text-text-primary mb-2 group-hover:text-mint transition-colors">{{ item.title }}</h3>
              <div class="relative">
                <pre class="font-mono text-[11px] leading-relaxed text-text-secondary bg-surface/50 rounded-lg p-3 overflow-x-auto"><code>{{ item.code }}</code></pre>
                <button
                  class="absolute top-2 right-2 text-[10px] text-text-muted hover:text-mint opacity-0 group-hover:opacity-100 transition-all"
                  @click="copyCode(item.code)"
                >
                  {{ copiedCode === item.code ? '✓' : '📋' }}
                </button>
              </div>
              <p v-if="item.note" class="mt-2 text-[10px] text-text-muted italic">💡 {{ item.note }}</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Empty State -->
      <div v-if="filteredCategories.length === 0" class="text-center py-16">
        <p class="text-3xl mb-3">🔍</p>
        <p class="text-text-muted text-sm">No results for "{{ searchQuery }}"</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { cheatsheetData } from '@/content/cheatsheet'

const searchQuery = ref('')
const copiedCode = ref('')

const filteredCategories = computed(() => {
  if (!searchQuery.value.trim()) return cheatsheetData
  const q = searchQuery.value.toLowerCase()
  return cheatsheetData
    .map(cat => ({
      ...cat,
      items: cat.items.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.code.toLowerCase().includes(q) ||
          (item.note && item.note.toLowerCase().includes(q)) ||
          cat.title.toLowerCase().includes(q)
      ),
    }))
    .filter(cat => cat.items.length > 0)
})

function categoryClasses(color: string) {
  const map: Record<string, string> = {
    mint: 'bg-mint/10 border-mint/20 text-mint hover:bg-mint/20',
    amber: 'bg-amber/10 border-amber/20 text-amber hover:bg-amber/20',
    coral: 'bg-coral/10 border-coral/20 text-coral hover:bg-coral/20',
    sky: 'bg-sky/10 border-sky/20 text-sky hover:bg-sky/20',
    lavender: 'bg-lavender/10 border-lavender/20 text-lavender hover:bg-lavender/20',
  }
  return map[color] || map.mint
}

function scrollToCategory(id: string) {
  document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth' })
}

async function copyCode(code: string) {
  await navigator.clipboard.writeText(code)
  copiedCode.value = code
  setTimeout(() => { copiedCode.value = '' }, 2000)
}
</script>

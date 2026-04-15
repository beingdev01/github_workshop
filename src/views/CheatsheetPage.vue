<template>
  <div class="min-h-screen bg-paper text-text-primary flex flex-col">
    <!-- Top Bar -->
    <nav class="sticky top-0 z-50 border-b border-border glass">
      <div class="mx-auto flex h-16 w-full items-center justify-between px-6 lg:px-10">
        <div class="flex items-center gap-3">
          <router-link to="/" class="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded-md">
            <img src="/site-logo.png" alt="Python Workshop logo" class="h-8 w-8 object-contain" />
            <span class="font-display text-lg font-bold tracking-tight">Cheatsheet</span>
          </router-link>
        </div>
        <div class="flex items-center gap-5">
          <router-link to="/workshop" class="text-base font-semibold text-text-secondary hover:text-mint transition-colors">Workshop</router-link>
          <router-link to="/" class="text-base font-semibold text-text-secondary hover:text-mint transition-colors">Home</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Layout -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Search & Sidebar -->
      <aside class="hidden w-72 flex-col border-r border-border bg-card lg:flex">
        <div class="p-5 border-b border-border">
          <div class="relative">
            <svg class="absolute left-3.5 top-3.5 h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search cheatsheet..."
              class="w-full rounded-lg border-2 border-border bg-card pl-11 pr-3 py-2.5 text-base text-text-primary focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition placeholder:text-text-muted"
            />
          </div>
        </div>

        <div class="flex-1 overflow-y-auto p-5 space-y-1">
          <a
            v-for="category in cheatsheet"
            :key="category.id"
            :href="`#${category.id}`"
            class="flex items-center gap-3 rounded-md px-3 py-2.5 text-[15px] font-semibold text-text-secondary hover:bg-mint/10 hover:text-mint transition-colors focus:outline-none focus:ring-2 focus:ring-mint"
          >
            <span class="text-xl">{{ category.icon }}</span>
            <span>{{ category.title }}</span>
          </a>
        </div>
      </aside>

      <!-- Content Area -->
      <main class="flex-1 overflow-y-auto px-6 py-12 lg:px-14 bg-paper">
        <div class="mx-auto max-w-5xl">
          <!-- Header -->
          <div class="mb-12">
            <div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">Quick Reference</div>
            <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance">
              Python <span class="gradient-text">Cheatsheet</span>
            </h1>
            <p class="text-xl text-text-secondary leading-relaxed max-w-2xl">Search, scan, and steal the syntax you need — organized for active recall.</p>
          </div>

          <!-- Mobile Search -->
          <div class="mb-8 lg:hidden">
            <div class="relative">
              <svg class="absolute left-3.5 top-3.5 h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search cheatsheet..."
                class="w-full rounded-lg border-2 border-border bg-card pl-11 pr-3 py-3 text-base text-text-primary focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition placeholder:text-text-muted"
              />
            </div>
          </div>

          <div v-if="filteredCheatsheet.length === 0" class="py-16 text-center">
            <p class="text-xl text-text-secondary">No results for "<span class="text-text-primary font-bold">{{ searchQuery }}</span>"</p>
            <button @click="searchQuery = ''" class="mt-5 text-base font-bold text-mint hover:underline focus:outline-none">Clear search</button>
          </div>

          <div v-else class="space-y-16">
            <section v-for="category in filteredCheatsheet" :key="category.id" :id="category.id" class="scroll-mt-24">
              <div class="mb-8 pb-5 border-b-2 border-border">
                <div class="flex items-center gap-4">
                  <span :class="['flex h-14 w-14 items-center justify-center rounded-xl text-3xl ring-1 ring-black/5 shadow-sm', chipFor(category.color)]">{{ category.icon }}</span>
                  <h2 class="font-display text-3xl md:text-4xl font-extrabold tracking-tight">{{ category.title }}</h2>
                </div>
              </div>

              <div class="warm-card overflow-hidden">
                <table class="w-full text-left text-base">
                  <thead class="bg-surface/70 border-b-2 border-border">
                    <tr>
                      <th class="px-5 py-4 font-display font-bold text-text-primary w-2/5 text-sm uppercase tracking-[0.15em]">Concept</th>
                      <th class="px-5 py-4 font-display font-bold text-text-primary text-sm uppercase tracking-[0.15em]">Example</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-border">
                    <tr v-for="item in category.items" :key="item.title" class="hover:bg-mint/5 transition-colors">
                      <td class="px-5 py-4 align-top">
                        <p class="font-bold text-text-primary text-base" v-html="highlight(item.title)"></p>
                        <p v-if="item.note" class="mt-1.5 text-sm text-text-secondary leading-relaxed italic" v-html="highlight(item.note)"></p>
                      </td>
                      <td class="px-5 py-4 align-top">
                        <pre class="bg-card p-3 rounded-lg border border-border overflow-x-auto"><code class="text-sm font-mono text-text-primary leading-relaxed" v-html="highlightCode(item.code)"></code></pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { cheatsheetData } from '@/content/cheatsheet'

const cheatsheet = cheatsheetData
const searchQuery = ref('')

const filteredCheatsheet = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()
  if (!query) return cheatsheet

  return cheatsheet
    .map(category => {
      const filteredItems = category.items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        (item.note && item.note.toLowerCase().includes(query)) ||
        item.code.toLowerCase().includes(query)
      )
      if (filteredItems.length > 0) return { ...category, items: filteredItems }
      if (category.title.toLowerCase().includes(query)) return category
      return null
    })
    .filter(Boolean) as typeof cheatsheet
})

function highlight(text: string) {
  if (!searchQuery.value) return text
  const safeQuery = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${safeQuery})`, 'gi')
  return text.replace(regex, '<mark class="bg-mint/25 text-mint px-1 rounded">$1</mark>')
}

function highlightCode(code: string) {
  let html = code
  if (searchQuery.value) {
    const safeQuery = searchQuery.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(${safeQuery})`, 'gi')
    html = html.replace(regex, '<mark class="bg-mint/30 text-mint px-1 rounded">$1</mark>')
  }
  return html
}

function chipFor(color: string): string {
  const map: Record<string, string> = {
    mint: 'bg-mint/15 text-mint',
    amber: 'bg-amber/15 text-amber',
    coral: 'bg-coral/15 text-coral',
    lavender: 'bg-lavender/15 text-lavender',
    sky: 'bg-sky/15 text-sky',
  }
  return map[color] || 'bg-mint/15 text-mint'
}
</script>

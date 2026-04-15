<template>
  <div class="min-h-screen bg-grid">
    <!-- Top Bar -->
    <nav class="sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-none items-center justify-between px-8">
        <div class="flex items-center gap-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-lavender to-sky text-base font-bold text-void">Py</div>
            <span class="font-display text-base font-bold">Resources</span>
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
        <h1 class="font-display text-4xl font-bold gradient-text mb-3">🌐 Learning Resources</h1>
        <p class="text-lg text-text-secondary">Curated links to continue your Python journey beyond this workshop.</p>
      </div>

      <!-- Categories -->
      <div class="space-y-12">
        <section v-for="cat in resourceData" :key="cat.id">
          <div class="mb-6">
            <h2 class="font-display text-2xl font-bold flex items-center gap-3">
              <span>{{ cat.icon }}</span>
              <span>{{ cat.title }}</span>
            </h2>
            <p class="text-sm text-text-muted mt-2">{{ cat.description }}</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              v-for="res in cat.resources"
              :key="res.url"
              :href="res.url"
              target="_blank"
              rel="noopener noreferrer"
              class="glass rounded-xl p-6 hover:border-border group transition-all hover:scale-[1.02] block"
            >
              <div class="flex items-start justify-between gap-4 mb-3">
                <h3 class="text-base font-semibold text-text-primary group-hover:text-mint transition-colors">{{ res.title }}</h3>
                <span
                  class="shrink-0 rounded-md px-2.5 py-1 text-xs font-medium"
                  :class="tagClasses(res.tagColor)"
                >{{ res.tag }}</span>
              </div>
              <p class="text-sm text-text-muted leading-relaxed">{{ res.description }}</p>
              <div class="mt-4 flex items-center gap-2 text-xs text-text-muted group-hover:text-mint transition-colors">
                <span>↗</span>
                <span>{{ extractDomain(res.url) }}</span>
              </div>
            </a>
          </div>
        </section>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center glass rounded-2xl p-10">
        <p class="text-4xl mb-4">🚀</p>
        <h3 class="font-display text-2xl font-bold mb-3">Ready to keep learning?</h3>
        <p class="text-base text-text-muted mb-6">Jump back into the workshop or try the free playground!</p>
        <div class="flex justify-center gap-4">
          <router-link
            to="/workshop"
            class="rounded-xl bg-mint/10 border border-mint/20 px-6 py-3 text-base font-medium text-mint hover:bg-mint/20 transition-all"
          >
            📚 Workshop
          </router-link>
          <router-link
            to="/playground"
            class="rounded-xl bg-lavender/10 border border-lavender/20 px-6 py-3 text-base font-medium text-lavender hover:bg-lavender/20 transition-all"
          >
            🎮 Playground
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { resourceData } from '@/content/resources'

function tagClasses(color: string) {
  const map: Record<string, string> = {
    mint: 'bg-mint/10 text-mint',
    amber: 'bg-amber/10 text-amber',
    coral: 'bg-coral/10 text-coral',
    sky: 'bg-sky/10 text-sky',
    lavender: 'bg-lavender/10 text-lavender',
  }
  return map[color] || map.mint
}

function extractDomain(url: string) {
  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return url
  }
}
</script>

<template>
  <div class="min-h-screen bg-paper text-text-primary">
    <!-- Top Bar -->
    <nav class="sticky top-0 z-50 border-b border-border glass">
      <div class="mx-auto flex h-16 items-center justify-between px-6 lg:px-10">
        <div class="flex items-center gap-3">
          <router-link to="/" class="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded-md">
            <img src="/site-logo.png" alt="Python Workshop logo" class="h-8 w-8 object-contain" />
            <span class="font-display text-lg font-bold tracking-tight">Resources</span>
          </router-link>
        </div>
        <div class="flex items-center gap-5">
          <router-link to="/workshop" class="text-base font-semibold text-text-secondary hover:text-mint transition-colors">Workshop</router-link>
          <router-link to="/" class="text-base font-semibold text-text-secondary hover:text-mint transition-colors">Home</router-link>
        </div>
      </div>
    </nav>

    <div class="mx-auto max-w-5xl px-6 lg:px-10 py-14 lg:py-20">
      <!-- Header -->
      <div class="mb-16">
        <div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">Keep learning</div>
        <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-5 text-balance">
          Learning <span class="gradient-text">Resources</span>
        </h1>
        <p class="text-xl text-text-secondary leading-relaxed max-w-2xl">Hand-picked tools, docs, and further reading to continue your Python journey beyond the workshop.</p>
      </div>

      <!-- Content -->
      <div class="space-y-16">
        <section v-for="category in resourceCategories" :key="category.title">
          <div class="flex items-center gap-3 mb-6">
            <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-mint/15 text-mint text-2xl ring-1 ring-black/5">{{ category.icon }}</span>
            <h2 class="font-display text-3xl font-bold tracking-tight">{{ category.title }}</h2>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <a
              v-for="link in category.resources"
              :key="link.title"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group block warm-card p-5 hover:-translate-y-0.5 hover:border-mint transition-all focus:outline-none focus:ring-2 focus:ring-mint"
            >
              <div class="flex items-start justify-between gap-4 mb-2">
                <h3 class="text-lg font-display font-bold text-text-primary group-hover:text-mint transition-colors tracking-tight">{{ link.title }}</h3>
                <span class="text-text-muted group-hover:text-mint transition-colors mt-1 shrink-0">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </span>
              </div>
              <p class="text-base text-text-secondary leading-relaxed">{{ link.description }}</p>
            </a>
          </div>
        </section>
      </div>

      <!-- CTA -->
      <div class="mt-20 relative amber-halo text-center warm-card p-10 overflow-hidden">
        <h3 class="font-display text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Ready to practice?</h3>
        <p class="text-lg text-text-secondary mb-7 max-w-md mx-auto">Apply what you've learned in the interactive browser-based playground.</p>
        <router-link
          to="/playground"
          class="inline-flex rounded-xl bg-gradient-to-r from-mint to-amber px-7 py-3.5 text-base font-bold text-white shadow-[0_12px_30px_-12px_rgba(234,88,12,0.55)] hover:shadow-[0_18px_40px_-12px_rgba(234,88,12,0.65)] hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2"
        >
          🎮 Open Playground →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { resourceData as resourceCategories } from '@/content/resources'
</script>

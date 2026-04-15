<template>
  <div class="min-h-screen bg-paper text-text-primary selection:bg-mint/30">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 border-b border-border glass">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div class="flex items-center gap-3">
          <img
            src="/site-logo.png"
            alt="Python Workshop logo"
            class="h-8 w-8 object-contain"
          />
          <span class="font-display text-lg font-bold tracking-tight">Python Workshop</span>
        </div>
        <div class="hidden md:flex items-center gap-7 text-base font-medium">
          <a href="#curriculum" class="text-text-secondary hover:text-mint transition-colors">Curriculum</a>
          <a href="#features" class="text-text-secondary hover:text-mint transition-colors">Features</a>
          <router-link to="/cheatsheet" class="text-text-secondary hover:text-mint transition-colors">Cheatsheet</router-link>
          <router-link to="/resources" class="text-text-secondary hover:text-mint transition-colors">Resources</router-link>
        </div>
        <div class="flex items-center gap-3">
          <router-link
            v-if="progressStore.overallPercentage > 0"
            to="/workshop"
            class="hidden sm:inline-flex rounded-lg border border-mint/30 bg-mint/10 px-4 py-2 text-sm font-semibold text-mint hover:bg-mint/20 transition-colors"
          >
            Continue · {{ progressStore.overallPercentage }}%
          </router-link>
          <router-link
            to="/workshop"
            class="rounded-lg bg-gradient-to-r from-mint to-amber px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:shadow-md hover:-translate-y-px transition-all"
          >
            Start Learning →
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative border-b border-border amber-halo overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-1.5 text-sm font-semibold text-mint">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
            </span>
            Interactive · Classroom-Ready
          </div>

          <h1 class="font-display text-5xl md:text-7xl font-extrabold tracking-[-0.03em] mb-7 text-text-primary text-balance leading-[1.02]">
            Learn Python <span class="gradient-text">properly.</span>
          </h1>

          <p class="text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
            Go from zero to building real programs. Write code directly in your
            browser, solve practical challenges, and track your progress —
            <span class="text-text-primary font-semibold">no local setup required.</span>
          </p>

          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <router-link
              to="/workshop"
              class="inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-mint to-amber px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_-12px_rgba(234,88,12,0.55)] hover:shadow-[0_18px_40px_-12px_rgba(234,88,12,0.65)] hover:-translate-y-0.5 transition-all"
            >
              Start Workshop
              <span>→</span>
            </router-link>
            <router-link
              to="/playground"
              class="inline-flex justify-center items-center gap-2 rounded-xl border-2 border-border bg-card px-7 py-4 text-base font-semibold text-text-primary hover:border-mint hover:text-mint transition-all"
            >
              <span class="text-lg">🎮</span> Open Playground
            </router-link>
          </div>

          <!-- Trust strip -->
          <div class="mt-10 flex items-center gap-5 text-sm text-text-muted flex-wrap">
            <span class="flex items-center gap-2">
              <span class="text-mint text-base">✓</span> Runs in any browser
            </span>
            <span class="h-1 w-1 rounded-full bg-border"></span>
            <span class="flex items-center gap-2">
              <span class="text-mint text-base">✓</span> Zero install
            </span>
            <span class="h-1 w-1 rounded-full bg-border"></span>
            <span class="flex items-center gap-2">
              <span class="text-mint text-base">✓</span> Active recall built-in
            </span>
          </div>
        </div>

        <!-- Hero Code Preview -->
        <div class="relative">
          <!-- decorative offset card -->
          <div class="absolute -inset-2 bg-gradient-to-br from-mint/20 via-amber/10 to-lavender/15 rounded-2xl blur-xl opacity-70"></div>
          <div class="relative warm-card overflow-hidden">
            <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-coral/70"></span>
                <span class="w-3 h-3 rounded-full bg-amber/70"></span>
                <span class="w-3 h-3 rounded-full bg-mint/70"></span>
              </div>
              <span class="text-sm font-mono text-text-muted">hello.py</span>
              <span class="text-[11px] font-mono font-semibold text-mint uppercase tracking-[0.2em]">python 3</span>
            </div>
            <pre class="p-6 font-mono text-[15px] leading-[1.75] text-left overflow-x-auto bg-card"><span style="color:#6a9955;font-style:italic"># Your first Python program</span>
<span class="text-lavender font-semibold">def</span> <span class="text-mint font-semibold">greet</span>(name):
    <span class="text-lavender font-semibold">return</span> <span class="text-amber">f"Hello, {name}! Welcome to Python!"</span>

<span style="color:#6a9955;font-style:italic"># Try it out immediately</span>
message = <span class="text-mint font-semibold">greet</span>(<span class="text-amber">"World"</span>)
<span class="text-coral font-semibold">print</span>(message)
<span style="color:#6a9955;font-style:italic"># → Hello, World! Welcome to Python!</span></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="border-b border-border bg-card">
      <div class="mx-auto max-w-7xl px-6 py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div v-for="(stat, i) in stats" :key="stat.label"
            :class="['px-4 py-3', i > 0 && 'md:border-l md:border-border']">
            <div class="font-display font-extrabold text-4xl md:text-5xl gradient-text tracking-tight">{{ stat.value }}</div>
            <div class="text-sm md:text-base text-text-secondary mt-2 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="border-b border-border py-24 md:py-28">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-14 max-w-2xl">
          <div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">Why this works</div>
          <h2 class="font-display text-4xl md:text-5xl font-bold mb-5 text-text-primary tracking-tight text-balance">Built for active learning</h2>
          <p class="text-lg md:text-xl text-text-secondary leading-relaxed">
            Forget passive video tutorials. This curriculum is designed around immediate practice, rapid feedback, and cognitive retention.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(feature, i) in features" :key="feature.title"
            class="group warm-card p-7 hover:-translate-y-1 transition-transform duration-300">
            <div class="flex items-center gap-3 mb-5">
              <span :class="['flex h-12 w-12 items-center justify-center rounded-xl text-2xl ring-1 ring-black/5 shadow-sm', feature.chip]">{{ feature.icon }}</span>
              <span class="font-mono text-xs font-bold text-text-muted uppercase tracking-[0.2em]">0{{ i + 1 }}</span>
            </div>
            <h3 class="font-display font-bold text-xl text-text-primary mb-3 tracking-tight">{{ feature.title }}</h3>
            <p class="text-base text-text-secondary leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Section -->
    <section id="curriculum" class="border-b border-border py-24 md:py-28 bg-paper">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-14 max-w-2xl">
          <div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">3 Days · 21 Lessons</div>
          <h2 class="font-display text-4xl md:text-5xl font-bold mb-5 text-text-primary tracking-tight text-balance">The curriculum</h2>
          <p class="text-lg md:text-xl text-text-secondary leading-relaxed">
            A pragmatic, 3-day progression mapped to essential programming concepts — each section is designed to be taught live or learned solo.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(day, i) in workshopDays" :key="day.id"
            class="group relative flex flex-col warm-card p-7 hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
            <!-- accent ribbon -->
            <div :class="['absolute -top-px left-0 right-0 h-1', dayRibbon[i % dayRibbon.length]]"></div>

            <div class="mb-6">
              <div class="flex items-baseline gap-3 mb-3">
                <span class="font-mono text-xs font-bold text-mint uppercase tracking-[0.25em]">Day {{ day.id }}</span>
                <span class="h-px flex-1 bg-border"></span>
              </div>
              <div class="font-display font-bold text-2xl text-text-primary mb-2 tracking-tight">{{ day.title }}</div>
              <div class="text-base text-text-secondary leading-relaxed">{{ day.subtitle }}</div>
            </div>

            <div class="space-y-2.5 mb-8 flex-1">
              <div v-for="s in day.sections" :key="s.id"
                class="flex items-start gap-3 text-base text-text-secondary">
                <span class="mt-0.5 text-base">{{ s.icon }}</span>
                <span class="leading-snug">{{ s.title }}</span>
              </div>
            </div>

            <router-link
              :to="`/workshop/day/${day.id}/${day.sections[0].id}`"
              class="inline-flex items-center justify-between rounded-lg border-2 border-border bg-card px-5 py-3 text-sm font-bold text-text-primary group-hover:border-mint group-hover:text-mint transition-colors"
            >
              Start Day {{ day.id }}
              <span class="text-lg transition-transform group-hover:translate-x-1">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 bg-card">
      <div class="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <div class="flex items-center gap-3">
          <img src="/site-logo.png" alt="" class="h-5 w-5 object-contain opacity-80" />
          <span>Python Workshop &copy; {{ new Date().getFullYear() }}</span>
        </div>
        <div class="flex items-center gap-6 font-medium">
          <router-link to="/playground" class="hover:text-mint transition-colors">Playground</router-link>
          <router-link to="/cheatsheet" class="hover:text-mint transition-colors">Cheatsheet</router-link>
          <router-link to="/resources" class="hover:text-mint transition-colors">Resources</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useProgressStore } from '../stores/progress'
import { workshopDays } from '../content/structure'

const progressStore = useProgressStore()

const stats = [
  { value: '21', label: 'Interactive Lessons' },
  { value: '50+', label: 'Q&A Prompts' },
  { value: '15+', label: 'Practice Exercises' },
  { value: '3', label: 'Structured Days' },
]

const features = [
  {
    icon: '⚡',
    title: 'In-Browser Execution',
    desc: 'Powered by Pyodide, Python runs directly in your browser. No terminals, no installations, no dependency hell.',
    chip: 'bg-mint/15 text-mint',
  },
  {
    icon: '🎯',
    title: 'Interactive Challenges',
    desc: 'Stop reading, start typing. Every concept is paired with a code challenge and instant test validation.',
    chip: 'bg-amber/15 text-amber',
  },
  {
    icon: '🧠',
    title: 'Active Recall Q&A',
    desc: 'Reinforce learning with embedded click-to-reveal prompts designed to maximize retention and spaced review.',
    chip: 'bg-lavender/15 text-lavender',
  },
]

const dayRibbon = [
  'bg-gradient-to-r from-mint to-amber',
  'bg-gradient-to-r from-amber to-lavender',
  'bg-gradient-to-r from-lavender to-coral',
]
</script>

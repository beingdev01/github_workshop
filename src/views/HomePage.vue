<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-void/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-sky text-sm font-bold text-white">
            Py
          </div>
          <span class="font-display text-base font-bold tracking-tight">Python Workshop</span>
        </div>
        <div class="hidden md:flex items-center gap-6 text-sm">
          <a href="#curriculum" class="text-text-secondary hover:text-text-primary transition-colors">Curriculum</a>
          <a href="#features" class="text-text-secondary hover:text-text-primary transition-colors">Features</a>
          <router-link to="/cheatsheet" class="text-text-secondary hover:text-text-primary transition-colors">Cheatsheet</router-link>
          <router-link to="/resources" class="text-text-secondary hover:text-text-primary transition-colors">Resources</router-link>
        </div>
        <div class="flex items-center gap-3">
          <router-link
            v-if="progressStore.overallPercentage > 0"
            to="/workshop"
            class="rounded-xl bg-mint/10 border border-mint/20 px-4 py-2 text-sm font-medium text-mint hover:bg-mint/20 transition-all"
          >
            Continue ({{ progressStore.overallPercentage }}%)
          </router-link>
          <router-link
            to="/workshop"
            class="rounded-xl bg-gradient-to-r from-mint to-mint-dim px-5 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-mint/20 transition-all"
          >
            Start Learning →
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-16 overflow-hidden">
      <div class="bg-radial-glow absolute inset-0" />

      <!-- Floating code snippets (decorative) -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div class="absolute top-32 left-[8%] animate-float opacity-20 font-mono text-xs text-mint" style="animation-delay: 0s">
          print("Hello, World!")
        </div>
        <div class="absolute top-48 right-[12%] animate-float opacity-15 font-mono text-xs text-amber" style="animation-delay: 2s">
          for i in range(10):
        </div>
        <div class="absolute top-72 left-[20%] animate-float opacity-10 font-mono text-xs text-lavender" style="animation-delay: 4s">
          def fibonacci(n):
        </div>
        <div class="absolute bottom-40 right-[25%] animate-float opacity-15 font-mono text-xs text-coral" style="animation-delay: 1s">
          class Student:
        </div>
        <div class="absolute bottom-60 left-[15%] animate-float opacity-10 font-mono text-xs text-sky" style="animation-delay: 3s">
          {"name": "Python"}
        </div>
      </div>

      <div class="relative mx-auto max-w-6xl px-6 py-24 md:py-36 text-center">
        <div class="stagger-children">
          <div class="mb-6">
            <span class="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-4 py-1.5 text-xs font-medium text-mint">
              <span class="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
              4-Day Interactive Workshop
            </span>
          </div>

          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6">
            <span class="block text-text-primary">Learn</span>
            <span class="gradient-text">Python</span>
            <span class="block text-text-primary mt-1">Interactively</span>
          </h1>

          <p class="mx-auto max-w-xl text-lg text-text-secondary leading-relaxed mb-10">
            Go from zero to building real programs. Write code directly in your browser,
            solve challenges, and track your progress — no setup required.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link
              to="/workshop"
              class="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-mint to-mint-dim px-8 py-4 text-base font-bold text-white transition-all hover:shadow-2xl hover:shadow-mint/25"
            >
              <span class="relative z-10 flex items-center gap-2">
                Start Workshop
                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </router-link>
            <router-link
              to="/playground"
              class="rounded-2xl border border-border px-8 py-4 text-base font-medium text-text-secondary hover:border-mint/30 hover:text-text-primary transition-all"
            >
              🎮 Free Playground
            </router-link>
          </div>
        </div>

        <!-- Hero Code Preview -->
        <div class="mt-20 mx-auto max-w-2xl animate-fade-in-up" style="animation-delay: 0.6s; opacity: 0;">
          <div class="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
            <div class="flex items-center gap-2 px-4 py-3 border-b border-border/30">
              <span class="w-3 h-3 rounded-full bg-coral/60" />
              <span class="w-3 h-3 rounded-full bg-amber/60" />
              <span class="w-3 h-3 rounded-full bg-mint/60" />
              <span class="ml-3 text-[10px] font-mono text-text-muted">hello.py</span>
            </div>
            <pre class="p-5 font-mono text-sm leading-relaxed text-left"><span class="text-text-muted"># Your first Python program 🐍</span>
<span class="text-lavender font-medium">def</span> <span class="text-mint font-semibold">greet</span>(name):
    <span class="text-lavender font-medium">return</span> <span class="text-amber">f"Hello, {name}! Welcome to Python!"</span>

<span class="text-text-muted"># Try it out</span>
message = <span class="text-mint">greet</span>(<span class="text-amber">"World"</span>)
<span class="text-mint">print</span>(message)
<span class="text-text-muted"># → Hello, World! Welcome to Python!</span></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="border-y border-border bg-surface/30">
      <div class="mx-auto max-w-6xl px-6 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="font-display text-3xl font-bold text-mint">21</div>
            <div class="text-xs text-text-muted mt-1">Interactive Lessons</div>
          </div>
          <div>
            <div class="font-display text-3xl font-bold text-amber">50+</div>
            <div class="text-xs text-text-muted mt-1">Quiz Questions</div>
          </div>
          <div>
            <div class="font-display text-3xl font-bold text-lavender">15+</div>
            <div class="text-xs text-text-muted mt-1">Coding Challenges</div>
          </div>
          <div>
            <div class="font-display text-3xl font-bold text-coral">4</div>
            <div class="text-xs text-text-muted mt-1">Structured Days</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <span class="gradient-text">Learn Python</span>
          </h2>
          <p class="text-text-secondary max-w-lg mx-auto">
            Not just slides. A fully interactive learning environment built for hands-on practice.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          <div v-for="feature in features" :key="feature.title"
            class="glass glass-hover rounded-2xl p-6 transition-all duration-300">
            <div class="text-2xl mb-3">{{ feature.icon }}</div>
            <h3 class="font-display text-base font-semibold text-text-primary mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum Section -->
    <section id="curriculum" class="py-24 bg-surface/20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-bold mb-4">
            <span class="gradient-text">4-Day</span> Curriculum
          </h2>
          <p class="text-text-secondary max-w-lg mx-auto">
            Structured progression from absolute beginner to writing real programs.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 stagger-children">
          <div v-for="day in workshopDays" :key="day.id"
            class="glass glass-hover rounded-2xl p-6 transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-2xl">{{ day.icon }}</span>
              <div>
                <div class="font-display text-lg font-bold text-text-primary">Day {{ day.id }}: {{ day.title }}</div>
                <div class="text-xs text-text-muted">{{ day.subtitle }}</div>
              </div>
            </div>
            <div class="space-y-2">
              <div v-for="s in day.sections" :key="s.id"
                class="flex items-center gap-2.5 text-sm text-text-secondary">
                <span class="text-xs">{{ s.icon }}</span>
                <span>{{ s.title }}</span>
                <svg
                  v-if="progressStore.isSectionCompleted(s.id)"
                  class="ml-auto h-4 w-4 text-mint shrink-0"
                  fill="currentColor" viewBox="0 0 20 20"
                >
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <router-link
              :to="`/workshop/day/${day.id}/${day.sections[0].id}`"
              class="mt-4 inline-flex items-center gap-1.5 text-sm text-mint hover:underline"
            >
              Start Day {{ day.id }} →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <div class="glass rounded-3xl p-12 glow-mint">
          <h2 class="font-display text-3xl font-bold mb-4">Ready to Start Coding?</h2>
          <p class="text-text-secondary mb-8 max-w-md mx-auto">
            Jump right into the interactive lessons. No installation needed — everything runs in your browser.
          </p>
          <router-link
            to="/workshop"
            class="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-mint to-mint-dim px-8 py-4 text-base font-bold text-white hover:shadow-2xl hover:shadow-mint/25 transition-all"
          >
            Begin Workshop 🚀
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-border py-8">
      <div class="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <div>Python Workshop — Interactive Learning Platform</div>
        <div class="flex items-center gap-4">
          <router-link to="/playground" class="hover:text-text-primary transition-colors">Playground</router-link>
          <router-link to="/cheatsheet" class="hover:text-text-primary transition-colors">Cheatsheet</router-link>
          <router-link to="/resources" class="hover:text-text-primary transition-colors">Resources</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useProgressStore } from '@/stores/progress'
import { workshopDays } from '@/content/structure'

const progressStore = useProgressStore()

const features = [
  {
    icon: '🖥️',
    title: 'In-Browser Code Execution',
    desc: 'Write and run Python code directly in your browser. No installation or setup needed — powered by Pyodide WebAssembly.',
  },
  {
    icon: '🧠',
    title: 'Interactive Quizzes',
    desc: 'Test your understanding with MCQ, predict-the-output, and fill-in-the-blank questions with instant feedback.',
  },
  {
    icon: '🏆',
    title: 'Coding Challenges',
    desc: 'Solve real problems with automated test validation, progressive hints, and solution reveals.',
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'Your progress saves automatically. See completion status, quiz scores, and pick up where you left off.',
  },
  {
    icon: '📋',
    title: 'Quick Reference Cheatsheet',
    desc: 'A searchable, categorized Python cheatsheet for quick lookups while you learn.',
  },
  {
    icon: '🎮',
    title: 'Free Playground',
    desc: 'Experiment with Python code in a free-form playground. No rules, just exploration and creativity.',
  },
]
</script>

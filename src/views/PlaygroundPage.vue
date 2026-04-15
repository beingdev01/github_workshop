<template>
  <div class="min-h-screen bg-grid">
    <!-- Top Bar -->
    <nav class="sticky top-0 z-50 border-b border-border glass">
      <div class="mx-auto flex h-16 items-center justify-between px-8">
        <div class="flex items-center gap-3">
          <router-link to="/" class="flex items-center gap-3">
            <img
              src="/site-logo.png"
              alt="Python Workshop logo"
              class="h-9 w-9 object-contain"
            />
            <span class="font-display text-lg font-bold tracking-tight">Playground</span>
          </router-link>
        </div>
        <div class="flex items-center gap-5">
          <router-link to="/workshop" class="text-base font-semibold text-text-secondary hover:text-mint transition-colors">← Workshop</router-link>
          <router-link to="/" class="text-base font-semibold text-text-secondary hover:text-mint transition-colors">Home</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Playground -->
    <div class="mx-auto max-w-[1400px] px-8 py-12">
      <div class="mb-10">
        <div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">Experiment freely</div>
        <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance">
          🎮 Code <span class="gradient-text">Playground</span>
        </h1>
        <p class="text-xl text-text-secondary leading-relaxed max-w-2xl">Write anything you want. Test ideas, explore syntax, break things — <span class="text-text-primary font-semibold">no rules, no tests.</span></p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Editor -->
        <div class="warm-card overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70">
            <div class="flex items-center gap-2.5">
              <span class="w-3 h-3 rounded-full bg-coral/70" />
              <span class="w-3 h-3 rounded-full bg-amber/70" />
              <span class="w-3 h-3 rounded-full bg-mint/70" />
              <span class="ml-3 text-sm font-mono font-medium text-text-secondary">playground.py</span>
            </div>
            <div class="flex items-center gap-2">
              <button class="text-sm font-semibold text-text-muted hover:text-coral transition-colors px-3 py-1.5 rounded-md border border-transparent hover:border-coral/30" @click="clearCode">Clear</button>
              <select
                v-model="selectedTemplate"
                class="bg-card border-2 border-border rounded-md text-sm font-semibold text-text-primary px-3 py-1.5 focus:outline-none focus:border-mint transition"
                @change="loadTemplate"
              >
                <option value="">📁 Templates</option>
                <option value="hello">Hello World</option>
                <option value="fibonacci">Fibonacci</option>
                <option value="sorting">Sorting</option>
                <option value="oop">OOP Example</option>
              </select>
            </div>
          </div>
          <div ref="editorContainer" class="h-[620px]" />
        </div>

        <!-- Output -->
        <div class="warm-card overflow-hidden flex flex-col">
          <div class="flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70">
            <span class="text-xs font-mono font-bold text-mint uppercase tracking-[0.2em]">Output</span>
            <div class="flex gap-2">
              <button
                class="flex items-center gap-2 rounded-lg bg-gradient-to-r from-mint to-amber border border-transparent px-5 py-2 text-base font-bold text-white shadow-sm hover:shadow-md hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="pyodide.isRunning"
                @click="runCode"
              >
                {{ pyodide.isRunning ? '⏳ Running...' : '▶ Run' }}
              </button>
              <button class="text-sm font-semibold text-text-muted hover:text-text-primary px-3 py-1.5 rounded-md border border-transparent hover:border-border" @click="clearOutput">Clear</button>
            </div>
          </div>
          <div class="flex-1 p-6 overflow-auto bg-card">
            <div v-if="pyodide.isLoading" class="flex items-center gap-3 text-base font-medium text-text-muted animate-pulse">
              <span class="animate-spin text-xl">⏳</span> Loading Python runtime...
            </div>
            <pre
              v-else
              class="font-mono text-[15px] leading-[1.7] whitespace-pre-wrap min-h-full"
              :class="hasError ? 'text-coral' : 'text-text-primary'"
            >{{ outputText || '# Output will appear here after running your code\n# Press Run or Ctrl+Enter to execute' }}</pre>
          </div>
        </div>
      </div>

      <!-- Keyboard hint -->
      <div class="mt-6 flex items-center gap-2 text-sm text-text-muted">
        <span>Shortcut:</span>
        <span class="kbd">Ctrl</span><span>+</span><span class="kbd">Enter</span>
        <span class="ml-1">(or</span>
        <span class="kbd">⌘</span><span>+</span><span class="kbd">Enter</span>
        <span>on Mac) to execute.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePyodideStore } from '@/stores/pyodide'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap, indentWithTab } from '@codemirror/commands'
import { indentOnInput, bracketMatching } from '@codemirror/language'
import { closeBrackets } from '@codemirror/autocomplete'

const pyodide = usePyodideStore()
const editorContainer = ref<HTMLElement>()
let editorView: EditorView | null = null
const outputText = ref('')
const hasError = ref(false)
const selectedTemplate = ref('')

const defaultCode = `# 🐍 Python Playground
# Write your Python code here and press Run!

def greet(name):
    return f"Hello, {name}! Welcome to Python!"

# Test it out
for name in ["World", "Alice", "Python"]:
    print(greet(name))

print("\\n✨ Happy coding!")
`

const templates: Record<string, string> = {
  hello: `# Hello World!
print("Hello, World!")
print("Welcome to Python!")

name = "Coder"
print(f"Hello, {name}!")
`,
  fibonacci: `# Fibonacci Sequence Generator
def fibonacci(n):
    """Generate first n Fibonacci numbers."""
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib[:n]

# Print first 15 Fibonacci numbers
numbers = fibonacci(15)
for i, num in enumerate(numbers):
    print(f"F({i:2d}) = {num}")
`,
  sorting: `# Sorting Algorithms Comparison
import time

def bubble_sort(arr):
    arr = arr[:]
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Test with sample data
data = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {data}")
print(f"Sorted:   {bubble_sort(data)}")
print(f"Built-in: {sorted(data)}")
`,
  oop: `# Object-Oriented Programming Example
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        return f"{self.name} says {self.sound}!"
    
    def __str__(self):
        return f"Animal({self.name})"

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name, "Woof")
    
    def fetch(self, item):
        return f"{self.name} fetches the {item}! 🎾"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")
    
    def purr(self):
        return f"{self.name} purrs... 😺"

# Create some animals
dog = Dog("Rex")
cat = Cat("Whiskers")

print(dog.speak())
print(dog.fetch("ball"))
print(cat.speak())
print(cat.purr())
`,
}

onMounted(() => {
  if (editorContainer.value) {
    const state = EditorState.create({
      doc: defaultCode,
      extensions: [
        lineNumbers(),
        python(),
        oneDark,
        keymap.of([
          ...defaultKeymap,
          indentWithTab,
          { key: 'Ctrl-Enter', run: () => { runCode(); return true } },
          { key: 'Cmd-Enter', run: () => { runCode(); return true } },
        ]),
        indentOnInput(),
        bracketMatching(),
        closeBrackets(),
        EditorView.theme({
          '&': { backgroundColor: 'transparent', height: '100%' },
          '.cm-scroller': { overflow: 'auto' },
          '.cm-gutters': { backgroundColor: 'transparent', borderRight: '1px solid rgba(42,42,92,0.4)' },
        }),
      ],
    })
    editorView = new EditorView({ state, parent: editorContainer.value })
  }
})

async function runCode() {
  if (!editorView) return
  const code = editorView.state.doc.toString()
  hasError.value = false
  outputText.value = ''

  const result = await pyodide.runCode(code)
  if (result.error) {
    hasError.value = true
    outputText.value = result.error
  } else {
    outputText.value = result.output || '(No output)'
  }
}

function clearCode() {
  if (editorView) {
    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: '' }
    })
  }
}

function clearOutput() {
  outputText.value = ''
  hasError.value = false
}

function loadTemplate() {
  if (selectedTemplate.value && editorView && templates[selectedTemplate.value]) {
    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: templates[selectedTemplate.value] }
    })
    selectedTemplate.value = ''
  }
}
</script>

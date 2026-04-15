<template>
  <div class="min-h-screen bg-grid">
    <!-- Top Bar -->
    <nav class="sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-none items-center justify-between px-8">
        <div class="flex items-center gap-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-mint to-sky text-base font-bold text-white">Py</div>
            <span class="font-display text-base font-bold">Playground</span>
          </router-link>
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/workshop" class="text-sm text-text-secondary hover:text-text-primary transition-colors">← Workshop</router-link>
          <router-link to="/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Home</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Playground -->
    <div class="mx-auto max-w-none px-8 py-10">
      <div class="mb-8">
        <h1 class="font-display text-4xl font-bold gradient-text mb-3">🎮 Free Code Playground</h1>
        <p class="text-lg text-text-secondary">Write anything you want. Experiment freely — no rules, no tests.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Editor -->
        <div class="glass rounded-2xl overflow-hidden">
          <div class="flex items-center justify-between px-6 py-4 border-b border-border/50">
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-coral/60" />
              <span class="w-3 h-3 rounded-full bg-amber/60" />
              <span class="w-3 h-3 rounded-full bg-mint/60" />
              <span class="ml-3 text-sm font-mono text-text-muted">playground.py</span>
            </div>
            <div class="flex gap-3">
              <button class="text-sm text-text-muted hover:text-amber transition-colors px-3 py-1.5" @click="clearCode">Clear</button>
              <select
                v-model="selectedTemplate"
                class="bg-surface/50 border border-border/50 rounded text-sm text-text-muted px-3 py-1.5"
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
          <div ref="editorContainer" class="h-[600px]" />
        </div>

        <!-- Output -->
        <div class="glass rounded-2xl overflow-hidden flex flex-col">
          <div class="flex items-center justify-between px-6 py-4 border-b border-border/50">
            <span class="text-sm font-mono text-text-muted uppercase tracking-wider">Output</span>
            <div class="flex gap-3">
              <button
                class="flex items-center gap-2 rounded-lg bg-mint/10 border border-mint/20 px-4 py-2 text-sm font-medium text-mint hover:bg-mint/20 transition-all"
                :disabled="pyodide.isRunning"
                @click="runCode"
              >
                {{ pyodide.isRunning ? '⏳ Running...' : '▶ Run' }}
              </button>
              <button class="text-sm text-text-muted hover:text-text-primary px-3 py-1.5" @click="clearOutput">Clear</button>
            </div>
          </div>
          <div class="flex-1 p-6 overflow-auto">
            <div v-if="pyodide.isLoading" class="flex items-center gap-3 text-sm text-text-muted animate-pulse">
              <span class="animate-spin">⏳</span> Loading Python runtime...
            </div>
            <pre
              v-else
              class="font-mono text-base whitespace-pre-wrap min-h-full"
              :class="hasError ? 'text-coral' : 'text-mint/90'"
            >{{ outputText || '# Output will appear here after running your code\n# Press Run or Ctrl+Enter to execute' }}</pre>
          </div>
        </div>
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

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePyodideStore = defineStore('pyodide', () => {
  const pyodide = ref<any>(null)
  const isLoading = ref(false)
  const isReady = computed(() => pyodide.value !== null)
  const loadError = ref<string | null>(null)
  const output = ref<string>('')
  const isRunning = ref(false)

  async function loadPyodide() {
    if (pyodide.value || isLoading.value) return

    isLoading.value = true
    loadError.value = null

    try {
      // Dynamically load Pyodide script
      if (!window.loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js'
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Failed to load Pyodide script'))
          document.head.appendChild(script)
        })
      }

      pyodide.value = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
      })

      // Set up stdout/stderr capture
      await pyodide.value.runPythonAsync(`
import sys
from io import StringIO
      `)
    } catch (err: any) {
      loadError.value = err.message || 'Failed to load Python runtime'
      console.error('Pyodide load error:', err)
    } finally {
      isLoading.value = false
    }
  }

  async function runCode(code: string): Promise<{ output: string; error: string | null }> {
    if (!pyodide.value) {
      await loadPyodide()
    }

    if (!pyodide.value) {
      return { output: '', error: loadError.value || 'Python runtime not available' }
    }

    isRunning.value = true
    output.value = ''

    try {
      // Capture stdout
      await pyodide.value.runPythonAsync(`
import sys
from io import StringIO
_stdout_capture = StringIO()
_stderr_capture = StringIO()
sys.stdout = _stdout_capture
sys.stderr = _stderr_capture
      `)

      // Run user code
      const result = await pyodide.value.runPythonAsync(code)

      // Get captured output
      const stdout = await pyodide.value.runPythonAsync(`
_out = _stdout_capture.getvalue()
_err = _stderr_capture.getvalue()
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
_out
      `)

      const stderr = await pyodide.value.runPythonAsync('_err')

      let finalOutput = stdout || ''
      if (result !== undefined && result !== null && String(result) !== 'None') {
        finalOutput += (finalOutput ? '\n' : '') + String(result)
      }

      output.value = finalOutput
      return {
        output: finalOutput,
        error: stderr || null,
      }
    } catch (err: any) {
      // Reset stdout/stderr
      try {
        await pyodide.value.runPythonAsync(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
        `)
      } catch {}

      const errorMsg = err.message || String(err)
      // Clean up the error message
      const cleanError = errorMsg
        .replace(/^PythonError: Traceback.*?\n/, '')
        .replace(/File "<exec>", /g, 'File ')
        .trim()

      return { output: '', error: cleanError }
    } finally {
      isRunning.value = false
    }
  }

  return {
    pyodide,
    isLoading,
    isReady,
    loadError,
    output,
    isRunning,
    loadPyodide,
    runCode,
  }
})

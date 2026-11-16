import type { ContentBlock } from '@/types/content'

export const day3Numpy: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Data Structures & Emerging Applications' },
  {
    type: 'text',
    content: 'You already know lists, tuples, dictionaries and sets, and you know how to read and write files. Now we will use them for real work: **NumPy** for fast maths, **Matplotlib** for graphs, and a small **IoT sensor demo** that brings it all together.',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Real connect',
    content: 'Python lists power **NumPy**, and NumPy powers **TensorFlow**. Matplotlib turns your data into graphs used in data science, research and dashboards. The same list from Day 2 can feed an AI model or a live sensor dashboard.',
  },

  // ═══════════════════════════════════════
  // Section 2: NumPy — 5 lines
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Introduction to NumPy — Arrays in 5 Lines' },
  {
    type: 'text',
    content: 'A list is easy to use, but slow for big maths. Every item in a list is a separate object. A **NumPy array** keeps numbers together in one block, so one line of code can work on all of them at once. Install it with `pip install numpy`.',
  },
  {
    type: 'code',
    code: 'import numpy as np\ntemps = np.array([22.5, 23.1, 21.8, 24.0, 22.9])\nprint(temps.mean())          # 22.86\nprint(temps + 2)             # add 2 to every reading, at once\nprint(temps * 1.8 + 32)      # convert °C to °F, all at once',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Run this one locally',
    content: 'NumPy is not loaded in the playground on this site, so run these 5 lines on your own computer, in Jupyter or in Colab. The playground below does the same maths with plain lists, so you can try the idea here.',
  },
  {
    type: 'playground',
    defaultCode: '# Same idea as the NumPy example — with plain lists\ntemps = [22.5, 23.1, 21.8, 24.0, 22.9]\n\nmean = sum(temps) / len(temps)\nprint(f"Mean: {mean:.2f}")\n\nprint([t + 2 for t in temps])\nprint([t * 1.8 + 32 for t in temps])  # °C to °F',
    instructions: 'Try it and compare the answers with the NumPy version above. NumPy does the same work in one short line, without a loop.',
  },

  // ═══════════════════════════════════════
  // Section 3: Matplotlib — 5 lines
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Introduction to Matplotlib — One Line Graph in 5 Lines' },
  {
    type: 'text',
    content: 'A table of numbers is hard to read. A graph shows the same data in one look. **Matplotlib** turns a list into a graph. Install it with `pip install matplotlib`.',
  },
  {
    type: 'code',
    code: 'import matplotlib.pyplot as plt\ntemps = [22.5, 23.1, 21.8, 24.0, 22.9]\nplt.plot(temps, marker="o")\nplt.title("Room Temperature")\nplt.show()',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Run this one locally',
    content: '`plt.show()` opens a graph window, and the playground here cannot show that window. Run these 5 lines on your own computer or in Colab to see the graph. The playground below draws the same readings as a simple text chart.',
  },

  // ═══════════════════════════════════════
  // Section 4: IoT sensor simulation mini-demo
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Mini-Demo — IoT Sensor Simulation' },
  {
    type: 'text',
    content: 'A temperature sensor sends one reading every second. This demo makes 10 fake readings, finds the average, the highest and the lowest, and shows an alert when it gets too hot. It uses a list, a loop, simple maths and an `if` check — the same steps a real IoT dashboard uses with live data.',
  },
  {
    type: 'playground',
    defaultCode: 'import random\n\n# Simulate 10 temperature readings from an IoT sensor\nreadings = [round(random.uniform(21.0, 26.5), 1) for _ in range(10)]\nprint("Readings:", readings)\n\nmean = sum(readings) / len(readings)\nprint(f"Mean: {mean:.1f}°C | Min: {min(readings)}°C | Max: {max(readings)}°C")\n\n# Alert if it gets too hot\nif max(readings) > 26.0:\n    print("ALERT: temperature above 26°C!")\n\n# Tiny text chart — one * per degree above 20\nfor r in readings:\n    print(f"{r:>5}°C " + "*" * int(r - 20))',
    instructions: 'Run it a few times. The readings change each time. Try changing the alert limit from 26.0 to 24.0, or try 20 readings instead of 10.',
  },

  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Why use NumPy instead of a plain list?',
        answer: 'A list holds each number as a separate object, so maths on a list needs a loop. A NumPy array holds numbers together, so `temps + 2` works on all of them in one step, using fast built-in code. That is why TensorFlow and other AI tools are built on NumPy.',
      },
      {
        question: 'Why does the NumPy / Matplotlib code not run in the playground here?',
        answer: 'This site runs Python in your browser, and NumPy and Matplotlib are not loaded there. The code is still normal Python — run it on your own computer, in Jupyter or in Colab after `pip install numpy matplotlib`. The playgrounds in this section use plain lists, so the same ideas still work here.',
      },
      {
        question: 'What does `plt.show()` do?',
        answer: 'It shows the graph on your screen. `plt.plot()` and `plt.title()` only build the graph. Without `plt.show()`, you will not see it.',
      },
      {
        question: 'How is the IoT demo like a real sensor system?',
        answer: 'A real sensor also sends numbers again and again over time. The code collects them in a list, finds the average, highest and lowest, checks a limit and shows an alert. Then a dashboard draws them as a graph. The only change is where the numbers come from: a real sensor instead of `random.uniform()`.',
      },
    ],
  },
]

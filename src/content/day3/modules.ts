import type { ContentBlock } from '@/types/content'

export const day3Modules: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Modules & Libraries' },
  {
    type: 'text',
    content: 'A **module** is a file of ready-made Python code that you can borrow. Instead of writing everything yourself, you `import` it and use its functions. Python ships with a big standard library — `math`, `random`, `datetime`, `csv` — and you can install more with `pip`.',
  },

  // ═══════════════════════════════════════
  // Section 2: import
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'import — Borrow Code' },
  {
    type: 'code',
    code: 'import math\nimport random\n\nprint(math.sqrt(16))        # 4.0\nprint(math.pi)               # 3.141592653589793\nprint(random.randint(1, 6))  # a dice roll: 1 to 6\nprint(random.choice(["red", "blue", "green"]))  # picks one',
    language: 'python',
  },
  {
    type: 'text',
    content: '`import math` loads the whole module, and you use its functions with a dot: `math.sqrt()`. The name before the dot tells you where the function comes from.',
  },

  // ═══════════════════════════════════════
  // Section 3: from ... import
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'from ... import — Borrow One Name' },
  {
    type: 'code',
    code: 'from math import sqrt, pi\nfrom random import randint\n\nprint(sqrt(25))    # 5.0 — no math. needed\nprint(pi)          # 3.141592653589793\nprint(randint(1, 10))  # 1 to 10',
    language: 'python',
  },
  {
    type: 'text',
    content: '`from math import sqrt` brings in just one name, so you write `sqrt()` instead of `math.sqrt()`. Use `import` for the whole module, `from ... import` when you need only one or two names.',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'pip — Installing New Libraries',
    content: 'The standard library is built in, but NumPy and Matplotlib are not. Install them once with `pip install numpy matplotlib`, then `import` them like any other module. You will use both in the NumPy, Matplotlib & IoT Demo section later in Day 3.',
  },

  // ═══════════════════════════════════════
  // Section 4: Your own module
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Your Own Module — Just a .py File' },
  {
    type: 'text',
    content: 'Any `.py` file is a module. If you save this as `greet.py`, another file in the same folder can `import greet` and use it:',
  },
  {
    type: 'code',
    code: '# greet.py\ndef hello(name):\n    return f"Hello, {name}!"\n\n# main.py (same folder)\nimport greet\nprint(greet.hello("Asha"))  # Hello, Asha!',
    language: 'python',
  },

  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: 'import random\n\n# Roll two dice\nprint("Dice:", random.randint(1, 6), random.randint(1, 6))\n\n# Pick a random winner\nnames = ["Asha", "Ravi", "Meera", "Arjun"]\nprint("Winner:", random.choice(names))\n\n# Shuffle the list in place\nrandom.shuffle(names)\nprint("Shuffled:", names)',
    instructions: 'Run it a few times — the answers change every time. Try adding your own names to the list, or rolling three dice instead of two.',
  },

  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What is the difference between `import math` and `from math import sqrt`?',
        answer: '`import math` loads the whole module — you write `math.sqrt()`. `from math import sqrt` loads only one name — you write `sqrt()`. The first is clearer about where things come from; the second is shorter.',
      },
      {
        question: 'Do I need pip for `math` and `random`?',
        answer: 'No. They are part of the standard library, so they are already on your computer with Python. You need `pip install` only for libraries that do not ship with Python, like NumPy, Matplotlib and Pandas.',
      },
      {
        question: 'Can two modules have a function with the same name?',
        answer: 'Yes — and that is why `import math` is safer than `from math import *`. With `math.sqrt()` and `random.choice()`, the module name keeps them apart. With `from ... import *`, one name can silently hide another.',
      },
    ],
  },
]

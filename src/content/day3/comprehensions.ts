import type { ContentBlock } from '@/types/content'

export const day3Comprehensions: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Comprehensions' },
  {
    type: 'text',
    content: 'A **comprehension** is Python\'s way of building a collection from another iterable — in a single, readable expression. It replaces 3–5 lines of explicit loop + `.append()` with a declarative "what I want" form. Comprehensions exist for **lists**, **sets**, **dicts**, and **generators** — four shapes of the same idea.',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Why Python Loves Them',
    content: 'Comprehensions are **faster** than equivalent for-loops (CPython executes them in a dedicated C path), and they express *intent* — "transform each element" — instead of *mechanics* — "append to a list in a loop." Guido added them in 2000 for exactly this reason.',
  },

  // ═══════════════════════════════════════
  // Section 2: From Loop to Comprehension
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'From Loop to Comprehension' },
  {
    type: 'code',
    code: '# The long way\nsquares = []\nfor x in range(10):\n    squares.append(x ** 2)\n# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# The comprehension way\nsquares = [x ** 2 for x in range(10)]\n# Same result, one line.',
    language: 'python',
  },
  {
    type: 'text',
    content: 'The shape is always the same:',
  },
  {
    type: 'code',
    code: '[ EXPRESSION  for ITEM in ITERABLE  if CONDITION ]\n  └── output   └──── loop header ──┘ └─ optional ─┘',
    language: 'text',
  },

  // ═══════════════════════════════════════
  // Section 3: List Comprehensions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'List Comprehensions' },
  {
    type: 'code',
    code: '# Transform\nnames = ["alice", "bob", "carol"]\nupper = [n.upper() for n in names]\n# [\'ALICE\', \'BOB\', \'CAROL\']\n\n# Filter\nnums = [1, -2, 3, -4, 5]\npositive = [n for n in nums if n > 0]\n# [1, 3, 5]\n\n# Transform + filter\nevens_squared = [x ** 2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Conditional expression (this is NOT filtering — it picks output values)\nlabels = ["even" if x % 2 == 0 else "odd" for x in range(5)]\n# [\'even\', \'odd\', \'even\', \'odd\', \'even\']\n\n# Nested — like nested for-loops\npairs = [(i, j) for i in range(3) for j in range(3) if i != j]\n# [(0,1), (0,2), (1,0), (1,2), (2,0), (2,1)]\n\n# Flatten a 2-D list\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflat = [x for row in matrix for x in row]\n# [1, 2, 3, 4, 5, 6, 7, 8, 9]',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Filter `if` vs Ternary `if-else` — Watch the Position',
    content: '`[x for x in data if x > 0]` — the `if` **after** the loop is a **filter** (skips items). `[x if x > 0 else 0 for x in data]` — the `if/else` **before** the `for` is a **ternary expression** (replaces items). Different position, different meaning.',
  },

  // ═══════════════════════════════════════
  // Section 4: Dict Comprehensions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Dictionary Comprehensions' },
  {
    type: 'code',
    code: '# Basic — produce key: value pairs\nsquares = {x: x ** 2 for x in range(1, 6)}\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# From two lists\nnames = ["Alice", "Bob", "Carol"]\nscores = [92, 85, 78]\ngradebook = {n: s for n, s in zip(names, scores)}\n# {\'Alice\': 92, \'Bob\': 85, \'Carol\': 78}\n\n# Invert a dict (swap keys ↔ values)\nhex_codes = {"red": "#FF0000", "green": "#00FF00"}\nby_code = {v: k for k, v in hex_codes.items()}\n# {\'#FF0000\': \'red\', \'#00FF00\': \'green\'}\n\n# Filter\npassing = {n: s for n, s in gradebook.items() if s >= 80}\n# {\'Alice\': 92, \'Bob\': 85}\n\n# Count occurrences in one line\ntext = "abracadabra"\ncount = {ch: text.count(ch) for ch in set(text)}\n# {\'a\': 5, \'b\': 2, \'r\': 2, \'c\': 1, \'d\': 1}',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Set Comprehensions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Set Comprehensions' },
  {
    type: 'code',
    code: '# Unique vowels in a sentence\nsentence = "the quick brown fox jumps over the lazy dog"\nvowels = {ch for ch in sentence if ch in "aeiou"}\n# {\'a\', \'e\', \'i\', \'o\', \'u\'}\n\n# Unique word lengths\nlengths = {len(w) for w in sentence.split()}\n# {3, 4, 5}',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Generator Expressions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Generator Expressions — Lazy Comprehensions' },
  {
    type: 'text',
    content: 'Swap the `[ ]` for `( )` and you get a **generator expression** — a lazy, memory-efficient iterator. It produces values **one at a time**, never building a full list in memory.',
  },
  {
    type: 'code',
    code: '# A list comprehension builds the whole list — 1 GB of RAM\ntotal = sum([x * x for x in range(10_000_000)])\n\n# A generator expression streams values — constant memory\ntotal = sum(x * x for x in range(10_000_000))\n\n# When passed as a single argument, the outer parens are optional:\n#   sum(x * x for x in nums)   # generator expression\n#   sum((x * x for x in nums)) # equivalent but ugly\n\nimport sys\nprint(sys.getsizeof([x for x in range(1000)]))   # ~8000 bytes\nprint(sys.getsizeof(x for x in range(1000)))     # ~200 bytes (just the gen object)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Rule of Thumb',
    content: 'Use **list comprehension** when you need the full collection (index into it, length, pass around). Use a **generator expression** when you\'re piping it straight into `sum`, `any`, `all`, `max`, `min`, or iterating once.',
  },

  // ═══════════════════════════════════════
  // Section 7: Scope — A Subtle Gotcha
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Comprehension Scope' },
  {
    type: 'text',
    content: 'In Python 3, comprehension variables live in **their own scope** — they don\'t leak into the surrounding function. This fixed a classic bug from Python 2.',
  },
  {
    type: 'code',
    code: 'x = 10\n_ = [x for x in range(5)]\nprint(x)   # 10  — the comprehension\'s x did NOT overwrite it\n# (In Python 2 this would print 4. Python 3 fixed it.)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: When NOT to Use a Comprehension
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'When Not to Use Them' },
  {
    type: 'list',
    items: [
      '**When the logic needs multiple statements.** A comprehension is *one expression* — if you need `try/except`, a side-effect, or a 3-step transformation, use a regular loop.',
      '**When it stops being readable.** If your comprehension needs a comment to explain it, a loop was probably clearer.',
      '**When you only care about side effects.** Use a `for` loop. `[print(x) for x in data]` builds a list of `None`s just to throw away — wasteful and confusing.',
      '**When nesting ≥ 3 levels deep.** Your future self will thank you for the plain loop.',
    ],
  },
  {
    type: 'code',
    code: '# BAD — three-level nested comprehension, unreadable\nresult = [[[f(a, b, c) for c in C] for b in B] for a in A]\n\n# BETTER — explicit loops, clear intent\nresult = []\nfor a in A:\n    row = []\n    for b in B:\n        cell = [f(a, b, c) for c in C]\n        row.append(cell)\n    result.append(row)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Comprehension Execution Model
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper - Comprehension Runtime and Memory' },
  {
    type: 'text',
    content: 'A list comprehension is eager: it allocates and fills a list immediately. A generator expression is lazy: it stores execution state and yields one item at a time.',
  },
  {
    type: 'code',
    code: 'nums = range(5)\nlist_comp = [x * x for x in nums]\ngen_expr = (x * x for x in nums)\n\nprint(list_comp)\nprint(next(gen_expr))\nprint(next(gen_expr))',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Eager List vs Lazy Generator',
    description: 'Both use the same expression logic but create different runtime objects and memory behavior.',
    bindings: [
      { scope: 'global', name: 'list_comp', objectId: 'L_COMP' },
      { scope: 'global', name: 'gen_expr', objectId: 'G_EXPR' },
      { scope: 'runtime', name: 'iter_source', objectId: 'RANGE5' },
    ],
    objects: [
      {
        id: 'RANGE5',
        type: 'range',
        value: 'range(0, 5)',
        mutable: false,
        accent: 'amber',
      },
      {
        id: 'L_COMP',
        type: 'list',
        value: '[0, 1, 4, 9, 16]',
        mutable: true,
        note: 'All values materialized at once.',
        accent: 'mint',
      },
      {
        id: 'G_EXPR',
        type: 'generator',
        value: '<genexpr state=index=2>',
        mutable: true,
        note: 'Stores only execution state, not full output.',
        accent: 'sky',
      },
    ],
    insights: [
      'List comprehensions trade memory for immediate reusability.',
      'Generator expressions trade random access for low memory use.',
      'Both execute loop variables in an isolated comprehension scope in Python 3.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Materialization vs Streaming',
    prompt: 'Compare when values are computed and where they are stored.',
    steps: [
      {
        title: 'Build Eager List',
        action: 'Run list comprehension',
        code: 'squares = [x * x for x in range(4)]',
        bindings: [
          { scope: 'global', name: 'squares', objectId: 'L_SQ' },
        ],
        objects: [
          { id: 'L_SQ', type: 'list', value: '[0, 1, 4, 9]', mutable: true, refCount: 1, accent: 'mint' },
        ],
        explanation: 'All output values are computed immediately and stored in one list object.',
      },
      {
        title: 'Create Generator',
        action: 'Run generator expression',
        code: 'stream = (x * x for x in range(4))',
        bindings: [
          { scope: 'global', name: 'stream', objectId: 'G_SQ' },
        ],
        objects: [
          { id: 'G_SQ', type: 'generator', value: '<state: not started>', mutable: true, refCount: 1, accent: 'sky' },
        ],
        explanation: 'No squares are computed yet; only iterator state and bytecode context are stored.',
      },
      {
        title: 'Consume One Item',
        action: 'Run first next call',
        code: 'next(stream)  # 0',
        bindings: [
          { scope: 'global', name: 'stream', objectId: 'G_SQ' },
        ],
        objects: [
          { id: 'G_SQ', type: 'generator', value: '<state: index=1>', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'I0', type: 'int', value: '0', mutable: false, refCount: 0, accent: 'amber', note: 'Returned value is temporary unless rebound.' },
        ],
        explanation: 'Generator runs until first yield and pauses, keeping resume state.',
      },
      {
        title: 'Exhaust Generator',
        action: 'Consume remaining values',
        code: 'list(stream)  # [1, 4, 9]',
        bindings: [
          { scope: 'global', name: 'stream', objectId: 'G_SQ' },
        ],
        objects: [
          { id: 'G_SQ', type: 'generator', value: '<state: exhausted>', mutable: true, refCount: 1, accent: 'coral' },
        ],
        explanation: 'After exhaustion, additional reads produce no values and raise StopIteration.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 9: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Your Turn' },
  {
    type: 'playground',
    instructions: 'Given the sentence below, use ONE dict comprehension to build `{word: length}` for every word **longer than 3 letters**. Expected: `{\'quick\': 5, \'brown\': 5, \'jumps\': 5, \'over\': 4, \'lazy\': 4}`.',
    defaultCode: 'sentence = "the quick brown fox jumps over the lazy dog"\n\n# one dict comprehension here\nresult = {}\n\nprint(result)',
  },

  // ═══════════════════════════════════════
  // Section 10: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Are comprehensions actually faster than equivalent for-loops?',
        answer: 'Yes — typically **1.5× to 2× faster** because CPython has a specialized bytecode path (`LIST_APPEND` instead of attribute lookup + call). The difference grows with the size of the iterable.',
      },
      {
        question: 'What\'s the difference between `[x for x in data]` and `list(x for x in data)`?',
        answer: 'Functionally identical — both produce a list. The first is the **list comprehension** (faster, clearer). The second builds a generator and then materializes it — it\'s slightly slower and indirect. Use the first form.',
      },
      {
        question: 'Can I use `for` variables in my output expression?',
        answer: 'Yes — that\'s the whole point. `[name.upper() for name in names]` uses the `name` variable from the loop header. You can also chain multiple `for` clauses and reference outer variables in inner ones.',
      },
      {
        question: 'Why does `(x for x in data)` return a generator instead of a tuple?',
        answer: 'Because tuples are immutable — building one *lazily* would not make sense. Python chose to give parentheses generator semantics instead. For a tuple, wrap it: `tuple(x for x in data)`.',
      },
      {
        question: 'Does a comprehension\'s loop variable leak into the surrounding scope?',
        answer: 'No — in Python 3, each comprehension has its **own** scope (implemented via a hidden nested function). After `[x for x in range(5)]`, the name `x` in the outer scope is unchanged. (Python 2 leaked — Py3 fixed it.)',
      },
      {
        question: 'When should I reach for a generator expression over a list comprehension?',
        answer: 'When you don\'t need a **reusable, indexable collection** — only a single pass. Feeding to `sum/any/all/max/min`, streaming through a pipeline, or handling huge datasets: generator. Need to iterate twice, index, or know the length: list.',
      },
    ],
  },
]

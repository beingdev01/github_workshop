import type { ContentBlock } from '@/types/content'

export const day3Iterators: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Iterators & Generators' },
  {
    type: 'text',
    content: 'Every `for` loop you\'ve written in Python runs on a hidden contract called the **iterator protocol**. Understanding it unlocks one of Python\'s most powerful features — **generators** — which let you produce sequences of any length, even infinite, using almost no memory.',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Why This Matters',
    content: 'Generators are how modern Python reads gigabyte log files, streams database rows, and pipelines data transformations — without loading everything into RAM. Once you "get" them, you\'ll rewrite half your loops.',
  },

  // ═══════════════════════════════════════
  // Section 2: Iterables vs Iterators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Iterables vs Iterators' },
  {
    type: 'list',
    items: [
      '**Iterable** — anything you can loop over. Must implement `__iter__()` which returns an iterator. Examples: `list`, `tuple`, `str`, `dict`, `set`, `range`, files.',
      '**Iterator** — a *one-shot*, stateful object that produces values on demand. Must implement `__next__()` which returns the next value or raises `StopIteration`.',
    ],
  },
  {
    type: 'code',
    code: 'nums = [10, 20, 30]   # iterable (a list)\nit = iter(nums)       # calls nums.__iter__()  →  returns an iterator\n\nprint(next(it))   # 10\nprint(next(it))   # 20\nprint(next(it))   # 30\nprint(next(it))   # StopIteration — the iterator is exhausted',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'What a for-loop Really Does',
    content: '`for x in nums:` is pure syntactic sugar. Under the hood Python calls `iter(nums)` once, then `next(it)` repeatedly, catching `StopIteration` to exit. That\'s it. Every iterable works this way.',
  },
  {
    type: 'code',
    code: '# This...\nfor x in [1, 2, 3]:\n    print(x)\n\n# ...is exactly equivalent to:\nit = iter([1, 2, 3])\nwhile True:\n    try:\n        x = next(it)\n    except StopIteration:\n        break\n    print(x)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: Iterators are One-Shot
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Iterators are One-Shot' },
  {
    type: 'code',
    code: 'nums = [1, 2, 3]\nit = iter(nums)\n\nprint(list(it))   # [1, 2, 3]\nprint(list(it))   # []   ← exhausted! Iterator is dead.\n\n# The iterable itself can be iterated many times:\nprint(list(nums))   # [1, 2, 3]\nprint(list(nums))   # [1, 2, 3]  — still works',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Don\'t Confuse the Two',
    content: 'A list is iter**able** (you can ask for fresh iterators forever). A generator is an iter**ator** (one trip, then dead). Passing a generator to two `for` loops will break you — the second sees nothing.',
  },

  // ═══════════════════════════════════════
  // Section 4: Generator Functions
  // ═══════════════════════════════════════
  // Going Deeper: Iterator Protocol Internals
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — What a for Loop Really Does' },
  {
    type: 'text',
    content: 'A `for` loop is syntactic sugar over the iterator protocol: Python calls `iter(sequence)` once, then repeatedly calls `next(iterator)` until `StopIteration` is raised.',
  },
  {
    type: 'code',
    code: 'items = [10, 20, 30]\nit = iter(items)\n\nprint(next(it))   # 10\nprint(next(it))   # 20\nprint(next(it))   # 30\n# print(next(it)) # StopIteration\n\n# Equivalent for-loop shape:\n# it = iter(items)\n# while True:\n#     try:\n#         value = next(it)\n#     except StopIteration:\n#         break\n#     print(value)',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Sequence -> Iterator -> Loop Variable',
    description: 'The loop variable is rebound each iteration to the object returned by next(iterator).',
    bindings: [
      { scope: 'global', name: 'items', objectId: 'L_ITEMS' },
      { scope: 'global', name: 'it', objectId: 'IT_LIST' },
      { scope: 'for-frame', name: 'n', objectId: 'I20' },
      { scope: 'global', name: 'result', objectId: 'L_RESULT' },
    ],
    objects: [
      {
        id: 'L_ITEMS',
        type: 'list',
        value: '[10, 20, 30]',
        mutable: true,
        note: 'Source iterable owned by outer scope.',
        accent: 'amber',
      },
      {
        id: 'IT_LIST',
        type: 'list_iterator',
        value: '<list_iterator at index=2>',
        mutable: true,
        note: 'Iterator stores progress state independently of the list object.',
        accent: 'sky',
      },
      {
        id: 'I20',
        type: 'int',
        value: '20',
        mutable: false,
        accent: 'mint',
      },
      {
        id: 'L_RESULT',
        type: 'list',
        value: '[100, 400]',
        mutable: true,
        note: 'Accumulator list that grows as loop iterations complete.',
        accent: 'neutral',
      },
    ],
    insights: [
      'The iterator, not the loop variable, tracks traversal position.',
      'Loop variables are rebound every iteration; they are not new scoped variables each time.',
      'Loop ends when `next` raises StopIteration, not when index == len directly.',
    ],
  },
  {
    type: 'heading', level: 2, text: 'for-else and Loop Completion State' },
  {
    type: 'text',
    content: 'In `for-else`, the `else` clause runs only when iteration ends naturally. Any `break` marks the loop as terminated early and suppresses `else`.',
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Iterator Progress and StopIteration',
    prompt: 'Follow the same loop as Python sees it internally.',
    steps: [
      {
        title: 'Create Iterable and Iterator',
        action: 'Run setup state',
        code: 'nums = [1, 2, 3]\nit = iter(nums)\nsquares = []',
        bindings: [
          { scope: 'global', name: 'nums', objectId: 'L_NUMS' },
          { scope: 'global', name: 'it', objectId: 'IT1' },
          { scope: 'global', name: 'squares', objectId: 'L_SQ' },
        ],
        objects: [
          { id: 'L_NUMS', type: 'list', value: '[1, 2, 3]', mutable: true, refCount: 1, accent: 'amber' },
          { id: 'IT1', type: 'list_iterator', value: '<index=0>', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'L_SQ', type: 'list', value: '[]', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'Iterator starts before the first element, and accumulator is empty.',
      },
      {
        title: 'First next() Result',
        action: 'Loop fetches first value',
        code: 'n = next(it)      # 1\nsquares.append(n * n)',
        bindings: [
          { scope: 'global', name: 'it', objectId: 'IT1' },
          { scope: 'for-frame', name: 'n', objectId: 'I1' },
          { scope: 'global', name: 'squares', objectId: 'L_SQ' },
        ],
        objects: [
          { id: 'IT1', type: 'list_iterator', value: '<index=1>', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'I1', type: 'int', value: '1', mutable: false, refCount: 1, accent: 'mint' },
          { id: 'L_SQ', type: 'list', value: '[1]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Loop variable `n` now references element 1, then body appends 1^2.',
      },
      {
        title: 'Second Iteration Rebind',
        action: 'Loop fetches next value and reuses name n',
        code: 'n = next(it)      # 2\nsquares.append(n * n)',
        bindings: [
          { scope: 'global', name: 'it', objectId: 'IT1' },
          { scope: 'for-frame', name: 'n', objectId: 'I2' },
          { scope: 'global', name: 'squares', objectId: 'L_SQ' },
        ],
        objects: [
          { id: 'IT1', type: 'list_iterator', value: '<index=2>', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'I2', type: 'int', value: '2', mutable: false, refCount: 1, accent: 'mint' },
          { id: 'L_SQ', type: 'list', value: '[1, 4]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Same variable name, new binding. Rebinding is how loop variables advance.',
      },
      {
        title: 'Iterator Exhausts',
        action: 'After consuming 3, next(it) raises StopIteration',
        code: '# implicit StopIteration -> loop exits',
        bindings: [
          { scope: 'global', name: 'it', objectId: 'IT1' },
          { scope: 'global', name: 'squares', objectId: 'L_SQ' },
          { scope: 'for-frame', name: 'n', objectId: 'I3' },
        ],
        objects: [
          { id: 'IT1', type: 'list_iterator', value: '<exhausted>', mutable: true, refCount: 1, accent: 'coral' },
          { id: 'I3', type: 'int', value: '3', mutable: false, refCount: 1, accent: 'mint' },
          { id: 'L_SQ', type: 'list', value: '[1, 4, 9]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Natural exhaustion ends the loop. This is the path where `for-else` would run its else clause.',
      },
    ],
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

  { type: 'heading', level: 2, text: 'Generator Functions (yield)' },
  {
    type: 'text',
    content: 'A function with **`yield`** instead of `return` is a **generator function**. Calling it doesn\'t run the body — it returns a **generator object** (an iterator). Each call to `next()` runs code until the next `yield`, hands back the value, and **pauses** — preserving all local state.',
  },
  {
    type: 'code',
    code: 'def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\ngen = count_up_to(3)\nprint(next(gen))   # 1  — runs until yield, pauses\nprint(next(gen))   # 2  — resumes, runs until next yield\nprint(next(gen))   # 3\nprint(next(gen))   # StopIteration\n\n# Usually you just loop over it:\nfor n in count_up_to(5):\n    print(n)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'The Pause-Resume Superpower',
    content: 'When `yield` fires, the function **freezes** — its locals, its place in the code, even its open loops. `next()` thaws it. This is why generators cost almost nothing: there\'s no stack unwinding, no list materialization, just a paused function.',
  },

  // ═══════════════════════════════════════
  // Section 5: Infinite Sequences
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Infinite Sequences — Zero Memory Cost' },
  {
    type: 'code',
    code: 'def naturals():\n    n = 1\n    while True:\n        yield n\n        n += 1\n\n# A list would run out of memory. A generator never does.\nfor n in naturals():\n    if n > 5:\n        break\n    print(n)\n# 1 2 3 4 5\n\n# Fibonacci — same idea\ndef fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfrom itertools import islice\nprint(list(islice(fib(), 10)))\n# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Memory Difference
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Why Generators Matter' },
  {
    type: 'code',
    code: 'import sys\n\n# Eager: builds the whole list\nsquares_list = [x * x for x in range(1_000_000)]\nprint(sys.getsizeof(squares_list))   # ~8_000_000 bytes (~8 MB)\n\n# Lazy: a tiny state machine\nsquares_gen = (x * x for x in range(1_000_000))\nprint(sys.getsizeof(squares_gen))    # ~200 bytes\n\n# Both give the same sum — but one holds the universe in memory\nprint(sum(squares_gen))',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: yield from
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'yield from — Delegating to Another Iterable' },
  {
    type: 'code',
    code: '# Without yield from — awkward explicit loop\ndef chain_manual(*iterables):\n    for it in iterables:\n        for item in it:\n            yield item\n\n# With yield from — clean delegation\ndef chain(*iterables):\n    for it in iterables:\n        yield from it\n\nprint(list(chain([1, 2], (3, 4), "ab")))\n# [1, 2, 3, 4, \'a\', \'b\']',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Pipelines
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Generator Pipelines' },
  {
    type: 'text',
    content: 'Generators compose: the output of one feeds another. This builds **lazy pipelines** that process huge datasets stage by stage, passing one value at a time — like Unix pipes.',
  },
  {
    type: 'code',
    code: '# Compose generators — no intermediate list is ever built\ndef numbers():\n    n = 1\n    while n <= 5:\n        yield n\n        n += 1\n\ndef doubled(nums):\n    for n in nums:\n        yield n * 2\n\nprint(list(doubled(numbers())))  # [2, 4, 6, 8, 10]\n\n# The same idea works on files — see File Handling on Day 3.',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: itertools — The Power Tools
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'itertools — The Standard Library Toolkit' },
  {
    type: 'code',
    code: 'from itertools import count, cycle, islice, chain, takewhile, groupby, combinations, permutations\n\n# Infinite counter\nlist(islice(count(10, 2), 5))      # [10, 12, 14, 16, 18]\n\n# Infinite cycle\nlist(islice(cycle("AB"), 6))       # [\'A\', \'B\', \'A\', \'B\', \'A\', \'B\']\n\n# First n matching\nlist(takewhile(lambda x: x < 5, [1, 3, 5, 7]))   # [1, 3]\n\n# Flatten\nlist(chain([1, 2], [3, 4]))        # [1, 2, 3, 4]\n\n# Pairs and triples\nlist(combinations("ABC", 2))       # [(\'A\',\'B\'), (\'A\',\'C\'), (\'B\',\'C\')]\nlist(permutations("ABC", 2))       # [(\'A\',\'B\'), (\'A\',\'C\'), (\'B\',\'A\'), ...]\n\n# Group consecutive runs\nfor key, grp in groupby("aaabbcdd"):\n    print(key, list(grp))\n# a [\'a\', \'a\', \'a\']\n# b [\'b\', \'b\']\n# c [\'c\']\n# d [\'d\', \'d\']',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 10: Custom Iterator Class
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Building Your Own Iterator (the long way)' },
  {
    type: 'text',
    content: 'You almost never need this — generators are shorter and cleaner. But it\'s worth seeing the underlying protocol once.',
  },
  {
    type: 'code',
    code: '# The same thing as a generator — 4 lines instead of 10\ndef countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nfor n in countdown(3):\n    print(n)\n# 3 2 1\n\n# A class-based iterator does the same job with __iter__ and\n# __next__ — you will build one in OOP Deep Dive, later today.',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Iterator State in Memory
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper - Iterator State Machine' },
  {
    type: 'text',
    content: 'An iterator is a small state machine. next() advances internal state, returns one value, and either pauses (for generators) or mutates cursor fields (for iterator classes).',
  },
  {
    type: 'code',
    code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\ng = countdown(3)\nprint(next(g))\nprint(next(g))',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Generator Object Holds Resume State',
    description: 'The generator keeps instruction pointer and locals between next() calls.',
    bindings: [
      { scope: 'global', name: 'g', objectId: 'GEN_C' },
      { scope: 'generator:countdown', name: 'n', objectId: 'I2' },
      { scope: 'runtime', name: 'instruction_ptr', objectId: 'IP_AFTER_YIELD' },
    ],
    objects: [
      {
        id: 'GEN_C',
        type: 'generator',
        value: '<countdown state=paused>',
        mutable: true,
        note: 'Stores frame data for later resumption.',
        accent: 'sky',
      },
      { id: 'I2', type: 'int', value: '2', mutable: false, accent: 'amber' },
      {
        id: 'IP_AFTER_YIELD',
        type: 'state marker',
        value: 'resume at line after yield',
        mutable: false,
        accent: 'mint',
      },
    ],
    insights: [
      'Generators are iterators with suspended frame state.',
      'Each next() runs until next yield or StopIteration.',
      'Exhausted generators cannot be rewound; create a new one.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: next() Through Generator Lifecycle',
    prompt: 'Observe not started, paused, and exhausted generator states.',
    steps: [
      {
        title: 'Create Generator Object',
        action: 'Call generator function',
        code: 'g = countdown(3)',
        bindings: [
          { scope: 'global', name: 'g', objectId: 'GEN1' },
        ],
        objects: [
          { id: 'GEN1', type: 'generator', value: '<state: created>', mutable: true, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Function body has not executed yet; only generator object is created.',
      },
      {
        title: 'First next',
        action: 'Advance to first yield',
        code: 'next(g)  # 3',
        bindings: [
          { scope: 'global', name: 'g', objectId: 'GEN1' },
          { scope: 'generator:countdown', name: 'n', objectId: 'I3' },
        ],
        objects: [
          { id: 'GEN1', type: 'generator', value: '<state: paused after yield>', mutable: true, refCount: 1, accent: 'mint' },
          { id: 'I3', type: 'int', value: '3', mutable: false, refCount: 0, accent: 'amber' },
        ],
        explanation: 'Generator executes until yield and pauses with resumable context.',
      },
      {
        title: 'Second next',
        action: 'Resume and yield next value',
        code: 'next(g)  # 2',
        bindings: [
          { scope: 'global', name: 'g', objectId: 'GEN1' },
          { scope: 'generator:countdown', name: 'n', objectId: 'I2' },
        ],
        objects: [
          { id: 'GEN1', type: 'generator', value: '<state: paused after second yield>', mutable: true, refCount: 1, accent: 'mint' },
          { id: 'I2', type: 'int', value: '2', mutable: false, refCount: 0, accent: 'amber' },
        ],
        explanation: 'Local n persisted and was updated before yielding again.',
      },
      {
        title: 'Exhaustion',
        action: 'Consume remaining values',
        code: 'next(g)  # 1\nnext(g)  # StopIteration',
        bindings: [
          { scope: 'global', name: 'g', objectId: 'GEN1' },
        ],
        objects: [
          { id: 'GEN1', type: 'generator', value: '<state: exhausted>', mutable: true, refCount: 1, accent: 'coral' },
        ],
        explanation: 'After completion, further next calls raise StopIteration immediately.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 11: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Your Turn' },
  {
    type: 'playground',
    instructions: 'Write a generator `every_other(seq)` that yields every other element of `seq` (indices 0, 2, 4, …). Test that the sum of `every_other(range(1, 11))` is `25` (1+3+5+7+9).',
    defaultCode: 'def every_other(seq):\n    # use yield\n    pass\n\nprint(list(every_other(range(1, 11))))   # [1, 3, 5, 7, 9]\nprint(sum(every_other(range(1, 11))))    # 25',
  },

  // ═══════════════════════════════════════
  // Section 12: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What\'s the practical difference between an *iterable* and an *iterator*?',
        answer: 'An **iterable** (list, str, dict) can be looped over repeatedly — each `for` call creates a **fresh iterator**. An **iterator** (generator, `iter(x)` result) is a one-shot cursor — once exhausted, it\'s empty. Lists are iterable, not iterators. `iter(list)` gives you the iterator.',
      },
      {
        question: 'What does `yield` actually do?',
        answer: '`yield` **pauses** the function, returns the value to the caller, and **preserves** all local state. On the next `next()` call, execution resumes on the line *after* `yield` as if nothing happened. It\'s a "pausable" return.',
      },
      {
        question: 'When does a generator raise `StopIteration`?',
        answer: 'When the function body returns — either by reaching the end, hitting an explicit `return`, or raising. The `for` loop catches `StopIteration` silently, which is why you never see it in normal code.',
      },
      {
        question: 'Why can\'t I iterate the same generator twice?',
        answer: 'Because generators are **iterators**, not iterables-that-reset. State (the paused position) is stored *inside* the generator object. Once consumed, there\'s nothing left. For re-use, keep the **generator function** and call it again to produce a fresh generator.',
      },
      {
        question: 'Are generators really more efficient than lists?',
        answer: 'For **memory**: dramatically — O(1) vs O(n). For **CPU**: roughly similar per item, sometimes a hair slower due to overhead. But if you never need the full collection at once, the memory win is overwhelming.',
      },
      {
        question: 'What\'s the difference between `yield` and `yield from`?',
        answer: '`yield x` produces one value. `yield from iterable` produces **all** values from another iterable (and in coroutines, also forwards `send()` and exceptions). It\'s how you compose generators without nested `for` loops.',
      },
      {
        question: 'Is `range(10)` a generator?',
        answer: 'No — it\'s an **iterable** of its own special type. It supports indexing (`range(10)[3]`), length, and **reiteration**. Generators can do none of those. `range` is more powerful than a generator; it just happens to also be lazy.',
      },
    ],
  },
]

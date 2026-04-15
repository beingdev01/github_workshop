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
    code: 'def read_lines(path):\n    with open(path) as f:\n        for line in f:\n            yield line.rstrip()\n\ndef non_empty(lines):\n    for line in lines:\n        if line:\n            yield line\n\ndef parse_numbers(lines):\n    for line in lines:\n        yield int(line)\n\n# Compose — no intermediate list is ever built\ntotal = sum(parse_numbers(non_empty(read_lines("numbers.txt"))))\n# Works on a 10-GB file using ~1 KB of memory.',
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
    code: 'class Countdown:\n    def __init__(self, start):\n        self.current = start\n\n    def __iter__(self):\n        return self           # iterator is its own iterable\n\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        self.current -= 1\n        return self.current + 1\n\nfor n in Countdown(3):\n    print(n)\n# 3 2 1\n\n# The same thing as a generator — 4 lines instead of 10\ndef countdown(start):\n    while start > 0:\n        yield start\n        start -= 1',
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

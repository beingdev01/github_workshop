import type { ContentBlock } from '@/types/content'

export const day2Lists: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Lists — Python\'s Workhorse Data Structure' },
  {
    type: 'text',
    content: 'A **list** is an ordered, mutable collection that can hold items of any type. Lists are Python\'s most versatile data structure — they\'re used everywhere: storing data, building results, processing sequences, and much more. If you only learn one data structure well, make it lists.',
  },

  // ═══════════════════════════════════════
  // Section 2: Creating Lists
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Creating Lists' },
  {
    type: 'code',
    code: '# Empty list\nempty = []\nalso_empty = list()\n\n# List with values\nnumbers = [1, 2, 3, 4, 5]\nnames = ["Alice", "Bob", "Charlie"]\nmixed = [1, "hello", 3.14, True, None]   # Any types!\n\n# List from other sequences\nfrom_string = list("Python")    # [\'P\', \'y\', \'t\', \'h\', \'o\', \'n\']\nfrom_range = list(range(5))     # [0, 1, 2, 3, 4]\nfrom_tuple = list((10, 20, 30)) # [10, 20, 30]\n\n# List comprehension (we\'ll cover this more later)\nsquares = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]\n\n# Repeated elements\nzeros = [0] * 5          # [0, 0, 0, 0, 0]\npattern = [1, 2] * 3     # [1, 2, 1, 2, 1, 2]\n\nprint(f"Numbers: {numbers}")\nprint(f"Mixed: {mixed}")\nprint(f"From string: {from_string}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: Indexing & Slicing
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Indexing & Slicing' },
  {
    type: 'code',
    code: 'colors = ["red", "green", "blue", "yellow", "purple"]\n\n# Positive indexing (0-based)\nprint(colors[0])    # red (first)\nprint(colors[2])    # blue (third)\nprint(colors[4])    # purple (last, but fragile)\n\n# Negative indexing (from the end)\nprint(colors[-1])   # purple (last — preferred!)\nprint(colors[-2])   # yellow (second to last)\n\n# Slicing: list[start:stop:step]\nprint(colors[1:4])    # [\'green\', \'blue\', \'yellow\'] — indices 1,2,3\nprint(colors[:3])     # [\'red\', \'green\', \'blue\'] — first 3\nprint(colors[2:])     # [\'blue\', \'yellow\', \'purple\'] — from index 2\nprint(colors[::2])    # [\'red\', \'blue\', \'purple\'] — every other\nprint(colors[::-1])   # [\'purple\', \'yellow\', \'blue\', \'green\', \'red\'] — reversed!\n\n# Slicing creates a COPY (new list)\nfirst_three = colors[:3]\nfirst_three[0] = "CHANGED"\nprint(colors[0])     # red — original unchanged!',
    language: 'python',
  },
  {
    type: 'sliceVisualizer',
    title: 'Try It: List Slice Visualizer',
    description: 'Adjust start, stop, and step to see how Python carves out sub-lists. Negative indices and reverse strides included.',
    items: [10, 20, 30, 40, 50, 60, 70, 80],
  },

  // ═══════════════════════════════════════
  // Section 4: Mutability
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Lists Are Mutable' },
  {
    type: 'text',
    content: 'Unlike strings, lists can be **modified in place** — you can change, add, or remove elements without creating a new list:',
  },
  {
    type: 'code',
    code: '# Modifying elements\nfruits = ["apple", "banana", "cherry"]\nfruits[1] = "blueberry"       # Change one element\nprint(fruits)  # [\'apple\', \'blueberry\', \'cherry\']\n\n# Modifying a slice\nnumbers = [1, 2, 3, 4, 5]\nnumbers[1:4] = [20, 30, 40]   # Replace a range\nprint(numbers)  # [1, 20, 30, 40, 5]\n\n# Insert elements via slice assignment\nletters = [\'a\', \'d\', \'e\']\nletters[1:1] = [\'b\', \'c\']     # Insert without removing\nprint(letters)  # [\'a\', \'b\', \'c\', \'d\', \'e\']\n\n# Delete elements via slice\nnumbers = [1, 2, 3, 4, 5]\nnumbers[1:3] = []             # Remove indices 1-2\nprint(numbers)  # [1, 4, 5]',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Aliasing — Two Names, One List!',
    content: 'When you assign a list to a new variable, both variables point to the **same** list in memory. Modifying one affects the other!\n\n`a = [1, 2, 3]`\n`b = a`  ← b is an alias, NOT a copy!\n`b.append(4)`\n`print(a)` → `[1, 2, 3, 4]` — a changed too!\n\nTo make an independent copy: `b = a.copy()` or `b = a[:]`',
  },

  // ═══════════════════════════════════════
  // Section 5: List Methods
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Essential List Methods' },
  {
    type: 'code',
    code: 'nums = [3, 1, 4, 1, 5, 9, 2, 6]\n\n# Adding elements\nnums.append(7)         # Add to the end: [..., 7]\nnums.insert(0, 0)      # Insert at index 0: [0, 3, 1, ...]\nnums.extend([8, 9])    # Add multiple: [..., 8, 9]\nprint(nums)\n\n# Removing elements\nnums.remove(1)         # Remove FIRST occurrence of 1\npopped = nums.pop()    # Remove & return last element\npopped_at = nums.pop(0)  # Remove & return element at index 0\nprint(f"Popped: {popped}, At index 0: {popped_at}")\n\n# Finding\nprint(nums.index(4))     # Index of first 4\nprint(nums.count(1))     # How many 1s?\nprint(5 in nums)         # Is 5 present? True/False\n\n# Sorting\nnums.sort()              # Sort in-place (modifies the list)\nprint(nums)\nnums.sort(reverse=True)  # Sort descending\nprint(nums)\n\n# sorted() creates a NEW sorted list (original unchanged)\noriginal = [3, 1, 4, 1, 5]\nnew_sorted = sorted(original)\nprint(f"Original: {original}")    # [3, 1, 4, 1, 5]\nprint(f"Sorted: {new_sorted}")    # [1, 1, 3, 4, 5]\n\n# Reversing\nnums.reverse()           # Reverse in-place\nprint(list(reversed(nums)))  # New reversed list',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: '.sort() vs sorted() — Crucial Difference!',
    content: '`list.sort()` sorts **in place** and returns `None`.\n`sorted(list)` returns a **new sorted list** and leaves the original unchanged.\n\nCommon bug: `my_list = my_list.sort()` — this sets my_list to None!',
  },

  // ═══════════════════════════════════════
  // Section 6: Built-in Functions for Lists
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Useful Built-in Functions' },
  {
    type: 'code',
    code: 'nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\n\nprint(len(nums))        # 11 — number of elements\nprint(sum(nums))        # 44 — sum of all elements\nprint(min(nums))        # 1 — minimum\nprint(max(nums))        # 9 — maximum\nprint(sum(nums) / len(nums))  # 4.0 — average\n\n# any() and all()\nvals = [0, 1, 2, 3]\nprint(any(vals))    # True — at least one truthy value\nprint(all(vals))    # False — 0 is falsy\n\nbools = [True, True, True]\nprint(all(bools))   # True — all are True\n\n# zip() with lists\nnames = ["Alice", "Bob", "Charlie"]\nscores = [95, 87, 92]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n\n# enumerate()\nfor i, name in enumerate(names, 1):\n    print(f"#{i}: {name}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Nested Lists (2D)
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Nested Lists (Matrices)' },
  {
    type: 'code',
    code: '# A list of lists = 2D structure (matrix)\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\n# Access: matrix[row][col]\nprint(matrix[0][0])    # 1 (top-left)\nprint(matrix[1][2])    # 6 (row 1, col 2)\nprint(matrix[2][1])    # 8 (row 2, col 1)\n\n# Iterate through a matrix\nfor row in matrix:\n    for val in row:\n        print(f"{val:3d}", end="")\n    print()\n#   1  2  3\n#   4  5  6\n#   7  8  9\n\n# Flatten a matrix\nflat = [val for row in matrix for val in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# Transpose a matrix\ntransposed = [[matrix[j][i] for j in range(3)] for i in range(3)]\nfor row in transposed:\n    print(row)\n# [1, 4, 7]\n# [2, 5, 8]\n# [3, 6, 9]',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Nested List Trap: [[0]*3]*3',
    content: '`[[0]*3]*3` creates 3 references to the SAME inner list!\n`matrix = [[0]*3]*3; matrix[0][0] = 5` → All rows show [5, 0, 0]!\n\nCorrect way: `[[0]*3 for _ in range(3)]` — each row is independent.',
  },

  // ═══════════════════════════════════════
  // Section 8: Strings ↔ Lists
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Strings and Lists' },
  {
    type: 'code',
    code: '# split() — string → list of words\nsentence = "Python is a wonderful language"\nwords = sentence.split()       # Split on whitespace\nprint(words)  # [\'Python\', \'is\', \'a\', \'wonderful\', \'language\']\n\n# Split on custom delimiter\ndata = "Alice,30,New York"\nparts = data.split(",")        # Split on comma\nprint(parts)  # [\'Alice\', \'30\', \'New York\']\n\n# join() — list → string\nwords = ["Hello", "World"]\nresult = " ".join(words)       # Join with space\nprint(result)  # Hello World\n\n# join with other separators\nprint(",".join(["a", "b", "c"]))    # a,b,c\nprint(" → ".join(["start", "middle", "end"]))  # start → middle → end\n\n# Practical: clean up a sentence\ntext = "  Hello   World  Python  "\ncleaned = " ".join(text.split())\nprint(cleaned)  # Hello World Python',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Explore lists!\n\n# 1. List operations\nnums = [64, 34, 25, 12, 22, 11, 90]\nprint(f"Original: {nums}")\nprint(f"Sorted:   {sorted(nums)}")\nprint(f"Sum: {sum(nums)}, Avg: {sum(nums)/len(nums):.1f}")\n\n# 2. List comprehensions\nmatrix = [[i*3+j+1 for j in range(3)] for i in range(3)]\nprint("\\nMatrix:")\nfor row in matrix:\n    print(f"  {row}")\n\n# 3. Stack operations (LIFO)\nstack = []\nfor item in ["A", "B", "C", "D"]:\n    stack.append(item)\n    print(f"  Push {item}: {stack}")\n\nwhile stack:\n    item = stack.pop()\n    print(f"  Pop {item}: {stack}")\n\n# 4. Unique elements while preserving order\ndata = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\nseen = set()\nunique = []\nfor x in data:\n    if x not in seen:\n        seen.add(x)\n        unique.append(x)\nprint(f"\\nUnique (ordered): {unique}")',
    instructions: 'Experiment with list methods, comprehensions, and nested lists.',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Dynamic Array Internals
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — How Lists Work Inside' },
  {
    type: 'text',
    content: 'A Python `list` is **not** a linked list — it\'s a **dynamic array** (also called a "vector" or `ArrayList`). Under the hood, CPython allocates a contiguous block of pointers and grows it when it fills up. Knowing this explains every performance quirk.',
  },
  {
    type: 'heading', level: 2, text: 'Contiguous Pointers, Not Values' },
  {
    type: 'text',
    content: 'The list doesn\'t store your values inline — it stores **pointers** to heap-allocated objects. That\'s why a list of ints takes much more memory than a C array, but also why it can hold any mix of types.',
  },
  {
    type: 'code',
    code: 'import sys\nlst = [1, 2, 3]\nprint(sys.getsizeof(lst))   # ~88 bytes: header + 3 pointers (+ slack)\n\n# The elements themselves live elsewhere:\nprint(sys.getsizeof(1))     # 28 — a whole int object\n# So lst really costs ~88 + 3 * 28 = ~172 bytes',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Over-Allocation — Why `append()` is O(1) Amortized' },
  {
    type: 'text',
    content: 'When you `append()` and the underlying array is full, CPython allocates a **bigger** array (roughly 1.125× + 6 extra slots), copies everything over, and then adds the new item. Because growth is geometric, the **amortized** cost of `append` is O(1) — you only occasionally pay the copy.',
  },
  {
    type: 'code',
    code: 'import sys\nlst = []\nprev = 0\nfor i in range(20):\n    lst.append(i)\n    size = sys.getsizeof(lst)\n    if size != prev:\n        print(f"after {i+1:2d} appends → {size} bytes")\n        prev = size\n# You\'ll see the allocation jump at specific lengths (0, 4, 8, 16, 25, 35, 46...).',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Growth Pattern',
    content: 'CPython\'s formula: `new_size = new_length + (new_length >> 3) + 6`. That overshoots by ~12.5% + 6 slots — tuned for a sweet spot between memory waste and copy frequency.',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Dynamic Array Stores Pointers',
    description: 'A list object owns an internal pointer array. Elements live as separate heap objects.',
    bindings: [
      { scope: 'global', name: 'nums', objectId: 'L_MAIN' },
      { scope: 'global', name: 'alias', objectId: 'L_MAIN' },
      { scope: 'runtime', name: 'ob_item[0]', objectId: 'I10' },
      { scope: 'runtime', name: 'ob_item[1]', objectId: 'I20' },
      { scope: 'runtime', name: 'ob_item[2]', objectId: 'I30' },
    ],
    objects: [
      {
        id: 'L_MAIN',
        type: 'list',
        value: '[10, 20, 30]  (size=3, capacity=8)',
        mutable: true,
        note: 'List header plus pointer array; spare capacity avoids resizing on every append.',
        accent: 'sky',
      },
      { id: 'I10', type: 'int', value: '10', mutable: false, accent: 'amber' },
      { id: 'I20', type: 'int', value: '20', mutable: false, accent: 'amber' },
      { id: 'I30', type: 'int', value: '30', mutable: false, accent: 'amber' },
    ],
    insights: [
      'List elements are references, so mixed types are natural in Python lists.',
      'Alias names point to the same list object, not duplicate arrays.',
      'Capacity can exceed length, enabling amortized O(1) append.',
    ],
  },

  {
    type: 'heading', level: 2, text: 'Time Complexity — Know Your Bills' },
  {
    type: 'code',
    code: 'Operation              Big-O          Notes\n────────────────────────────────────────────────────────\nlst[i]                 O(1)           pointer arithmetic\nlen(lst)               O(1)           stored in header\nlst.append(x)          O(1) amort.    occasional resize\nlst.pop()              O(1)           pop from end — cheap\nlst.pop(0)             O(n)           shifts EVERYTHING left\nlst.insert(0, x)       O(n)           shifts EVERYTHING right\nx in lst               O(n)           linear scan\nlst.sort()             O(n log n)     Timsort — adaptive\nlst[a:b]               O(b-a)         copies the slice\nlist(iter)             O(n)           full materialization',
    language: 'text',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'The `pop(0)` Trap',
    content: 'Popping or inserting at the **front** is O(n) — every other element has to slide. If you need a FIFO queue, use `collections.deque` which is O(1) at both ends.',
  },
  {
    type: 'code',
    code: 'from collections import deque\n\nq = deque()\nq.append("A")         # O(1)\nq.appendleft("Z")     # O(1) — unlike list.insert(0, ...)\nq.pop()               # O(1)\nq.popleft()           # O(1) — unlike list.pop(0)',
    language: 'python',
  },
  {
    type: 'complexityRacer',
    title: 'Watch the Bills Grow',
    description: 'Hit Race to grow n. O(1) is flat, O(n²) explodes — this is why pop(0) on a million-item list hurts.',
  },

  // ═══════════════════════════════════════
  // Merged: List Patterns (stacks, queues, copying)
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Practical List Patterns' },
  {
    type: 'heading', level: 2, text: 'Stacks — LIFO with append/pop' },
  {
    type: 'code',
    code: 'stack = []\nstack.append("A")      # push\nstack.append("B")\nstack.append("C")\nprint(stack)           # [\'A\', \'B\', \'C\']\n\ntop = stack.pop()      # pop → \'C\'\nprint(stack)           # [\'A\', \'B\']\n\n# Classic use: balanced brackets\ndef balanced(s):\n    stack = []\n    pairs = {")": "(", "]": "[", "}": "{"}\n    for ch in s:\n        if ch in "([{":\n            stack.append(ch)\n        elif ch in ")]}":\n            if not stack or stack.pop() != pairs[ch]:\n                return False\n    return not stack\n\nprint(balanced("({[]})"))   # True\nprint(balanced("([)]"))     # False',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Queues — Use deque, Not list' },
  {
    type: 'code',
    code: 'from collections import deque\n\nqueue = deque(["Alice", "Bob", "Carol"])\nqueue.append("Dan")        # enqueue at the back\nserved = queue.popleft()   # dequeue from the front → \'Alice\'\nprint(queue)               # deque([\'Bob\', \'Carol\', \'Dan\'])',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Copying — Shallow vs Deep' },
  {
    type: 'text',
    content: 'Because lists hold **pointers**, a "copy" can mean different things.',
  },
  {
    type: 'code',
    code: 'original = [[1, 2], [3, 4]]\n\n# Aliasing — NOT a copy\nalias = original\nalias[0][0] = 99\nprint(original)      # [[99, 2], [3, 4]]  ← same list!\n\n# Shallow copy — outer list is new, inner lists shared\nimport copy\nshallow = original.copy()       # or list(original), or original[:]\nshallow[0][0] = 77\nprint(original)      # [[77, 2], [3, 4]]  ← inner lists still shared\n\n# Deep copy — recursively independent\ndeep = copy.deepcopy(original)\ndeep[0][0] = 0\nprint(original)      # [[77, 2], [3, 4]]  ← unchanged',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'The Classic Bug',
    content: '`matrix = [[0] * 3] * 3` creates one row and references it three times. Writing `matrix[0][0] = 1` changes all three rows. Use `[[0] * 3 for _ in range(3)]` instead.',
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Alias vs Shallow vs Deep Copy',
    prompt: 'Step through nested-list copying and track which references remain shared.',
    steps: [
      {
        title: 'Create Original Nested List',
        action: 'Run base assignment',
        code: 'original = [[1], [2]]',
        bindings: [
          { scope: 'global', name: 'original', objectId: 'L_ORIG' },
        ],
        objects: [
          { id: 'L_ORIG', type: 'list', value: '[[1], [2]]', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'L_IN1', type: 'list', value: '[1]', mutable: true, refCount: 1, accent: 'amber' },
          { id: 'L_IN2', type: 'list', value: '[2]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Outer list references two inner list objects.',
      },
      {
        title: 'Alias Points to Same Object',
        action: 'Run `alias = original`',
        code: 'alias = original',
        bindings: [
          { scope: 'global', name: 'original', objectId: 'L_ORIG' },
          { scope: 'global', name: 'alias', objectId: 'L_ORIG' },
        ],
        objects: [
          { id: 'L_ORIG', type: 'list', value: '[[1], [2]]', mutable: true, refCount: 2, accent: 'mint' },
          { id: 'L_IN1', type: 'list', value: '[1]', mutable: true, refCount: 1, accent: 'amber' },
          { id: 'L_IN2', type: 'list', value: '[2]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'No copy happened. Both names share one outer list object.',
      },
      {
        title: 'Shallow Copy Creates New Outer List',
        action: 'Run `shallow = original.copy()`',
        code: 'shallow = original.copy()',
        bindings: [
          { scope: 'global', name: 'original', objectId: 'L_ORIG' },
          { scope: 'global', name: 'alias', objectId: 'L_ORIG' },
          { scope: 'global', name: 'shallow', objectId: 'L_SHALLOW' },
        ],
        objects: [
          { id: 'L_ORIG', type: 'list', value: '[[1], [2]]', mutable: true, refCount: 2, accent: 'mint' },
          { id: 'L_SHALLOW', type: 'list', value: '[[1], [2]]', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'L_IN1', type: 'list', value: '[1]', mutable: true, refCount: 2, accent: 'amber' },
          { id: 'L_IN2', type: 'list', value: '[2]', mutable: true, refCount: 2, accent: 'amber' },
        ],
        explanation: 'Outer container is new, but inner lists are still shared references.',
      },
      {
        title: 'Mutate Shared Inner List',
        action: 'Run `shallow[0].append(99)`',
        code: 'shallow[0].append(99)',
        bindings: [
          { scope: 'global', name: 'original', objectId: 'L_ORIG' },
          { scope: 'global', name: 'shallow', objectId: 'L_SHALLOW' },
        ],
        objects: [
          { id: 'L_ORIG', type: 'list', value: '[[1, 99], [2]]', mutable: true, refCount: 2, accent: 'mint' },
          { id: 'L_SHALLOW', type: 'list', value: '[[1, 99], [2]]', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'L_IN1', type: 'list', value: '[1, 99]', mutable: true, refCount: 2, accent: 'coral' },
        ],
        explanation: 'Mutation appears in both structures because inner list identity is shared.',
      },
      {
        title: 'Deep Copy Breaks Sharing',
        action: 'Run `deep = copy.deepcopy(original)` then mutate deep',
        code: 'import copy\ndeep = copy.deepcopy(original)\ndeep[0].append(500)',
        bindings: [
          { scope: 'global', name: 'original', objectId: 'L_ORIG' },
          { scope: 'global', name: 'deep', objectId: 'L_DEEP' },
        ],
        objects: [
          { id: 'L_ORIG', type: 'list', value: '[[1, 99], [2]]', mutable: true, refCount: 2, accent: 'mint' },
          { id: 'L_DEEP', type: 'list', value: '[[1, 99, 500], [2]]', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'L_DEEP_IN1', type: 'list', value: '[1, 99, 500]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Deep copy creates independent nested objects, so later mutation does not leak back to original.',
      },
    ],
  },

  {
    type: 'heading', level: 2, text: 'Sorting — Timsort' },
  {
    type: 'text',
    content: '`list.sort()` uses **Timsort** — a hybrid of mergesort and insertion sort invented by Tim Peters for Python. It\'s O(n log n) worst case, O(n) on already-sorted data, and **stable** (preserves order of equal keys).',
  },
  {
    type: 'code',
    code: 'nums = [5, 2, 8, 1, 9]\nnums.sort()                 # in-place, returns None\nprint(nums)                 # [1, 2, 5, 8, 9]\n\n# sorted() returns a NEW list (doesn\'t mutate)\nnew_list = sorted(nums, reverse=True)\n\n# Sort by a key function\nnames = ["Alice", "bob", "CAROL"]\nprint(sorted(names, key=str.lower))   # case-insensitive\n\nrows = [("Alice", 92), ("Bob", 85), ("Carol", 92)]\n# Stable: Alice comes before Carol (both 92) — preserving insertion order\nprint(sorted(rows, key=lambda r: r[1], reverse=True))',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 10: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Is a Python list a linked list or an array?',
        answer: 'An **array** (specifically, a dynamic array of pointers). This is why indexing is O(1) but inserting at the front is O(n). If you want fast front operations, use `collections.deque`.',
      },
      {
        question: 'Why is `list.append(x)` "amortized O(1)"?',
        answer: 'Most appends just write into the pre-allocated slack space — O(1). Occasionally the array fills and CPython allocates a new, larger one (by ~12.5% + 6) and copies. Averaged over many appends, the cost per op is constant.',
      },
      {
        question: 'Why does `matrix = [[0] * 3] * 3` misbehave?',
        answer: 'The outer `* 3` makes **three pointers to the same inner list** — not three independent lists. Mutating one row mutates all. Use a comprehension: `[[0] * 3 for _ in range(3)]` to create fresh inner lists.',
      },
      {
        question: 'What\'s the difference between `list1.copy()`, `list(list1)`, and `list1[:]`?',
        answer: 'All three produce a **shallow copy** — same result, same performance. Pick by style. For a **deep** copy (independent nested objects), you need `copy.deepcopy()`.',
      },
      {
        question: 'Why is `in` O(n) on a list but O(1) on a set?',
        answer: 'A list has to scan element by element — it has no structure for lookup. A set uses a hash table: `hash(x)` tells you exactly where to look. If you\'re doing many `x in collection` checks, convert to a set once.',
      },
      {
        question: 'Does `sort()` return the sorted list?',
        answer: 'No — it sorts **in place** and returns `None`. A common bug: `new = lst.sort()` gives `new = None`. Use `sorted(lst)` when you want a new list.',
      },
    ],
  },
]

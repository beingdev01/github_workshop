import type { ContentBlock } from '@/types/content'

export const day3Lists: ContentBlock[] = [
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
  // Section 10: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  {
    type: 'quiz',
    quiz: {
      id: 'quiz-lists',
      title: 'Lists Quiz',
      questions: [
        {
          type: 'predict-output',
          code: 'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)',
          options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[4]', 'Error'],
          correctIndex: 1,
          explanation: 'b = a creates an ALIAS (both point to the same list). Appending to b also modifies a. Output: [1, 2, 3, 4].',
        },
        {
          type: 'predict-output',
          code: 'x = [1, 2, 3, 4, 5]\nprint(x[1:4])',
          options: ['[1, 2, 3, 4]', '[2, 3, 4]', '[2, 3, 4, 5]', '[1, 2, 3]'],
          correctIndex: 1,
          explanation: 'Slicing x[1:4] gives elements at indices 1, 2, 3 (stop index is exclusive). Result: [2, 3, 4].',
        },
        {
          type: 'predict-output',
          code: 'nums = [3, 1, 4]\nresult = nums.sort()\nprint(result)',
          options: ['[1, 3, 4]', 'None', '[3, 1, 4]', 'Error'],
          correctIndex: 1,
          explanation: '.sort() sorts in-place and returns None! The list is sorted, but the return value is None.',
        },
        {
          type: 'predict-output',
          code: 'words = "Hello World".split()\nprint("-".join(words))',
          options: ['Hello World', 'Hello-World', '[\'Hello\', \'World\']', 'H-e-l-l-o'],
          correctIndex: 1,
          explanation: '.split() creates ["Hello", "World"]. "-".join() connects them with hyphens: "Hello-World".',
        },
      ],
    },
  },

  // ═══════════════════════════════════════
  // Section 11: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  {
    type: 'challenge',
    challenge: {
      id: 'challenge-lists',
      title: 'List Statistics',
      difficulty: 'medium',
      description: 'Write functions to compute statistics on a list of numbers: mean, median (middle value when sorted), and mode (most frequent value). Don\'t use any imports.',
      starterCode: 'def mean(nums):\n    return sum(nums) / len(nums)\n\ndef median(nums):\n    sorted_nums = sorted(nums)\n    n = len(sorted_nums)\n    mid = n // 2\n    if n % 2 == 0:\n        return (sorted_nums[mid - 1] + sorted_nums[mid]) / 2\n    return sorted_nums[mid]\n\ndef mode(nums):\n    freq = {}\n    for n in nums:\n        freq[n] = freq.get(n, 0) + 1\n    max_count = max(freq.values())\n    modes = [k for k, v in freq.items() if v == max_count]\n    return modes[0]  # Return first mode if tie\n\n# Test\ndata = [4, 8, 6, 5, 3, 8, 9, 4, 8, 2]\nprint(f"Data: {data}")\nprint(f"Mean: {mean(data):.2f}")\nprint(f"Median: {median(data):.2f}")\nprint(f"Mode: {mode(data)}")',
      testCases: [
        { input: '', expected: 'Data: [4, 8, 6, 5, 3, 8, 9, 4, 8, 2]\nMean: 5.70\nMedian: 5.50\nMode: 8' },
      ],
      hints: [
        'Mean = sum / count',
        'Median: sort the list, find the middle element(s)',
        'Mode: count occurrences with a dictionary, find the max',
      ],
      solution: 'def mean(nums): return sum(nums) / len(nums)\ndef median(nums):\n    s = sorted(nums)\n    n = len(s)\n    mid = n // 2\n    return (s[mid-1] + s[mid]) / 2 if n % 2 == 0 else s[mid]\ndef mode(nums):\n    freq = {}\n    for n in nums:\n        freq[n] = freq.get(n, 0) + 1\n    return max(freq, key=freq.get)',
    },
  },
]

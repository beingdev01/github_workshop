import type { ContentBlock } from '@/types/content'

export const day2For: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'For Loops & Iteration' },
  {
    type: 'text',
    content: 'The **for loop** is Python\'s primary tool for **iteration** — stepping through a sequence of values one at a time. Unlike `while` loops where you manually manage a counter, `for` loops automatically handle iteration. They\'re cleaner, safer (no risk of infinite loops), and more Pythonic.',
  },

  // ═══════════════════════════════════════
  // Section 2: Basic for Loop
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Basic for Loop Syntax' },
  {
    type: 'code',
    code: '# for loop iterates over any sequence\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")\n# I like apple\n# I like banana\n# I like cherry\n\n# Iterating over a string (character by character)\nfor char in "Python":\n    print(char, end=" ")\nprint()  # P y t h o n\n\n# The loop variable takes each value in the sequence\nnumbers = [10, 20, 30, 40, 50]\nfor n in numbers:\n    print(n * 2, end=" ")\nprint()  # 20 40 60 80 100',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'for Loop vs while Loop',
    content: 'Use **for** when you know what you\'re iterating over (a list, string, range, etc.).\nUse **while** when you need to loop until some condition changes.\n\nIn practice, **for** loops are used ~90% of the time in Python. They\'re preferred because they\'re shorter, less error-prone, and more readable.',
  },

  // ═══════════════════════════════════════
  // Section 3: range() Function
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The range() Function' },
  {
    type: 'text',
    content: '`range()` generates a sequence of integers. It\'s the most common way to make a for loop run a specific number of times:',
  },
  {
    type: 'code',
    code: '# range(stop) — 0 to stop-1\nfor i in range(5):\n    print(i, end=" ")\nprint()  # 0 1 2 3 4\n\n# range(start, stop) — start to stop-1\nfor i in range(3, 8):\n    print(i, end=" ")\nprint()  # 3 4 5 6 7\n\n# range(start, stop, step) — start to stop-1, stepping by step\nfor i in range(0, 20, 3):\n    print(i, end=" ")\nprint()  # 0 3 6 9 12 15 18\n\n# Counting down with a negative step\nfor i in range(10, 0, -1):\n    print(i, end=" ")\nprint()  # 10 9 8 7 6 5 4 3 2 1\n\n# IMPORTANT: range() excludes the stop value!\n# range(1, 5) gives [1, 2, 3, 4] — NOT [1, 2, 3, 4, 5]\n# To include 5: range(1, 6)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Why range() Excludes the End',
    content: 'The half-open interval `range(0, n)` has exactly `n` elements. This makes common patterns cleaner:\n- `range(len(my_list))` gives valid indices for the whole list\n- `range(n)` runs exactly `n` times\n\nIt also prevents off-by-one errors in many situations.',
  },
  { type: 'heading', level: 3, text: 'range() Details' },
  {
    type: 'code',
    code: '# range() is lazy — it doesn\'t create a list in memory\nr = range(1, 1000000)\nprint(type(r))           # <class \'range\'>\nprint(len(r))            # 999999\nprint(r[0])              # 1\nprint(r[-1])             # 999999\nprint(50 in r)           # True (efficient membership test!)\n\n# Convert to list if needed\nprint(list(range(5)))    # [0, 1, 2, 3, 4]\nprint(list(range(2, 10, 2)))  # [2, 4, 6, 8]\n\n# Empty ranges\nprint(list(range(5, 2)))       # [] — can\'t count up from 5 to 2\nprint(list(range(5, 2, -1)))   # [5, 4, 3] — but can count DOWN\nprint(list(range(0)))          # [] — range(0) is empty\n\n# Common pattern: run something N times\nn = 3\nfor _ in range(n):           # _ means "I don\'t need this variable"\n    print("Hello!")\n# Hello!\n# Hello!\n# Hello!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Iterating Strings
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Iterating Through Strings' },
  {
    type: 'code',
    code: '# Method 1: Direct iteration (Pythonic)\nword = "Python"\nfor char in word:\n    print(char, end="-")\nprint()  # P-y-t-h-o-n-\n\n# Method 2: By index (when you need the position)\nword = "Python"\nfor i in range(len(word)):\n    print(f"Index {i}: {word[i]}")\n\n# Method 3: enumerate() — best of both worlds!\nword = "Python"\nfor i, char in enumerate(word):\n    print(f"Index {i}: {char}")\n\n# Count vowels\ntext = "Hello World"\nvowel_count = 0\nfor char in text.lower():\n    if char in "aeiou":\n        vowel_count += 1\nprint(f"Vowels in \'{text}\': {vowel_count}")  # 3\n\n# Reverse a string using a loop\noriginal = "Python"\nreversed_str = ""\nfor char in original:\n    reversed_str = char + reversed_str   # Prepend each character\nprint(reversed_str)  # nohtyP',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: enumerate()
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'enumerate() — Index + Value Together' },
  {
    type: 'text',
    content: '`enumerate()` is a built-in function that provides both the **index** and the **value** during iteration. It\'s the Pythonic alternative to `for i in range(len(sequence)):`:',
  },
  {
    type: 'code',
    code: '# Without enumerate (works but not Pythonic)\ncolors = ["red", "green", "blue"]\nfor i in range(len(colors)):\n    print(f"{i}: {colors[i]}")\n\n# With enumerate (Pythonic!)\nfor i, color in enumerate(colors):\n    print(f"{i}: {color}")\n\n# enumerate() with custom start index\nfor rank, color in enumerate(colors, start=1):\n    print(f"#{rank}: {color}")\n# #1: red\n# #2: green\n# #3: blue\n\n# What enumerate actually produces\nprint(list(enumerate(["a", "b", "c"])))\n# [(0, \'a\'), (1, \'b\'), (2, \'c\')]',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'When to Use enumerate()',
    content: 'If you need only the **value**: `for item in sequence:`\nIf you need the **index AND value**: `for i, item in enumerate(sequence):`\nIf you need only the **index**: `for i in range(len(sequence)):` (rare)\n\nNever do `for i in range(len(items)):` and then access `items[i]` — use `enumerate()` instead!',
  },

  // ═══════════════════════════════════════
  // Section 6: break, continue, else in for
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'break, continue, and for-else' },
  {
    type: 'code',
    code: '# break in a for loop\nfor n in range(1, 100):\n    if n * n > 50:\n        print(f"First n where n² > 50: {n}")  # 8\n        break\n\n# continue in a for loop\nprint("Odd numbers 1-10:", end=" ")\nfor n in range(1, 11):\n    if n % 2 == 0:\n        continue      # Skip even numbers\n    print(n, end=" ")\nprint()  # 1 3 5 7 9\n\n# for-else: else runs if loop completes without break\nprimes = [2, 3, 5, 7, 11, 13]\ntarget = 8\nfor p in primes:\n    if p == target:\n        print(f"{target} is prime")\n        break\nelse:\n    print(f"{target} is NOT in primes list")  # 8 is NOT in primes list\n\n# Practical: check if a number is prime\nn = 29\nfor i in range(2, int(n**0.5) + 1):\n    if n % i == 0:\n        print(f"{n} is NOT prime (divisible by {i})")\n        break\nelse:\n    print(f"{n} IS prime!")  # 29 IS prime!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Iterating Multiple Sequences
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Iterating Over Multiple Sequences' },
  {
    type: 'code',
    code: '# zip() — iterate over multiple sequences in parallel\nnames = ["Alice", "Bob", "Charlie"]\nscores = [95, 87, 78]\n\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n# Alice: 95\n# Bob: 87\n# Charlie: 78\n\n# zip with three sequences\nsubjects = ["Math", "Science", "English"]\nfor name, subject, score in zip(names, subjects, scores):\n    print(f"{name} got {score} in {subject}")\n\n# zip stops at the shortest sequence\nfor a, b in zip([1, 2, 3], [10, 20]):\n    print(a, b)  # Only prints 2 pairs\n\n# Iterate over a dictionary\nstudent = {"name": "Alice", "age": 20, "grade": "A"}\n\n# Keys only (default)\nfor key in student:\n    print(key)\n\n# Values\nfor value in student.values():\n    print(value)\n\n# Key-value pairs\nfor key, value in student.items():\n    print(f"{key}: {value}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Common Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Common for Loop Patterns' },
  {
    type: 'code',
    code: '# Pattern 1: Accumulator\nnumbers = [4, 8, 15, 16, 23, 42]\ntotal = sum(numbers)  # Built-in! But manually:\ntotal = 0\nfor n in numbers:\n    total += n\nprint(f"Sum: {total}")  # 108\n\n# Pattern 2: Finding max/min\nvalues = [34, 67, 12, 89, 45]\nmax_val = values[0]\nfor v in values[1:]:\n    if v > max_val:\n        max_val = v\nprint(f"Max: {max_val}")  # 89  (or just use max(values))\n\n# Pattern 3: Building a new list\nnumbers = [1, 2, 3, 4, 5]\nsquares = []\nfor n in numbers:\n    squares.append(n ** 2)\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# Pattern 4: Filtering\nnumbers = [1, -2, 3, -4, 5, -6]\npositives = []\nfor n in numbers:\n    if n > 0:\n        positives.append(n)\nprint(positives)  # [1, 3, 5]\n\n# Pattern 5: Counting occurrences\ntext = "hello world"\nfreq = {}\nfor char in text:\n    if char in freq:\n        freq[char] += 1\n    else:\n        freq[char] = 1\nprint(freq)  # {\'h\': 1, \'e\': 1, \'l\': 3, ...}',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Explore for loops!\n\n# 1. Multiplication table\nn = 7\nprint(f"--- {n}x Table ---")\nfor i in range(1, 11):\n    print(f"{n} × {i:2d} = {n * i:3d}")\n\n# 2. Star pattern\nprint("\\n--- Triangle ---")\nfor i in range(1, 6):\n    print("★" * i)\n\n# 3. enumerate with ranking\nscores = [("Alice", 95), ("Bob", 87), ("Charlie", 92)]\nscores.sort(key=lambda x: x[1], reverse=True)\nprint("\\n--- Leaderboard ---")\nfor rank, (name, score) in enumerate(scores, 1):\n    medal = ["🥇", "🥈", "🥉"][rank-1] if rank <= 3 else "  "\n    print(f"{medal} #{rank} {name}: {score}")\n\n# 4. FizzBuzz with for loop\nprint("\\n--- FizzBuzz ---")\nfor n in range(1, 21):\n    if n % 15 == 0:\n        print("FizzBuzz", end=" ")\n    elif n % 3 == 0:\n        print("Fizz", end=" ")\n    elif n % 5 == 0:\n        print("Buzz", end=" ")\n    else:\n        print(n, end=" ")',
    instructions: 'Try creating different patterns, or use zip() to combine multiple lists.',
  },

  // ═══════════════════════════════════════
  // Section 10: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  

  // ═══════════════════════════════════════
  // Section 11: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Challenge Q&A' },
  
]

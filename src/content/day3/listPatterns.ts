import type { ContentBlock } from '@/types/content'

export const day3ListPatterns: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'List Patterns & Comprehensions' },
  {
    type: 'text',
    content: 'Now that you know the basics of lists, let\'s master the **patterns** that make Python list handling elegant and powerful. List comprehensions, stack/queue patterns, copying strategies, and common algorithmic patterns will transform how you think about data processing.',
  },

  // ═══════════════════════════════════════
  // Section 2: List Comprehension Deep Dive
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'List Comprehensions — Deep Dive' },
  {
    type: 'code',
    code: '# Basic: [expression for item in iterable]\nsquares = [x**2 for x in range(1, 11)]\nprint(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n# With filter: [expression for item in iterable if condition]\neven_squares = [x**2 for x in range(1, 11) if x % 2 == 0]\nprint(even_squares)  # [4, 16, 36, 64, 100]\n\n# With if-else (note: no filter, just expression)\nlabels = ["even" if x % 2 == 0 else "odd" for x in range(1, 6)]\nprint(labels)  # [\'odd\', \'even\', \'odd\', \'even\', \'odd\']\n\n# Nested iteration (like nested for loops)\npairs = [(i, j) for i in range(3) for j in range(3)]\nprint(pairs)  # [(0,0), (0,1), (0,2), (1,0), ...]\n\n# Practical: flatten a 2D list\nmatrix = [[1, 2], [3, 4], [5, 6]]\nflat = [x for row in matrix for x in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6]\n\n# String processing\nsentence = "Hello World Python"\nfirst_letters = [word[0] for word in sentence.split()]\nprint(first_letters)  # [\'H\', \'W\', \'P\']\nprint("".join(first_letters))  # HWP (acronym)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: Stack & Queue
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Stack and Queue Patterns' },
  {
    type: 'code',
    code: '# STACK — Last In, First Out (LIFO)\n# Think: stack of plates\nstack = []\nstack.append("A")    # Push\nstack.append("B")    # Push\nstack.append("C")    # Push\nprint(f"Stack: {stack}")       # [\'A\', \'B\', \'C\']\nprint(f"Pop: {stack.pop()}")   # C (last in, first out)\nprint(f"Pop: {stack.pop()}")   # B\nprint(f"Stack: {stack}")       # [\'A\']\n\n# Practical: balanced parentheses checker\ndef is_balanced(text):\n    stack = []\n    pairs = {"(": ")", "[": "]", "{": "}"}\n    for char in text:\n        if char in pairs:         # Opening bracket\n            stack.append(char)\n        elif char in pairs.values():  # Closing bracket\n            if not stack:\n                return False\n            if pairs[stack.pop()] != char:\n                return False\n    return len(stack) == 0\n\nprint(is_balanced("({[]})"))   # True\nprint(is_balanced("([)]"))     # False\nprint(is_balanced("(("))       # False\n\n# QUEUE — First In, First Out (FIFO)\n# Think: line at a store\nfrom collections import deque  # Efficient queue\nqueue = deque()\nqueue.append("Customer 1")     # Enqueue (join line)\nqueue.append("Customer 2")\nqueue.append("Customer 3")\nprint(f"Queue: {list(queue)}")\nprint(f"Served: {queue.popleft()}")  # Customer 1 (first in, first out)\nprint(f"Queue: {list(queue)}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Copying Lists
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Shallow vs Deep Copy' },
  {
    type: 'code',
    code: '# The aliasing problem\noriginal = [1, 2, 3]\nalias = original              # Same object!\nalias.append(4)\nprint(original)               # [1, 2, 3, 4] — modified!\n\n# Shallow copy: 3 ways\noriginal = [1, 2, 3]\ncopy1 = original.copy()       # Method 1: .copy()\ncopy2 = original[:]           # Method 2: slice\ncopy3 = list(original)        # Method 3: list()\n\ncopy1.append(99)\nprint(original)               # [1, 2, 3] — unchanged!\n\n# Shallow copy PROBLEM with nested lists\nnested = [[1, 2], [3, 4]]\nshallow = nested.copy()\nshallow[0][0] = 999           # Modifies the inner list!\nprint(nested)                 # [[999, 2], [3, 4]] — inner list changed!\n\n# Deep copy: copies EVERYTHING\nimport copy\nnested = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(nested)\ndeep[0][0] = 999\nprint(nested)                 # [[1, 2], [3, 4]] — safe!',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'When to Use Which Copy',
    content: '**Assignment** (`b = a`): When you WANT both variables to share the same list.\n**Shallow copy** (`.copy()`, `[:]`): For flat lists (no nested lists).\n**Deep copy** (`copy.deepcopy()`): For nested/complex structures where inner objects must also be independent.',
  },

  // ═══════════════════════════════════════
  // Section 5: Common Algorithms
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Common List Algorithms' },
  {
    type: 'code',
    code: '# 1. Two-pointer technique: remove duplicates from sorted list\ndef remove_duplicates(sorted_list):\n    if not sorted_list:\n        return []\n    result = [sorted_list[0]]\n    for item in sorted_list[1:]:\n        if item != result[-1]:\n            result.append(item)\n    return result\n\nprint(remove_duplicates([1, 1, 2, 2, 3, 4, 4, 5]))  # [1, 2, 3, 4, 5]\n\n# 2. Sliding window: maximum sum of k consecutive elements\ndef max_sum_subarray(nums, k):\n    window_sum = sum(nums[:k])\n    max_sum = window_sum\n    for i in range(k, len(nums)):\n        window_sum += nums[i] - nums[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum\n\nprint(max_sum_subarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 3))  # 24\n\n# 3. Frequency counting\ndef top_frequent(items, n):\n    freq = {}\n    for item in items:\n        freq[item] = freq.get(item, 0) + 1\n    sorted_items = sorted(freq.items(), key=lambda x: x[1], reverse=True)\n    return sorted_items[:n]\n\nwords = "the cat sat on the mat the cat".split()\nprint(top_frequent(words, 3))  # [(\'the\', 3), (\'cat\', 2), (\'sat\', 1)]\n\n# 4. List rotation\ndef rotate(lst, k):\n    k = k % len(lst)\n    return lst[-k:] + lst[:-k]\n\nprint(rotate([1, 2, 3, 4, 5], 2))  # [4, 5, 1, 2, 3]',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Sorting Techniques
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Advanced Sorting' },
  {
    type: 'code',
    code: '# Custom sort with key function\nstudents = [\n    {"name": "Alice", "grade": 85, "age": 20},\n    {"name": "Bob", "grade": 92, "age": 19},\n    {"name": "Charlie", "grade": 78, "age": 21},\n    {"name": "Diana", "grade": 92, "age": 20},\n]\n\n# Sort by grade (descending)\nby_grade = sorted(students, key=lambda s: s["grade"], reverse=True)\nfor s in by_grade:\n    print(f"  {s[\'name\']}: {s[\'grade\']}")\n\n# Sort by multiple keys: grade desc, then name asc\nby_multi = sorted(students, key=lambda s: (-s["grade"], s["name"]))\nprint("\\nMulti-sort:")\nfor s in by_multi:\n    print(f"  {s[\'name\']}: {s[\'grade\']}")\n# Bob: 92, Diana: 92, Alice: 85, Charlie: 78\n\n# Stable sort: Python\'s sort preserves order of equal elements\n# This means you can sort by multiple criteria sequentially',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# List patterns in action!\n\n# 1. Matrix operations\nA = [[1, 2], [3, 4]]\nB = [[5, 6], [7, 8]]\n\n# Matrix addition\nresult = [[A[i][j] + B[i][j] for j in range(2)] for i in range(2)]\nprint("A + B =")\nfor row in result:\n    print(f"  {row}")\n\n# 2. Caesar cipher\ndef caesar_encrypt(text, shift):\n    result = []\n    for char in text:\n        if char.isalpha():\n            base = ord(\'A\') if char.isupper() else ord(\'a\')\n            result.append(chr((ord(char) - base + shift) % 26 + base))\n        else:\n            result.append(char)\n    return "".join(result)\n\nmessage = "Hello World"\nencrypted = caesar_encrypt(message, 3)\ndecrypted = caesar_encrypt(encrypted, -3)\nprint(f"\\nOriginal:  {message}")\nprint(f"Encrypted: {encrypted}")\nprint(f"Decrypted: {decrypted}")\n\n# 3. Group consecutive elements\ndata = [1, 1, 2, 2, 2, 3, 1, 1]\ngroups = []\ncurrent = [data[0]]\nfor item in data[1:]:\n    if item == current[-1]:\n        current.append(item)\n    else:\n        groups.append(current)\n        current = [item]\ngroups.append(current)\nprint(f"\\nGroups: {groups}")',
    instructions: 'Try implementing your own list algorithms — sorting, searching, or transformation patterns.',
  },

  // ═══════════════════════════════════════
  // Section 8: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  

  // ═══════════════════════════════════════
  // Section 9: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Challenge Q&A' },
  
]

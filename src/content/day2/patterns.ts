import type { ContentBlock } from '@/types/content'

export const day2Patterns: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Loop Patterns & Nested Loops' },
  {
    type: 'text',
    content: 'Now that you know `while` and `for` loops, let\'s combine them with **nesting** and explore classic loop patterns. Nested loops are loops inside loops — the inner loop runs completely for **each iteration** of the outer loop. These patterns appear everywhere: printing shapes, processing grids, generating combinations, and more.',
  },

  // ═══════════════════════════════════════
  // Section 2: Nested Loop Basics
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Nested Loop Fundamentals' },
  {
    type: 'code',
    code: '# Basic nested loop: multiplication table (partial)\nfor i in range(1, 4):            # Outer: rows\n    for j in range(1, 4):        # Inner: columns\n        print(f"{i}×{j}={i*j}", end="\\t")\n    print()                      # Newline after each row\n# 1×1=1   1×2=2   1×3=3\n# 2×1=2   2×2=4   2×3=6\n# 3×1=3   3×2=6   3×3=9\n\n# How nested loops work:\n# Outer loop iteration 1 (i=1):\n#   Inner loop: j=1, j=2, j=3 (3 iterations)\n# Outer loop iteration 2 (i=2):\n#   Inner loop: j=1, j=2, j=3 (3 iterations)\n# Outer loop iteration 3 (i=3):\n#   Inner loop: j=1, j=2, j=3 (3 iterations)\n# Total: 3 × 3 = 9 iterations',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Nested Loop Complexity',
    content: 'If the outer loop runs `n` times and the inner loop runs `m` times, the body of the inner loop executes `n × m` times total. For a doubly nested loop with `range(n)` each, that\'s `n²` operations. This is why nested loops can be slow for large inputs!',
  },

  // ═══════════════════════════════════════
  // Section 3: Star Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Star Patterns — Classic Exercises' },
  {
    type: 'text',
    content: 'Star (or asterisk) patterns are classic programming exercises that build nested loop intuition:',
  },
  {
    type: 'code',
    code: '# Pattern 1: Right Triangle\nn = 5\nfor i in range(1, n + 1):\n    print("*" * i)\n# *\n# **\n# ***\n# ****\n# *****\n\n# Pattern 2: Inverted Right Triangle\nfor i in range(n, 0, -1):\n    print("*" * i)\n# *****\n# ****\n# ***\n# **\n# *\n\n# Pattern 3: Centered Pyramid\nfor i in range(1, n + 1):\n    spaces = " " * (n - i)\n    stars = "*" * (2 * i - 1)\n    print(spaces + stars)\n#     *\n#    ***\n#   *****\n#  *******\n# *********\n\n# Pattern 4: Diamond\nfor i in range(1, n + 1):\n    print(" " * (n - i) + "*" * (2 * i - 1))\nfor i in range(n - 1, 0, -1):\n    print(" " * (n - i) + "*" * (2 * i - 1))',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Number Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Number Patterns' },
  {
    type: 'code',
    code: '# Pattern 1: Number Triangle\nn = 5\nfor i in range(1, n + 1):\n    for j in range(1, i + 1):\n        print(j, end=" ")\n    print()\n# 1\n# 1 2\n# 1 2 3\n# 1 2 3 4\n# 1 2 3 4 5\n\n# Pattern 2: Floyd\'s Triangle\nnum = 1\nfor i in range(1, 6):\n    for j in range(1, i + 1):\n        print(f"{num:3d}", end="")\n        num += 1\n    print()\n#   1\n#   2  3\n#   4  5  6\n#   7  8  9 10\n#  11 12 13 14 15\n\n# Pattern 3: Pascal\'s Triangle (first 6 rows)\nfor i in range(6):\n    # Leading spaces for centering\n    print(" " * (5 - i) * 2, end="")\n    val = 1\n    for j in range(i + 1):\n        print(f"{val:4d}", end="")\n        val = val * (i - j) // (j + 1)\n    print()',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Multiplication Table
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Full Multiplication Table' },
  {
    type: 'code',
    code: '# Beautifully formatted multiplication table\nn = 10\n\n# Header row\nprint("   |", end="")\nfor j in range(1, n + 1):\n    print(f"{j:4d}", end="")\nprint()\nprint("---+" + "----" * n)\n\n# Table body\nfor i in range(1, n + 1):\n    print(f"{i:2d} |", end="")\n    for j in range(1, n + 1):\n        print(f"{i*j:4d}", end="")\n    print()\n\n# Output:\n#    |   1   2   3   4   5   6   7   8   9  10\n# ---+----------------------------------------\n#  1 |   1   2   3   4   5   6   7   8   9  10\n#  2 |   2   4   6   8  10  12  14  16  18  20\n# ... etc.',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Combinations & Permutations
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Generating Combinations' },
  {
    type: 'code',
    code: '# All pairs from two lists\ncolors = ["red", "blue"]\nsizes = ["S", "M", "L"]\n\nprint("--- All combinations ---")\nfor color in colors:\n    for size in sizes:\n        print(f"{color}-{size}", end="  ")\n    print()\n# red-S  red-M  red-L\n# blue-S  blue-M  blue-L\n\n# Unique pairs from a single list (no repeats)\nteams = ["A", "B", "C", "D"]\nprint("\\n--- Matchups ---")\nmatch_num = 1\nfor i in range(len(teams)):\n    for j in range(i + 1, len(teams)):   # j > i to avoid duplicates\n        print(f"Match {match_num}: {teams[i]} vs {teams[j]}")\n        match_num += 1\n# Match 1: A vs B\n# Match 2: A vs C\n# Match 3: A vs D\n# Match 4: B vs C\n# Match 5: B vs D\n# Match 6: C vs D\n\n# Coordinate grid\nprint("\\n--- Grid Points ---")\nfor x in range(3):\n    for y in range(3):\n        print(f"({x},{y})", end=" ")\n    print()',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Accumulator with Nested Loops
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Nested Loop Accumulators' },
  {
    type: 'code',
    code: '# Building a 2D list (matrix)\nrows = 3\ncols = 4\nmatrix = []\nfor i in range(rows):\n    row = []\n    for j in range(cols):\n        row.append(i * cols + j + 1)\n    matrix.append(row)\n\n# Print the matrix\nfor row in matrix:\n    for val in row:\n        print(f"{val:3d}", end="")\n    print()\n#   1  2  3  4\n#   5  6  7  8\n#   9 10 11 12\n\n# Sum all elements of a 2D list\ntotal = 0\nfor row in matrix:\n    for val in row:\n        total += val\nprint(f"\\nTotal: {total}")  # 78\n\n# Find the maximum in a 2D list\nmax_val = matrix[0][0]\nfor row in matrix:\n    for val in row:\n        if val > max_val:\n            max_val = val\nprint(f"Maximum: {max_val}")  # 12',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: break/continue in Nested Loops
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'break & continue in Nested Loops' },
  {
    type: 'text',
    content: '**Important:** `break` and `continue` only affect the **innermost** loop they\'re inside:',
  },
  {
    type: 'code',
    code: '# break only exits the INNER loop\nfor i in range(3):\n    for j in range(5):\n        if j == 3:\n            break      # Only breaks the inner loop!\n        print(f"({i},{j})", end=" ")\n    print()  # Outer loop continues normally\n# (0,0) (0,1) (0,2)\n# (1,0) (1,1) (1,2)\n# (2,0) (2,1) (2,2)\n\n# To break both loops, use a flag\nfound = False\nfor i in range(10):\n    for j in range(10):\n        if i * j == 42:\n            print(f"Found: {i} × {j} = 42")\n            found = True\n            break\n    if found:\n        break           # Break the outer loop too\n\n# Or use a function (cleaner)\ndef find_product(target):\n    for i in range(1, target + 1):\n        for j in range(i, target + 1):\n            if i * j == target:\n                return (i, j)  # return exits both loops\n    return None\n\nresult = find_product(42)\nprint(f"Factors: {result}")  # (6, 7)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: while vs for Comparison
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'while vs for — When to Use Which' },
  {
    type: 'list',
    items: [
      '**Use for** when: iterating over a known sequence, counting a fixed number of times, processing each element of a collection',
      '**Use while** when: you don\'t know how many iterations ahead of time, waiting for user input, implementing game loops, running until a condition changes',
      '**Prefer for** in most cases — it\'s shorter, avoids off-by-one errors, and can\'t accidentally create infinite loops',
    ],
  },
  {
    type: 'code',
    code: '# Same task, two approaches:\n\n# for loop: clean and concise\nresult = 1\nfor i in range(1, 6):\n    result *= i\nprint(f"5! = {result}")  # 120\n\n# while loop: more verbose, riskier\nresult = 1\ni = 1\nwhile i <= 5:\n    result *= i\n    i += 1            # Forget this → infinite loop!\nprint(f"5! = {result}")  # 120\n\n# while is better here: unknown iterations\nimport random\nflips = 0\nwhile True:\n    flips += 1\n    if random.choice(["H", "T"]) == "H":\n        break\nprint(f"First heads after {flips} flips")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Nested Loop Runtime Model
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — Nested Loops as Coordinate Machines' },
  {
    type: 'text',
    content: 'Nested loops are easiest to reason about as coordinate traversal: outer loop selects a row/state, inner loop sweeps columns/substates. The inner loop fully resets and runs again for every outer iteration.',
  },
  {
    type: 'code',
    code: 'total = 0\nfor i in range(2):\n    for j in range(3):\n        total += i + j\n\nprint(total)   # 9',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Outer State + Inner Sweep',
    description: 'At a mid-iteration snapshot, i and j jointly identify one cell in the traversal grid.',
    bindings: [
      { scope: 'global', name: 'i', objectId: 'I1' },
      { scope: 'global', name: 'j', objectId: 'I2' },
      { scope: 'global', name: 'total', objectId: 'I5' },
      { scope: 'runtime', name: 'outer_iter', objectId: 'IT_OUT' },
      { scope: 'runtime', name: 'inner_iter', objectId: 'IT_IN' },
    ],
    objects: [
      {
        id: 'IT_OUT',
        type: 'range_iterator',
        value: '<range(0, 2) index=1>',
        mutable: true,
        note: 'Outer iterator controls major loop progress.',
        accent: 'sky',
      },
      {
        id: 'IT_IN',
        type: 'range_iterator',
        value: '<range(0, 3) index=2>',
        mutable: true,
        note: 'Fresh inner iterator for current outer value.',
        accent: 'amber',
      },
      {
        id: 'I1',
        type: 'int',
        value: '1',
        mutable: false,
        accent: 'mint',
      },
      {
        id: 'I2',
        type: 'int',
        value: '2',
        mutable: false,
        accent: 'mint',
      },
      {
        id: 'I5',
        type: 'int',
        value: '5',
        mutable: false,
        note: 'Accumulator after partial traversal.',
        accent: 'neutral',
      },
    ],
    insights: [
      'Total operations multiply: outer_count * inner_count.',
      'Inner iterators are recreated per outer iteration.',
      'Understanding i/j state pairs helps avoid off-by-one bugs in pattern code.',
    ],
  },
  {
    type: 'heading', level: 2, text: 'break Scope in Nested Loops' },
  {
    type: 'text',
    content: '`break` only exits the innermost loop. Exiting both loops requires a flag, a function return, or an exception-based escape pattern.',
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: 2x3 Nested Traversal Timeline',
    prompt: 'Watch i/j rebinding and see how the inner loop resets for each outer cycle.',
    steps: [
      {
        title: 'Initialize Traversal',
        action: 'Start outer and inner ranges',
        code: 'pairs = []\nfor i in range(2):\n    for j in range(3):\n        pairs.append((i, j))',
        bindings: [
          { scope: 'global', name: 'pairs', objectId: 'L_PAIRS' },
          { scope: 'runtime', name: 'outer_iter', objectId: 'IT_OUT_0' },
        ],
        objects: [
          { id: 'L_PAIRS', type: 'list', value: '[]', mutable: true, refCount: 1, accent: 'neutral' },
          { id: 'IT_OUT_0', type: 'range_iterator', value: '<range(0,2) index=0>', mutable: true, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Only outer iterator exists at start. Inner iterator is created after i gets first value.',
      },
      {
        title: 'Outer i = 0, Inner j = 0',
        action: 'First coordinate emitted',
        code: 'i = 0\nj = 0\npairs.append((i, j))',
        bindings: [
          { scope: 'global', name: 'i', objectId: 'I0' },
          { scope: 'global', name: 'j', objectId: 'I0B' },
          { scope: 'global', name: 'pairs', objectId: 'L_PAIRS' },
          { scope: 'runtime', name: 'inner_iter', objectId: 'IT_IN_0' },
        ],
        objects: [
          { id: 'I0', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I0B', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'IT_IN_0', type: 'range_iterator', value: '<range(0,3) index=1>', mutable: true, refCount: 1, accent: 'mint' },
          { id: 'L_PAIRS', type: 'list', value: '[(0, 0)]', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'Inner loop now active for the current outer row i = 0.',
      },
      {
        title: 'Finish Inner for i = 0',
        action: 'j runs through 1 and 2',
        code: 'pairs += [(0, 1), (0, 2)]',
        bindings: [
          { scope: 'global', name: 'i', objectId: 'I0' },
          { scope: 'runtime', name: 'inner_iter', objectId: 'IT_IN_EX' },
          { scope: 'global', name: 'pairs', objectId: 'L_PAIRS' },
        ],
        objects: [
          { id: 'IT_IN_EX', type: 'range_iterator', value: '<exhausted>', mutable: true, refCount: 1, accent: 'coral' },
          { id: 'L_PAIRS', type: 'list', value: '[(0, 0), (0, 1), (0, 2)]', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'Inner iterator exhausts. Control returns to outer iterator for next i.',
      },
      {
        title: 'Reset Inner for i = 1',
        action: 'Outer advances and creates a new inner iterator',
        code: 'i = 1\n# new inner loop: j = 0..2',
        bindings: [
          { scope: 'global', name: 'i', objectId: 'I1' },
          { scope: 'runtime', name: 'outer_iter', objectId: 'IT_OUT_1' },
          { scope: 'runtime', name: 'inner_iter', objectId: 'IT_IN_1' },
          { scope: 'global', name: 'pairs', objectId: 'L_PAIRS' },
        ],
        objects: [
          { id: 'I1', type: 'int', value: '1', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'IT_OUT_1', type: 'range_iterator', value: '<range(0,2) index=2>', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'IT_IN_1', type: 'range_iterator', value: '<range(0,3) index=0>', mutable: true, refCount: 1, accent: 'mint' },
          { id: 'L_PAIRS', type: 'list', value: '[(0, 0), (0, 1), (0, 2)]', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'This reset behavior is the key mental model of nested loops.',
      },
      {
        title: 'Traversal Complete',
        action: 'All coordinates emitted',
        code: 'pairs == [(0,0),(0,1),(0,2),(1,0),(1,1),(1,2)]',
        bindings: [
          { scope: 'global', name: 'pairs', objectId: 'L_DONE' },
          { scope: 'runtime', name: 'outer_iter', objectId: 'IT_OUT_EX' },
        ],
        objects: [
          { id: 'L_DONE', type: 'list', value: '[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2)]', mutable: true, refCount: 1, accent: 'mint' },
          { id: 'IT_OUT_EX', type: 'range_iterator', value: '<exhausted>', mutable: true, refCount: 1, accent: 'coral' },
        ],
        explanation: 'Total entries = 2 * 3 = 6. Complexity follows the multiplication rule.',
      },
    ],
  },

  // Assignment Bridge: Matrix Checks (Week 4/5)
  { type: 'heading', level: 2, text: 'Assignment Bridge: Matrix Equality & Symmetry' },
  {
    type: 'text',
    content: 'Week-style graded questions often use matrix loops. Two matrices are equal only if dimensions match and every corresponding entry matches. A square matrix is symmetric when `M[i][j] == M[j][i]` for all valid indices.',
  },
  {
    type: 'code',
    code: 'def are_equal(A, B):\n    if len(A) != len(B):\n        return False\n    for i in range(len(A)):\n        if len(A[i]) != len(B[i]):\n            return False\n        for j in range(len(A[i])):\n            if A[i][j] != B[i][j]:\n                return False\n    return True\n\ndef is_symmetric(M):\n    n = len(M)\n    for row in M:\n        if len(row) != n:   # must be square\n            return False\n\n    # Compare only above diagonal (j > i)\n    for i in range(n):\n        for j in range(i + 1, n):\n            if M[i][j] != M[j][i]:\n                return False\n    return True\n\nA = [[1, 2], [3, 4]]\nB = [[1, 2], [3, 4]]\nC = [[1, 2], [2, 1]]\n\nprint(are_equal(A, B))   # True\nprint(are_equal(A, C))   # False\nprint(is_symmetric(C))   # True\nprint(is_symmetric(A))   # False',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Why j Starts at i + 1',
    content: 'Diagonal values always equal themselves, and lower-triangle checks duplicate upper-triangle checks. Restricting to `j = i + 1 .. n-1` avoids redundant work and is a common optimization expected in matrix questions.',
  },

  // ═══════════════════════════════════════
  // Section 10: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Create patterns with nested loops!\n\n# 1. Right-aligned triangle\nn = 5\nfor i in range(1, n + 1):\n    print(" " * (n - i) + "*" * i)\n\nprint()\n\n# 2. Hollow square\nn = 5\nfor i in range(n):\n    for j in range(n):\n        if i == 0 or i == n-1 or j == 0 or j == n-1:\n            print("*", end=" ")\n        else:\n            print(" ", end=" ")\n    print()\n\nprint()\n\n# 3. Number spiral (try modifying!)\nfor i in range(1, 6):\n    for j in range(1, 6):\n        print(f"{max(abs(3-i), abs(3-j)) + 1}", end=" ")\n    print()\n\nprint()\n\n# 4. Alphabet pattern\nfor i in range(5):\n    for j in range(i + 1):\n        print(chr(65 + j), end=" ")\n    print()',
    instructions: 'Try creating your own patterns! Can you make a checkerboard? A Christmas tree? An hourglass shape?',
  },

  // ═══════════════════════════════════════
  // Section 11: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  

  // ═══════════════════════════════════════
  // Section 12: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Challenge Q&A' },
  
]

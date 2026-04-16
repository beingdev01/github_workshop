import type { ContentBlock } from '@/types/content'

export const day2Problems: ContentBlock[] = [

  // ═══════════════════════════════════════
  // Intro
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Classic Problems — Putting It All Together' },
  {
    type: 'text',
    content: 'Everything you\'ve learned on Day 2 — **boolean logic**, **conditionals**, **while and for loops**, **lists**, and **tuples** — is enough to solve genuinely interesting computer-science problems. This section walks through five classics, explains *why* each works, and shows you how to think algorithmically before writing a single line of code.',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'How to Read This Section',
    content: 'For each problem: read the **problem statement**, study the **idea before code** explanation, then read the code line-by-line. Run the playground at the bottom and tweak parameters. The goal is to understand *thinking*, not just copy-paste.',
  },

  // ═══════════════════════════════════════
  // 1. Number Guessing Game
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: '1 — Number Guessing Game' },
  {
    type: 'text',
    content: '**Problem:** The computer picks a secret number from 1–100. The player guesses. After each guess the program says *Too High*, *Too Low*, or *Correct!* — and counts guesses. This is the classic `while`-loop + `if/elif/else` exercise.',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Idea Before Code',
    content: '`random.randint(a, b)` picks a random integer. A `while True` loop keeps asking until the player gets it right. **Break** exits the loop the moment the player wins. Each branch prints feedback. A guess counter increments on every attempt.',
  },
  {
    type: 'code',
    code: 'import random\n\nsecret = random.randint(1, 100)\nguesses = 0\n\nprint("I\'m thinking of a number between 1 and 100.")\n\nwhile True:\n    guess = int(input("Your guess: "))\n    guesses += 1\n\n    if guess < secret:\n        print("Too low!  Try higher.")\n    elif guess > secret:\n        print("Too high! Try lower.")\n    else:\n        print(f"Correct!  You got it in {guesses} guess(es).")\n        break\n\n# Optimal strategy: always guess the MIDDLE of the remaining range.\n# With 100 numbers, you can always solve it in ≤ 7 guesses (binary search).',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Why ≤ 7 Guesses Is Always Enough',
    content: 'If you always guess the midpoint, you halve the search space each time. `log₂(100) ≈ 6.64`, so 7 guesses cover 128 > 100 possibilities. This is **binary search** — one of the most important algorithms in CS. You just discovered it.',
  },

  // ═══════════════════════════════════════
  // 2. Bubble Sort
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: '2 — Bubble Sort' },
  {
    type: 'text',
    content: '**Problem:** Sort a list of numbers in ascending order using only what you know — loops and list indexing. No `sorted()`, no `list.sort()`. Write the algorithm yourself.',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Idea Before Code',
    content: 'Walk through the list comparing **adjacent pairs**. If the left is bigger than the right, **swap** them. After one full pass, the largest element has "bubbled up" to the end. Repeat for n-1 passes. Each pass guarantees one more element is in its final position, so the inner loop needs to go one step shorter each time.',
  },
  {
    type: 'code',
    code: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):          # n-1 passes\n        for j in range(n - 1 - i):   # shrink inner range each pass\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]   # swap!\n    return arr\n\nnums = [64, 34, 25, 12, 22, 11, 90]\nprint("Before:", nums)\nbubble_sort(nums)\nprint("After: ", nums)\n\n# Trace: first pass on [64, 34, 25, 12]\n# Compare 64,34 → swap → [34, 64, 25, 12]\n# Compare 64,25 → swap → [34, 25, 64, 12]\n# Compare 64,12 → swap → [34, 25, 12, 64]  ← 64 is in its final slot!\n# Second pass on [34, 25, 12] ... and so on.',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Performance Note — O(n²)',
    content: 'Bubble sort does roughly n² comparisons. For 1 000 items that\'s 1 000 000 operations. Python\'s built-in `sorted()` uses **Timsort** (O(n log n)) and is far faster in practice. Bubble sort is taught because it\'s easy to reason about — not because you\'d use it in production.',
  },

  // ═══════════════════════════════════════
  // 3. Sieve of Eratosthenes
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: '3 — Sieve of Eratosthenes' },
  {
    type: 'text',
    content: '**Problem:** Find all prime numbers up to N. A number is prime if it is divisible only by 1 and itself. The ancient Greek mathematician Eratosthenes invented an elegant list-marking algorithm that still powers modern crypto.',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Idea Before Code',
    content: 'Start with a list of booleans — `is_prime[i] = True` for all i from 2 to N. Take the smallest unmarked number (initially 2). **Mark all its multiples as not prime** (2×2, 2×3, 2×4, …). Move to the next unmarked number (3). Mark all its multiples. Repeat until you\'ve processed every number up to √N. What remains unmarked is prime.',
  },
  {
    type: 'code',
    code: 'def sieve(n):\n    """Return a list of all primes up to n (inclusive)."""\n    is_prime = [True] * (n + 1)   # assume everything is prime\n    is_prime[0] = is_prime[1] = False  # 0 and 1 are NOT prime\n\n    p = 2\n    while p * p <= n:             # only need to check up to √n\n        if is_prime[p]:\n            # mark all multiples of p starting from p²\n            for multiple in range(p * p, n + 1, p):\n                is_prime[multiple] = False\n        p += 1\n\n    return [i for i in range(n + 1) if is_prime[i]]\n\nprimes = sieve(50)\nprint(primes)\n# [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]\nprint(f"There are {len(primes)} primes ≤ 50")\n\n# Why start marking from p² and not from 2p?\n# All smaller multiples (2p, 3p, …) were already marked\n# when we processed those smaller primes.',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Why Only Check Up to √n?',
    content: 'If N has a factor larger than √N, it must also have a factor *smaller* than √N (they come in pairs: a × b = N). So by the time you reach √N, every composite number is already marked. Checking further would be redundant.',
  },

  // ═══════════════════════════════════════
  // 4. Pascal's Triangle
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: "4 — Pascal's Triangle" },
  {
    type: 'text',
    content: "**Problem:** Print the first N rows of Pascal's Triangle. Each row starts and ends with 1. Every interior number equals the **sum of the two numbers directly above it**. Row 4 is `[1, 3, 3, 1]` — these are the binomial coefficients used in (a + b)⁴.",
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Idea Before Code',
    content: 'Store each row as a list. Row 0 = `[1]`. To build row `i`, start with `[1]`, then for each interior position `j` add `prev[j-1] + prev[j]`, then append a final `1`. A nested loop (outer = row, inner = position) with list slicing does the job cleanly.',
  },
  {
    type: 'code',
    code: "def pascals_triangle(n):\n    triangle = []\n    for i in range(n):\n        # Start and end with 1\n        row = [1] * (i + 1)\n        # Fill interior elements from the previous row\n        if i >= 2:\n            prev = triangle[i - 1]\n            for j in range(1, i):           # skip first and last\n                row[j] = prev[j - 1] + prev[j]\n        triangle.append(row)\n    return triangle\n\ntriangle = pascals_triangle(7)\nfor row in triangle:\n    print(row)\n\n# [1]\n# [1, 1]\n# [1, 2, 1]\n# [1, 3, 3, 1]\n# [1, 4, 6, 4, 1]\n# [1, 5, 10, 10, 5, 1]\n# [1, 6, 15, 20, 15, 6, 1]\n\n# Bonus: row i gives the coefficients of (a+b)^i\n# and each number is C(i, j) = i! / (j! * (i-j)!)\n\n# Pretty-print (centered)\nwidth = len(str(triangle[-1]))\nfor row in triangle:\n    print(' '.join(str(x) for x in row).center(width))",
    language: 'python',
  },

  // ═══════════════════════════════════════
  // 5. Tower of Hanoi
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: '5 — Tower of Hanoi' },
  {
    type: 'text',
    content: 'The Tower of Hanoi is a famous puzzle that exposes a deep truth about problem-solving with limited knowledge. You have three pegs and N disks of different sizes stacked on the first peg (largest at the bottom). **Goal:** move the whole stack to the third peg, moving only one disk at a time, never placing a larger disk on top of a smaller one.',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Rules',
    content: '1. Only one disk may be moved at a time.\n2. Each move takes the top disk of one peg and places it on top of another.\n3. No disk may be placed on top of a smaller disk.',
  },
  { type: 'heading', level: 3, text: 'Understanding the Pattern First' },
  {
    type: 'text',
    content: 'Work out the minimum moves for small N by hand:\n\n- N=1: **1 move**. Just pick it up and place it.\n- N=2: **3 moves**. Move small disk to aux, move large disk to target, move small disk to target.\n- N=3: **7 moves**.\n- N=4: **15 moves**.\n\nPattern: `2^n − 1` moves. Every extra disk **doubles** the work and adds 1.',
  },
  { type: 'heading', level: 3, text: 'Solving It With Lists (Stack Simulation)' },
  {
    type: 'text',
    content: 'Since Day 2 has not yet covered recursion, we simulate the algorithm using **three lists as stacks**. The key insight: for N disks, the total move sequence follows a deterministic rule based on the parity of N. We cycle through the three pegs in a fixed direction, each iteration either moving the smallest disk or making the **only legal move that doesn\'t involve the smallest disk**.',
  },
  {
    type: 'code',
    code: 'def hanoi_iterative(n, source="A", aux="B", target="C"):\n    """\n    Solve Tower of Hanoi with n disks using lists as stacks.\n    Uses the iterative bit-manipulation trick:\n      - Move i corresponds to the bit position of the lowest set bit of i.\n    """\n    pegs = {\n        source: list(range(n, 0, -1)),  # [n, n-1, ..., 1] — big at bottom\n        aux:    [],\n        target: [],\n    }\n    peg_names = [source, aux, target]\n\n    # Direction to cycle the pegs: odd disks cycle A→C→B, even A→B→C\n    # For n odd: target is index 2 (pegs cycle A→C→B→A)\n    # For n even: target is index 1 (pegs cycle A→B→C→A)\n    total_moves = (1 << n) - 1   # 2^n - 1\n    moves_made = []\n\n    for step in range(1, total_moves + 1):\n        # The bit-position of the lowest set bit tells which disk to move\n        disk = (step & -step).bit_length()   # 1-indexed disk number\n\n        # Determine direction for this disk\n        if n % 2 == 0:\n            cycle = [source, aux, target]      # even n: A→B→C→A\n        else:\n            cycle = [source, target, aux]      # odd n:  A→C→B→A\n\n        # Find which peg the disk currently sits on (top of its peg)\n        # The disk is at the top of exactly one peg\n        src_peg = None\n        for peg in peg_names:\n            if pegs[peg] and pegs[peg][-1] == disk:\n                src_peg = peg\n                break\n\n        if src_peg is None:\n            continue\n\n        # Direction index for THIS disk\n        dir_idx = cycle.index(src_peg)\n        dst_peg = cycle[(dir_idx + 1) % 3]\n\n        # Execute the move\n        pegs[dst_peg].append(pegs[src_peg].pop())\n        moves_made.append(f"Move disk {disk}: {src_peg} → {dst_peg}")\n\n    return moves_made, pegs\n\nmoves, final = hanoi_iterative(3)\nprint(f"Total moves: {len(moves)}")\nfor m in moves:\n    print(" ", m)\nprint("\\nFinal state:", final)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'The Bit-Position Trick Explained',
    content: 'Write the step number in binary: 1, 10, 11, 100, 101, 110, 111... The **position of the lowest set bit** (rightmost 1) tells you which disk moves at that step. Step 1 (binary `001`) → disk 1. Step 2 (binary `010`) → disk 2. Step 4 (binary `100`) → disk 3. Disk 1 (smallest) moves every other step — at steps 1, 3, 5, 7...',
  },
  { type: 'heading', level: 3, text: 'Clean Recursive Preview (Day 3)' },
  {
    type: 'text',
    content: 'On Day 3 you will learn recursion — functions that call themselves. That unlocks a 4-line solution that reads almost like the English problem statement. Comparing the two versions is a great way to see *why* recursion was invented:',
  },
  {
    type: 'code',
    code: '# Day 3 version — 4 lines, uses recursion\ndef hanoi(n, src, aux, tgt):\n    if n == 1:\n        print(f"  Move disk 1: {src} → {tgt}")\n        return\n    hanoi(n - 1, src, tgt, aux)   # move n-1 disks out of the way\n    print(f"  Move disk {n}: {src} → {tgt}")  # move the big disk\n    hanoi(n - 1, aux, src, tgt)   # stack the n-1 disks on top\n\n# hanoi(3, "A", "B", "C")  # uncomment on Day 3!\n\n# The recursive solution maps perfectly to the problem description:\n# "To move n disks from A to C:\n#   1. Move n-1 disks from A to B (using C as spare).\n#   2. Move the bottom disk from A to C.\n#   3. Move n-1 disks from B to C (using A as spare)."\nprint("Will unlock on Day 3 after learning recursion!")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Exponential Growth is No Joke',
    content: 'The legendary Brahma Tower has 64 gold disks. Minimum moves: 2⁶⁴ − 1 = **18,446,744,073,709,551,615**. At one move per second, that\'s over 580 billion years. The universe is only 13.8 billion years old. This is why exponential time algorithms don\'t scale.',
  },

  // ═══════════════════════════════════════
  // Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Sandbox' },
  {
    type: 'playground',
    defaultCode: `# ─── Pick a problem to experiment with ───────────────────────────────────────

# 1) BUBBLE SORT — try it on your own list
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

data = [38, 27, 43, 3, 9, 82, 10]
print("Bubble sort:", bubble_sort(data[:]))

# 2) SIEVE — find all primes ≤ N
def sieve(n):
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    p = 2
    while p * p <= n:
        if is_prime[p]:
            for m in range(p * p, n + 1, p):
                is_prime[m] = False
        p += 1
    return [i for i in range(n + 1) if is_prime[i]]

print("Primes ≤ 30:", sieve(30))

# 3) PASCAL'S TRIANGLE — first 6 rows
def pascals(n):
    tri = []
    for i in range(n):
        row = [1] * (i + 1)
        if i >= 2:
            prev = tri[i - 1]
            for j in range(1, i):
                row[j] = prev[j - 1] + prev[j]
        tri.append(row)
    return tri

for row in pascals(6):
    print(row)

# 4) HANOI — 3-disk move list
def hanoi_moves(n, src="A", aux="B", tgt="C"):
    if n == 0:
        return []
    return (
        hanoi_moves(n - 1, src, tgt, aux) +
        [(src, tgt, n)] +
        hanoi_moves(n - 1, aux, src, tgt)
    )

print("\\nTower of Hanoi (3 disks):")
for frm, to, disk in hanoi_moves(3):
    print(f"  Move disk {disk}: {frm} → {to}")`,
    instructions: 'Edit any function above, change N, or mix ideas — e.g. use the sieve to test if each number in a Pascal row is prime!',
  },

  // ═══════════════════════════════════════
  // Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Why does Bubble Sort\'s inner loop shrink by i each pass?',
        answer: 'After pass i, the largest i elements have "bubbled" to the end and are already in their final positions — no need to compare them again. Shrinking the inner loop avoids redundant comparisons.',
      },
      {
        question: 'In the Sieve, why start marking from p² instead of 2p?',
        answer: 'All multiples smaller than p² — like 2p, 3p, …, (p-1)p — were already marked as composite when we processed the smaller primes 2, 3, …, p-1. Starting at p² avoids redundant work.',
      },
      {
        question: 'What does `(step & -step).bit_length()` actually compute?',
        answer: '`-step` in two\'s complement flips all bits and adds 1, so `step & -step` isolates the lowest set bit. `.bit_length()` then returns the position of that bit (1-indexed), which corresponds to the disk number.',
      },
      {
        question: 'Can Tower of Hanoi be solved in fewer than 2^n − 1 moves?',
        answer: 'No. The bottom disk must be moved exactly once. To move it, all n-1 disks above it must first be on the auxiliary peg — which takes at minimum T(n-1) moves. Then move the bottom disk (1 move). Then stack the n-1 disks on top (T(n-1) more). This recurrence T(n) = 2T(n-1)+1 solves to T(n) = 2^n − 1, and no shortcut exists.',
      },
      {
        question: 'What\'s special about the numbers on row n of Pascal\'s Triangle?',
        answer: 'Row n contains the binomial coefficients C(n,0), C(n,1), …, C(n,n). They tell you how many ways to choose k items from n. They also appear as coefficients in (a+b)^n, in probability distributions (binomial), and in combinatorics problems throughout mathematics.',
      },
      {
        question: 'Why does binary search always win the guessing game in ≤ 7 guesses?',
        answer: 'Each guess halves the remaining search space. Starting with 100 possibilities: 100 → 50 → 25 → 13 → 7 → 4 → 2 → 1. That\'s at most 7 halvings. Mathematically: ⌈log₂(100)⌉ = 7.',
      },
    ],
  },
]

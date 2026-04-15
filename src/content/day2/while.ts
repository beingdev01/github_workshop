import type { ContentBlock } from '@/types/content'

export const day2While: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'While Loops' },
  {
    type: 'text',
    content: 'A **while loop** repeats a block of code **as long as a condition remains True**. Think of it as an `if` statement that keeps going back and re-checking the condition. While loops are ideal when you **don\'t know in advance** how many times you need to repeat something.',
  },

  // ═══════════════════════════════════════
  // Section 2: Basic while Loop
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Basic while Loop' },
  {
    type: 'code',
    code: '# Count from 1 to 5\ncount = 1\nwhile count <= 5:\n    print(count)\n    count += 1      # Don\'t forget this! Without it → infinite loop\n\n# How it works:\n# Iteration 1: count=1, 1<=5 True → print 1, count becomes 2\n# Iteration 2: count=2, 2<=5 True → print 2, count becomes 3\n# Iteration 3: count=3, 3<=5 True → print 3, count becomes 4\n# Iteration 4: count=4, 4<=5 True → print 4, count becomes 5\n# Iteration 5: count=5, 5<=5 True → print 5, count becomes 6\n# Check: count=6, 6<=5 False → loop ends\n\nprint(f"Loop ended. count = {count}")   # count = 6',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'The #1 While Loop Mistake: Infinite Loops',
    content: 'If you forget to update the loop variable (like `count += 1`), the condition stays True forever, and the loop runs infinitely. Your program will freeze! If this happens in a terminal, press Ctrl+C to force-stop it.',
  },

  // ═══════════════════════════════════════
  // Section 3: while Loop Anatomy
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Anatomy of a while Loop' },
  {
    type: 'text',
    content: 'Every well-structured while loop has three essential parts:',
  },
  {
    type: 'list',
    items: [
      '**Initialization**: Set up the loop variable(s) *before* the loop',
      '**Condition**: The boolean expression checked *before each iteration*',
      '**Update**: Modify the variable(s) so the condition eventually becomes `False`',
    ],
  },
  {
    type: 'code',
    code: '# The three parts labeled:\nresult = 1          # 1. INITIALIZATION\nn = 5\n\nwhile n > 0:        # 2. CONDITION\n    result *= n\n    n -= 1          # 3. UPDATE\n\nprint(f"5! = {result}")  # 5! = 120\n\n# Counting down\nprint("Countdown:")\nn = 5                    # 1. Initialize\nwhile n > 0:             # 2. Condition\n    print(n, end=" ")\n    n -= 1               # 3. Update\nprint("Liftoff! 🚀")     # 5 4 3 2 1 Liftoff! 🚀',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Summing & Accumulator Pattern
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The Accumulator Pattern' },
  {
    type: 'text',
    content: 'One of the most common loop patterns is the **accumulator** — a variable that builds up a result across iterations:',
  },
  {
    type: 'code',
    code: '# Sum of numbers 1 to 100 (Gauss would be proud)\ntotal = 0          # Accumulator, initialized to 0\nn = 1\nwhile n <= 100:\n    total += n     # Accumulate: total = total + n\n    n += 1\nprint(f"Sum of 1..100 = {total}")    # 5050\n\n# Product (factorial)\nfactorial = 1      # Accumulator for product starts at 1\nn = 10\nwhile n > 0:\n    factorial *= n\n    n -= 1\nprint(f"10! = {factorial}")  # 3628800\n\n# String accumulation\nresult = ""        # Empty string accumulator\ni = 1\nwhile i <= 5:\n    result += str(i) + " "\n    i += 1\nprint(result)      # 1 2 3 4 5\n\n# Count digits in a number\nnumber = 123456789\ndigit_count = 0\ntemp = number\nwhile temp > 0:\n    digit_count += 1\n    temp //= 10\nprint(f"{number} has {digit_count} digits")  # 9 digits',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: break Statement
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The break Statement' },
  {
    type: 'text',
    content: '`break` **immediately exits** the loop, regardless of the condition. It\'s like an emergency exit:',
  },
  {
    type: 'code',
    code: '# Find the first number divisible by 7 after 100\nn = 100\nwhile True:            # Intentional "infinite" loop\n    n += 1\n    if n % 7 == 0:\n        print(f"Found it: {n}")  # Found it: 105\n        break          # Exit the loop immediately\n\n# Search for a value\ndata = [4, 8, 15, 16, 23, 42]\ntarget = 16\ni = 0\nfound = False\nwhile i < len(data):\n    if data[i] == target:\n        found = True\n        break          # No need to keep searching\n    i += 1\n\nif found:\n    print(f"Found {target} at index {i}")  # Found 16 at index 3\nelse:\n    print(f"{target} not found")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'while True + break is a Common Pattern',
    content: '`while True:` creates an intentional infinite loop. You then use `break` to exit when a specific condition is met. This pattern is especially useful when:\n1. You need to check the exit condition in the **middle** of the loop\n2. You want to guarantee the loop body runs **at least once**\n3. You have multiple exit conditions',
  },

  // ═══════════════════════════════════════
  // Section 6: continue Statement
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The continue Statement' },
  {
    type: 'text',
    content: '`continue` **skips the rest of the current iteration** and jumps back to the condition check. Think of it as "skip this one, move to next":',
  },
  {
    type: 'code',
    code: '# Print only odd numbers from 1 to 10\nn = 0\nwhile n < 10:\n    n += 1\n    if n % 2 == 0:\n        continue       # Skip even numbers\n    print(n, end=" ")\nprint()   # 1 3 5 7 9\n\n# Skip negative numbers in processing\nvalues = [10, -3, 7, -1, 5, 0, -8, 12]\ni = 0\ntotal = 0\nskipped = 0\nwhile i < len(values):\n    val = values[i]\n    i += 1\n    if val < 0:\n        skipped += 1\n        continue       # Skip negative values\n    total += val\n\nprint(f"Sum of positives: {total}")    # 34\nprint(f"Skipped {skipped} negative numbers")  # 3',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'continue Gotcha: Update Before continue!',
    content: 'If your update statement (like `i += 1`) comes AFTER the `continue`, it gets skipped — causing an infinite loop! Always place the update statement BEFORE the `continue`, or use a different loop structure.',
  },

  // ═══════════════════════════════════════
  // Section 7: while-else
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The while-else Pattern' },
  {
    type: 'text',
    content: 'Python has a unique feature: you can attach an `else` clause to a `while` loop. The `else` block runs only when the loop ends **naturally** (condition becomes False), NOT when it exits via `break`:',
  },
  {
    type: 'code',
    code: '# while-else: else runs when loop completes normally\n# Search example — else means "not found"\ndata = [2, 4, 6, 8, 10]\ntarget = 7\ni = 0\nwhile i < len(data):\n    if data[i] == target:\n        print(f"Found {target} at index {i}")\n        break\n    i += 1\nelse:\n    # This runs because the loop ended WITHOUT break\n    print(f"{target} not found in list")  # 7 not found in list\n\n# Another example: checking for prime\nn = 17\ndivisor = 2\nwhile divisor * divisor <= n:\n    if n % divisor == 0:\n        print(f"{n} is NOT prime (divisible by {divisor})")\n        break\n    divisor += 1\nelse:\n    print(f"{n} IS prime!")  # 17 IS prime!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Sentinel Values
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Sentinel Value Pattern' },
  {
    type: 'text',
    content: 'A **sentinel value** is a special input that signals the end of data. It\'s a classic while loop pattern for processing unknown amounts of input:',
  },
  {
    type: 'code',
    code: '# Sum numbers until user enters 0 (sentinel value)\n# (Simulated with a list for Pyodide)\ninputs = [10, 25, 30, 15, 0]  # 0 is the sentinel\n\ni = 0\ntotal = 0\ncount = 0\nwhile True:\n    value = inputs[i]\n    i += 1\n    if value == 0:     # Sentinel detected\n        break\n    total += value\n    count += 1\n\nprint(f"Sum: {total}")        # Sum: 80\nprint(f"Count: {count}")      # Count: 4\nprint(f"Average: {total / count:.1f}")  # Average: 20.0\n\n# Password validation with limited attempts\npassword = "python123"\nattempts = ["wrong", "nope", "python123"]\n\nmax_tries = 3\ntry_num = 0\nwhile try_num < max_tries:\n    guess = attempts[try_num]\n    try_num += 1\n    if guess == password:\n        print(f"Access granted on attempt {try_num}!")\n        break\n    print(f"Wrong password. {max_tries - try_num} tries left.")\nelse:\n    print("Account locked after 3 failed attempts.")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Numerical Algorithms
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'While Loops in Algorithms' },
  {
    type: 'code',
    code: '# GCD (Greatest Common Divisor) — Euclid\'s Algorithm\na, b = 48, 18\noriginal_a, original_b = a, b\nwhile b != 0:\n    a, b = b, a % b    # Simultaneous assignment!\nprint(f"GCD({original_a}, {original_b}) = {a}")  # GCD(48, 18) = 6\n\n# Collatz Conjecture (3n+1 problem)\nn = 27\nsteps = 0\nprint(n, end="")\nwhile n != 1:\n    if n % 2 == 0:\n        n = n // 2\n    else:\n        n = 3 * n + 1\n    steps += 1\n    print(f" → {n}", end="")\nprint(f"\\nReached 1 in {steps} steps")  # 111 steps!\n\n# Binary representation\nn = 42\nbinary = ""\ntemp = n\nwhile temp > 0:\n    binary = str(temp % 2) + binary  # Prepend the remainder\n    temp //= 2\nprint(f"{n} in binary: {binary}")   # 42 in binary: 101010',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: While Loop Runtime State
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — While as a State Machine' },
  {
    type: 'text',
    content: 'A `while` loop repeatedly transitions through three states: evaluate condition, execute body, update state. Bugs happen when updates are missing or when control-flow (`continue`/`break`) skips intended updates.',
  },
  {
    type: 'code',
    code: 'i = 0\nlimit = 4\n\nwhile i < limit:\n    print(i)\n    i += 1\n\nprint("done", i)',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Loop Control State During Iteration',
    description: 'Control variables are ordinary bindings in the current scope, repeatedly updated by the loop body.',
    bindings: [
      { scope: 'global', name: 'i', objectId: 'I2' },
      { scope: 'global', name: 'limit', objectId: 'I4' },
      { scope: 'runtime', name: 'last_condition', objectId: 'B_TRUE' },
      { scope: 'runtime', name: 'loop_state', objectId: 'ST_BODY' },
    ],
    objects: [
      {
        id: 'I2',
        type: 'int',
        value: '2',
        mutable: false,
        note: 'Current counter value mid-loop.',
        accent: 'amber',
      },
      {
        id: 'I4',
        type: 'int',
        value: '4',
        mutable: false,
        accent: 'sky',
      },
      {
        id: 'B_TRUE',
        type: 'bool',
        value: 'True',
        mutable: false,
        accent: 'mint',
      },
      {
        id: 'ST_BODY',
        type: 'state marker',
        value: 'executing loop body',
        mutable: false,
        accent: 'neutral',
      },
    ],
    insights: [
      'Counters are rebound to new int objects after each increment.',
      'Condition is re-evaluated before every iteration, not just once.',
      'Missing or skipped updates keep condition true and create infinite loops.',
    ],
  },
  {
    type: 'heading', level: 2, text: 'break vs Natural Completion (while-else)' },
  {
    type: 'code',
    code: 'i = 0\n\nwhile i < 5:\n    if i == 3:\n        break\n    i += 1\nelse:\n    print("completed naturally")\n\nprint("stopped at", i)',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Early Exit Suppresses else',
    description: 'The loop exits via break with i == 3, so the else block never executes.',
    bindings: [
      { scope: 'global', name: 'i', objectId: 'I3' },
      { scope: 'runtime', name: 'exit_reason', objectId: 'EXIT_BREAK' },
    ],
    objects: [
      {
        id: 'I3',
        type: 'int',
        value: '3',
        mutable: false,
        accent: 'amber',
      },
      {
        id: 'EXIT_BREAK',
        type: 'state marker',
        value: 'break',
        mutable: false,
        note: 'Non-natural termination path.',
        accent: 'coral',
      },
    ],
    insights: [
      '`while-else` is about termination mode, not condition polarity.',
      'Else runs only when loop condition becomes false naturally.',
      'Any break in the loop body suppresses else execution.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Sentinel Loop Lifecycle',
    prompt: 'Walk through a classic while True + break workflow and inspect state at each stage.',
    steps: [
      {
        title: 'Initialize Buffers and Counters',
        action: 'Setup simulated input sequence',
        code: 'inputs = [10, 25, 0]\ni = 0\ntotal = 0',
        bindings: [
          { scope: 'global', name: 'inputs', objectId: 'L_IN' },
          { scope: 'global', name: 'i', objectId: 'I0' },
          { scope: 'global', name: 'total', objectId: 'I_SUM0' },
        ],
        objects: [
          { id: 'L_IN', type: 'list', value: '[10, 25, 0]', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'I0', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I_SUM0', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'Sentinel loop begins with index and accumulator at zero.',
      },
      {
        title: 'Read First Value',
        action: 'Consume 10 and continue loop',
        code: 'value = inputs[i]\ni += 1\nif value == 0:\n    break\ntotal += value',
        bindings: [
          { scope: 'global', name: 'i', objectId: 'I1' },
          { scope: 'global', name: 'value', objectId: 'I10' },
          { scope: 'global', name: 'total', objectId: 'I_SUM10' },
        ],
        objects: [
          { id: 'I1', type: 'int', value: '1', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I10', type: 'int', value: '10', mutable: false, refCount: 1, accent: 'mint' },
          { id: 'I_SUM10', type: 'int', value: '10', mutable: false, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Value is not sentinel, so loop updates running total.',
      },
      {
        title: 'Read Second Value',
        action: 'Consume 25 and continue loop',
        code: 'value = 25\ntotal = 35\ni = 2',
        bindings: [
          { scope: 'global', name: 'i', objectId: 'I2' },
          { scope: 'global', name: 'value', objectId: 'I25' },
          { scope: 'global', name: 'total', objectId: 'I_SUM35' },
        ],
        objects: [
          { id: 'I2', type: 'int', value: '2', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I25', type: 'int', value: '25', mutable: false, refCount: 1, accent: 'mint' },
          { id: 'I_SUM35', type: 'int', value: '35', mutable: false, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Loop state advances normally again: index increments and accumulator grows.',
      },
      {
        title: 'Sentinel Triggers break',
        action: 'Consume 0 and terminate loop',
        code: 'value = inputs[i]   # 0\ni += 1\nif value == 0:\n    break',
        bindings: [
          { scope: 'global', name: 'i', objectId: 'I3' },
          { scope: 'global', name: 'value', objectId: 'I_SENT' },
          { scope: 'global', name: 'total', objectId: 'I_SUM35' },
          { scope: 'runtime', name: 'exit_reason', objectId: 'EXIT_BREAK' },
        ],
        objects: [
          { id: 'I3', type: 'int', value: '3', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I_SENT', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'coral' },
          { id: 'I_SUM35', type: 'int', value: '35', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'EXIT_BREAK', type: 'state marker', value: 'break', mutable: false, refCount: 1, accent: 'coral' },
        ],
        explanation: 'Sentinel value exits loop immediately, preserving total from prior entries.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 10: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Experiment with while loops!\n\n# 1. Fibonacci sequence\na, b = 0, 1\nprint("Fibonacci:", end=" ")\nwhile a < 100:\n    print(a, end=" ")\n    a, b = b, a + b\nprint()\n\n# 2. Digit sum\nnumber = 9876\ndigit_sum = 0\ntemp = number\nwhile temp > 0:\n    digit_sum += temp % 10    # Get last digit\n    temp //= 10              # Remove last digit\nprint(f"Digit sum of {number} = {digit_sum}")\n\n# 3. Power of 2 finder\nn = 1000\npower = 1\nexp = 0\nwhile power < n:\n    power *= 2\n    exp += 1\nprint(f"\\nSmallest power of 2 >= {n}: 2^{exp} = {power}")\n\n# 4. Number guessing game (simulated)\nimport random\nsecret = random.randint(1, 50)\nguesses = [25, 12, 37, secret]  # Simulate guesses\nprint(f"\\nSecret number: {secret}")\nfor guess in guesses:\n    if guess == secret:\n        print(f"  {guess} → Correct! 🎉")\n        break\n    elif guess < secret:\n        print(f"  {guess} → Too low")\n    else:\n        print(f"  {guess} → Too high")',
    instructions: 'Experiment with different algorithms. Try computing the reverse of a number, or finding the largest power of 2 below N.',
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

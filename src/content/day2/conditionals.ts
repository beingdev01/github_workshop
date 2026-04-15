import type { ContentBlock } from '@/types/content'

export const day2Conditionals: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Conditional Statements' },
  {
    type: 'text',
    content: 'Conditional statements are the **decision-making tools** of programming. They allow your program to choose different paths based on whether conditions are `True` or `False`. Without conditionals, every program would execute the same instructions regardless of input — incredibly boring and useless!',
  },

  // ═══════════════════════════════════════
  // Section 2: if Statement
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The if Statement' },
  {
    type: 'text',
    content: 'The `if` statement is the simplest conditional. If the condition is `True`, the **indented block** below it executes. If `False`, Python skips the block entirely:',
  },
  {
    type: 'code',
    code: '# Basic if statement\ntemperature = 35\n\nif temperature > 30:\n    print("It\'s hot today!")    # Executes because 35 > 30\n\nprint("Program continues")     # Always executes (not inside the if block)\n\n# With a False condition\ntemperature = 20\nif temperature > 30:\n    print("It\'s hot today!")    # SKIPPED — condition is False\n\nprint("Program continues")     # Still executes',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Indentation is NOT Optional!',
    content: 'Python uses **indentation** (typically 4 spaces) to define code blocks. Other languages use curly braces `{}`, but Python uses whitespace. If your indentation is wrong, you\'ll get an `IndentationError`. Every line inside an `if` block must be indented to the same level.',
  },
  { type: 'heading', level: 3, text: 'Multi-line if Blocks' },
  {
    type: 'code',
    code: '# Multiple statements in an if block\nscore = 95\n\nif score >= 90:\n    print("Excellent!")           # Line 1 of the block\n    print("You got an A!")        # Line 2 of the block\n    stars = "★" * 5               # Line 3 of the block\n    print(f"Rating: {stars}")     # Line 4 of the block\n\nprint("Grade report complete")    # Outside the if block — always runs\n\n# The colon : is REQUIRED!\n# if score >= 90    ← SyntaxError! Missing colon\n# if score >= 90:   ← Correct!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: if-else
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The if-else Statement' },
  {
    type: 'text',
    content: '`if-else` provides **two branches**: one for when the condition is `True`, another for when it\'s `False`. Exactly one of the two blocks always executes — never both, never neither:',
  },
  {
    type: 'code',
    code: '# if-else: two-way decision\nage = 16\n\nif age >= 18:\n    print("You can vote!")       # True branch\nelse:\n    print("Too young to vote")   # False branch\n    years_left = 18 - age\n    print(f"Come back in {years_left} years")  # Come back in 2 years\n\n# Another example: even/odd check\nnumber = 42\nif number % 2 == 0:\n    print(f"{number} is even")\nelse:\n    print(f"{number} is odd")\n\n# Important: if and else must be at the SAME indentation level\n# else can never have a condition — it catches everything else',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: if-elif-else
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The if-elif-else Chain' },
  {
    type: 'text',
    content: '`elif` (short for "else if") lets you check **multiple conditions** in sequence. Python checks each condition from top to bottom and executes the **first** block whose condition is `True`, then skips all remaining blocks:',
  },
  {
    type: 'code',
    code: '# Grade calculator with if-elif-else\nscore = 78\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"Score: {score} → Grade: {grade}")  # Score: 78 → Grade: C\n\n# Key insight: conditions are checked TOP to BOTTOM\n# Once a match is found, ALL remaining elif/else blocks are skipped\n# So we don\'t need "score >= 70 and score < 80" — just "score >= 70"',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'elif vs Multiple if Statements',
    content: '`if-elif-else` is a **single chain** — at most ONE block executes. Multiple separate `if` statements are **independent** — each one is checked regardless of previous results.\n\n`if x > 0: ...` then `elif x > -5: ...` → at most one runs.\n`if x > 0: ...` then `if x > -5: ...` → both might run!',
  },
  { type: 'heading', level: 3, text: 'Multiple elif Blocks' },
  {
    type: 'code',
    code: '# You can have as many elif blocks as you need\nday = "Wednesday"\n\nif day == "Monday":\n    print("Start of the work week")\nelif day == "Tuesday":\n    print("Second day")\nelif day == "Wednesday":\n    print("Midweek!")            # This executes\nelif day == "Thursday":\n    print("Almost Friday")\nelif day == "Friday":\n    print("TGIF! 🎉")\nelse:\n    print("Weekend! 🏖️")\n\n# The else block is optional\nif day == "Sunday":\n    print("Rest day")\nelif day == "Saturday":\n    print("Fun day")\n# No else — if neither matches, nothing happens',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Nested Conditionals
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Nested Conditional Statements' },
  {
    type: 'text',
    content: 'You can place conditional statements **inside** other conditional statements. The inner `if` is only checked when the outer condition is `True`:',
  },
  {
    type: 'code',
    code: '# Nested conditionals: checking ascending order\nx, y, z = 1, 3, 2\n\nif x < y:\n    if y < z:\n        print("In ascending order")\n    else:\n        print("Not in ascending order")  # This prints (3 < 2 is False)\nelse:\n    print("Not in ascending order")\n\n# Better approach: flatten with "and"\nif x < y and y < z:\n    print("In ascending order")\nelse:\n    print("Not in ascending order")\n\n# Even better: comparison chaining!\nif x < y < z:\n    print("In ascending order")\nelse:\n    print("Not in ascending order")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Avoid Deep Nesting',
    content: 'While nesting is sometimes necessary, deeply nested conditionals (3+ levels) become hard to read. Common strategies to reduce nesting:\n\n1. **Flatten with `and`/`or`**: Combine conditions on one line\n2. **Early returns**: In functions, return early instead of nesting\n3. **Guard clauses**: Check for invalid cases first, then handle the "happy path"',
  },
  { type: 'heading', level: 3, text: 'Practical Nesting Example' },
  {
    type: 'code',
    code: '# Login system with nested checks\nusername = "admin"\npassword = "secret123"\nis_locked = False\n\nif not is_locked:\n    if username == "admin":\n        if password == "secret123":\n            print("✅ Login successful!")\n        else:\n            print("❌ Wrong password")\n    else:\n        print("❌ Unknown user")\nelse:\n    print("🔒 Account is locked")\n\n# Flattened version (often clearer):\nif is_locked:\n    print("🔒 Account is locked")\nelif username != "admin":\n    print("❌ Unknown user")\nelif password != "secret123":\n    print("❌ Wrong password")\nelse:\n    print("✅ Login successful!")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Ternary Expression
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The Ternary Expression (Conditional Expression)' },
  {
    type: 'text',
    content: 'Python has a one-line conditional expression, often called the "ternary operator":',
  },
  {
    type: 'code',
    code: '# Syntax: value_if_true if condition else value_if_false\nage = 20\nstatus = "adult" if age >= 18 else "minor"\nprint(status)    # adult\n\n# It\'s an EXPRESSION — it produces a value\n# Useful in assignments, f-strings, function calls\ntemperature = 35\nprint(f"Weather is {\'hot\' if temperature > 30 else \'comfortable\'}")\n\n# Can be used in calculations\nx = -7\nabsolute = x if x >= 0 else -x\nprint(f"Absolute value of {x} is {absolute}")  # 7\n\n# Nested ternary (use sparingly — gets hard to read)\nscore = 85\ngrade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"\nprint(f"Grade: {grade}")  # B\n\n# Better to use if-elif-else for complex conditions',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Common Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Common Conditional Patterns' },
  {
    type: 'code',
    code: '# Pattern 1: Clamping a value to a range\nvalue = 150\nclamped = min(max(value, 0), 100)  # Keep between 0 and 100\nprint(clamped)   # 100\n\n# Pattern 2: Absolute value (manual)\nx = -5\nresult = x if x >= 0 else -x\nprint(result)   # 5\n\n# Pattern 3: Sign function\ndef sign(n):\n    if n > 0:\n        return 1\n    elif n < 0:\n        return -1\n    else:\n        return 0\n\nprint(sign(42))    # 1\nprint(sign(-7))    # -1\nprint(sign(0))     # 0\n\n# Pattern 4: Categorizing with if-elif\ndef categorize_bmi(bmi):\n    if bmi < 18.5:\n        return "Underweight"\n    elif bmi < 25.0:\n        return "Normal"\n    elif bmi < 30.0:\n        return "Overweight"\n    else:\n        return "Obese"\n\nprint(categorize_bmi(22.5))  # Normal',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Variables Inside if
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Defining Variables Inside if Blocks' },
  {
    type: 'text',
    content: 'An important subtlety: a variable defined inside an `if` block **only exists** if that block actually executes:',
  },
  {
    type: 'code',
    code: '# Dangerous pattern: variable might not exist!\nx = 7\nif x % 5 == 0:\n    output = "divisible by 5"\n# print(output)  # NameError if x is NOT divisible by 5!\n\n# Safe pattern 1: Initialize before the if\noutput = "not divisible by 5"   # default value\nif x % 5 == 0:\n    output = "divisible by 5"\nprint(output)   # Always works!\n\n# Safe pattern 2: Use if-else (guarantees assignment)\nif x % 5 == 0:\n    output = "divisible by 5"\nelse:\n    output = "not divisible by 5"\nprint(output)   # Always works!\n\n# Note: Python does NOT have block scoping like C/Java\n# Variables created inside if blocks are accessible outside\nif True:\n    y = 42\nprint(y)   # 42 — works! (not limited to the if block)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Python Has Function Scope, Not Block Scope',
    content: 'Unlike C, Java, or JavaScript (with `let`), Python doesn\'t create a new scope inside `if`, `for`, or `while` blocks. Variables created inside these blocks are accessible outside them. The scope boundary in Python is the **function** (or module for global code).',
  },

  // ═══════════════════════════════════════
  // Section 9: match-case (Python 3.10+)
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Structural Pattern Matching (Python 3.10+)' },
  {
    type: 'text',
    content: 'Python 3.10 introduced `match-case`, similar to switch statements in other languages but much more powerful:',
  },
  {
    type: 'code',
    code: '# match-case: structural pattern matching\ncommand = "greet"\n\nmatch command:\n    case "greet":\n        print("Hello! 👋")\n    case "quit":\n        print("Goodbye!")\n    case "help":\n        print("Available: greet, quit, help")\n    case _:                     # _ is the wildcard (catches anything)\n        print(f"Unknown command: {command}")\n\n# match-case with values\nhttp_status = 404\n\nmatch http_status:\n    case 200:\n        print("OK")\n    case 301:\n        print("Moved Permanently")\n    case 404:\n        print("Not Found")       # This executes\n    case 500:\n        print("Internal Server Error")\n    case _:\n        print(f"Status: {http_status}")\n\n# match-case with OR patterns\nday = "Saturday"\nmatch day:\n    case "Saturday" | "Sunday":\n        print("Weekend! 🎉")\n    case _:\n        print("Weekday")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 10: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Experiment with conditionals!\n\n# 1. Grade calculator\nscore = 78\nif score >= 90:\n    grade, emoji = "A", "🌟"\nelif score >= 80:\n    grade, emoji = "B", "👍"\nelif score >= 70:\n    grade, emoji = "C", "📝"\nelif score >= 60:\n    grade, emoji = "D", "⚠️"\nelse:\n    grade, emoji = "F", "❌"\n\nprint(f"Score: {score} → Grade: {grade} {emoji}")\n\n# 2. Leap year checker\nyear = 2024\nif year % 400 == 0:\n    is_leap = True\nelif year % 100 == 0:\n    is_leap = False\nelif year % 4 == 0:\n    is_leap = True\nelse:\n    is_leap = False\n\nprint(f"{year} is {\\\"a leap\\\" if is_leap else \\\"not a leap\\\"} year")\n\n# 3. FizzBuzz (classic!)\nprint("\\nFizzBuzz 1-20:")\nfor n in range(1, 21):\n    if n % 15 == 0:\n        print("FizzBuzz", end=" ")\n    elif n % 3 == 0:\n        print("Fizz", end=" ")\n    elif n % 5 == 0:\n        print("Buzz", end=" ")\n    else:\n        print(n, end=" ")',
    instructions: 'Try changing the score and year values. Add more conditions to the FizzBuzz challenge!',
  },

  // ═══════════════════════════════════════
  // Section 11: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  

  // ═══════════════════════════════════════
  // Section 12: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  
]

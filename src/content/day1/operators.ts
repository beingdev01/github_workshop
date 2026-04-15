import type { ContentBlock } from '@/types/content'

export const day1Operators: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Operators & Expressions' },
  {
    type: 'text',
    content: 'Operators are special symbols that perform operations on values (operands). An **expression** is any valid combination of literals, variables, and operators that evaluates to a value.',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Anatomy of an Operation',
    content: 'In `10 + 5`, `10` and `5` are **operands** and `+` is the **operator**. Binary operators work on two operands (`+`, `-`). Unary operators work on one (`-x`).',
  },

  // ═══════════════════════════════════════
  // Section 2: Arithmetic Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Arithmetic Operators' },
  {
    type: 'text',
    content: 'Python provides seven arithmetic operators:',
  },
  {
    type: 'code',
    code: '# The 7 Arithmetic Operators\nprint(10 + 3)      # 13    Addition\nprint(10 - 3)      # 7     Subtraction\nprint(10 * 3)      # 30    Multiplication\nprint(10 / 3)      # 3.333 Division (ALWAYS returns float)\nprint(10 // 3)     # 3     Floor Division (quotient, rounded down)\nprint(10 % 3)      # 1     Modulus (remainder)\nprint(10 ** 3)     # 1000  Exponentiation (power)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Division (/) Always Returns Float',
    content: 'Even when dividing evenly, `/` returns a `float`: `10 / 5` gives `2.0`. For an integer result, use floor division `//`: `10 // 5` gives `2`.',
  },
  { type: 'heading', level: 3, text: 'Floor Division (//)' },
  {
    type: 'text',
    content: '`//` returns the quotient, rounded down to the nearest integer (toward negative infinity):',
  },
  {
    type: 'code',
    code: 'print(17 // 5)     # 3\nprint(-17 // 5)    # -4 (rounds toward negative infinity)\nprint(17.0 // 5)   # 3.0 (float result if any operand is float)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Negative Floor Division',
    content: '`-17 // 5` gives `-4`, NOT `-3`. Floor division rounds toward **negative infinity**, not toward zero like in C or Java.',
  },
  { type: 'heading', level: 3, text: 'Modulus (%)' },
  {
    type: 'text',
    content: '`%` returns the remainder after division. It is extremely useful:',
  },
  {
    type: 'code',
    code: 'print(17 % 5)      # 2\nprint(10 % 3)      # 1\n\n# Common uses:\nnum = 42\nprint(num % 2 == 0)    # True (is even)\nprint(num % 10)        # 2 (last digit)\nprint(num % 7 == 0)    # True (divisible by 7)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'The Relationship',
    content: '`a == (a // b) * b + (a % b)` is always `True`. Example: `17 == (17 // 5) * 5 + (17 % 5)` → `17 == 3 * 5 + 2`.',
  },

  { type: 'heading', level: 3, text: 'Exponentiation (**)' },
  {
    type: 'code',
    code: 'print(2 ** 10)     # 1024\nprint(2 ** 0.5)    # 1.4142... (square root)\nprint(27 ** (1/3)) # 3.0 (cube root)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: Unary Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Unary Plus and Minus' },
  {
    type: 'text',
    content: 'The `+` and `-` symbols can act as unary operators on a single operand:',
  },
  {
    type: 'code',
    code: 'x = 5\nprint(-x)        # -5\nprint(-(-x))     # 5\nprint(1 - -1)    # 2 (subtraction and unary minus)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Type Rules in Arithmetic
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Type Rules in Arithmetic' },
  {
    type: 'text',
    content: 'When you mix `int` and `float` in arithmetic, Python follows a clear rule: **float dominates**. If any operand is a float, the result is a float. The `/` operator always returns a float, even with two integers:',
  },
  {
    type: 'code',
    code: '# int + int = int\nprint(type(3 + 4))        # <class \'int\'>\n\n# int + float = float (float dominates)\nprint(type(3 + 4.0))      # <class \'float\'>\n\n# Division ALWAYS returns float\nprint(type(10 / 5))       # <class \'float\'>\n\n# Floor division of ints returns int\nprint(type(10 // 5))      # <class \'int\'>',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Comparison Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Comparison Operators' },
  {
    type: 'text',
    content: 'Comparison operators compare two values and return a **boolean** (`True` or `False`):',
  },
  {
    type: 'code',
    code: 'print(10 > 5)      # True   (greater than)\nprint(10 < 5)      # False  (less than)\nprint(10 >= 10)    # True   (greater than or equal)\nprint(10 <= 5)     # False  (less than or equal)\nprint(10 == 10)    # True   (equal to)\nprint(10 != 5)     # True   (not equal to)',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Comparison Chaining' },
  {
    type: 'text',
    content: 'Python allows chaining comparison operators, just like in mathematics:',
  },
  {
    type: 'code',
    code: 'x = 15\n\n# Is x between 10 and 20?\nprint(10 < x < 20)         # True\n\n# Multiple chains\nprint(1 < 2 < 3 < 4 < 5)   # True',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Logical Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Logical Operators' },
  {
    type: 'text',
    content: 'Logical operators combine boolean expressions using `and`, `or`, and `not`:',
  },
  {
    type: 'code',
    code: '# and — True only if BOTH sides are True\nprint(True and False)    # False\n\n# or — True if EITHER side is True\nprint(True or False)     # True\n\n# not — Reverses the boolean value\nprint(not True)          # False\n\n# Practical example\nage = 25\nhas_license = True\ncan_drive = age >= 16 and has_license\nprint(can_drive)         # True',
    language: 'python',
  },

  { type: 'heading', level: 3, text: 'Short-Circuit Evaluation' },
  {
    type: 'text',
    content: 'Python evaluates logical operators using **short-circuit evaluation** — it stops as soon as the result is determined:',
  },
  {
    type: 'code',
    code: '# If left side is False, \'and\' skips the right side\nprint(False and (1/0))    # False (no ZeroDivisionError)\n\n# If left side is True, \'or\' skips the right side\nprint(True or (1/0))      # True (no error)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Why Short-Circuiting Matters',
    content: 'Short-circuiting is a design pattern. In `if x != 0 and y/x > 10`, the first check prevents a division-by-zero error because the second part is never evaluated if `x` is 0.',
  },

  // ═══════════════════════════════════════
  // Section 7: Operator Precedence
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Operator Precedence' },
  {
    type: 'text',
    content: 'Python follows strict precedence rules (which operator goes first):',
  },
  {
    type: 'code',
    code: 'print(3 + 4 * 2)       # 11 (* before +)\nprint((3 + 4) * 2)     # 14 (parentheses override)\nprint(2 ** 3 * 4 - 4)  # 28 (** first, then *, then -)',
    language: 'python',
  },
  {
    type: 'text',
    content: '**Associativity** determines the order for operators with the same precedence. Most are left-to-right, but exponentiation (`**`) is right-to-left:',
  },
  {
    type: 'code',
    code: '# Left-to-right\nprint(4 - 3 - 1)       # 0  -> (4 - 3) - 1\n\n# Right-to-left (**)\nprint(2 ** 3 ** 2)     # 512 -> 2 ** (3 ** 2)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Use Parentheses',
    content: 'When in doubt, use parentheses to make your intent explicit. `(a + b) * c` is clearer than relying on precedence rules.',
  },

  // ═══════════════════════════════════════
  // Section 8: Expressions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Expressions' },
  {
    type: 'text',
    content: 'An **expression** is any combination of literals, variables, and operators that evaluates to a value:',
  },
  {
    type: 'code',
    code: '# Arithmetic expressions -> int or float\nprint(1 + 4 / 4 ** 0)       # 2.0\n\n# Boolean expressions -> bool\nprint(3 > 4 and 1 < 10)     # False',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Beware of Float!
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Floating-Point Precision' },
  {
    type: 'text',
    content: 'Floating-point numbers are represented in binary. Some decimal numbers cannot be represented exactly, leading to tiny rounding errors:',
  },
  {
    type: 'code',
    code: '# The classic float precision issue\nprint(0.1 + 0.2)              # 0.30000000000000004\nprint(0.1 + 0.2 == 0.3)       # False\n\n# How to compare floats safely\nimport math\nprint(math.isclose(0.1 + 0.2, 0.3))   # True',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Never Use == to Compare Floats',
    content: 'Because of precision issues, never compare floats with `==`. Use `math.isclose(a, b)` instead.',
  },

  // ═══════════════════════════════════════
  // Section 10: Useful Built-in Functions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Built-in Math Functions' },
  {
    type: 'code',
    code: 'print(abs(-42))         # 42    (absolute value)\nprint(round(3.14159, 2)) # 3.14 (round to 2 decimal places)\nprint(max(5, 10, 3))    # 10    (maximum)\nprint(min(5, 10, 3))    # 3     (minimum)\n\n# divmod returns (quotient, remainder)\nquotient, remainder = divmod(125, 60)\nprint(f"125 mins = {quotient} hrs, {remainder} mins")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 11: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Experiment with operators!\n\n# 1. Arithmetic operators\nprint("=== Arithmetic ===")\nprint(f"17 // 5 = {17 // 5}")    # Floor division\nprint(f"17 % 5  = {17 % 5}")    # Modulus\nprint(f"2 ** 10 = {2 ** 10}")   # Exponentiation\n\n# 2. Is a number even or odd?\nnum = 42\nprint(f"\\n{num} is even: {num % 2 == 0}")\n\n# 3. Extract digits\nnum = 1234\nones = num % 10\ntens = (num // 10) % 10\nhundreds = (num // 100) % 10\nprint(f"\\nDigits of {num}: ones={ones}, tens={tens}, hundreds={hundreds}")\n\n# 4. Precedence\nprint(f"\\n2 + 3 * 4 = {2 + 3 * 4}")      # 14, not 20\nprint(f"2 ** 3 ** 2 = {2 ** 3 ** 2}")    # 512, not 64\n\n# 5. Float gotcha\nprint(f"\\n0.1 + 0.2 = {0.1 + 0.2}")     # Not exactly 0.3!',
    instructions: 'Try different operator combinations. Test negative floor division. Check if numbers are divisible.',
  },

  // ═══════════════════════════════════════
  // Section 12: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  

  // ═══════════════════════════════════════
  // Section 13: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  
]

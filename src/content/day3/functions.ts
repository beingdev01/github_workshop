import type { ContentBlock } from '@/types/content'

export const day3Functions: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Functions — Building Blocks of Programs' },
  {
    type: 'text',
    content: 'A **function** is a reusable block of code that performs a specific task. Functions are the most important organizational tool in programming — they let you break complex problems into smaller, manageable pieces. You\'ve already been using built-in functions: `print()`, `len()`, `range()`, `int()`. Now you\'ll learn to **create your own**.',
  },

  // ═══════════════════════════════════════
  // Section 2: Defining Functions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Defining and Calling Functions' },
  {
    type: 'code',
    code: '# Defining a function with def\ndef greet():\n    """A simple greeting function."""\n    print("Hello, World!")\n\n# Calling (invoking) the function\ngreet()     # Hello, World!\ngreet()     # Hello, World! — can call as many times as you want\n\n# Functions with parameters (inputs)\ndef greet_person(name):\n    """Greet a specific person."""\n    print(f"Hello, {name}!")\n\ngreet_person("Alice")    # Hello, Alice!\ngreet_person("Bob")      # Hello, Bob!\n\n# Functions with return values (outputs)\ndef square(n):\n    """Return the square of n."""\n    return n ** 2\n\nresult = square(5)\nprint(result)     # 25\nprint(square(3))  # 9\n\n# Combining it all\ndef add(a, b):\n    """Return the sum of a and b."""\n    return a + b\n\nprint(add(3, 4))   # 7\nprint(add(10, 20)) # 30',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'def Creates the Function, Calling Executes It',
    content: '`def` only **defines** (creates) the function — the code inside doesn\'t run yet. The function executes only when you **call** it with parentheses: `function_name()`. This is a crucial distinction!',
  },

  // ═══════════════════════════════════════
  // Section 3: Parameters & Arguments
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Parameters vs Arguments' },
  {
    type: 'text',
    content: '**Parameters** are the variable names in the function definition. **Arguments** are the actual values you pass when calling the function:',
  },
  {
    type: 'code',
    code: '# "name" is a PARAMETER (in the definition)\ndef greet(name):         # ← parameter\n    print(f"Hello, {name}!")\n\n# "Alice" is an ARGUMENT (in the call)\ngreet("Alice")           # ← argument\n\n# Multiple parameters\ndef full_name(first, middle, last):\n    return f"{first} {middle} {last}"\n\nprint(full_name("Guido", "van", "Rossum"))\n\n# Positional arguments: order matters!\ndef power(base, exponent):\n    return base ** exponent\n\nprint(power(2, 10))    # 1024 — 2^10\nprint(power(10, 2))    # 100  — 10^2 (different!)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Return Values
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Return Values' },
  {
    type: 'code',
    code: '# return sends a value back to the caller\ndef is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))    # True\nprint(is_even(7))    # False\n\n# return also EXITS the function immediately\ndef first_positive(numbers):\n    for n in numbers:\n        if n > 0:\n            return n      # Found it! Exit now.\n    return None             # Nothing found\n\nprint(first_positive([-3, -1, 0, 5, 8]))  # 5\nprint(first_positive([-3, -1, 0]))          # None\n\n# Returning multiple values (actually returns a tuple)\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nlow, high = min_max([3, 1, 4, 1, 5, 9])\nprint(f"Min: {low}, Max: {high}")   # Min: 1, Max: 9\n\n# Functions without return give None\ndef say_hi():\n    print("Hi!")\n\nresult = say_hi()     # Prints "Hi!"\nprint(result)         # None — no return statement!',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'print() vs return — They Are NOT the Same!',
    content: '`print()` displays text on screen but the value is gone.\n`return` sends a value back to the caller so it can be stored, used in calculations, or passed to other functions.\n\n`def square(n): print(n**2)` — shows the result but you can\'t use it.\n`def square(n): return n**2` — gives the result back for further use.',
  },

  // ═══════════════════════════════════════
  // Section 5: Default Parameters
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Default Parameter Values' },
  {
    type: 'code',
    code: '# Default values: used when no argument is provided\ndef greet(name, greeting="Hello"):\n    print(f"{greeting}, {name}!")\n\ngreet("Alice")              # Hello, Alice! (uses default)\ngreet("Bob", "Hola")        # Hola, Bob! (overrides default)\n\n# Power function with default exponent\ndef power(base, exp=2):     # Default: square\n    return base ** exp\n\nprint(power(5))       # 25  — uses default exp=2\nprint(power(2, 10))   # 1024 — uses exp=10\n\n# RULE: default parameters must come AFTER non-default ones\ndef f(a, b=10, c=20):   # ✅ Valid\n    return a + b + c\n\n# def f(a=10, b, c):    # ❌ SyntaxError!\n# def f(a, b=10, c):    # ❌ SyntaxError!\n\nprint(f(1))          # 31  — b=10, c=20\nprint(f(1, 2))       # 23  — b=2, c=20\nprint(f(1, 2, 3))    # 6   — b=2, c=3',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Keyword Arguments
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Keyword Arguments' },
  {
    type: 'code',
    code: '# Keyword arguments let you pass values by name\ndef describe_pet(name, animal, color="brown"):\n    print(f"{name} is a {color} {animal}")\n\n# Positional arguments (order matters)\ndescribe_pet("Buddy", "dog")           # Buddy is a brown dog\n\n# Keyword arguments (order doesn\'t matter!)\ndescribe_pet(animal="cat", name="Whiskers", color="black")\n# Whiskers is a black cat\n\n# Mix positional and keyword (positional first!)\ndescribe_pet("Nemo", animal="fish", color="orange")\n# Nemo is a orange fish\n\n# Keyword arguments are especially useful with many parameters\ndef create_user(name, age, email, role="user", active=True):\n    return {\n        "name": name, "age": age, "email": email,\n        "role": role, "active": active\n    }\n\nuser = create_user("Alice", 30, "alice@example.com", role="admin")\nprint(user)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Scope
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Variable Scope — Local vs Global' },
  {
    type: 'text',
    content: '**Scope** determines where a variable is accessible. Variables created inside a function are **local** — they exist only within that function. Variables outside are **global**.',
  },
  {
    type: 'code',
    code: '# Local scope: variable exists only inside the function\ndef my_function():\n    x = 10          # Local variable\n    print(f"Inside: x = {x}")\n\nmy_function()       # Inside: x = 10\n# print(x)         # NameError! x is not defined here\n\n# Global scope: variable accessible everywhere\ny = 20              # Global variable\n\ndef read_global():\n    print(f"Inside: y = {y}")    # Can READ globals\n\nread_global()       # Inside: y = 20\n\n# Shadowing: local variable hides global with same name\nz = 100\n\ndef shadow_demo():\n    z = 999         # Creates a NEW local z (doesn\'t modify global)\n    print(f"Inside: z = {z}")\n\nshadow_demo()       # Inside: z = 999\nprint(f"Outside: z = {z}")  # Outside: z = 100 (unchanged!)\n\n# The global keyword (use sparingly!)\ncounter = 0\n\ndef increment():\n    global counter  # Modify the global variable\n    counter += 1\n\nincrement()\nincrement()\nincrement()\nprint(f"Counter: {counter}")  # Counter: 3',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Avoid global — Pass Values Instead',
    content: 'Using `global` creates hidden dependencies between functions and makes code harder to understand and debug. Instead, pass values as arguments and return results:\n\n❌ `global counter; counter += 1`\n✅ `counter = increment(counter)` where `def increment(n): return n + 1`',
  },

  // ═══════════════════════════════════════
  // Section 8: Docstrings
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Docstrings — Documenting Functions' },
  {
    type: 'code',
    code: '# Docstrings: the first string in a function\ndef calculate_bmi(weight_kg, height_m):\n    """Calculate Body Mass Index.\n    \n    Args:\n        weight_kg: Weight in kilograms\n        height_m: Height in meters\n    \n    Returns:\n        BMI as a float\n    \n    Example:\n        >>> calculate_bmi(70, 1.75)\n        22.857142857142858\n    """\n    return weight_kg / (height_m ** 2)\n\n# Access the docstring\nprint(calculate_bmi.__doc__)\nhelp(calculate_bmi)  # Pretty-printed documentation\n\n# Always document your functions! Future-you will thank you.',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Create and use functions!\n\n# 1. Temperature converter\ndef celsius_to_fahrenheit(c):\n    return c * 9/5 + 32\n\ndef fahrenheit_to_celsius(f):\n    return (f - 32) * 5/9\n\nprint(f"100°C = {celsius_to_fahrenheit(100):.1f}°F")\nprint(f"72°F = {fahrenheit_to_celsius(72):.1f}°C")\n\n# 2. Is it a palindrome?\ndef is_palindrome(text):\n    cleaned = text.lower().replace(" ", "")\n    return cleaned == cleaned[::-1]\n\nfor word in ["racecar", "Python", "madam", "hello"]:\n    result = "✅" if is_palindrome(word) else "❌"\n    print(f"  {word}: {result}")\n\n# 3. Function that returns multiple values\ndef analyze_numbers(nums):\n    return min(nums), max(nums), sum(nums) / len(nums)\n\ndata = [4, 8, 15, 16, 23, 42]\nlo, hi, avg = analyze_numbers(data)\nprint(f"\\nMin={lo}, Max={hi}, Avg={avg:.1f}")',
    instructions: 'Create your own functions! Try making a function that checks if a number is prime.',
  },

  // ═══════════════════════════════════════
  // Section 10: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  {
    type: 'qna',
    quiz: {
      id: 'quiz-functions',
      title: 'Functions Quiz',
      questions: [
        {
          type: 'predict-output',
          code: 'def mystery(a, b=10):\n    return a + b\n\nprint(mystery(5))\nprint(mystery(5, 20))',
          options: ['5\\n25', '15\\n25', '15\\n20', 'Error'],
          correctIndex: 1,
          explanation: 'First call: a=5, b uses default (10), so 5+10=15. Second call: a=5, b=20, so 5+20=25.',
        },
        {
          type: 'predict-output',
          code: 'x = 5\ndef change():\n    x = 10\n    print(x)\n\nchange()\nprint(x)',
          options: ['10\\n10', '10\\n5', '5\\n5', 'Error'],
          correctIndex: 1,
          explanation: 'Inside change(), x=10 creates a LOCAL variable. The global x=5 is unchanged. Output: 10 (local), then 5 (global).',
        },
        {
          type: 'predict-output',
          code: 'def greet(name):\n    print(f"Hi {name}")\n\nresult = greet("Alice")\nprint(result)',
          options: ['Hi Alice\\nNone', 'Hi Alice\\nHi Alice', 'Hi Alice', 'None'],
          correctIndex: 0,
          explanation: 'greet() prints "Hi Alice" and has no return, so it implicitly returns None. print(result) then prints None.',
        },
        {
          type: 'mcq',
          question: 'What is the difference between print() and return?',
          options: [
            'They are the same thing',
            'print() displays output; return sends a value back to the caller',
            'return displays output; print sends a value back',
            'print() is faster',
          ],
          correctIndex: 1,
          explanation: 'print() writes to the screen (side effect). return gives a value back to where the function was called, allowing further computation with that value.',
        },
        {
          type: 'predict-output',
          code: 'def first_even(nums):\n    for n in nums:\n        if n % 2 == 0:\n            return n\n    return -1\n\nprint(first_even([1, 3, 4, 6, 8]))',
          options: ['1', '4', '[4, 6, 8]', '-1'],
          correctIndex: 1,
          explanation: 'The function returns the FIRST even number it finds. 1 is odd, 3 is odd, 4 is even → return 4 immediately.',
        },
      ],
    },
  },

  // ═══════════════════════════════════════
  // Section 11: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  {
    type: 'qna',
    challenge: {
      id: 'challenge-functions',
      title: 'Password Strength Checker',
      difficulty: 'medium',
      description: 'Write a function `check_password(password)` that returns a strength rating: "Weak" (< 8 chars), "Medium" (8+ chars with letters and digits), "Strong" (8+ chars with upper, lower, digits, and special characters).',
      starterCode: 'def check_password(password):\n    """Check password strength."""\n    if len(password) < 8:\n        return "Weak"\n    \n    has_upper = any(c.isupper() for c in password)\n    has_lower = any(c.islower() for c in password)\n    has_digit = any(c.isdigit() for c in password)\n    has_special = any(not c.isalnum() for c in password)\n    \n    if has_upper and has_lower and has_digit and has_special:\n        return "Strong"\n    elif has_digit and (has_upper or has_lower):\n        return "Medium"\n    else:\n        return "Weak"\n\n# Test it\ntests = ["hi", "password", "Pass1234", "P@ss1234!", "12345678"]\nfor pw in tests:\n    strength = check_password(pw)\n    print(f"  {pw:15s} → {strength}")',
      testCases: [
        { input: '', expected: '  hi              → Weak\n  password        → Weak\n  Pass1234        → Medium\n  P@ss1234!       → Strong\n  12345678        → Weak' },
      ],
      hints: [
        'Use len() to check length',
        'Use any() with generator expressions to check character types',
        'str.isupper(), str.islower(), str.isdigit(), str.isalnum() are helpful',
      ],
      solution: 'def check_password(password):\n    if len(password) < 8:\n        return "Weak"\n    has_upper = any(c.isupper() for c in password)\n    has_lower = any(c.islower() for c in password)\n    has_digit = any(c.isdigit() for c in password)\n    has_special = any(not c.isalnum() for c in password)\n    if has_upper and has_lower and has_digit and has_special:\n        return "Strong"\n    elif has_digit and (has_upper or has_lower):\n        return "Medium"\n    else:\n        return "Weak"\ntests = ["hi", "password", "Pass1234", "P@ss1234!", "12345678"]\nfor pw in tests:\n    print(f"  {pw:15s} → {check_password(pw)}")',
    },
  },
]

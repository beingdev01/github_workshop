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

  // Assignment Bridge: Polynomial and Binary Conversion
  { type: 'heading', level: 2, text: 'Assignment Bridge: Polynomial & Binary Problems' },
  {
    type: 'text',
    content: 'Week-style function questions often ask for polynomial evaluation, integer root search in a range, and binary-to-decimal conversion. These are excellent drills for loops, indexing, and function decomposition.',
  },
  {
    type: 'code',
    code: 'def poly(coeffs, x0):\n    """Evaluate a0 + a1*x0 + a2*x0^2 + ... using Horner form."""\n    result = 0\n    for a in reversed(coeffs):\n        result = result * x0 + a\n    return result\n\ndef poly_zeros(coeffs, a, b):\n    """Return all integer zeros in [a, b], inclusive."""\n    zeros = []\n    for x in range(a, b + 1):\n        if poly(coeffs, x) == 0:\n            zeros.append(x)\n    return zeros\n\nprint(poly([1, 2, 3], 5))            # 86\nprint(poly_zeros([2, -3, 1], 0, 4))  # [1, 2]\n\ndef bin_to_dec(bits):\n    """Convert binary string like "1011" to decimal integer."""\n    value = 0\n    for ch in bits:\n        value = value * 2 + int(ch)\n    return value\n\nprint(bin_to_dec("1011"))            # 11\nprint(bin_to_dec("100000"))          # 32',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Why Horner Form?',
    content: 'Directly computing powers (`x**k`) works, but Horner form is cleaner and faster: it evaluates a degree-n polynomial in O(n) multiplications with minimal temporary values.',
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
  // Going Deeper: Scope, First-Class Functions, Recursion
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — Scope, Closures, Recursion' },

  {
    type: 'heading', level: 2, text: 'The LEGB Rule — How Python Resolves Names' },
  {
    type: 'text',
    content: 'When Python meets a name inside a function, it searches in this order:',
  },
  {
    type: 'list',
    items: [
      '**L — Local**: names defined inside the current function.',
      '**E — Enclosing**: names in any enclosing function (for nested funcs).',
      '**G — Global**: names at the module/file level.',
      '**B — Built-in**: names like `print`, `len`, `range`.',
    ],
  },
  {
    type: 'code',
    code: 'x = "global"\n\ndef outer():\n    x = "enclosing"\n    def inner():\n        x = "local"\n        print(x)          # local\n    inner()\n    print(x)              # enclosing\n\nouter()\nprint(x)                  # global',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'The Assignment Rule',
    content: 'Any `x = ...` **inside** a function creates a new **local** variable — shadowing the outer name. To modify an outer variable, declare it `global` or `nonlocal` first.',
  },

  {
    type: 'heading', level: 2, text: 'global and nonlocal' },
  {
    type: 'code',
    code: 'count = 0\n\ndef bump():\n    global count        # without this, you\'d get UnboundLocalError\n    count += 1\n\ndef make_counter():\n    n = 0\n    def tick():\n        nonlocal n      # refer to n in the enclosing function\n        n += 1\n        return n\n    return tick\n\nc = make_counter()\nprint(c(), c(), c())   # 1 2 3',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Functions Are First-Class Objects' },
  {
    type: 'code',
    code: 'def double(x): return x * 2\ndef triple(x): return x * 3\n\nops = [double, triple]\nprint([op(5) for op in ops])   # [10, 15]\n\ndef apply(f, x):\n    return f(x)\nprint(apply(double, 7))        # 14\n\ndef make_multiplier(k):\n    def multiply(x):\n        return x * k\n    return multiply\n\ntimes10 = make_multiplier(10)\nprint(times10(4))              # 40',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Recursion — Functions Calling Themselves' },
  {
    type: 'text',
    content: 'A **recursive** function calls itself on a smaller version of the problem. Every recursion needs two pieces: a **base case** (when to stop) and a **recursive case** (how to reduce).',
  },
  {
    type: 'code',
    code: 'def factorial(n):\n    if n <= 1:              # base case\n        return 1\n    return n * factorial(n - 1)   # recursive case\n\nprint(factorial(5))         # 120\n\ndef fib(n):\n    if n < 2: return n\n    return fib(n - 1) + fib(n - 2)\n\ndef deep_sum(items):\n    total = 0\n    for x in items:\n        if isinstance(x, list):\n            total += deep_sum(x)\n        else:\n            total += x\n    return total\n\nprint(deep_sum([1, [2, [3, 4]], 5]))   # 15',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Recursion Limit',
    content: 'CPython caps recursion at ~1000 calls by default (`sys.getrecursionlimit()`). Deep recursion blows the stack. Python has no tail-call optimization — convert deep recursion to iteration, or use `functools.lru_cache` for repeated subproblems.',
  },
  {
    type: 'code',
    code: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2: return n\n    return fib(n - 1) + fib(n - 2)\n\nprint(fib(100))   # instant — cached subproblems',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Runtime Call Frames and Name Resolution' },
  {
    type: 'text',
    content: 'Each function call creates a new frame object that holds local bindings, argument references, and links to enclosing/global scopes. Returning pops that frame from the stack.',
  },
  {
    type: 'code',
    code: 'x = 10\n\ndef add_to_x(y):\n    z = x + y\n    return z\n\nout = add_to_x(5)\nprint(out)  # 15',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Global Scope Plus Function Frame',
    description: 'The frame for add_to_x has local names y and z, while x is resolved from global scope.',
    bindings: [
      { scope: 'global', name: 'x', objectId: 'I10' },
      { scope: 'global', name: 'add_to_x', objectId: 'F_ADD' },
      { scope: 'frame:add_to_x', name: 'y', objectId: 'I5' },
      { scope: 'frame:add_to_x', name: 'z', objectId: 'I15' },
      { scope: 'global', name: 'out', objectId: 'I15' },
    ],
    objects: [
      { id: 'I10', type: 'int', value: '10', mutable: false, accent: 'amber' },
      { id: 'F_ADD', type: 'function', value: '<function add_to_x(y)>', mutable: false, accent: 'sky' },
      { id: 'I5', type: 'int', value: '5', mutable: false, accent: 'mint' },
      { id: 'I15', type: 'int', value: '15', mutable: false, accent: 'neutral' },
    ],
    insights: [
      'Local names live only inside the active call frame.',
      'Name lookup follows LEGB order when a local name is missing.',
      'Returned values are rebound in caller scope after frame teardown.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Call Stack Through a Recursive Function',
    prompt: 'Track frame creation and destruction in factorial recursion.',
    steps: [
      {
        title: 'Initial Call',
        action: 'Invoke factorial(3)',
        code: 'factorial(3)',
        bindings: [
          { scope: 'frame:factorial#1', name: 'n', objectId: 'I3' },
        ],
        objects: [
          { id: 'I3', type: 'int', value: '3', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: 'First frame is pushed with n=3 and is waiting for factorial(2).',
      },
      {
        title: 'Second Frame',
        action: 'Recursive call factorial(2)',
        code: 'factorial(2)',
        bindings: [
          { scope: 'frame:factorial#1', name: 'n', objectId: 'I3' },
          { scope: 'frame:factorial#2', name: 'n', objectId: 'I2' },
        ],
        objects: [
          { id: 'I3', type: 'int', value: '3', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I2', type: 'int', value: '2', mutable: false, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Recursive calls create independent frames, each with its own local n.',
      },
      {
        title: 'Base Case Frame',
        action: 'Recursive call factorial(1)',
        code: 'factorial(1)  # returns 1',
        bindings: [
          { scope: 'frame:factorial#3', name: 'n', objectId: 'I1' },
          { scope: 'frame:factorial#3', name: 'return', objectId: 'I1' },
        ],
        objects: [
          { id: 'I1', type: 'int', value: '1', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: 'Base case returns immediately and starts stack unwinding.',
      },
      {
        title: 'Unwind and Final Result',
        action: 'Frames return upward',
        code: 'factorial(2)=2*1, factorial(3)=3*2',
        bindings: [
          { scope: 'global', name: 'result', objectId: 'I6' },
        ],
        objects: [
          { id: 'I6', type: 'int', value: '6', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: 'Each returning frame multiplies by its local n, then is removed from the call stack.',
      },
    ],
  },

  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Why does modifying `x` inside a function sometimes raise `UnboundLocalError`?',
        answer: 'Because assigning to `x` anywhere in the function makes Python treat `x` as local for the **entire** function. To modify an outer variable, declare it `global` or `nonlocal` first.',
      },
      {
        question: 'What\'s the difference between `global` and `nonlocal`?',
        answer: '`global` refers to the **module-level** name. `nonlocal` refers to the **nearest enclosing function\'s** name. Use `nonlocal` for nested functions.',
      },
      {
        question: 'Does Python pass arguments by value or by reference?',
        answer: 'Neither classically — Python uses "**pass-by-object-reference**." The function receives the **same object** the caller has. Mutating it is visible outside; rebinding is not.',
      },
      {
        question: 'Why does `def f(x=[]): x.append(1); return x` misbehave?',
        answer: 'The default `[]` is evaluated **once**, at function definition. Every call without `x` reuses the **same list**. Use `None` as a sentinel and create the list inside.',
      },
      {
        question: 'What\'s the base case in recursion?',
        answer: 'The simplest input where the function answers directly **without** recursing. Without one, you get infinite recursion → `RecursionError`.',
      },
    ],
  },
]

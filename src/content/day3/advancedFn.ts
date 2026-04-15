import type { ContentBlock } from '@/types/content'

export const day3AdvancedFn: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Advanced Function Concepts' },
  {
    type: 'text',
    content: 'Now that you understand basic functions, let\'s explore Python\'s more powerful function features: **lambda expressions**, **recursion**, **higher-order functions**, and **flexible arguments**. These concepts take your functions from simple tools to sophisticated building blocks.',
  },

  // ═══════════════════════════════════════
  // Section 2: Lambda Functions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Lambda Functions (Anonymous Functions)' },
  {
    type: 'code',
    code: '# Lambda: a one-line anonymous function\n# Syntax: lambda parameters: expression\n\nsquare = lambda x: x ** 2\nprint(square(5))        # 25\n\nadd = lambda a, b: a + b\nprint(add(3, 4))        # 7\n\n# Lambda is equivalent to:\ndef square_regular(x):\n    return x ** 2\n\n# Lambdas are most useful as arguments to other functions\nnumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]\n\n# Sort by absolute distance from 5\nsorted_nums = sorted(numbers, key=lambda x: abs(x - 5))\nprint(sorted_nums)  # [5, 5, 4, 6, 3, 2, 9, 1, 1]\n\n# Sort strings by length\nwords = ["python", "is", "a", "wonderful", "language"]\nprint(sorted(words, key=lambda w: len(w)))\n# [\'a\', \'is\', \'python\', \'language\', \'wonderful\']\n\n# Sort tuples by second element\nstudents = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]\nprint(sorted(students, key=lambda s: s[1], reverse=True))\n# [(\'Bob\', 92), (\'Alice\', 85), (\'Charlie\', 78)]',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'When to Use Lambda vs def',
    content: 'Use **lambda** for short, one-off functions (especially as arguments to `sorted()`, `map()`, `filter()`).\nUse **def** for anything more than a single expression, or when the function needs a name for clarity.\n\nLambdas can only contain a single expression — no statements, no assignments, no multiple lines.',
  },

  // ═══════════════════════════════════════
  // Section 3: *args and **kwargs
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: '*args and **kwargs — Flexible Arguments' },
  {
    type: 'code',
    code: '# *args: accept any number of positional arguments\ndef my_sum(*args):\n    """Sum any number of values."""\n    print(f"args = {args}")        # It\'s a tuple!\n    total = 0\n    for n in args:\n        total += n\n    return total\n\nprint(my_sum(1, 2, 3))          # args = (1, 2, 3) → 6\nprint(my_sum(10, 20, 30, 40))   # args = (10, 20, 30, 40) → 100\nprint(my_sum())                 # args = () → 0\n\n# **kwargs: accept any number of keyword arguments\ndef describe(**kwargs):\n    """Describe something using keyword arguments."""\n    print(f"kwargs = {kwargs}")    # It\'s a dict!\n    for key, value in kwargs.items():\n        print(f"  {key}: {value}")\n\ndescribe(name="Python", version=3.12, creator="Guido")\n# kwargs = {\'name\': \'Python\', \'version\': 3.12, \'creator\': \'Guido\'}\n#   name: Python\n#   version: 3.12\n#   creator: Guido\n\n# Combining regular, *args, and **kwargs\ndef super_func(required, *args, **kwargs):\n    print(f"Required: {required}")\n    print(f"Extra positional: {args}")\n    print(f"Extra keyword: {kwargs}")\n\nsuper_func("hello", 1, 2, 3, color="red", size="large")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Higher-Order Functions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Higher-Order Functions: map, filter, reduce' },
  {
    type: 'text',
    content: 'Functions that take other functions as arguments are called **higher-order functions**. Python has several built-in ones:',
  },
  {
    type: 'code',
    code: '# map() — apply a function to every element\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)    # [1, 4, 9, 16, 25]\n\n# Same as: [x**2 for x in numbers]  (list comprehension — usually preferred)\n\n# filter() — keep elements where function returns True\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)       # [2, 4, 6, 8, 10]\n\n# Same as: [x for x in numbers if x % 2 == 0]\n\n# Combining map and filter\nresult = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers)))\nprint(result)     # [4, 16, 36, 64, 100]\n\n# Same as: [x**2 for x in numbers if x % 2 == 0]  (cleaner!)\n\n# Using functions as arguments (passing functions around)\ndef apply_operation(numbers, operation):\n    return [operation(n) for n in numbers]\n\nresult = apply_operation([1, 2, 3, 4], lambda x: x * 3)\nprint(result)     # [3, 6, 9, 12]',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'List Comprehensions vs map/filter',
    content: 'Python developers generally prefer **list comprehensions** over `map()` and `filter()` because they\'re more readable:\n\n`list(map(lambda x: x**2, nums))` → `[x**2 for x in nums]`\n`list(filter(lambda x: x > 0, nums))` → `[x for x in nums if x > 0]`\n\nBut knowing `map()` and `filter()` is still valuable — you\'ll see them in existing code.',
  },

  // ═══════════════════════════════════════
  // Section 5: Recursion
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Recursion — Functions that Call Themselves' },
  {
    type: 'code',
    code: '# Recursion: a function that calls itself\ndef factorial(n):\n    """Calculate n! recursively."""\n    if n <= 1:          # Base case: stop recursion\n        return 1\n    return n * factorial(n - 1)  # Recursive case\n\nprint(factorial(5))   # 5 * 4 * 3 * 2 * 1 = 120\nprint(factorial(10))  # 3628800\n\n# How it works (unwinding):\n# factorial(5) = 5 * factorial(4)\n#              = 5 * 4 * factorial(3)\n#              = 5 * 4 * 3 * factorial(2)\n#              = 5 * 4 * 3 * 2 * factorial(1)\n#              = 5 * 4 * 3 * 2 * 1\n#              = 120\n\n# Fibonacci (classic recursion example — but slow!)\ndef fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)\n\nfor i in range(10):\n    print(fib(i), end=" ")\nprint()  # 0 1 1 2 3 5 8 13 21 34\n\n# Sum of digits (recursive)\ndef digit_sum(n):\n    if n < 10:\n        return n\n    return n % 10 + digit_sum(n // 10)\n\nprint(digit_sum(12345))  # 15',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Every Recursion Needs a Base Case!',
    content: 'Without a **base case** (the condition that stops recursion), you get infinite recursion → `RecursionError: maximum recursion depth exceeded`. Python limits recursion to ~1000 calls by default. For deep recursion, loops are often better.',
  },

  // ═══════════════════════════════════════
  // Section 6: List Comprehensions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'List Comprehensions — Concise List Building' },
  {
    type: 'code',
    code: '# List comprehension: [expression for item in iterable]\nsquares = [x**2 for x in range(1, 6)]\nprint(squares)    # [1, 4, 9, 16, 25]\n\n# With condition: [expression for item in iterable if condition]\nevens = [x for x in range(20) if x % 2 == 0]\nprint(evens)      # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n\n# Transform and filter\nnames = ["Alice", "bob", "CHARLIE", "diana"]\ncapitalized = [name.capitalize() for name in names if len(name) > 3]\nprint(capitalized)  # [\'Alice\', \'Charlie\', \'Diana\']\n\n# Nested comprehension (flattening)\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflat = [num for row in matrix for num in row]\nprint(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# Dictionary comprehension\nword = "mississippi"\nfreq = {char: word.count(char) for char in set(word)}\nprint(freq)  # {\'m\': 1, \'i\': 4, \'s\': 4, \'p\': 2}\n\n# Set comprehension\nnums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]\nunique_squares = {x**2 for x in nums}\nprint(unique_squares)  # {1, 4, 9, 16}',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Functions as First-Class Objects
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Functions Are Objects' },
  {
    type: 'code',
    code: '# In Python, functions are "first-class objects"\n# They can be assigned to variables, passed as arguments, returned\n\ndef greet(name):\n    return f"Hello, {name}!"\n\n# Assign function to a variable\nsay_hi = greet\nprint(say_hi("World"))  # Hello, World!\n\n# Store functions in a data structure\ndef add(a, b): return a + b\ndef sub(a, b): return a - b\ndef mul(a, b): return a * b\n\noperations = {\n    "+": add,\n    "-": sub,\n    "*": mul,\n}\n\n# Use the dictionary to dispatch\nop = "+"\nresult = operations[op](10, 3)\nprint(f"10 {op} 3 = {result}")  # 10 + 3 = 13\n\n# Function that returns a function (closure)\ndef make_multiplier(factor):\n    def multiply(n):\n        return n * factor\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))   # 10\nprint(triple(5))   # 15',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Explore advanced function concepts!\n\n# 1. Lambda with sorting\nstudents = [\n    ("Alice", 85, "Math"),\n    ("Bob", 92, "Science"),\n    ("Charlie", 78, "Math"),\n    ("Diana", 95, "Science"),\n]\n\n# Sort by score descending\nby_score = sorted(students, key=lambda s: s[1], reverse=True)\nprint("By score:", [f"{s[0]}:{s[1]}" for s in by_score])\n\n# 2. *args example\ndef average(*args):\n    if not args:\n        return 0\n    return sum(args) / len(args)\n\nprint(f"\\nAverage: {average(85, 92, 78, 95):.1f}")\n\n# 3. List comprehension power\nnums = range(1, 21)\nfizzbuzz = [\n    "FizzBuzz" if n % 15 == 0\n    else "Fizz" if n % 3 == 0\n    else "Buzz" if n % 5 == 0\n    else str(n)\n    for n in nums\n]\nprint(f"\\nFizzBuzz: {\\", \\".join(fizzbuzz)}")\n\n# 4. Recursive power\ndef power(base, exp):\n    if exp == 0:\n        return 1\n    return base * power(base, exp - 1)\n\nprint(f"\\n2^10 = {power(2, 10)}")',
    instructions: 'Try writing a recursive function to reverse a string, or create a function factory.',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Closures, Decorators, Lambda
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — Closures & Decorators' },

  {
    type: 'heading', level: 2, text: 'Closures — Functions That Remember' },
  {
    type: 'text',
    content: 'A **closure** is a function that "remembers" variables from the scope where it was *created* — even after that scope has returned. This is how you attach state to a function without using a class.',
  },
  {
    type: 'code',
    code: 'def make_counter():\n    n = 0\n    def tick():\n        nonlocal n\n        n += 1\n        return n\n    return tick\n\nc1 = make_counter()\nc2 = make_counter()       # independent counter, fresh n\n\nprint(c1(), c1(), c1())   # 1 2 3\nprint(c2())               # 1  — c2 is its own closure\n\nprint(c1.__closure__[0].cell_contents)   # 3 — the n it closed over',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Closure = Function + Environment',
    content: 'Every inner function carries a hidden reference to the "cells" holding its free variables. Those cells keep the outer scope\'s variables alive *even after* the outer function has returned.',
  },

  {
    type: 'heading', level: 2, text: 'Decorators — Wrapping Functions' },
  {
    type: 'text',
    content: 'A **decorator** is a function that takes a function and returns a new function. The `@decorator` syntax is pure sugar: `@d\\ndef f(): ...` is exactly `f = d(f)`.',
  },
  {
    type: 'code',
    code: 'import time\nfrom functools import wraps\n\ndef timed(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        t0 = time.perf_counter()\n        result = fn(*args, **kwargs)\n        print(f"{fn.__name__} took {time.perf_counter() - t0:.4f}s")\n        return result\n    return wrapper\n\n@timed\ndef compute(n):\n    return sum(i * i for i in range(n))\n\ncompute(1_000_000)',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Decorators with Arguments' },
  {
    type: 'code',
    code: 'from functools import wraps\n\ndef repeat(times):\n    def decorator(fn):\n        @wraps(fn)\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = fn(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(times=3)\ndef greet(name):\n    print(f"Hi, {name}!")\n\ngreet("Alice")',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Lambda — Anonymous Functions' },
  {
    type: 'code',
    code: 'words = ["apple", "banana", "cherry"]\nprint(sorted(words, key=lambda w: w[-1]))   # by last letter\n\nprint(list(filter(lambda x: x % 2 == 0, range(10))))\n\nfrom functools import reduce\nprint(reduce(lambda a, b: a + b, [1, 2, 3, 4]))   # 10',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Don\'t Over-Use lambda',
    content: '`lambda` bodies are limited to a single expression — no statements. If your lambda needs a comment, use `def`. If it\'s >30 characters, use `def`.',
  },

  {
    type: 'heading', level: 2, text: 'map, filter, reduce' },
  {
    type: 'code',
    code: 'nums = [1, 2, 3, 4, 5]\n\nlist(map(lambda x: x * x, nums))       # [1, 4, 9, 16, 25]\nlist(filter(lambda x: x % 2, nums))    # [1, 3, 5]\n\nfrom functools import reduce\nreduce(lambda a, b: a + b, nums)       # 15\n\n# Python-idiomatic equivalents\n[x * x for x in nums]        # comprehension beats map + lambda\nsum(nums)                    # beats reduce',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Memory Model of Closures and Decorators' },
  {
    type: 'text',
    content: 'Closures and decorators work because function objects can carry references to captured variables and wrapped callables. The runtime stores these links explicitly in closure cells.',
  },
  {
    type: 'code',
    code: 'def make_counter():\n    n = 0\n    def tick():\n        nonlocal n\n        n += 1\n        return n\n    return tick\n\ncounter = make_counter()\nprint(counter())  # 1\nprint(counter())  # 2',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Closure Function Plus Captured Cell',
    description: 'The inner function object keeps a reference to a cell that stores captured state.',
    bindings: [
      { scope: 'global', name: 'counter', objectId: 'F_TICK' },
      { scope: 'frame:tick', name: 'n', objectId: 'CELL_N' },
      { scope: 'runtime', name: 'freevars', objectId: 'CELL_N' },
    ],
    objects: [
      {
        id: 'F_TICK',
        type: 'function',
        value: '<function tick()>',
        mutable: false,
        note: 'Carries closure metadata linking to captured cells.',
        accent: 'sky',
      },
      {
        id: 'CELL_N',
        type: 'cell',
        value: 'n = 2',
        mutable: true,
        note: 'State survives after make_counter() returns.',
        accent: 'mint',
      },
    ],
    insights: [
      'Closures persist state without global variables or classes.',
      'nonlocal writes into the captured cell, not a new local binding.',
      'Each factory call creates independent cells and independent state.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Closure State Through Calls',
    prompt: 'Track how repeated function calls update a captured variable.',
    steps: [
      {
        title: 'Factory Creates Cell',
        action: 'Run counter factory',
        code: 'counter = make_counter()',
        bindings: [
          { scope: 'global', name: 'counter', objectId: 'F_TICK' },
        ],
        objects: [
          { id: 'F_TICK', type: 'function', value: '<function tick()>', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'CELL_N', type: 'cell', value: 'n = 0', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Factory returns a function that keeps access to a private state cell.',
      },
      {
        title: 'First Call',
        action: 'Invoke counter once',
        code: 'counter()  # 1',
        bindings: [
          { scope: 'global', name: 'counter', objectId: 'F_TICK' },
          { scope: 'frame:tick', name: 'n', objectId: 'CELL_N' },
        ],
        objects: [
          { id: 'CELL_N', type: 'cell', value: 'n = 1', mutable: true, refCount: 1, accent: 'mint' },
        ],
        explanation: 'nonlocal increments the captured cell value from 0 to 1.',
      },
      {
        title: 'Second Call',
        action: 'Invoke counter again',
        code: 'counter()  # 2',
        bindings: [
          { scope: 'global', name: 'counter', objectId: 'F_TICK' },
          { scope: 'frame:tick', name: 'n', objectId: 'CELL_N' },
        ],
        objects: [
          { id: 'CELL_N', type: 'cell', value: 'n = 2', mutable: true, refCount: 1, accent: 'mint' },
        ],
        explanation: 'State is preserved between calls because it is stored outside transient call frames.',
      },
      {
        title: 'Independent Closure',
        action: 'Create another counter',
        code: 'counter2 = make_counter(); counter2()  # 1',
        bindings: [
          { scope: 'global', name: 'counter', objectId: 'F_TICK' },
          { scope: 'global', name: 'counter2', objectId: 'F_TICK2' },
        ],
        objects: [
          { id: 'CELL_N', type: 'cell', value: 'n = 2', mutable: true, refCount: 1, accent: 'amber' },
          { id: 'CELL_N2', type: 'cell', value: 'n = 1', mutable: true, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Each closure has its own captured cell; state does not leak across instances.',
      },
    ],
  },

  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What\'s a closure, really?',
        answer: 'An inner function plus the **variables** it captured from its enclosing scope. Python stores these in hidden "cell" objects attached to the function, keeping the outer scope\'s variables alive even after the outer function returns.',
      },
      {
        question: 'What does `@decorator` actually do?',
        answer: 'Pure syntactic sugar. `@d\\ndef f(): ...` is exactly `def f(): ...; f = d(f)`.',
      },
      {
        question: 'Why use `@functools.wraps`?',
        answer: 'Without it, the wrapped function loses its `__name__`, `__doc__`, `__wrapped__` — docs and debuggers break. `@wraps(fn)` copies those attributes from the original onto the wrapper.',
      },
      {
        question: 'When should I use lambda vs def?',
        answer: '**lambda**: one short expression passed inline. **def**: anything with multiple steps, a name, or a docstring.',
      },
      {
        question: 'Is `map(f, xs)` faster than `[f(x) for x in xs]`?',
        answer: 'Usually a tiny bit faster for built-in functions, roughly tied for lambdas. Comprehensions are almost always preferred for readability.',
      },
    ],
  },
]

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
  // Section 9: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  

  // ═══════════════════════════════════════
  // Section 10: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  
]

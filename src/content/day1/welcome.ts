import type { ContentBlock } from '@/types/content'

export const day1Welcome: ContentBlock[] = [
  { type: 'heading', level: 1, text: 'Welcome to Python! 🐍' },
  {
    type: 'text',
    content: 'Python is a powerful, readable programming language used for everything from web development to data science and AI. In this workshop, you\'ll learn how to write real, working Python code right in your browser.',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Why Python?',
    content: 'Created by **Guido van Rossum** in 1991, Python was designed to be simple and readable. Its syntax reads almost like English. Companies like **Google, Netflix, Instagram, and NASA** all rely on Python.',
  },
  { type: 'heading', level: 2, text: 'Your First Program' },
  {
    type: 'text',
    content: 'Let\'s start by displaying text on the screen. In Python, this takes just one line:',
  },
  {
    type: 'code',
    code: 'print("Hello, World!")',
    language: 'python',
  },
  {
    type: 'text',
    content: 'The `print()` function takes whatever you put inside its parentheses and displays it. The text inside the quotes is called a **string**.',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Common Mistake',
    content: 'Always include the parentheses `()` after `print`. Writing `print "Hello"` causes a **SyntaxError** in Python 3.',
  },
  {
    type: 'playground',
    defaultCode: '# Try changing the message below:\nprint("Hello, World!")\n\n# Try printing with emojis:\nprint("Python is awesome! \\N{snake}")',
    instructions: 'Modify the messages and add more print statements. Experiment with different text and numbers.',
  },
  { type: 'heading', level: 2, text: 'The print() Function' },
  {
    type: 'text',
    content: '`print()` can display different types of data: text, numbers, calculations, and multiple values at once.',
  },
  {
    type: 'code',
    code: '# Printing text (strings)\nprint("My name is Python")\n\n# Printing numbers\nprint(42)\nprint(3.14159)\n\n# Printing calculations\nprint(2 + 3)\n\n# Printing multiple values (separated by spaces automatically)\nprint("Age:", 25)\nprint("Name:", "Alice", "| Score:", 95)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Multiple Values in print()',
    content: 'When you pass multiple values to `print()` separated by commas, Python automatically adds a **space** between them. You can change this using the `sep` parameter: `print("a", "b", "c", sep="-")` outputs `a-b-c`.',
  },
  {
    type: 'text',
    content: 'By default, `print()` adds a newline character (`\\n`) at the end. You can change this with the `end` parameter:',
  },
  {
    type: 'code',
    code: '# Default behavior\nprint("Line 1")\nprint("Line 2")\n\n# Using end parameter\nprint("Hello", end=" ")\nprint("World")  # Output: Hello World\n\n# Using sep and end together\nprint("Python", "is", "fun", sep="~", end="!!!\\n")',
    language: 'python',
  },
  {
    type: 'playground',
    defaultCode: 'print("Python", "is", "fun!")\n\n# Try changing the separator\nprint("2024", "01", "15", sep="-")\n\n# Try changing the end character\nprint("Loading", end="...")\nprint("Done!")',
    instructions: 'Experiment with the sep and end parameters.',
  },
  { type: 'heading', level: 2, text: 'Literals and Expressions' },
  {
    type: 'text',
    content: 'A **literal** is a fixed value written directly in your code (like `42` or `"hello"`). An **expression** combines literals with operators to produce a new value.',
  },
  {
    type: 'code',
    code: '# Literals\nprint(42)\nprint("hello")\n\n# Expressions\nprint(2 + 3)\nprint("ha" * 3)',
    language: 'python',
  },
  { type: 'heading', level: 2, text: 'Comments' },
  {
    type: 'text',
    content: 'Comments are notes in your code that Python ignores. They explain *what* the code does and *why*.',
  },
  {
    type: 'code',
    code: '# This is a single-line comment\nprint("This runs!")  # Inline comment\n\n# You can use comments to:\n# 1. Explain logic\n# 2. Temporarily disable code\n\n# print("This won\'t run")\n\n"""\nThis is a multi-line comment.\nUseful for longer explanations.\n"""',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Comment Best Practices',
    content: 'Don\'t comment *what* the code does if it\'s obvious. Instead, comment *why*. Bad: `x = x + 1  # increment x by 1`. Good: `x = x + 1  # account for zero-based indexing`. Comments should add understanding, not just repeat the code.',
  },
  { type: 'heading', level: 2, text: 'Errors Are Your Friends' },
  {
    type: 'text',
    content: 'When Python encounters something it doesn\'t understand, it raises an **error** (also called an **exception**). Don\'t panic when you see errors — they are Python\'s way of telling you exactly what went wrong and where. There are two main categories:',
  },
  {
    type: 'list',
    items: [
      '**SyntaxError** — Your code violates Python\'s grammar rules (like a missing quote or parenthesis). Python catches these *before* running your code.',
      '**Runtime Errors (Exceptions)** — Your code has valid syntax but something goes wrong during execution. Common ones: `NameError` (undefined variable), `TypeError` (wrong operation on a type), `ZeroDivisionError` (dividing by zero).',
    ],
  },
  {
    type: 'code',
    code: '# SyntaxError — missing closing quote\n# print("Hello)\n\n# NameError — using a variable that doesn\'t exist\n# print(greeting)\n\n# TypeError — can\'t add string and number directly\n# print("age: " + 25)\n\n# ZeroDivisionError\n# print(10 / 0)\n\n# The correct approaches:\nprint("Hello")\nprint("age: " + str(25))    # Convert number to string first\nprint("age:", 25)            # Or let print() handle it',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Debugging Process',
    content: 'When you encounter an error, follow this process: **1) Read** the error message carefully (Python tells you the line number and error type). **2) Understand** what went wrong. **3) Fix** the issue. **4) Test** again. Error messages are not your enemy — they are detailed diagnostic tools!',
  },
  
  
]

import type { ContentBlock } from '@/types/content'

export const day1IO: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Input & Output' },
  {
    type: 'text',
    content: 'The `print()` and `input()` functions are how your program communicates. `print()` sends data out to the user, while `input()` brings data in.',
  },

  // ═══════════════════════════════════════
  // Section 2: print() in Depth
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The print() Function' },
  {
    type: 'text',
    content: '`print()` displays output to the console. You can pass it multiple values, and it will separate them with spaces by default:',
  },
  {
    type: 'code',
    code: '# Basic printing\nprint("Hello, World!")          # Hello, World!\nprint(42)                       # 42\n\n# Printing multiple values\nprint("Name:", "Alice", "Age:", 25)   # Name: Alice Age: 25\n\n# Empty print() creates a blank line\nprint()',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'print() is a Function',
    content: 'In Python 3, `print` is a function and requires parentheses: `print("hello")`. If you forget them, you\'ll get a `SyntaxError`.',
  },

  { type: 'heading', level: 3, text: 'The sep Parameter' },
  {
    type: 'text',
    content: 'The `sep` parameter changes the separator between multiple values (default is a space):',
  },
  {
    type: 'code',
    code: 'print("Python", "is", "great", sep="-")     # Python-is-great\nprint("Python", "is", "great", sep=", ")    # Python, is, great\nprint("Python", "is", "great", sep="")      # Pythonisgreat\n\n# Practical: format a date\nday, month, year = 27, 2, 2026\nprint(day, month, year, sep="/")    # 27/2/2026',
    language: 'python',
  },

  { type: 'heading', level: 3, text: 'The end Parameter' },
  {
    type: 'text',
    content: 'The `end` parameter changes what is printed at the very end (default is a newline `\\n`):',
  },
  {
    type: 'code',
    code: '# Custom end: print on the same line\nprint("Hello", end=" ")    # No newline, just a space\nprint("World")             # Output: Hello World\n\n# Building output in a loop\nfor i in range(5):\n    print(i, end=" ")      # 0 1 2 3 4\nprint()                    # Move to next line',
    language: 'python',
  },

  { type: 'heading', level: 3, text: 'Combining sep and end' },
  {
    type: 'text',
    content: 'You can use both `sep` and `end` together for precise control:',
  },
  {
    type: 'code',
    code: '# Print a pattern: |1,2,3|4,5,6|7,8,9|\nprint("|", end="")\nfor i in range(1, 10, 3):\n    print(i, i + 1, i + 2, sep=",", end="|")\nprint()  # Move to next line',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: f-strings
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'f-strings (Formatted Strings)' },
  {
    type: 'text',
    content: '**f-strings** are the modern way to embed variables and expressions inside strings. Prefix the string with `f` and put expressions inside `{}`:',
  },
  {
    type: 'code',
    code: 'name = "Alice"\nage = 30\n\n# Basic interpolation\nprint(f"My name is {name} and I am {age}")\n\n# Expressions inside f-strings\nprint(f"Next year I\'ll be {age + 1}")\nprint(f"Name in caps: {name.upper()}")',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Format Specifiers' },
  {
    type: 'text',
    content: 'Add a colon `:` inside the braces to format numbers and text:',
  },
  {
    type: 'code',
    code: 'pi = 3.14159\nprice = 42.5\nbig_number = 1234567890\n\n# Float precision\nprint(f"Pi: {pi:.2f}")              # Pi: 3.14\nprint(f"Price: ${price:.2f}")       # Price: $42.50\n\n# Number formatting\nprint(f"Big: {big_number:,}")       # Big: 1,234,567,890\n\n# Padding with zeros\nfor i in range(1, 4):\n    print(f"Item-{i:03d}")          # Item-001, Item-002, Item-003',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Format Cheat Sheet',
    content: '`:.2f` = 2 decimal places | `:,` = thousands separator | `:.1%` = percentage | `:05d` = zero-padded integer, 5 wide',
  },

  // ═══════════════════════════════════════
  // Section 4: Other Formatting Methods
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Other Formatting Methods (Historical)' },
  {
    type: 'text',
    content: 'Before f-strings, Python had other ways to format strings. You may see these in older code:',
  },
  {
    type: 'code',
    code: 'name = "Alice"\nage = 30\n\n# Method 1: String concatenation (avoid)\nprint("Hello, " + name + "! You are " + str(age) + " years old.")\n\n# Method 2: .format() method (Python 2.6+)\nprint("Hello, {}! You are {} years old.".format(name, age))\n\n# Method 3: %-formatting (oldest)\nprint("Hello, %s! You are %d years old." % (name, age))\n\n# Method 4: f-strings (Python 3.6+ — USE THIS!)\nprint(f"Hello, {name}! You are {age} years old.")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: The input() Function
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The input() Function' },
  {
    type: 'text',
    content: '`input()` pauses the program and waits for the user to type something. It always returns a **string**:',
  },
  {
    type: 'code',
    code: '# Basic input\nname = input("What is your name? ")\nprint(f"Hello, {name}!")\n\n# IMPORTANT: input() ALWAYS returns a string!\nage = input("Your age: ")\nprint(type(age))      # <class \'str\'>\n# print(age + 5)      # TypeError! Can\'t add string and int',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'input() Always Returns a String',
    content: 'Even if the user types `25`, `input()` returns the string `"25"`. You must convert it using `int()` or `float()`.',
  },

  // ═══════════════════════════════════════
  // Section 6: Type Conversion of Input
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Converting Input' },
  {
    type: 'code',
    code: '# Convert to integer\nage = int(input("Your age: "))\nprint(f"Next year you will be {age + 1}")\n\n# Convert to float\nheight = float(input("Your height (m): "))\nprint(f"Height in cm: {height * 100}")\n\n# Multiple inputs on one line\nx, y = input("Enter two numbers: ").split()\nprint(f"Sum: {int(x) + int(y)}")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Handling Bad Input',
    content: 'If you call `int(input())` and the user types "hello", Python crashes with a `ValueError`. Later, we\'ll learn how to handle this with `try/except`.',
  },

  // ═══════════════════════════════════════
  // Section 7: Common Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Common I/O Patterns' },
  {
    type: 'code',
    code: '# Pattern 1: Read-Process-Print\nradius = float(input("Enter circle radius: "))\narea = 3.14159 * radius ** 2\nprint(f"Area = {area:.2f}")\n\n# Pattern 2: Yes/No confirmation\nresponse = input("Continue? (yes/no): ").lower().strip()\nif response == "yes":\n    print("Continuing...")\nelse:\n    print("Stopping.")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Special Characters
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Escape Sequences' },
  {
    type: 'text',
    content: 'Use a backslash `\\` to represent special characters in strings:',
  },
  {
    type: 'code',
    code: 'print("Line 1\\nLine 2")       # \\n = newline\nprint("Col1\\tCol2\\tCol3")     # \\t = tab\nprint("She said \\"hello\\"")   # \\" = literal quote\nprint(\'It\\\'s Python!\')          # \\\' = literal apostrophe\nprint("Back\\\\slash")           # \\\\ = literal backslash\n\n# Multi-line strings with triple quotes (no \\n needed)\npoem = """Roses are red,\nViolets are blue"""\nprint(poem)\n\n# Raw strings (ignore escape sequences) — prefix with r\nprint(r"C:\\Users\\name\\Documents")   # Prints backslashes literally',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: I/O Memory Pipeline
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — I/O as Data Flow Through Memory' },
  {
    type: 'text',
    content: 'Input and output are not magical. `input()` pulls bytes from stdin, decodes them into a Python string, and returns that string object. `print()` takes objects, converts them to text, and writes bytes to stdout.',
  },
  {
    type: 'code',
    code: 'raw_age = input("Age? ")\nage = int(raw_age)\nprint(age + 1)',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Input String -> Parsed Integer -> Output',
    description: 'One user entry creates multiple objects across the I/O pipeline.',
    bindings: [
      { scope: 'global', name: 'raw_age', objectId: 'S27' },
      { scope: 'global', name: 'age', objectId: 'I27' },
      { scope: 'builtins', name: 'print', objectId: 'F_PRINT' },
      { scope: 'runtime', name: 'stdout', objectId: 'BUF_OUT' },
    ],
    objects: [
      {
        id: 'S27',
        type: 'str',
        value: '"27"',
        mutable: false,
        note: 'Returned by `input()` after decoding user bytes.',
        accent: 'amber',
      },
      {
        id: 'I27',
        type: 'int',
        value: '27',
        mutable: false,
        note: 'Created by `int(raw_age)` parsing the string.',
        accent: 'mint',
      },
      {
        id: 'F_PRINT',
        type: 'builtin function',
        value: '<built-in function print>',
        mutable: false,
        accent: 'sky',
      },
      {
        id: 'BUF_OUT',
        type: 'stream buffer',
        value: '"Age? 28\\n"',
        mutable: true,
        note: 'Shows prompt and printed result written to stdout.',
        accent: 'neutral',
      },
    ],
    insights: [
      '`input()` always returns a string object, even for numeric-looking text.',
      'Type conversion creates a new object; it does not change the original string.',
      'Output is a side effect on stdout, not a return value from `print()`.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: One User Input, Four Runtime Stages',
    prompt: 'Track how the same user entry becomes both a string and an integer during execution.',
    steps: [
      {
        title: 'Prompt Is Emitted',
        action: 'Start `raw_age = input("Age? ")`',
        code: 'raw_age = input("Age? ")',
        bindings: [
          { scope: 'frame:input', name: 'prompt', objectId: 'S_PROMPT' },
          { scope: 'runtime', name: 'stdin', objectId: 'BUF_IN' },
          { scope: 'runtime', name: 'stdout', objectId: 'BUF_OUT' },
        ],
        objects: [
          { id: 'S_PROMPT', type: 'str', value: '"Age? "', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'BUF_IN', type: 'stream buffer', value: '"27\\n"', mutable: true, refCount: 1, accent: 'mint' },
          { id: 'BUF_OUT', type: 'stream buffer', value: '"Age? "', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: '`input()` writes the prompt to stdout, then waits for bytes from stdin.',
      },
      {
        title: 'String Is Returned',
        action: 'User types `27` and presses Enter',
        code: 'raw_age = input("Age? ")  # "27"',
        bindings: [
          { scope: 'global', name: 'raw_age', objectId: 'S27' },
          { scope: 'runtime', name: 'stdout', objectId: 'BUF_OUT' },
        ],
        objects: [
          { id: 'S27', type: 'str', value: '"27"', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'BUF_OUT', type: 'stream buffer', value: '"Age? "', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'The newline is consumed by input processing, and Python returns a clean string object.',
      },
      {
        title: 'Parse Numeric Value',
        action: 'Run `age = int(raw_age)`',
        code: 'age = int(raw_age)',
        bindings: [
          { scope: 'global', name: 'raw_age', objectId: 'S27' },
          { scope: 'global', name: 'age', objectId: 'I27' },
        ],
        objects: [
          { id: 'S27', type: 'str', value: '"27"', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I27', type: 'int', value: '27', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: '`int()` creates a new integer object; the original text is still available in `raw_age`.',
      },
      {
        title: 'Print Computed Result',
        action: 'Run `print(age + 1)`',
        code: 'print(age + 1)',
        bindings: [
          { scope: 'global', name: 'raw_age', objectId: 'S27' },
          { scope: 'global', name: 'age', objectId: 'I27' },
          { scope: 'frame:print', name: 'value', objectId: 'I28' },
          { scope: 'runtime', name: 'stdout', objectId: 'BUF_OUT' },
        ],
        objects: [
          { id: 'S27', type: 'str', value: '"27"', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'I27', type: 'int', value: '27', mutable: false, refCount: 1, accent: 'mint' },
          { id: 'I28', type: 'int', value: '28', mutable: false, refCount: 1, accent: 'sky', note: 'Temporary result object from `age + 1`.' },
          { id: 'BUF_OUT', type: 'stream buffer', value: '"Age? 28\\n"', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'Arithmetic creates a temporary int object that is converted to text by `print` and appended to stdout.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 9: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Experiment with I/O!\n\n# 1. f-string formatting\nname = "Python"\nversion = 3.12\nprint(f"Welcome to {name} {version}!")\n\n# 2. Number formatting\npi = 3.14159265358979\nprint(f"Pi to 2 decimals: {pi:.2f}")\nprint(f"Pi to 6 decimals: {pi:.6f}")\n\n# 3. Table formatting with alignment\nprint(f"\\n{\'Item\':<15} {\'Price\':>8}")\nprint(f"{\'-\' * 24}")\nprint(f"{\'Apple\':<15} {\'$1.50\':>8}")\nprint(f"{\'Banana\':<15} {\'$0.75\':>8}")\nprint(f"{\'Cherry Pie\':<15} {\'$12.99\':>8}")\n\n# 4. sep and end\nprint("\\nCountdown:", end=" ")\nfor i in range(5, 0, -1):\n    print(i, end="...")\nprint("GO!")\n\n# 5. Percentage formatting\nscored = 42\ntotal = 50\npct = scored / total\nprint(f"\\nScore: {scored}/{total} = {pct:.1%}")',
    instructions: 'Experiment with different format specifiers. Try changing alignment, precision, and separators.',
  },

  // ═══════════════════════════════════════
  // Section 10: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What data type does the `input()` function return?',
        answer: 'The `input()` function always returns a string (str), regardless of what the user types. If you need numeric input, you must convert it: `int(input())`, `float(input())`, etc.',
      },
      {
        question: 'What does this code output?\n\n`print("A", "B", "C", sep="-", end="!")`\n`print("D")`',
        answer: '`A-B-C!D`\n\nThe `sep` parameter controls the separator between print() arguments. Default is a space, but here it\'s `"-"`. The `end` parameter replaces the newline with `"!"`. The next print continues on the same line.',
      },
      {
        question: 'What does this code output?\n\n`x = 3.14159`\n`print(f"{x:.2f}")`',
        answer: '`3.14`\n\n`:.2f` formats the float to exactly 2 decimal places, rounding as needed. 3.14159 rounded to 2 decimal places is 3.14.',
      },
      {
        question: 'How do you center-align text in a 20-character field using an f-string?\n\n`text = "Python"`\n`print(f"{text:?20}")`',
        answer: '`f"{text:^20}"`\n\nAlignment in f-strings:\n- `<` : left-align\n- `>` : right-align\n- `^` : center-align\n\nExample: `f"{text:^20}"` centers text in a 20-char field.',
      },
      {
        question: 'Which escape sequence represents a newline?',
        answer: '`\\n`\n\n`\\n` is the escape sequence for a newline. Other common ones:\n- `\\t` = tab\n- `\\\\` = backslash\n- `\\"` = double quote',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 11: Challenge Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Challenge Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Receipt Formatter: Create a formatted receipt that displays items with their prices in a neatly aligned table. Use f-string formatting to align item names to the left and prices to the right.',
        answer: '**Solution:**\n\n```python\nprint("=" * 30)\nprint(f"{\'RECEIPT\':^30}")\nprint("=" * 30)\n\nitems = [("Coffee", 4.50), ("Sandwich", 8.99), ("Cookie", 2.25)]\nfor item_name, price in items:\n    print(f"{item_name:<20} ${price:>6.2f}")\n\nprint("-" * 30)\ntotal = sum(price for _, price in items)\nprint(f"{\'TOTAL\':<20} ${total:>6.2f}")\nprint("=" * 30)\n```\n\n**Output:**\n```\n==============================\n           RECEIPT           \n==============================\nCoffee               $  4.50\nSandwich             $  8.99\nCookie               $  2.25\n------------------------------\nTOTAL                $ 15.74\n==============================\n```\n\n**Key techniques:**\n- `f"{text:<20}"` left-aligns text in 20 characters\n- `f"${price:>6.2f}"` right-aligns price with 2 decimal places\n- `"=" * 30` creates separator lines\n- `^` centers text (for RECEIPT and TOTAL headers)',
      },
    ],
  },
]

import type { ContentBlock } from '@/types/content'

export const day1DataTypes: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction to Data Types
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Data Types in Python' },
  {
    type: 'text',
    content: 'Every piece of data in Python has a **type**. The type determines what operations you can perform on that data. Python is **dynamically typed**, meaning you don\'t declare types explicitly—Python infers them from the value.',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Dynamic vs Static Typing',
    content: 'In statically typed languages (like Java), you declare types: `int x = 5;`. In Python, you write `x = 5` and the type is inferred. The type is associated with the value, not the variable.',
  },
  {
    type: 'text',
    content: 'The four fundamental built-in data types are:',
  },
  {
    type: 'list',
    items: [
      '**`int`** (Integers): Whole numbers (`42`, `-7`, `0`)',
      '**`float`** (Floating-point): Numbers with decimals (`3.14`, `-0.5`)',
      '**`str`** (Strings): Text enclosed in quotes (`"hello"`, `\'Python\'`)',
      '**`bool`** (Booleans): Logical values (`True` or `False`)',
    ],
  },
  {
    type: 'text',
    content: 'Python also has **`NoneType`** (value `None`) to represent the absence of a value.',
  },

  // ═══════════════════════════════════════
  // Section 2: The type() Function
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The type() Function' },
  {
    type: 'text',
    content: 'The built-in `type()` function returns the type of any value or variable:',
  },
  {
    type: 'code',
    code: '# Checking types of literals\nprint(type(42))          # <class \'int\'>\nprint(type(3.14))        # <class \'float\'>\nprint(type("hello"))     # <class \'str\'>\nprint(type(True))        # <class \'bool\'>\nprint(type(None))        # <class \'NoneType\'>\n\n# Checking types of variables\nage = 21\nname = "Alice"\n\nprint(type(age))         # <class \'int\'>\nprint(type(name))        # <class \'str\'>',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'What Does <class \'...\'> Mean?',
    content: 'In Python, everything is an object. `<class \'int\'>` means the value is an instance of the `int` class.',
  },
  {
    type: 'text',
    content: 'You can compare types directly:',
  },
  {
    type: 'code',
    code: 'x = 42\nprint(type(x) == int)      # True\nprint(type(x) == float)    # False\nprint(type(x) == str)      # False',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: isinstance()
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'isinstance()' },
  {
    type: 'text',
    content: '`isinstance()` is the preferred way to check types. It returns `True` if a value matches a type (or tuple of types):',
  },
  {
    type: 'code',
    code: '# Basic isinstance() usage\nprint(isinstance(42, int))        # True\nprint(isinstance(3.14, float))    # True\n\n# Check against multiple types\nprint(isinstance(42, (int, float)))    # True\nprint(isinstance("hi", (int, float)))  # False',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'type() vs isinstance()',
    content: 'Use `type()` to inspect types. Use `isinstance()` to validate types in code, as it correctly handles inheritance (e.g., `bool` is a subclass of `int`).',
  },

  // ═══════════════════════════════════════
  // Section 4: Integers (int)
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Integers (int)' },
  {
    type: 'text',
    content: 'Integers are whole numbers. In Python, integers have **unlimited precision**, meaning they can be as large as your computer\'s memory allows:',
  },
  {
    type: 'code',
    code: '# Basic integers\nx = 42\ny = -17\nz = 0\n\n# Python handles huge numbers automatically\nbig = 10 ** 100    # 10 to the power of 100\nprint(big)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Unlimited Precision',
    content: 'Python integers can be arbitrarily large. They are not limited to 64 bits like in C or Java. Python dynamically allocates memory as needed, making it ideal for cryptography and mathematical research.',
  },
  { type: 'heading', level: 3, text: 'Underscores for Readability' },
  {
    type: 'text',
    content: 'You can use underscores (`_`) inside numeric literals to make large numbers easier to read. Python ignores them.',
  },
  {
    type: 'code',
    code: '# Without underscores\npopulation = 1400000000\n\n# With underscores\npopulation = 1_400_000_000\n\nprint(population)           # 1400000000\nprint(1_000 == 1000)        # True',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Alternative Integer Representations' },
  {
    type: 'text',
    content: 'Python supports binary (base-2), octal (base-8), and hexadecimal (base-16) integer literals using prefixes:',
  },
  {
    type: 'code',
    code: '# Decimal (base 10)\ndec = 255\n\n# Binary (base 2) - prefix 0b\nbin_num = 0b11111111\n\n# Octal (base 8) - prefix 0o\noct_num = 0o377\n\n# Hexadecimal (base 16) - prefix 0x\nhex_num = 0xFF\n\n# All represent the same value\nprint(255 == 0b11111111 == 0o377 == 0xFF)  # True',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'When Are Non-Decimal Bases Used?',
    content: 'Binary is used in low-level programming. Hexadecimal is common for colors (`#FF5733`) and memory addresses. Octal is used in Unix file permissions (`chmod 755`).',
  },

  // ═══════════════════════════════════════
  // Section 5: Floats
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Floating-Point Numbers (float)' },
  {
    type: 'text',
    content: 'Floats represent real numbers with a decimal point. Any number written with a decimal point is a float.',
  },
  {
    type: 'code',
    code: '# Float literals\npi = 3.14159\ntemperature = -40.0\n\n# 2.0 is a float, not an int\nprint(type(2.0))    # <class \'float\'>\n\n# Division ALWAYS returns a float\nprint(10 / 2)       # 5.0',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Scientific Notation' },
  {
    type: 'text',
    content: 'For very large or small numbers, use scientific notation with `e` or `E` (powers of 10):',
  },
  {
    type: 'code',
    code: 'speed_of_light = 3e8        # 3 x 10^8 = 300000000.0\nplanck = 6.626e-34          # 6.626 x 10^-34\n\nprint(type(1e2))            # <class \'float\'>',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Floating-Point Precision' },
  {
    type: 'text',
    content: 'Computers store numbers in binary. Many decimal fractions cannot be represented exactly in binary, leading to tiny precision errors:',
  },
  {
    type: 'code',
    code: '# The classic floating-point precision issue\nprint(0.1 + 0.2)            # 0.30000000000000004\nprint(0.1 + 0.2 == 0.3)     # False',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Never Compare Floats with ==',
    content: 'Due to precision errors, never use `==` to compare floats. Use `math.isclose(a, b)` or check if the difference is within a tolerance (`abs(a - b) < 1e-9`).',
  },
  {
    type: 'code',
    code: 'import math\n\na = 0.1 + 0.2\nb = 0.3\n\n# GOOD: Using math.isclose()\nprint(math.isclose(a, b))        # True\n\n# Special float values\nprint(float(\'inf\'))              # Infinity\nprint(float(\'nan\'))              # Not a Number',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'When Precision Matters',
    content: 'For financial calculations, never use `float`. Use the `decimal` module instead: `from decimal import Decimal; price = Decimal(\'19.99\')`.',
  },

  // ═══════════════════════════════════════
  // Section 6: Strings
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Strings (str)' },
  {
    type: 'text',
    content: 'Strings represent text data. Python provides multiple ways to create strings:',
  },
  { type: 'heading', level: 3, text: 'Single vs Double Quotes' },
  {
    type: 'code',
    code: '# Single and double quotes are identical\nname1 = \'Alice\'\nname2 = "Alice"\n\n# Use one to enclose the other\nmessage1 = "It\'s a beautiful day"\nmessage2 = \'She said "hello"\'\n\n# Or use escape characters (\\)\nmessage3 = \'It\\\'s a beautiful day\'',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Multiline Strings' },
  {
    type: 'text',
    content: 'Triple quotes (`\'\'\'` or `"""`) allow strings to span multiple lines. They preserve line breaks:',
  },
  {
    type: 'code',
    code: '# Triple-quoted multiline string\npoem = """Roses are red,\nViolets are blue,\nPython is awesome,\nAnd so are you!"""\n\nprint(poem)\n\n# Also works with single triple-quotes\naddress = \'\'\'123 Main Street\nApartment 4B\nNew Delhi, 110001\'\'\'',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Raw Strings' },
  {
    type: 'text',
    content: 'A **raw string** is prefixed with `r` or `R` and treats backslashes as literal characters instead of escape sequences. Useful for file paths and regular expressions:',
  },
  {
    type: 'code',
    code: '# Normal string: \\n is a newline\nprint("Hello\\nWorld")\n\n# Raw string: \\n is literal\nprint(r"Hello\\nWorld")\n\n# Useful for Windows file paths\npath1 = "C:\\\\Users\\\\Documents\\\\file.txt"  # double backslashes\npath2 = r"C:\\Users\\Documents\\file.txt"     # raw string',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Common Escape Sequences',
    content: '`\\n` (newline), `\\t` (tab), `\\\\` (literal backslash), `\\\'` (single quote), `\\"` (double quote).',
  },

  // ═══════════════════════════════════════
  // Section 7: Booleans
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Booleans (bool)' },
  {
    type: 'text',
    content: 'Booleans represent one of two values: `True` or `False`. They are the foundation of decision-making in programming.',
  },
  {
    type: 'code',
    code: '# Boolean literals (capital T and F)\nis_student = True\nis_graduated = False\n\n# Booleans from comparisons\nprint(5 > 3)         # True\nprint(2 == 7)        # False',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Booleans Are Integers' },
  {
    type: 'text',
    content: 'In Python, `bool` is a subclass of `int`. `True` is `1` and `False` is `0`. You can use booleans in arithmetic:',
  },
  {
    type: 'code',
    code: '# True == 1, False == 0\nprint(True + True)      # 2\nprint(True + False)     # 1\n\n# Count True values in a list\nresults = [True, False, True, True, False]\nprint(sum(results))     # 3',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Truthy and Falsy Values' },
  {
    type: 'text',
    content: 'Every value in Python has a boolean interpretation. The `bool()` function reveals whether a value is "truthy" or "falsy":',
  },
  {
    type: 'code',
    code: '# Falsy values (evaluate to False)\nprint(bool(0))          # False (zero)\nprint(bool(""))         # False (empty string)\nprint(bool([]))         # False (empty list)\nprint(bool(None))       # False (None)\n\n# Truthy values (evaluate to True)\nprint(bool(1))          # True\nprint(bool("hello"))    # True (non-empty string)\nprint(bool([1, 2]))     # True (non-empty list)\nprint(bool("0"))        # True (string "0" is not empty)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Common Pitfall: "0" vs 0',
    content: '`bool("0")` is `True` because `"0"` is a non-empty string. Only the empty string `""` is falsy.',
  },

  // ═══════════════════════════════════════
  // Section 8: Type Conversion
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Type Conversion (Casting)' },
  {
    type: 'text',
    content: 'You can convert data between types using built-in functions: `int()`, `float()`, `str()`, and `bool()`.',
  },
  { type: 'heading', level: 3, text: 'Converting to int' },
  {
    type: 'code',
    code: '# float -> int (truncates toward zero)\nprint(int(3.7))        # 3\nprint(int(-3.7))       # -3\n\n# string -> int\nprint(int("42"))       # 42\n\n# bool -> int\nprint(int(True))       # 1',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'int() Conversion Pitfalls',
    content: '`int("3.14")` raises a `ValueError`. You cannot convert a string with a decimal point directly to an int. Convert to float first: `int(float("3.14"))`.',
  },
  { type: 'heading', level: 3, text: 'Converting to float' },
  {
    type: 'code',
    code: '# int -> float\nprint(float(42))       # 42.0\n\n# string -> float\nprint(float("3.14"))   # 3.14\nprint(float("1e3"))    # 1000.0',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Converting to str' },
  {
    type: 'code',
    code: '# Anything can be converted to a string\nprint(str(42))         # "42"\nprint(str(3.14))       # "3.14"\nprint(str(True))       # "True"\n\n# Useful for string concatenation\nage = 25\nprint("I am " + str(age) + " years old")',
    language: 'python',
  },
  { type: 'heading', level: 3, text: 'Using round() and abs()' },
  {
    type: 'text',
    content: 'Two essential numeric utility functions:',
  },
  {
    type: 'code',
    code: '# round() \u2014 rounds a float to a given number of decimal places\nprint(round(3.14159))          # 3\nprint(round(3.14159, 2))       # 3.14\nprint(round(2.5))              # 2 (banker\'s rounding)\nprint(round(3.5))              # 4\n\n# abs() \u2014 returns the absolute value\nprint(abs(-42))                # 42\nprint(abs(3.14))               # 3.14',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Banker\'s Rounding',
    content: 'Python uses **banker\'s rounding** (round half to even). When a number is exactly halfway, it rounds to the nearest **even** number. `round(2.5)` is `2`, and `round(3.5)` is `4`. This reduces cumulative rounding bias.',
  },

  // ═══════════════════════════════════════
  // Section 9: None Type
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The None Type' },
  {
    type: 'text',
    content: '`None` represents the **absence of a value**. It is Python\'s equivalent of `null` or `undefined`.',
  },
  {
    type: 'code',
    code: 'x = None\nprint(type(x))      # <class \'NoneType\'>\n\n# Check for None using \'is\'\nprint(x is None)    # True\n\n# None is falsy\nprint(bool(None))   # False',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Always Use "is None"',
    content: 'Always use `x is None` instead of `x == None`. The `is` keyword checks identity (whether it\'s the exact same object), which is faster and safer since there is only one `None` object in Python.',
  },

  // ═══════════════════════════════════════
  // Section 10: Playground #1
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Explore: Types in Action' },
  {
    type: 'playground',
    defaultCode: '# Explore Python data types!\n\n# 1. Check types of different values\nprint("Type of 42:", type(42))\nprint("Type of 3.14:", type(3.14))\nprint("Type of \'hello\':", type("hello"))\nprint("Type of True:", type(True))\nprint("Type of None:", type(None))\n\nprint("---")\n\n# 2. The float precision surprise\nprint("0.1 + 0.2 =", 0.1 + 0.2)\nprint("0.1 + 0.2 == 0.3?", 0.1 + 0.2 == 0.3)\n\nprint("---")\n\n# 3. Boolean arithmetic\nprint("True + True =", True + True)\nprint("Sum of [True, False, True]:", sum([True, False, True]))\n\nprint("---")\n\n# 4. Type conversions\nprint("int(3.9) =", int(3.9))\nprint("float(42) =", float(42))\nprint("str(100) =", str(100))\nprint("bool(0) =", bool(0))\nprint("bool(\'hello\') =", bool("hello"))\n',
    instructions: 'Run the code and observe the outputs. Try adding your own type experiments.',
  },

  // ═══════════════════════════════════════
  // Section 11: Practical Usage
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Using type() in Practice' },
  {
    type: 'text',
    content: 'Understanding types is critical when handling user input, since `input()` always returns a string:',
  },
  {
    type: 'code',
    code: '# input() ALWAYS returns a string\nage_str = input("Enter your age: ")    # user types: 25\nprint(type(age_str))                   # <class \'str\'>\n\n# Convert it to use it as a number\nage = int(age_str)\nprint(age + 1)                         # 26\n\n# Common pattern: convert inline\nage = int(input("Enter your age: "))\nheight = float(input("Enter your height: "))',
    language: 'python',
  },
  {
    type: 'text',
    content: 'A summary of conversions:',
  },
  {
    type: 'code',
    code: '# TO INT:\nprint(int(3.14))        # 3\nprint(int("42"))        # 42\n# int("3.14")           # ValueError\n\n# TO FLOAT:\nprint(float(42))        # 42.0\nprint(float("3.14"))    # 3.14\n\n# TO STR:\nprint(str(42))          # "42"\nprint(str(True))        # "True"\n\n# TO BOOL:\nprint(bool(0))          # False\nprint(bool(42))         # True\nprint(bool(""))         # False\nprint(bool("0"))        # True',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 12: Playground #2
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Explore: Type Conversions' },
  {
    type: 'playground',
    defaultCode: '# Type Conversion Experiments\n\n# 1. Converting between int and float\nprint("int(7.9) =", int(7.9))\nprint("int(-7.9) =", int(-7.9))\nprint("float(10) =", float(10))\n\nprint("---")\n\n# 2. String <-> Number conversions\nnum_str = "123"\nnum = int(num_str)\nprint(f"String \'{num_str}\' -> int {num} -> back to string \'{str(num)}\'")\n\nprint("---")\n\n# 3. Truthy/Falsy exploration\ntest_values = [0, 1, -1, 0.0, 0.1, "", "hello", "0", None, True, False]\nfor val in test_values:\n    print(f"bool({str(val):>10}) = {bool(val)}")\n',
    instructions: 'Run the code to see type conversions in action. The truthy/falsy exploration shows which values Python considers True or False.',
  },

  // ═══════════════════════════════════════
  // Section 13: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What are the main data types in Python?',
        answer: '`int` (integers), `float` (floating-point), `str` (strings), `bool` (booleans), and `None` (absence of value).'
      },
      {
        question: 'How do you check the type of a value?',
        answer: 'Use the `type()` function: `type(42)` returns `<class \'int\'>`. For cleaner output, use `type(42).__name__` to get just `"int"`.'
      },
      {
        question: 'Is `bool` a separate type or related to `int`?',
        answer: '`bool` is a subclass of `int`. `True == 1` and `False == 0`. You can use booleans in arithmetic: `True + True` = `2`.'
      },
      {
        question: 'What values are falsy in Python?',
        answer: '`0`, `0.0`, `None`, `""` (empty string), `[]` (empty list), `{}` (empty dict), `set()`. Everything else is truthy.'
      },
      {
        question: 'How do you convert between types?',
        answer: 'Use `int()`, `float()`, `str()`, `bool()`, etc. Example: `int("42")` → `42`, `str(42)` → `"42"`. Be careful: `int("3.14")` raises an error.'
      }
    ]
  },
]

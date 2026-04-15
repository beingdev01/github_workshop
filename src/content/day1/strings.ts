import type { ContentBlock } from '@/types/content'

export const day1Strings: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: String Basics
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Strings in Python' },
  {
    type: 'text',
    content: 'A **string** is a sequence of characters enclosed in quotes. In Python, there is no separate character type—a single character is just a string of length 1.',
  },

  // ═══════════════════════════════════════
  // Section 1a: Creating Strings
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Creating Strings' },
  {
    type: 'text',
    content: 'Python gives you three ways to create strings:',
  },
  {
    type: 'code',
    code: '# 1. Single quotes\ngreeting = \'Hello, World!\'\n\n# 2. Double quotes (identical to single quotes)\ngreeting = "Hello, World!"\n\n# 3. Triple quotes for multi-line strings\npoem = """Roses are red,\nViolets are blue"""',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Which Quotes to Use?',
    content: 'Use single quotes when your string contains double quotes (`\'She said "hello"\'`). Use double quotes when your string contains apostrophes (`"It\'s raining"`). Otherwise, pick one style and be consistent.',
  },
  {
    type: 'text',
    content: 'You can also create an **empty string** (zero characters):',
  },
  {
    type: 'code',
    code: 'empty1 = ""\nempty2 = \'\'\n\nprint(len(empty1))   # 0\nprint(type(empty1))  # <class \'str\'>',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 2: String Length
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'String Length: len()' },
  {
    type: 'text',
    content: 'The `len()` function returns the number of characters in a string, including spaces and punctuation:',
  },
  {
    type: 'code',
    code: 'word = "Python"\nprint(len(word))       # 6\n\nsentence = "Hello, World!"\nprint(len(sentence))   # 13\n\nspaces = "  hi  "\nprint(len(spaces))     # 6',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: String Concatenation
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'String Concatenation (+)' },
  {
    type: 'text',
    content: 'The `+` operator joins strings together:',
  },
  {
    type: 'code',
    code: 'first = "Hello"\nsecond = "World"\n\nresult = first + " " + second\nprint(result)    # Hello World',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'TypeError: Can Only Concatenate str to str',
    content: 'You cannot concatenate a string with a number using `+`. Attempting `"Age: " + 25` will raise a `TypeError`. Use an f-string instead: `f"Age: {25}"`.',
  },
  {
    type: 'text',
    content: 'Python also supports **implicit concatenation** of adjacent string literals, useful for breaking long strings across lines:',
  },
  {
    type: 'code',
    code: 'long_string = ("This is a very long string that "\n               "we split across multiple lines "\n               "for readability.")\nprint(long_string)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: String Replication
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'String Replication \u2014 The * Operator' },
  {
    type: 'text',
    content: 'The `*` operator repeats a string a given number of times. Think of it as **multiplication is repeated addition**: `"ha" * 3` is the same as `"ha" + "ha" + "ha"`:',
  },
  {
    type: 'code',
    code: '# String repetition\nprint("ha" * 3)        # hahaha\nprint("-" * 40)        # ----------------------------------------\nprint("ab" * 4)        # abababab\n\n# Useful for creating separators and formatting\nheader = "=== REPORT ==="\nseparator = "=" * len(header)\nprint(separator)\nprint(header)\nprint(separator)\n\n# Multiplication with 0 or negative gives empty string\nprint("hello" * 0)     # (empty string)\nprint("hello" * -1)    # (empty string)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Why * Makes Sense for Strings',
    content: 'Multiplication is repeated addition. `3 * 5 = 5 + 5 + 5`. Similarly, `"ab" * 3 = "ab" + "ab" + "ab" = "ababab"`.',
  },

  // ═══════════════════════════════════════
  // Section 5: String Comparison
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'String Comparison' },
  {
    type: 'text',
    content: 'Strings are compared **lexicographically** (dictionary order) using their Unicode values:',
  },
  {
    type: 'code',
    code: '# Equality\nprint("hello" == "hello")   # True\nprint("hello" == "Hello")   # False (case matters!)\n\n# Dictionary order\nprint("apple" < "banana")   # True  (a comes before b)\nprint("cat" > "car")        # True  (t comes after r)\n\n# Uppercase letters come BEFORE lowercase in Unicode\nprint("Z" < "a")            # True  (Z=90, a=97)',
    language: 'python',
  },
  {
    type: 'text',
    content: 'Use `ord()` to get a character\'s Unicode value, and `chr()` to get the character from a value:',
  },
  {
    type: 'code',
    code: 'print(ord(\'A\'))    # 65\nprint(ord(\'a\'))    # 97\n\nprint(chr(65))     # A\nprint(chr(9829))   # ♥',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Case Matters!',
    content: 'Because uppercase letters have smaller Unicode values, `"Zebra" < "apple"` is `True`. For case-insensitive comparison, convert both strings first: `"Zebra".lower() < "apple".lower()`.',
  },

  // ═══════════════════════════════════════
  // Section 6: Escape Characters
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Escape Characters' },
  {
    type: 'text',
    content: 'Use a backslash `\\` to represent special characters:',
  },
  {
    type: 'list',
    items: [
      '`\\n` — **Newline**',
      '`\\t` — **Tab**',
      '`\\\\` — **Backslash**',
      '`\\\'` — **Single quote**',
      '`\\"` — **Double quote**',
    ],
  },
  {
    type: 'code',
    code: 'print("Line 1\\nLine 2")\nprint("Name\\tAge")\nprint("C:\\\\Users\\\\Documents")\nprint("She said, \\"Hello!\\"")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Escape Sequences Are Single Characters',
    content: 'Even though `\\n` is written as two characters, it represents a single newline character. `len("\\n")` is `1`.',
  },
  {
    type: 'code',
    code: 'print(len("\\n"))     # 1\nprint(len("A\\nB"))   # 3\n\n# Raw strings ignore escape sequences (prefix with r)\nprint(r"C:\\new_folder\\test")  # C:\\new_folder\\test',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Substrings with in/not in
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Checking for Substrings: in / not in' },
  {
    type: 'text',
    content: 'The `in` keyword checks if a substring exists inside another string. It returns `True` or `False`:',
  },
  {
    type: 'code',
    code: 'sentence = "The quick brown fox"\n\nprint("fox" in sentence)          # True\nprint("cat" in sentence)          # False\nprint("cat" not in sentence)      # True\n\n# Case-sensitive!\nprint("Fox" in sentence)          # False',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Indexing
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Indexing: Accessing Characters' },
  {
    type: 'text',
    content: 'Python uses **zero-based indexing** (first character is `0`). It also supports **negative indexing** (`-1` is the last character):',
  },
  {
    type: 'code',
    code: 'word = "Python"\n#        P   y   t   h   o   n\n#        0   1   2   3   4   5    ← positive\n#       -6  -5  -4  -3  -2  -1    ← negative\n\nprint(word[0])     # P (first)\nprint(word[5])     # n (last)\n\nprint(word[-1])    # n (last)\nprint(word[-2])    # o (second to last)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'IndexError \u2014 Out of Range!',
    content: 'Accessing an index that doesn\'t exist raises an `IndexError`. For a string of length `n`, valid indices are `0` to `n-1` (positive) and `-1` to `-n` (negative). For example, `"Python"[6]` and `"Python"[-7]` both raise `IndexError`.',
  },
  {
    type: 'code',
    code: '# IndexError examples\nword = "Hi"  # length 2, valid indices: 0, 1, -1, -2\n\n# print(word[2])    # IndexError: string index out of range\n\n# Safe way to access the last character\nif len(word) > 0:\n    print(word[-1])  # i',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Slicing
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Slicing: Extracting Substrings' },
  {
    type: 'text',
    content: 'Slicing extracts a portion of a string using `string[start:stop]` or `string[start:stop:step]`. **Start is inclusive, stop is exclusive**:',
  },
  {
    type: 'code',
    code: 'text = "Hello, World!"\n#       H  e  l  l  o  ,     W  o  r  l  d  !\n#       0  1  2  3  4  5  6  7  8  9  10 11 12\n\n# Basic slicing: [start:stop]\nprint(text[0:5])    # Hello\nprint(text[7:12])   # World\n\n# Omitting start or stop\nprint(text[:5])     # Hello (start defaults to 0)\nprint(text[7:])     # World! (stop defaults to end)\n\n# Negative indices in slices\nprint(text[-6:])    # orld! (last 6 characters)\nprint(text[:-1])    # Hello, World (everything except last char)',
    language: 'python',
  },
  {
    type: 'text',
    content: 'The **step** parameter controls how many characters to skip:',
  },
  {
    type: 'code',
    code: 'alphabet = "abcdefghijklmnopqrstuvwxyz"\n\n# Step of 2 (every other character)\nprint(alphabet[::2])     # acegikmoqsuwy\n\n# Negative step (traverse in REVERSE)\nprint(alphabet[::-1])    # zyxwvutsrqponmlkjihgfedcba',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Slicing Never Raises IndexError',
    content: 'Unlike indexing, slicing is forgiving. If indices are out of range, Python adjusts to the valid range: `"Hello"[0:100]` becomes `"Hello"`.',
  },

  // ═══════════════════════════════════════
  // Section 10: String Immutability
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'String Immutability' },
  {
    type: 'text',
    content: 'Python strings are **immutable**—they cannot be changed in place. Any operation that appears to modify a string actually creates a **new string**:',
  },
  {
    type: 'code',
    code: 'word = "Hello"\n# word[0] = "J"  # TypeError: \'str\' object does not support item assignment\n\n# Instead, create a NEW string\nword = "J" + word[1:]\nprint(word)      # Jello',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Reassignment ≠ Mutation',
    content: 'When you write `word = "J" + word[1:]`, you are reassigning the variable `word` to point to a new string. The original string `"Hello"` is unchanged.',
  },

  // ═══════════════════════════════════════
  // First Playground
  // ═══════════════════════════════════════
  { type: 'divider' },
  {
    type: 'playground',
    defaultCode: '# Explore String Basics, Indexing, and Slicing\nword = "Programming"\n\nprint(f"String: {word}")\nprint(f"Length: {len(word)}")\nprint(f"First char: {word[0]}")\nprint(f"Last char: {word[-1]}")\nprint(f"First 4 chars: {word[:4]}")\nprint(f"Last 4 chars: {word[-4:]}")\nprint(f"Reversed: {word[::-1]}")\nprint(f"Every other: {word[::2]}")\nprint()\n\n# Try string concatenation and replication\nprint("=-" * 15)\nprint(word + " is fun!")\nprint("=-" * 15)\nprint()\n\n# Check substrings\nprint(f"\'gram\' in word: {\'gram\' in word}")\nprint(f"\'xyz\' in word: {\'xyz\' in word}")\n\n# Experiment! Try your own operations below:\n',
    instructions: 'Experiment with indexing, slicing, concatenation, and the `in` operator. Try reversing your own name, extracting initials, or finding substrings.',
  },

  // ═══════════════════════════════════════
  // Section 11: String Methods
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'String Methods' },
  {
    type: 'text',
    content: 'Strings come with built-in **methods** (functions called on a string using dot notation). Because strings are immutable, these methods always return **new strings**.',
  },

  { type: 'heading', level: 3, text: 'Case Conversion' },
  {
    type: 'code',
    code: 'text = "hello, PYTHON World"\n\nprint(text.upper())       # HELLO, PYTHON WORLD\nprint(text.lower())       # hello, python world\nprint(text.capitalize())  # Hello, python world\nprint(text.title())       # Hello, Python World\nprint(text.swapcase())    # HELLO, python wORLD',
    language: 'python',
  },

  { type: 'heading', level: 3, text: 'Whitespace Methods' },
  {
    type: 'code',
    code: 'messy = "   Hello, World!   "\n\nprint(messy.strip())     # "Hello, World!"    (remove both sides)\nprint(messy.lstrip())    # "Hello, World!   " (remove left only)\nprint(messy.rstrip())    # "   Hello, World!" (remove right only)\n\n# strip() with arguments removes specific characters\nprint("###Hello###".strip("#"))         # Hello',
    language: 'python',
  },

  { type: 'heading', level: 3, text: 'Search and Replace' },
  {
    type: 'code',
    code: 'text = "The cat sat on the mat, the cat napped."\n\n# find() returns index of first occurrence, or -1\nprint(text.find("cat"))       # 4\nprint(text.find("dog"))       # -1\n\n# count() counts occurrences\nprint(text.count("cat"))      # 2\n\n# replace() replaces occurrences\nprint(text.replace("cat", "dog"))   # The dog sat on the mat, the dog napped.\n\n# startswith() and endswith()\nfilename = "report_2024.pdf"\nprint(filename.startswith("report"))  # True\nprint(filename.endswith(".pdf"))      # True',
    language: 'python',
  },

  { type: 'heading', level: 3, text: 'split() and join() \u2014 String \u2194 List Conversion' },
  {
    type: 'text',
    content: '`split()` and `join()` are arguably the two most powerful string methods. They convert between strings and lists:',
  },
  {
    type: 'code',
    code: '# split() breaks a string into a list\nsentence = "Python is amazingly powerful"\nwords = sentence.split()         # Split by whitespace\nprint(words)   # [\'Python\', \'is\', \'amazingly\', \'powerful\']\n\n# Split by a specific delimiter\ncsv_line = "Alice,25,NYC"\nfields = csv_line.split(",")\nprint(fields)  # [\'Alice\', \'25\', \'NYC\']\n\n# join() combines a list into a string\nwords = ["Python", "is", "great"]\nprint(" ".join(words))      # Python is great\nprint("-".join(words))      # Python-is-great',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'join() Syntax',
    content: 'Note that `join()` is called on the **separator** string, not the list: `" ".join(words)`, NOT `words.join(" ")`. Think of it as: "use this separator to join those items."',
  },

  { type: 'heading', level: 3, text: 'Checking String Content' },
  {
    type: 'code',
    code: 'print("Hello".isalpha())      # True (only letters)\nprint("12345".isdigit())      # True (only digits)\nprint("Hello123".isalnum())   # True (letters or digits)\nprint("   ".isspace())        # True (only whitespace)\n\nprint("HELLO".isupper())      # True\nprint("hello".islower())      # True',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 12: f-Strings
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'f-Strings (Modern Formatting)' },
  {
    type: 'text',
    content: '**f-strings** are the most readable way to embed expressions inside strings. Prefix the string with `f` and place expressions inside `{}`.',
  },
  {
    type: 'code',
    code: 'name = "Alice"\nage = 25\nheight = 1.756\n\n# Basic variable insertion\nprint(f"My name is {name}")\n\n# Expressions inside curly braces\nprint(f"In 10 years, I\'ll be {age + 10}")\nprint(f"Name in uppercase: {name.upper()}")\n\n# Formatting specifiers\nprint(f"Height: {height:.2f} meters")            # 2 decimal places: 1.76\nprint(f"Big number: {1000000:,}")                 # With commas: 1,000,000\nprint(f"Padded: {42:05d}")                        # Zero-padded: 00042',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'f-strings vs format()',
    content: 'Always prefer f-strings (`f"Hello {name}"`) for new code. They are more readable and faster than the older `.format()` method or `%` formatting.',
  },
  {
    type: 'code',
    code: '# Advanced f-string tricks\n\n# Debugging with = (Python 3.8+)\nx = 42\nprint(f"{x = }")         # x = 42\nprint(f"{x + 10 = }")    # x + 10 = 52\n\n# Dictionary access in f-strings\nperson = {"name": "Alice", "age": 25}\nprint(f"{person[\'name\']} is {person[\'age\']}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Second Playground
  // ═══════════════════════════════════════
  { type: 'divider' },
  {
    type: 'playground',
    defaultCode: '# String Methods & f-Strings Playground\ntext = "  The Quick Brown Fox Jumps Over The Lazy Dog  "\n\n# Clean up and transform\ncleaned = text.strip()\nprint(f"Original: \'{text}\'")\nprint(f"Stripped: \'{cleaned}\'")\nprint(f"Lowercase: \'{cleaned.lower()}\'")\nprint(f"Title Case: \'{cleaned.title()}\'")\nprint()\n\n# Split and join\nwords = cleaned.split()\nprint(f"Word count: {len(words)}")\nprint(f"Words: {words}")\nkebab_case = "-".join(words).lower()\nprint(f"Kebab case: {kebab_case}")\nprint()\n\n# Search and replace\nprint(f"Contains \'Fox\': {\'Fox\' in cleaned}")\nprint(f"Position of \'Fox\': {cleaned.find(\'Fox\')}")\nprint(f"Replaced: {cleaned.replace(\'Fox\', \'Cat\')}")\nprint()\n\n# Try your own string experiments below!\n',
    instructions: 'Explore string methods like split(), join(), replace(), find(), and formatting with f-strings. Try building a sentence from a list of words, or extracting data from a CSV string.',
  },

  // ═══════════════════════════════════════
  // Section 13: Common Patterns and Pitfalls
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Common Patterns' },
  {
    type: 'code',
    code: '# Pattern 1: Checking if string is empty\ntext = ""\nif not text:\n    print("Empty!")\n\n# Pattern 2: Removing all whitespace\ntext = "  h e l l o  "\nno_spaces = text.replace(" ", "")\nprint(no_spaces)  # hello\n\n# Pattern 3: Reversing a string\noriginal = "Python"\nreversed_str = original[::-1]\nprint(reversed_str)  # nohtyP\n\n# Pattern 4: Checking palindromes\nword = "racecar"\nis_palindrome = word == word[::-1]\nprint(f"{word} is palindrome: {is_palindrome}")  # True',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'String Concatenation in Loops is Slow',
    content: 'Because strings are immutable, using `+=` in a loop creates a new string every time. For building large strings, collect parts in a list and use `"".join(parts)` at the end.',
  },

  // ═══════════════════════════════════════
  // Section 11: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What are some common string methods?',
        answer: 'Common methods include: `upper()`, `lower()`, `capitalize()`, `strip()`, `find()`, `count()`, `replace()`, `split()`, and `join()`. These make text processing in Python powerful and easy.'
      }
    ]
  }
]

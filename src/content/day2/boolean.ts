import type { ContentBlock } from '@/types/content'

export const day2Boolean: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Boolean Logic & Truthiness' },
  {
    type: 'text',
    content: 'At its core, every decision a computer makes comes down to a single question: **True or False?** The `bool` type in Python has exactly two values — `True` and `False` — yet these two tiny values drive every `if` statement, every `while` loop, and every logical expression in your programs.',
  },

  // ═══════════════════════════════════════
  // Section 2: The bool Type
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The bool Type' },
  {
    type: 'code',
    code: '# Boolean literals\nprint(True)           # True\nprint(False)          # False\nprint(type(True))     # <class \'bool\'>\nprint(type(False))    # <class \'bool\'>\n\n# bool is a subclass of int!\nprint(isinstance(True, int))    # True\nprint(True + True)              # 2\nprint(False + True)             # 1\nprint(True * 10)                # 10\nprint(False * 10)               # 0\n\n# True == 1 and False == 0\nprint(True == 1)    # True\nprint(False == 0)   # True\nprint(True is 1)    # False — same value, different objects',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'bool is a Subclass of int',
    content: 'Historically, Python didn\'t have a `bool` type — it used `0` and `1`. When `bool` was added in Python 2.3, it was made a subclass of `int` for backward compatibility. This is why `True + True == 2` works. While you *can* use booleans in arithmetic, it\'s usually clearer to be explicit.',
  },

  // ═══════════════════════════════════════
  // Section 3: Comparison Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Comparison Operators → Booleans' },
  {
    type: 'text',
    content: 'Comparison operators produce boolean results. Python has six comparison operators:',
  },
  {
    type: 'code',
    code: '# Comparison operators\nprint(5 > 3)       # True   — greater than\nprint(5 < 3)       # False  — less than\nprint(5 >= 5)      # True   — greater than or equal\nprint(5 <= 4)      # False  — less than or equal\nprint(5 == 5)      # True   — equal (two equals signs!)\nprint(5 != 3)      # True   — not equal\n\n# Comparisons work with strings (lexicographic / dictionary order)\nprint("apple" < "banana")     # True  (a comes before b)\nprint("cat" < "car")          # False (t comes after r)\nprint("abc" == "abc")         # True\nprint("Python" < "python")    # True  (uppercase < lowercase in Unicode)\n\n# Type matters in comparisons\nprint(1 == 1.0)      # True  — int and float can be compared\nprint(1 == "1")      # False — int and str are never equal\nprint(True == 1)     # True  — bool is a subclass of int',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: '== vs = : A Critical Distinction',
    content: '`=` is the **assignment** operator (gives a value to a variable). `==` is the **equality** operator (checks if two values are the same). Writing `if x = 5:` instead of `if x == 5:` is a `SyntaxError` in Python (thankfully, unlike C where it would silently be a bug).',
  },

  // ═══════════════════════════════════════
  // Section 4: Comparison Chaining
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Comparison Chaining — A Python Superpower' },
  {
    type: 'text',
    content: 'Python allows you to **chain** comparisons naturally, just like in mathematics. This is uncommon in most programming languages:',
  },
  {
    type: 'code',
    code: '# Chained comparisons\nx = 15\n\n# Instead of: x > 10 and x < 20\nprint(10 < x < 20)        # True — reads like math!\nprint(1 < x < 10)         # False\n\n# You can chain any comparisons\nprint(1 < 2 < 3 < 4)      # True\nprint(1 < 2 > 0)          # True — 1<2 and 2>0\n\n# Equality chaining\na = b = c = 5\nprint(a == b == c)         # True — all three are equal\n\n# Practical: check if a number is within range\nage = 25\nif 18 <= age <= 65:\n    print("Working age")   # Working age\n\n# How it works internally: a < b < c == (a < b) and (b < c)\n# Python evaluates b only ONCE, not twice!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Logical Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Logical Operators: and, or, not' },
  {
    type: 'text',
    content: 'Python uses English words for logical operators, not symbols like `&&`, `||`, `!`:',
  },
  {
    type: 'code',
    code: '# and — True only if BOTH sides are True\nprint(True and True)     # True\nprint(True and False)    # False\nprint(False and True)    # False\nprint(False and False)   # False\n\n# or — True if EITHER side is True\nprint(True or True)      # True\nprint(True or False)     # True\nprint(False or True)     # True\nprint(False or False)    # False\n\n# not — Flips the value\nprint(not True)          # False\nprint(not False)         # True\n\n# Practical examples\nage = 25\nhas_license = True\nhas_insurance = True\n\nif age >= 18 and has_license and has_insurance:\n    print("You can drive!")        # You can drive!\n\ntemperature = 35\nif temperature < 0 or temperature > 40:\n    print("Extreme weather!")\nelse:\n    print("Manageable weather")    # Manageable weather',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Truth Tables
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Truth Tables' },
  {
    type: 'text',
    content: 'A truth table shows all possible outcomes for logical operators. Memorize these — they\'re the foundation of all logic in programming:',
  },
  {
    type: 'list',
    items: [
      '**AND truth table**: T∧T=T, T∧F=F, F∧T=F, F∧F=F — "Both must be True"',
      '**OR truth table**: T∨T=T, T∨F=T, F∨T=T, F∨F=F — "At least one must be True"',
      '**NOT truth table**: ¬T=F, ¬F=T — "Flip the value"',
    ],
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'De Morgan\'s Laws — Simplifying Boolean Expressions',
    content: '`not (A and B)` ≡ `(not A) or (not B)` — "Not both" means "at least one is false"\n`not (A or B)` ≡ `(not A) and (not B)` — "Neither" means "both are false"\n\nThese laws are invaluable for simplifying complex conditions!',
  },

  // ═══════════════════════════════════════
  // Section 7: Short-Circuit Evaluation
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Short-Circuit Evaluation' },
  {
    type: 'text',
    content: 'Python is **lazy** with logical operators — it stops evaluating as soon as the result is determined:',
  },
  {
    type: 'code',
    code: '# Short-circuit with "and"\n# If the first operand is False, Python doesn\'t evaluate the second\nprint(False and print("This won\'t print"))    # False\n\n# Short-circuit with "or"\n# If the first operand is True, Python doesn\'t evaluate the second\nprint(True or print("This won\'t print"))      # True\n\n# Practical: avoid errors with short-circuit\nmy_list = []\n# Without short-circuit, my_list[0] would crash!\nif len(my_list) > 0 and my_list[0] == "hello":\n    print("Found hello")\nelse:\n    print("List is empty or first element isn\'t hello")\n\n# Another pattern: provide default values\nname = ""  # empty string is falsy\nresult = name or "Anonymous"\nprint(result)    # Anonymous\n\nname = "Alice"\nresult = name or "Anonymous"\nprint(result)    # Alice',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'and/or Don\'t Always Return True/False!',
    content: '`and` returns the first falsy value, or the last value if all are truthy.\n`or` returns the first truthy value, or the last value if all are falsy.\n\n`"hello" and "world"` → `"world"` (not `True`!)\n`"" or "default"` → `"default"` (not `True`!)\n`0 and "never"` → `0` (not `False`!)',
  },

  // ═══════════════════════════════════════
  // Section 8: Truthiness & Falsiness
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Truthiness & Falsiness' },
  {
    type: 'text',
    content: 'In Python, **every** value can be treated as a boolean in conditions — not just `True` and `False`. Values are either **truthy** (treated as `True`) or **falsy** (treated as `False`):',
  },
  {
    type: 'code',
    code: '# Falsy values (these are ALL of them):\nprint(bool(False))     # False — the literal False\nprint(bool(None))      # False — absence of value\nprint(bool(0))         # False — integer zero\nprint(bool(0.0))       # False — float zero\nprint(bool(0j))        # False — complex zero\nprint(bool(""))        # False — empty string\nprint(bool([]))        # False — empty list\nprint(bool(()))        # False — empty tuple\nprint(bool({}))        # False — empty dict\nprint(bool(set()))     # False — empty set\n\n# Everything else is truthy:\nprint(bool(1))         # True\nprint(bool(-1))        # True — negative numbers are truthy!\nprint(bool(0.001))     # True\nprint(bool("0"))       # True — string "0" is NOT empty!\nprint(bool(" "))       # True — space is NOT empty!\nprint(bool([0]))       # True — list with one element\nprint(bool("False"))   # True — string "False" is truthy!',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Common Truthiness Traps',
    content: '`bool("0")` is `True` — the string "0" has one character, so it\'s not empty!\n`bool("False")` is `True` — the string "False" has 5 characters!\n`bool(" ")` is `True` — a space is still a character!\n`bool(-1)` is `True` — only numeric zero is falsy!',
  },
  { type: 'heading', level: 3, text: 'Using Truthiness in Practice' },
  {
    type: 'code',
    code: '# Idiomatic Python uses truthiness directly\nname = "Alice"\nitems = [1, 2, 3]\n\n# DON\'T do this (explicit but verbose):\nif len(name) > 0:\n    print("Name is not empty")\nif len(items) > 0:\n    print("List is not empty")\n\n# DO this (Pythonic):\nif name:\n    print("Name is not empty")\nif items:\n    print("List has items")\n\n# Common pattern: check before using\ndata = None  # might come from a database or API\nif data:\n    print(f"Got data: {data}")\nelse:\n    print("No data available")\n\n# Ternary expression with truthiness\nuser_input = ""  # user entered nothing\ngreeting = f"Hello, {user_input or \'Stranger\'}!"\nprint(greeting)    # Hello, Stranger!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: The bool() Function
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The bool() Constructor' },
  {
    type: 'code',
    code: '# bool() converts any value to True or False\nprint(bool(42))        # True\nprint(bool(""))        # False\nprint(bool("text"))    # True\nprint(bool([]))        # False\nprint(bool([1,2,3]))   # True\n\n# Counting truthy values in a collection\nvalues = [1, 0, "", "hello", None, True, [], [1]]\ntruthy_count = sum(bool(x) for x in values)\nprint(f"Truthy values: {truthy_count} out of {len(values)}")  # 4 out of 8\n\n# Filter truthy values\ntruthy_only = [x for x in values if x]\nprint(truthy_only)   # [1, \'hello\', True, [1]]',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 10: Identity Operators
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Identity & Membership Operators' },
  {
    type: 'code',
    code: '# Identity operators: is, is not\n# Check if two variables refer to the SAME object in memory\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a == b)     # True  — same value\nprint(a is b)     # False — different objects!\nprint(a is c)     # True  — c points to same object as a\nprint(a is not b) # True\n\n# ALWAYS use "is" with None\nx = None\nprint(x is None)       # True  ✅ correct way\nprint(x == None)       # True  ❌ works but discouraged\n\n# Membership operators: in, not in\nprint(3 in [1, 2, 3, 4])         # True\nprint(5 in [1, 2, 3, 4])         # False\nprint("py" in "python")          # True\nprint("z" not in "python")       # True\nprint("key" in {"key": "val"})   # True (checks keys in dicts)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'When to Use "is" vs "=="',
    content: 'Use `==` to compare **values**: `if x == 5`\nUse `is` to compare **identity** (is it the *exact same object*?): `if x is None`\n\nThe only common use of `is` is checking for `None`, `True`, or `False`. Never use `is` to compare numbers or strings — Python caches small integers, so `a is b` might work for small numbers but fail for large ones!',
  },

  // ═══════════════════════════════════════
  // Section 11: Operator Precedence
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Boolean Operator Precedence' },
  {
    type: 'text',
    content: 'When mixing operators, Python follows this precedence (highest to lowest):',
  },
  {
    type: 'list',
    items: [
      '**Parentheses** `()` — always evaluated first',
      '**Arithmetic** `+, -, *, /, **` — computed before comparisons',
      '**Comparisons** `<, >, <=, >=, ==, !=` — produce booleans',
      '**not** — unary, flips one boolean',
      '**and** — short-circuits on False',
      '**or** — short-circuits on True (evaluated last!)',
    ],
  },
  {
    type: 'code',
    code: '# Precedence in action\nprint(3 + 4 > 5 and 2 ** 3 == 8)\n# Step 1: 3 + 4 = 7, 2 ** 3 = 8    (arithmetic first)\n# Step 2: 7 > 5 = True, 8 == 8 = True   (comparisons next)\n# Step 3: True and True = True           (and last)\n\n# not binds tighter than and/or\nprint(not True or True)    # True  — (not True) or True → False or True → True\nprint(not (True or True))  # False — not (True) → not True → False\n\n# and binds tighter than or\nprint(True or True and False)   # True  — True or (True and False) → True or False → True\nprint((True or True) and False) # False — True and False → False\n\n# When in doubt, USE PARENTHESES!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Boolean Evaluation Internals
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — The Boolean Evaluation Engine' },
  {
    type: 'text',
    content: 'When Python evaluates a condition, it does more than compare `True` and `False`. It asks objects for truth value using `__bool__()` (or falls back to `__len__()`), applies short-circuit rules, and often returns one of the original operand objects.',
  },
  {
    type: 'heading', level: 2, text: 'Truthiness Dispatch: __bool__ Then __len__' },
  {
    type: 'code',
    code: 'class Box:\n    def __init__(self, items):\n        self.items = items\n\n    def __len__(self):\n        return len(self.items)\n\nclass FeatureFlag:\n    def __init__(self, enabled):\n        self.enabled = enabled\n\n    def __bool__(self):\n        print("__bool__ called")\n        return self.enabled\n\nprint(bool(Box([])))        # False  (len == 0)\nprint(bool(Box([1, 2])))    # True   (len > 0)\n\nflag = FeatureFlag(True)\nif flag:\n    print("Flag is on")',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: How `if obj:` Computes Truth Value',
    description: 'Python asks an object for truthiness in a strict order: __bool__, then __len__, then default truthy.',
    bindings: [
      { scope: 'global', name: 'box', objectId: 'OBJ_BOX' },
      { scope: 'global', name: 'flag', objectId: 'OBJ_FLAG' },
      { scope: 'frame:bool', name: 'obj', objectId: 'OBJ_BOX' },
      { scope: 'frame:if', name: 'condition', objectId: 'B_TRUE' },
    ],
    objects: [
      {
        id: 'OBJ_BOX',
        type: 'Box',
        value: 'Box([1, 2])',
        mutable: true,
        note: 'No __bool__; Python calls __len__ and interprets non-zero as True.',
        accent: 'amber',
      },
      {
        id: 'OBJ_FLAG',
        type: 'FeatureFlag',
        value: 'FeatureFlag(True)',
        mutable: true,
        note: 'Defines __bool__, so Python uses that directly.',
        accent: 'sky',
      },
      {
        id: 'B_TRUE',
        type: 'bool',
        value: 'True',
        mutable: false,
        accent: 'mint',
      },
    ],
    insights: [
      'Truthiness is protocol-driven, not hardcoded only for built-in types.',
      'An empty container is falsy because len == 0, not because Python special-cases each container.',
      'Custom classes can define exactly how they behave in conditions.',
    ],
  },

  {
    type: 'heading', level: 2, text: '`and` / `or` Return Operands, Not Forced Booleans' },
  {
    type: 'code',
    code: 'name = ""\nfallback = "Anonymous"\n\nselected = name or fallback\nprint(selected)             # Anonymous\n\ncache = {"token": "abc"}\nresult = cache and cache["token"]\nprint(result)               # abc\n\nprint(0 and 99)             # 0\nprint("" or "default")      # default',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: `or` Picks the First Truthy Operand',
    description: 'With `name or fallback`, the result binding points to whichever operand object wins.',
    bindings: [
      { scope: 'global', name: 'name', objectId: 'S_EMPTY' },
      { scope: 'global', name: 'fallback', objectId: 'S_FB' },
      { scope: 'global', name: 'selected', objectId: 'S_FB' },
    ],
    objects: [
      {
        id: 'S_EMPTY',
        type: 'str',
        value: '""',
        mutable: false,
        note: 'Falsy because it is an empty string.',
        accent: 'coral',
      },
      {
        id: 'S_FB',
        type: 'str',
        value: '"Anonymous"',
        mutable: false,
        note: 'First truthy operand; returned directly by `or`.',
        accent: 'mint',
      },
    ],
    insights: [
      '`or` returns an operand object, not a newly created bool.',
      'This is why fallback expressions are compact and efficient in Python.',
      'The same rule explains patterns like `config.get("timeout") or 30`.',
    ],
  },

  {
    type: 'memoryLab',
    title: 'Interactive Trace: Short-Circuit and Operand Return',
    prompt: 'Step through the expression chain and track which objects become bound to results.',
    steps: [
      {
        title: 'Start With Falsy Input',
        action: 'Run setup values',
        code: 'user_name = ""\ndefault_name = "Guest"',
        bindings: [
          { scope: 'global', name: 'user_name', objectId: 'S_EMPTY' },
          { scope: 'global', name: 'default_name', objectId: 'S_GUEST' },
        ],
        objects: [
          { id: 'S_EMPTY', type: 'str', value: '""', mutable: false, refCount: 1, accent: 'coral' },
          { id: 'S_GUEST', type: 'str', value: '"Guest"', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: '`user_name` is currently falsy, so it cannot satisfy an `or` by itself.',
      },
      {
        title: 'Evaluate Fallback With or',
        action: 'Run `display = user_name or default_name`',
        code: 'display = user_name or default_name',
        bindings: [
          { scope: 'global', name: 'user_name', objectId: 'S_EMPTY' },
          { scope: 'global', name: 'default_name', objectId: 'S_GUEST' },
          { scope: 'global', name: 'display', objectId: 'S_GUEST' },
        ],
        objects: [
          { id: 'S_EMPTY', type: 'str', value: '""', mutable: false, refCount: 1, accent: 'coral' },
          { id: 'S_GUEST', type: 'str', value: '"Guest"', mutable: false, refCount: 2, accent: 'mint' },
        ],
        explanation: 'Because the left operand is falsy, `or` returns the right operand object directly.',
      },
      {
        title: 'Guarded and Expression',
        action: 'Run `ok = display and len(display) > 0`',
        code: 'ok = display and len(display) > 0',
        bindings: [
          { scope: 'global', name: 'display', objectId: 'S_GUEST' },
          { scope: 'global', name: 'ok', objectId: 'B_TRUE' },
        ],
        objects: [
          { id: 'S_GUEST', type: 'str', value: '"Guest"', mutable: false, refCount: 2, accent: 'amber' },
          { id: 'B_TRUE', type: 'bool', value: 'True', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: '`and` evaluates the right side only because `display` is truthy.',
      },
      {
        title: 'Flip to Truthy Name',
        action: 'Run `user_name = "Ava"` and reevaluate fallback',
        code: 'user_name = "Ava"\ndisplay = user_name or default_name',
        bindings: [
          { scope: 'global', name: 'user_name', objectId: 'S_AVA' },
          { scope: 'global', name: 'default_name', objectId: 'S_GUEST' },
          { scope: 'global', name: 'display', objectId: 'S_AVA' },
        ],
        objects: [
          { id: 'S_AVA', type: 'str', value: '"Ava"', mutable: false, refCount: 2, accent: 'mint' },
          { id: 'S_GUEST', type: 'str', value: '"Guest"', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Now the left operand is truthy, so `or` short-circuits and returns `user_name`.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 12: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Explore boolean logic!\n\n# 1. Truthiness\nvalues = [0, 1, -1, "", "hello", None, [], [0], True, False]\nfor v in values:\n    print(f"{str(v):>10} → {bool(v)}")\n\nprint()\n\n# 2. Short-circuit behavior\nprint("and:", 0 and "hello")       # Returns first falsy\nprint("and:", "hi" and "hello")    # Returns last truthy\nprint("or:", 0 or "hello")        # Returns first truthy\nprint("or:", "" or 0)             # Returns last falsy\n\nprint()\n\n# 3. Comparison chaining\nx = 15\nprint(f"{x}: 10 < x < 20 → {10 < x < 20}")\nprint(f"{x}: 0 < x < 10 → {0 < x < 10}")\n\nprint()\n\n# 4. De Morgan\'s Law demonstration\nA, B = True, False\nprint(f"not (A and B) = {not (A and B)}")\nprint(f"(not A) or (not B) = {(not A) or (not B)}")\nprint(f"Equal? {not (A and B) == ((not A) or (not B))}")',
    instructions: 'Modify values and observe how truthiness, short-circuiting, and De Morgan\'s Laws work.',
  },

  // ═══════════════════════════════════════
  // Section 13: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  

  // ═══════════════════════════════════════
  // Section 14: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Challenge Q&A' },
  
]

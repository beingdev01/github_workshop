import type { ContentBlock } from '@/types/content'

export const day1Errors: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Errors & Debugging' },
  {
    type: 'text',
    content: 'Every programmer makes mistakes — the difference between a beginner and a professional is how fast you **read the error**. Python\'s error messages are surprisingly informative: they tell you exactly *what* went wrong, *where* it went wrong, and often *why*. Learning to decode them is the single highest-leverage debugging skill you can develop.',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Three Kinds of Errors',
    content: '**Syntax errors** break the rules of the language (Python refuses to run). **Runtime errors** (exceptions) crash the program mid-execution. **Logic errors** run silently but produce wrong output — the hardest to find.',
  },

  // ═══════════════════════════════════════
  // Section 2: Reading a Traceback
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Anatomy of a Traceback' },
  {
    type: 'text',
    content: 'A **traceback** is Python\'s crime-scene report. Read it **bottom-up**: the last line names the exception, the lines above trace the call chain that led there.',
  },
  {
    type: 'code',
    code: 'def divide(a, b):\n    return a / b\n\ndef compute(x):\n    return divide(x, 0)\n\ncompute(10)',
    language: 'python',
  },
  {
    type: 'code',
    code: 'Traceback (most recent call last):\n  File "demo.py", line 7, in <module>\n    compute(10)\n  File "demo.py", line 5, in compute\n    return divide(x, 0)\n  File "demo.py", line 2, in divide\n    return a / b\n           ~~^~~\nZeroDivisionError: division by zero',
    language: 'text',
  },
  {
    type: 'list',
    items: [
      '**Last line** → the exception class (`ZeroDivisionError`) and message (`division by zero`).',
      '**Above it** → the exact line that raised it (`return a / b`).',
      '**Stack frames** → walk upward to see who called whom. Read bottom → top.',
      '**The little `~~^~~` caret** (Python 3.11+) points to the exact offending expression.',
    ],
  },

  // ═══════════════════════════════════════
  // Section 3: Common Exceptions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The Usual Suspects' },
  {
    type: 'code',
    code: '# SyntaxError — code violates Python grammar (won\'t even start)\nif x = 5:   # SyntaxError: invalid syntax (should be ==)\n    pass\n\n# NameError — using a variable that doesn\'t exist\nprint(undefined_var)  # NameError: name \'undefined_var\' is not defined\n\n# TypeError — operation on the wrong type\n"age: " + 25          # TypeError: can only concatenate str (not "int") to str\nlen(42)               # TypeError: object of type \'int\' has no len()\n\n# ValueError — right type, invalid value\nint("abc")            # ValueError: invalid literal for int() with base 10\n\n# IndexError — list index out of range\nnums = [1, 2, 3]\nnums[10]              # IndexError: list index out of range\n\n# KeyError — missing dictionary key\nuser = {"name": "Alice"}\nuser["age"]           # KeyError: \'age\'\n\n# AttributeError — method/attribute not on this object\n"hello".push("!")     # AttributeError: \'str\' object has no attribute \'push\'\n\n# ZeroDivisionError — dividing by zero\n10 / 0                # ZeroDivisionError\n\n# IndentationError — inconsistent indentation\ndef f():\nreturn 1              # IndentationError: expected an indented block',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Learn the Exception, Not the Error',
    content: 'Don\'t memorize error *messages* — those change. Learn the **exception classes** (`ValueError`, `TypeError`, `KeyError`). They map to specific failure categories and you\'ll reach for them later when writing `except` clauses.',
  },

  // ═══════════════════════════════════════
  // Section 4: try / except
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Handling Exceptions: try / except' },
  {
    type: 'text',
    content: 'Sometimes errors are expected — a user might type `"abc"` when we asked for a number. Wrap risky code in `try` and catch the specific exception with `except`.',
  },
  {
    type: 'code',
    code: 'try:\n    age = int(input("Age? "))\n    print(f"You are {age} years old.")\nexcept ValueError:\n    print("That wasn\'t a number!")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Catch Specifically — Never Bare except',
    content: 'A bare `except:` catches **everything**, including `KeyboardInterrupt` (Ctrl-C) and `SystemExit`. You will hide real bugs. Always name the exception: `except ValueError:`, or at worst `except Exception:`.',
  },
  {
    type: 'code',
    code: '# Multiple exceptions, different responses\ntry:\n    data = open("config.txt").read()\n    value = int(data)\nexcept FileNotFoundError:\n    print("No config file — using defaults.")\n    value = 0\nexcept ValueError:\n    print("Config file is corrupted.")\n    value = 0\n\n# Group related exceptions\ntry:\n    result = risky_operation()\nexcept (TypeError, ValueError) as e:\n    print(f"Bad input: {e}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: else and finally
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'else and finally Clauses' },
  {
    type: 'text',
    content: 'The full shape is `try / except / else / finally`. Each clause has a precise job.',
  },
  {
    type: 'list',
    items: [
      '**`try`** — code that might fail.',
      '**`except`** — runs only if a matching exception was raised.',
      '**`else`** — runs only if `try` finished *without* an exception.',
      '**`finally`** — runs **always**, even if an exception slipped past. Use it for cleanup (closing files, releasing locks).',
    ],
  },
  {
    type: 'code',
    code: 'try:\n    f = open("data.txt")\n    content = f.read()\nexcept FileNotFoundError:\n    print("Missing file.")\nelse:\n    print(f"Read {len(content)} characters.")\nfinally:\n    print("Cleanup runs no matter what.")\n    try:\n        f.close()\n    except NameError:\n        pass',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Why `else`?',
    content: 'Putting the happy-path code in `else` keeps it **outside** the `try` block — so a bug there won\'t be silently swallowed by your `except`. It makes the boundary between "might fail" and "definitely worked" explicit.',
  },

  // ═══════════════════════════════════════
  // Section 6: Raising Exceptions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Raising Your Own Errors' },
  {
    type: 'text',
    content: 'When *your* function receives bad input, **raise** — don\'t return a sentinel like `-1` or `None`. Failing loudly is a feature.',
  },
  {
    type: 'code',
    code: 'def set_age(age):\n    if not isinstance(age, int):\n        raise TypeError(f"age must be int, got {type(age).__name__}")\n    if age < 0:\n        raise ValueError(f"age cannot be negative: {age}")\n    return age\n\nset_age(-5)     # ValueError: age cannot be negative: -5\nset_age("old")  # TypeError: age must be int, got str',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Fail Fast',
    content: 'A `ValueError` at line 3 is always easier to debug than a `TypeError` 400 lines later. Validate inputs at the boundary; trust them inside.',
  },

  // ═══════════════════════════════════════
  // Section 7: Re-raising & Exception Chaining
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Re-raising & Chaining' },
  {
    type: 'code',
    code: '# Re-raise — log and keep propagating\ntry:\n    process(data)\nexcept ValueError:\n    print("Logging: value error in process()")\n    raise   # bare raise re-raises the current exception\n\n# Chain — add context without losing the original (Python 3)\ntry:\n    config = json.loads(text)\nexcept json.JSONDecodeError as e:\n    raise RuntimeError("Config file is invalid") from e\n# The traceback shows BOTH errors — the \'from e\' keeps the cause.',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Debugging Mindset
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The Debugging Mindset' },
  {
    type: 'list',
    items: [
      '**Read the traceback bottom-up.** The exception name + message answers 80% of bugs.',
      '**Reproduce it reliably.** A bug you can reproduce is a bug you can fix.',
      '**Bisect.** Comment out half the code — does the bug remain? Keep halving.',
      '**Print the state.** `print(f"{var=}")` (Python 3.8+) prints both the name and value.',
      '**Check your assumptions.** The bug is almost always where you "know" the code is correct.',
      '**Rubber-duck it.** Explain the code line-by-line out loud. You will find the bug by sentence three.',
    ],
  },
  {
    type: 'code',
    code: '# The f-string self-documenting form (Python 3.8+)\nuser = "Alice"\nitems = [1, 2, 3]\ntotal = sum(items)\n\nprint(f"{user=}, {items=}, {total=}")\n# user=\'Alice\', items=[1, 2, 3], total=6',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Going Deeper: Exception Objects in Memory
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — Exceptions Are Real Objects' },
  {
    type: 'text',
    content: 'A traceback is built from call frames and an exception object. When an error occurs, Python allocates an exception instance and starts unwinding frames until a matching `except` is found.',
  },
  {
    type: 'code',
    code: 'def divide(a, b):\n    return a / b\n\ndef compute(x):\n    return divide(x, 0)\n\ncompute(10)',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Exception Object + Stack Frames',
    description: 'When division fails, Python creates a ZeroDivisionError object and records traceback context.',
    bindings: [
      { scope: 'global', name: 'compute', objectId: 'F_COMPUTE' },
      { scope: 'global', name: 'divide', objectId: 'F_DIVIDE' },
      { scope: 'frame:compute', name: 'x', objectId: 'I10' },
      { scope: 'frame:divide', name: 'a', objectId: 'I10' },
      { scope: 'frame:divide', name: 'b', objectId: 'I0' },
      { scope: 'runtime', name: 'active_exception', objectId: 'E_ZDIV' },
    ],
    objects: [
      {
        id: 'F_COMPUTE',
        type: 'function',
        value: '<function compute(x)>',
        mutable: false,
        accent: 'sky',
      },
      {
        id: 'F_DIVIDE',
        type: 'function',
        value: '<function divide(a, b)>',
        mutable: false,
        accent: 'sky',
      },
      {
        id: 'I10',
        type: 'int',
        value: '10',
        mutable: false,
        accent: 'amber',
      },
      {
        id: 'I0',
        type: 'int',
        value: '0',
        mutable: false,
        accent: 'amber',
      },
      {
        id: 'E_ZDIV',
        type: 'ZeroDivisionError',
        value: 'ZeroDivisionError("division by zero")',
        mutable: false,
        note: 'Carries message and traceback metadata linking frames in reverse call order.',
        accent: 'coral',
      },
    ],
    insights: [
      'The traceback is structured data derived from frame objects.',
      'Exceptions propagate by unwinding stack frames until handled.',
      'Catching an exception gives you access to the same exception object instance.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: From Raise to Recover',
    prompt: 'See how an exception object is created, bound to `err`, and then released.',
    steps: [
      {
        title: 'Enter try Block',
        action: 'Start a conversion that may fail',
        code: 'try:\n    value = int("oops")\nexcept ValueError as err:\n    value = 0',
        bindings: [
          { scope: 'global', name: 'int', objectId: 'F_INT' },
        ],
        objects: [
          { id: 'F_INT', type: 'builtin function', value: '<class int>', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'S_BAD', type: 'str', value: '"oops"', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Execution enters `try` and begins converting a string to an integer.',
      },
      {
        title: 'Conversion Raises',
        action: '`int("oops")` fails with ValueError',
        code: 'value = int("oops")',
        bindings: [
          { scope: 'runtime', name: 'active_exception', objectId: 'E1' },
        ],
        objects: [
          { id: 'S_BAD', type: 'str', value: '"oops"', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'E1', type: 'ValueError', value: 'ValueError("invalid literal for int()")', mutable: false, refCount: 1, accent: 'coral' },
        ],
        explanation: 'Python allocates a `ValueError` object and starts searching for a matching handler.',
      },
      {
        title: 'Handler Binds Exception',
        action: '`except ValueError as err` catches and recovers',
        code: 'except ValueError as err:\n    value = 0',
        bindings: [
          { scope: 'frame:except', name: 'err', objectId: 'E1' },
          { scope: 'global', name: 'value', objectId: 'I0' },
        ],
        objects: [
          { id: 'E1', type: 'ValueError', value: 'ValueError("invalid literal for int()")', mutable: false, refCount: 1, accent: 'coral' },
          { id: 'I0', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: 'The caught exception instance is temporarily bound to `err`, and fallback value is produced.',
      },
      {
        title: 'Exit Handler',
        action: 'Except block ends; normal execution resumes',
        code: '# continue program',
        bindings: [
          { scope: 'global', name: 'value', objectId: 'I0' },
        ],
        objects: [
          { id: 'E1', type: 'ValueError', value: 'ValueError("invalid literal for int()")', mutable: false, refCount: 0, accent: 'coral', note: 'No references remain after handler scope exits.' },
          { id: 'I0', type: 'int', value: '0', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: 'After the handler finishes, only recovered state remains in the global scope.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 9: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    instructions: 'Write a function `safe_divide(a, b)` that returns `a / b`, but returns the string "undefined" when dividing by zero and "type error" if the inputs are not numbers. Use try/except — not if-statements.',
    defaultCode: 'def safe_divide(a, b):\n    # your code here\n    pass\n\nprint(safe_divide(10, 2))    # 5.0\nprint(safe_divide(10, 0))    # undefined\nprint(safe_divide("10", 2))  # type error',
  },

  // ═══════════════════════════════════════
  // Section 10: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What is the difference between `SyntaxError` and `NameError`?',
        answer: '**`SyntaxError`** happens before the code runs — Python can\'t even parse it (e.g. `if x = 5:`). **`NameError`** happens at runtime when a variable name is used but never assigned in the current scope.',
      },
      {
        question: 'Should I ever use a bare `except:`?',
        answer: 'Almost never. It catches `KeyboardInterrupt` and `SystemExit` too, making programs un-killable and hiding real bugs. Catch `Exception` if you truly need a broad net — but preferably catch the **specific** exception you expect.',
      },
      {
        question: 'What\'s the difference between `except ValueError` and `except ValueError as e`?',
        answer: 'Both catch the exception. The `as e` form **binds** the exception object to `e` so you can inspect `str(e)`, `e.args`, or re-raise with context. Without `as`, the exception is caught but you lose its details.',
      },
      {
        question: 'When does the `finally` block *not* run?',
        answer: 'Effectively never during normal Python execution — it runs even if `try` or `except` raise. The only ways to skip it: the process is hard-killed (`os._exit()`, SIGKILL), a power failure, or an infinite loop inside `try`.',
      },
      {
        question: 'Why use `raise ... from e` instead of just `raise`?',
        answer: '`from e` **chains** the exceptions — the traceback shows *both* the original cause and your higher-level exception. This preserves debugging information while giving callers a cleaner, semantic error type.',
      },
      {
        question: 'Is it more "Pythonic" to ask permission or forgiveness?',
        answer: 'Forgiveness — **EAFP** (Easier to Ask Forgiveness than Permission). Try the operation and catch the exception, rather than pre-checking with `if`. It\'s faster (no redundant check) and avoids **race conditions** (the state might change between check and use).',
      },
    ],
  },
]

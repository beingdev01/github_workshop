import type { ContentBlock } from '@/types/content'

export const day1Variables: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction to Variables
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Variables & Memory' },
  {
    type: 'text',
    content: 'Variables store and retrieve data. A variable is a **name** that refers to a **value** stored in memory.',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'Python\'s Memory Model',
    content: 'In Python, variables are like **sticky labels** pointing to objects in memory. When you write `x = 42`, Python creates an integer object `42`, and `x` is a label pointing to it.',
  },
  {
    type: 'code',
    code: '# Creating variables using the = operator\nname = "Alice"       # String\nage = 25             # Integer\nheight = 5.6         # Float\nis_student = True    # Boolean\n\nprint(name)\nprint(age)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 2: Assignment Operator
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'The Assignment Operator (=)' },
  {
    type: 'text',
    content: 'The `=` symbol evaluates the expression on the right side first, then assigns the result to the variable on the left.',
  },
  {
    type: 'code',
    code: 'x = 10          # Assign 10 to x\nprint(x)        # 10\n\nx = x + 5       # Evaluate 10 + 5, assign 15 back to x\nprint(x)        # 15\n\ny = x * 2       # Evaluate 15 * 2, assign 30 to y\nprint(y)        # 30',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: '= vs ==',
    content: '`=` is the **assignment** operator (stores a value). `==` is the **equality** operator (checks if two values are equal).',
  },

  // ═══════════════════════════════════════
  // Section 3: Augmented Assignment
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Augmented Assignment' },
  {
    type: 'text',
    content: 'Python provides shorthand operators that combine arithmetic with assignment:',
  },
  {
    type: 'code',
    code: 'x = 10\n\nx += 5       # Same as x = x + 5 (x is now 15)\nx -= 3       # Same as x = x - 3 (x is now 12)\nx *= 2       # Same as x = x * 2 (x is now 24)\nx //= 5      # Same as x = x // 5 (x is now 4)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Naming Rules and Conventions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Variable Naming Rules' },
  {
    type: 'text',
    content: 'Python has strict rules for variable names:',
  },
  {
    type: 'list',
    items: [
      'Must start with a **letter** or **underscore** (_)',
      'Can contain letters, digits, and underscores',
      'Cannot start with a digit (`1name` is invalid)',
      'Cannot contain spaces (`my var` is invalid)',
      'Cannot be a **reserved keyword** (`if`, `for`, `class`, etc.)',
      'Names are **case-sensitive** (`age` and `Age` are different)',
    ],
  },
  {
    type: 'code',
    code: '# ✅ Valid names\nname = "Alice"\n_private = 42\nstudent_count = 30\n\n# ❌ Invalid names (cause errors)\n# 2fast = "error"      # Starts with number\n# my-var = "error"     # Hyphen not allowed\n# class = "error"      # Reserved keyword',
    language: 'python',
  },
  {
    type: 'text',
    content: '**Conventions (Best Practices):**',
  },
  {
    type: 'list',
    items: [
      'Use **snake_case** for variables and functions: `student_name`, `total_score`',
      'Use **UPPER_SNAKE_CASE** for constants: `MAX_RETRIES`, `PI`',
      'Use **descriptive names** — `student_count` is better than `sc`',
      'Avoid single-letter names except in loops (`i`, `j`) or math (`x`, `y`)',
    ],
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Python\'s Reserved Keywords',
    content: 'You can see all keywords by running: `import keyword; print(keyword.kwlist)`. These include: `False`, `None`, `True`, `and`, `as`, `assert`, `async`, `await`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`, `except`, `finally`, `for`, `from`, `global`, `if`, `import`, `in`, `is`, `lambda`, `nonlocal`, `not`, `or`, `pass`, `raise`, `return`, `try`, `while`, `with`, `yield`.',
  },

  // ═══════════════════════════════════════
  // Section 5: Multiple Assignment
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Multiple Assignment & Unpacking' },
  {
    type: 'text',
    content: 'Assign values to multiple variables at once:',
  },
  {
    type: 'code',
    code: '# 1. Multiple assignment (tuple unpacking)\nx, y, z = 1, 2, 3\n\n# 2. Same value to multiple variables\na = b = c = 0\n\n# 3. Swapping variables\nx = 10\ny = 20\nx, y = y, x  # Swap! No temp variable needed',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'How Does Swapping Work?',
    content: '`x, y = y, x` evaluates the right side as a tuple `(20, 10)`, then unpacks it into the left side. The right side is fully evaluated before assignment.',
  },

  // ═══════════════════════════════════════
  // Section 6: Dynamic Typing
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Dynamic Typing' },
  {
    type: 'text',
    content: 'Python is dynamically typed. You don\'t declare variable types; they are determined by the value. A variable can change type:',
  },
  {
    type: 'code',
    code: 'x = 42           # x is an int\nx = "hello"      # Now x is a string\nx = 3.14         # Now x is a float',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Dynamic Typing Best Practices',
    content: 'Changing a variable\'s type is generally bad practice and leads to bugs. If `age` starts as an integer, keep it an integer.',
  },

  // ═══════════════════════════════════════
  // Section 7: The id() Function
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Object Identity with id()' },
  {
    type: 'text',
    content: 'Every object has a unique memory address. Inspect it with `id()`:',
  },
  {
    type: 'code',
    code: 'x = 42\nprint(id(x))       # e.g., 140234567890\n\ny = 42\nprint(id(y))       # Same number! Python reuses small integers.\nprint(x is y)      # True — x and y point to the SAME object\n\n# == checks VALUE equality\n# is checks IDENTITY (exact same object in memory)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Integer Caching',
    content: 'Python caches integers from -5 to 256 for performance. `a = 100; b = 100; a is b` is `True`. But `a = 300; b = 300; a is b` might be `False`. Always use `==` for comparing values, not `is`.',
  },

  // ═══════════════════════════════════════
  // Section 8: Reassignment & References
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Reassignment & References' },
  {
    type: 'text',
    content: 'Variables are labels pointing to objects. Reassigning moves the label to a new object:',
  },
  {
    type: 'code',
    code: 'x = 10\nx = 20          # x now points to a NEW object (20)\n\n# Multiple labels can point to the same object\na = [1, 2, 3]\nb = a           # b points to the SAME list object\n\nb.append(4)     # Modifying through b...\nprint(a)        # [1, 2, 3, 4] — a sees the change too!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 9: Deleting Variables
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Deleting Variables with del' },
  {
    type: 'text',
    content: 'Delete a variable using `del`. This removes the name; the object is garbage-collected if no other references exist:',
  },
  {
    type: 'code',
    code: 'x = 42\ndel x        # Remove the variable name \'x\'\n# print(x)   # NameError: name \'x\' is not defined\n\n# del doesn\'t delete the object itself\na = [1, 2, 3]\nb = a\ndel a\nprint(b)     # [1, 2, 3] — the list object still exists through b',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 10: Interactive Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Experiment with variables!\n\n# 1. Create variables\nfirst_name = "Ada"\nlast_name = "Lovelace"\nbirth_year = 1815\ncurrent_year = 2026\n\n# 2. Calculate age\nage = current_year - birth_year\nprint(f"{first_name} {last_name} would be {age} years old")\n\n# 3. Try swapping\nx = "Python"\ny = "Java"\nx, y = y, x\nprint(f"Swapped: x={x}, y={y}")\n\n# 4. Augmented assignment\ncounter = 0\ncounter += 1\ncounter += 1\nprint(f"Counter: {counter}")',
    instructions: 'Modify the variables, try creating your own, and experiment with swapping and augmented assignment.',
  },

  // ═══════════════════════════════════════
  // Section 11: Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'What does the `=` operator do in Python?',
        answer: 'The `=` operator is the assignment operator. It evaluates the right side first, then assigns the result to the left-side variable. `==` is used for equality checking.',
      },
      {
        question: 'What will this code output? `x = 5; x = x + 3; x *= 2; print(x)`',
        answer: '**16**\n\nx starts at 5. `x = x + 3` makes it 8. `x *= 2` (same as `x = x * 2`) makes it 16.',
      },
      {
        question: 'What will this code output? `a, b = 10, 20; a, b = b, a; print(a, b)`',
        answer: '**20 10**\n\nThe right side `b, a` evaluates to `(20, 10)` first, then this tuple is unpacked into `a` and `b`. So `a` becomes 20 and `b` becomes 10.',
      },
      {
        question: 'Which of the following is NOT a valid variable name in Python? `_my_var`, `myVar2`, `2nd_place`, `student_name`',
        answer: '**`2nd_place`**\n\nVariable names cannot start with a digit. `2nd_place` starts with `2`, which is invalid. All other options follow Python\'s naming rules.',
      },
      {
        question: 'What does this code print? `x = "hello"; print(type(x).__name__)`',
        answer: '**`str`**\n\n`type(x)` returns `<class \'str\'>`. The `__name__` attribute of a type gives just the type name as a string, which is `"str"`.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Section 12: Challenge Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Challenge Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Temperature Converter: Write a program that converts a temperature from Celsius to Fahrenheit. The formula is: F = (C * 9/5) + 32',
        answer: '**Solution:**\n\n```python\ncelsius = 37.5\nfahrenheit = (celsius * 9/5) + 32\nprint(f"{celsius}°C = {fahrenheit}°F")\n```\n\n**How it works:**\n- The formula is: `fahrenheit = (celsius * 9/5) + 32`\n- For celsius = 37.5: `(37.5 * 9/5) + 32 = 67.5 + 32 = 99.5`\n- Output: `37.5°C = 99.5°F`',
      },
    ],
  },
]

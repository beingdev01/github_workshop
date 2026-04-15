import type { ContentBlock } from '@/types/content'

export const day3Tuples: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Tuples — Immutable Sequences' },
  {
    type: 'text',
    content: 'Tuples are Python\'s **immutable** ordered sequences. They look like lists but cannot be modified after creation. This immutability makes them faster, safer, and usable as dictionary keys and set members. Tuples are ideal for representing fixed collections of related values — like coordinates, RGB colors, or database records.',
  },

  // ═══════════════════════════════════════
  // Section 2: Creating Tuples
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Creating Tuples' },
  {
    type: 'code',
    code: '# Parentheses (most common)\npoint = (3, 4)\nrgb = (255, 128, 0)\nprint(point)     # (3, 4)\nprint(type(rgb)) # <class \'tuple\'>\n\n# Without parentheses — it\'s the COMMAS that make a tuple!\ncoords = 10, 20, 30\nprint(type(coords))  # <class \'tuple\'>\n\n# Single-element tuple — MUST have trailing comma!\nsingle = (42,)\nprint(type(single))  # <class \'tuple\'>\nprint(len(single))   # 1\n\n# Without comma — NOT a tuple!\nnot_tuple = (42)\nprint(type(not_tuple))  # <class \'int\'>\n\n# Empty tuple\nempty = ()\nprint(type(empty))  # <class \'tuple\'>\nprint(len(empty))   # 0\n\n# tuple() constructor — from any iterable\nfrom_list = tuple([1, 2, 3])\nfrom_str = tuple("hello")\nfrom_range = tuple(range(5))\nprint(from_list)    # (1, 2, 3)\nprint(from_str)     # (\'h\', \'e\', \'l\', \'l\', \'o\')\nprint(from_range)   # (0, 1, 2, 3, 4)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'The Single-Element Trap',
    content: '`(42)` is just the integer 42 in parentheses (like math grouping). To make a single-element tuple, you MUST include a trailing comma: `(42,)`. This is the most common tuple mistake.',
  },

  // ═══════════════════════════════════════
  // Section 3: Indexing and Slicing
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Indexing, Slicing & Operations' },
  {
    type: 'code',
    code: '# Indexing — same as lists\ncolors = ("red", "green", "blue", "yellow")\nprint(colors[0])     # red\nprint(colors[-1])    # yellow\n\n# Slicing — returns a new tuple\nprint(colors[1:3])   # (\'green\', \'blue\')\nprint(colors[:2])    # (\'red\', \'green\')\nprint(colors[::-1])  # (\'yellow\', \'blue\', \'green\', \'red\')\n\n# Concatenation — creates a NEW tuple\na = (1, 2)\nb = (3, 4)\nc = a + b\nprint(c)  # (1, 2, 3, 4)\n\n# Repetition\nprint((0,) * 5)  # (0, 0, 0, 0, 0)\n\n# Membership\nprint("red" in colors)    # True\nprint("purple" in colors) # False\n\n# Length, min, max, sum\nnums = (10, 30, 20, 50, 40)\nprint(f"len: {len(nums)}")    # 5\nprint(f"min: {min(nums)}")    # 10\nprint(f"max: {max(nums)}")    # 50\nprint(f"sum: {sum(nums)}")    # 150\n\n# count and index (only 2 methods!)\ndata = (1, 2, 3, 2, 1, 2)\nprint(data.count(2))    # 3\nprint(data.index(3))    # 2 (first occurrence)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Immutability
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Immutability — What It Really Means' },
  {
    type: 'code',
    code: '# Tuples CANNOT be modified\npoint = (3, 4)\n# point[0] = 5       # TypeError: tuple doesn\'t support item assignment\n# point.append(6)    # AttributeError: tuple has no append\n# del point[0]       # TypeError: tuple doesn\'t support item deletion\n\n# BUT — if a tuple CONTAINS a mutable object...\ntricky = ([1, 2], [3, 4])\n# tricky[0] = [5, 6]    # TypeError (can\'t replace the list)\ntricky[0].append(99)     # Works! The list itself is mutable\nprint(tricky)            # ([1, 2, 99], [3, 4])\n\n# The tuple still references the SAME list objects\n# The references didn\'t change — only the list\'s contents did\n\n# Why this matters:\n# "Immutable" means the tuple\'s references can\'t change,\n# NOT that the referenced objects can\'t change',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Mutable Objects in Tuples',
    content: 'A tuple containing a list is immutable in that you cannot replace the list, but the list itself can still be modified. Avoid putting mutable objects in tuples if you need truly frozen data.',
  },

  // ═══════════════════════════════════════
  // Section 5: Tuple Packing & Unpacking
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Packing and Unpacking' },
  {
    type: 'code',
    code: '# Packing — combining values into a tuple\ncoordinates = 10, 20, 30   # Tuple packing\nprint(coordinates)           # (10, 20, 30)\n\n# Unpacking — extracting values from a tuple\nx, y, z = coordinates\nprint(f"x={x}, y={y}, z={z}")  # x=10, y=20, z=30\n\n# Swapping variables (tuple packing + unpacking)\na, b = 5, 10\na, b = b, a     # Right side creates tuple (10, 5), left side unpacks\nprint(f"a={a}, b={b}")  # a=10, b=5\n\n# Unpacking with * (star/splat operator)\nfirst, *rest = [1, 2, 3, 4, 5]\nprint(first)  # 1\nprint(rest)   # [2, 3, 4, 5]  (always a list!)\n\n*start, last = [1, 2, 3, 4, 5]\nprint(start)  # [1, 2, 3, 4]\nprint(last)   # 5\n\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(first)   # 1\nprint(middle)  # [2, 3, 4]\nprint(last)    # 5\n\n# Unpacking in function returns\ndef divide(a, b):\n    return a // b, a % b  # Returns a tuple\n\nquotient, remainder = divide(17, 5)\nprint(f"17 / 5 = {quotient} remainder {remainder}")\n\n# Ignoring values with _\nfirst, _, _, last = (10, 20, 30, 40)\nprint(f"first={first}, last={last}")  # first=10, last=40',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'The Swap Trick',
    content: '`a, b = b, a` works because Python evaluates the entire right side first (creating a tuple), then unpacks it to the left side. No temporary variable needed!',
  },

  // ═══════════════════════════════════════
  // Section 6: Tuples vs Lists
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Tuples vs Lists — When to Use Which' },
  {
    type: 'list',
    items: [
      '**Tuples are faster** — creation and access are slightly faster due to immutability optimizations',
      '**Tuples use less memory** — Python can optimize storage for immutable objects',
      '**Tuples are hashable** (if all elements are hashable) — can be dict keys and set members',
      '**Tuples signal intent** — "this collection should not change"',
      '**Lists are for homogeneous collections** — items of the same type (list of scores, list of names)',
      '**Tuples are for heterogeneous records** — items of different types (name, age, grade)',
    ],
  },
  {
    type: 'code',
    code: '# Tuple as dictionary key (lists CANNOT be keys)\nlocations = {}\nlocations[(40.7128, -74.0060)] = "New York"\nlocations[(51.5074, -0.1278)] = "London"\nlocations[(35.6762, 139.6503)] = "Tokyo"\n\nfor coord, city in locations.items():\n    print(f"  {city}: {coord}")\n\n# Tuple as set member\nvisited = {(1, 0), (0, 1), (1, 1)}\nif (1, 0) in visited:\n    print("Already visited (1, 0)")\n\n# Lists CANNOT do this:\n# bad_dict = {[1, 2]: "value"}  # TypeError: unhashable type: \'list\'\n\n# Named tuples — for self-documenting code\nfrom collections import namedtuple\n\nPoint = namedtuple("Point", ["x", "y"])\np = Point(3, 4)\nprint(f"x={p.x}, y={p.y}")  # x=3, y=4\nprint(f"Point: {p}")         # Point(x=3, y=4)\n\n# Named tuples are still tuples\nprint(isinstance(p, tuple))  # True\nprint(p[0], p[1])            # 3 4\n\n# Practical: Student records\nStudent = namedtuple("Student", ["name", "age", "grade"])\nstudents = [\n    Student("Alice", 20, "A"),\n    Student("Bob", 19, "B+"),\n    Student("Charlie", 21, "A-"),\n]\nfor s in students:\n    print(f"  {s.name} (age {s.age}): {s.grade}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Practical Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Practical Tuple Patterns' },
  {
    type: 'code',
    code: '# 1. Multiple return values\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nlo, hi = min_max([4, 7, 1, 9, 2])\nprint(f"Min: {lo}, Max: {hi}")  # Min: 1, Max: 9\n\n# 2. Enumerate returns tuples\nfruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits):\n    print(f"  {i}: {fruit}")\n\n# 3. zip returns tuples\nnames = ["Alice", "Bob"]\nscores = [95, 87]\nfor name, score in zip(names, scores):\n    print(f"  {name}: {score}")\n\n# 4. Sorting by tuple comparison\n# Tuples compare element by element\nprint((1, 2) < (1, 3))   # True (first elements equal, compare second)\nprint((1, 2) < (2, 0))   # True (first element 1 < 2)\n\nstudents = [("Charlie", 85), ("Alice", 92), ("Bob", 92)]\n# Sort by grade (desc), then name (asc)\nstudents.sort(key=lambda s: (-s[1], s[0]))\nfor name, grade in students:\n    print(f"  {name}: {grade}")\n# Alice: 92, Bob: 92, Charlie: 85\n\n# 5. Tuple as lightweight record\ndef parse_date(date_str):\n    parts = date_str.split("-")\n    return int(parts[0]), int(parts[1]), int(parts[2])\n\nyear, month, day = parse_date("2024-03-15")\nprint(f"Year: {year}, Month: {month}, Day: {day}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Experiment with tuples!\n\n# 1. Coordinate geometry\ndef distance(p1, p2):\n    return ((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2) ** 0.5\n\na = (0, 0)\nb = (3, 4)\nprint(f"Distance from {a} to {b}: {distance(a, b)}")\n\n# 2. Tuple unpacking in a loop\nstudent_records = [\n    ("Alice", 20, [90, 85, 92]),\n    ("Bob", 19, [78, 88, 95]),\n    ("Charlie", 21, [82, 79, 88]),\n]\n\nfor name, age, grades in student_records:\n    avg = sum(grades) / len(grades)\n    print(f"{name} (age {age}): avg = {avg:.1f}")\n\n# 3. Named tuple\nfrom collections import namedtuple\nColor = namedtuple("Color", "r g b")\nred = Color(255, 0, 0)\ngreen = Color(0, 255, 0)\nblue = Color(0, 0, 255)\nfor c in [red, green, blue]:\n    print(f"  RGB({c.r}, {c.g}, {c.b})")',
    instructions: 'Try creating your own tuple patterns — coordinates, records, or function return values.',
  },

  // ═══════════════════════════════════════
  // Section 9: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  {
    type: 'quiz',
    quiz: {
      id: 'quiz-tuples',
      title: 'Tuples Quiz',
      questions: [
        {
          type: 'predict-output',
          code: 'x = (42)\nprint(type(x).__name__)',
          options: ['tuple', 'int', 'list', 'Error'],
          correctIndex: 1,
          explanation: '(42) is just 42 in parentheses — an int. To make a single-element tuple, use (42,) with a trailing comma.',
        },
        {
          type: 'predict-output',
          code: 'a, *b, c = (1, 2, 3, 4, 5)\nprint(b)',
          options: ['(2, 3, 4)', '[2, 3, 4]', '2 3 4', 'Error'],
          correctIndex: 1,
          explanation: 'The * operator collects remaining values into a LIST (not a tuple), even when unpacking a tuple.',
        },
        {
          type: 'mcq',
          question: 'Which of these can be used as a dictionary key?',
          options: ['[1, 2, 3]', '{1, 2, 3}', '(1, 2, 3)', '{"a": 1}'],
          correctIndex: 2,
          explanation: 'Only hashable (immutable) types can be dict keys. Tuples (with hashable elements) are hashable. Lists, sets, and dicts are not.',
        },
        {
          type: 'predict-output',
          code: 't = (1, [2, 3])\nt[1].append(4)\nprint(t)',
          options: ['Error', '(1, [2, 3, 4])', '(1, [2, 3])', 'TypeError'],
          correctIndex: 1,
          explanation: 'The tuple is immutable (can\'t replace its elements), but the list inside it is mutable. Appending to the list works because we\'re modifying the list, not the tuple.',
        },
        {
          type: 'predict-output',
          code: 'a, b = 5, 10\na, b = b, a + b\nprint(a, b)',
          options: ['10 15', '5 15', '10 20', '15 10'],
          correctIndex: 0,
          explanation: 'Right side evaluates FIRST: b=10, a+b=5+10=15. Then unpacks: a=10, b=15. Output: 10 15.',
        },
      ],
    },
  },

  // ═══════════════════════════════════════
  // Section 10: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  {
    type: 'challenge',
    challenge: {
      id: 'challenge-tuples',
      title: 'Contact Book with Tuples',
      difficulty: 'medium',
      description: 'Build a simple contact book that stores contacts as named tuples with name, phone, and email. Implement functions to add, search by name, and display all contacts sorted by name.',
      starterCode: 'from collections import namedtuple\n\nContact = namedtuple("Contact", ["name", "phone", "email"])\n\ndef add_contact(contacts, name, phone, email):\n    """Add a new contact (returns new list)"""\n    contacts.append(Contact(name, phone, email))\n    return contacts\n\ndef search(contacts, query):\n    """Find contacts whose name contains the query (case-insensitive)"""\n    query = query.lower()\n    return [c for c in contacts if query in c.name.lower()]\n\ndef display(contacts):\n    """Display all contacts sorted by name"""\n    for c in sorted(contacts, key=lambda c: c.name):\n        print(f"  {c.name}: {c.phone} | {c.email}")\n\n# Test it\nbook = []\nbook = add_contact(book, "Alice Smith", "555-1234", "alice@email.com")\nbook = add_contact(book, "Bob Jones", "555-5678", "bob@email.com")\nbook = add_contact(book, "Alice Wong", "555-9012", "awong@email.com")\n\nprint("All contacts:")\ndisplay(book)\n\nprint("\\nSearch for \'alice\':")\nresults = search(book, "alice")\nfor c in results:\n    print(f"  {c.name}: {c.phone}")',
      testCases: [
        { input: '', expected: 'All contacts:\n  Alice Smith: 555-1234 | alice@email.com\n  Alice Wong: 555-9012 | awong@email.com\n  Bob Jones: 555-5678 | bob@email.com\n\nSearch for \'alice\':\n  Alice Smith: 555-1234\n  Alice Wong: 555-9012' },
      ],
      hints: [
        'namedtuple creates a class — call it like Contact("name", "phone", "email")',
        'Use list comprehension with string methods for search',
        'sorted() with a key function for alphabetical display',
      ],
      solution: 'from collections import namedtuple\n\nContact = namedtuple("Contact", ["name", "phone", "email"])\n\ndef add_contact(contacts, name, phone, email):\n    contacts.append(Contact(name, phone, email))\n    return contacts\n\ndef search(contacts, query):\n    query = query.lower()\n    return [c for c in contacts if query in c.name.lower()]\n\ndef display(contacts):\n    for c in sorted(contacts, key=lambda c: c.name):\n        print(f"  {c.name}: {c.phone} | {c.email}")',
    },
  },
]

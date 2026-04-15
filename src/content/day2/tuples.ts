import type { ContentBlock } from '@/types/content'

export const day2Tuples: ContentBlock[] = [
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
  // ═══════════════════════════════════════
  // Going Deeper: Why Tuples Exist
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — Why Tuples Matter' },

  {
    type: 'heading', level: 2, text: 'Immutability Unlocks Superpowers' },
  {
    type: 'text',
    content: 'A tuple is an immutable ordered sequence. That single property makes it **hashable** — which makes it usable as a dictionary key or set member, whereas a list can never be.',
  },
  {
    type: 'code',
    code: '# Tuples are hashable — lists aren\'t\npoints_visited = {(0, 0), (1, 2), (3, 4)}     # set of coordinate pairs ✓\n# points_visited = {[0, 0], [1, 2]}           # TypeError: unhashable type: \'list\'\n\n# Tuple as composite dict key\nprices = {("AAPL", "2026-01-01"): 175.32, ("GOOGL", "2026-01-01"): 142.17}\nprint(prices[("AAPL", "2026-01-01")])',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Packing & Unpacking' },
  {
    type: 'code',
    code: '# Packing — comma makes the tuple\npoint = 3, 4                  # (3, 4)\n\n# Unpacking\nx, y = point\nprint(x, y)                   # 3 4\n\n# Swap without a temp variable\na, b = 1, 2\na, b = b, a\nprint(a, b)                   # 2 1\n\n# Multiple returns — really one tuple\ndef min_max(seq):\n    return min(seq), max(seq)\n\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)                 # 1 5\n\n# Star-unpacking (Python 3)\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(first, middle, last)    # 1 [2, 3, 4] 5',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Packing and Unpacking Bindings',
    description: 'Tuple packing creates one tuple object; unpacking rebinds names to its element objects.',
    bindings: [
      { scope: 'global', name: 'point', objectId: 'T_POINT' },
      { scope: 'global', name: 'x', objectId: 'I3' },
      { scope: 'global', name: 'y', objectId: 'I4' },
      { scope: 'frame:return', name: 'retval', objectId: 'T_MM' },
    ],
    objects: [
      {
        id: 'T_POINT',
        type: 'tuple',
        value: '(3, 4)',
        mutable: false,
        note: 'Fixed-size immutable sequence object.',
        accent: 'sky',
      },
      { id: 'I3', type: 'int', value: '3', mutable: false, accent: 'amber' },
      { id: 'I4', type: 'int', value: '4', mutable: false, accent: 'amber' },
      {
        id: 'T_MM',
        type: 'tuple',
        value: '(1, 5)',
        mutable: false,
        note: 'Function returning multiple values really returns one tuple object.',
        accent: 'mint',
      },
    ],
    insights: [
      'Commas create tuples; parentheses are often just grouping syntax.',
      'Unpacking does not copy element objects; it binds names to existing references.',
      'Swap syntax (`a, b = b, a`) is a compact pack/unpack sequence.',
    ],
  },

  {
    type: 'heading', level: 2, text: 'Named Tuples — Structured Data' },
  {
    type: 'text',
    content: 'When positional access (`t[0]`, `t[1]`) gets confusing, reach for `collections.namedtuple` — it\'s a tuple with named fields. Like a lightweight, immutable class.',
  },
  {
    type: 'code',
    code: 'from collections import namedtuple\n\nPoint = namedtuple("Point", ["x", "y"])\np = Point(3, 4)\nprint(p.x, p.y)          # 3 4   — named access\nprint(p[0], p[1])        # 3 4   — still works as tuple\nprint(p)                 # Point(x=3, y=4)\n\n# Or, the modern way — a typed dataclass with frozen=True\nfrom dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Point2:\n    x: int\n    y: int\n\np2 = Point2(3, 4)\nprint(p2.x, p2.y)',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Tuple vs List — When to Use Which' },
  {
    type: 'list',
    items: [
      '**Tuple**: fixed-size, heterogeneous record (a coordinate, a row, a return value). Use when "this is a thing with parts."',
      '**List**: variable-size, homogeneous collection (a list of users, a list of numbers). Use when "this is a bunch of similar items."',
      '**Tuple if you need a dict key / set member** — lists don\'t qualify.',
      '**Tuple is slightly faster to create and iterate** — negligible in most real code.',
    ],
  },
  {
    type: 'heading', level: 2, text: 'Interactive Tuple Identity Trace' },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Immutable Outer, Mutable Inner',
    prompt: 'Observe why a tuple can remain immutable while an inner list still changes.',
    steps: [
      {
        title: 'Create a Tuple With Inner List',
        action: 'Run setup expression',
        code: 'record = ("Ada", [1, 2])',
        bindings: [
          { scope: 'global', name: 'record', objectId: 'T_REC' },
        ],
        objects: [
          { id: 'T_REC', type: 'tuple', value: '("Ada", [1, 2])', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'L_INNER', type: 'list', value: '[1, 2]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Tuple slots are fixed, but one slot points to a mutable list object.',
      },
      {
        title: 'Attempt Tuple Reassignment Fails',
        action: 'Try replacing element 0',
        code: 'record[0] = "Grace"   # TypeError',
        bindings: [
          { scope: 'global', name: 'record', objectId: 'T_REC' },
          { scope: 'runtime', name: 'active_exception', objectId: 'E_TYPE' },
        ],
        objects: [
          { id: 'T_REC', type: 'tuple', value: '("Ada", [1, 2])', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'E_TYPE', type: 'TypeError', value: 'TypeError("tuple does not support item assignment")', mutable: false, refCount: 1, accent: 'coral' },
        ],
        explanation: 'Tuple structure cannot be edited in place, so item assignment is rejected.',
      },
      {
        title: 'Mutate Inner List Succeeds',
        action: 'Run `record[1].append(3)`',
        code: 'record[1].append(3)',
        bindings: [
          { scope: 'global', name: 'record', objectId: 'T_REC' },
        ],
        objects: [
          { id: 'T_REC', type: 'tuple', value: '("Ada", [1, 2, 3])', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'L_INNER', type: 'list', value: '[1, 2, 3]', mutable: true, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Tuple still points to the same inner list object, whose contents are mutable.',
      },
      {
        title: 'Hashability Consequence',
        action: 'Try using tuple as dictionary key',
        code: '# d[record] would fail because record contains list\nkey = ("Ada", 42)\nd = {key: "ok"}',
        bindings: [
          { scope: 'global', name: 'key', objectId: 'T_KEY' },
          { scope: 'global', name: 'd', objectId: 'D1' },
        ],
        objects: [
          { id: 'T_KEY', type: 'tuple', value: '("Ada", 42)', mutable: false, refCount: 2, accent: 'mint' },
          { id: 'D1', type: 'dict', value: '{("Ada", 42): "ok"}', mutable: true, refCount: 1, accent: 'neutral' },
        ],
        explanation: 'A tuple is hashable only when all contained objects are hashable.',
      },
    ],
  },

  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Why does Python have both tuples and lists?',
        answer: 'Different intents. **Tuples** are records: fixed, heterogeneous, hashable. **Lists** are collections: variable, homogeneous, mutable. The immutability of tuples makes them usable as dict keys.',
      },
      {
        question: 'Is `(5)` a tuple?',
        answer: 'No — that\'s just `5` in parentheses. A one-element tuple needs a trailing comma: `(5,)`. The comma makes the tuple, not the parentheses.',
      },
      {
        question: 'Can a tuple contain a list?',
        answer: 'Yes — tuples are shallowly immutable. `t = ([1, 2], "x")` is fine; the tuple itself can\'t be modified, but the list *inside* it can. Such a tuple is **not hashable**, though.',
      },
      {
        question: 'Are tuples really faster than lists?',
        answer: 'Slightly — tuple creation and iteration are a hair faster due to their fixed size. For most applications the difference is negligible. Choose based on **meaning**, not performance.',
      },
    ],
  },
]

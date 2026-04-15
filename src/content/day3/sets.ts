import type { ContentBlock } from '@/types/content'

export const day3Sets: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Sets — Unique Collections' },
  {
    type: 'text',
    content: 'Sets are **unordered collections of unique elements**. Inspired by mathematical sets, they support powerful operations like union, intersection, and difference. Sets excel at membership testing (extremely fast `in` checks), removing duplicates, and comparing groups of items. If you\'ve ever needed to ask "what\'s in A but not in B?" — sets are your answer.',
  },

  // ═══════════════════════════════════════
  // Section 2: Creating Sets
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Creating Sets' },
  {
    type: 'code',
    code: '# Curly braces — but NOT empty! (empty {} is a dict)\nfruits = {"apple", "banana", "cherry"}\nprint(fruits)       # Order may vary!\nprint(type(fruits)) # <class \'set\'>\n\n# Duplicates automatically removed\nnumbers = {1, 2, 2, 3, 3, 3}\nprint(numbers)  # {1, 2, 3}\n\n# From a list (deduplication!)\ndata = [1, 5, 2, 5, 3, 2, 1, 4]\nunique = set(data)\nprint(unique)         # {1, 2, 3, 4, 5}\nprint(sorted(unique)) # [1, 2, 3, 4, 5] (sorted returns a list)\n\n# From a string\nletters = set("mississippi")\nprint(letters)  # {\'m\', \'i\', \'s\', \'p\'}\n\n# Empty set — MUST use set(), not {}\nempty = set()\nprint(type(empty))  # <class \'set\'>\nprint(type({}))     # <class \'dict\'> — gotcha!\n\n# Set comprehension\nevens = {x for x in range(20) if x % 2 == 0}\nprint(evens)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}\n\n# Elements must be hashable (immutable)\nvalid = {1, "hello", (1, 2), True, 3.14}\n# invalid = {[1, 2]}    # TypeError: unhashable type: \'list\'\n# invalid = {{1, 2}}    # TypeError: unhashable type: \'set\'',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'warning',
    title: 'Sets Are Unordered!',
    content: 'Sets have NO guaranteed order. Don\'t rely on the order elements appear when printed. If you need order, use a list or `sorted()`. Also: sets don\'t support indexing (`my_set[0]` is an error).',
  },

  // ═══════════════════════════════════════
  // Section 3: Set Operations
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Set Operations — The Power of Sets' },
  {
    type: 'code',
    code: 'A = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7, 8}\n\n# UNION — elements in A OR B (or both)\nprint(A | B)           # {1, 2, 3, 4, 5, 6, 7, 8}\nprint(A.union(B))      # Same\n\n# INTERSECTION — elements in A AND B\nprint(A & B)               # {4, 5}\nprint(A.intersection(B))   # Same\n\n# DIFFERENCE — elements in A but NOT in B\nprint(A - B)               # {1, 2, 3}\nprint(A.difference(B))     # Same\nprint(B - A)               # {6, 7, 8} — order matters!\n\n# SYMMETRIC DIFFERENCE — elements in A OR B, but NOT both\nprint(A ^ B)                       # {1, 2, 3, 6, 7, 8}\nprint(A.symmetric_difference(B))   # Same\n\n# Visualize:\n#   A = {1, 2, 3, [4, 5]}\n#   B = {[4, 5], 6, 7, 8}\n#   Union:      {1, 2, 3, 4, 5, 6, 7, 8} — everything\n#   Intersect:  {4, 5}                    — overlap\n#   A - B:      {1, 2, 3}                 — only in A\n#   Sym Diff:   {1, 2, 3, 6, 7, 8}        — not shared',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Subset, Superset, Disjoint
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Subset, Superset & Disjoint' },
  {
    type: 'code',
    code: '# Subset: every element of A is in B\nA = {1, 2, 3}\nB = {1, 2, 3, 4, 5}\n\nprint(A <= B)           # True (A is a subset of B)\nprint(A.issubset(B))    # True\nprint(A < B)            # True (A is a PROPER subset — A != B)\nprint(A < A)            # False (not a proper subset of itself)\n\n# Superset: B contains all elements of A\nprint(B >= A)             # True (B is a superset of A)\nprint(B.issuperset(A))    # True\n\n# Disjoint: no elements in common\nX = {1, 2, 3}\nY = {4, 5, 6}\nZ = {3, 4, 5}\n\nprint(X.isdisjoint(Y))  # True (no overlap)\nprint(X.isdisjoint(Z))  # False (3 is in both)\n\n# Equality\nprint({1, 2, 3} == {3, 2, 1})  # True (order doesn\'t matter)\nprint({1, 2} == {1, 2, 3})     # False (different elements)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Modifying Sets
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Modifying Sets' },
  {
    type: 'code',
    code: 'colors = {"red", "green", "blue"}\n\n# Add an element\ncolors.add("yellow")\ncolors.add("red")        # Already exists — no error, no change\nprint(colors)\n\n# Remove elements\ncolors.remove("yellow")  # Raises KeyError if not found\ncolors.discard("purple") # No error if not found — SAFER\nprint(colors)\n\n# Pop — remove and return an ARBITRARY element\ncolors = {"red", "green", "blue", "cyan"}\npopped = colors.pop()\nprint(f"Popped: {popped}")  # Unpredictable which one!\n\n# Update — add multiple elements\ncolors.update(["orange", "purple", "red"])\nprint(colors)\n\n# Set operations with update (modify in place)\nA = {1, 2, 3, 4}\nA |= {5, 6}     # Union update\nprint(A)         # {1, 2, 3, 4, 5, 6}\n\nA &= {2, 4, 6}  # Intersection update\nprint(A)         # {2, 4, 6}\n\nA -= {6}         # Difference update\nprint(A)         # {2, 4}\n\n# Clear\nA.clear()\nprint(A)  # set()',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Practical Applications
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Practical Set Applications' },
  {
    type: 'code',
    code: '# 1. Fast membership testing\n# set \'in\' is O(1), list \'in\' is O(n)\nvalid_users = {"alice", "bob", "charlie", "diana"}\nuser = "bob"\nif user in valid_users:\n    print(f"{user} is authorized")\n\n# 2. Remove duplicates preserving order\ndef unique_ordered(items):\n    seen = set()\n    result = []\n    for item in items:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\ndata = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]\nprint(unique_ordered(data))  # [3, 1, 4, 5, 9, 2, 6]\n\n# 3. Find common interests\nalice_hobbies = {"reading", "hiking", "coding", "cooking"}\nbob_hobbies = {"gaming", "hiking", "coding", "music"}\n\nshared = alice_hobbies & bob_hobbies\nprint(f"Shared: {shared}")  # {\'hiking\', \'coding\'}\n\nonly_alice = alice_hobbies - bob_hobbies\nprint(f"Only Alice: {only_alice}")  # {\'reading\', \'cooking\'}\n\n# 4. Validate required fields\nrequired = {"name", "email", "password"}\nsubmitted = {"name", "email"}\nmissing = required - submitted\nif missing:\n    print(f"Missing fields: {missing}")  # {\'password\'}\n\n# 5. Frozenset — immutable set (can be a dict key or set member)\ncoord = frozenset([1, 2])\nvisited = set()\nvisited.add(coord)          # Works!\nprint(coord in visited)     # True\n# visited.add({1, 2})       # TypeError: unhashable type \'set\'',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Set operations in action!\n\n# 1. Course enrollment analysis\nmath_students = {"Alice", "Bob", "Charlie", "Diana", "Eve"}\nphysics_students = {"Bob", "Diana", "Frank", "Grace"}\ncs_students = {"Alice", "Charlie", "Frank", "Henry"}\n\nboth_math_physics = math_students & physics_students\nprint(f"Math AND Physics: {both_math_physics}")\n\nany_stem = math_students | physics_students | cs_students\nprint(f"Any STEM course: {any_stem}")\n\nonly_math = math_students - physics_students - cs_students\nprint(f"Only Math: {only_math}")\n\n# 2. Spell checker\ndictionary = {"the", "a", "is", "python", "great", "language", "for"}\ntext = "python is a grate languge for cooding"\nwords = set(text.split())\nmisspelled = words - dictionary\nprint(f"\\nMisspelled: {misspelled}")\n\n# 3. Find duplicates in a list\ndef find_duplicates(lst):\n    seen = set()\n    dups = set()\n    for item in lst:\n        if item in seen:\n            dups.add(item)\n        seen.add(item)\n    return dups\n\nnums = [1, 3, 5, 3, 7, 1, 9, 5]\nprint(f"\\nDuplicates: {find_duplicates(nums)}")',
    instructions: 'Experiment with set operations — find intersections, differences, or use sets to solve problems.',
  },

  // ═══════════════════════════════════════
  // Section 8: Quiz
  // ═══════════════════════════════════════
  // ═══════════════════════════════════════
  // Going Deeper: Set Internals
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — How Sets Work' },
  {
    type: 'text',
    content: 'A Python `set` is a **hash table without values** — just keys. It provides O(1) average `in`, `add`, `remove`, and powerful set-algebra operations built into the language.',
  },

  {
    type: 'heading', level: 2, text: 'Membership — O(1) vs List\'s O(n)' },
  {
    type: 'code',
    code: 'import time\n\nbig_list = list(range(1_000_000))\nbig_set  = set(big_list)\n\nt0 = time.time(); _ = 999_999 in big_list;  print(f"list: {(time.time()-t0)*1e3:.2f}ms")\nt0 = time.time(); _ = 999_999 in big_set;   print(f"set:  {(time.time()-t0)*1e3:.4f}ms")\n# set is ~10,000× faster — hash table vs linear scan',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Set Operations (the Math)' },
  {
    type: 'code',
    code: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a | b)       # union:         {1, 2, 3, 4, 5, 6}\nprint(a & b)       # intersection:  {3, 4}\nprint(a - b)       # difference:    {1, 2}\nprint(a ^ b)       # symmetric diff:{1, 2, 5, 6}\n\n# Subset / superset\nprint({1, 2} <= a)    # True — subset\nprint(a >= {1, 2})    # True — superset\nprint({1, 2} < a)     # True — proper subset\n\n# Disjoint\nprint({1, 2}.isdisjoint({3, 4}))   # True',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'frozenset — The Immutable Sibling' },
  {
    type: 'text',
    content: 'A `frozenset` is an immutable (and therefore hashable) set — usable as dict keys and members of other sets.',
  },
  {
    type: 'code',
    code: 'fs = frozenset([1, 2, 3])\n# fs.add(4)    # AttributeError — immutable\n\n# Set of sets — only works with frozensets\ngroupings = {frozenset({1, 2}), frozenset({3, 4})}\n\n# frozenset as dict key\ncache = {frozenset({"a", "b"}): "grouped"}',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Common Use Cases' },
  {
    type: 'code',
    code: '# Deduplicate while preserving order? Use dict keys (3.7+)\nordered_unique = list(dict.fromkeys([3, 1, 2, 1, 3]))\n# [3, 1, 2]\n\n# Quick uniqueness check\nif len(items) != len(set(items)):\n    print("duplicates!")\n\n# Multi-set-style operations\nreaders = {"alice", "bob", "carol"}\nwriters = {"bob", "dan"}\nprint(readers & writers)    # both roles\nprint(readers - writers)    # only readers\nprint(readers | writers)    # anyone\n\n# Remove unwanted items\nwords = ["the", "cat", "sat", "on", "the", "mat"]\nstopwords = {"the", "on", "a", "an"}\ncontent = [w for w in words if w not in stopwords]',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Hash Buckets and Membership Flow' },
  {
    type: 'text',
    content: 'Sets store only keys in a hash table. Membership checks hash the candidate, probe likely bucket positions, and verify equality when hashes collide.',
  },
  {
    type: 'code',
    code: 'tags = {"python", "oop", "sets"}\nprint("oop" in tags)\ntags.add("iterators")\ntags.discard("unknown")',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Set Elements in Hash Buckets',
    description: 'A set entry stores hash and key reference, with no associated value payload.',
    bindings: [
      { scope: 'global', name: 'tags', objectId: 'SET1' },
      { scope: 'runtime', name: 'bucket[1]', objectId: 'E_PY' },
      { scope: 'runtime', name: 'bucket[5]', objectId: 'E_OOP' },
      { scope: 'runtime', name: 'bucket[7]', objectId: 'E_SET' },
    ],
    objects: [
      { id: 'SET1', type: 'set', value: '{"python", "oop", "sets"}', mutable: true, accent: 'sky' },
      { id: 'E_PY', type: 'set entry', value: '(hash("python"), "python")', mutable: false, accent: 'amber' },
      { id: 'E_OOP', type: 'set entry', value: '(hash("oop"), "oop")', mutable: false, accent: 'mint' },
      { id: 'E_SET', type: 'set entry', value: '(hash("sets"), "sets")', mutable: false, accent: 'neutral' },
    ],
    insights: [
      'No duplicate keys can coexist because equality check merges equivalent entries.',
      'Average O(1) membership relies on good hash distribution.',
      'frozenset works similarly but disallows mutation operations.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Add, Membership, and Set Algebra',
    prompt: 'Observe how set content evolves under common operations.',
    steps: [
      {
        title: 'Initialize Set',
        action: 'Create first set',
        code: 'a = {1, 2, 3}',
        bindings: [
          { scope: 'global', name: 'a', objectId: 'SET_A1' },
        ],
        objects: [
          { id: 'SET_A1', type: 'set', value: '{1, 2, 3}', mutable: true, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Initial hash table has three entries.',
      },
      {
        title: 'Add Existing and New Elements',
        action: 'Run add operations',
        code: 'a.add(3)\na.add(4)',
        bindings: [
          { scope: 'global', name: 'a', objectId: 'SET_A2' },
        ],
        objects: [
          { id: 'SET_A2', type: 'set', value: '{1, 2, 3, 4}', mutable: true, refCount: 1, accent: 'mint' },
        ],
        explanation: 'Adding duplicate 3 has no effect; adding 4 inserts new entry.',
      },
      {
        title: 'Membership Probe',
        action: 'Check if 2 exists',
        code: '2 in a  # True',
        bindings: [
          { scope: 'runtime', name: 'query', objectId: 'I2' },
          { scope: 'runtime', name: 'membership_result', objectId: 'B_TRUE' },
        ],
        objects: [
          { id: 'I2', type: 'int', value: '2', mutable: false, refCount: 1, accent: 'amber' },
          { id: 'B_TRUE', type: 'bool', value: 'True', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: 'Hash probe finds matching key quickly without scanning all elements.',
      },
      {
        title: 'Set Algebra Result',
        action: 'Compute intersection',
        code: 'b = {3, 4, 5}\ncommon = a & b',
        bindings: [
          { scope: 'global', name: 'a', objectId: 'SET_A2' },
          { scope: 'global', name: 'b', objectId: 'SET_B' },
          { scope: 'global', name: 'common', objectId: 'SET_C' },
        ],
        objects: [
          { id: 'SET_B', type: 'set', value: '{3, 4, 5}', mutable: true, refCount: 1, accent: 'amber' },
          { id: 'SET_C', type: 'set', value: '{3, 4}', mutable: true, refCount: 1, accent: 'sky' },
        ],
        explanation: 'Intersection creates a new set with elements present in both operands.',
      },
    ],
  },

  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Why is `set` so much faster than `list` for membership?',
        answer: 'Lists scan linearly (O(n)); sets hash the target and jump directly to the bucket (O(1) average). For large collections and repeated `in` checks, always use a set.',
      },
      {
        question: 'Can I have a set of lists?',
        answer: 'No — lists are unhashable. Use tuples or frozensets: `{(1, 2), (3, 4)}` or `{frozenset({1, 2}), frozenset({3, 4})}`.',
      },
      {
        question: 'Does a set preserve insertion order?',
        answer: 'No. Unlike dicts, sets **do not** guarantee order. If you need uniqueness + order, use `dict.fromkeys(items)` and take the keys.',
      },
      {
        question: 'What\'s the difference between `{}` and `set()`?',
        answer: '`{}` is an **empty dict**, not a set (for historical reasons). Use `set()` for an empty set. `{1, 2}` is a set; `{"a": 1}` is a dict.',
      },
    ],
  },
]

import type { ContentBlock } from '@/types/content'

export const day4Sets: ContentBlock[] = [
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
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  {
    type: 'qna',
    quiz: {
      id: 'quiz-sets',
      title: 'Sets Quiz',
      questions: [
        {
          type: 'predict-output',
          code: 's = {1, 2, 2, 3, 3, 3}\nprint(len(s))',
          options: ['6', '3', '1', 'Error'],
          correctIndex: 1,
          explanation: 'Sets only keep unique elements. {1, 2, 2, 3, 3, 3} becomes {1, 2, 3}, which has length 3.',
        },
        {
          type: 'predict-output',
          code: 'A = {1, 2, 3}\nB = {2, 3, 4}\nprint(A ^ B)',
          options: ['{2, 3}', '{1, 4}', '{1, 2, 3, 4}', 'Error'],
          correctIndex: 1,
          explanation: '^ is symmetric difference: elements in A or B but not both. 1 is only in A, 4 is only in B. Result: {1, 4}.',
        },
        {
          type: 'predict-output',
          code: 'x = type({}).__name__\ny = type(set()).__name__\nprint(x, y)',
          options: ['set set', 'dict dict', 'dict set', 'set dict'],
          correctIndex: 2,
          explanation: '{} creates an empty DICT (not a set!). set() creates an empty set. This is a common gotcha.',
        },
        {
          type: 'mcq',
          question: 'Which operation finds elements in set A that are NOT in set B?',
          options: ['A | B', 'A & B', 'A - B', 'A ^ B'],
          correctIndex: 2,
          explanation: 'A - B (difference) returns elements that are in A but not in B.',
        },
      ],
    },
  },

  // ═══════════════════════════════════════
  // Section 9: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  {
    type: 'qna',
    challenge: {
      id: 'challenge-sets',
      title: 'Social Network Analyzer',
      difficulty: 'medium',
      description: 'Given a social network represented as a dictionary of users and their friends (sets), find: mutual friends between two users, friend suggestions (friends of friends who aren\'t already friends), and the most connected user.',
      starterCode: '# Social network as dict of sets\nnetwork = {\n    "Alice": {"Bob", "Charlie", "Diana"},\n    "Bob": {"Alice", "Diana", "Eve"},\n    "Charlie": {"Alice", "Frank"},\n    "Diana": {"Alice", "Bob", "Eve", "Frank"},\n    "Eve": {"Bob", "Diana"},\n    "Frank": {"Charlie", "Diana"},\n}\n\n# 1. Mutual friends\ndef mutual_friends(network, user1, user2):\n    return network[user1] & network[user2]\n\nprint("Mutual friends (Alice & Bob):")\nprint(f"  {mutual_friends(network, \'Alice\', \'Bob\')}")\n\n# 2. Friend suggestions (friends of friends, not already friends)\ndef suggest_friends(network, user):\n    friends = network[user]\n    suggestions = set()\n    for friend in friends:\n        suggestions |= network[friend]  # Add friends of friends\n    suggestions -= friends      # Remove existing friends\n    suggestions.discard(user)   # Remove self\n    return suggestions\n\nprint("\\nFriend suggestions for Alice:")\nprint(f"  {suggest_friends(network, \'Alice\')}")\n\n# 3. Most connected user\nmost = max(network, key=lambda u: len(network[u]))\nprint(f"\\nMost connected: {most} ({len(network[most])} friends)")',
      testCases: [
        { input: '', expected: 'Mutual friends (Alice & Bob):\n  {\'Diana\'}\n\nFriend suggestions for Alice:\n  {\'Eve\', \'Frank\'}\n\nMost connected: Diana (4 friends)' },
      ],
      hints: [
        'Set intersection (&) finds mutual friends',
        'Union of friends-of-friends, then subtract existing friends',
        'max() with key=lambda finds the user with most connections',
      ],
      solution: 'def mutual_friends(network, u1, u2): return network[u1] & network[u2]\ndef suggest_friends(network, user):\n    friends = network[user]\n    fof = set()\n    for f in friends: fof |= network[f]\n    return fof - friends - {user}',
    },
  },
]

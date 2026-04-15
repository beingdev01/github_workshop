import type { ContentBlock } from '@/types/content'

export const day4Dicts: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Dictionaries — Key-Value Data' },
  {
    type: 'text',
    content: 'Dictionaries are Python\'s most versatile data structure — they store **key-value pairs** and provide lightning-fast lookups by key. In other languages, they\'re called hash maps, associative arrays, or objects. Dictionaries are everywhere in Python: configuration files, JSON data, database records, counting, grouping — mastering them is essential.',
  },

  // ═══════════════════════════════════════
  // Section 2: Creating Dictionaries
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Creating Dictionaries' },
  {
    type: 'code',
    code: '# Curly braces with key: value pairs\nstudent = {\n    "name": "Alice",\n    "age": 20,\n    "grade": "A",\n    "courses": ["Math", "Physics"]\n}\nprint(student)\n\n# Empty dictionary\nempty = {}\nprint(type(empty))  # <class \'dict\'> (NOT a set!)\n\n# dict() constructor\nfrom_kwargs = dict(name="Bob", age=19, grade="B+")\nprint(from_kwargs)  # {\'name\': \'Bob\', \'age\': 19, \'grade\': \'B+\'}\n\n# From list of tuples\nfrom_tuples = dict([(\'x\', 1), (\'y\', 2), (\'z\', 3)])\nprint(from_tuples)  # {\'x\': 1, \'y\': 2, \'z\': 3}\n\n# dict.fromkeys() — all keys get the same value\ndays = dict.fromkeys(["Mon", "Tue", "Wed", "Thu", "Fri"], 0)\nprint(days)  # {\'Mon\': 0, \'Tue\': 0, \'Wed\': 0, ...}\n\n# Keys must be hashable (immutable): str, int, float, tuple, bool\nvalid = {(1, 2): "tuple key", 42: "int key", True: "bool key"}\nprint(valid)\n# invalid = {[1, 2]: "list key"}  # TypeError!',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'Keys Must Be Unique',
    content: 'If you define duplicate keys, the LAST value wins silently: `{"a": 1, "a": 2}` gives `{"a": 2}`. Also note that `True` and `1` are the same key (since `True == 1`), and so are `False` and `0`.',
  },

  // ═══════════════════════════════════════
  // Section 3: Accessing Values
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Accessing & Modifying Values' },
  {
    type: 'code',
    code: 'student = {"name": "Alice", "age": 20, "grade": "A"}\n\n# Square bracket access\nprint(student["name"])  # Alice\n\n# KeyError if key doesn\'t exist!\n# print(student["email"])  # KeyError: \'email\'\n\n# .get() — safe access with default\nprint(student.get("email"))          # None (no error)\nprint(student.get("email", "N/A"))   # N/A (custom default)\nprint(student.get("name", "N/A"))    # Alice (key exists)\n\n# Adding / modifying\nstudent["email"] = "alice@uni.edu"   # Add new key\nstudent["age"] = 21                  # Modify existing\nprint(student)\n\n# .setdefault() — set only if key doesn\'t exist\nstudent.setdefault("grade", "C")     # Already exists, no change\nstudent.setdefault("gpa", 3.8)       # Doesn\'t exist, sets it\nprint(f"grade: {student[\'grade\']}")  # A (unchanged)\nprint(f"gpa: {student[\'gpa\']}")      # 3.8 (newly set)\n\n# Deleting keys\ndel student["gpa"]                   # Remove key (KeyError if missing)\nemail = student.pop("email")         # Remove and return value\nprint(f"Removed email: {email}")\nlast = student.popitem()             # Remove & return last inserted pair\nprint(f"Popped: {last}")\n\n# Check existence\nprint("name" in student)       # True\nprint("email" in student)      # False (we deleted it)\nprint("email" not in student)  # True',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: '.get() vs [] — Which to Use?',
    content: 'Use `[]` when the key MUST exist (missing key = bug). Use `.get()` when the key might not exist and you have a sensible default. Using `.get()` everywhere hides bugs; using `[]` everywhere causes crashes. Choose wisely.',
  },

  // ═══════════════════════════════════════
  // Section 4: Dictionary Methods
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Essential Dictionary Methods' },
  {
    type: 'code',
    code: 'scores = {"Alice": 92, "Bob": 85, "Charlie": 78}\n\n# .keys(), .values(), .items() — view objects\nprint(list(scores.keys()))     # [\'Alice\', \'Bob\', \'Charlie\']\nprint(list(scores.values()))   # [92, 85, 78]\nprint(list(scores.items()))    # [(\'Alice\', 92), (\'Bob\', 85), ...]\n\n# .update() — merge dictionaries\nscores.update({"Diana": 95, "Bob": 90})  # Add Diana, update Bob\nprint(scores)  # {\'Alice\': 92, \'Bob\': 90, \'Charlie\': 78, \'Diana\': 95}\n\n# Merge with | operator (Python 3.9+)\nbase = {"theme": "dark", "lang": "en"}\noverrides = {"lang": "fr", "font": 14}\nmerged = base | overrides  # base values overridden by overrides\nprint(merged)  # {\'theme\': \'dark\', \'lang\': \'fr\', \'font\': 14}\n\n# .clear() — remove all items\ncopy = dict(scores)\ncopy.clear()\nprint(copy)    # {}\nprint(scores)  # unchanged (copy was a different dict)\n\n# len() — number of key-value pairs\nprint(f"Entries: {len(scores)}")  # 4',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: Iteration
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Iterating Over Dictionaries' },
  {
    type: 'code',
    code: 'prices = {"apple": 1.50, "banana": 0.75, "cherry": 3.00}\n\n# Iterate over keys (default)\nfor fruit in prices:\n    print(f"  {fruit}")\n\n# Iterate over values\ntotal = 0\nfor price in prices.values():\n    total += price\nprint(f"Total: ${total:.2f}")  # $5.25\n\n# Iterate over key-value pairs (most common)\nfor fruit, price in prices.items():\n    print(f"  {fruit}: ${price:.2f}")\n\n# Finding keys by value\nexpensive = [fruit for fruit, price in prices.items() if price > 1.00]\nprint(f"Expensive: {expensive}") # [\'apple\', \'cherry\']\n\n# Sorting a dictionary\n# By key\nfor k in sorted(prices):\n    print(f"  {k}: ${prices[k]:.2f}")\n\n# By value\nfor k, v in sorted(prices.items(), key=lambda x: x[1]):\n    print(f"  {k}: ${v:.2f}")\n\n# Note: dicts preserve insertion order (Python 3.7+)\nprint("\\nInsertion order preserved:")\nordered = {}\nordered["first"] = 1\nordered["second"] = 2\nordered["third"] = 3\nfor k in ordered:\n    print(f"  {k}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Nested Dictionaries
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Nested Dictionaries' },
  {
    type: 'code',
    code: '# Complex nested structure\nschool = {\n    "Alice": {\n        "age": 20,\n        "grades": {"Math": 92, "Physics": 88, "English": 95}\n    },\n    "Bob": {\n        "age": 19,\n        "grades": {"Math": 78, "Physics": 82, "English": 90}\n    }\n}\n\n# Accessing nested values\nprint(school["Alice"]["grades"]["Math"])  # 92\n\n# Safe nested access\ndef safe_get(d, *keys):\n    """Safely navigate nested dicts"""\n    for key in keys:\n        if isinstance(d, dict):\n            d = d.get(key)\n        else:\n            return None\n    return d\n\nprint(safe_get(school, "Alice", "grades", "Math"))     # 92\nprint(safe_get(school, "Alice", "grades", "Art"))      # None\nprint(safe_get(school, "Eve", "grades", "Math"))       # None\n\n# Iterating nested dicts\nfor name, info in school.items():\n    avg = sum(info["grades"].values()) / len(info["grades"])\n    print(f"  {name} (age {info[\'age\']}): avg = {avg:.1f}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Dictionary exploration!\n\n# 1. Phone book\nphone_book = {}\nphone_book["Alice"] = "555-1234"\nphone_book["Bob"] = "555-5678"\nphone_book["Charlie"] = "555-9012"\n\nname = "Bob"\nif name in phone_book:\n    print(f"{name}\'s number: {phone_book[name]}")\n\n# 2. Inventory system\ninventory = {\n    "apple": {"price": 1.50, "stock": 50},\n    "banana": {"price": 0.75, "stock": 100},\n    "cherry": {"price": 3.00, "stock": 25},\n}\n\nprint("\\nInventory Report:")\ntotal_value = 0\nfor item, info in inventory.items():\n    value = info["price"] * info["stock"]\n    total_value += value\n    print(f"  {item}: ${info[\'price\']:.2f} x {info[\'stock\']} = ${value:.2f}")\nprint(f"Total Inventory Value: ${total_value:.2f}")\n\n# 3. Word frequency\ntext = "to be or not to be that is the question"\nwords = text.split()\nfreq = {}\nfor word in words:\n    freq[word] = freq.get(word, 0) + 1\n\nprint("\\nWord Frequencies:")\nfor word, count in sorted(freq.items(), key=lambda x: -x[1]):\n    print(f"  {word}: {count}")',
    instructions: 'Experiment with dictionaries — try building a simple address book, inventory system, or word counter.',
  },

  // ═══════════════════════════════════════
  // Section 8: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  {
    type: 'qna',
    quiz: {
      id: 'quiz-dicts',
      title: 'Dictionaries Quiz',
      questions: [
        {
          type: 'predict-output',
          code: 'd = {"a": 1, "b": 2, "a": 3}\nprint(d["a"])',
          options: ['1', '3', '[1, 3]', 'KeyError'],
          correctIndex: 1,
          explanation: 'Duplicate keys: the last value wins. "a" is set to 1, then overwritten to 3.',
        },
        {
          type: 'predict-output',
          code: 'd = {"x": 10}\nresult = d.get("y", 0) + d.get("x", 0)\nprint(result)',
          options: ['10', '0', 'KeyError', 'None'],
          correctIndex: 0,
          explanation: 'd.get("y", 0) returns 0 (key missing, default 0). d.get("x", 0) returns 10. Sum = 10.',
        },
        {
          type: 'mcq',
          question: 'Which CANNOT be a dictionary key?',
          options: ['(1, 2)', '"hello"', '[1, 2]', '42'],
          correctIndex: 2,
          explanation: 'Lists are mutable and therefore unhashable — they cannot be dictionary keys. Tuples, strings, and integers are all hashable.',
        },
        {
          type: 'predict-output',
          code: 'd = {"a": 1, "b": 2, "c": 3}\nprint(list(d.values()))',
          options: ['["a", "b", "c"]', '[1, 2, 3]', '[("a",1), ("b",2), ("c",3)]', 'Error'],
          correctIndex: 1,
          explanation: '.values() returns the dictionary\'s values. list() converts the view to a list: [1, 2, 3].',
        },
        {
          type: 'predict-output',
          code: 'd = {True: "yes", 1: "one", 1.0: "float"}\nprint(d)',
          options: ['{True: "yes", 1: "one", 1.0: "float"}', '{True: "float"}', '{1: "float"}', 'Error'],
          correctIndex: 1,
          explanation: 'True == 1 == 1.0, so they\'re all the same key. The first key (True) is kept, but the value is overwritten to "float".',
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
      id: 'challenge-dicts',
      title: 'Student Grade Manager',
      difficulty: 'medium',
      description: 'Build a grade management system using dictionaries. Store students with their subject grades, compute averages, find the top student, and identify failing subjects (below 50).',
      starterCode: '# Student Grade Manager\nstudents = {\n    "Alice": {"Math": 92, "Physics": 88, "English": 95, "History": 78},\n    "Bob": {"Math": 65, "Physics": 45, "English": 72, "History": 58},\n    "Charlie": {"Math": 78, "Physics": 82, "English": 48, "History": 90},\n    "Diana": {"Math": 95, "Physics": 92, "English": 88, "History": 94},\n}\n\n# 1. Compute each student\'s average\nprint("Student Averages:")\nfor name, grades in students.items():\n    avg = sum(grades.values()) / len(grades)\n    print(f"  {name}: {avg:.1f}")\n\n# 2. Find the top student\ntop = max(students.items(), key=lambda x: sum(x[1].values()) / len(x[1]))\nprint(f"\\nTop Student: {top[0]}")\n\n# 3. Find all failing grades (below 50)\nprint("\\nFailing Grades:")\nfor name, grades in students.items():\n    for subject, score in grades.items():\n        if score < 50:\n            print(f"  {name} - {subject}: {score}")',
      testCases: [
        { input: '', expected: 'Student Averages:\n  Alice: 88.2\n  Bob: 60.0\n  Charlie: 74.5\n  Diana: 92.2\n\nTop Student: Diana\n\nFailing Grades:\n  Bob - Physics: 45\n  Charlie - English: 48' },
      ],
      hints: [
        'Use sum(grades.values()) / len(grades) for average',
        'max() with a key function can find the top student',
        'Nested loop: outer for students, inner for their subjects',
      ],
      solution: 'students = {...}  # as above\nfor name, grades in students.items():\n    avg = sum(grades.values()) / len(grades)\n    print(f"  {name}: {avg:.1f}")\ntop = max(students.items(), key=lambda x: sum(x[1].values())/len(x[1]))\nprint(f"Top: {top[0]}")',
    },
  },
]

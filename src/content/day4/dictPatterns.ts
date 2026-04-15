import type { ContentBlock } from '@/types/content'

export const day4DictPatterns: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Dictionary Patterns & Comprehensions' },
  {
    type: 'text',
    content: 'Dictionaries unlock their true power through patterns — counting, grouping, inverting, and transforming data with elegant comprehensions. These patterns appear constantly in real-world Python: processing API responses, analyzing text, building caches, and managing configuration. Master these patterns and you\'ll write Python that\'s both concise and readable.',
  },

  // ═══════════════════════════════════════
  // Section 2: Dict Comprehensions
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Dictionary Comprehensions' },
  {
    type: 'code',
    code: '# Basic: {key_expr: value_expr for item in iterable}\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# With condition\neven_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}\nprint(even_squares)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}\n\n# From two lists (using zip)\nnames = ["Alice", "Bob", "Charlie"]\nscores = [92, 85, 78]\ngradebook = {name: score for name, score in zip(names, scores)}\nprint(gradebook)  # {\'Alice\': 92, \'Bob\': 85, \'Charlie\': 78}\n\n# Transform keys and values\noriginal = {"Hello": 1, "World": 2, "Python": 3}\nlower_keys = {k.lower(): v * 10 for k, v in original.items()}\nprint(lower_keys)  # {\'hello\': 10, \'world\': 20, \'python\': 30}\n\n# Invert a dictionary (swap keys and values)\ncolors = {"red": "#FF0000", "green": "#00FF00", "blue": "#0000FF"}\nhex_to_name = {v: k for k, v in colors.items()}\nprint(hex_to_name)  # {\'#FF0000\': \'red\', ...}\n\n# Filter a dictionary\nscores = {"Alice": 92, "Bob": 45, "Charlie": 78, "Diana": 38}\npassing = {k: v for k, v in scores.items() if v >= 50}\nprint(passing)  # {\'Alice\': 92, \'Charlie\': 78}',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 3: Counting Pattern
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Counting & Frequency Analysis' },
  {
    type: 'code',
    code: '# Manual counting with .get()\ntext = "abracadabra"\nfreq = {}\nfor char in text:\n    freq[char] = freq.get(char, 0) + 1\nprint(freq)  # {\'a\': 5, \'b\': 2, \'r\': 2, \'c\': 1, \'d\': 1}\n\n# Using collections.Counter (the Pythonic way)\nfrom collections import Counter\n\nword_counts = Counter("abracadabra")\nprint(word_counts)              # Counter({\'a\': 5, \'b\': 2, \'r\': 2, ...})\nprint(word_counts.most_common(3))  # [(\'a\', 5), (\'b\', 2), (\'r\', 2)]\n\n# Counter with words\nsentence = "the cat sat on the mat the cat ate the rat"\nwords = Counter(sentence.split())\nprint(words.most_common(3))  # [(\'the\', 4), (\'cat\', 2), (\'sat\', 1)]\n\n# Counter arithmetic\na = Counter("aabbcc")\nb = Counter("abcdef")\nprint(a + b)  # Combined counts\nprint(a - b)  # Subtract (drops zero/negative)\nprint(a & b)  # Minimum of each\nprint(a | b)  # Maximum of each\n\n# Practical: character frequency histogram\ndef histogram(text):\n    freq = Counter(text.lower())\n    for char, count in freq.most_common():\n        if char.isalpha():\n            print(f"  {char}: {\'█\' * count} ({count})")\n\nhistogram("Hello World")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 4: Grouping Pattern
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Grouping & Categorizing Data' },
  {
    type: 'code',
    code: '# Group by first letter\nwords = ["apple", "avocado", "banana", "blueberry", "cherry", "apricot"]\nby_letter = {}\nfor word in words:\n    letter = word[0]\n    if letter not in by_letter:\n        by_letter[letter] = []\n    by_letter[letter].append(word)\nprint(by_letter)\n# {\'a\': [\'apple\', \'avocado\', \'apricot\'], \'b\': [\'banana\', \'blueberry\'], \'c\': [\'cherry\']}\n\n# Cleaner with .setdefault()\nby_letter2 = {}\nfor word in words:\n    by_letter2.setdefault(word[0], []).append(word)\nprint(by_letter2)\n\n# Using defaultdict (cleanest)\nfrom collections import defaultdict\n\nby_length = defaultdict(list)\nfor word in words:\n    by_length[len(word)].append(word)\n\nfor length, group in sorted(by_length.items()):\n    print(f"  {length} letters: {group}")\n\n# Practical: Group students by grade band\nstudents = [\n    ("Alice", 92), ("Bob", 78), ("Charlie", 85),\n    ("Diana", 95), ("Eve", 62), ("Frank", 71)\n]\n\ndef grade_band(score):\n    if score >= 90: return "A"\n    if score >= 80: return "B"\n    if score >= 70: return "C"\n    return "D"\n\ngroups = defaultdict(list)\nfor name, score in students:\n    groups[grade_band(score)].append(f"{name} ({score})")\n\nfor grade in sorted(groups):\n    print(f"  Grade {grade}: {groups[grade]}")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'defaultdict vs setdefault vs get',
    content: '**`d.get(k, default)`**: Returns default but does NOT add the key.\n**`d.setdefault(k, default)`**: Returns existing value OR sets & returns default.\n**`defaultdict(factory)`**: Automatically creates missing keys with the factory function (list, int, set, etc.).',
  },

  // ═══════════════════════════════════════
  // Section 5: Advanced Patterns
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Advanced Dictionary Patterns' },
  {
    type: 'code',
    code: '# 1. Merge multiple dicts\ndef merge_dicts(*dicts):\n    result = {}\n    for d in dicts:\n        result.update(d)\n    return result\n\ndefaults = {"color": "blue", "size": 12, "font": "Arial"}\nuser_prefs = {"color": "red", "size": 14}\nfinal = merge_dicts(defaults, user_prefs)\nprint(final)  # {\'color\': \'red\', \'size\': 14, \'font\': \'Arial\'}\n\n# 2. Dispatch table (replace if-elif chains)\ndef add(a, b): return a + b\ndef sub(a, b): return a - b\ndef mul(a, b): return a * b\ndef div(a, b): return a / b if b != 0 else "Error: division by zero"\n\noperations = {\n    "+": add, "-": sub,\n    "*": mul, "/": div\n}\n\nfor op in ["+", "-", "*", "/"]:\n    result = operations[op](10, 3)\n    print(f"  10 {op} 3 = {result}")\n\n# 3. Two-way mapping\nclass TwoWayDict:\n    def __init__(self):\n        self.forward = {}\n        self.reverse = {}\n    \n    def add(self, key, value):\n        self.forward[key] = value\n        self.reverse[value] = key\n    \n    def get_by_key(self, key):\n        return self.forward.get(key)\n    \n    def get_by_value(self, value):\n        return self.reverse.get(value)\n\ncountry_codes = TwoWayDict()\ncountry_codes.add("US", "United States")\ncountry_codes.add("UK", "United Kingdom")\nprint(country_codes.get_by_key("US"))              # United States\nprint(country_codes.get_by_value("United Kingdom")) # UK\n\n# 4. Nested defaultdict\ntree = lambda: defaultdict(tree)\ndata = tree()\ndata["users"]["Alice"]["age"] = 30\ndata["users"]["Alice"]["email"] = "alice@example.com"\nprint(dict(data["users"]["Alice"]))  # {\'age\': 30, \'email\': ...}',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Dictionary patterns in action!\nfrom collections import Counter, defaultdict\n\n# 1. Anagram detector\ndef are_anagrams(word1, word2):\n    return Counter(word1.lower()) == Counter(word2.lower())\n\npairs = [("listen", "silent"), ("hello", "world"), ("evil", "vile")]\nfor w1, w2 in pairs:\n    result = "YES" if are_anagrams(w1, w2) else "NO"\n    print(f"  {w1} & {w2}: {result}")\n\n# 2. Simple cache / memoization\ncache = {}\ndef fibonacci(n):\n    if n in cache:\n        return cache[n]\n    if n <= 1:\n        result = n\n    else:\n        result = fibonacci(n-1) + fibonacci(n-2)\n    cache[n] = result\n    return result\n\nprint(f"\\nfib(30) = {fibonacci(30)}")\nprint(f"Cache size: {len(cache)} entries")\n\n# 3. Index builder\nbooks = [\n    {"title": "Python Basics", "tags": ["python", "beginner"]},\n    {"title": "Advanced Python", "tags": ["python", "advanced"]},\n    {"title": "Web Dev", "tags": ["javascript", "beginner"]},\n    {"title": "Data Science", "tags": ["python", "data"]},\n]\n\ntag_index = defaultdict(list)\nfor book in books:\n    for tag in book["tags"]:\n        tag_index[tag].append(book["title"])\n\nprint("\\nTag Index:")\nfor tag, titles in sorted(tag_index.items()):\n    print(f"  {tag}: {titles}")',
    instructions: 'Experiment with counting, grouping, and dictionary patterns.',
  },

  // ═══════════════════════════════════════
  // Section 7: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  {
    type: 'quiz',
    quiz: {
      id: 'quiz-dictpatterns',
      title: 'Dictionary Patterns Quiz',
      questions: [
        {
          type: 'predict-output',
          code: 'result = {x: x**2 for x in range(4)}\nprint(result)',
          options: ['{0: 0, 1: 1, 2: 4, 3: 9}', '[0, 1, 4, 9]', '{1: 1, 2: 4, 3: 9}', 'Error'],
          correctIndex: 0,
          explanation: 'Dict comprehension creates key:value pairs. range(4) gives 0,1,2,3. Each maps to its square.',
        },
        {
          type: 'predict-output',
          code: 'from collections import Counter\nc = Counter("banana")\nprint(c.most_common(1))',
          options: ['[("a", 3)]', '[("b", 1)]', '["a"]', '3'],
          correctIndex: 0,
          explanation: '"banana" has a:3, n:2, b:1. most_common(1) returns the top-1 as a list of (element, count) tuples.',
        },
        {
          type: 'mcq',
          question: 'What does defaultdict(list) do when accessing a missing key?',
          options: ['Raises KeyError', 'Returns None', 'Creates the key with an empty list', 'Creates the key with value 0'],
          correctIndex: 2,
          explanation: 'defaultdict(list) automatically creates missing keys with the factory function list(), which returns [].',
        },
        {
          type: 'predict-output',
          code: 'd = {"a": 1, "b": 2}\nd.setdefault("a", 999)\nd.setdefault("c", 3)\nprint(d)',
          options: ['{"a": 999, "b": 2, "c": 3}', '{"a": 1, "b": 2, "c": 3}', '{"a": 1, "b": 2}', 'Error'],
          correctIndex: 1,
          explanation: 'setdefault only sets the value if the key doesn\'t exist. "a" already exists (unchanged). "c" doesn\'t exist, so it\'s set to 3.',
        },
      ],
    },
  },

  // ═══════════════════════════════════════
  // Section 8: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  {
    type: 'challenge',
    challenge: {
      id: 'challenge-dictpatterns',
      title: 'Text Analyzer',
      difficulty: 'hard',
      description: 'Build a text analysis tool. Given a paragraph, compute: (1) word frequency sorted by count, (2) average word length, (3) sentence count, and (4) the most common starting letter.',
      starterCode: 'from collections import Counter\n\ntext = """Python is a great programming language. Python is used for web development.\nPython is also great for data science. Many programmers love Python.\nPython makes programming fun and productive."""\n\n# 1. Word frequency (top 5)\nwords = text.lower().split()\nword_freq = Counter(words)\nprint("Top 5 words:")\nfor word, count in word_freq.most_common(5):\n    print(f"  {word}: {count}")\n\n# 2. Average word length\nclean_words = [w.strip(".,!?") for w in words]\navg_len = sum(len(w) for w in clean_words) / len(clean_words)\nprint(f"\\nAverage word length: {avg_len:.1f}")\n\n# 3. Sentence count\nsentences = [s.strip() for s in text.split(".") if s.strip()]\nprint(f"Sentences: {len(sentences)}")\n\n# 4. Most common starting letter\nfirst_letters = Counter(w[0] for w in clean_words if w)\nprint(f"\\nMost common starting letter: {first_letters.most_common(1)[0]}")',
      testCases: [
        { input: '', expected: 'Top 5 words:\n  python: 5\n  is: 3\n  great: 2\n  programming: 2\n  for: 2\n\nAverage word length: 4.8\nSentences: 5\n\nMost common starting letter: (\'p\', 11)' },
      ],
      hints: [
        'Counter.most_common(n) returns the n most frequent items',
        'Strip punctuation from words before analysis',
        'Split on "." to count sentences',
      ],
      solution: 'from collections import Counter\nwords = text.lower().split()\nword_freq = Counter(words)\nclean = [w.strip(".,!?") for w in words]\navg_len = sum(len(w) for w in clean) / len(clean)\nsentences = [s.strip() for s in text.split(".") if s.strip()]',
    },
  },
]

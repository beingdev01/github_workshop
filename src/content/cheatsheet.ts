export interface CheatsheetCategory {
  id: string
  title: string
  icon: string
  color: string
  items: CheatsheetItem[]
}

export interface CheatsheetItem {
  title: string
  code: string
  note?: string
}

export const cheatsheetData: CheatsheetCategory[] = [
  {
    id: 'basics',
    title: 'Basics',
    icon: '📦',
    color: 'mint',
    items: [
      { title: 'Print', code: 'print("Hello, World!")\nprint("A", "B", sep=", ", end="\\n")', note: 'sep= separator, end= line ending' },
      { title: 'Variables', code: 'x = 10\nname = "Alice"\nis_valid = True', note: 'No type declaration needed' },
      { title: 'Input', code: 'name = input("Your name: ")\nage = int(input("Your age: "))', note: 'input() always returns string' },
      { title: 'Comments', code: '# Single line comment\n\n"""\nMulti-line\ndocstring\n"""' },
      { title: 'Type Conversion', code: 'int("42")    # → 42\nfloat("3.14") # → 3.14\nstr(100)     # → "100"\nbool(0)      # → False' },
      { title: 'Multiple Assignment', code: 'a, b, c = 1, 2, 3\nx = y = z = 0' },
    ],
  },
  {
    id: 'strings',
    title: 'Strings',
    icon: '🔤',
    color: 'amber',
    items: [
      { title: 'f-strings', code: 'name = "Alice"\nprint(f"Hello, {name}!")\nprint(f"2+2 = {2+2}")' },
      { title: 'String Methods', code: '"hello".upper()       # HELLO\n"HELLO".lower()       # hello\n" hi ".strip()        # "hi"\n"hello".replace("l","L") # heLLo\n"a,b,c".split(",")    # ["a","b","c"]' },
      { title: 'Slicing', code: 's = "Python"\ns[0]     # "P"\ns[-1]    # "n"\ns[0:3]   # "Pyt"\ns[::2]   # "Pto"\ns[::-1]  # "nohtyP"' },
      { title: 'Check Content', code: '"py" in "python"  # True\n"abc".isalpha()   # True\n"123".isdigit()   # True\n"abc".startswith("a") # True' },
      { title: 'Join', code: '", ".join(["a","b","c"]) # "a, b, c"\n"-".join(["2024","01","15"])' },
    ],
  },
  {
    id: 'numbers',
    title: 'Numbers & Math',
    icon: '🔢',
    color: 'sky',
    items: [
      { title: 'Operators', code: '5 + 3    # 8   (add)\n5 - 3    # 2   (sub)\n5 * 3    # 15  (mul)\n5 / 3    # 1.67 (div)\n5 // 3   # 1   (floor div)\n5 % 3    # 2   (modulo)\n5 ** 3   # 125 (power)' },
      { title: 'Built-in Functions', code: 'abs(-5)       # 5\nround(3.7)    # 4\nround(3.14, 1) # 3.1\nmax(1, 2, 3)  # 3\nmin(1, 2, 3)  # 1\nsum([1,2,3])  # 6' },
      { title: 'Comparison', code: '5 == 5   # True\n5 != 3   # True\n5 > 3    # True\n5 >= 5   # True\n1 < 2 < 3 # True (chaining!)' },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    icon: '🔀',
    color: 'coral',
    items: [
      { title: 'if / elif / else', code: 'if x > 0:\n    print("positive")\nelif x == 0:\n    print("zero")\nelse:\n    print("negative")' },
      { title: 'Logical Operators', code: 'if a > 0 and b > 0:\n    print("both positive")\nif a > 0 or b > 0:\n    print("at least one")\nif not is_done:\n    print("still working")' },
      { title: 'Ternary', code: 'result = "even" if x % 2 == 0 else "odd"' },
      { title: 'Match (3.10+)', code: 'match command:\n    case "quit":\n        exit()\n    case "hello":\n        print("hi!")\n    case _:\n        print("unknown")' },
    ],
  },
  {
    id: 'loops',
    title: 'Loops',
    icon: '🔁',
    color: 'lavender',
    items: [
      { title: 'for loop', code: 'for i in range(5):\n    print(i)  # 0,1,2,3,4\n\nfor item in ["a","b","c"]:\n    print(item)' },
      { title: 'range()', code: 'range(5)       # 0,1,2,3,4\nrange(2, 8)    # 2,3,4,5,6,7\nrange(0, 10, 2) # 0,2,4,6,8\nrange(5, 0, -1) # 5,4,3,2,1' },
      { title: 'while loop', code: 'count = 0\nwhile count < 5:\n    print(count)\n    count += 1' },
      { title: 'Control Flow', code: 'for i in range(10):\n    if i == 3:\n        continue  # skip 3\n    if i == 7:\n        break     # stop at 7\n    print(i)' },
      { title: 'enumerate', code: 'fruits = ["apple","banana","cherry"]\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")' },
    ],
  },
  {
    id: 'lists',
    title: 'Lists',
    icon: '📋',
    color: 'mint',
    items: [
      { title: 'Create & Access', code: 'nums = [1, 2, 3, 4, 5]\nnums[0]    # 1\nnums[-1]   # 5\nnums[1:3]  # [2, 3]\nlen(nums)  # 5' },
      { title: 'Modify', code: 'nums.append(6)\nnums.insert(0, 0)\nnums.extend([7, 8])\nnums.remove(3)\npopped = nums.pop()\nnums.sort()\nnums.reverse()' },
      { title: 'List Comprehension', code: 'squares = [x**2 for x in range(10)]\nevens = [x for x in range(20) if x % 2 == 0]\npairs = [(x,y) for x in range(3) for y in range(3)]' },
      { title: 'Useful Patterns', code: '# Unpack\na, b, c = [1, 2, 3]\nfirst, *rest = [1, 2, 3, 4]\n\n# Check\n3 in [1, 2, 3]  # True\n\n# Copy\nnew = old[:]  # shallow copy' },
    ],
  },
  {
    id: 'dicts',
    title: 'Dictionaries',
    icon: '🗂️',
    color: 'amber',
    items: [
      { title: 'Create & Access', code: 'user = {"name": "Alice", "age": 30}\nuser["name"]       # "Alice"\nuser.get("email", "N/A")  # "N/A"' },
      { title: 'Modify', code: 'user["email"] = "a@b.com"\nuser.update({"age": 31})\ndel user["email"]\nval = user.pop("age")' },
      { title: 'Iterate', code: 'for key in d:\n    print(key)\nfor key, val in d.items():\n    print(f"{key}: {val}")\nfor val in d.values():\n    print(val)' },
      { title: 'Dict Comprehension', code: 'squares = {x: x**2 for x in range(6)}\n# {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}\n\nfiltered = {k:v for k,v in d.items() if v > 0}' },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    icon: '⚡',
    color: 'sky',
    items: [
      { title: 'Basic Function', code: 'def greet(name):\n    """Greet someone."""\n    return f"Hello, {name}!"' },
      { title: 'Default & Keyword Args', code: 'def power(base, exp=2):\n    return base ** exp\n\npower(3)       # 9\npower(3, 3)    # 27\npower(exp=4, base=2)  # 16' },
      { title: '*args & **kwargs', code: 'def add(*nums):\n    return sum(nums)\n\ndef info(**kwargs):\n    for k, v in kwargs.items():\n        print(f"{k}: {v}")' },
      { title: 'Lambda', code: 'square = lambda x: x ** 2\nsorted(words, key=lambda w: len(w))\nlist(map(lambda x: x*2, [1,2,3]))' },
      { title: 'Return Multiple', code: 'def divmod(a, b):\n    return a // b, a % b\n\nq, r = divmod(17, 5)' },
    ],
  },
  {
    id: 'tuples-sets',
    title: 'Tuples & Sets',
    icon: '🎯',
    color: 'coral',
    items: [
      { title: 'Tuples', code: 'point = (3, 4)\nx, y = point  # unpack\ncolors = ("red", "green", "blue")\nlen(colors)   # 3\n# Tuples are IMMUTABLE' },
      { title: 'Sets', code: 'nums = {1, 2, 3, 3}  # {1, 2, 3}\nnums.add(4)\nnums.remove(1)\nnums.discard(99)  # no error if missing\n3 in nums  # True' },
      { title: 'Set Operations', code: 'a = {1, 2, 3}\nb = {2, 3, 4}\na | b   # {1,2,3,4} union\na & b   # {2,3}     intersection\na - b   # {1}       difference\na ^ b   # {1,4}     symmetric diff' },
    ],
  },
  {
    id: 'files',
    title: 'File I/O',
    icon: '📁',
    color: 'lavender',
    items: [
      { title: 'Read File', code: 'with open("file.txt", "r") as f:\n    content = f.read()\n    # or line by line:\n    # lines = f.readlines()' },
      { title: 'Write File', code: 'with open("file.txt", "w") as f:\n    f.write("Hello\\n")\n    f.write("World\\n")' },
      { title: 'Append', code: 'with open("log.txt", "a") as f:\n    f.write("New entry\\n")' },
      { title: 'Read Lines', code: 'with open("data.txt") as f:\n    for line in f:\n        print(line.strip())' },
    ],
  },
  {
    id: 'oop',
    title: 'Classes & OOP',
    icon: '🏗️',
    color: 'mint',
    items: [
      { title: 'Basic Class', code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    \n    def bark(self):\n        return f"{self.name}: Woof!"\n\nrex = Dog("Rex")\nprint(rex.bark())' },
      { title: 'Inheritance', code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def meow(self):\n        return f"{self.name}: Meow!"\n\ncat = Cat("Whiskers")' },
      { title: 'Dunder Methods', code: 'class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __str__(self):\n        return f"({self.x}, {self.y})"\n    def __add__(self, other):\n        return Vector(self.x+other.x, self.y+other.y)' },
    ],
  },
]

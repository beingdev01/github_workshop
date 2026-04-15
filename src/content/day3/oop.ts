import type { ContentBlock } from '@/types/content'

export const day3OOP: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Object-Oriented Programming' },
  {
    type: 'text',
    content: 'Object-Oriented Programming (OOP) lets you model real-world concepts by bundling **data** (attributes) and **behavior** (methods) into **objects**. You\'ve already used OOP — strings, lists, and dictionaries are all objects with methods. Now you\'ll learn to create your own classes, the blueprints for making objects. OOP is a cornerstone of Python — understanding it unlocks libraries, frameworks, and clean software design.',
  },

  // ═══════════════════════════════════════
  // Section 2: Classes & Objects
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Classes and Objects' },
  {
    type: 'code',
    code: '# A class is a BLUEPRINT; an object is an INSTANCE\nclass Dog:\n    # Class attribute — shared by ALL instances\n    species = "Canis familiaris"\n    \n    # __init__: the constructor (initializer)\n    # Called automatically when you create an instance\n    def __init__(self, name, age, breed):\n        # Instance attributes — unique to each object\n        self.name = name\n        self.age = age\n        self.breed = breed\n    \n    # Instance method\n    def bark(self):\n        return f"{self.name} says: Woof!"\n    \n    def description(self):\n        return f"{self.name} is a {self.age}-year-old {self.breed}"\n\n# Creating objects (instances)\nrex = Dog("Rex", 5, "German Shepherd")\nbuddy = Dog("Buddy", 3, "Golden Retriever")\n\nprint(rex.description())   # Rex is a 5-year-old German Shepherd\nprint(buddy.bark())        # Buddy says: Woof!\n\n# Accessing attributes\nprint(rex.name)            # Rex\nprint(rex.species)         # Canis familiaris (class attribute)\nprint(buddy.species)       # Same — shared by all dogs\n\n# Objects are independent\nrex.age = 6\nprint(rex.age)    # 6\nprint(buddy.age)  # 3 (unchanged)',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'info',
    title: 'What is "self"?',
    content: '`self` is a reference to the current instance. It\'s how a method knows WHICH object\'s data to use. It\'s always the first parameter of instance methods, but you don\'t pass it when calling — Python passes it automatically: `rex.bark()` internally calls `Dog.bark(rex)`.',
  },

  // ═══════════════════════════════════════
  // Section 3: Special Methods (Dunder)
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Special (Dunder) Methods' },
  {
    type: 'code',
    code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    # String representation (for print and str())\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n    \n    # Addition: v1 + v2\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    # Subtraction: v1 - v2\n    def __sub__(self, other):\n        return Vector(self.x - other.x, self.y - other.y)\n    \n    # Equality: v1 == v2\n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n    \n    # Length (magnitude) with abs()\n    def __abs__(self):\n        return (self.x**2 + self.y**2) ** 0.5\n    \n    # Boolean: bool(v) — is it non-zero?\n    def __bool__(self):\n        return self.x != 0 or self.y != 0\n\n# Using our Vector class\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\n\nprint(v1)           # Vector(3, 4) — thanks to __repr__\nprint(v1 + v2)      # Vector(4, 6) — thanks to __add__\nprint(v1 - v2)      # Vector(2, 2) — thanks to __sub__\nprint(v1 == v2)     # False\nprint(abs(v1))      # 5.0 (3-4-5 triangle)\nprint(bool(Vector(0, 0)))  # False',
    language: 'python',
  },
  {
    type: 'list',
    items: [
      '`__init__(self)` — Constructor, called on object creation',
      '`__repr__(self)` — Official string representation (print, repr)',
      '`__str__(self)` — Informal string (str(), f-strings)',
      '`__add__`, `__sub__`, `__mul__` — Arithmetic operators',
      '`__eq__`, `__lt__`, `__gt__` — Comparison operators',
      '`__len__(self)` — Called by len(obj)',
      '`__getitem__(self, key)` — Called by obj[key]',
      '`__contains__(self, item)` — Called by item in obj',
    ],
  },

  // ═══════════════════════════════════════
  // Section 4: Encapsulation
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Encapsulation & Properties' },
  {
    type: 'code',
    code: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self._balance = balance  # Convention: _ means "private"\n    \n    @property\n    def balance(self):\n        """Read the balance (getter)"""\n        return self._balance\n    \n    @balance.setter\n    def balance(self, amount):\n        """Set balance with validation (setter)"""\n        if amount < 0:\n            raise ValueError("Balance cannot be negative")\n        self._balance = amount\n    \n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError("Deposit must be positive")\n        self._balance += amount\n        return self._balance\n    \n    def withdraw(self, amount):\n        if amount > self._balance:\n            raise ValueError("Insufficient funds")\n        if amount <= 0:\n            raise ValueError("Withdrawal must be positive")\n        self._balance -= amount\n        return self._balance\n    \n    def __repr__(self):\n        return f"BankAccount({self.owner!r}, balance={self._balance})"\n\naccount = BankAccount("Alice", 1000)\nprint(account)                # BankAccount(\'Alice\', balance=1000)\n\naccount.deposit(500)\nprint(f"After deposit: ${account.balance}")  # $1500\n\naccount.withdraw(200)\nprint(f"After withdrawal: ${account.balance}")  # $1300\n\n# Property works like an attribute\nprint(account.balance)  # 1300 (calls getter)\n\n# Validation via setter\ntry:\n    account.balance = -100\nexcept ValueError as e:\n    print(f"Error: {e}")  # Balance cannot be negative',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Python\'s Privacy Convention',
    content: 'Python has no true private attributes. The convention is:\n- `name`: Public — free to use\n- `_name`: Protected — "don\'t use unless you know what you\'re doing"\n- `__name`: Name-mangled — harder to access accidentally (becomes `_ClassName__name`)',
  },

  // ═══════════════════════════════════════
  // Section 5: Inheritance
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Inheritance — Building on Existing Classes' },
  {
    type: 'code',
    code: '# Base (parent) class\nclass Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n    \n    def speak(self):\n        return f"{self.name} says {self.sound}!"\n    \n    def __repr__(self):\n        return f"{type(self).__name__}({self.name!r})"\n\n# Derived (child) class — inherits from Animal\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name, "Woof")  # Call parent\'s __init__\n        self.breed = breed\n    \n    def fetch(self, item):\n        return f"{self.name} fetches the {item}!"\n\nclass Cat(Animal):\n    def __init__(self, name):\n        super().__init__(name, "Meow")\n    \n    def purr(self):\n        return f"{self.name} purrs softly..."\n\n# Using inheritance\nrex = Dog("Rex", "German Shepherd")\nwhiskers = Cat("Whiskers")\n\nprint(rex.speak())           # Rex says Woof! (inherited)\nprint(rex.fetch("ball"))     # Rex fetches the ball! (Dog-specific)\nprint(whiskers.speak())      # Whiskers says Meow! (inherited)\nprint(whiskers.purr())       # Whiskers purrs softly... (Cat-specific)\n\n# isinstance checks\nprint(isinstance(rex, Dog))     # True\nprint(isinstance(rex, Animal))  # True (Dog IS an Animal)\nprint(isinstance(rex, Cat))     # False\n\n# Method overriding\nclass Parrot(Animal):\n    def __init__(self, name, vocabulary):\n        super().__init__(name, "Squawk")\n        self.vocabulary = vocabulary\n    \n    def speak(self):  # Override parent\'s speak\n        import random\n        word = random.choice(self.vocabulary) if self.vocabulary else self.sound\n        return f"{self.name} says: \\\"{word}\\\""\n\npolly = Parrot("Polly", ["Hello!", "Pretty bird!", "Cracker?"])\nprint(polly.speak())  # Polly says: "Hello!" (or random)',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: Class Methods & Static Methods
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Class Methods & Static Methods' },
  {
    type: 'code',
    code: 'class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n    \n    @property\n    def fahrenheit(self):\n        return self.celsius * 9/5 + 32\n    \n    @property\n    def kelvin(self):\n        return self.celsius + 273.15\n    \n    # Class method — alternative constructor\n    @classmethod\n    def from_fahrenheit(cls, f):\n        return cls((f - 32) * 5/9)\n    \n    @classmethod\n    def from_kelvin(cls, k):\n        return cls(k - 273.15)\n    \n    # Static method — utility, no access to instance or class\n    @staticmethod\n    def is_below_freezing(celsius):\n        return celsius < 0\n    \n    def __repr__(self):\n        return f"{self.celsius:.1f}°C / {self.fahrenheit:.1f}°F / {self.kelvin:.1f}K"\n\n# Regular constructor\nt1 = Temperature(100)\nprint(t1)  # 100.0°C / 212.0°F / 373.1K\n\n# Alternative constructors (class methods)\nt2 = Temperature.from_fahrenheit(72)\nprint(t2)  # 22.2°C / 72.0°F / 295.4K\n\nt3 = Temperature.from_kelvin(0)\nprint(t3)  # -273.1°C / -459.7°F / 0.0K\n\n# Static method\nprint(Temperature.is_below_freezing(-5))  # True\nprint(Temperature.is_below_freezing(10))  # False',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Practical Example
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Practical OOP: Task Manager' },
  {
    type: 'code',
    code: 'class Task:\n    _id_counter = 0  # Class variable for auto-incrementing IDs\n    \n    def __init__(self, title, priority="medium"):\n        Task._id_counter += 1\n        self.id = Task._id_counter\n        self.title = title\n        self.priority = priority\n        self.completed = False\n    \n    def complete(self):\n        self.completed = True\n    \n    def __repr__(self):\n        status = "x" if self.completed else " "\n        return f"[{status}] #{self.id} ({self.priority}) {self.title}"\n\nclass TaskManager:\n    def __init__(self):\n        self.tasks = []\n    \n    def add(self, title, priority="medium"):\n        task = Task(title, priority)\n        self.tasks.append(task)\n        return task\n    \n    def complete(self, task_id):\n        for task in self.tasks:\n            if task.id == task_id:\n                task.complete()\n                return True\n        return False\n    \n    def pending(self):\n        return [t for t in self.tasks if not t.completed]\n    \n    def show(self):\n        priority_order = {"high": 0, "medium": 1, "low": 2}\n        sorted_tasks = sorted(self.tasks, key=lambda t: priority_order.get(t.priority, 1))\n        for task in sorted_tasks:\n            print(f"  {task}")\n\n# Using the Task Manager\ntm = TaskManager()\ntm.add("Learn Python OOP", "high")\ntm.add("Build a project", "medium")\ntm.add("Read documentation", "low")\ntm.add("Fix critical bug", "high")\n\nprint("All tasks:")\ntm.show()\n\ntm.complete(1)  # Complete first task\ntm.complete(3)  # Complete third task\n\nprint(f"\\nPending: {len(tm.pending())} tasks")\nprint("\\nUpdated:")\ntm.show()',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: '# Build your own class!\n\nclass Student:\n    def __init__(self, name, grades=None):\n        self.name = name\n        self.grades = grades or []\n    \n    def add_grade(self, subject, score):\n        self.grades.append({"subject": subject, "score": score})\n    \n    @property\n    def average(self):\n        if not self.grades:\n            return 0\n        return sum(g["score"] for g in self.grades) / len(self.grades)\n    \n    @property\n    def letter_grade(self):\n        avg = self.average\n        if avg >= 90: return "A"\n        if avg >= 80: return "B"\n        if avg >= 70: return "C"\n        if avg >= 60: return "D"\n        return "F"\n    \n    def __repr__(self):\n        return f"Student({self.name!r}, avg={self.average:.1f}, grade={self.letter_grade})"\n\n# Create students\nalice = Student("Alice")\nalice.add_grade("Math", 92)\nalice.add_grade("Physics", 88)\nalice.add_grade("English", 95)\n\nbob = Student("Bob")\nbob.add_grade("Math", 78)\nbob.add_grade("Physics", 82)\nbob.add_grade("English", 71)\n\nstudents = [alice, bob]\nfor s in students:\n    print(s)\n    for g in s.grades:\n        print(f"    {g[\'subject\']}: {g[\'score\']}")',
    instructions: 'Try modifying the Student class or create your own class from scratch!',
  },

  // ═══════════════════════════════════════
  // Going Deeper: OOP Internals
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'Going Deeper — How Classes Really Work' },

  {
    type: 'heading', level: 2, text: 'A Class Is Itself an Object' },
  {
    type: 'text',
    content: 'In Python, classes are **first-class objects** — they\'re values you can assign, pass, and introspect. The type of a class is `type`. The type of an instance is its class.',
  },
  {
    type: 'code',
    code: 'class Dog:\n    pass\n\nd = Dog()\nprint(type(d))      # <class \'__main__.Dog\'>\nprint(type(Dog))    # <class \'type\'>\n\n# Classes are objects — you can pass them around\nanimals = [Dog, Dog, Dog]\npack = [A() for A in animals]',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Attribute Lookup — The Chain' },
  {
    type: 'text',
    content: 'When you access `obj.x`, Python walks a well-defined chain: **instance dict** → **class dict** → **parent classes** (via MRO) → `AttributeError`. Understanding this demystifies inheritance.',
  },
  {
    type: 'code',
    code: 'class Animal:\n    kingdom = "Animalia"     # class attribute — shared by all instances\n\n    def __init__(self, name):\n        self.name = name     # instance attribute — per-object\n\na = Animal("Rex")\nprint(a.name)         # instance dict\nprint(a.kingdom)      # not in instance, fallback to class dict\n\nprint(a.__dict__)           # {\'name\': \'Rex\'}\nprint(Animal.__dict__)      # includes kingdom, __init__, ...',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Inheritance & MRO (Method Resolution Order)' },
  {
    type: 'text',
    content: 'When a class has multiple parents, Python uses the **C3 linearization algorithm** to produce a consistent MRO. `super()` walks this order. View it with `ClassName.__mro__` or `.mro()`.',
  },
  {
    type: 'code',
    code: 'class A:\n    def greet(self): return "A"\n\nclass B(A):\n    def greet(self): return "B→" + super().greet()\n\nclass C(A):\n    def greet(self): return "C→" + super().greet()\n\nclass D(B, C):\n    def greet(self): return "D→" + super().greet()\n\nprint(D().greet())   # D→B→C→A\nprint([c.__name__ for c in D.__mro__])\n# [\'D\', \'B\', \'C\', \'A\', \'object\']',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'python',
    title: 'super() Is NOT "Call the Parent"',
    content: 'It\'s "call the **next** class in the MRO." In single inheritance those match, but in diamond inheritance (like D above), `super()` in B calls C — not A. That\'s the whole point of MRO: cooperative multiple inheritance without duplicate calls.',
  },

  {
    type: 'heading', level: 2, text: 'Dunder Methods — How Classes Plug Into the Language' },
  {
    type: 'text',
    content: 'Every Python operator and built-in function maps to a **dunder** (double-underscore) method. Defining them turns your class into a first-class Python citizen.',
  },
  {
    type: 'code',
    code: 'Operator/Call       Dunder              What it means\n─────────────────────────────────────────────────────────\na + b               __add__             a.__add__(b)\na == b              __eq__              equality\na < b               __lt__              ordering\nlen(a)              __len__             length\na[i]                __getitem__         subscript\na(x)                __call__            make it callable\nstr(a)              __str__             human-readable\nrepr(a)             __repr__            debug/eval-able\nhash(a)             __hash__            use as dict/set key\nwith a:             __enter__/__exit__  context manager\nfor x in a:         __iter__            iterable',
    language: 'text',
  },

  {
    type: 'heading', level: 2, text: 'A Full Example — Vector (IITM-style)' },
  {
    type: 'code',
    code: 'import math\n\nclass Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __sub__(self, other):\n        return Vector(self.x - other.x, self.y - other.y)\n\n    def __mul__(self, k):          # scalar multiplication\n        return Vector(self.x * k, self.y * k)\n\n    def __eq__(self, other):\n        return (self.x, self.y) == (other.x, other.y)\n\n    def __hash__(self):\n        return hash((self.x, self.y))\n\n    def __abs__(self):              # magnitude via abs(v)\n        return math.sqrt(self.x**2 + self.y**2)\n\n    def __bool__(self):             # truthiness: non-zero vector is True\n        return self.x != 0 or self.y != 0\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\nprint(v1 + v2)     # Vector(4, 6)\nprint(v1 * 2)      # Vector(6, 8)\nprint(abs(v1))     # 5.0\nprint(bool(Vector(0, 0)))   # False',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Properties — Managed Attributes' },
  {
    type: 'code',
    code: 'class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n\n    @property\n    def celsius(self):\n        return self._celsius\n\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero")\n        self._celsius = value\n\n    @property\n    def fahrenheit(self):           # computed on read\n        return self._celsius * 9/5 + 32\n\nt = Temperature(20)\nprint(t.celsius)       # 20   — attribute-like\nprint(t.fahrenheit)    # 68.0 — computed every access\nt.celsius = 25         # goes through the setter (validates)\nt.celsius = -300       # ValueError',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: '__slots__ — Memory Optimization' },
  {
    type: 'text',
    content: 'By default, every instance has a `__dict__` to store attributes — flexible but costly. Declaring `__slots__` replaces it with a fixed array — faster access, far less memory. Useful when you\'ll have many instances.',
  },
  {
    type: 'code',
    code: 'import sys\n\nclass PointDict:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\nclass PointSlots:\n    __slots__ = ("x", "y")\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\nprint(sys.getsizeof(PointDict(1, 2)) + sys.getsizeof(PointDict(1, 2).__dict__))\n# ~112 + 104 = ~216 bytes\n\nprint(sys.getsizeof(PointSlots(1, 2)))\n# ~56 bytes — 4× smaller\n\n# Trade-off: can\'t add arbitrary new attributes\np = PointSlots(1, 2)\np.z = 3   # AttributeError: \'PointSlots\' object has no attribute \'z\'',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Classmethod vs Staticmethod' },
  {
    type: 'code',
    code: 'class Pizza:\n    def __init__(self, toppings):\n        self.toppings = toppings\n\n    @classmethod\n    def margherita(cls):            # alternative constructor\n        return cls(["cheese", "tomato"])\n\n    @classmethod\n    def hawaiian(cls):\n        return cls(["ham", "pineapple"])\n\n    @staticmethod\n    def is_valid_topping(t):        # utility, no self/cls\n        return t in {"cheese", "tomato", "ham", "pineapple", "basil"}\n\np = Pizza.margherita()\nprint(p.toppings)                   # [\'cheese\', \'tomato\']\nprint(Pizza.is_valid_topping("anchovy"))   # False',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'isinstance and issubclass' },
  {
    type: 'code',
    code: 'class Animal: pass\nclass Dog(Animal): pass\n\nd = Dog()\nprint(isinstance(d, Dog))       # True\nprint(isinstance(d, Animal))    # True — inheritance is respected\nprint(issubclass(Dog, Animal))  # True\n\n# Accept multiple types with a tuple\nprint(isinstance(d, (int, Animal)))   # True',
    language: 'python',
  },

  {
    type: 'heading', level: 2, text: 'Runtime Object Layout and Lookup Path' },
  {
    type: 'text',
    content: 'An instance stores per-object attributes in its own dictionary (or slots). Methods and shared attributes live on the class object. Attribute access walks instance -> class -> MRO parents.',
  },
  {
    type: 'code',
    code: 'class Animal:\n    kingdom = "Animalia"\n\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return f"{self.name} makes a sound"\n\na = Animal("Rex")\nprint(a.name)\nprint(a.kingdom)\nprint(a.speak())',
    language: 'python',
  },
  {
    type: 'memoryDiagram',
    title: 'Diagram: Instance Dict, Class Dict, and MRO',
    description: 'One object read can traverse multiple namespaces before resolution.',
    bindings: [
      { scope: 'global', name: 'a', objectId: 'OBJ_A' },
      { scope: 'instance:OBJ_A', name: 'name', objectId: 'S_REX' },
      { scope: 'class:Animal', name: 'kingdom', objectId: 'S_KING' },
      { scope: 'class:Animal', name: 'speak', objectId: 'F_SPEAK' },
      { scope: 'runtime', name: 'mro', objectId: 'MRO_AN' },
    ],
    objects: [
      { id: 'OBJ_A', type: 'Animal instance', value: 'Animal(name="Rex")', mutable: true, accent: 'sky' },
      { id: 'S_REX', type: 'str', value: '"Rex"', mutable: false, accent: 'mint' },
      { id: 'S_KING', type: 'str', value: '"Animalia"', mutable: false, accent: 'amber' },
      { id: 'F_SPEAK', type: 'function', value: '<function Animal.speak>', mutable: false, accent: 'neutral' },
      { id: 'MRO_AN', type: 'tuple', value: '(Animal, object)', mutable: false, accent: 'neutral' },
    ],
    insights: [
      'Instance attributes shadow class attributes with the same name.',
      'Method binding happens at access time: function plus instance becomes bound method.',
      'MRO order controls inheritance resolution and super() behavior.',
    ],
  },
  {
    type: 'memoryLab',
    title: 'Interactive Trace: Attribute Read and Override',
    prompt: 'Watch lookup before and after setting an instance attribute that shadows a class attribute.',
    steps: [
      {
        title: 'Create Instance',
        action: 'Instantiate Dog with inherited class attr',
        code: 'class Dog:\n    species = "Canis"\n    def __init__(self, name):\n        self.name = name\n\nd = Dog("Buddy")',
        bindings: [
          { scope: 'global', name: 'd', objectId: 'OBJ_D' },
          { scope: 'class:Dog', name: 'species', objectId: 'S_CANIS' },
        ],
        objects: [
          { id: 'OBJ_D', type: 'Dog instance', value: 'Dog(name="Buddy")', mutable: true, refCount: 1, accent: 'sky' },
          { id: 'S_CANIS', type: 'str', value: '"Canis"', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: 'species exists only on class at this point.',
      },
      {
        title: 'Read Class Attribute via Instance',
        action: 'Access d.species',
        code: 'd.species  # "Canis"',
        bindings: [
          { scope: 'global', name: 'd', objectId: 'OBJ_D' },
          { scope: 'runtime', name: 'resolved_from', objectId: 'CLASS_DOG' },
        ],
        objects: [
          { id: 'CLASS_DOG', type: 'lookup source', value: 'class dict', mutable: false, refCount: 1, accent: 'mint' },
        ],
        explanation: 'Lookup misses instance dict and resolves from class dict.',
      },
      {
        title: 'Shadow with Instance Attribute',
        action: 'Assign d.species directly',
        code: 'd.species = "Canis lupus familiaris"',
        bindings: [
          { scope: 'instance:OBJ_D', name: 'species', objectId: 'S_FULL' },
          { scope: 'class:Dog', name: 'species', objectId: 'S_CANIS' },
        ],
        objects: [
          { id: 'S_FULL', type: 'str', value: '"Canis lupus familiaris"', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'S_CANIS', type: 'str', value: '"Canis"', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Assignment creates instance key, shadowing but not modifying class attribute.',
      },
      {
        title: 'Compare Instance vs Class Reads',
        action: 'Read d.species and Dog.species',
        code: 'print(d.species)\nprint(Dog.species)',
        bindings: [
          { scope: 'global', name: 'd.species', objectId: 'S_FULL' },
          { scope: 'global', name: 'Dog.species', objectId: 'S_CANIS' },
        ],
        objects: [
          { id: 'S_FULL', type: 'str', value: '"Canis lupus familiaris"', mutable: false, refCount: 1, accent: 'sky' },
          { id: 'S_CANIS', type: 'str', value: '"Canis"', mutable: false, refCount: 1, accent: 'amber' },
        ],
        explanation: 'Instance and class can now expose different values under the same attribute name.',
      },
    ],
  },

  // ═══════════════════════════════════════
  // Deep Q&A
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Deep Q&A' },
  {
    type: 'qna',
    items: [
      {
        question: 'Why does Python require `self` on every method?',
        answer: 'Because methods are just **functions** stored on a class. When you call `obj.method()`, Python rewrites it as `ClassOf(obj).method(obj)` — `obj` must be passed explicitly as the first argument. "Explicit is better than implicit" — the Zen of Python.',
      },
      {
        question: 'What is MRO and why should I care?',
        answer: 'MRO (Method Resolution Order) is the **linearized list** of classes Python searches for attributes. In single inheritance it\'s trivial; in multiple inheritance it uses C3 linearization to ensure every parent is visited exactly once. `super()` advances one step in the MRO.',
      },
      {
        question: 'What\'s the difference between `__str__` and `__repr__`?',
        answer: '`__str__` is for humans (`print(x)`, `str(x)`). `__repr__` is for developers — ideally eval-able (`eval(repr(x)) == x`). If only one is defined, `__repr__` fills in for `__str__`. Always define `__repr__`.',
      },
      {
        question: 'When should I use `__slots__`?',
        answer: 'When you\'ll create **many instances** and each has a fixed, known set of attributes. Saves ~40-70% memory and speeds attribute access. Skip it when you need dynamic attributes or multiple inheritance.',
      },
      {
        question: 'classmethod vs staticmethod — which do I need?',
        answer: '**classmethod** receives the class as `cls` — use for alternative constructors or when you need to produce subclass instances. **staticmethod** receives nothing special — use for utility functions that logically belong to the class but don\'t need self/cls.',
      },
      {
        question: 'Why does `@property` exist — can\'t I just access the attribute?',
        answer: 'Properties let you **start** with a plain attribute and later add validation, logging, or computation **without breaking the API**. Callers still write `t.celsius = 20` — but now your setter validates. This is why Python rarely needs Java-style getters/setters.',
      },
      {
        question: 'If I override `__eq__`, why do I also need `__hash__`?',
        answer: 'Defining `__eq__` makes `__hash__` implicitly `None` — the class becomes unhashable. Two "equal" objects must have equal hashes; Python can\'t figure that out automatically, so it refuses to guess. Define `__hash__` manually based on the same fields as `__eq__`.',
      },
    ],
  },
]

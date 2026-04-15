import{d as N,o as i,c as a,a as t,t as l,l as F,m as C,_ as R,k as I,f as w,q as j,u as B,h as A,n as te,F as S,r as q,s as ne,v as ie,x as re,b as z,w as E,T as ae,y as oe,e as P,z as D,j as se,i as le,p as pe}from"./index-CFkb-kC8.js";import{u as O,g as de,a as ce,b as ue}from"./structure-D2rbrIlz.js";import{u as H,E as U,o as $,l as Y,p as V,k as G,d as K,i as Q,a as J,b as Z,c as X,e as W}from"./index-LE3UFZUf.js";const he=[{type:"heading",level:1,text:"Welcome to Python! 🐍"},{type:"text",content:"Python is a powerful, readable programming language used for everything from web development to data science and AI. In this workshop, you'll learn how to write real, working Python code right in your browser."},{type:"callout",variant:"tip",title:"Why Python?",content:"Created by **Guido van Rossum** in 1991, Python was designed to be simple and readable. Its syntax reads almost like English. Companies like **Google, Netflix, Instagram, and NASA** all rely on Python."},{type:"heading",level:2,text:"Your First Program"},{type:"text",content:"Let's start by displaying text on the screen. In Python, this takes just one line:"},{type:"code",code:'print("Hello, World!")',language:"python"},{type:"text",content:"The `print()` function takes whatever you put inside its parentheses and displays it. The text inside the quotes is called a **string**."},{type:"callout",variant:"warning",title:"Common Mistake",content:'Always include the parentheses `()` after `print`. Writing `print "Hello"` causes a **SyntaxError** in Python 3.'},{type:"playground",defaultCode:`# Try changing the message below:
print("Hello, World!")

# Try printing with emojis:
print("Python is awesome! \\N{snake}")`,instructions:"Modify the messages and add more print statements. Experiment with different text and numbers."},{type:"heading",level:2,text:"The print() Function"},{type:"text",content:"`print()` can display different types of data: text, numbers, calculations, and multiple values at once."},{type:"code",code:`# Printing text (strings)
print("My name is Python")

# Printing numbers
print(42)
print(3.14159)

# Printing calculations
print(2 + 3)

# Printing multiple values (separated by spaces automatically)
print("Age:", 25)
print("Name:", "Alice", "| Score:", 95)`,language:"python"},{type:"callout",variant:"info",title:"Multiple Values in print()",content:'When you pass multiple values to `print()` separated by commas, Python automatically adds a **space** between them. You can change this using the `sep` parameter: `print("a", "b", "c", sep="-")` outputs `a-b-c`.'},{type:"text",content:"By default, `print()` adds a newline character (`\\n`) at the end. You can change this with the `end` parameter:"},{type:"code",code:`# Default behavior
print("Line 1")
print("Line 2")

# Using end parameter
print("Hello", end=" ")
print("World")  # Output: Hello World

# Using sep and end together
print("Python", "is", "fun", sep="~", end="!!!\\n")`,language:"python"},{type:"playground",defaultCode:`print("Python", "is", "fun!")

# Try changing the separator
print("2024", "01", "15", sep="-")

# Try changing the end character
print("Loading", end="...")
print("Done!")`,instructions:"Experiment with the sep and end parameters."},{type:"heading",level:2,text:"Literals and Expressions"},{type:"text",content:'A **literal** is a fixed value written directly in your code (like `42` or `"hello"`). An **expression** combines literals with operators to produce a new value.'},{type:"code",code:`# Literals
print(42)
print("hello")

# Expressions
print(2 + 3)
print("ha" * 3)`,language:"python"},{type:"heading",level:2,text:"Comments"},{type:"text",content:"Comments are notes in your code that Python ignores. They explain *what* the code does and *why*."},{type:"code",code:`# This is a single-line comment
print("This runs!")  # Inline comment

# You can use comments to:
# 1. Explain logic
# 2. Temporarily disable code

# print("This won't run")

"""
This is a multi-line comment.
Useful for longer explanations.
"""`,language:"python"},{type:"callout",variant:"tip",title:"Comment Best Practices",content:"Don't comment *what* the code does if it's obvious. Instead, comment *why*. Bad: `x = x + 1  # increment x by 1`. Good: `x = x + 1  # account for zero-based indexing`. Comments should add understanding, not just repeat the code."},{type:"heading",level:2,text:"Errors Are Your Friends"},{type:"text",content:"When Python encounters something it doesn't understand, it raises an **error** (also called an **exception**). Don't panic when you see errors — they are Python's way of telling you exactly what went wrong and where. There are two main categories:"},{type:"list",items:["**SyntaxError** — Your code violates Python's grammar rules (like a missing quote or parenthesis). Python catches these *before* running your code.","**Runtime Errors (Exceptions)** — Your code has valid syntax but something goes wrong during execution. Common ones: `NameError` (undefined variable), `TypeError` (wrong operation on a type), `ZeroDivisionError` (dividing by zero)."]},{type:"code",code:`# SyntaxError — missing closing quote
# print("Hello)

# NameError — using a variable that doesn't exist
# print(greeting)

# TypeError — can't add string and number directly
# print("age: " + 25)

# ZeroDivisionError
# print(10 / 0)

# The correct approaches:
print("Hello")
print("age: " + str(25))    # Convert number to string first
print("age:", 25)            # Or let print() handle it`,language:"python"},{type:"callout",variant:"info",title:"Debugging Process",content:"When you encounter an error, follow this process: **1) Read** the error message carefully (Python tells you the line number and error type). **2) Understand** what went wrong. **3) Fix** the issue. **4) Test** again. Error messages are not your enemy — they are detailed diagnostic tools!"},{type:"quiz",quiz:{id:"quiz-day1-welcome",title:"Quick Check — Python Basics",questions:[{type:"mcq",question:"Which function is used to display output in Python?",options:["display()","print()","show()","console.log()"],correctIndex:1,explanation:"print() is the built-in function used to display output to the screen in Python."},{type:"predict-output",code:`print("Hello")
print(2 + 3)`,options:["Hello 5","Hello\\n5",'"Hello"\\n5',"Error"],correctIndex:1,explanation:'Each print() outputs on a new line. "Hello" appears first, then 5 (the result of 2+3) on the next line.'},{type:"mcq",question:"What character starts a single-line comment in Python?",options:["//","#","/*","--"],correctIndex:1,explanation:"The # symbol starts a single-line comment in Python. Everything after # on that line is ignored."},{type:"predict-output",code:'print("a", "b", "c", sep="-")',options:["a b c","a-b-c","a, b, c","abc"],correctIndex:1,explanation:`The sep parameter changes the separator between values. Here it's set to "-" instead of the default space.`},{type:"mcq",question:"What type of error occurs when you try to use a variable that hasn't been defined?",options:["SyntaxError","TypeError","NameError","ValueError"],correctIndex:2,explanation:"A NameError occurs when you reference a variable name that Python hasn't seen before (not defined)."}]}},{type:"challenge",challenge:{id:"challenge-hello",title:"Personal Introduction Card",difficulty:"easy",description:`Create a formatted "introduction card" that prints:
1. A border line of 30 asterisks
2. Your name with a greeting
3. A fun fact about yourself
4. Your favorite number and why
5. Another border line of 30 asterisks`,starterCode:`# Create your introduction card!
print("*" * 30)
print("Hello, I am ___!")
print("Fun fact: ___")
print("My favorite number is", ___)
print("*" * 30)`,testCases:[{expected:"******************************",description:"First line should be 30 asterisks"},{expected:"******************************",description:"Last line should be 30 asterisks",hidden:!0}],hints:["Replace ___ with your own text and numbers",'Use "string" * number to repeat a string',"You can pass multiple values to print() with commas"],solution:`print("*" * 30)
print("Hello, I am Alex!")
print("Fun fact: I love solving puzzles")
print("My favorite number is", 42)
print("*" * 30)`}}],fe=[{type:"heading",level:1,text:"Variables & Memory"},{type:"text",content:"Variables store and retrieve data. A variable is a **name** that refers to a **value** stored in memory."},{type:"callout",variant:"python",title:"Python's Memory Model",content:"In Python, variables are like **sticky labels** pointing to objects in memory. When you write `x = 42`, Python creates an integer object `42`, and `x` is a label pointing to it."},{type:"code",code:`# Creating variables using the = operator
name = "Alice"       # String
age = 25             # Integer
height = 5.6         # Float
is_student = True    # Boolean

print(name)
print(age)`,language:"python"},{type:"heading",level:2,text:"The Assignment Operator (=)"},{type:"text",content:"The `=` symbol evaluates the expression on the right side first, then assigns the result to the variable on the left."},{type:"code",code:`x = 10          # Assign 10 to x
print(x)        # 10

x = x + 5       # Evaluate 10 + 5, assign 15 back to x
print(x)        # 15

y = x * 2       # Evaluate 15 * 2, assign 30 to y
print(y)        # 30`,language:"python"},{type:"callout",variant:"warning",title:"= vs ==",content:"`=` is the **assignment** operator (stores a value). `==` is the **equality** operator (checks if two values are equal)."},{type:"heading",level:2,text:"Augmented Assignment"},{type:"text",content:"Python provides shorthand operators that combine arithmetic with assignment:"},{type:"code",code:`x = 10

x += 5       # Same as x = x + 5 (x is now 15)
x -= 3       # Same as x = x - 3 (x is now 12)
x *= 2       # Same as x = x * 2 (x is now 24)
x //= 5      # Same as x = x // 5 (x is now 4)`,language:"python"},{type:"heading",level:2,text:"Variable Naming Rules"},{type:"text",content:"Python has strict rules for variable names:"},{type:"list",items:["Must start with a **letter** or **underscore** (_)","Can contain letters, digits, and underscores","Cannot start with a digit (`1name` is invalid)","Cannot contain spaces (`my var` is invalid)","Cannot be a **reserved keyword** (`if`, `for`, `class`, etc.)","Names are **case-sensitive** (`age` and `Age` are different)"]},{type:"code",code:`# ✅ Valid names
name = "Alice"
_private = 42
student_count = 30

# ❌ Invalid names (cause errors)
# 2fast = "error"      # Starts with number
# my-var = "error"     # Hyphen not allowed
# class = "error"      # Reserved keyword`,language:"python"},{type:"text",content:"**Conventions (Best Practices):**"},{type:"list",items:["Use **snake_case** for variables and functions: `student_name`, `total_score`","Use **UPPER_SNAKE_CASE** for constants: `MAX_RETRIES`, `PI`","Use **descriptive names** — `student_count` is better than `sc`","Avoid single-letter names except in loops (`i`, `j`) or math (`x`, `y`)"]},{type:"callout",variant:"info",title:"Python's Reserved Keywords",content:"You can see all keywords by running: `import keyword; print(keyword.kwlist)`. These include: `False`, `None`, `True`, `and`, `as`, `assert`, `async`, `await`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`, `except`, `finally`, `for`, `from`, `global`, `if`, `import`, `in`, `is`, `lambda`, `nonlocal`, `not`, `or`, `pass`, `raise`, `return`, `try`, `while`, `with`, `yield`."},{type:"heading",level:2,text:"Multiple Assignment & Unpacking"},{type:"text",content:"Assign values to multiple variables at once:"},{type:"code",code:`# 1. Multiple assignment (tuple unpacking)
x, y, z = 1, 2, 3

# 2. Same value to multiple variables
a = b = c = 0

# 3. Swapping variables
x = 10
y = 20
x, y = y, x  # Swap! No temp variable needed`,language:"python"},{type:"callout",variant:"python",title:"How Does Swapping Work?",content:"`x, y = y, x` evaluates the right side as a tuple `(20, 10)`, then unpacks it into the left side. The right side is fully evaluated before assignment."},{type:"heading",level:2,text:"Dynamic Typing"},{type:"text",content:"Python is dynamically typed. You don't declare variable types; they are determined by the value. A variable can change type:"},{type:"code",code:`x = 42           # x is an int
x = "hello"      # Now x is a string
x = 3.14         # Now x is a float`,language:"python"},{type:"callout",variant:"warning",title:"Dynamic Typing Best Practices",content:"Changing a variable's type is generally bad practice and leads to bugs. If `age` starts as an integer, keep it an integer."},{type:"heading",level:2,text:"Object Identity with id()"},{type:"text",content:"Every object has a unique memory address. Inspect it with `id()`:"},{type:"code",code:`x = 42
print(id(x))       # e.g., 140234567890

y = 42
print(id(y))       # Same number! Python reuses small integers.
print(x is y)      # True — x and y point to the SAME object

# == checks VALUE equality
# is checks IDENTITY (exact same object in memory)`,language:"python"},{type:"callout",variant:"info",title:"Integer Caching",content:"Python caches integers from -5 to 256 for performance. `a = 100; b = 100; a is b` is `True`. But `a = 300; b = 300; a is b` might be `False`. Always use `==` for comparing values, not `is`."},{type:"heading",level:2,text:"Reassignment & References"},{type:"text",content:"Variables are labels pointing to objects. Reassigning moves the label to a new object:"},{type:"code",code:`x = 10
x = 20          # x now points to a NEW object (20)

# Multiple labels can point to the same object
a = [1, 2, 3]
b = a           # b points to the SAME list object

b.append(4)     # Modifying through b...
print(a)        # [1, 2, 3, 4] — a sees the change too!`,language:"python"},{type:"heading",level:2,text:"Deleting Variables with del"},{type:"text",content:"Delete a variable using `del`. This removes the name; the object is garbage-collected if no other references exist:"},{type:"code",code:`x = 42
del x        # Remove the variable name 'x'
# print(x)   # NameError: name 'x' is not defined

# del doesn't delete the object itself
a = [1, 2, 3]
b = a
del a
print(b)     # [1, 2, 3] — the list object still exists through b`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with variables!

# 1. Create variables
first_name = "Ada"
last_name = "Lovelace"
birth_year = 1815
current_year = 2026

# 2. Calculate age
age = current_year - birth_year
print(f"{first_name} {last_name} would be {age} years old")

# 3. Try swapping
x = "Python"
y = "Java"
x, y = y, x
print(f"Swapped: x={x}, y={y}")

# 4. Augmented assignment
counter = 0
counter += 1
counter += 1
print(f"Counter: {counter}")`,instructions:"Modify the variables, try creating your own, and experiment with swapping and augmented assignment."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-variables",title:"Variables & Memory Quiz",questions:[{type:"mcq",question:"What does the `=` operator do in Python?",options:["Checks if two values are equal","Assigns the value on the right to the variable on the left","Assigns the value on the left to the variable on the right","Creates a mathematical equation"],correctIndex:1,explanation:"The `=` operator is the assignment operator. It evaluates the right side first, then assigns the result to the left-side variable. `==` is used for equality checking."},{type:"predict-output",code:`x = 5
x = x + 3
x *= 2
print(x)`,options:["10","16","13","8"],correctIndex:1,explanation:"x starts at 5. `x = x + 3` makes it 8. `x *= 2` (same as `x = x * 2`) makes it 16."},{type:"predict-output",code:`a, b = 10, 20
a, b = b, a
print(a, b)`,options:["10 20","20 10","20 20","Error"],correctIndex:1,explanation:"The right side `b, a` evaluates to `(20, 10)` first, then this tuple is unpacked into `a` and `b`. So `a` becomes 20 and `b` becomes 10."},{type:"mcq",question:"Which of the following is NOT a valid variable name in Python?",options:["_my_var","myVar2","2nd_place","student_name"],correctIndex:2,explanation:"Variable names cannot start with a digit. `2nd_place` starts with `2`, which is invalid. All other options follow Python's naming rules."},{type:"predict-output",code:`x = "hello"
print(type(x).__name__)`,options:["hello","str","string","type"],correctIndex:1,explanation:"`type(x)` returns `<class 'str'>`. The `__name__` attribute of a type gives just the type name as a string, which is `\"str\"`."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-variables",title:"Temperature Converter",difficulty:"easy",description:"Write a program that converts a temperature from Celsius to Fahrenheit. The formula is: F = (C * 9/5) + 32. Store the Celsius value in a variable, perform the conversion, and print the result.",starterCode:`celsius = 37.5

# Convert to Fahrenheit using the formula: F = (C * 9/5) + 32
fahrenheit = 0  # Fix this line

# Print the result (should output: 37.5°C = 99.5°F)
print(f"{celsius}\\u00b0C = {fahrenheit}\\u00b0F")`,testCases:[{input:"",expected:"37.5°C = 99.5°F"}],hints:["The formula is: fahrenheit = (celsius * 9/5) + 32","For celsius = 37.5: (37.5 * 9/5) + 32 = 67.5 + 32 = 99.5"],solution:`celsius = 37.5
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}\\u00b0C = {fahrenheit}\\u00b0F")`}}],me=[{type:"heading",level:1,text:"Data Types in Python"},{type:"text",content:"Every piece of data in Python has a **type**. The type determines what operations you can perform on that data. Python is **dynamically typed**, meaning you don't declare types explicitly—Python infers them from the value."},{type:"callout",variant:"python",title:"Dynamic vs Static Typing",content:"In statically typed languages (like Java), you declare types: `int x = 5;`. In Python, you write `x = 5` and the type is inferred. The type is associated with the value, not the variable."},{type:"text",content:"The four fundamental built-in data types are:"},{type:"list",items:["**`int`** (Integers): Whole numbers (`42`, `-7`, `0`)","**`float`** (Floating-point): Numbers with decimals (`3.14`, `-0.5`)","**`str`** (Strings): Text enclosed in quotes (`\"hello\"`, `'Python'`)","**`bool`** (Booleans): Logical values (`True` or `False`)"]},{type:"text",content:"Python also has **`NoneType`** (value `None`) to represent the absence of a value."},{type:"heading",level:2,text:"The type() Function"},{type:"text",content:"The built-in `type()` function returns the type of any value or variable:"},{type:"code",code:`# Checking types of literals
print(type(42))          # <class 'int'>
print(type(3.14))        # <class 'float'>
print(type("hello"))     # <class 'str'>
print(type(True))        # <class 'bool'>
print(type(None))        # <class 'NoneType'>

# Checking types of variables
age = 21
name = "Alice"

print(type(age))         # <class 'int'>
print(type(name))        # <class 'str'>`,language:"python"},{type:"callout",variant:"info",title:"What Does <class '...'> Mean?",content:"In Python, everything is an object. `<class 'int'>` means the value is an instance of the `int` class."},{type:"text",content:"You can compare types directly:"},{type:"code",code:`x = 42
print(type(x) == int)      # True
print(type(x) == float)    # False
print(type(x) == str)      # False`,language:"python"},{type:"heading",level:2,text:"isinstance()"},{type:"text",content:"`isinstance()` is the preferred way to check types. It returns `True` if a value matches a type (or tuple of types):"},{type:"code",code:`# Basic isinstance() usage
print(isinstance(42, int))        # True
print(isinstance(3.14, float))    # True

# Check against multiple types
print(isinstance(42, (int, float)))    # True
print(isinstance("hi", (int, float)))  # False`,language:"python"},{type:"callout",variant:"tip",title:"type() vs isinstance()",content:"Use `type()` to inspect types. Use `isinstance()` to validate types in code, as it correctly handles inheritance (e.g., `bool` is a subclass of `int`)."},{type:"heading",level:2,text:"Integers (int)"},{type:"text",content:"Integers are whole numbers. In Python, integers have **unlimited precision**, meaning they can be as large as your computer's memory allows:"},{type:"code",code:`# Basic integers
x = 42
y = -17
z = 0

# Python handles huge numbers automatically
big = 10 ** 100    # 10 to the power of 100
print(big)`,language:"python"},{type:"callout",variant:"python",title:"Unlimited Precision",content:"Python integers can be arbitrarily large. They are not limited to 64 bits like in C or Java. Python dynamically allocates memory as needed, making it ideal for cryptography and mathematical research."},{type:"heading",level:3,text:"Underscores for Readability"},{type:"text",content:"You can use underscores (`_`) inside numeric literals to make large numbers easier to read. Python ignores them."},{type:"code",code:`# Without underscores
population = 1400000000

# With underscores
population = 1_400_000_000

print(population)           # 1400000000
print(1_000 == 1000)        # True`,language:"python"},{type:"heading",level:3,text:"Alternative Integer Representations"},{type:"text",content:"Python supports binary (base-2), octal (base-8), and hexadecimal (base-16) integer literals using prefixes:"},{type:"code",code:`# Decimal (base 10)
dec = 255

# Binary (base 2) - prefix 0b
bin_num = 0b11111111

# Octal (base 8) - prefix 0o
oct_num = 0o377

# Hexadecimal (base 16) - prefix 0x
hex_num = 0xFF

# All represent the same value
print(255 == 0b11111111 == 0o377 == 0xFF)  # True`,language:"python"},{type:"callout",variant:"info",title:"When Are Non-Decimal Bases Used?",content:"Binary is used in low-level programming. Hexadecimal is common for colors (`#FF5733`) and memory addresses. Octal is used in Unix file permissions (`chmod 755`)."},{type:"heading",level:2,text:"Floating-Point Numbers (float)"},{type:"text",content:"Floats represent real numbers with a decimal point. Any number written with a decimal point is a float."},{type:"code",code:`# Float literals
pi = 3.14159
temperature = -40.0

# 2.0 is a float, not an int
print(type(2.0))    # <class 'float'>

# Division ALWAYS returns a float
print(10 / 2)       # 5.0`,language:"python"},{type:"heading",level:3,text:"Scientific Notation"},{type:"text",content:"For very large or small numbers, use scientific notation with `e` or `E` (powers of 10):"},{type:"code",code:`speed_of_light = 3e8        # 3 x 10^8 = 300000000.0
planck = 6.626e-34          # 6.626 x 10^-34

print(type(1e2))            # <class 'float'>`,language:"python"},{type:"heading",level:3,text:"Floating-Point Precision"},{type:"text",content:"Computers store numbers in binary. Many decimal fractions cannot be represented exactly in binary, leading to tiny precision errors:"},{type:"code",code:`# The classic floating-point precision issue
print(0.1 + 0.2)            # 0.30000000000000004
print(0.1 + 0.2 == 0.3)     # False`,language:"python"},{type:"callout",variant:"danger",title:"Never Compare Floats with ==",content:"Due to precision errors, never use `==` to compare floats. Use `math.isclose(a, b)` or check if the difference is within a tolerance (`abs(a - b) < 1e-9`)."},{type:"code",code:`import math

a = 0.1 + 0.2
b = 0.3

# GOOD: Using math.isclose()
print(math.isclose(a, b))        # True

# Special float values
print(float('inf'))              # Infinity
print(float('nan'))              # Not a Number`,language:"python"},{type:"callout",variant:"tip",title:"When Precision Matters",content:"For financial calculations, never use `float`. Use the `decimal` module instead: `from decimal import Decimal; price = Decimal('19.99')`."},{type:"heading",level:2,text:"Strings (str)"},{type:"text",content:"Strings represent text data. Python provides multiple ways to create strings:"},{type:"heading",level:3,text:"Single vs Double Quotes"},{type:"code",code:`# Single and double quotes are identical
name1 = 'Alice'
name2 = "Alice"

# Use one to enclose the other
message1 = "It's a beautiful day"
message2 = 'She said "hello"'

# Or use escape characters (\\)
message3 = 'It\\'s a beautiful day'`,language:"python"},{type:"heading",level:3,text:"Multiline Strings"},{type:"text",content:"Triple quotes (`'''` or `\"\"\"`) allow strings to span multiple lines. They preserve line breaks:"},{type:"code",code:`# Triple-quoted multiline string
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you!"""

print(poem)

# Also works with single triple-quotes
address = '''123 Main Street
Apartment 4B
New Delhi, 110001'''`,language:"python"},{type:"heading",level:3,text:"Raw Strings"},{type:"text",content:"A **raw string** is prefixed with `r` or `R` and treats backslashes as literal characters instead of escape sequences. Useful for file paths and regular expressions:"},{type:"code",code:`# Normal string: \\n is a newline
print("Hello\\nWorld")

# Raw string: \\n is literal
print(r"Hello\\nWorld")

# Useful for Windows file paths
path1 = "C:\\\\Users\\\\Documents\\\\file.txt"  # double backslashes
path2 = r"C:\\Users\\Documents\\file.txt"     # raw string`,language:"python"},{type:"callout",variant:"info",title:"Common Escape Sequences",content:"`\\n` (newline), `\\t` (tab), `\\\\` (literal backslash), `\\'` (single quote), `\\\"` (double quote)."},{type:"heading",level:2,text:"Booleans (bool)"},{type:"text",content:"Booleans represent one of two values: `True` or `False`. They are the foundation of decision-making in programming."},{type:"code",code:`# Boolean literals (capital T and F)
is_student = True
is_graduated = False

# Booleans from comparisons
print(5 > 3)         # True
print(2 == 7)        # False`,language:"python"},{type:"heading",level:3,text:"Booleans Are Integers"},{type:"text",content:"In Python, `bool` is a subclass of `int`. `True` is `1` and `False` is `0`. You can use booleans in arithmetic:"},{type:"code",code:`# True == 1, False == 0
print(True + True)      # 2
print(True + False)     # 1

# Count True values in a list
results = [True, False, True, True, False]
print(sum(results))     # 3`,language:"python"},{type:"heading",level:3,text:"Truthy and Falsy Values"},{type:"text",content:'Every value in Python has a boolean interpretation. The `bool()` function reveals whether a value is "truthy" or "falsy":'},{type:"code",code:`# Falsy values (evaluate to False)
print(bool(0))          # False (zero)
print(bool(""))         # False (empty string)
print(bool([]))         # False (empty list)
print(bool(None))       # False (None)

# Truthy values (evaluate to True)
print(bool(1))          # True
print(bool("hello"))    # True (non-empty string)
print(bool([1, 2]))     # True (non-empty list)
print(bool("0"))        # True (string "0" is not empty)`,language:"python"},{type:"callout",variant:"warning",title:'Common Pitfall: "0" vs 0',content:'`bool("0")` is `True` because `"0"` is a non-empty string. Only the empty string `""` is falsy.'},{type:"heading",level:2,text:"Type Conversion (Casting)"},{type:"text",content:"You can convert data between types using built-in functions: `int()`, `float()`, `str()`, and `bool()`."},{type:"heading",level:3,text:"Converting to int"},{type:"code",code:`# float -> int (truncates toward zero)
print(int(3.7))        # 3
print(int(-3.7))       # -3

# string -> int
print(int("42"))       # 42

# bool -> int
print(int(True))       # 1`,language:"python"},{type:"callout",variant:"danger",title:"int() Conversion Pitfalls",content:'`int("3.14")` raises a `ValueError`. You cannot convert a string with a decimal point directly to an int. Convert to float first: `int(float("3.14"))`.'},{type:"heading",level:3,text:"Converting to float"},{type:"code",code:`# int -> float
print(float(42))       # 42.0

# string -> float
print(float("3.14"))   # 3.14
print(float("1e3"))    # 1000.0`,language:"python"},{type:"heading",level:3,text:"Converting to str"},{type:"code",code:`# Anything can be converted to a string
print(str(42))         # "42"
print(str(3.14))       # "3.14"
print(str(True))       # "True"

# Useful for string concatenation
age = 25
print("I am " + str(age) + " years old")`,language:"python"},{type:"heading",level:3,text:"Using round() and abs()"},{type:"text",content:"Two essential numeric utility functions:"},{type:"code",code:`# round() — rounds a float to a given number of decimal places
print(round(3.14159))          # 3
print(round(3.14159, 2))       # 3.14
print(round(2.5))              # 2 (banker's rounding)
print(round(3.5))              # 4

# abs() — returns the absolute value
print(abs(-42))                # 42
print(abs(3.14))               # 3.14`,language:"python"},{type:"callout",variant:"warning",title:"Banker's Rounding",content:"Python uses **banker's rounding** (round half to even). When a number is exactly halfway, it rounds to the nearest **even** number. `round(2.5)` is `2`, and `round(3.5)` is `4`. This reduces cumulative rounding bias."},{type:"heading",level:2,text:"The None Type"},{type:"text",content:"`None` represents the **absence of a value**. It is Python's equivalent of `null` or `undefined`."},{type:"code",code:`x = None
print(type(x))      # <class 'NoneType'>

# Check for None using 'is'
print(x is None)    # True

# None is falsy
print(bool(None))   # False`,language:"python"},{type:"callout",variant:"tip",title:'Always Use "is None"',content:"Always use `x is None` instead of `x == None`. The `is` keyword checks identity (whether it's the exact same object), which is faster and safer since there is only one `None` object in Python."},{type:"heading",level:2,text:"Explore: Types in Action"},{type:"playground",defaultCode:`# Explore Python data types!

# 1. Check types of different values
print("Type of 42:", type(42))
print("Type of 3.14:", type(3.14))
print("Type of 'hello':", type("hello"))
print("Type of True:", type(True))
print("Type of None:", type(None))

print("---")

# 2. The float precision surprise
print("0.1 + 0.2 =", 0.1 + 0.2)
print("0.1 + 0.2 == 0.3?", 0.1 + 0.2 == 0.3)

print("---")

# 3. Boolean arithmetic
print("True + True =", True + True)
print("Sum of [True, False, True]:", sum([True, False, True]))

print("---")

# 4. Type conversions
print("int(3.9) =", int(3.9))
print("float(42) =", float(42))
print("str(100) =", str(100))
print("bool(0) =", bool(0))
print("bool('hello') =", bool("hello"))
`,instructions:"Run the code and observe the outputs. Try adding your own type experiments."},{type:"heading",level:2,text:"Using type() in Practice"},{type:"text",content:"Understanding types is critical when handling user input, since `input()` always returns a string:"},{type:"code",code:`# input() ALWAYS returns a string
age_str = input("Enter your age: ")    # user types: 25
print(type(age_str))                   # <class 'str'>

# Convert it to use it as a number
age = int(age_str)
print(age + 1)                         # 26

# Common pattern: convert inline
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))`,language:"python"},{type:"text",content:"A summary of conversions:"},{type:"code",code:`# TO INT:
print(int(3.14))        # 3
print(int("42"))        # 42
# int("3.14")           # ValueError

# TO FLOAT:
print(float(42))        # 42.0
print(float("3.14"))    # 3.14

# TO STR:
print(str(42))          # "42"
print(str(True))        # "True"

# TO BOOL:
print(bool(0))          # False
print(bool(42))         # True
print(bool(""))         # False
print(bool("0"))        # True`,language:"python"},{type:"heading",level:2,text:"Explore: Type Conversions"},{type:"playground",defaultCode:`# Type Conversion Experiments

# 1. Converting between int and float
print("int(7.9) =", int(7.9))
print("int(-7.9) =", int(-7.9))
print("float(10) =", float(10))

print("---")

# 2. String <-> Number conversions
num_str = "123"
num = int(num_str)
print(f"String '{num_str}' -> int {num} -> back to string '{str(num)}'")

print("---")

# 3. Truthy/Falsy exploration
test_values = [0, 1, -1, 0.0, 0.1, "", "hello", "0", None, True, False]
for val in test_values:
    print(f"bool({str(val):>10}) = {bool(val)}")
`,instructions:"Run the code to see type conversions in action. The truthy/falsy exploration shows which values Python considers True or False."},{type:"divider"},{type:"quiz",quiz:{id:"quiz-day1-datatypes",title:"Data Types — Knowledge Check",questions:[{type:"predict-output",code:"print(type(42))",options:["int","<class 'int'>","42","integer"],correctIndex:1,explanation:"The type() function returns the class of the object. For the integer 42, it returns <class 'int'>, which is the full string representation of the type."},{type:"predict-output",code:"print(0.1 + 0.2 == 0.3)",options:["True","False","0.3","Error"],correctIndex:1,explanation:"0.1 + 0.2 evaluates to 0.30000000000000004 due to floating-point precision. This is NOT exactly equal to 0.3, so the comparison returns False. Never compare floats with ==!"},{type:"mcq",question:'What does int("3.14") produce?',options:["3","3.14","ValueError","314"],correctIndex:2,explanation:'int() cannot directly parse a string containing a decimal point. You would need int(float("3.14")) to first convert to float (3.14) and then to int (3). int("3.14") raises a ValueError.'},{type:"predict-output",code:"print(True + True + False)",options:["TrueTrueFalse","2","3","Error"],correctIndex:1,explanation:"Booleans are integers in Python! True equals 1 and False equals 0. So True + True + False = 1 + 1 + 0 = 2."},{type:"predict-output",code:'print(bool("0"))',options:["True","False","0","Error"],correctIndex:0,explanation:`"0" is a non-empty string (it contains the character '0'). Only empty strings are falsy. The content of the string doesn't matter — any non-empty string is truthy. bool("0") returns True.`},{type:"predict-output",code:"print(int(3.99))",options:["3","4","3.99","Error"],correctIndex:0,explanation:"int() truncates toward zero — it simply removes the decimal part without rounding. int(3.99) becomes 3, not 4. If you want rounding, use round() instead."},{type:"fill-blank",prompt:"The function ___ checks if a value is an instance of a given type.",answer:"isinstance",caseSensitive:!0,explanation:"isinstance() takes a value and a type (or tuple of types) and returns True if the value is an instance of that type. It's the preferred way to check types in Python."},{type:"mcq",question:"Which of the following is NOT a falsy value in Python?",options:["0",'""',"None",'"False"'],correctIndex:3,explanation:`"False" is a non-empty string, so it's truthy! It contains 5 characters. Don't confuse the string "False" with the boolean value False. 0, "", and None are all falsy.`},{type:"predict-output",code:`x = None
print(x is None)`,options:["True","False","None","Error"],correctIndex:0,explanation:"The 'is' keyword checks identity — whether two references point to the exact same object. Since there is only one None object in Python, x is None returns True. This is the recommended way to check for None."},{type:"predict-output",code:"print(type(10 / 2))",options:["<class 'int'>","<class 'float'>","<class 'str'>","Error"],correctIndex:1,explanation:"In Python 3, the / operator ALWAYS returns a float, even when both operands are integers and the result is a whole number. 10 / 2 = 5.0 (float), not 5 (int). Use // for integer division."}]}},{type:"divider"},{type:"challenge",challenge:{id:"challenge-datatypes",title:"Type Detective",difficulty:"easy",description:'Write a program that acts as a "type detective." For each value below, print the value AND its type on the same line in the format shown.\n\nFor the value `42`, print:\n`42 → int`\n\nDo this for the following values: `42`, `3.14`, `"hello"`, `True`, `None`\n\nHint: You can get just the type name using `type(x).__name__` which gives you `"int"` instead of `"<class \'int\'>"`. Use the → arrow character in your output.',starterCode:`# Type Detective — print each value with its type
# Format: value → type_name
# Example: 42 → int

values = [42, 3.14, "hello", True, None]

for val in values:
    # Your code here — print in the format: value → type_name
    pass`,testCases:[{expected:"42 → int",description:'Should print "42 → int" for the integer 42'},{expected:"3.14 → float",description:'Should print "3.14 → float" for the float 3.14'},{expected:"hello → str",description:'Should print "hello → str" for the string "hello"'},{expected:"True → bool",description:'Should print "True → bool" for the boolean True'},{expected:"None → NoneType",description:'Should print "None → NoneType" for None'}],hints:[`Use type(val).__name__ to get the type as a clean string like "int" instead of "<class 'int'>"`,'Use an f-string: f"{val} → {type(val).__name__}"',"Loop through the values list with a for loop and print each one"],solution:`values = [42, 3.14, "hello", True, None]

for val in values:
    print(f"{val} \\u2192 {type(val).__name__}")`}}],ge=[{type:"heading",level:1,text:"Strings in Python"},{type:"text",content:"A **string** is a sequence of characters enclosed in quotes. In Python, there is no separate character type—a single character is just a string of length 1."},{type:"heading",level:2,text:"Creating Strings"},{type:"text",content:"Python gives you three ways to create strings:"},{type:"code",code:`# 1. Single quotes
greeting = 'Hello, World!'

# 2. Double quotes (identical to single quotes)
greeting = "Hello, World!"

# 3. Triple quotes for multi-line strings
poem = """Roses are red,
Violets are blue"""`,language:"python"},{type:"callout",variant:"tip",title:"Which Quotes to Use?",content:'Use single quotes when your string contains double quotes (`\'She said "hello"\'`). Use double quotes when your string contains apostrophes (`"It\'s raining"`). Otherwise, pick one style and be consistent.'},{type:"text",content:"You can also create an **empty string** (zero characters):"},{type:"code",code:`empty1 = ""
empty2 = ''

print(len(empty1))   # 0
print(type(empty1))  # <class 'str'>`,language:"python"},{type:"heading",level:2,text:"String Length: len()"},{type:"text",content:"The `len()` function returns the number of characters in a string, including spaces and punctuation:"},{type:"code",code:`word = "Python"
print(len(word))       # 6

sentence = "Hello, World!"
print(len(sentence))   # 13

spaces = "  hi  "
print(len(spaces))     # 6`,language:"python"},{type:"heading",level:2,text:"String Concatenation (+)"},{type:"text",content:"The `+` operator joins strings together:"},{type:"code",code:`first = "Hello"
second = "World"

result = first + " " + second
print(result)    # Hello World`,language:"python"},{type:"callout",variant:"danger",title:"TypeError: Can Only Concatenate str to str",content:'You cannot concatenate a string with a number using `+`. Attempting `"Age: " + 25` will raise a `TypeError`. Use an f-string instead: `f"Age: {25}"`.'},{type:"text",content:"Python also supports **implicit concatenation** of adjacent string literals, useful for breaking long strings across lines:"},{type:"code",code:`long_string = ("This is a very long string that "
               "we split across multiple lines "
               "for readability.")
print(long_string)`,language:"python"},{type:"heading",level:2,text:"String Replication — The * Operator"},{type:"text",content:'The `*` operator repeats a string a given number of times. Think of it as **multiplication is repeated addition**: `"ha" * 3` is the same as `"ha" + "ha" + "ha"`:'},{type:"code",code:`# String repetition
print("ha" * 3)        # hahaha
print("-" * 40)        # ----------------------------------------
print("ab" * 4)        # abababab

# Useful for creating separators and formatting
header = "=== REPORT ==="
separator = "=" * len(header)
print(separator)
print(header)
print(separator)

# Multiplication with 0 or negative gives empty string
print("hello" * 0)     # (empty string)
print("hello" * -1)    # (empty string)`,language:"python"},{type:"callout",variant:"info",title:"Why * Makes Sense for Strings",content:'Multiplication is repeated addition. `3 * 5 = 5 + 5 + 5`. Similarly, `"ab" * 3 = "ab" + "ab" + "ab" = "ababab"`.'},{type:"heading",level:2,text:"String Comparison"},{type:"text",content:"Strings are compared **lexicographically** (dictionary order) using their Unicode values:"},{type:"code",code:`# Equality
print("hello" == "hello")   # True
print("hello" == "Hello")   # False (case matters!)

# Dictionary order
print("apple" < "banana")   # True  (a comes before b)
print("cat" > "car")        # True  (t comes after r)

# Uppercase letters come BEFORE lowercase in Unicode
print("Z" < "a")            # True  (Z=90, a=97)`,language:"python"},{type:"text",content:"Use `ord()` to get a character's Unicode value, and `chr()` to get the character from a value:"},{type:"code",code:`print(ord('A'))    # 65
print(ord('a'))    # 97

print(chr(65))     # A
print(chr(9829))   # ♥`,language:"python"},{type:"callout",variant:"warning",title:"Case Matters!",content:'Because uppercase letters have smaller Unicode values, `"Zebra" < "apple"` is `True`. For case-insensitive comparison, convert both strings first: `"Zebra".lower() < "apple".lower()`.'},{type:"heading",level:2,text:"Escape Characters"},{type:"text",content:"Use a backslash `\\` to represent special characters:"},{type:"list",items:["`\\n` — **Newline**","`\\t` — **Tab**","`\\\\` — **Backslash**","`\\'` — **Single quote**",'`\\"` — **Double quote**']},{type:"code",code:`print("Line 1\\nLine 2")
print("Name\\tAge")
print("C:\\\\Users\\\\Documents")
print("She said, \\"Hello!\\"")`,language:"python"},{type:"callout",variant:"info",title:"Escape Sequences Are Single Characters",content:'Even though `\\n` is written as two characters, it represents a single newline character. `len("\\n")` is `1`.'},{type:"code",code:`print(len("\\n"))     # 1
print(len("A\\nB"))   # 3

# Raw strings ignore escape sequences (prefix with r)
print(r"C:\\new_folder\\test")  # C:\\new_folder\\test`,language:"python"},{type:"heading",level:2,text:"Checking for Substrings: in / not in"},{type:"text",content:"The `in` keyword checks if a substring exists inside another string. It returns `True` or `False`:"},{type:"code",code:`sentence = "The quick brown fox"

print("fox" in sentence)          # True
print("cat" in sentence)          # False
print("cat" not in sentence)      # True

# Case-sensitive!
print("Fox" in sentence)          # False`,language:"python"},{type:"heading",level:2,text:"Indexing: Accessing Characters"},{type:"text",content:"Python uses **zero-based indexing** (first character is `0`). It also supports **negative indexing** (`-1` is the last character):"},{type:"code",code:`word = "Python"
#        P   y   t   h   o   n
#        0   1   2   3   4   5    ← positive
#       -6  -5  -4  -3  -2  -1    ← negative

print(word[0])     # P (first)
print(word[5])     # n (last)

print(word[-1])    # n (last)
print(word[-2])    # o (second to last)`,language:"python"},{type:"callout",variant:"danger",title:"IndexError — Out of Range!",content:'Accessing an index that doesn\'t exist raises an `IndexError`. For a string of length `n`, valid indices are `0` to `n-1` (positive) and `-1` to `-n` (negative). For example, `"Python"[6]` and `"Python"[-7]` both raise `IndexError`.'},{type:"code",code:`# IndexError examples
word = "Hi"  # length 2, valid indices: 0, 1, -1, -2

# print(word[2])    # IndexError: string index out of range

# Safe way to access the last character
if len(word) > 0:
    print(word[-1])  # i`,language:"python"},{type:"heading",level:2,text:"Slicing: Extracting Substrings"},{type:"text",content:"Slicing extracts a portion of a string using `string[start:stop]` or `string[start:stop:step]`. **Start is inclusive, stop is exclusive**:"},{type:"code",code:`text = "Hello, World!"
#       H  e  l  l  o  ,     W  o  r  l  d  !
#       0  1  2  3  4  5  6  7  8  9  10 11 12

# Basic slicing: [start:stop]
print(text[0:5])    # Hello
print(text[7:12])   # World

# Omitting start or stop
print(text[:5])     # Hello (start defaults to 0)
print(text[7:])     # World! (stop defaults to end)

# Negative indices in slices
print(text[-6:])    # orld! (last 6 characters)
print(text[:-1])    # Hello, World (everything except last char)`,language:"python"},{type:"text",content:"The **step** parameter controls how many characters to skip:"},{type:"code",code:`alphabet = "abcdefghijklmnopqrstuvwxyz"

# Step of 2 (every other character)
print(alphabet[::2])     # acegikmoqsuwy

# Negative step (traverse in REVERSE)
print(alphabet[::-1])    # zyxwvutsrqponmlkjihgfedcba`,language:"python"},{type:"callout",variant:"tip",title:"Slicing Never Raises IndexError",content:'Unlike indexing, slicing is forgiving. If indices are out of range, Python adjusts to the valid range: `"Hello"[0:100]` becomes `"Hello"`.'},{type:"heading",level:2,text:"String Immutability"},{type:"text",content:"Python strings are **immutable**—they cannot be changed in place. Any operation that appears to modify a string actually creates a **new string**:"},{type:"code",code:`word = "Hello"
# word[0] = "J"  # TypeError: 'str' object does not support item assignment

# Instead, create a NEW string
word = "J" + word[1:]
print(word)      # Jello`,language:"python"},{type:"callout",variant:"warning",title:"Reassignment ≠ Mutation",content:'When you write `word = "J" + word[1:]`, you are reassigning the variable `word` to point to a new string. The original string `"Hello"` is unchanged.'},{type:"divider"},{type:"playground",defaultCode:`# Explore String Basics, Indexing, and Slicing
word = "Programming"

print(f"String: {word}")
print(f"Length: {len(word)}")
print(f"First char: {word[0]}")
print(f"Last char: {word[-1]}")
print(f"First 4 chars: {word[:4]}")
print(f"Last 4 chars: {word[-4:]}")
print(f"Reversed: {word[::-1]}")
print(f"Every other: {word[::2]}")
print()

# Try string concatenation and replication
print("=-" * 15)
print(word + " is fun!")
print("=-" * 15)
print()

# Check substrings
print(f"'gram' in word: {'gram' in word}")
print(f"'xyz' in word: {'xyz' in word}")

# Experiment! Try your own operations below:
`,instructions:"Experiment with indexing, slicing, concatenation, and the `in` operator. Try reversing your own name, extracting initials, or finding substrings."},{type:"heading",level:2,text:"String Methods"},{type:"text",content:"Strings come with built-in **methods** (functions called on a string using dot notation). Because strings are immutable, these methods always return **new strings**."},{type:"heading",level:3,text:"Case Conversion"},{type:"code",code:`text = "hello, PYTHON World"

print(text.upper())       # HELLO, PYTHON WORLD
print(text.lower())       # hello, python world
print(text.capitalize())  # Hello, python world
print(text.title())       # Hello, Python World
print(text.swapcase())    # HELLO, python wORLD`,language:"python"},{type:"heading",level:3,text:"Whitespace Methods"},{type:"code",code:`messy = "   Hello, World!   "

print(messy.strip())     # "Hello, World!"    (remove both sides)
print(messy.lstrip())    # "Hello, World!   " (remove left only)
print(messy.rstrip())    # "   Hello, World!" (remove right only)

# strip() with arguments removes specific characters
print("###Hello###".strip("#"))         # Hello`,language:"python"},{type:"heading",level:3,text:"Search and Replace"},{type:"code",code:`text = "The cat sat on the mat, the cat napped."

# find() returns index of first occurrence, or -1
print(text.find("cat"))       # 4
print(text.find("dog"))       # -1

# count() counts occurrences
print(text.count("cat"))      # 2

# replace() replaces occurrences
print(text.replace("cat", "dog"))   # The dog sat on the mat, the dog napped.

# startswith() and endswith()
filename = "report_2024.pdf"
print(filename.startswith("report"))  # True
print(filename.endswith(".pdf"))      # True`,language:"python"},{type:"heading",level:3,text:"split() and join() — String ↔ List Conversion"},{type:"text",content:"`split()` and `join()` are arguably the two most powerful string methods. They convert between strings and lists:"},{type:"code",code:`# split() breaks a string into a list
sentence = "Python is amazingly powerful"
words = sentence.split()         # Split by whitespace
print(words)   # ['Python', 'is', 'amazingly', 'powerful']

# Split by a specific delimiter
csv_line = "Alice,25,NYC"
fields = csv_line.split(",")
print(fields)  # ['Alice', '25', 'NYC']

# join() combines a list into a string
words = ["Python", "is", "great"]
print(" ".join(words))      # Python is great
print("-".join(words))      # Python-is-great`,language:"python"},{type:"callout",variant:"python",title:"join() Syntax",content:'Note that `join()` is called on the **separator** string, not the list: `" ".join(words)`, NOT `words.join(" ")`. Think of it as: "use this separator to join those items."'},{type:"heading",level:3,text:"Checking String Content"},{type:"code",code:`print("Hello".isalpha())      # True (only letters)
print("12345".isdigit())      # True (only digits)
print("Hello123".isalnum())   # True (letters or digits)
print("   ".isspace())        # True (only whitespace)

print("HELLO".isupper())      # True
print("hello".islower())      # True`,language:"python"},{type:"heading",level:2,text:"f-Strings (Modern Formatting)"},{type:"text",content:"**f-strings** are the most readable way to embed expressions inside strings. Prefix the string with `f` and place expressions inside `{}`."},{type:"code",code:`name = "Alice"
age = 25
height = 1.756

# Basic variable insertion
print(f"My name is {name}")

# Expressions inside curly braces
print(f"In 10 years, I'll be {age + 10}")
print(f"Name in uppercase: {name.upper()}")

# Formatting specifiers
print(f"Height: {height:.2f} meters")            # 2 decimal places: 1.76
print(f"Big number: {1000000:,}")                 # With commas: 1,000,000
print(f"Padded: {42:05d}")                        # Zero-padded: 00042`,language:"python"},{type:"callout",variant:"tip",title:"f-strings vs format()",content:'Always prefer f-strings (`f"Hello {name}"`) for new code. They are more readable and faster than the older `.format()` method or `%` formatting.'},{type:"code",code:`# Advanced f-string tricks

# Debugging with = (Python 3.8+)
x = 42
print(f"{x = }")         # x = 42
print(f"{x + 10 = }")    # x + 10 = 52

# Dictionary access in f-strings
person = {"name": "Alice", "age": 25}
print(f"{person['name']} is {person['age']}")`,language:"python"},{type:"divider"},{type:"playground",defaultCode:`# String Methods & f-Strings Playground
text = "  The Quick Brown Fox Jumps Over The Lazy Dog  "

# Clean up and transform
cleaned = text.strip()
print(f"Original: '{text}'")
print(f"Stripped: '{cleaned}'")
print(f"Lowercase: '{cleaned.lower()}'")
print(f"Title Case: '{cleaned.title()}'")
print()

# Split and join
words = cleaned.split()
print(f"Word count: {len(words)}")
print(f"Words: {words}")
kebab_case = "-".join(words).lower()
print(f"Kebab case: {kebab_case}")
print()

# Search and replace
print(f"Contains 'Fox': {'Fox' in cleaned}")
print(f"Position of 'Fox': {cleaned.find('Fox')}")
print(f"Replaced: {cleaned.replace('Fox', 'Cat')}")
print()

# Try your own string experiments below!
`,instructions:"Explore string methods like split(), join(), replace(), find(), and formatting with f-strings. Try building a sentence from a list of words, or extracting data from a CSV string."},{type:"heading",level:2,text:"Common Patterns"},{type:"code",code:`# Pattern 1: Checking if string is empty
text = ""
if not text:
    print("Empty!")

# Pattern 2: Removing all whitespace
text = "  h e l l o  "
no_spaces = text.replace(" ", "")
print(no_spaces)  # hello

# Pattern 3: Reversing a string
original = "Python"
reversed_str = original[::-1]
print(reversed_str)  # nohtyP

# Pattern 4: Checking palindromes
word = "racecar"
is_palindrome = word == word[::-1]
print(f"{word} is palindrome: {is_palindrome}")  # True`,language:"python"},{type:"callout",variant:"warning",title:"String Concatenation in Loops is Slow",content:'Because strings are immutable, using `+=` in a loop creates a new string every time. For building large strings, collect parts in a list and use `"".join(parts)` at the end.'},{type:"divider"},{type:"quiz",quiz:{id:"quiz-day1-strings",title:"Strings Mastery Quiz",questions:[{type:"predict-output",code:'print(len("Hello\\nWorld"))',options:["10","11","12","Error"],correctIndex:1,explanation:'The string "Hello\\nWorld" contains: H, e, l, l, o, \\n (newline — 1 character), W, o, r, l, d = 11 characters total. The escape sequence \\n counts as a single character.'},{type:"predict-output",code:`text = "Python"
print(text[1:4])`,options:["Pyt","yth","ytho","Python"],correctIndex:1,explanation:`Slicing with [1:4] extracts characters at indices 1, 2, and 3 (stop index 4 is excluded). "Python"[1] = 'y', [2] = 't', [3] = 'h', giving "yth".`},{type:"mcq",question:"Which of the following will raise a TypeError?",options:['"Hello" + " World"','"Count: " + str(42)','"Age: " + 25','"ha" * 3'],correctIndex:2,explanation:'You cannot concatenate a string with an integer using +. "Age: " + 25 raises TypeError. You must convert the integer first: "Age: " + str(25) or use f"Age: {25}".'},{type:"predict-output",code:`s = "Hello"
s = s.upper()
print(s)`,options:["Hello","HELLO","hello","Error — strings are immutable"],correctIndex:1,explanation:`s.upper() returns a NEW string "HELLO", and we reassign s to point to it. This is NOT mutation — it's reassignment. The original "Hello" is unchanged (but lost since nothing references it). s now holds "HELLO".`},{type:"fill-blank",prompt:"To reverse a string `word`, you can use: word[___]",answer:"::-1",caseSensitive:!0,explanation:"The slice [::-1] means start from the end, go to the beginning, stepping by -1 (one character backwards). This effectively reverses the string."},{type:"predict-output",code:'print("abc" * 2 + "d")',options:["abcabcd","abcd2","abc2d","Error"],correctIndex:0,explanation:'Operator precedence: * is evaluated before +. "abc" * 2 gives "abcabc", then adding "d" gives "abcabcd".'},{type:"predict-output",code:`text = "Hello, World!"
print(text[-6:-1])`,options:["World","World!","orld","orld!"],correctIndex:0,explanation:`text[-6:-1] starts at index -6 (which is 'W') and goes up to but NOT including index -1 (which is '!'). So we get "World" — indices -6, -5, -4, -3, -2.`},{type:"mcq",question:'What does "hello world".split() return?',options:['["hello world"]','["hello", "world"]','["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]','("hello", "world")'],correctIndex:1,explanation:'split() with no arguments splits on whitespace and returns a list of words. "hello world".split() returns ["hello", "world"].'},{type:"predict-output",code:`a = "Python"
b = a
a = a.replace("P", "J")
print(b)`,options:["Python","Jython","Error","None"],correctIndex:0,explanation:'Strings are immutable. a.replace("P", "J") creates a NEW string "Jython" and assigns it to a. The variable b still points to the original "Python" string — it is unaffected.'},{type:"fill-blank",prompt:"The separator.___([list of strings]) method joins list items into a single string.",answer:"join",caseSensitive:!0,explanation:'The join() method is called on a separator string and takes an iterable of strings. For example: ", ".join(["a", "b", "c"]) returns "a, b, c".'}]}},{type:"divider"},{type:"challenge",challenge:{id:"challenge-day1-strings",title:"Text Analyzer",difficulty:"medium",description:`Write a program that analyzes a given text string and prints the following statistics:

1. The total number of characters (including spaces)
2. The number of words
3. The number of uppercase letters
4. The number of lowercase letters
5. The number of digits
6. The number of spaces

Print each statistic on a separate line in EXACTLY this format:
Characters: <count>
Words: <count>
Uppercase: <count>
Lowercase: <count>
Digits: <count>
Spaces: <count>

Use the provided \`text\` variable as input.`,starterCode:`text = "Hello World 123 Python IS Fun"

# Analyze the text and print the statistics
# Your code here
`,testCases:[{expected:"Characters: 30",description:"Should count total characters including spaces"},{expected:"Words: 6",description:"Should count the number of words"},{expected:"Uppercase: 6",description:"Should count uppercase letters (H, W, P, I, S, F)"},{expected:"Lowercase: 15",description:"Should count all lowercase letters"},{expected:"Digits: 3",description:"Should count digits (1, 2, 3)"},{expected:"Spaces: 5",description:"Should count space characters"}],hints:["Use len(text) for total characters","Use text.split() to get a list of words, then len() on that list","Loop through each character and use .isupper(), .islower(), .isdigit() to classify it",'Count spaces by checking if each character equals " " or use text.count(" ")'],solution:`text = "Hello World 123 Python IS Fun"

print(f"Characters: {len(text)}")
print(f"Words: {len(text.split())}")

upper_count = 0
lower_count = 0
digit_count = 0
space_count = 0

for char in text:
    if char.isupper():
        upper_count += 1
    elif char.islower():
        lower_count += 1
    elif char.isdigit():
        digit_count += 1
    elif char == " ":
        space_count += 1

print(f"Uppercase: {upper_count}")
print(f"Lowercase: {lower_count}")
print(f"Digits: {digit_count}")
print(f"Spaces: {space_count}")`}}],ye=[{type:"heading",level:1,text:"Operators & Expressions"},{type:"text",content:"Operators are special symbols that perform operations on values (operands). An **expression** is any valid combination of literals, variables, and operators that evaluates to a value."},{type:"callout",variant:"info",title:"Anatomy of an Operation",content:"In `10 + 5`, `10` and `5` are **operands** and `+` is the **operator**. Binary operators work on two operands (`+`, `-`). Unary operators work on one (`-x`)."},{type:"heading",level:2,text:"Arithmetic Operators"},{type:"text",content:"Python provides seven arithmetic operators:"},{type:"code",code:`# The 7 Arithmetic Operators
print(10 + 3)      # 13    Addition
print(10 - 3)      # 7     Subtraction
print(10 * 3)      # 30    Multiplication
print(10 / 3)      # 3.333 Division (ALWAYS returns float)
print(10 // 3)     # 3     Floor Division (quotient, rounded down)
print(10 % 3)      # 1     Modulus (remainder)
print(10 ** 3)     # 1000  Exponentiation (power)`,language:"python"},{type:"callout",variant:"warning",title:"Division (/) Always Returns Float",content:"Even when dividing evenly, `/` returns a `float`: `10 / 5` gives `2.0`. For an integer result, use floor division `//`: `10 // 5` gives `2`."},{type:"heading",level:3,text:"Floor Division (//)"},{type:"text",content:"`//` returns the quotient, rounded down to the nearest integer (toward negative infinity):"},{type:"code",code:`print(17 // 5)     # 3
print(-17 // 5)    # -4 (rounds toward negative infinity)
print(17.0 // 5)   # 3.0 (float result if any operand is float)`,language:"python"},{type:"callout",variant:"danger",title:"Negative Floor Division",content:"`-17 // 5` gives `-4`, NOT `-3`. Floor division rounds toward **negative infinity**, not toward zero like in C or Java."},{type:"heading",level:3,text:"Modulus (%)"},{type:"text",content:"`%` returns the remainder after division. It is extremely useful:"},{type:"code",code:`print(17 % 5)      # 2
print(10 % 3)      # 1

# Common uses:
num = 42
print(num % 2 == 0)    # True (is even)
print(num % 10)        # 2 (last digit)
print(num % 7 == 0)    # True (divisible by 7)`,language:"python"},{type:"callout",variant:"tip",title:"The Relationship",content:"`a == (a // b) * b + (a % b)` is always `True`. Example: `17 == (17 // 5) * 5 + (17 % 5)` → `17 == 3 * 5 + 2`."},{type:"heading",level:3,text:"Exponentiation (**)"},{type:"code",code:`print(2 ** 10)     # 1024
print(2 ** 0.5)    # 1.4142... (square root)
print(27 ** (1/3)) # 3.0 (cube root)`,language:"python"},{type:"heading",level:2,text:"Unary Plus and Minus"},{type:"text",content:"The `+` and `-` symbols can act as unary operators on a single operand:"},{type:"code",code:`x = 5
print(-x)        # -5
print(-(-x))     # 5
print(1 - -1)    # 2 (subtraction and unary minus)`,language:"python"},{type:"heading",level:2,text:"Type Rules in Arithmetic"},{type:"text",content:"When you mix `int` and `float` in arithmetic, Python follows a clear rule: **float dominates**. If any operand is a float, the result is a float. The `/` operator always returns a float, even with two integers:"},{type:"code",code:`# int + int = int
print(type(3 + 4))        # <class 'int'>

# int + float = float (float dominates)
print(type(3 + 4.0))      # <class 'float'>

# Division ALWAYS returns float
print(type(10 / 5))       # <class 'float'>

# Floor division of ints returns int
print(type(10 // 5))      # <class 'int'>`,language:"python"},{type:"heading",level:2,text:"Comparison Operators"},{type:"text",content:"Comparison operators compare two values and return a **boolean** (`True` or `False`):"},{type:"code",code:`print(10 > 5)      # True   (greater than)
print(10 < 5)      # False  (less than)
print(10 >= 10)    # True   (greater than or equal)
print(10 <= 5)     # False  (less than or equal)
print(10 == 10)    # True   (equal to)
print(10 != 5)     # True   (not equal to)`,language:"python"},{type:"heading",level:3,text:"Comparison Chaining"},{type:"text",content:"Python allows chaining comparison operators, just like in mathematics:"},{type:"code",code:`x = 15

# Is x between 10 and 20?
print(10 < x < 20)         # True

# Multiple chains
print(1 < 2 < 3 < 4 < 5)   # True`,language:"python"},{type:"heading",level:2,text:"Logical Operators"},{type:"text",content:"Logical operators combine boolean expressions using `and`, `or`, and `not`:"},{type:"code",code:`# and — True only if BOTH sides are True
print(True and False)    # False

# or — True if EITHER side is True
print(True or False)     # True

# not — Reverses the boolean value
print(not True)          # False

# Practical example
age = 25
has_license = True
can_drive = age >= 16 and has_license
print(can_drive)         # True`,language:"python"},{type:"heading",level:3,text:"Short-Circuit Evaluation"},{type:"text",content:"Python evaluates logical operators using **short-circuit evaluation** — it stops as soon as the result is determined:"},{type:"code",code:`# If left side is False, 'and' skips the right side
print(False and (1/0))    # False (no ZeroDivisionError)

# If left side is True, 'or' skips the right side
print(True or (1/0))      # True (no error)`,language:"python"},{type:"callout",variant:"python",title:"Why Short-Circuiting Matters",content:"Short-circuiting is a design pattern. In `if x != 0 and y/x > 10`, the first check prevents a division-by-zero error because the second part is never evaluated if `x` is 0."},{type:"heading",level:2,text:"Operator Precedence"},{type:"text",content:"Python follows strict precedence rules (which operator goes first):"},{type:"code",code:`print(3 + 4 * 2)       # 11 (* before +)
print((3 + 4) * 2)     # 14 (parentheses override)
print(2 ** 3 * 4 - 4)  # 28 (** first, then *, then -)`,language:"python"},{type:"text",content:"**Associativity** determines the order for operators with the same precedence. Most are left-to-right, but exponentiation (`**`) is right-to-left:"},{type:"code",code:`# Left-to-right
print(4 - 3 - 1)       # 0  -> (4 - 3) - 1

# Right-to-left (**)
print(2 ** 3 ** 2)     # 512 -> 2 ** (3 ** 2)`,language:"python"},{type:"callout",variant:"tip",title:"Use Parentheses",content:"When in doubt, use parentheses to make your intent explicit. `(a + b) * c` is clearer than relying on precedence rules."},{type:"heading",level:2,text:"Expressions"},{type:"text",content:"An **expression** is any combination of literals, variables, and operators that evaluates to a value:"},{type:"code",code:`# Arithmetic expressions -> int or float
print(1 + 4 / 4 ** 0)       # 2.0

# Boolean expressions -> bool
print(3 > 4 and 1 < 10)     # False`,language:"python"},{type:"heading",level:2,text:"Floating-Point Precision"},{type:"text",content:"Floating-point numbers are represented in binary. Some decimal numbers cannot be represented exactly, leading to tiny rounding errors:"},{type:"code",code:`# The classic float precision issue
print(0.1 + 0.2)              # 0.30000000000000004
print(0.1 + 0.2 == 0.3)       # False

# How to compare floats safely
import math
print(math.isclose(0.1 + 0.2, 0.3))   # True`,language:"python"},{type:"callout",variant:"danger",title:"Never Use == to Compare Floats",content:"Because of precision issues, never compare floats with `==`. Use `math.isclose(a, b)` instead."},{type:"heading",level:2,text:"Built-in Math Functions"},{type:"code",code:`print(abs(-42))         # 42    (absolute value)
print(round(3.14159, 2)) # 3.14 (round to 2 decimal places)
print(max(5, 10, 3))    # 10    (maximum)
print(min(5, 10, 3))    # 3     (minimum)

# divmod returns (quotient, remainder)
quotient, remainder = divmod(125, 60)
print(f"125 mins = {quotient} hrs, {remainder} mins")`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with operators!

# 1. Arithmetic operators
print("=== Arithmetic ===")
print(f"17 // 5 = {17 // 5}")    # Floor division
print(f"17 % 5  = {17 % 5}")    # Modulus
print(f"2 ** 10 = {2 ** 10}")   # Exponentiation

# 2. Is a number even or odd?
num = 42
print(f"\\n{num} is even: {num % 2 == 0}")

# 3. Extract digits
num = 1234
ones = num % 10
tens = (num // 10) % 10
hundreds = (num // 100) % 10
print(f"\\nDigits of {num}: ones={ones}, tens={tens}, hundreds={hundreds}")

# 4. Precedence
print(f"\\n2 + 3 * 4 = {2 + 3 * 4}")      # 14, not 20
print(f"2 ** 3 ** 2 = {2 ** 3 ** 2}")    # 512, not 64

# 5. Float gotcha
print(f"\\n0.1 + 0.2 = {0.1 + 0.2}")     # Not exactly 0.3!`,instructions:"Try different operator combinations. Test negative floor division. Check if numbers are divisible."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-operators",title:"Operators & Expressions Quiz",questions:[{type:"predict-output",code:"print(17 // 5, 17 % 5)",options:["3 2","3.4 2","3 2.0","3.0 2"],correctIndex:0,explanation:"`17 // 5 = 3` (floor division, integer result since both operands are int). `17 % 5 = 2` (remainder: 17 = 5*3 + 2)."},{type:"predict-output",code:"print(2 ** 3 ** 2)",options:["64","512","18","36"],correctIndex:1,explanation:"`**` is right-associative: `2 ** (3 ** 2)` = `2 ** 9` = `512`. It's NOT `(2 ** 3) ** 2` = `8 ** 2` = `64`."},{type:"predict-output",code:"print(-17 // 5)",options:["-3","-4","3","-3.4"],correctIndex:1,explanation:"Floor division rounds toward NEGATIVE infinity. `-17 / 5 = -3.4`, floored to `-4`. This differs from C/Java where it would be `-3`."},{type:"predict-output",code:"print(0.1 + 0.2 == 0.3)",options:["True","False","Error","0.3"],correctIndex:1,explanation:"Due to floating-point precision, `0.1 + 0.2` equals `0.30000000000000004`, which is not exactly `0.3`. This is why you should never compare floats with `==`."},{type:"mcq",question:"What does short-circuit evaluation mean for `and`?",options:["Both sides are always evaluated","If the left side is True, the right side is skipped","If the left side is False, the right side is skipped","The expression is evaluated right-to-left"],correctIndex:2,explanation:"With `and`, if the left side is `False`, the entire expression must be `False` regardless of the right side. So Python skips evaluating the right side — this is short-circuit evaluation."},{type:"predict-output",code:`print(10 / 5)
print(type(10 / 5).__name__)`,options:["2\\nint","2.0\\nfloat","2\\nfloat","2.0\\nint"],correctIndex:1,explanation:"The `/` operator ALWAYS returns a float, even when dividing evenly. `10 / 5 = 2.0` (float, not int)."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-operators",title:"Time Converter",difficulty:"easy",description:"Given a total number of seconds, convert it into hours, minutes, and remaining seconds using floor division (//) and modulus (%). For example, 3725 seconds = 1 hour, 2 minutes, 5 seconds.",starterCode:`total_seconds = 3725

# Use // and % to extract hours, minutes, seconds
hours = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60

print(f"{total_seconds}s = {hours}h {minutes}m {seconds}s")`,testCases:[{input:"",expected:"3725s = 1h 2m 5s"}],hints:["There are 3600 seconds in an hour (60 * 60)","Use // to get the quotient and % to get the remainder","First extract hours, then work with the remaining seconds"],solution:`total_seconds = 3725
hours = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60
print(f"{total_seconds}s = {hours}h {minutes}m {seconds}s")`}}],be=[{type:"heading",level:1,text:"Input & Output"},{type:"text",content:"The `print()` and `input()` functions are how your program communicates. `print()` sends data out to the user, while `input()` brings data in."},{type:"heading",level:2,text:"The print() Function"},{type:"text",content:"`print()` displays output to the console. You can pass it multiple values, and it will separate them with spaces by default:"},{type:"code",code:`# Basic printing
print("Hello, World!")          # Hello, World!
print(42)                       # 42

# Printing multiple values
print("Name:", "Alice", "Age:", 25)   # Name: Alice Age: 25

# Empty print() creates a blank line
print()`,language:"python"},{type:"callout",variant:"info",title:"print() is a Function",content:'In Python 3, `print` is a function and requires parentheses: `print("hello")`. If you forget them, you\'ll get a `SyntaxError`.'},{type:"heading",level:3,text:"The sep Parameter"},{type:"text",content:"The `sep` parameter changes the separator between multiple values (default is a space):"},{type:"code",code:`print("Python", "is", "great", sep="-")     # Python-is-great
print("Python", "is", "great", sep=", ")    # Python, is, great
print("Python", "is", "great", sep="")      # Pythonisgreat

# Practical: format a date
day, month, year = 27, 2, 2026
print(day, month, year, sep="/")    # 27/2/2026`,language:"python"},{type:"heading",level:3,text:"The end Parameter"},{type:"text",content:"The `end` parameter changes what is printed at the very end (default is a newline `\\n`):"},{type:"code",code:`# Custom end: print on the same line
print("Hello", end=" ")    # No newline, just a space
print("World")             # Output: Hello World

# Building output in a loop
for i in range(5):
    print(i, end=" ")      # 0 1 2 3 4
print()                    # Move to next line`,language:"python"},{type:"heading",level:3,text:"Combining sep and end"},{type:"text",content:"You can use both `sep` and `end` together for precise control:"},{type:"code",code:`# Print a pattern: |1,2,3|4,5,6|7,8,9|
print("|", end="")
for i in range(1, 10, 3):
    print(i, i + 1, i + 2, sep=",", end="|")
print()  # Move to next line`,language:"python"},{type:"heading",level:2,text:"f-strings (Formatted Strings)"},{type:"text",content:"**f-strings** are the modern way to embed variables and expressions inside strings. Prefix the string with `f` and put expressions inside `{}`:"},{type:"code",code:`name = "Alice"
age = 30

# Basic interpolation
print(f"My name is {name} and I am {age}")

# Expressions inside f-strings
print(f"Next year I'll be {age + 1}")
print(f"Name in caps: {name.upper()}")`,language:"python"},{type:"heading",level:3,text:"Format Specifiers"},{type:"text",content:"Add a colon `:` inside the braces to format numbers and text:"},{type:"code",code:`pi = 3.14159
price = 42.5
big_number = 1234567890

# Float precision
print(f"Pi: {pi:.2f}")              # Pi: 3.14
print(f"Price: \${price:.2f}")       # Price: $42.50

# Number formatting
print(f"Big: {big_number:,}")       # Big: 1,234,567,890

# Padding with zeros
for i in range(1, 4):
    print(f"Item-{i:03d}")          # Item-001, Item-002, Item-003`,language:"python"},{type:"callout",variant:"python",title:"Format Cheat Sheet",content:"`:.2f` = 2 decimal places | `:,` = thousands separator | `:.1%` = percentage | `:05d` = zero-padded integer, 5 wide"},{type:"heading",level:2,text:"Other Formatting Methods (Historical)"},{type:"text",content:"Before f-strings, Python had other ways to format strings. You may see these in older code:"},{type:"code",code:`name = "Alice"
age = 30

# Method 1: String concatenation (avoid)
print("Hello, " + name + "! You are " + str(age) + " years old.")

# Method 2: .format() method (Python 2.6+)
print("Hello, {}! You are {} years old.".format(name, age))

# Method 3: %-formatting (oldest)
print("Hello, %s! You are %d years old." % (name, age))

# Method 4: f-strings (Python 3.6+ — USE THIS!)
print(f"Hello, {name}! You are {age} years old.")`,language:"python"},{type:"heading",level:2,text:"The input() Function"},{type:"text",content:"`input()` pauses the program and waits for the user to type something. It always returns a **string**:"},{type:"code",code:`# Basic input
name = input("What is your name? ")
print(f"Hello, {name}!")

# IMPORTANT: input() ALWAYS returns a string!
age = input("Your age: ")
print(type(age))      # <class 'str'>
# print(age + 5)      # TypeError! Can't add string and int`,language:"python"},{type:"callout",variant:"danger",title:"input() Always Returns a String",content:'Even if the user types `25`, `input()` returns the string `"25"`. You must convert it using `int()` or `float()`.'},{type:"heading",level:2,text:"Converting Input"},{type:"code",code:`# Convert to integer
age = int(input("Your age: "))
print(f"Next year you will be {age + 1}")

# Convert to float
height = float(input("Your height (m): "))
print(f"Height in cm: {height * 100}")

# Multiple inputs on one line
x, y = input("Enter two numbers: ").split()
print(f"Sum: {int(x) + int(y)}")`,language:"python"},{type:"callout",variant:"warning",title:"Handling Bad Input",content:'If you call `int(input())` and the user types "hello", Python crashes with a `ValueError`. Later, we\'ll learn how to handle this with `try/except`.'},{type:"heading",level:2,text:"Common I/O Patterns"},{type:"code",code:`# Pattern 1: Read-Process-Print
radius = float(input("Enter circle radius: "))
area = 3.14159 * radius ** 2
print(f"Area = {area:.2f}")

# Pattern 2: Yes/No confirmation
response = input("Continue? (yes/no): ").lower().strip()
if response == "yes":
    print("Continuing...")
else:
    print("Stopping.")`,language:"python"},{type:"heading",level:2,text:"Escape Sequences"},{type:"text",content:"Use a backslash `\\` to represent special characters in strings:"},{type:"code",code:`print("Line 1\\nLine 2")       # \\n = newline
print("Col1\\tCol2\\tCol3")     # \\t = tab
print("She said \\"hello\\"")   # \\" = literal quote
print('It\\'s Python!')          # \\' = literal apostrophe
print("Back\\\\slash")           # \\\\ = literal backslash

# Multi-line strings with triple quotes (no \\n needed)
poem = """Roses are red,
Violets are blue"""
print(poem)

# Raw strings (ignore escape sequences) — prefix with r
print(r"C:\\Users\\name\\Documents")   # Prints backslashes literally`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with I/O!

# 1. f-string formatting
name = "Python"
version = 3.12
print(f"Welcome to {name} {version}!")

# 2. Number formatting
pi = 3.14159265358979
print(f"Pi to 2 decimals: {pi:.2f}")
print(f"Pi to 6 decimals: {pi:.6f}")

# 3. Table formatting with alignment
print(f"\\n{'Item':<15} {'Price':>8}")
print(f"{'-' * 24}")
print(f"{'Apple':<15} {'$1.50':>8}")
print(f"{'Banana':<15} {'$0.75':>8}")
print(f"{'Cherry Pie':<15} {'$12.99':>8}")

# 4. sep and end
print("\\nCountdown:", end=" ")
for i in range(5, 0, -1):
    print(i, end="...")
print("GO!")

# 5. Percentage formatting
scored = 42
total = 50
pct = scored / total
print(f"\\nScore: {scored}/{total} = {pct:.1%}")`,instructions:"Experiment with different format specifiers. Try changing alignment, precision, and separators."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-io",title:"Input & Output Quiz",questions:[{type:"mcq",question:"What type does `input()` always return?",options:["int","float","str","depends on what user types"],correctIndex:2,explanation:'`input()` ALWAYS returns a string (str), regardless of what the user types. Even if they type "42", you get the string "42", not the integer 42. You must convert explicitly with int() or float().'},{type:"predict-output",code:`print("A", "B", "C", sep="-", end="!")
print("D")`,options:["A-B-C!D","A-B-C!\\nD","A B C!D","A-B-C\\n!D"],correctIndex:0,explanation:'`sep="-"` puts dashes between values: "A-B-C". `end="!"` replaces the newline with "!": "A-B-C!". The next print continues on the same line: "A-B-C!D".'},{type:"predict-output",code:`x = 3.14159
print(f"{x:.2f}")`,options:["3.14","3.14159","3.1","3.142"],correctIndex:0,explanation:"`:.2f` formats the float to exactly 2 decimal places, rounding as needed. 3.14159 rounded to 2 decimal places is 3.14."},{type:"predict-output",code:`name = "Python"
print(f"|{name:^12}|")`,options:["|Python      |","|      Python|","|   Python   |","|***Python***|"],correctIndex:2,explanation:'`^12` centers the string in a 12-character-wide field. "Python" is 6 chars, so 3 spaces are added on each side.'},{type:"mcq",question:"What does the `\\t` escape sequence produce?",options:["A newline","A tab character",'The letter "t"','A backslash followed by "t"'],correctIndex:1,explanation:"`\\t` is the escape sequence for a horizontal tab character. `\\n` is for newline, `\\\\` is for a literal backslash."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-io",title:"Receipt Formatter",difficulty:"medium",description:"Create a formatted receipt that displays items with their prices in a neatly aligned table. Use f-string formatting to align item names to the left and prices to the right.",starterCode:`# Create a beautifully formatted receipt

print("=" * 30)
print(f"{'RECEIPT':^30}")
print("=" * 30)

# Format each item: name left-aligned, price right-aligned
# Hint: use f"{item:<20} \${price:>6.2f}"
items = [
    ("Coffee", 4.50),
    ("Sandwich", 8.99),
    ("Cookie", 2.25),
]

for item_name, price in items:
    print(f"{item_name:<20} \${price:>6.2f}")

print("-" * 30)
total = sum(price for _, price in items)
print(f"{'TOTAL':<20} \${total:>6.2f}")
print("=" * 30)`,testCases:[{input:"",expected:`==============================
           RECEIPT           
==============================
Coffee               $  4.50
Sandwich             $  8.99
Cookie               $  2.25
------------------------------
TOTAL                $ 15.74
==============================`}],hints:['Use f"{text:<20}" for left-aligned text in 20 characters','Use f"${price:>6.2f}" for right-aligned price with 2 decimal places','Use "=" * 30 for separator lines'],solution:`print("=" * 30)
print(f"{'RECEIPT':^30}")
print("=" * 30)
items = [("Coffee", 4.50), ("Sandwich", 8.99), ("Cookie", 2.25)]
for item_name, price in items:
    print(f"{item_name:<20} \${price:>6.2f}")
print("-" * 30)
total = sum(price for _, price in items)
print(f"{'TOTAL':<20} \${total:>6.2f}")
print("=" * 30)`}}],xe=[{type:"heading",level:1,text:"Boolean Logic & Truthiness"},{type:"text",content:"At its core, every decision a computer makes comes down to a single question: **True or False?** The `bool` type in Python has exactly two values — `True` and `False` — yet these two tiny values drive every `if` statement, every `while` loop, and every logical expression in your programs."},{type:"heading",level:2,text:"The bool Type"},{type:"code",code:`# Boolean literals
print(True)           # True
print(False)          # False
print(type(True))     # <class 'bool'>
print(type(False))    # <class 'bool'>

# bool is a subclass of int!
print(isinstance(True, int))    # True
print(True + True)              # 2
print(False + True)             # 1
print(True * 10)                # 10
print(False * 10)               # 0

# True == 1 and False == 0
print(True == 1)    # True
print(False == 0)   # True
print(True is 1)    # False — same value, different objects`,language:"python"},{type:"callout",variant:"info",title:"bool is a Subclass of int",content:"Historically, Python didn't have a `bool` type — it used `0` and `1`. When `bool` was added in Python 2.3, it was made a subclass of `int` for backward compatibility. This is why `True + True == 2` works. While you *can* use booleans in arithmetic, it's usually clearer to be explicit."},{type:"heading",level:2,text:"Comparison Operators → Booleans"},{type:"text",content:"Comparison operators produce boolean results. Python has six comparison operators:"},{type:"code",code:`# Comparison operators
print(5 > 3)       # True   — greater than
print(5 < 3)       # False  — less than
print(5 >= 5)      # True   — greater than or equal
print(5 <= 4)      # False  — less than or equal
print(5 == 5)      # True   — equal (two equals signs!)
print(5 != 3)      # True   — not equal

# Comparisons work with strings (lexicographic / dictionary order)
print("apple" < "banana")     # True  (a comes before b)
print("cat" < "car")          # False (t comes after r)
print("abc" == "abc")         # True
print("Python" < "python")    # True  (uppercase < lowercase in Unicode)

# Type matters in comparisons
print(1 == 1.0)      # True  — int and float can be compared
print(1 == "1")      # False — int and str are never equal
print(True == 1)     # True  — bool is a subclass of int`,language:"python"},{type:"callout",variant:"danger",title:"== vs = : A Critical Distinction",content:"`=` is the **assignment** operator (gives a value to a variable). `==` is the **equality** operator (checks if two values are the same). Writing `if x = 5:` instead of `if x == 5:` is a `SyntaxError` in Python (thankfully, unlike C where it would silently be a bug)."},{type:"heading",level:2,text:"Comparison Chaining — A Python Superpower"},{type:"text",content:"Python allows you to **chain** comparisons naturally, just like in mathematics. This is uncommon in most programming languages:"},{type:"code",code:`# Chained comparisons
x = 15

# Instead of: x > 10 and x < 20
print(10 < x < 20)        # True — reads like math!
print(1 < x < 10)         # False

# You can chain any comparisons
print(1 < 2 < 3 < 4)      # True
print(1 < 2 > 0)          # True — 1<2 and 2>0

# Equality chaining
a = b = c = 5
print(a == b == c)         # True — all three are equal

# Practical: check if a number is within range
age = 25
if 18 <= age <= 65:
    print("Working age")   # Working age

# How it works internally: a < b < c == (a < b) and (b < c)
# Python evaluates b only ONCE, not twice!`,language:"python"},{type:"heading",level:2,text:"Logical Operators: and, or, not"},{type:"text",content:"Python uses English words for logical operators, not symbols like `&&`, `||`, `!`:"},{type:"code",code:`# and — True only if BOTH sides are True
print(True and True)     # True
print(True and False)    # False
print(False and True)    # False
print(False and False)   # False

# or — True if EITHER side is True
print(True or True)      # True
print(True or False)     # True
print(False or True)     # True
print(False or False)    # False

# not — Flips the value
print(not True)          # False
print(not False)         # True

# Practical examples
age = 25
has_license = True
has_insurance = True

if age >= 18 and has_license and has_insurance:
    print("You can drive!")        # You can drive!

temperature = 35
if temperature < 0 or temperature > 40:
    print("Extreme weather!")
else:
    print("Manageable weather")    # Manageable weather`,language:"python"},{type:"heading",level:2,text:"Truth Tables"},{type:"text",content:"A truth table shows all possible outcomes for logical operators. Memorize these — they're the foundation of all logic in programming:"},{type:"list",items:['**AND truth table**: T∧T=T, T∧F=F, F∧T=F, F∧F=F — "Both must be True"','**OR truth table**: T∨T=T, T∨F=T, F∨T=T, F∨F=F — "At least one must be True"','**NOT truth table**: ¬T=F, ¬F=T — "Flip the value"']},{type:"callout",variant:"tip",title:"De Morgan's Laws — Simplifying Boolean Expressions",content:'`not (A and B)` ≡ `(not A) or (not B)` — "Not both" means "at least one is false"\n`not (A or B)` ≡ `(not A) and (not B)` — "Neither" means "both are false"\n\nThese laws are invaluable for simplifying complex conditions!'},{type:"heading",level:2,text:"Short-Circuit Evaluation"},{type:"text",content:"Python is **lazy** with logical operators — it stops evaluating as soon as the result is determined:"},{type:"code",code:`# Short-circuit with "and"
# If the first operand is False, Python doesn't evaluate the second
print(False and print("This won't print"))    # False

# Short-circuit with "or"
# If the first operand is True, Python doesn't evaluate the second
print(True or print("This won't print"))      # True

# Practical: avoid errors with short-circuit
my_list = []
# Without short-circuit, my_list[0] would crash!
if len(my_list) > 0 and my_list[0] == "hello":
    print("Found hello")
else:
    print("List is empty or first element isn't hello")

# Another pattern: provide default values
name = ""  # empty string is falsy
result = name or "Anonymous"
print(result)    # Anonymous

name = "Alice"
result = name or "Anonymous"
print(result)    # Alice`,language:"python"},{type:"callout",variant:"info",title:"and/or Don't Always Return True/False!",content:'`and` returns the first falsy value, or the last value if all are truthy.\n`or` returns the first truthy value, or the last value if all are falsy.\n\n`"hello" and "world"` → `"world"` (not `True`!)\n`"" or "default"` → `"default"` (not `True`!)\n`0 and "never"` → `0` (not `False`!)'},{type:"heading",level:2,text:"Truthiness & Falsiness"},{type:"text",content:"In Python, **every** value can be treated as a boolean in conditions — not just `True` and `False`. Values are either **truthy** (treated as `True`) or **falsy** (treated as `False`):"},{type:"code",code:`# Falsy values (these are ALL of them):
print(bool(False))     # False — the literal False
print(bool(None))      # False — absence of value
print(bool(0))         # False — integer zero
print(bool(0.0))       # False — float zero
print(bool(0j))        # False — complex zero
print(bool(""))        # False — empty string
print(bool([]))        # False — empty list
print(bool(()))        # False — empty tuple
print(bool({}))        # False — empty dict
print(bool(set()))     # False — empty set

# Everything else is truthy:
print(bool(1))         # True
print(bool(-1))        # True — negative numbers are truthy!
print(bool(0.001))     # True
print(bool("0"))       # True — string "0" is NOT empty!
print(bool(" "))       # True — space is NOT empty!
print(bool([0]))       # True — list with one element
print(bool("False"))   # True — string "False" is truthy!`,language:"python"},{type:"callout",variant:"danger",title:"Common Truthiness Traps",content:'`bool("0")` is `True` — the string "0" has one character, so it\'s not empty!\n`bool("False")` is `True` — the string "False" has 5 characters!\n`bool(" ")` is `True` — a space is still a character!\n`bool(-1)` is `True` — only numeric zero is falsy!'},{type:"heading",level:3,text:"Using Truthiness in Practice"},{type:"code",code:`# Idiomatic Python uses truthiness directly
name = "Alice"
items = [1, 2, 3]

# DON'T do this (explicit but verbose):
if len(name) > 0:
    print("Name is not empty")
if len(items) > 0:
    print("List is not empty")

# DO this (Pythonic):
if name:
    print("Name is not empty")
if items:
    print("List has items")

# Common pattern: check before using
data = None  # might come from a database or API
if data:
    print(f"Got data: {data}")
else:
    print("No data available")

# Ternary expression with truthiness
user_input = ""  # user entered nothing
greeting = f"Hello, {user_input or 'Stranger'}!"
print(greeting)    # Hello, Stranger!`,language:"python"},{type:"heading",level:2,text:"The bool() Constructor"},{type:"code",code:`# bool() converts any value to True or False
print(bool(42))        # True
print(bool(""))        # False
print(bool("text"))    # True
print(bool([]))        # False
print(bool([1,2,3]))   # True

# Counting truthy values in a collection
values = [1, 0, "", "hello", None, True, [], [1]]
truthy_count = sum(bool(x) for x in values)
print(f"Truthy values: {truthy_count} out of {len(values)}")  # 4 out of 8

# Filter truthy values
truthy_only = [x for x in values if x]
print(truthy_only)   # [1, 'hello', True, [1]]`,language:"python"},{type:"heading",level:2,text:"Identity & Membership Operators"},{type:"code",code:`# Identity operators: is, is not
# Check if two variables refer to the SAME object in memory
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)     # True  — same value
print(a is b)     # False — different objects!
print(a is c)     # True  — c points to same object as a
print(a is not b) # True

# ALWAYS use "is" with None
x = None
print(x is None)       # True  ✅ correct way
print(x == None)       # True  ❌ works but discouraged

# Membership operators: in, not in
print(3 in [1, 2, 3, 4])         # True
print(5 in [1, 2, 3, 4])         # False
print("py" in "python")          # True
print("z" not in "python")       # True
print("key" in {"key": "val"})   # True (checks keys in dicts)`,language:"python"},{type:"callout",variant:"warning",title:'When to Use "is" vs "=="',content:"Use `==` to compare **values**: `if x == 5`\nUse `is` to compare **identity** (is it the *exact same object*?): `if x is None`\n\nThe only common use of `is` is checking for `None`, `True`, or `False`. Never use `is` to compare numbers or strings — Python caches small integers, so `a is b` might work for small numbers but fail for large ones!"},{type:"heading",level:2,text:"Boolean Operator Precedence"},{type:"text",content:"When mixing operators, Python follows this precedence (highest to lowest):"},{type:"list",items:["**Parentheses** `()` — always evaluated first","**Arithmetic** `+, -, *, /, **` — computed before comparisons","**Comparisons** `<, >, <=, >=, ==, !=` — produce booleans","**not** — unary, flips one boolean","**and** — short-circuits on False","**or** — short-circuits on True (evaluated last!)"]},{type:"code",code:`# Precedence in action
print(3 + 4 > 5 and 2 ** 3 == 8)
# Step 1: 3 + 4 = 7, 2 ** 3 = 8    (arithmetic first)
# Step 2: 7 > 5 = True, 8 == 8 = True   (comparisons next)
# Step 3: True and True = True           (and last)

# not binds tighter than and/or
print(not True or True)    # True  — (not True) or True → False or True → True
print(not (True or True))  # False — not (True) → not True → False

# and binds tighter than or
print(True or True and False)   # True  — True or (True and False) → True or False → True
print((True or True) and False) # False — True and False → False

# When in doubt, USE PARENTHESES!`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Explore boolean logic!

# 1. Truthiness
values = [0, 1, -1, "", "hello", None, [], [0], True, False]
for v in values:
    print(f"{str(v):>10} → {bool(v)}")

print()

# 2. Short-circuit behavior
print("and:", 0 and "hello")       # Returns first falsy
print("and:", "hi" and "hello")    # Returns last truthy
print("or:", 0 or "hello")        # Returns first truthy
print("or:", "" or 0)             # Returns last falsy

print()

# 3. Comparison chaining
x = 15
print(f"{x}: 10 < x < 20 → {10 < x < 20}")
print(f"{x}: 0 < x < 10 → {0 < x < 10}")

print()

# 4. De Morgan's Law demonstration
A, B = True, False
print(f"not (A and B) = {not (A and B)}")
print(f"(not A) or (not B) = {(not A) or (not B)}")
print(f"Equal? {not (A and B) == ((not A) or (not B))}")`,instructions:"Modify values and observe how truthiness, short-circuiting, and De Morgan's Laws work."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-boolean",title:"Boolean Logic Quiz",questions:[{type:"predict-output",code:'print(bool("False"))',options:["True","False","Error","None"],correctIndex:0,explanation:`The string "False" has 5 characters — it's a non-empty string, which is truthy. bool("False") returns True.`},{type:"predict-output",code:'print("hello" and "world")',options:["True","False",'"hello"','"world"'],correctIndex:3,explanation:'`and` returns the first falsy value, or the last value if all are truthy. Both "hello" and "world" are truthy, so it returns the last one: "world".'},{type:"predict-output",code:'print(0 or "" or "default" or "extra")',options:['"default"','"extra"',"0","True"],correctIndex:0,explanation:'`or` returns the first truthy value. `0` is falsy, `""` is falsy, `"default"` is truthy — so it\'s returned immediately (short-circuit).'},{type:"predict-output",code:"print(not True or True and False)",options:["True","False","Error","None"],correctIndex:1,explanation:"Precedence: `not` first → `False or True and False`. Then `and` → `False or False`. Then `or` → `False`."},{type:"mcq",question:"Which of these is NOT a falsy value?",options:["None","0",'""','"0"'],correctIndex:3,explanation:`"0" is a non-empty string (it has one character), so it's truthy! None, 0, and "" are all falsy.`}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-boolean",title:"Admission Checker",difficulty:"easy",description:"Write a program that checks if a student is eligible for admission. A student is eligible if: (1) their age is between 17 and 25 inclusive, AND (2) they scored at least 60% marks, AND (3) they passed the interview (True/False). Print the eligibility status.",starterCode:`# Admission checker
age = 20
marks_percent = 78.5
passed_interview = True

# Check eligibility using boolean logic
# Use comparison chaining for age range!
eligible = 17 <= age <= 25 and marks_percent >= 60 and passed_interview

print(f"Age: {age}")
print(f"Marks: {marks_percent}%")
print(f"Interview: {\\"Passed\\" if passed_interview else \\"Failed\\"}")
print(f"Eligible: {eligible}")

# Test with different values
print("\\n--- Edge Cases ---")
for age, marks, interview in [(16, 90, True), (25, 59, True), (20, 80, False), (20, 80, True)]:
    result = 17 <= age <= 25 and marks >= 60 and interview
    print(f"Age={age}, Marks={marks}%, Interview={interview} → {result}")`,testCases:[{input:"",expected:`Age: 20
Marks: 78.5%
Interview: Passed
Eligible: True`}],hints:["Use comparison chaining: 17 <= age <= 25","Combine conditions with `and` — all must be True",'You can use a ternary expression: "Passed" if passed_interview else "Failed"'],solution:`age = 20
marks_percent = 78.5
passed_interview = True
eligible = 17 <= age <= 25 and marks_percent >= 60 and passed_interview
print(f"Age: {age}")
print(f"Marks: {marks_percent}%")
print(f"Interview: {\\"Passed\\" if passed_interview else \\"Failed\\"}")
print(f"Eligible: {eligible}")`}}],ve=[{type:"heading",level:1,text:"Conditional Statements"},{type:"text",content:"Conditional statements are the **decision-making tools** of programming. They allow your program to choose different paths based on whether conditions are `True` or `False`. Without conditionals, every program would execute the same instructions regardless of input — incredibly boring and useless!"},{type:"heading",level:2,text:"The if Statement"},{type:"text",content:"The `if` statement is the simplest conditional. If the condition is `True`, the **indented block** below it executes. If `False`, Python skips the block entirely:"},{type:"code",code:`# Basic if statement
temperature = 35

if temperature > 30:
    print("It's hot today!")    # Executes because 35 > 30

print("Program continues")     # Always executes (not inside the if block)

# With a False condition
temperature = 20
if temperature > 30:
    print("It's hot today!")    # SKIPPED — condition is False

print("Program continues")     # Still executes`,language:"python"},{type:"callout",variant:"danger",title:"Indentation is NOT Optional!",content:"Python uses **indentation** (typically 4 spaces) to define code blocks. Other languages use curly braces `{}`, but Python uses whitespace. If your indentation is wrong, you'll get an `IndentationError`. Every line inside an `if` block must be indented to the same level."},{type:"heading",level:3,text:"Multi-line if Blocks"},{type:"code",code:`# Multiple statements in an if block
score = 95

if score >= 90:
    print("Excellent!")           # Line 1 of the block
    print("You got an A!")        # Line 2 of the block
    stars = "★" * 5               # Line 3 of the block
    print(f"Rating: {stars}")     # Line 4 of the block

print("Grade report complete")    # Outside the if block — always runs

# The colon : is REQUIRED!
# if score >= 90    ← SyntaxError! Missing colon
# if score >= 90:   ← Correct!`,language:"python"},{type:"heading",level:2,text:"The if-else Statement"},{type:"text",content:"`if-else` provides **two branches**: one for when the condition is `True`, another for when it's `False`. Exactly one of the two blocks always executes — never both, never neither:"},{type:"code",code:`# if-else: two-way decision
age = 16

if age >= 18:
    print("You can vote!")       # True branch
else:
    print("Too young to vote")   # False branch
    years_left = 18 - age
    print(f"Come back in {years_left} years")  # Come back in 2 years

# Another example: even/odd check
number = 42
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# Important: if and else must be at the SAME indentation level
# else can never have a condition — it catches everything else`,language:"python"},{type:"heading",level:2,text:"The if-elif-else Chain"},{type:"text",content:'`elif` (short for "else if") lets you check **multiple conditions** in sequence. Python checks each condition from top to bottom and executes the **first** block whose condition is `True`, then skips all remaining blocks:'},{type:"code",code:`# Grade calculator with if-elif-else
score = 78

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score} → Grade: {grade}")  # Score: 78 → Grade: C

# Key insight: conditions are checked TOP to BOTTOM
# Once a match is found, ALL remaining elif/else blocks are skipped
# So we don't need "score >= 70 and score < 80" — just "score >= 70"`,language:"python"},{type:"callout",variant:"info",title:"elif vs Multiple if Statements",content:"`if-elif-else` is a **single chain** — at most ONE block executes. Multiple separate `if` statements are **independent** — each one is checked regardless of previous results.\n\n`if x > 0: ...` then `elif x > -5: ...` → at most one runs.\n`if x > 0: ...` then `if x > -5: ...` → both might run!"},{type:"heading",level:3,text:"Multiple elif Blocks"},{type:"code",code:`# You can have as many elif blocks as you need
day = "Wednesday"

if day == "Monday":
    print("Start of the work week")
elif day == "Tuesday":
    print("Second day")
elif day == "Wednesday":
    print("Midweek!")            # This executes
elif day == "Thursday":
    print("Almost Friday")
elif day == "Friday":
    print("TGIF! 🎉")
else:
    print("Weekend! 🏖️")

# The else block is optional
if day == "Sunday":
    print("Rest day")
elif day == "Saturday":
    print("Fun day")
# No else — if neither matches, nothing happens`,language:"python"},{type:"heading",level:2,text:"Nested Conditional Statements"},{type:"text",content:"You can place conditional statements **inside** other conditional statements. The inner `if` is only checked when the outer condition is `True`:"},{type:"code",code:`# Nested conditionals: checking ascending order
x, y, z = 1, 3, 2

if x < y:
    if y < z:
        print("In ascending order")
    else:
        print("Not in ascending order")  # This prints (3 < 2 is False)
else:
    print("Not in ascending order")

# Better approach: flatten with "and"
if x < y and y < z:
    print("In ascending order")
else:
    print("Not in ascending order")

# Even better: comparison chaining!
if x < y < z:
    print("In ascending order")
else:
    print("Not in ascending order")`,language:"python"},{type:"callout",variant:"warning",title:"Avoid Deep Nesting",content:'While nesting is sometimes necessary, deeply nested conditionals (3+ levels) become hard to read. Common strategies to reduce nesting:\n\n1. **Flatten with `and`/`or`**: Combine conditions on one line\n2. **Early returns**: In functions, return early instead of nesting\n3. **Guard clauses**: Check for invalid cases first, then handle the "happy path"'},{type:"heading",level:3,text:"Practical Nesting Example"},{type:"code",code:`# Login system with nested checks
username = "admin"
password = "secret123"
is_locked = False

if not is_locked:
    if username == "admin":
        if password == "secret123":
            print("✅ Login successful!")
        else:
            print("❌ Wrong password")
    else:
        print("❌ Unknown user")
else:
    print("🔒 Account is locked")

# Flattened version (often clearer):
if is_locked:
    print("🔒 Account is locked")
elif username != "admin":
    print("❌ Unknown user")
elif password != "secret123":
    print("❌ Wrong password")
else:
    print("✅ Login successful!")`,language:"python"},{type:"heading",level:2,text:"The Ternary Expression (Conditional Expression)"},{type:"text",content:'Python has a one-line conditional expression, often called the "ternary operator":'},{type:"code",code:`# Syntax: value_if_true if condition else value_if_false
age = 20
status = "adult" if age >= 18 else "minor"
print(status)    # adult

# It's an EXPRESSION — it produces a value
# Useful in assignments, f-strings, function calls
temperature = 35
print(f"Weather is {'hot' if temperature > 30 else 'comfortable'}")

# Can be used in calculations
x = -7
absolute = x if x >= 0 else -x
print(f"Absolute value of {x} is {absolute}")  # 7

# Nested ternary (use sparingly — gets hard to read)
score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
print(f"Grade: {grade}")  # B

# Better to use if-elif-else for complex conditions`,language:"python"},{type:"heading",level:2,text:"Common Conditional Patterns"},{type:"code",code:`# Pattern 1: Clamping a value to a range
value = 150
clamped = min(max(value, 0), 100)  # Keep between 0 and 100
print(clamped)   # 100

# Pattern 2: Absolute value (manual)
x = -5
result = x if x >= 0 else -x
print(result)   # 5

# Pattern 3: Sign function
def sign(n):
    if n > 0:
        return 1
    elif n < 0:
        return -1
    else:
        return 0

print(sign(42))    # 1
print(sign(-7))    # -1
print(sign(0))     # 0

# Pattern 4: Categorizing with if-elif
def categorize_bmi(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25.0:
        return "Normal"
    elif bmi < 30.0:
        return "Overweight"
    else:
        return "Obese"

print(categorize_bmi(22.5))  # Normal`,language:"python"},{type:"heading",level:2,text:"Defining Variables Inside if Blocks"},{type:"text",content:"An important subtlety: a variable defined inside an `if` block **only exists** if that block actually executes:"},{type:"code",code:`# Dangerous pattern: variable might not exist!
x = 7
if x % 5 == 0:
    output = "divisible by 5"
# print(output)  # NameError if x is NOT divisible by 5!

# Safe pattern 1: Initialize before the if
output = "not divisible by 5"   # default value
if x % 5 == 0:
    output = "divisible by 5"
print(output)   # Always works!

# Safe pattern 2: Use if-else (guarantees assignment)
if x % 5 == 0:
    output = "divisible by 5"
else:
    output = "not divisible by 5"
print(output)   # Always works!

# Note: Python does NOT have block scoping like C/Java
# Variables created inside if blocks are accessible outside
if True:
    y = 42
print(y)   # 42 — works! (not limited to the if block)`,language:"python"},{type:"callout",variant:"info",title:"Python Has Function Scope, Not Block Scope",content:"Unlike C, Java, or JavaScript (with `let`), Python doesn't create a new scope inside `if`, `for`, or `while` blocks. Variables created inside these blocks are accessible outside them. The scope boundary in Python is the **function** (or module for global code)."},{type:"heading",level:2,text:"Structural Pattern Matching (Python 3.10+)"},{type:"text",content:"Python 3.10 introduced `match-case`, similar to switch statements in other languages but much more powerful:"},{type:"code",code:`# match-case: structural pattern matching
command = "greet"

match command:
    case "greet":
        print("Hello! 👋")
    case "quit":
        print("Goodbye!")
    case "help":
        print("Available: greet, quit, help")
    case _:                     # _ is the wildcard (catches anything)
        print(f"Unknown command: {command}")

# match-case with values
http_status = 404

match http_status:
    case 200:
        print("OK")
    case 301:
        print("Moved Permanently")
    case 404:
        print("Not Found")       # This executes
    case 500:
        print("Internal Server Error")
    case _:
        print(f"Status: {http_status}")

# match-case with OR patterns
day = "Saturday"
match day:
    case "Saturday" | "Sunday":
        print("Weekend! 🎉")
    case _:
        print("Weekday")`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with conditionals!

# 1. Grade calculator
score = 78
if score >= 90:
    grade, emoji = "A", "🌟"
elif score >= 80:
    grade, emoji = "B", "👍"
elif score >= 70:
    grade, emoji = "C", "📝"
elif score >= 60:
    grade, emoji = "D", "⚠️"
else:
    grade, emoji = "F", "❌"

print(f"Score: {score} → Grade: {grade} {emoji}")

# 2. Leap year checker
year = 2024
if year % 400 == 0:
    is_leap = True
elif year % 100 == 0:
    is_leap = False
elif year % 4 == 0:
    is_leap = True
else:
    is_leap = False

print(f"{year} is {\\"a leap\\" if is_leap else \\"not a leap\\"} year")

# 3. FizzBuzz (classic!)
print("\\nFizzBuzz 1-20:")
for n in range(1, 21):
    if n % 15 == 0:
        print("FizzBuzz", end=" ")
    elif n % 3 == 0:
        print("Fizz", end=" ")
    elif n % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(n, end=" ")`,instructions:"Try changing the score and year values. Add more conditions to the FizzBuzz challenge!"},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-conditionals",title:"Conditionals Quiz",questions:[{type:"predict-output",code:`x = 15
if x > 20:
    print("A")
elif x > 10:
    print("B")
elif x > 5:
    print("C")
else:
    print("D")`,options:["A","B","C","B and C"],correctIndex:1,explanation:'In an if-elif-else chain, only the FIRST matching block executes. x=15 > 20 is False, but 15 > 10 is True, so "B" prints. The elif x > 5 is NEVER checked.'},{type:"predict-output",code:`x = 15
if x > 20:
    print("A")
if x > 10:
    print("B")
if x > 5:
    print("C")`,options:["A","B","C","B\\nC"],correctIndex:3,explanation:"These are THREE SEPARATE if statements (no elif). Each is checked independently. 15>20 is False (skip), 15>10 is True (print B), 15>5 is True (print C)."},{type:"predict-output",code:`result = "even" if 7 % 2 == 0 else "odd"
print(result)`,options:["even","odd","Error","None"],correctIndex:1,explanation:'7 % 2 = 1, which is not 0, so the condition is False. The ternary expression returns "odd".'},{type:"mcq",question:"What keyword catches ALL remaining cases in an if-elif chain?",options:["default","else","finally","otherwise"],correctIndex:1,explanation:"`else` catches all remaining cases. Unlike `elif`, `else` has no condition — it runs when ALL previous conditions are False. (`default` is used in match-case via `case _:`, `finally` is for try-except, `otherwise` doesn't exist in Python.)"},{type:"predict-output",code:`x = 7
if x % 5 == 0:
    msg = "multiple of 5"
print(msg)`,options:['"multiple of 5"','""',"NameError","None"],correctIndex:2,explanation:"Since 7 is not divisible by 5, the if-body never runs, and `msg` is never created. Trying to print an undefined variable raises a NameError."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-conditionals",title:"Leap Year Checker",difficulty:"medium",description:"A leap year is: divisible by 4, BUT not by 100 UNLESS also divisible by 400. Write a program that classifies a given year. Examples: 2024 → leap, 1900 → not leap, 2000 → leap.",starterCode:`# Leap Year Checker
# Rules:
# 1. Divisible by 4 → candidate
# 2. BUT if divisible by 100 → NOT a leap year
# 3. UNLESS also divisible by 400 → IS a leap year

years = [2024, 1900, 2000, 2023, 1600, 1800, 2100]

for year in years:
    # Your code here — determine if year is a leap year
    if year % 400 == 0:
        is_leap = True
    elif year % 100 == 0:
        is_leap = False
    elif year % 4 == 0:
        is_leap = True
    else:
        is_leap = False
    
    status = "Leap year ✅" if is_leap else "Not a leap year ❌"
    print(f"{year}: {status}")`,testCases:[{input:"",expected:`2024: Leap year ✅
1900: Not a leap year ❌
2000: Leap year ✅
2023: Not a leap year ❌
1600: Leap year ✅
1800: Not a leap year ❌
2100: Not a leap year ❌`}],hints:["Check divisibility by 400 first (the most specific rule)","Then check divisibility by 100 (centuries are usually NOT leap years)","Then check divisibility by 4 (the general rule)","Try also: year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)"],solution:`years = [2024, 1900, 2000, 2023, 1600, 1800, 2100]
for year in years:
    if year % 400 == 0:
        is_leap = True
    elif year % 100 == 0:
        is_leap = False
    elif year % 4 == 0:
        is_leap = True
    else:
        is_leap = False
    status = "Leap year ✅" if is_leap else "Not a leap year ❌"
    print(f"{year}: {status}")`}}],we=[{type:"heading",level:1,text:"While Loops"},{type:"text",content:"A **while loop** repeats a block of code **as long as a condition remains True**. Think of it as an `if` statement that keeps going back and re-checking the condition. While loops are ideal when you **don't know in advance** how many times you need to repeat something."},{type:"heading",level:2,text:"Basic while Loop"},{type:"code",code:`# Count from 1 to 5
count = 1
while count <= 5:
    print(count)
    count += 1      # Don't forget this! Without it → infinite loop

# How it works:
# Iteration 1: count=1, 1<=5 True → print 1, count becomes 2
# Iteration 2: count=2, 2<=5 True → print 2, count becomes 3
# Iteration 3: count=3, 3<=5 True → print 3, count becomes 4
# Iteration 4: count=4, 4<=5 True → print 4, count becomes 5
# Iteration 5: count=5, 5<=5 True → print 5, count becomes 6
# Check: count=6, 6<=5 False → loop ends

print(f"Loop ended. count = {count}")   # count = 6`,language:"python"},{type:"callout",variant:"danger",title:"The #1 While Loop Mistake: Infinite Loops",content:"If you forget to update the loop variable (like `count += 1`), the condition stays True forever, and the loop runs infinitely. Your program will freeze! If this happens in a terminal, press Ctrl+C to force-stop it."},{type:"heading",level:2,text:"Anatomy of a while Loop"},{type:"text",content:"Every well-structured while loop has three essential parts:"},{type:"list",items:["**Initialization**: Set up the loop variable(s) *before* the loop","**Condition**: The boolean expression checked *before each iteration*","**Update**: Modify the variable(s) so the condition eventually becomes `False`"]},{type:"code",code:`# The three parts labeled:
result = 1          # 1. INITIALIZATION
n = 5

while n > 0:        # 2. CONDITION
    result *= n
    n -= 1          # 3. UPDATE

print(f"5! = {result}")  # 5! = 120

# Counting down
print("Countdown:")
n = 5                    # 1. Initialize
while n > 0:             # 2. Condition
    print(n, end=" ")
    n -= 1               # 3. Update
print("Liftoff! 🚀")     # 5 4 3 2 1 Liftoff! 🚀`,language:"python"},{type:"heading",level:2,text:"The Accumulator Pattern"},{type:"text",content:"One of the most common loop patterns is the **accumulator** — a variable that builds up a result across iterations:"},{type:"code",code:`# Sum of numbers 1 to 100 (Gauss would be proud)
total = 0          # Accumulator, initialized to 0
n = 1
while n <= 100:
    total += n     # Accumulate: total = total + n
    n += 1
print(f"Sum of 1..100 = {total}")    # 5050

# Product (factorial)
factorial = 1      # Accumulator for product starts at 1
n = 10
while n > 0:
    factorial *= n
    n -= 1
print(f"10! = {factorial}")  # 3628800

# String accumulation
result = ""        # Empty string accumulator
i = 1
while i <= 5:
    result += str(i) + " "
    i += 1
print(result)      # 1 2 3 4 5

# Count digits in a number
number = 123456789
digit_count = 0
temp = number
while temp > 0:
    digit_count += 1
    temp //= 10
print(f"{number} has {digit_count} digits")  # 9 digits`,language:"python"},{type:"heading",level:2,text:"The break Statement"},{type:"text",content:"`break` **immediately exits** the loop, regardless of the condition. It's like an emergency exit:"},{type:"code",code:`# Find the first number divisible by 7 after 100
n = 100
while True:            # Intentional "infinite" loop
    n += 1
    if n % 7 == 0:
        print(f"Found it: {n}")  # Found it: 105
        break          # Exit the loop immediately

# Search for a value
data = [4, 8, 15, 16, 23, 42]
target = 16
i = 0
found = False
while i < len(data):
    if data[i] == target:
        found = True
        break          # No need to keep searching
    i += 1

if found:
    print(f"Found {target} at index {i}")  # Found 16 at index 3
else:
    print(f"{target} not found")`,language:"python"},{type:"callout",variant:"tip",title:"while True + break is a Common Pattern",content:"`while True:` creates an intentional infinite loop. You then use `break` to exit when a specific condition is met. This pattern is especially useful when:\n1. You need to check the exit condition in the **middle** of the loop\n2. You want to guarantee the loop body runs **at least once**\n3. You have multiple exit conditions"},{type:"heading",level:2,text:"The continue Statement"},{type:"text",content:'`continue` **skips the rest of the current iteration** and jumps back to the condition check. Think of it as "skip this one, move to next":'},{type:"code",code:`# Print only odd numbers from 1 to 10
n = 0
while n < 10:
    n += 1
    if n % 2 == 0:
        continue       # Skip even numbers
    print(n, end=" ")
print()   # 1 3 5 7 9

# Skip negative numbers in processing
values = [10, -3, 7, -1, 5, 0, -8, 12]
i = 0
total = 0
skipped = 0
while i < len(values):
    val = values[i]
    i += 1
    if val < 0:
        skipped += 1
        continue       # Skip negative values
    total += val

print(f"Sum of positives: {total}")    # 34
print(f"Skipped {skipped} negative numbers")  # 3`,language:"python"},{type:"callout",variant:"warning",title:"continue Gotcha: Update Before continue!",content:"If your update statement (like `i += 1`) comes AFTER the `continue`, it gets skipped — causing an infinite loop! Always place the update statement BEFORE the `continue`, or use a different loop structure."},{type:"heading",level:2,text:"The while-else Pattern"},{type:"text",content:"Python has a unique feature: you can attach an `else` clause to a `while` loop. The `else` block runs only when the loop ends **naturally** (condition becomes False), NOT when it exits via `break`:"},{type:"code",code:`# while-else: else runs when loop completes normally
# Search example — else means "not found"
data = [2, 4, 6, 8, 10]
target = 7
i = 0
while i < len(data):
    if data[i] == target:
        print(f"Found {target} at index {i}")
        break
    i += 1
else:
    # This runs because the loop ended WITHOUT break
    print(f"{target} not found in list")  # 7 not found in list

# Another example: checking for prime
n = 17
divisor = 2
while divisor * divisor <= n:
    if n % divisor == 0:
        print(f"{n} is NOT prime (divisible by {divisor})")
        break
    divisor += 1
else:
    print(f"{n} IS prime!")  # 17 IS prime!`,language:"python"},{type:"heading",level:2,text:"Sentinel Value Pattern"},{type:"text",content:"A **sentinel value** is a special input that signals the end of data. It's a classic while loop pattern for processing unknown amounts of input:"},{type:"code",code:`# Sum numbers until user enters 0 (sentinel value)
# (Simulated with a list for Pyodide)
inputs = [10, 25, 30, 15, 0]  # 0 is the sentinel

i = 0
total = 0
count = 0
while True:
    value = inputs[i]
    i += 1
    if value == 0:     # Sentinel detected
        break
    total += value
    count += 1

print(f"Sum: {total}")        # Sum: 80
print(f"Count: {count}")      # Count: 4
print(f"Average: {total / count:.1f}")  # Average: 20.0

# Password validation with limited attempts
password = "python123"
attempts = ["wrong", "nope", "python123"]

max_tries = 3
try_num = 0
while try_num < max_tries:
    guess = attempts[try_num]
    try_num += 1
    if guess == password:
        print(f"Access granted on attempt {try_num}!")
        break
    print(f"Wrong password. {max_tries - try_num} tries left.")
else:
    print("Account locked after 3 failed attempts.")`,language:"python"},{type:"heading",level:2,text:"While Loops in Algorithms"},{type:"code",code:`# GCD (Greatest Common Divisor) — Euclid's Algorithm
a, b = 48, 18
original_a, original_b = a, b
while b != 0:
    a, b = b, a % b    # Simultaneous assignment!
print(f"GCD({original_a}, {original_b}) = {a}")  # GCD(48, 18) = 6

# Collatz Conjecture (3n+1 problem)
n = 27
steps = 0
print(n, end="")
while n != 1:
    if n % 2 == 0:
        n = n // 2
    else:
        n = 3 * n + 1
    steps += 1
    print(f" → {n}", end="")
print(f"\\nReached 1 in {steps} steps")  # 111 steps!

# Binary representation
n = 42
binary = ""
temp = n
while temp > 0:
    binary = str(temp % 2) + binary  # Prepend the remainder
    temp //= 2
print(f"{n} in binary: {binary}")   # 42 in binary: 101010`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with while loops!

# 1. Fibonacci sequence
a, b = 0, 1
print("Fibonacci:", end=" ")
while a < 100:
    print(a, end=" ")
    a, b = b, a + b
print()

# 2. Digit sum
number = 9876
digit_sum = 0
temp = number
while temp > 0:
    digit_sum += temp % 10    # Get last digit
    temp //= 10              # Remove last digit
print(f"Digit sum of {number} = {digit_sum}")

# 3. Power of 2 finder
n = 1000
power = 1
exp = 0
while power < n:
    power *= 2
    exp += 1
print(f"\\nSmallest power of 2 >= {n}: 2^{exp} = {power}")

# 4. Number guessing game (simulated)
import random
secret = random.randint(1, 50)
guesses = [25, 12, 37, secret]  # Simulate guesses
print(f"\\nSecret number: {secret}")
for guess in guesses:
    if guess == secret:
        print(f"  {guess} → Correct! 🎉")
        break
    elif guess < secret:
        print(f"  {guess} → Too low")
    else:
        print(f"  {guess} → Too high")`,instructions:"Experiment with different algorithms. Try computing the reverse of a number, or finding the largest power of 2 below N."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-while",title:"While Loops Quiz",questions:[{type:"predict-output",code:`x = 10
while x > 0:
    x -= 3
print(x)`,options:["0","-2","1","-1"],correctIndex:1,explanation:"x goes: 10→7→4→1→(-2). When x=-2, the condition x>0 is False, so the loop ends. x is -2."},{type:"predict-output",code:`count = 0
n = 1
while n < 1000:
    n *= 2
    count += 1
print(count)`,options:["9","10","999","Infinite"],correctIndex:1,explanation:"n doubles each time: 1→2→4→8→16→32→64→128→256→512→1024. That's 10 iterations. After the 10th, n=1024 which is ≥1000, so the loop stops."},{type:"mcq",question:"When does the `else` block of a while-else execute?",options:["When the condition becomes False (normal completion)","When break is executed","Every time","When an exception occurs"],correctIndex:0,explanation:"The else block runs only when the while loop ends naturally (condition becomes False). If break exits the loop, the else is skipped."},{type:"predict-output",code:`n = 0
while n < 5:
    n += 1
    if n == 3:
        continue
    print(n, end=" ")`,options:["1 2 3 4 5","1 2 4 5","1 2","1 2 3"],correctIndex:1,explanation:"When n=3, `continue` skips the print. So we get 1, 2, (skip 3), 4, 5."},{type:"predict-output",code:`i = 1
while i <= 3:
    j = 1
    while j <= 3:
        if i == j:
            break
        j += 1
    print(j, end=" ")
    i += 1`,options:["1 1 1","1 2 3","3 3 3","1 1 1 2 2 3"],correctIndex:1,explanation:"Inner loop: when i==j, break. So j stops at 1 (i=1), 2 (i=2), 3 (i=3). Output: 1 2 3."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-while",title:"Reverse a Number",difficulty:"medium",description:"Use a while loop to reverse the digits of a positive integer. For example, 12345 becomes 54321. Do NOT convert to a string — use only arithmetic operations (% and //).",starterCode:`# Reverse a number using only arithmetic
number = 12345
original = number
reversed_num = 0

while number > 0:
    last_digit = number % 10       # Extract last digit
    reversed_num = reversed_num * 10 + last_digit  # Append it
    number //= 10                  # Remove last digit

print(f"Original: {original}")
print(f"Reversed: {reversed_num}")

# Test with more numbers
for n in [9876, 1000, 7, 100200]:
    temp = n
    rev = 0
    while temp > 0:
        rev = rev * 10 + temp % 10
        temp //= 10
    print(f"{n} → {rev}")`,testCases:[{input:"",expected:`Original: 12345
Reversed: 54321`}],hints:["Use % 10 to get the last digit of a number","Use // 10 to remove the last digit","Build the reversed number by: reversed = reversed * 10 + last_digit"],solution:`number = 12345
original = number
reversed_num = 0
while number > 0:
    last_digit = number % 10
    reversed_num = reversed_num * 10 + last_digit
    number //= 10
print(f"Original: {original}")
print(f"Reversed: {reversed_num}")`}}],_e=[{type:"heading",level:1,text:"For Loops & Iteration"},{type:"text",content:"The **for loop** is Python's primary tool for **iteration** — stepping through a sequence of values one at a time. Unlike `while` loops where you manually manage a counter, `for` loops automatically handle iteration. They're cleaner, safer (no risk of infinite loops), and more Pythonic."},{type:"heading",level:2,text:"Basic for Loop Syntax"},{type:"code",code:`# for loop iterates over any sequence
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
# I like apple
# I like banana
# I like cherry

# Iterating over a string (character by character)
for char in "Python":
    print(char, end=" ")
print()  # P y t h o n

# The loop variable takes each value in the sequence
numbers = [10, 20, 30, 40, 50]
for n in numbers:
    print(n * 2, end=" ")
print()  # 20 40 60 80 100`,language:"python"},{type:"callout",variant:"info",title:"for Loop vs while Loop",content:`Use **for** when you know what you're iterating over (a list, string, range, etc.).
Use **while** when you need to loop until some condition changes.

In practice, **for** loops are used ~90% of the time in Python. They're preferred because they're shorter, less error-prone, and more readable.`},{type:"heading",level:2,text:"The range() Function"},{type:"text",content:"`range()` generates a sequence of integers. It's the most common way to make a for loop run a specific number of times:"},{type:"code",code:`# range(stop) — 0 to stop-1
for i in range(5):
    print(i, end=" ")
print()  # 0 1 2 3 4

# range(start, stop) — start to stop-1
for i in range(3, 8):
    print(i, end=" ")
print()  # 3 4 5 6 7

# range(start, stop, step) — start to stop-1, stepping by step
for i in range(0, 20, 3):
    print(i, end=" ")
print()  # 0 3 6 9 12 15 18

# Counting down with a negative step
for i in range(10, 0, -1):
    print(i, end=" ")
print()  # 10 9 8 7 6 5 4 3 2 1

# IMPORTANT: range() excludes the stop value!
# range(1, 5) gives [1, 2, 3, 4] — NOT [1, 2, 3, 4, 5]
# To include 5: range(1, 6)`,language:"python"},{type:"callout",variant:"tip",title:"Why range() Excludes the End",content:"The half-open interval `range(0, n)` has exactly `n` elements. This makes common patterns cleaner:\n- `range(len(my_list))` gives valid indices for the whole list\n- `range(n)` runs exactly `n` times\n\nIt also prevents off-by-one errors in many situations."},{type:"heading",level:3,text:"range() Details"},{type:"code",code:`# range() is lazy — it doesn't create a list in memory
r = range(1, 1000000)
print(type(r))           # <class 'range'>
print(len(r))            # 999999
print(r[0])              # 1
print(r[-1])             # 999999
print(50 in r)           # True (efficient membership test!)

# Convert to list if needed
print(list(range(5)))    # [0, 1, 2, 3, 4]
print(list(range(2, 10, 2)))  # [2, 4, 6, 8]

# Empty ranges
print(list(range(5, 2)))       # [] — can't count up from 5 to 2
print(list(range(5, 2, -1)))   # [5, 4, 3] — but can count DOWN
print(list(range(0)))          # [] — range(0) is empty

# Common pattern: run something N times
n = 3
for _ in range(n):           # _ means "I don't need this variable"
    print("Hello!")
# Hello!
# Hello!
# Hello!`,language:"python"},{type:"heading",level:2,text:"Iterating Through Strings"},{type:"code",code:`# Method 1: Direct iteration (Pythonic)
word = "Python"
for char in word:
    print(char, end="-")
print()  # P-y-t-h-o-n-

# Method 2: By index (when you need the position)
word = "Python"
for i in range(len(word)):
    print(f"Index {i}: {word[i]}")

# Method 3: enumerate() — best of both worlds!
word = "Python"
for i, char in enumerate(word):
    print(f"Index {i}: {char}")

# Count vowels
text = "Hello World"
vowel_count = 0
for char in text.lower():
    if char in "aeiou":
        vowel_count += 1
print(f"Vowels in '{text}': {vowel_count}")  # 3

# Reverse a string using a loop
original = "Python"
reversed_str = ""
for char in original:
    reversed_str = char + reversed_str   # Prepend each character
print(reversed_str)  # nohtyP`,language:"python"},{type:"heading",level:2,text:"enumerate() — Index + Value Together"},{type:"text",content:"`enumerate()` is a built-in function that provides both the **index** and the **value** during iteration. It's the Pythonic alternative to `for i in range(len(sequence)):`:"},{type:"code",code:`# Without enumerate (works but not Pythonic)
colors = ["red", "green", "blue"]
for i in range(len(colors)):
    print(f"{i}: {colors[i]}")

# With enumerate (Pythonic!)
for i, color in enumerate(colors):
    print(f"{i}: {color}")

# enumerate() with custom start index
for rank, color in enumerate(colors, start=1):
    print(f"#{rank}: {color}")
# #1: red
# #2: green
# #3: blue

# What enumerate actually produces
print(list(enumerate(["a", "b", "c"])))
# [(0, 'a'), (1, 'b'), (2, 'c')]`,language:"python"},{type:"callout",variant:"tip",title:"When to Use enumerate()",content:"If you need only the **value**: `for item in sequence:`\nIf you need the **index AND value**: `for i, item in enumerate(sequence):`\nIf you need only the **index**: `for i in range(len(sequence)):` (rare)\n\nNever do `for i in range(len(items)):` and then access `items[i]` — use `enumerate()` instead!"},{type:"heading",level:2,text:"break, continue, and for-else"},{type:"code",code:`# break in a for loop
for n in range(1, 100):
    if n * n > 50:
        print(f"First n where n² > 50: {n}")  # 8
        break

# continue in a for loop
print("Odd numbers 1-10:", end=" ")
for n in range(1, 11):
    if n % 2 == 0:
        continue      # Skip even numbers
    print(n, end=" ")
print()  # 1 3 5 7 9

# for-else: else runs if loop completes without break
primes = [2, 3, 5, 7, 11, 13]
target = 8
for p in primes:
    if p == target:
        print(f"{target} is prime")
        break
else:
    print(f"{target} is NOT in primes list")  # 8 is NOT in primes list

# Practical: check if a number is prime
n = 29
for i in range(2, int(n**0.5) + 1):
    if n % i == 0:
        print(f"{n} is NOT prime (divisible by {i})")
        break
else:
    print(f"{n} IS prime!")  # 29 IS prime!`,language:"python"},{type:"heading",level:2,text:"Iterating Over Multiple Sequences"},{type:"code",code:`# zip() — iterate over multiple sequences in parallel
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 78]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
# Alice: 95
# Bob: 87
# Charlie: 78

# zip with three sequences
subjects = ["Math", "Science", "English"]
for name, subject, score in zip(names, subjects, scores):
    print(f"{name} got {score} in {subject}")

# zip stops at the shortest sequence
for a, b in zip([1, 2, 3], [10, 20]):
    print(a, b)  # Only prints 2 pairs

# Iterate over a dictionary
student = {"name": "Alice", "age": 20, "grade": "A"}

# Keys only (default)
for key in student:
    print(key)

# Values
for value in student.values():
    print(value)

# Key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")`,language:"python"},{type:"heading",level:2,text:"Common for Loop Patterns"},{type:"code",code:`# Pattern 1: Accumulator
numbers = [4, 8, 15, 16, 23, 42]
total = sum(numbers)  # Built-in! But manually:
total = 0
for n in numbers:
    total += n
print(f"Sum: {total}")  # 108

# Pattern 2: Finding max/min
values = [34, 67, 12, 89, 45]
max_val = values[0]
for v in values[1:]:
    if v > max_val:
        max_val = v
print(f"Max: {max_val}")  # 89  (or just use max(values))

# Pattern 3: Building a new list
numbers = [1, 2, 3, 4, 5]
squares = []
for n in numbers:
    squares.append(n ** 2)
print(squares)  # [1, 4, 9, 16, 25]

# Pattern 4: Filtering
numbers = [1, -2, 3, -4, 5, -6]
positives = []
for n in numbers:
    if n > 0:
        positives.append(n)
print(positives)  # [1, 3, 5]

# Pattern 5: Counting occurrences
text = "hello world"
freq = {}
for char in text:
    if char in freq:
        freq[char] += 1
    else:
        freq[char] = 1
print(freq)  # {'h': 1, 'e': 1, 'l': 3, ...}`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Explore for loops!

# 1. Multiplication table
n = 7
print(f"--- {n}x Table ---")
for i in range(1, 11):
    print(f"{n} × {i:2d} = {n * i:3d}")

# 2. Star pattern
print("\\n--- Triangle ---")
for i in range(1, 6):
    print("★" * i)

# 3. enumerate with ranking
scores = [("Alice", 95), ("Bob", 87), ("Charlie", 92)]
scores.sort(key=lambda x: x[1], reverse=True)
print("\\n--- Leaderboard ---")
for rank, (name, score) in enumerate(scores, 1):
    medal = ["🥇", "🥈", "🥉"][rank-1] if rank <= 3 else "  "
    print(f"{medal} #{rank} {name}: {score}")

# 4. FizzBuzz with for loop
print("\\n--- FizzBuzz ---")
for n in range(1, 21):
    if n % 15 == 0:
        print("FizzBuzz", end=" ")
    elif n % 3 == 0:
        print("Fizz", end=" ")
    elif n % 5 == 0:
        print("Buzz", end=" ")
    else:
        print(n, end=" ")`,instructions:"Try creating different patterns, or use zip() to combine multiple lists."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-for",title:"For Loops Quiz",questions:[{type:"predict-output",code:"print(list(range(2, 10, 3)))",options:["[2, 5, 8]","[2, 5, 8, 11]","[3, 6, 9]","[2, 4, 6, 8]"],correctIndex:0,explanation:"Start at 2, step by 3: 2, 5, 8. Next would be 11, but that's ≥10 (stop), so it's excluded."},{type:"predict-output",code:`for i in range(3):
    for j in range(2):
        print("*", end="")
    print()`,options:["***\\n**","**\\n**\\n**","******","**\\n**"],correctIndex:1,explanation:"Outer loop runs 3 times. Each time, inner loop prints 2 stars, then print() adds a newline. Result: three rows of **."},{type:"mcq",question:"What is the Pythonic way to get both index and value when iterating?",options:["for i in range(len(items))","for i, val in enumerate(items)","for val, i in items.items()","for val[i] in items"],correctIndex:1,explanation:"enumerate() is the Pythonic way to get both index and value. It returns (index, value) tuples."},{type:"predict-output",code:`for i in range(5):
    if i == 3:
        break
else:
    print("done")
print(i)`,options:["done\\n3","3","done\\n2","4"],correctIndex:1,explanation:"break exits the loop at i=3. Because break was used, the else block is SKIPPED. Only print(i) executes, giving 3."},{type:"predict-output",code:`total = 0
for n in range(1, 5):
    total += n
print(total)`,options:["10","15","4","5"],correctIndex:0,explanation:"range(1, 5) gives [1, 2, 3, 4]. Sum = 1+2+3+4 = 10. Note: 5 is excluded from range(1, 5)."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-for",title:"Prime Number Finder",difficulty:"medium",description:"Use for loops to find all prime numbers between 2 and 50. A prime number is only divisible by 1 and itself. Use a nested for loop with a for-else pattern.",starterCode:`# Find all prime numbers from 2 to 50
primes = []

for n in range(2, 51):
    # Check if n is prime
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            break    # Not prime
    else:
        # This runs if the inner loop completed without break
        primes.append(n)

print(f"Primes from 2-50: {primes}")
print(f"Count: {len(primes)}")`,testCases:[{input:"",expected:`Primes from 2-50: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
Count: 15`}],hints:["A number n is prime if no number from 2 to √n divides it evenly","Use for-else: the else block runs when the loop completes without break","int(n**0.5) + 1 gives the integer square root plus 1"],solution:`primes = []
for n in range(2, 51):
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            break
    else:
        primes.append(n)
print(f"Primes from 2-50: {primes}")
print(f"Count: {len(primes)}")`}}],ke=[{type:"heading",level:1,text:"Loop Patterns & Nested Loops"},{type:"text",content:"Now that you know `while` and `for` loops, let's combine them with **nesting** and explore classic loop patterns. Nested loops are loops inside loops — the inner loop runs completely for **each iteration** of the outer loop. These patterns appear everywhere: printing shapes, processing grids, generating combinations, and more."},{type:"heading",level:2,text:"Nested Loop Fundamentals"},{type:"code",code:`# Basic nested loop: multiplication table (partial)
for i in range(1, 4):            # Outer: rows
    for j in range(1, 4):        # Inner: columns
        print(f"{i}×{j}={i*j}", end="\\t")
    print()                      # Newline after each row
# 1×1=1   1×2=2   1×3=3
# 2×1=2   2×2=4   2×3=6
# 3×1=3   3×2=6   3×3=9

# How nested loops work:
# Outer loop iteration 1 (i=1):
#   Inner loop: j=1, j=2, j=3 (3 iterations)
# Outer loop iteration 2 (i=2):
#   Inner loop: j=1, j=2, j=3 (3 iterations)
# Outer loop iteration 3 (i=3):
#   Inner loop: j=1, j=2, j=3 (3 iterations)
# Total: 3 × 3 = 9 iterations`,language:"python"},{type:"callout",variant:"info",title:"Nested Loop Complexity",content:"If the outer loop runs `n` times and the inner loop runs `m` times, the body of the inner loop executes `n × m` times total. For a doubly nested loop with `range(n)` each, that's `n²` operations. This is why nested loops can be slow for large inputs!"},{type:"heading",level:2,text:"Star Patterns — Classic Exercises"},{type:"text",content:"Star (or asterisk) patterns are classic programming exercises that build nested loop intuition:"},{type:"code",code:`# Pattern 1: Right Triangle
n = 5
for i in range(1, n + 1):
    print("*" * i)
# *
# **
# ***
# ****
# *****

# Pattern 2: Inverted Right Triangle
for i in range(n, 0, -1):
    print("*" * i)
# *****
# ****
# ***
# **
# *

# Pattern 3: Centered Pyramid
for i in range(1, n + 1):
    spaces = " " * (n - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)
#     *
#    ***
#   *****
#  *******
# *********

# Pattern 4: Diamond
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))`,language:"python"},{type:"heading",level:2,text:"Number Patterns"},{type:"code",code:`# Pattern 1: Number Triangle
n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
# 1
# 1 2
# 1 2 3
# 1 2 3 4
# 1 2 3 4 5

# Pattern 2: Floyd's Triangle
num = 1
for i in range(1, 6):
    for j in range(1, i + 1):
        print(f"{num:3d}", end="")
        num += 1
    print()
#   1
#   2  3
#   4  5  6
#   7  8  9 10
#  11 12 13 14 15

# Pattern 3: Pascal's Triangle (first 6 rows)
for i in range(6):
    # Leading spaces for centering
    print(" " * (5 - i) * 2, end="")
    val = 1
    for j in range(i + 1):
        print(f"{val:4d}", end="")
        val = val * (i - j) // (j + 1)
    print()`,language:"python"},{type:"heading",level:2,text:"Full Multiplication Table"},{type:"code",code:`# Beautifully formatted multiplication table
n = 10

# Header row
print("   |", end="")
for j in range(1, n + 1):
    print(f"{j:4d}", end="")
print()
print("---+" + "----" * n)

# Table body
for i in range(1, n + 1):
    print(f"{i:2d} |", end="")
    for j in range(1, n + 1):
        print(f"{i*j:4d}", end="")
    print()

# Output:
#    |   1   2   3   4   5   6   7   8   9  10
# ---+----------------------------------------
#  1 |   1   2   3   4   5   6   7   8   9  10
#  2 |   2   4   6   8  10  12  14  16  18  20
# ... etc.`,language:"python"},{type:"heading",level:2,text:"Generating Combinations"},{type:"code",code:`# All pairs from two lists
colors = ["red", "blue"]
sizes = ["S", "M", "L"]

print("--- All combinations ---")
for color in colors:
    for size in sizes:
        print(f"{color}-{size}", end="  ")
    print()
# red-S  red-M  red-L
# blue-S  blue-M  blue-L

# Unique pairs from a single list (no repeats)
teams = ["A", "B", "C", "D"]
print("\\n--- Matchups ---")
match_num = 1
for i in range(len(teams)):
    for j in range(i + 1, len(teams)):   # j > i to avoid duplicates
        print(f"Match {match_num}: {teams[i]} vs {teams[j]}")
        match_num += 1
# Match 1: A vs B
# Match 2: A vs C
# Match 3: A vs D
# Match 4: B vs C
# Match 5: B vs D
# Match 6: C vs D

# Coordinate grid
print("\\n--- Grid Points ---")
for x in range(3):
    for y in range(3):
        print(f"({x},{y})", end=" ")
    print()`,language:"python"},{type:"heading",level:2,text:"Nested Loop Accumulators"},{type:"code",code:`# Building a 2D list (matrix)
rows = 3
cols = 4
matrix = []
for i in range(rows):
    row = []
    for j in range(cols):
        row.append(i * cols + j + 1)
    matrix.append(row)

# Print the matrix
for row in matrix:
    for val in row:
        print(f"{val:3d}", end="")
    print()
#   1  2  3  4
#   5  6  7  8
#   9 10 11 12

# Sum all elements of a 2D list
total = 0
for row in matrix:
    for val in row:
        total += val
print(f"\\nTotal: {total}")  # 78

# Find the maximum in a 2D list
max_val = matrix[0][0]
for row in matrix:
    for val in row:
        if val > max_val:
            max_val = val
print(f"Maximum: {max_val}")  # 12`,language:"python"},{type:"heading",level:2,text:"break & continue in Nested Loops"},{type:"text",content:"**Important:** `break` and `continue` only affect the **innermost** loop they're inside:"},{type:"code",code:`# break only exits the INNER loop
for i in range(3):
    for j in range(5):
        if j == 3:
            break      # Only breaks the inner loop!
        print(f"({i},{j})", end=" ")
    print()  # Outer loop continues normally
# (0,0) (0,1) (0,2)
# (1,0) (1,1) (1,2)
# (2,0) (2,1) (2,2)

# To break both loops, use a flag
found = False
for i in range(10):
    for j in range(10):
        if i * j == 42:
            print(f"Found: {i} × {j} = 42")
            found = True
            break
    if found:
        break           # Break the outer loop too

# Or use a function (cleaner)
def find_product(target):
    for i in range(1, target + 1):
        for j in range(i, target + 1):
            if i * j == target:
                return (i, j)  # return exits both loops
    return None

result = find_product(42)
print(f"Factors: {result}")  # (6, 7)`,language:"python"},{type:"heading",level:2,text:"while vs for — When to Use Which"},{type:"list",items:["**Use for** when: iterating over a known sequence, counting a fixed number of times, processing each element of a collection","**Use while** when: you don't know how many iterations ahead of time, waiting for user input, implementing game loops, running until a condition changes","**Prefer for** in most cases — it's shorter, avoids off-by-one errors, and can't accidentally create infinite loops"]},{type:"code",code:`# Same task, two approaches:

# for loop: clean and concise
result = 1
for i in range(1, 6):
    result *= i
print(f"5! = {result}")  # 120

# while loop: more verbose, riskier
result = 1
i = 1
while i <= 5:
    result *= i
    i += 1            # Forget this → infinite loop!
print(f"5! = {result}")  # 120

# while is better here: unknown iterations
import random
flips = 0
while True:
    flips += 1
    if random.choice(["H", "T"]) == "H":
        break
print(f"First heads after {flips} flips")`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Create patterns with nested loops!

# 1. Right-aligned triangle
n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * i)

print()

# 2. Hollow square
n = 5
for i in range(n):
    for j in range(n):
        if i == 0 or i == n-1 or j == 0 or j == n-1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

print()

# 3. Number spiral (try modifying!)
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{max(abs(3-i), abs(3-j)) + 1}", end=" ")
    print()

print()

# 4. Alphabet pattern
for i in range(5):
    for j in range(i + 1):
        print(chr(65 + j), end=" ")
    print()`,instructions:"Try creating your own patterns! Can you make a checkerboard? A Christmas tree? An hourglass shape?"},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-patterns",title:"Loop Patterns Quiz",questions:[{type:"predict-output",code:`for i in range(4):
    for j in range(3):
        print("*", end="")`,options:["3","4","7","12"],correctIndex:3,explanation:"Outer loop runs 4 times, inner loop runs 3 times per outer iteration. Total: 4 × 3 = 12 prints."},{type:"predict-output",code:`for i in range(3):
    for j in range(i + 1):
        print("#", end="")
    print()`,options:["#\\n##\\n###","###\\n##\\n#","#\\n#\\n#","###"],correctIndex:0,explanation:"i=0: j runs 1 time (1 hash), i=1: j runs 2 times (2 hashes), i=2: j runs 3 times (3 hashes). Result: right triangle."},{type:"mcq",question:"In a nested loop, which loop does `break` exit?",options:["The outermost loop","The innermost loop it's inside","All loops","The function"],correctIndex:1,explanation:"`break` only exits the innermost loop containing it. The outer loop continues normally. To break multiple loops, use a flag variable or wrap the loops in a function and use `return`."},{type:"predict-output",code:`for i in range(1, 5):
    print("*" * i + " " * (5-i) + "*" * i)`,options:["*** ***","*   *","**  **","*** ***"],correctIndex:0,explanation:'i=3: "***" + "  " + "***" = "***  ***". Wait — 5-3=2 spaces. Let me recalculate: "*"*3 + " "*2 + "*"*3 = "***  ***".'}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-patterns",title:"Pyramid Builder",difficulty:"hard",description:'Create a centered number pyramid where each row contains numbers counting up to the row number, then back down. Row 1: "1", Row 2: "1 2 1", Row 3: "1 2 3 2 1", etc.',starterCode:`# Number Pyramid
n = 5
for i in range(1, n + 1):
    # Leading spaces for centering
    print("  " * (n - i), end="")
    
    # Count up: 1, 2, ..., i
    for j in range(1, i + 1):
        print(f"{j:2d}", end=" ")
    
    # Count back down: i-1, ..., 1
    for j in range(i - 1, 0, -1):
        print(f"{j:2d}", end=" ")
    
    print()

# Expected output (n=5):
#          1
#        1  2  1
#      1  2  3  2  1
#    1  2  3  4  3  2  1
#  1  2  3  4  5  4  3  2  1`,testCases:[{input:"",expected:`          1 
        1  2  1 
      1  2  3  2  1 
    1  2  3  4  3  2  1 
  1  2  3  4  5  4  3  2  1`}],hints:["Each row i has (2i - 1) numbers","First half: count from 1 to i","Second half: count from i-1 back down to 1","Leading spaces: (n - i) * some_width for centering"],solution:`n = 5
for i in range(1, n + 1):
    print("  " * (n - i), end="")
    for j in range(1, i + 1):
        print(f"{j:2d}", end=" ")
    for j in range(i - 1, 0, -1):
        print(f"{j:2d}", end=" ")
    print()`}}],Te=[{type:"heading",level:1,text:"Functions — Building Blocks of Programs"},{type:"text",content:"A **function** is a reusable block of code that performs a specific task. Functions are the most important organizational tool in programming — they let you break complex problems into smaller, manageable pieces. You've already been using built-in functions: `print()`, `len()`, `range()`, `int()`. Now you'll learn to **create your own**."},{type:"heading",level:2,text:"Defining and Calling Functions"},{type:"code",code:`# Defining a function with def
def greet():
    """A simple greeting function."""
    print("Hello, World!")

# Calling (invoking) the function
greet()     # Hello, World!
greet()     # Hello, World! — can call as many times as you want

# Functions with parameters (inputs)
def greet_person(name):
    """Greet a specific person."""
    print(f"Hello, {name}!")

greet_person("Alice")    # Hello, Alice!
greet_person("Bob")      # Hello, Bob!

# Functions with return values (outputs)
def square(n):
    """Return the square of n."""
    return n ** 2

result = square(5)
print(result)     # 25
print(square(3))  # 9

# Combining it all
def add(a, b):
    """Return the sum of a and b."""
    return a + b

print(add(3, 4))   # 7
print(add(10, 20)) # 30`,language:"python"},{type:"callout",variant:"info",title:"def Creates the Function, Calling Executes It",content:"`def` only **defines** (creates) the function — the code inside doesn't run yet. The function executes only when you **call** it with parentheses: `function_name()`. This is a crucial distinction!"},{type:"heading",level:2,text:"Parameters vs Arguments"},{type:"text",content:"**Parameters** are the variable names in the function definition. **Arguments** are the actual values you pass when calling the function:"},{type:"code",code:`# "name" is a PARAMETER (in the definition)
def greet(name):         # ← parameter
    print(f"Hello, {name}!")

# "Alice" is an ARGUMENT (in the call)
greet("Alice")           # ← argument

# Multiple parameters
def full_name(first, middle, last):
    return f"{first} {middle} {last}"

print(full_name("Guido", "van", "Rossum"))

# Positional arguments: order matters!
def power(base, exponent):
    return base ** exponent

print(power(2, 10))    # 1024 — 2^10
print(power(10, 2))    # 100  — 10^2 (different!)`,language:"python"},{type:"heading",level:2,text:"Return Values"},{type:"code",code:`# return sends a value back to the caller
def is_even(n):
    return n % 2 == 0

print(is_even(4))    # True
print(is_even(7))    # False

# return also EXITS the function immediately
def first_positive(numbers):
    for n in numbers:
        if n > 0:
            return n      # Found it! Exit now.
    return None             # Nothing found

print(first_positive([-3, -1, 0, 5, 8]))  # 5
print(first_positive([-3, -1, 0]))          # None

# Returning multiple values (actually returns a tuple)
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {low}, Max: {high}")   # Min: 1, Max: 9

# Functions without return give None
def say_hi():
    print("Hi!")

result = say_hi()     # Prints "Hi!"
print(result)         # None — no return statement!`,language:"python"},{type:"callout",variant:"warning",title:"print() vs return — They Are NOT the Same!",content:"`print()` displays text on screen but the value is gone.\n`return` sends a value back to the caller so it can be stored, used in calculations, or passed to other functions.\n\n`def square(n): print(n**2)` — shows the result but you can't use it.\n`def square(n): return n**2` — gives the result back for further use."},{type:"heading",level:2,text:"Default Parameter Values"},{type:"code",code:`# Default values: used when no argument is provided
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice! (uses default)
greet("Bob", "Hola")        # Hola, Bob! (overrides default)

# Power function with default exponent
def power(base, exp=2):     # Default: square
    return base ** exp

print(power(5))       # 25  — uses default exp=2
print(power(2, 10))   # 1024 — uses exp=10

# RULE: default parameters must come AFTER non-default ones
def f(a, b=10, c=20):   # ✅ Valid
    return a + b + c

# def f(a=10, b, c):    # ❌ SyntaxError!
# def f(a, b=10, c):    # ❌ SyntaxError!

print(f(1))          # 31  — b=10, c=20
print(f(1, 2))       # 23  — b=2, c=20
print(f(1, 2, 3))    # 6   — b=2, c=3`,language:"python"},{type:"heading",level:2,text:"Keyword Arguments"},{type:"code",code:`# Keyword arguments let you pass values by name
def describe_pet(name, animal, color="brown"):
    print(f"{name} is a {color} {animal}")

# Positional arguments (order matters)
describe_pet("Buddy", "dog")           # Buddy is a brown dog

# Keyword arguments (order doesn't matter!)
describe_pet(animal="cat", name="Whiskers", color="black")
# Whiskers is a black cat

# Mix positional and keyword (positional first!)
describe_pet("Nemo", animal="fish", color="orange")
# Nemo is a orange fish

# Keyword arguments are especially useful with many parameters
def create_user(name, age, email, role="user", active=True):
    return {
        "name": name, "age": age, "email": email,
        "role": role, "active": active
    }

user = create_user("Alice", 30, "alice@example.com", role="admin")
print(user)`,language:"python"},{type:"heading",level:2,text:"Variable Scope — Local vs Global"},{type:"text",content:"**Scope** determines where a variable is accessible. Variables created inside a function are **local** — they exist only within that function. Variables outside are **global**."},{type:"code",code:`# Local scope: variable exists only inside the function
def my_function():
    x = 10          # Local variable
    print(f"Inside: x = {x}")

my_function()       # Inside: x = 10
# print(x)         # NameError! x is not defined here

# Global scope: variable accessible everywhere
y = 20              # Global variable

def read_global():
    print(f"Inside: y = {y}")    # Can READ globals

read_global()       # Inside: y = 20

# Shadowing: local variable hides global with same name
z = 100

def shadow_demo():
    z = 999         # Creates a NEW local z (doesn't modify global)
    print(f"Inside: z = {z}")

shadow_demo()       # Inside: z = 999
print(f"Outside: z = {z}")  # Outside: z = 100 (unchanged!)

# The global keyword (use sparingly!)
counter = 0

def increment():
    global counter  # Modify the global variable
    counter += 1

increment()
increment()
increment()
print(f"Counter: {counter}")  # Counter: 3`,language:"python"},{type:"callout",variant:"danger",title:"Avoid global — Pass Values Instead",content:"Using `global` creates hidden dependencies between functions and makes code harder to understand and debug. Instead, pass values as arguments and return results:\n\n❌ `global counter; counter += 1`\n✅ `counter = increment(counter)` where `def increment(n): return n + 1`"},{type:"heading",level:2,text:"Docstrings — Documenting Functions"},{type:"code",code:`# Docstrings: the first string in a function
def calculate_bmi(weight_kg, height_m):
    """Calculate Body Mass Index.
    
    Args:
        weight_kg: Weight in kilograms
        height_m: Height in meters
    
    Returns:
        BMI as a float
    
    Example:
        >>> calculate_bmi(70, 1.75)
        22.857142857142858
    """
    return weight_kg / (height_m ** 2)

# Access the docstring
print(calculate_bmi.__doc__)
help(calculate_bmi)  # Pretty-printed documentation

# Always document your functions! Future-you will thank you.`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Create and use functions!

# 1. Temperature converter
def celsius_to_fahrenheit(c):
    return c * 9/5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

print(f"100°C = {celsius_to_fahrenheit(100):.1f}°F")
print(f"72°F = {fahrenheit_to_celsius(72):.1f}°C")

# 2. Is it a palindrome?
def is_palindrome(text):
    cleaned = text.lower().replace(" ", "")
    return cleaned == cleaned[::-1]

for word in ["racecar", "Python", "madam", "hello"]:
    result = "✅" if is_palindrome(word) else "❌"
    print(f"  {word}: {result}")

# 3. Function that returns multiple values
def analyze_numbers(nums):
    return min(nums), max(nums), sum(nums) / len(nums)

data = [4, 8, 15, 16, 23, 42]
lo, hi, avg = analyze_numbers(data)
print(f"\\nMin={lo}, Max={hi}, Avg={avg:.1f}")`,instructions:"Create your own functions! Try making a function that checks if a number is prime."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-functions",title:"Functions Quiz",questions:[{type:"predict-output",code:`def mystery(a, b=10):
    return a + b

print(mystery(5))
print(mystery(5, 20))`,options:["5\\n25","15\\n25","15\\n20","Error"],correctIndex:1,explanation:"First call: a=5, b uses default (10), so 5+10=15. Second call: a=5, b=20, so 5+20=25."},{type:"predict-output",code:`x = 5
def change():
    x = 10
    print(x)

change()
print(x)`,options:["10\\n10","10\\n5","5\\n5","Error"],correctIndex:1,explanation:"Inside change(), x=10 creates a LOCAL variable. The global x=5 is unchanged. Output: 10 (local), then 5 (global)."},{type:"predict-output",code:`def greet(name):
    print(f"Hi {name}")

result = greet("Alice")
print(result)`,options:["Hi Alice\\nNone","Hi Alice\\nHi Alice","Hi Alice","None"],correctIndex:0,explanation:'greet() prints "Hi Alice" and has no return, so it implicitly returns None. print(result) then prints None.'},{type:"mcq",question:"What is the difference between print() and return?",options:["They are the same thing","print() displays output; return sends a value back to the caller","return displays output; print sends a value back","print() is faster"],correctIndex:1,explanation:"print() writes to the screen (side effect). return gives a value back to where the function was called, allowing further computation with that value."},{type:"predict-output",code:`def first_even(nums):
    for n in nums:
        if n % 2 == 0:
            return n
    return -1

print(first_even([1, 3, 4, 6, 8]))`,options:["1","4","[4, 6, 8]","-1"],correctIndex:1,explanation:"The function returns the FIRST even number it finds. 1 is odd, 3 is odd, 4 is even → return 4 immediately."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-functions",title:"Password Strength Checker",difficulty:"medium",description:'Write a function `check_password(password)` that returns a strength rating: "Weak" (< 8 chars), "Medium" (8+ chars with letters and digits), "Strong" (8+ chars with upper, lower, digits, and special characters).',starterCode:`def check_password(password):
    """Check password strength."""
    if len(password) < 8:
        return "Weak"
    
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(not c.isalnum() for c in password)
    
    if has_upper and has_lower and has_digit and has_special:
        return "Strong"
    elif has_digit and (has_upper or has_lower):
        return "Medium"
    else:
        return "Weak"

# Test it
tests = ["hi", "password", "Pass1234", "P@ss1234!", "12345678"]
for pw in tests:
    strength = check_password(pw)
    print(f"  {pw:15s} → {strength}")`,testCases:[{input:"",expected:`  hi              → Weak
  password        → Weak
  Pass1234        → Medium
  P@ss1234!       → Strong
  12345678        → Weak`}],hints:["Use len() to check length","Use any() with generator expressions to check character types","str.isupper(), str.islower(), str.isdigit(), str.isalnum() are helpful"],solution:`def check_password(password):
    if len(password) < 8:
        return "Weak"
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(not c.isalnum() for c in password)
    if has_upper and has_lower and has_digit and has_special:
        return "Strong"
    elif has_digit and (has_upper or has_lower):
        return "Medium"
    else:
        return "Weak"
tests = ["hi", "password", "Pass1234", "P@ss1234!", "12345678"]
for pw in tests:
    print(f"  {pw:15s} → {check_password(pw)}")`}}],Ce=[{type:"heading",level:1,text:"Advanced Function Concepts"},{type:"text",content:"Now that you understand basic functions, let's explore Python's more powerful function features: **lambda expressions**, **recursion**, **higher-order functions**, and **flexible arguments**. These concepts take your functions from simple tools to sophisticated building blocks."},{type:"heading",level:2,text:"Lambda Functions (Anonymous Functions)"},{type:"code",code:`# Lambda: a one-line anonymous function
# Syntax: lambda parameters: expression

square = lambda x: x ** 2
print(square(5))        # 25

add = lambda a, b: a + b
print(add(3, 4))        # 7

# Lambda is equivalent to:
def square_regular(x):
    return x ** 2

# Lambdas are most useful as arguments to other functions
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5]

# Sort by absolute distance from 5
sorted_nums = sorted(numbers, key=lambda x: abs(x - 5))
print(sorted_nums)  # [5, 5, 4, 6, 3, 2, 9, 1, 1]

# Sort strings by length
words = ["python", "is", "a", "wonderful", "language"]
print(sorted(words, key=lambda w: len(w)))
# ['a', 'is', 'python', 'language', 'wonderful']

# Sort tuples by second element
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
print(sorted(students, key=lambda s: s[1], reverse=True))
# [('Bob', 92), ('Alice', 85), ('Charlie', 78)]`,language:"python"},{type:"callout",variant:"tip",title:"When to Use Lambda vs def",content:"Use **lambda** for short, one-off functions (especially as arguments to `sorted()`, `map()`, `filter()`).\nUse **def** for anything more than a single expression, or when the function needs a name for clarity.\n\nLambdas can only contain a single expression — no statements, no assignments, no multiple lines."},{type:"heading",level:2,text:"*args and **kwargs — Flexible Arguments"},{type:"code",code:`# *args: accept any number of positional arguments
def my_sum(*args):
    """Sum any number of values."""
    print(f"args = {args}")        # It's a tuple!
    total = 0
    for n in args:
        total += n
    return total

print(my_sum(1, 2, 3))          # args = (1, 2, 3) → 6
print(my_sum(10, 20, 30, 40))   # args = (10, 20, 30, 40) → 100
print(my_sum())                 # args = () → 0

# **kwargs: accept any number of keyword arguments
def describe(**kwargs):
    """Describe something using keyword arguments."""
    print(f"kwargs = {kwargs}")    # It's a dict!
    for key, value in kwargs.items():
        print(f"  {key}: {value}")

describe(name="Python", version=3.12, creator="Guido")
# kwargs = {'name': 'Python', 'version': 3.12, 'creator': 'Guido'}
#   name: Python
#   version: 3.12
#   creator: Guido

# Combining regular, *args, and **kwargs
def super_func(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Extra positional: {args}")
    print(f"Extra keyword: {kwargs}")

super_func("hello", 1, 2, 3, color="red", size="large")`,language:"python"},{type:"heading",level:2,text:"Higher-Order Functions: map, filter, reduce"},{type:"text",content:"Functions that take other functions as arguments are called **higher-order functions**. Python has several built-in ones:"},{type:"code",code:`# map() — apply a function to every element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)    # [1, 4, 9, 16, 25]

# Same as: [x**2 for x in numbers]  (list comprehension — usually preferred)

# filter() — keep elements where function returns True
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)       # [2, 4, 6, 8, 10]

# Same as: [x for x in numbers if x % 2 == 0]

# Combining map and filter
result = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers)))
print(result)     # [4, 16, 36, 64, 100]

# Same as: [x**2 for x in numbers if x % 2 == 0]  (cleaner!)

# Using functions as arguments (passing functions around)
def apply_operation(numbers, operation):
    return [operation(n) for n in numbers]

result = apply_operation([1, 2, 3, 4], lambda x: x * 3)
print(result)     # [3, 6, 9, 12]`,language:"python"},{type:"callout",variant:"info",title:"List Comprehensions vs map/filter",content:"Python developers generally prefer **list comprehensions** over `map()` and `filter()` because they're more readable:\n\n`list(map(lambda x: x**2, nums))` → `[x**2 for x in nums]`\n`list(filter(lambda x: x > 0, nums))` → `[x for x in nums if x > 0]`\n\nBut knowing `map()` and `filter()` is still valuable — you'll see them in existing code."},{type:"heading",level:2,text:"Recursion — Functions that Call Themselves"},{type:"code",code:`# Recursion: a function that calls itself
def factorial(n):
    """Calculate n! recursively."""
    if n <= 1:          # Base case: stop recursion
        return 1
    return n * factorial(n - 1)  # Recursive case

print(factorial(5))   # 5 * 4 * 3 * 2 * 1 = 120
print(factorial(10))  # 3628800

# How it works (unwinding):
# factorial(5) = 5 * factorial(4)
#              = 5 * 4 * factorial(3)
#              = 5 * 4 * 3 * factorial(2)
#              = 5 * 4 * 3 * 2 * factorial(1)
#              = 5 * 4 * 3 * 2 * 1
#              = 120

# Fibonacci (classic recursion example — but slow!)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

for i in range(10):
    print(fib(i), end=" ")
print()  # 0 1 1 2 3 5 8 13 21 34

# Sum of digits (recursive)
def digit_sum(n):
    if n < 10:
        return n
    return n % 10 + digit_sum(n // 10)

print(digit_sum(12345))  # 15`,language:"python"},{type:"callout",variant:"warning",title:"Every Recursion Needs a Base Case!",content:"Without a **base case** (the condition that stops recursion), you get infinite recursion → `RecursionError: maximum recursion depth exceeded`. Python limits recursion to ~1000 calls by default. For deep recursion, loops are often better."},{type:"heading",level:2,text:"List Comprehensions — Concise List Building"},{type:"code",code:`# List comprehension: [expression for item in iterable]
squares = [x**2 for x in range(1, 6)]
print(squares)    # [1, 4, 9, 16, 25]

# With condition: [expression for item in iterable if condition]
evens = [x for x in range(20) if x % 2 == 0]
print(evens)      # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Transform and filter
names = ["Alice", "bob", "CHARLIE", "diana"]
capitalized = [name.capitalize() for name in names if len(name) > 3]
print(capitalized)  # ['Alice', 'Charlie', 'Diana']

# Nested comprehension (flattening)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Dictionary comprehension
word = "mississippi"
freq = {char: word.count(char) for char in set(word)}
print(freq)  # {'m': 1, 'i': 4, 's': 4, 'p': 2}

# Set comprehension
nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique_squares = {x**2 for x in nums}
print(unique_squares)  # {1, 4, 9, 16}`,language:"python"},{type:"heading",level:2,text:"Functions Are Objects"},{type:"code",code:`# In Python, functions are "first-class objects"
# They can be assigned to variables, passed as arguments, returned

def greet(name):
    return f"Hello, {name}!"

# Assign function to a variable
say_hi = greet
print(say_hi("World"))  # Hello, World!

# Store functions in a data structure
def add(a, b): return a + b
def sub(a, b): return a - b
def mul(a, b): return a * b

operations = {
    "+": add,
    "-": sub,
    "*": mul,
}

# Use the dictionary to dispatch
op = "+"
result = operations[op](10, 3)
print(f"10 {op} 3 = {result}")  # 10 + 3 = 13

# Function that returns a function (closure)
def make_multiplier(factor):
    def multiply(n):
        return n * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Explore advanced function concepts!

# 1. Lambda with sorting
students = [
    ("Alice", 85, "Math"),
    ("Bob", 92, "Science"),
    ("Charlie", 78, "Math"),
    ("Diana", 95, "Science"),
]

# Sort by score descending
by_score = sorted(students, key=lambda s: s[1], reverse=True)
print("By score:", [f"{s[0]}:{s[1]}" for s in by_score])

# 2. *args example
def average(*args):
    if not args:
        return 0
    return sum(args) / len(args)

print(f"\\nAverage: {average(85, 92, 78, 95):.1f}")

# 3. List comprehension power
nums = range(1, 21)
fizzbuzz = [
    "FizzBuzz" if n % 15 == 0
    else "Fizz" if n % 3 == 0
    else "Buzz" if n % 5 == 0
    else str(n)
    for n in nums
]
print(f"\\nFizzBuzz: {\\", \\".join(fizzbuzz)}")

# 4. Recursive power
def power(base, exp):
    if exp == 0:
        return 1
    return base * power(base, exp - 1)

print(f"\\n2^10 = {power(2, 10)}")`,instructions:"Try writing a recursive function to reverse a string, or create a function factory."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-advancedfn",title:"Advanced Functions Quiz",questions:[{type:"predict-output",code:`f = lambda x, y: x ** y
print(f(2, 3))`,options:["6","8","5","23"],correctIndex:1,explanation:"The lambda computes x**y. 2**3 = 8."},{type:"predict-output",code:`def foo(*args):
    return len(args)

print(foo(1, 2, 3, 4, 5))`,options:["1","5","(1, 2, 3, 4, 5)","Error"],correctIndex:1,explanation:"*args collects all arguments into a tuple. len((1,2,3,4,5)) = 5."},{type:"predict-output",code:`result = [x * 2 for x in range(5) if x % 2 != 0]
print(result)`,options:["[0, 2, 4, 6, 8]","[2, 6]","[1, 3]","[0, 4, 8]"],correctIndex:1,explanation:"range(5) gives 0,1,2,3,4. Filter x%2!=0 gives 1,3. Multiply by 2: [2, 6]."},{type:"mcq",question:"What is required to prevent infinite recursion?",options:["A return statement","A base case","A loop inside the function","The global keyword"],correctIndex:1,explanation:"Every recursive function needs a BASE CASE — a condition where it stops calling itself and returns a direct value."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-advancedfn",title:"Mini Calculator with Dispatch",difficulty:"hard",description:"Create a calculator that uses a dictionary to dispatch operations. Support +, -, *, /, and ** (power). Return an error message for division by zero and unknown operators.",starterCode:`# Mini Calculator with function dispatch
def calculator(a, op, b):
    operations = {
        "+": lambda x, y: x + y,
        "-": lambda x, y: x - y,
        "*": lambda x, y: x * y,
        "/": lambda x, y: "Error: Division by zero" if y == 0 else x / y,
        "**": lambda x, y: x ** y,
    }
    
    if op not in operations:
        return f"Error: Unknown operator '{op}'"
    return operations[op](a, b)

# Test cases
tests = [
    (10, "+", 5),
    (10, "-", 3),
    (4, "*", 7),
    (15, "/", 4),
    (10, "/", 0),
    (2, "**", 8),
    (5, "%", 3),
]

for a, op, b in tests:
    result = calculator(a, op, b)
    print(f"  {a} {op} {b} = {result}")`,testCases:[{input:"",expected:`  10 + 5 = 15
  10 - 3 = 7
  4 * 7 = 28
  15 / 4 = 3.75
  10 / 0 = Error: Division by zero
  2 ** 8 = 256
  5 % 3 = Error: Unknown operator '%'`}],hints:["Use a dictionary mapping operator strings to lambda functions","Check for unknown operators with `if op not in operations`","Handle division by zero inside the lambda or with a separate check"],solution:`def calculator(a, op, b):
    operations = {
        "+": lambda x, y: x + y,
        "-": lambda x, y: x - y,
        "*": lambda x, y: x * y,
        "/": lambda x, y: "Error: Division by zero" if y == 0 else x / y,
        "**": lambda x, y: x ** y,
    }
    if op not in operations:
        return f"Error: Unknown operator \\'{op}\\'"
    return operations[op](a, b)`}}],Ae=[{type:"heading",level:1,text:"Lists — Python's Workhorse Data Structure"},{type:"text",content:"A **list** is an ordered, mutable collection that can hold items of any type. Lists are Python's most versatile data structure — they're used everywhere: storing data, building results, processing sequences, and much more. If you only learn one data structure well, make it lists."},{type:"heading",level:2,text:"Creating Lists"},{type:"code",code:`# Empty list
empty = []
also_empty = list()

# List with values
numbers = [1, 2, 3, 4, 5]
names = ["Alice", "Bob", "Charlie"]
mixed = [1, "hello", 3.14, True, None]   # Any types!

# List from other sequences
from_string = list("Python")    # ['P', 'y', 't', 'h', 'o', 'n']
from_range = list(range(5))     # [0, 1, 2, 3, 4]
from_tuple = list((10, 20, 30)) # [10, 20, 30]

# List comprehension (we'll cover this more later)
squares = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]

# Repeated elements
zeros = [0] * 5          # [0, 0, 0, 0, 0]
pattern = [1, 2] * 3     # [1, 2, 1, 2, 1, 2]

print(f"Numbers: {numbers}")
print(f"Mixed: {mixed}")
print(f"From string: {from_string}")`,language:"python"},{type:"heading",level:2,text:"Indexing & Slicing"},{type:"code",code:`colors = ["red", "green", "blue", "yellow", "purple"]

# Positive indexing (0-based)
print(colors[0])    # red (first)
print(colors[2])    # blue (third)
print(colors[4])    # purple (last, but fragile)

# Negative indexing (from the end)
print(colors[-1])   # purple (last — preferred!)
print(colors[-2])   # yellow (second to last)

# Slicing: list[start:stop:step]
print(colors[1:4])    # ['green', 'blue', 'yellow'] — indices 1,2,3
print(colors[:3])     # ['red', 'green', 'blue'] — first 3
print(colors[2:])     # ['blue', 'yellow', 'purple'] — from index 2
print(colors[::2])    # ['red', 'blue', 'purple'] — every other
print(colors[::-1])   # ['purple', 'yellow', 'blue', 'green', 'red'] — reversed!

# Slicing creates a COPY (new list)
first_three = colors[:3]
first_three[0] = "CHANGED"
print(colors[0])     # red — original unchanged!`,language:"python"},{type:"heading",level:2,text:"Lists Are Mutable"},{type:"text",content:"Unlike strings, lists can be **modified in place** — you can change, add, or remove elements without creating a new list:"},{type:"code",code:`# Modifying elements
fruits = ["apple", "banana", "cherry"]
fruits[1] = "blueberry"       # Change one element
print(fruits)  # ['apple', 'blueberry', 'cherry']

# Modifying a slice
numbers = [1, 2, 3, 4, 5]
numbers[1:4] = [20, 30, 40]   # Replace a range
print(numbers)  # [1, 20, 30, 40, 5]

# Insert elements via slice assignment
letters = ['a', 'd', 'e']
letters[1:1] = ['b', 'c']     # Insert without removing
print(letters)  # ['a', 'b', 'c', 'd', 'e']

# Delete elements via slice
numbers = [1, 2, 3, 4, 5]
numbers[1:3] = []             # Remove indices 1-2
print(numbers)  # [1, 4, 5]`,language:"python"},{type:"callout",variant:"danger",title:"Aliasing — Two Names, One List!",content:"When you assign a list to a new variable, both variables point to the **same** list in memory. Modifying one affects the other!\n\n`a = [1, 2, 3]`\n`b = a`  ← b is an alias, NOT a copy!\n`b.append(4)`\n`print(a)` → `[1, 2, 3, 4]` — a changed too!\n\nTo make an independent copy: `b = a.copy()` or `b = a[:]`"},{type:"heading",level:2,text:"Essential List Methods"},{type:"code",code:`nums = [3, 1, 4, 1, 5, 9, 2, 6]

# Adding elements
nums.append(7)         # Add to the end: [..., 7]
nums.insert(0, 0)      # Insert at index 0: [0, 3, 1, ...]
nums.extend([8, 9])    # Add multiple: [..., 8, 9]
print(nums)

# Removing elements
nums.remove(1)         # Remove FIRST occurrence of 1
popped = nums.pop()    # Remove & return last element
popped_at = nums.pop(0)  # Remove & return element at index 0
print(f"Popped: {popped}, At index 0: {popped_at}")

# Finding
print(nums.index(4))     # Index of first 4
print(nums.count(1))     # How many 1s?
print(5 in nums)         # Is 5 present? True/False

# Sorting
nums.sort()              # Sort in-place (modifies the list)
print(nums)
nums.sort(reverse=True)  # Sort descending
print(nums)

# sorted() creates a NEW sorted list (original unchanged)
original = [3, 1, 4, 1, 5]
new_sorted = sorted(original)
print(f"Original: {original}")    # [3, 1, 4, 1, 5]
print(f"Sorted: {new_sorted}")    # [1, 1, 3, 4, 5]

# Reversing
nums.reverse()           # Reverse in-place
print(list(reversed(nums)))  # New reversed list`,language:"python"},{type:"callout",variant:"warning",title:".sort() vs sorted() — Crucial Difference!",content:"`list.sort()` sorts **in place** and returns `None`.\n`sorted(list)` returns a **new sorted list** and leaves the original unchanged.\n\nCommon bug: `my_list = my_list.sort()` — this sets my_list to None!"},{type:"heading",level:2,text:"Useful Built-in Functions"},{type:"code",code:`nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

print(len(nums))        # 11 — number of elements
print(sum(nums))        # 44 — sum of all elements
print(min(nums))        # 1 — minimum
print(max(nums))        # 9 — maximum
print(sum(nums) / len(nums))  # 4.0 — average

# any() and all()
vals = [0, 1, 2, 3]
print(any(vals))    # True — at least one truthy value
print(all(vals))    # False — 0 is falsy

bools = [True, True, True]
print(all(bools))   # True — all are True

# zip() with lists
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# enumerate()
for i, name in enumerate(names, 1):
    print(f"#{i}: {name}")`,language:"python"},{type:"heading",level:2,text:"Nested Lists (Matrices)"},{type:"code",code:`# A list of lists = 2D structure (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access: matrix[row][col]
print(matrix[0][0])    # 1 (top-left)
print(matrix[1][2])    # 6 (row 1, col 2)
print(matrix[2][1])    # 8 (row 2, col 1)

# Iterate through a matrix
for row in matrix:
    for val in row:
        print(f"{val:3d}", end="")
    print()
#   1  2  3
#   4  5  6
#   7  8  9

# Flatten a matrix
flat = [val for row in matrix for val in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Transpose a matrix
transposed = [[matrix[j][i] for j in range(3)] for i in range(3)]
for row in transposed:
    print(row)
# [1, 4, 7]
# [2, 5, 8]
# [3, 6, 9]`,language:"python"},{type:"callout",variant:"danger",title:"Nested List Trap: [[0]*3]*3",content:"`[[0]*3]*3` creates 3 references to the SAME inner list!\n`matrix = [[0]*3]*3; matrix[0][0] = 5` → All rows show [5, 0, 0]!\n\nCorrect way: `[[0]*3 for _ in range(3)]` — each row is independent."},{type:"heading",level:2,text:"Strings and Lists"},{type:"code",code:`# split() — string → list of words
sentence = "Python is a wonderful language"
words = sentence.split()       # Split on whitespace
print(words)  # ['Python', 'is', 'a', 'wonderful', 'language']

# Split on custom delimiter
data = "Alice,30,New York"
parts = data.split(",")        # Split on comma
print(parts)  # ['Alice', '30', 'New York']

# join() — list → string
words = ["Hello", "World"]
result = " ".join(words)       # Join with space
print(result)  # Hello World

# join with other separators
print(",".join(["a", "b", "c"]))    # a,b,c
print(" → ".join(["start", "middle", "end"]))  # start → middle → end

# Practical: clean up a sentence
text = "  Hello   World  Python  "
cleaned = " ".join(text.split())
print(cleaned)  # Hello World Python`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Explore lists!

# 1. List operations
nums = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {nums}")
print(f"Sorted:   {sorted(nums)}")
print(f"Sum: {sum(nums)}, Avg: {sum(nums)/len(nums):.1f}")

# 2. List comprehensions
matrix = [[i*3+j+1 for j in range(3)] for i in range(3)]
print("\\nMatrix:")
for row in matrix:
    print(f"  {row}")

# 3. Stack operations (LIFO)
stack = []
for item in ["A", "B", "C", "D"]:
    stack.append(item)
    print(f"  Push {item}: {stack}")

while stack:
    item = stack.pop()
    print(f"  Pop {item}: {stack}")

# 4. Unique elements while preserving order
data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
seen = set()
unique = []
for x in data:
    if x not in seen:
        seen.add(x)
        unique.append(x)
print(f"\\nUnique (ordered): {unique}")`,instructions:"Experiment with list methods, comprehensions, and nested lists."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-lists",title:"Lists Quiz",questions:[{type:"predict-output",code:`a = [1, 2, 3]
b = a
b.append(4)
print(a)`,options:["[1, 2, 3]","[1, 2, 3, 4]","[4]","Error"],correctIndex:1,explanation:"b = a creates an ALIAS (both point to the same list). Appending to b also modifies a. Output: [1, 2, 3, 4]."},{type:"predict-output",code:`x = [1, 2, 3, 4, 5]
print(x[1:4])`,options:["[1, 2, 3, 4]","[2, 3, 4]","[2, 3, 4, 5]","[1, 2, 3]"],correctIndex:1,explanation:"Slicing x[1:4] gives elements at indices 1, 2, 3 (stop index is exclusive). Result: [2, 3, 4]."},{type:"predict-output",code:`nums = [3, 1, 4]
result = nums.sort()
print(result)`,options:["[1, 3, 4]","None","[3, 1, 4]","Error"],correctIndex:1,explanation:".sort() sorts in-place and returns None! The list is sorted, but the return value is None."},{type:"predict-output",code:`words = "Hello World".split()
print("-".join(words))`,options:["Hello World","Hello-World","['Hello', 'World']","H-e-l-l-o"],correctIndex:1,explanation:'.split() creates ["Hello", "World"]. "-".join() connects them with hyphens: "Hello-World".'}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-lists",title:"List Statistics",difficulty:"medium",description:"Write functions to compute statistics on a list of numbers: mean, median (middle value when sorted), and mode (most frequent value). Don't use any imports.",starterCode:`def mean(nums):
    return sum(nums) / len(nums)

def median(nums):
    sorted_nums = sorted(nums)
    n = len(sorted_nums)
    mid = n // 2
    if n % 2 == 0:
        return (sorted_nums[mid - 1] + sorted_nums[mid]) / 2
    return sorted_nums[mid]

def mode(nums):
    freq = {}
    for n in nums:
        freq[n] = freq.get(n, 0) + 1
    max_count = max(freq.values())
    modes = [k for k, v in freq.items() if v == max_count]
    return modes[0]  # Return first mode if tie

# Test
data = [4, 8, 6, 5, 3, 8, 9, 4, 8, 2]
print(f"Data: {data}")
print(f"Mean: {mean(data):.2f}")
print(f"Median: {median(data):.2f}")
print(f"Mode: {mode(data)}")`,testCases:[{input:"",expected:`Data: [4, 8, 6, 5, 3, 8, 9, 4, 8, 2]
Mean: 5.70
Median: 5.50
Mode: 8`}],hints:["Mean = sum / count","Median: sort the list, find the middle element(s)","Mode: count occurrences with a dictionary, find the max"],solution:`def mean(nums): return sum(nums) / len(nums)
def median(nums):
    s = sorted(nums)
    n = len(s)
    mid = n // 2
    return (s[mid-1] + s[mid]) / 2 if n % 2 == 0 else s[mid]
def mode(nums):
    freq = {}
    for n in nums:
        freq[n] = freq.get(n, 0) + 1
    return max(freq, key=freq.get)`}}],Se=[{type:"heading",level:1,text:"List Patterns & Comprehensions"},{type:"text",content:"Now that you know the basics of lists, let's master the **patterns** that make Python list handling elegant and powerful. List comprehensions, stack/queue patterns, copying strategies, and common algorithmic patterns will transform how you think about data processing."},{type:"heading",level:2,text:"List Comprehensions — Deep Dive"},{type:"code",code:`# Basic: [expression for item in iterable]
squares = [x**2 for x in range(1, 11)]
print(squares)  # [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# With filter: [expression for item in iterable if condition]
even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)  # [4, 16, 36, 64, 100]

# With if-else (note: no filter, just expression)
labels = ["even" if x % 2 == 0 else "odd" for x in range(1, 6)]
print(labels)  # ['odd', 'even', 'odd', 'even', 'odd']

# Nested iteration (like nested for loops)
pairs = [(i, j) for i in range(3) for j in range(3)]
print(pairs)  # [(0,0), (0,1), (0,2), (1,0), ...]

# Practical: flatten a 2D list
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [x for row in matrix for x in row]
print(flat)  # [1, 2, 3, 4, 5, 6]

# String processing
sentence = "Hello World Python"
first_letters = [word[0] for word in sentence.split()]
print(first_letters)  # ['H', 'W', 'P']
print("".join(first_letters))  # HWP (acronym)`,language:"python"},{type:"heading",level:2,text:"Stack and Queue Patterns"},{type:"code",code:`# STACK — Last In, First Out (LIFO)
# Think: stack of plates
stack = []
stack.append("A")    # Push
stack.append("B")    # Push
stack.append("C")    # Push
print(f"Stack: {stack}")       # ['A', 'B', 'C']
print(f"Pop: {stack.pop()}")   # C (last in, first out)
print(f"Pop: {stack.pop()}")   # B
print(f"Stack: {stack}")       # ['A']

# Practical: balanced parentheses checker
def is_balanced(text):
    stack = []
    pairs = {"(": ")", "[": "]", "{": "}"}
    for char in text:
        if char in pairs:         # Opening bracket
            stack.append(char)
        elif char in pairs.values():  # Closing bracket
            if not stack:
                return False
            if pairs[stack.pop()] != char:
                return False
    return len(stack) == 0

print(is_balanced("({[]})"))   # True
print(is_balanced("([)]"))     # False
print(is_balanced("(("))       # False

# QUEUE — First In, First Out (FIFO)
# Think: line at a store
from collections import deque  # Efficient queue
queue = deque()
queue.append("Customer 1")     # Enqueue (join line)
queue.append("Customer 2")
queue.append("Customer 3")
print(f"Queue: {list(queue)}")
print(f"Served: {queue.popleft()}")  # Customer 1 (first in, first out)
print(f"Queue: {list(queue)}")`,language:"python"},{type:"heading",level:2,text:"Shallow vs Deep Copy"},{type:"code",code:`# The aliasing problem
original = [1, 2, 3]
alias = original              # Same object!
alias.append(4)
print(original)               # [1, 2, 3, 4] — modified!

# Shallow copy: 3 ways
original = [1, 2, 3]
copy1 = original.copy()       # Method 1: .copy()
copy2 = original[:]           # Method 2: slice
copy3 = list(original)        # Method 3: list()

copy1.append(99)
print(original)               # [1, 2, 3] — unchanged!

# Shallow copy PROBLEM with nested lists
nested = [[1, 2], [3, 4]]
shallow = nested.copy()
shallow[0][0] = 999           # Modifies the inner list!
print(nested)                 # [[999, 2], [3, 4]] — inner list changed!

# Deep copy: copies EVERYTHING
import copy
nested = [[1, 2], [3, 4]]
deep = copy.deepcopy(nested)
deep[0][0] = 999
print(nested)                 # [[1, 2], [3, 4]] — safe!`,language:"python"},{type:"callout",variant:"tip",title:"When to Use Which Copy",content:"**Assignment** (`b = a`): When you WANT both variables to share the same list.\n**Shallow copy** (`.copy()`, `[:]`): For flat lists (no nested lists).\n**Deep copy** (`copy.deepcopy()`): For nested/complex structures where inner objects must also be independent."},{type:"heading",level:2,text:"Common List Algorithms"},{type:"code",code:`# 1. Two-pointer technique: remove duplicates from sorted list
def remove_duplicates(sorted_list):
    if not sorted_list:
        return []
    result = [sorted_list[0]]
    for item in sorted_list[1:]:
        if item != result[-1]:
            result.append(item)
    return result

print(remove_duplicates([1, 1, 2, 2, 3, 4, 4, 5]))  # [1, 2, 3, 4, 5]

# 2. Sliding window: maximum sum of k consecutive elements
def max_sum_subarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

print(max_sum_subarray([1, 4, 2, 10, 2, 3, 1, 0, 20], 3))  # 24

# 3. Frequency counting
def top_frequent(items, n):
    freq = {}
    for item in items:
        freq[item] = freq.get(item, 0) + 1
    sorted_items = sorted(freq.items(), key=lambda x: x[1], reverse=True)
    return sorted_items[:n]

words = "the cat sat on the mat the cat".split()
print(top_frequent(words, 3))  # [('the', 3), ('cat', 2), ('sat', 1)]

# 4. List rotation
def rotate(lst, k):
    k = k % len(lst)
    return lst[-k:] + lst[:-k]

print(rotate([1, 2, 3, 4, 5], 2))  # [4, 5, 1, 2, 3]`,language:"python"},{type:"heading",level:2,text:"Advanced Sorting"},{type:"code",code:`# Custom sort with key function
students = [
    {"name": "Alice", "grade": 85, "age": 20},
    {"name": "Bob", "grade": 92, "age": 19},
    {"name": "Charlie", "grade": 78, "age": 21},
    {"name": "Diana", "grade": 92, "age": 20},
]

# Sort by grade (descending)
by_grade = sorted(students, key=lambda s: s["grade"], reverse=True)
for s in by_grade:
    print(f"  {s['name']}: {s['grade']}")

# Sort by multiple keys: grade desc, then name asc
by_multi = sorted(students, key=lambda s: (-s["grade"], s["name"]))
print("\\nMulti-sort:")
for s in by_multi:
    print(f"  {s['name']}: {s['grade']}")
# Bob: 92, Diana: 92, Alice: 85, Charlie: 78

# Stable sort: Python's sort preserves order of equal elements
# This means you can sort by multiple criteria sequentially`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# List patterns in action!

# 1. Matrix operations
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]

# Matrix addition
result = [[A[i][j] + B[i][j] for j in range(2)] for i in range(2)]
print("A + B =")
for row in result:
    print(f"  {row}")

# 2. Caesar cipher
def caesar_encrypt(text, shift):
    result = []
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result.append(chr((ord(char) - base + shift) % 26 + base))
        else:
            result.append(char)
    return "".join(result)

message = "Hello World"
encrypted = caesar_encrypt(message, 3)
decrypted = caesar_encrypt(encrypted, -3)
print(f"\\nOriginal:  {message}")
print(f"Encrypted: {encrypted}")
print(f"Decrypted: {decrypted}")

# 3. Group consecutive elements
data = [1, 1, 2, 2, 2, 3, 1, 1]
groups = []
current = [data[0]]
for item in data[1:]:
    if item == current[-1]:
        current.append(item)
    else:
        groups.append(current)
        current = [item]
groups.append(current)
print(f"\\nGroups: {groups}")`,instructions:"Try implementing your own list algorithms — sorting, searching, or transformation patterns."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-listpatterns",title:"List Patterns Quiz",questions:[{type:"predict-output",code:`result = [x for x in range(10) if x % 3 == 0]
print(result)`,options:["[0, 3, 6, 9]","[3, 6, 9]","[0, 3, 6]","[1, 2, 4, 5, 7, 8]"],correctIndex:0,explanation:"range(10) gives 0-9. Filter by x%3==0: 0, 3, 6, 9. Note that 0%3==0 is True!"},{type:"predict-output",code:`a = [[1, 2], [3, 4]]
b = a.copy()
b[0][0] = 99
print(a[0][0])`,options:["1","99","Error","[[99, 2], [3, 4]]"],correctIndex:1,explanation:".copy() makes a SHALLOW copy. The inner lists are still shared. Modifying b[0][0] also modifies a[0][0]."},{type:"mcq",question:"What does a stack's pop() remove?",options:["The first element added","The last element added","A random element","The smallest element"],correctIndex:1,explanation:"A stack is LIFO (Last In, First Out). pop() removes the most recently added element."},{type:"predict-output",code:`words = ["hello", "world"]
result = [w.upper() for w in words]
print(result)`,options:['["hello", "world"]','["HELLO", "WORLD"]',"HELLO WORLD","Error"],correctIndex:1,explanation:"The list comprehension applies .upper() to each word, creating a new list of uppercase strings."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-listpatterns",title:"Flatten & Group",difficulty:"hard",description:"Write two functions: (1) flatten() that converts a nested list of any depth into a flat list, and (2) chunk() that splits a flat list into groups of size n.",starterCode:`# Flatten a nested list (recursive)
def flatten(nested):
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

# Chunk a list into groups of n
def chunk(lst, n):
    return [lst[i:i+n] for i in range(0, len(lst), n)]

# Test flatten
deep = [1, [2, 3], [4, [5, 6]], [[7, [8, 9]]]]
print(f"Flatten: {flatten(deep)}")

# Test chunk
data = list(range(1, 11))
print(f"Chunk by 3: {chunk(data, 3)}")
print(f"Chunk by 4: {chunk(data, 4)}")`,testCases:[{input:"",expected:`Flatten: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Chunk by 3: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
Chunk by 4: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]]`}],hints:["For flatten: use recursion. If an item is a list, flatten it; otherwise append it.","For chunk: use slicing with range(0, len(lst), n)","isinstance(item, list) checks if something is a list"],solution:`def flatten(nested):
    result = []
    for item in nested:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result

def chunk(lst, n):
    return [lst[i:i+n] for i in range(0, len(lst), n)]`}}],Fe=[{type:"heading",level:1,text:"Tuples — Immutable Sequences"},{type:"text",content:"Tuples are Python's **immutable** ordered sequences. They look like lists but cannot be modified after creation. This immutability makes them faster, safer, and usable as dictionary keys and set members. Tuples are ideal for representing fixed collections of related values — like coordinates, RGB colors, or database records."},{type:"heading",level:2,text:"Creating Tuples"},{type:"code",code:`# Parentheses (most common)
point = (3, 4)
rgb = (255, 128, 0)
print(point)     # (3, 4)
print(type(rgb)) # <class 'tuple'>

# Without parentheses — it's the COMMAS that make a tuple!
coords = 10, 20, 30
print(type(coords))  # <class 'tuple'>

# Single-element tuple — MUST have trailing comma!
single = (42,)
print(type(single))  # <class 'tuple'>
print(len(single))   # 1

# Without comma — NOT a tuple!
not_tuple = (42)
print(type(not_tuple))  # <class 'int'>

# Empty tuple
empty = ()
print(type(empty))  # <class 'tuple'>
print(len(empty))   # 0

# tuple() constructor — from any iterable
from_list = tuple([1, 2, 3])
from_str = tuple("hello")
from_range = tuple(range(5))
print(from_list)    # (1, 2, 3)
print(from_str)     # ('h', 'e', 'l', 'l', 'o')
print(from_range)   # (0, 1, 2, 3, 4)`,language:"python"},{type:"callout",variant:"warning",title:"The Single-Element Trap",content:"`(42)` is just the integer 42 in parentheses (like math grouping). To make a single-element tuple, you MUST include a trailing comma: `(42,)`. This is the most common tuple mistake."},{type:"heading",level:2,text:"Indexing, Slicing & Operations"},{type:"code",code:`# Indexing — same as lists
colors = ("red", "green", "blue", "yellow")
print(colors[0])     # red
print(colors[-1])    # yellow

# Slicing — returns a new tuple
print(colors[1:3])   # ('green', 'blue')
print(colors[:2])    # ('red', 'green')
print(colors[::-1])  # ('yellow', 'blue', 'green', 'red')

# Concatenation — creates a NEW tuple
a = (1, 2)
b = (3, 4)
c = a + b
print(c)  # (1, 2, 3, 4)

# Repetition
print((0,) * 5)  # (0, 0, 0, 0, 0)

# Membership
print("red" in colors)    # True
print("purple" in colors) # False

# Length, min, max, sum
nums = (10, 30, 20, 50, 40)
print(f"len: {len(nums)}")    # 5
print(f"min: {min(nums)}")    # 10
print(f"max: {max(nums)}")    # 50
print(f"sum: {sum(nums)}")    # 150

# count and index (only 2 methods!)
data = (1, 2, 3, 2, 1, 2)
print(data.count(2))    # 3
print(data.index(3))    # 2 (first occurrence)`,language:"python"},{type:"heading",level:2,text:"Immutability — What It Really Means"},{type:"code",code:`# Tuples CANNOT be modified
point = (3, 4)
# point[0] = 5       # TypeError: tuple doesn't support item assignment
# point.append(6)    # AttributeError: tuple has no append
# del point[0]       # TypeError: tuple doesn't support item deletion

# BUT — if a tuple CONTAINS a mutable object...
tricky = ([1, 2], [3, 4])
# tricky[0] = [5, 6]    # TypeError (can't replace the list)
tricky[0].append(99)     # Works! The list itself is mutable
print(tricky)            # ([1, 2, 99], [3, 4])

# The tuple still references the SAME list objects
# The references didn't change — only the list's contents did

# Why this matters:
# "Immutable" means the tuple's references can't change,
# NOT that the referenced objects can't change`,language:"python"},{type:"callout",variant:"danger",title:"Mutable Objects in Tuples",content:"A tuple containing a list is immutable in that you cannot replace the list, but the list itself can still be modified. Avoid putting mutable objects in tuples if you need truly frozen data."},{type:"heading",level:2,text:"Packing and Unpacking"},{type:"code",code:`# Packing — combining values into a tuple
coordinates = 10, 20, 30   # Tuple packing
print(coordinates)           # (10, 20, 30)

# Unpacking — extracting values from a tuple
x, y, z = coordinates
print(f"x={x}, y={y}, z={z}")  # x=10, y=20, z=30

# Swapping variables (tuple packing + unpacking)
a, b = 5, 10
a, b = b, a     # Right side creates tuple (10, 5), left side unpacks
print(f"a={a}, b={b}")  # a=10, b=5

# Unpacking with * (star/splat operator)
first, *rest = [1, 2, 3, 4, 5]
print(first)  # 1
print(rest)   # [2, 3, 4, 5]  (always a list!)

*start, last = [1, 2, 3, 4, 5]
print(start)  # [1, 2, 3, 4]
print(last)   # 5

first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5

# Unpacking in function returns
def divide(a, b):
    return a // b, a % b  # Returns a tuple

quotient, remainder = divide(17, 5)
print(f"17 / 5 = {quotient} remainder {remainder}")

# Ignoring values with _
first, _, _, last = (10, 20, 30, 40)
print(f"first={first}, last={last}")  # first=10, last=40`,language:"python"},{type:"callout",variant:"tip",title:"The Swap Trick",content:"`a, b = b, a` works because Python evaluates the entire right side first (creating a tuple), then unpacks it to the left side. No temporary variable needed!"},{type:"heading",level:2,text:"Tuples vs Lists — When to Use Which"},{type:"list",items:["**Tuples are faster** — creation and access are slightly faster due to immutability optimizations","**Tuples use less memory** — Python can optimize storage for immutable objects","**Tuples are hashable** (if all elements are hashable) — can be dict keys and set members",'**Tuples signal intent** — "this collection should not change"',"**Lists are for homogeneous collections** — items of the same type (list of scores, list of names)","**Tuples are for heterogeneous records** — items of different types (name, age, grade)"]},{type:"code",code:`# Tuple as dictionary key (lists CANNOT be keys)
locations = {}
locations[(40.7128, -74.0060)] = "New York"
locations[(51.5074, -0.1278)] = "London"
locations[(35.6762, 139.6503)] = "Tokyo"

for coord, city in locations.items():
    print(f"  {city}: {coord}")

# Tuple as set member
visited = {(1, 0), (0, 1), (1, 1)}
if (1, 0) in visited:
    print("Already visited (1, 0)")

# Lists CANNOT do this:
# bad_dict = {[1, 2]: "value"}  # TypeError: unhashable type: 'list'

# Named tuples — for self-documenting code
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(f"x={p.x}, y={p.y}")  # x=3, y=4
print(f"Point: {p}")         # Point(x=3, y=4)

# Named tuples are still tuples
print(isinstance(p, tuple))  # True
print(p[0], p[1])            # 3 4

# Practical: Student records
Student = namedtuple("Student", ["name", "age", "grade"])
students = [
    Student("Alice", 20, "A"),
    Student("Bob", 19, "B+"),
    Student("Charlie", 21, "A-"),
]
for s in students:
    print(f"  {s.name} (age {s.age}): {s.grade}")`,language:"python"},{type:"heading",level:2,text:"Practical Tuple Patterns"},{type:"code",code:`# 1. Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([4, 7, 1, 9, 2])
print(f"Min: {lo}, Max: {hi}")  # Min: 1, Max: 9

# 2. Enumerate returns tuples
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")

# 3. zip returns tuples
names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"  {name}: {score}")

# 4. Sorting by tuple comparison
# Tuples compare element by element
print((1, 2) < (1, 3))   # True (first elements equal, compare second)
print((1, 2) < (2, 0))   # True (first element 1 < 2)

students = [("Charlie", 85), ("Alice", 92), ("Bob", 92)]
# Sort by grade (desc), then name (asc)
students.sort(key=lambda s: (-s[1], s[0]))
for name, grade in students:
    print(f"  {name}: {grade}")
# Alice: 92, Bob: 92, Charlie: 85

# 5. Tuple as lightweight record
def parse_date(date_str):
    parts = date_str.split("-")
    return int(parts[0]), int(parts[1]), int(parts[2])

year, month, day = parse_date("2024-03-15")
print(f"Year: {year}, Month: {month}, Day: {day}")`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with tuples!

# 1. Coordinate geometry
def distance(p1, p2):
    return ((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2) ** 0.5

a = (0, 0)
b = (3, 4)
print(f"Distance from {a} to {b}: {distance(a, b)}")

# 2. Tuple unpacking in a loop
student_records = [
    ("Alice", 20, [90, 85, 92]),
    ("Bob", 19, [78, 88, 95]),
    ("Charlie", 21, [82, 79, 88]),
]

for name, age, grades in student_records:
    avg = sum(grades) / len(grades)
    print(f"{name} (age {age}): avg = {avg:.1f}")

# 3. Named tuple
from collections import namedtuple
Color = namedtuple("Color", "r g b")
red = Color(255, 0, 0)
green = Color(0, 255, 0)
blue = Color(0, 0, 255)
for c in [red, green, blue]:
    print(f"  RGB({c.r}, {c.g}, {c.b})")`,instructions:"Try creating your own tuple patterns — coordinates, records, or function return values."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-tuples",title:"Tuples Quiz",questions:[{type:"predict-output",code:`x = (42)
print(type(x).__name__)`,options:["tuple","int","list","Error"],correctIndex:1,explanation:"(42) is just 42 in parentheses — an int. To make a single-element tuple, use (42,) with a trailing comma."},{type:"predict-output",code:`a, *b, c = (1, 2, 3, 4, 5)
print(b)`,options:["(2, 3, 4)","[2, 3, 4]","2 3 4","Error"],correctIndex:1,explanation:"The * operator collects remaining values into a LIST (not a tuple), even when unpacking a tuple."},{type:"mcq",question:"Which of these can be used as a dictionary key?",options:["[1, 2, 3]","{1, 2, 3}","(1, 2, 3)",'{"a": 1}'],correctIndex:2,explanation:"Only hashable (immutable) types can be dict keys. Tuples (with hashable elements) are hashable. Lists, sets, and dicts are not."},{type:"predict-output",code:`t = (1, [2, 3])
t[1].append(4)
print(t)`,options:["Error","(1, [2, 3, 4])","(1, [2, 3])","TypeError"],correctIndex:1,explanation:"The tuple is immutable (can't replace its elements), but the list inside it is mutable. Appending to the list works because we're modifying the list, not the tuple."},{type:"predict-output",code:`a, b = 5, 10
a, b = b, a + b
print(a, b)`,options:["10 15","5 15","10 20","15 10"],correctIndex:0,explanation:"Right side evaluates FIRST: b=10, a+b=5+10=15. Then unpacks: a=10, b=15. Output: 10 15."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-tuples",title:"Contact Book with Tuples",difficulty:"medium",description:"Build a simple contact book that stores contacts as named tuples with name, phone, and email. Implement functions to add, search by name, and display all contacts sorted by name.",starterCode:`from collections import namedtuple

Contact = namedtuple("Contact", ["name", "phone", "email"])

def add_contact(contacts, name, phone, email):
    """Add a new contact (returns new list)"""
    contacts.append(Contact(name, phone, email))
    return contacts

def search(contacts, query):
    """Find contacts whose name contains the query (case-insensitive)"""
    query = query.lower()
    return [c for c in contacts if query in c.name.lower()]

def display(contacts):
    """Display all contacts sorted by name"""
    for c in sorted(contacts, key=lambda c: c.name):
        print(f"  {c.name}: {c.phone} | {c.email}")

# Test it
book = []
book = add_contact(book, "Alice Smith", "555-1234", "alice@email.com")
book = add_contact(book, "Bob Jones", "555-5678", "bob@email.com")
book = add_contact(book, "Alice Wong", "555-9012", "awong@email.com")

print("All contacts:")
display(book)

print("\\nSearch for 'alice':")
results = search(book, "alice")
for c in results:
    print(f"  {c.name}: {c.phone}")`,testCases:[{input:"",expected:`All contacts:
  Alice Smith: 555-1234 | alice@email.com
  Alice Wong: 555-9012 | awong@email.com
  Bob Jones: 555-5678 | bob@email.com

Search for 'alice':
  Alice Smith: 555-1234
  Alice Wong: 555-9012`}],hints:['namedtuple creates a class — call it like Contact("name", "phone", "email")',"Use list comprehension with string methods for search","sorted() with a key function for alphabetical display"],solution:`from collections import namedtuple

Contact = namedtuple("Contact", ["name", "phone", "email"])

def add_contact(contacts, name, phone, email):
    contacts.append(Contact(name, phone, email))
    return contacts

def search(contacts, query):
    query = query.lower()
    return [c for c in contacts if query in c.name.lower()]

def display(contacts):
    for c in sorted(contacts, key=lambda c: c.name):
        print(f"  {c.name}: {c.phone} | {c.email}")`}}],Pe=[{type:"heading",level:1,text:"Dictionaries — Key-Value Data"},{type:"text",content:"Dictionaries are Python's most versatile data structure — they store **key-value pairs** and provide lightning-fast lookups by key. In other languages, they're called hash maps, associative arrays, or objects. Dictionaries are everywhere in Python: configuration files, JSON data, database records, counting, grouping — mastering them is essential."},{type:"heading",level:2,text:"Creating Dictionaries"},{type:"code",code:`# Curly braces with key: value pairs
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "courses": ["Math", "Physics"]
}
print(student)

# Empty dictionary
empty = {}
print(type(empty))  # <class 'dict'> (NOT a set!)

# dict() constructor
from_kwargs = dict(name="Bob", age=19, grade="B+")
print(from_kwargs)  # {'name': 'Bob', 'age': 19, 'grade': 'B+'}

# From list of tuples
from_tuples = dict([('x', 1), ('y', 2), ('z', 3)])
print(from_tuples)  # {'x': 1, 'y': 2, 'z': 3}

# dict.fromkeys() — all keys get the same value
days = dict.fromkeys(["Mon", "Tue", "Wed", "Thu", "Fri"], 0)
print(days)  # {'Mon': 0, 'Tue': 0, 'Wed': 0, ...}

# Keys must be hashable (immutable): str, int, float, tuple, bool
valid = {(1, 2): "tuple key", 42: "int key", True: "bool key"}
print(valid)
# invalid = {[1, 2]: "list key"}  # TypeError!`,language:"python"},{type:"callout",variant:"info",title:"Keys Must Be Unique",content:'If you define duplicate keys, the LAST value wins silently: `{"a": 1, "a": 2}` gives `{"a": 2}`. Also note that `True` and `1` are the same key (since `True == 1`), and so are `False` and `0`.'},{type:"heading",level:2,text:"Accessing & Modifying Values"},{type:"code",code:`student = {"name": "Alice", "age": 20, "grade": "A"}

# Square bracket access
print(student["name"])  # Alice

# KeyError if key doesn't exist!
# print(student["email"])  # KeyError: 'email'

# .get() — safe access with default
print(student.get("email"))          # None (no error)
print(student.get("email", "N/A"))   # N/A (custom default)
print(student.get("name", "N/A"))    # Alice (key exists)

# Adding / modifying
student["email"] = "alice@uni.edu"   # Add new key
student["age"] = 21                  # Modify existing
print(student)

# .setdefault() — set only if key doesn't exist
student.setdefault("grade", "C")     # Already exists, no change
student.setdefault("gpa", 3.8)       # Doesn't exist, sets it
print(f"grade: {student['grade']}")  # A (unchanged)
print(f"gpa: {student['gpa']}")      # 3.8 (newly set)

# Deleting keys
del student["gpa"]                   # Remove key (KeyError if missing)
email = student.pop("email")         # Remove and return value
print(f"Removed email: {email}")
last = student.popitem()             # Remove & return last inserted pair
print(f"Popped: {last}")

# Check existence
print("name" in student)       # True
print("email" in student)      # False (we deleted it)
print("email" not in student)  # True`,language:"python"},{type:"callout",variant:"tip",title:".get() vs [] — Which to Use?",content:"Use `[]` when the key MUST exist (missing key = bug). Use `.get()` when the key might not exist and you have a sensible default. Using `.get()` everywhere hides bugs; using `[]` everywhere causes crashes. Choose wisely."},{type:"heading",level:2,text:"Essential Dictionary Methods"},{type:"code",code:`scores = {"Alice": 92, "Bob": 85, "Charlie": 78}

# .keys(), .values(), .items() — view objects
print(list(scores.keys()))     # ['Alice', 'Bob', 'Charlie']
print(list(scores.values()))   # [92, 85, 78]
print(list(scores.items()))    # [('Alice', 92), ('Bob', 85), ...]

# .update() — merge dictionaries
scores.update({"Diana": 95, "Bob": 90})  # Add Diana, update Bob
print(scores)  # {'Alice': 92, 'Bob': 90, 'Charlie': 78, 'Diana': 95}

# Merge with | operator (Python 3.9+)
base = {"theme": "dark", "lang": "en"}
overrides = {"lang": "fr", "font": 14}
merged = base | overrides  # base values overridden by overrides
print(merged)  # {'theme': 'dark', 'lang': 'fr', 'font': 14}

# .clear() — remove all items
copy = dict(scores)
copy.clear()
print(copy)    # {}
print(scores)  # unchanged (copy was a different dict)

# len() — number of key-value pairs
print(f"Entries: {len(scores)}")  # 4`,language:"python"},{type:"heading",level:2,text:"Iterating Over Dictionaries"},{type:"code",code:`prices = {"apple": 1.50, "banana": 0.75, "cherry": 3.00}

# Iterate over keys (default)
for fruit in prices:
    print(f"  {fruit}")

# Iterate over values
total = 0
for price in prices.values():
    total += price
print(f"Total: \${total:.2f}")  # $5.25

# Iterate over key-value pairs (most common)
for fruit, price in prices.items():
    print(f"  {fruit}: \${price:.2f}")

# Finding keys by value
expensive = [fruit for fruit, price in prices.items() if price > 1.00]
print(f"Expensive: {expensive}") # ['apple', 'cherry']

# Sorting a dictionary
# By key
for k in sorted(prices):
    print(f"  {k}: \${prices[k]:.2f}")

# By value
for k, v in sorted(prices.items(), key=lambda x: x[1]):
    print(f"  {k}: \${v:.2f}")

# Note: dicts preserve insertion order (Python 3.7+)
print("\\nInsertion order preserved:")
ordered = {}
ordered["first"] = 1
ordered["second"] = 2
ordered["third"] = 3
for k in ordered:
    print(f"  {k}")`,language:"python"},{type:"heading",level:2,text:"Nested Dictionaries"},{type:"code",code:`# Complex nested structure
school = {
    "Alice": {
        "age": 20,
        "grades": {"Math": 92, "Physics": 88, "English": 95}
    },
    "Bob": {
        "age": 19,
        "grades": {"Math": 78, "Physics": 82, "English": 90}
    }
}

# Accessing nested values
print(school["Alice"]["grades"]["Math"])  # 92

# Safe nested access
def safe_get(d, *keys):
    """Safely navigate nested dicts"""
    for key in keys:
        if isinstance(d, dict):
            d = d.get(key)
        else:
            return None
    return d

print(safe_get(school, "Alice", "grades", "Math"))     # 92
print(safe_get(school, "Alice", "grades", "Art"))      # None
print(safe_get(school, "Eve", "grades", "Math"))       # None

# Iterating nested dicts
for name, info in school.items():
    avg = sum(info["grades"].values()) / len(info["grades"])
    print(f"  {name} (age {info['age']}): avg = {avg:.1f}")`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Dictionary exploration!

# 1. Phone book
phone_book = {}
phone_book["Alice"] = "555-1234"
phone_book["Bob"] = "555-5678"
phone_book["Charlie"] = "555-9012"

name = "Bob"
if name in phone_book:
    print(f"{name}'s number: {phone_book[name]}")

# 2. Inventory system
inventory = {
    "apple": {"price": 1.50, "stock": 50},
    "banana": {"price": 0.75, "stock": 100},
    "cherry": {"price": 3.00, "stock": 25},
}

print("\\nInventory Report:")
total_value = 0
for item, info in inventory.items():
    value = info["price"] * info["stock"]
    total_value += value
    print(f"  {item}: \${info['price']:.2f} x {info['stock']} = \${value:.2f}")
print(f"Total Inventory Value: \${total_value:.2f}")

# 3. Word frequency
text = "to be or not to be that is the question"
words = text.split()
freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

print("\\nWord Frequencies:")
for word, count in sorted(freq.items(), key=lambda x: -x[1]):
    print(f"  {word}: {count}")`,instructions:"Experiment with dictionaries — try building a simple address book, inventory system, or word counter."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-dicts",title:"Dictionaries Quiz",questions:[{type:"predict-output",code:`d = {"a": 1, "b": 2, "a": 3}
print(d["a"])`,options:["1","3","[1, 3]","KeyError"],correctIndex:1,explanation:'Duplicate keys: the last value wins. "a" is set to 1, then overwritten to 3.'},{type:"predict-output",code:`d = {"x": 10}
result = d.get("y", 0) + d.get("x", 0)
print(result)`,options:["10","0","KeyError","None"],correctIndex:0,explanation:'d.get("y", 0) returns 0 (key missing, default 0). d.get("x", 0) returns 10. Sum = 10.'},{type:"mcq",question:"Which CANNOT be a dictionary key?",options:["(1, 2)",'"hello"',"[1, 2]","42"],correctIndex:2,explanation:"Lists are mutable and therefore unhashable — they cannot be dictionary keys. Tuples, strings, and integers are all hashable."},{type:"predict-output",code:`d = {"a": 1, "b": 2, "c": 3}
print(list(d.values()))`,options:['["a", "b", "c"]',"[1, 2, 3]",'[("a",1), ("b",2), ("c",3)]',"Error"],correctIndex:1,explanation:".values() returns the dictionary's values. list() converts the view to a list: [1, 2, 3]."},{type:"predict-output",code:`d = {True: "yes", 1: "one", 1.0: "float"}
print(d)`,options:['{True: "yes", 1: "one", 1.0: "float"}','{True: "float"}','{1: "float"}',"Error"],correctIndex:1,explanation:`True == 1 == 1.0, so they're all the same key. The first key (True) is kept, but the value is overwritten to "float".`}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-dicts",title:"Student Grade Manager",difficulty:"medium",description:"Build a grade management system using dictionaries. Store students with their subject grades, compute averages, find the top student, and identify failing subjects (below 50).",starterCode:`# Student Grade Manager
students = {
    "Alice": {"Math": 92, "Physics": 88, "English": 95, "History": 78},
    "Bob": {"Math": 65, "Physics": 45, "English": 72, "History": 58},
    "Charlie": {"Math": 78, "Physics": 82, "English": 48, "History": 90},
    "Diana": {"Math": 95, "Physics": 92, "English": 88, "History": 94},
}

# 1. Compute each student's average
print("Student Averages:")
for name, grades in students.items():
    avg = sum(grades.values()) / len(grades)
    print(f"  {name}: {avg:.1f}")

# 2. Find the top student
top = max(students.items(), key=lambda x: sum(x[1].values()) / len(x[1]))
print(f"\\nTop Student: {top[0]}")

# 3. Find all failing grades (below 50)
print("\\nFailing Grades:")
for name, grades in students.items():
    for subject, score in grades.items():
        if score < 50:
            print(f"  {name} - {subject}: {score}")`,testCases:[{input:"",expected:`Student Averages:
  Alice: 88.2
  Bob: 60.0
  Charlie: 74.5
  Diana: 92.2

Top Student: Diana

Failing Grades:
  Bob - Physics: 45
  Charlie - English: 48`}],hints:["Use sum(grades.values()) / len(grades) for average","max() with a key function can find the top student","Nested loop: outer for students, inner for their subjects"],solution:`students = {...}  # as above
for name, grades in students.items():
    avg = sum(grades.values()) / len(grades)
    print(f"  {name}: {avg:.1f}")
top = max(students.items(), key=lambda x: sum(x[1].values())/len(x[1]))
print(f"Top: {top[0]}")`}}],Ie=[{type:"heading",level:1,text:"Dictionary Patterns & Comprehensions"},{type:"text",content:"Dictionaries unlock their true power through patterns — counting, grouping, inverting, and transforming data with elegant comprehensions. These patterns appear constantly in real-world Python: processing API responses, analyzing text, building caches, and managing configuration. Master these patterns and you'll write Python that's both concise and readable."},{type:"heading",level:2,text:"Dictionary Comprehensions"},{type:"code",code:`# Basic: {key_expr: value_expr for item in iterable}
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(even_squares)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# From two lists (using zip)
names = ["Alice", "Bob", "Charlie"]
scores = [92, 85, 78]
gradebook = {name: score for name, score in zip(names, scores)}
print(gradebook)  # {'Alice': 92, 'Bob': 85, 'Charlie': 78}

# Transform keys and values
original = {"Hello": 1, "World": 2, "Python": 3}
lower_keys = {k.lower(): v * 10 for k, v in original.items()}
print(lower_keys)  # {'hello': 10, 'world': 20, 'python': 30}

# Invert a dictionary (swap keys and values)
colors = {"red": "#FF0000", "green": "#00FF00", "blue": "#0000FF"}
hex_to_name = {v: k for k, v in colors.items()}
print(hex_to_name)  # {'#FF0000': 'red', ...}

# Filter a dictionary
scores = {"Alice": 92, "Bob": 45, "Charlie": 78, "Diana": 38}
passing = {k: v for k, v in scores.items() if v >= 50}
print(passing)  # {'Alice': 92, 'Charlie': 78}`,language:"python"},{type:"heading",level:2,text:"Counting & Frequency Analysis"},{type:"code",code:`# Manual counting with .get()
text = "abracadabra"
freq = {}
for char in text:
    freq[char] = freq.get(char, 0) + 1
print(freq)  # {'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}

# Using collections.Counter (the Pythonic way)
from collections import Counter

word_counts = Counter("abracadabra")
print(word_counts)              # Counter({'a': 5, 'b': 2, 'r': 2, ...})
print(word_counts.most_common(3))  # [('a', 5), ('b', 2), ('r', 2)]

# Counter with words
sentence = "the cat sat on the mat the cat ate the rat"
words = Counter(sentence.split())
print(words.most_common(3))  # [('the', 4), ('cat', 2), ('sat', 1)]

# Counter arithmetic
a = Counter("aabbcc")
b = Counter("abcdef")
print(a + b)  # Combined counts
print(a - b)  # Subtract (drops zero/negative)
print(a & b)  # Minimum of each
print(a | b)  # Maximum of each

# Practical: character frequency histogram
def histogram(text):
    freq = Counter(text.lower())
    for char, count in freq.most_common():
        if char.isalpha():
            print(f"  {char}: {'█' * count} ({count})")

histogram("Hello World")`,language:"python"},{type:"heading",level:2,text:"Grouping & Categorizing Data"},{type:"code",code:`# Group by first letter
words = ["apple", "avocado", "banana", "blueberry", "cherry", "apricot"]
by_letter = {}
for word in words:
    letter = word[0]
    if letter not in by_letter:
        by_letter[letter] = []
    by_letter[letter].append(word)
print(by_letter)
# {'a': ['apple', 'avocado', 'apricot'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}

# Cleaner with .setdefault()
by_letter2 = {}
for word in words:
    by_letter2.setdefault(word[0], []).append(word)
print(by_letter2)

# Using defaultdict (cleanest)
from collections import defaultdict

by_length = defaultdict(list)
for word in words:
    by_length[len(word)].append(word)

for length, group in sorted(by_length.items()):
    print(f"  {length} letters: {group}")

# Practical: Group students by grade band
students = [
    ("Alice", 92), ("Bob", 78), ("Charlie", 85),
    ("Diana", 95), ("Eve", 62), ("Frank", 71)
]

def grade_band(score):
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    return "D"

groups = defaultdict(list)
for name, score in students:
    groups[grade_band(score)].append(f"{name} ({score})")

for grade in sorted(groups):
    print(f"  Grade {grade}: {groups[grade]}")`,language:"python"},{type:"callout",variant:"tip",title:"defaultdict vs setdefault vs get",content:"**`d.get(k, default)`**: Returns default but does NOT add the key.\n**`d.setdefault(k, default)`**: Returns existing value OR sets & returns default.\n**`defaultdict(factory)`**: Automatically creates missing keys with the factory function (list, int, set, etc.)."},{type:"heading",level:2,text:"Advanced Dictionary Patterns"},{type:"code",code:`# 1. Merge multiple dicts
def merge_dicts(*dicts):
    result = {}
    for d in dicts:
        result.update(d)
    return result

defaults = {"color": "blue", "size": 12, "font": "Arial"}
user_prefs = {"color": "red", "size": 14}
final = merge_dicts(defaults, user_prefs)
print(final)  # {'color': 'red', 'size': 14, 'font': 'Arial'}

# 2. Dispatch table (replace if-elif chains)
def add(a, b): return a + b
def sub(a, b): return a - b
def mul(a, b): return a * b
def div(a, b): return a / b if b != 0 else "Error: division by zero"

operations = {
    "+": add, "-": sub,
    "*": mul, "/": div
}

for op in ["+", "-", "*", "/"]:
    result = operations[op](10, 3)
    print(f"  10 {op} 3 = {result}")

# 3. Two-way mapping
class TwoWayDict:
    def __init__(self):
        self.forward = {}
        self.reverse = {}
    
    def add(self, key, value):
        self.forward[key] = value
        self.reverse[value] = key
    
    def get_by_key(self, key):
        return self.forward.get(key)
    
    def get_by_value(self, value):
        return self.reverse.get(value)

country_codes = TwoWayDict()
country_codes.add("US", "United States")
country_codes.add("UK", "United Kingdom")
print(country_codes.get_by_key("US"))              # United States
print(country_codes.get_by_value("United Kingdom")) # UK

# 4. Nested defaultdict
tree = lambda: defaultdict(tree)
data = tree()
data["users"]["Alice"]["age"] = 30
data["users"]["Alice"]["email"] = "alice@example.com"
print(dict(data["users"]["Alice"]))  # {'age': 30, 'email': ...}`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Dictionary patterns in action!
from collections import Counter, defaultdict

# 1. Anagram detector
def are_anagrams(word1, word2):
    return Counter(word1.lower()) == Counter(word2.lower())

pairs = [("listen", "silent"), ("hello", "world"), ("evil", "vile")]
for w1, w2 in pairs:
    result = "YES" if are_anagrams(w1, w2) else "NO"
    print(f"  {w1} & {w2}: {result}")

# 2. Simple cache / memoization
cache = {}
def fibonacci(n):
    if n in cache:
        return cache[n]
    if n <= 1:
        result = n
    else:
        result = fibonacci(n-1) + fibonacci(n-2)
    cache[n] = result
    return result

print(f"\\nfib(30) = {fibonacci(30)}")
print(f"Cache size: {len(cache)} entries")

# 3. Index builder
books = [
    {"title": "Python Basics", "tags": ["python", "beginner"]},
    {"title": "Advanced Python", "tags": ["python", "advanced"]},
    {"title": "Web Dev", "tags": ["javascript", "beginner"]},
    {"title": "Data Science", "tags": ["python", "data"]},
]

tag_index = defaultdict(list)
for book in books:
    for tag in book["tags"]:
        tag_index[tag].append(book["title"])

print("\\nTag Index:")
for tag, titles in sorted(tag_index.items()):
    print(f"  {tag}: {titles}")`,instructions:"Experiment with counting, grouping, and dictionary patterns."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-dictpatterns",title:"Dictionary Patterns Quiz",questions:[{type:"predict-output",code:`result = {x: x**2 for x in range(4)}
print(result)`,options:["{0: 0, 1: 1, 2: 4, 3: 9}","[0, 1, 4, 9]","{1: 1, 2: 4, 3: 9}","Error"],correctIndex:0,explanation:"Dict comprehension creates key:value pairs. range(4) gives 0,1,2,3. Each maps to its square."},{type:"predict-output",code:`from collections import Counter
c = Counter("banana")
print(c.most_common(1))`,options:['[("a", 3)]','[("b", 1)]','["a"]',"3"],correctIndex:0,explanation:'"banana" has a:3, n:2, b:1. most_common(1) returns the top-1 as a list of (element, count) tuples.'},{type:"mcq",question:"What does defaultdict(list) do when accessing a missing key?",options:["Raises KeyError","Returns None","Creates the key with an empty list","Creates the key with value 0"],correctIndex:2,explanation:"defaultdict(list) automatically creates missing keys with the factory function list(), which returns []."},{type:"predict-output",code:`d = {"a": 1, "b": 2}
d.setdefault("a", 999)
d.setdefault("c", 3)
print(d)`,options:['{"a": 999, "b": 2, "c": 3}','{"a": 1, "b": 2, "c": 3}','{"a": 1, "b": 2}',"Error"],correctIndex:1,explanation:`setdefault only sets the value if the key doesn't exist. "a" already exists (unchanged). "c" doesn't exist, so it's set to 3.`}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-dictpatterns",title:"Text Analyzer",difficulty:"hard",description:"Build a text analysis tool. Given a paragraph, compute: (1) word frequency sorted by count, (2) average word length, (3) sentence count, and (4) the most common starting letter.",starterCode:`from collections import Counter

text = """Python is a great programming language. Python is used for web development.
Python is also great for data science. Many programmers love Python.
Python makes programming fun and productive."""

# 1. Word frequency (top 5)
words = text.lower().split()
word_freq = Counter(words)
print("Top 5 words:")
for word, count in word_freq.most_common(5):
    print(f"  {word}: {count}")

# 2. Average word length
clean_words = [w.strip(".,!?") for w in words]
avg_len = sum(len(w) for w in clean_words) / len(clean_words)
print(f"\\nAverage word length: {avg_len:.1f}")

# 3. Sentence count
sentences = [s.strip() for s in text.split(".") if s.strip()]
print(f"Sentences: {len(sentences)}")

# 4. Most common starting letter
first_letters = Counter(w[0] for w in clean_words if w)
print(f"\\nMost common starting letter: {first_letters.most_common(1)[0]}")`,testCases:[{input:"",expected:`Top 5 words:
  python: 5
  is: 3
  great: 2
  programming: 2
  for: 2

Average word length: 4.8
Sentences: 5

Most common starting letter: ('p', 11)`}],hints:["Counter.most_common(n) returns the n most frequent items","Strip punctuation from words before analysis",'Split on "." to count sentences'],solution:`from collections import Counter
words = text.lower().split()
word_freq = Counter(words)
clean = [w.strip(".,!?") for w in words]
avg_len = sum(len(w) for w in clean) / len(clean)
sentences = [s.strip() for s in text.split(".") if s.strip()]`}}],Ee=[{type:"heading",level:1,text:"Sets — Unique Collections"},{type:"text",content:"Sets are **unordered collections of unique elements**. Inspired by mathematical sets, they support powerful operations like union, intersection, and difference. Sets excel at membership testing (extremely fast `in` checks), removing duplicates, and comparing groups of items. If you've ever needed to ask \"what's in A but not in B?\" — sets are your answer."},{type:"heading",level:2,text:"Creating Sets"},{type:"code",code:`# Curly braces — but NOT empty! (empty {} is a dict)
fruits = {"apple", "banana", "cherry"}
print(fruits)       # Order may vary!
print(type(fruits)) # <class 'set'>

# Duplicates automatically removed
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)  # {1, 2, 3}

# From a list (deduplication!)
data = [1, 5, 2, 5, 3, 2, 1, 4]
unique = set(data)
print(unique)         # {1, 2, 3, 4, 5}
print(sorted(unique)) # [1, 2, 3, 4, 5] (sorted returns a list)

# From a string
letters = set("mississippi")
print(letters)  # {'m', 'i', 's', 'p'}

# Empty set — MUST use set(), not {}
empty = set()
print(type(empty))  # <class 'set'>
print(type({}))     # <class 'dict'> — gotcha!

# Set comprehension
evens = {x for x in range(20) if x % 2 == 0}
print(evens)  # {0, 2, 4, 6, 8, 10, 12, 14, 16, 18}

# Elements must be hashable (immutable)
valid = {1, "hello", (1, 2), True, 3.14}
# invalid = {[1, 2]}    # TypeError: unhashable type: 'list'
# invalid = {{1, 2}}    # TypeError: unhashable type: 'set'`,language:"python"},{type:"callout",variant:"warning",title:"Sets Are Unordered!",content:"Sets have NO guaranteed order. Don't rely on the order elements appear when printed. If you need order, use a list or `sorted()`. Also: sets don't support indexing (`my_set[0]` is an error)."},{type:"heading",level:2,text:"Set Operations — The Power of Sets"},{type:"code",code:`A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

# UNION — elements in A OR B (or both)
print(A | B)           # {1, 2, 3, 4, 5, 6, 7, 8}
print(A.union(B))      # Same

# INTERSECTION — elements in A AND B
print(A & B)               # {4, 5}
print(A.intersection(B))   # Same

# DIFFERENCE — elements in A but NOT in B
print(A - B)               # {1, 2, 3}
print(A.difference(B))     # Same
print(B - A)               # {6, 7, 8} — order matters!

# SYMMETRIC DIFFERENCE — elements in A OR B, but NOT both
print(A ^ B)                       # {1, 2, 3, 6, 7, 8}
print(A.symmetric_difference(B))   # Same

# Visualize:
#   A = {1, 2, 3, [4, 5]}
#   B = {[4, 5], 6, 7, 8}
#   Union:      {1, 2, 3, 4, 5, 6, 7, 8} — everything
#   Intersect:  {4, 5}                    — overlap
#   A - B:      {1, 2, 3}                 — only in A
#   Sym Diff:   {1, 2, 3, 6, 7, 8}        — not shared`,language:"python"},{type:"heading",level:2,text:"Subset, Superset & Disjoint"},{type:"code",code:`# Subset: every element of A is in B
A = {1, 2, 3}
B = {1, 2, 3, 4, 5}

print(A <= B)           # True (A is a subset of B)
print(A.issubset(B))    # True
print(A < B)            # True (A is a PROPER subset — A != B)
print(A < A)            # False (not a proper subset of itself)

# Superset: B contains all elements of A
print(B >= A)             # True (B is a superset of A)
print(B.issuperset(A))    # True

# Disjoint: no elements in common
X = {1, 2, 3}
Y = {4, 5, 6}
Z = {3, 4, 5}

print(X.isdisjoint(Y))  # True (no overlap)
print(X.isdisjoint(Z))  # False (3 is in both)

# Equality
print({1, 2, 3} == {3, 2, 1})  # True (order doesn't matter)
print({1, 2} == {1, 2, 3})     # False (different elements)`,language:"python"},{type:"heading",level:2,text:"Modifying Sets"},{type:"code",code:`colors = {"red", "green", "blue"}

# Add an element
colors.add("yellow")
colors.add("red")        # Already exists — no error, no change
print(colors)

# Remove elements
colors.remove("yellow")  # Raises KeyError if not found
colors.discard("purple") # No error if not found — SAFER
print(colors)

# Pop — remove and return an ARBITRARY element
colors = {"red", "green", "blue", "cyan"}
popped = colors.pop()
print(f"Popped: {popped}")  # Unpredictable which one!

# Update — add multiple elements
colors.update(["orange", "purple", "red"])
print(colors)

# Set operations with update (modify in place)
A = {1, 2, 3, 4}
A |= {5, 6}     # Union update
print(A)         # {1, 2, 3, 4, 5, 6}

A &= {2, 4, 6}  # Intersection update
print(A)         # {2, 4, 6}

A -= {6}         # Difference update
print(A)         # {2, 4}

# Clear
A.clear()
print(A)  # set()`,language:"python"},{type:"heading",level:2,text:"Practical Set Applications"},{type:"code",code:`# 1. Fast membership testing
# set 'in' is O(1), list 'in' is O(n)
valid_users = {"alice", "bob", "charlie", "diana"}
user = "bob"
if user in valid_users:
    print(f"{user} is authorized")

# 2. Remove duplicates preserving order
def unique_ordered(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
print(unique_ordered(data))  # [3, 1, 4, 5, 9, 2, 6]

# 3. Find common interests
alice_hobbies = {"reading", "hiking", "coding", "cooking"}
bob_hobbies = {"gaming", "hiking", "coding", "music"}

shared = alice_hobbies & bob_hobbies
print(f"Shared: {shared}")  # {'hiking', 'coding'}

only_alice = alice_hobbies - bob_hobbies
print(f"Only Alice: {only_alice}")  # {'reading', 'cooking'}

# 4. Validate required fields
required = {"name", "email", "password"}
submitted = {"name", "email"}
missing = required - submitted
if missing:
    print(f"Missing fields: {missing}")  # {'password'}

# 5. Frozenset — immutable set (can be a dict key or set member)
coord = frozenset([1, 2])
visited = set()
visited.add(coord)          # Works!
print(coord in visited)     # True
# visited.add({1, 2})       # TypeError: unhashable type 'set'`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Set operations in action!

# 1. Course enrollment analysis
math_students = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
physics_students = {"Bob", "Diana", "Frank", "Grace"}
cs_students = {"Alice", "Charlie", "Frank", "Henry"}

both_math_physics = math_students & physics_students
print(f"Math AND Physics: {both_math_physics}")

any_stem = math_students | physics_students | cs_students
print(f"Any STEM course: {any_stem}")

only_math = math_students - physics_students - cs_students
print(f"Only Math: {only_math}")

# 2. Spell checker
dictionary = {"the", "a", "is", "python", "great", "language", "for"}
text = "python is a grate languge for cooding"
words = set(text.split())
misspelled = words - dictionary
print(f"\\nMisspelled: {misspelled}")

# 3. Find duplicates in a list
def find_duplicates(lst):
    seen = set()
    dups = set()
    for item in lst:
        if item in seen:
            dups.add(item)
        seen.add(item)
    return dups

nums = [1, 3, 5, 3, 7, 1, 9, 5]
print(f"\\nDuplicates: {find_duplicates(nums)}")`,instructions:"Experiment with set operations — find intersections, differences, or use sets to solve problems."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-sets",title:"Sets Quiz",questions:[{type:"predict-output",code:`s = {1, 2, 2, 3, 3, 3}
print(len(s))`,options:["6","3","1","Error"],correctIndex:1,explanation:"Sets only keep unique elements. {1, 2, 2, 3, 3, 3} becomes {1, 2, 3}, which has length 3."},{type:"predict-output",code:`A = {1, 2, 3}
B = {2, 3, 4}
print(A ^ B)`,options:["{2, 3}","{1, 4}","{1, 2, 3, 4}","Error"],correctIndex:1,explanation:"^ is symmetric difference: elements in A or B but not both. 1 is only in A, 4 is only in B. Result: {1, 4}."},{type:"predict-output",code:`x = type({}).__name__
y = type(set()).__name__
print(x, y)`,options:["set set","dict dict","dict set","set dict"],correctIndex:2,explanation:"{} creates an empty DICT (not a set!). set() creates an empty set. This is a common gotcha."},{type:"mcq",question:"Which operation finds elements in set A that are NOT in set B?",options:["A | B","A & B","A - B","A ^ B"],correctIndex:2,explanation:"A - B (difference) returns elements that are in A but not in B."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-sets",title:"Social Network Analyzer",difficulty:"medium",description:"Given a social network represented as a dictionary of users and their friends (sets), find: mutual friends between two users, friend suggestions (friends of friends who aren't already friends), and the most connected user.",starterCode:`# Social network as dict of sets
network = {
    "Alice": {"Bob", "Charlie", "Diana"},
    "Bob": {"Alice", "Diana", "Eve"},
    "Charlie": {"Alice", "Frank"},
    "Diana": {"Alice", "Bob", "Eve", "Frank"},
    "Eve": {"Bob", "Diana"},
    "Frank": {"Charlie", "Diana"},
}

# 1. Mutual friends
def mutual_friends(network, user1, user2):
    return network[user1] & network[user2]

print("Mutual friends (Alice & Bob):")
print(f"  {mutual_friends(network, 'Alice', 'Bob')}")

# 2. Friend suggestions (friends of friends, not already friends)
def suggest_friends(network, user):
    friends = network[user]
    suggestions = set()
    for friend in friends:
        suggestions |= network[friend]  # Add friends of friends
    suggestions -= friends      # Remove existing friends
    suggestions.discard(user)   # Remove self
    return suggestions

print("\\nFriend suggestions for Alice:")
print(f"  {suggest_friends(network, 'Alice')}")

# 3. Most connected user
most = max(network, key=lambda u: len(network[u]))
print(f"\\nMost connected: {most} ({len(network[most])} friends)")`,testCases:[{input:"",expected:`Mutual friends (Alice & Bob):
  {'Diana'}

Friend suggestions for Alice:
  {'Eve', 'Frank'}

Most connected: Diana (4 friends)`}],hints:["Set intersection (&) finds mutual friends","Union of friends-of-friends, then subtract existing friends","max() with key=lambda finds the user with most connections"],solution:`def mutual_friends(network, u1, u2): return network[u1] & network[u2]
def suggest_friends(network, user):
    friends = network[user]
    fof = set()
    for f in friends: fof |= network[f]
    return fof - friends - {user}`}}],qe=[{type:"heading",level:1,text:"File Handling in Python"},{type:"text",content:"Files are how programs persist data beyond a single run. Python makes file I/O remarkably simple. You'll learn to read from and write to text files, handle CSV data, work with file paths, and always use the **context manager** pattern (`with` statement) to handle resources safely. Note: In this browser-based environment, file operations are simulated — but the concepts apply directly to real Python."},{type:"heading",level:2,text:"Opening Files — The with Statement"},{type:"code",code:`# The CORRECT way — with statement (context manager)
# Automatically closes the file, even if an error occurs
with open("example.txt", "r") as f:
    content = f.read()
    print(content)
# File is automatically closed here

# DON'T do this (file might not get closed on error):
# f = open("example.txt", "r")
# content = f.read()
# f.close()  # What if an error occurs before this line?

# File modes:
# "r"  — Read (default). File must exist.
# "w"  — Write. Creates file or OVERWRITES existing.
# "a"  — Append. Creates file or adds to end.
# "x"  — Exclusive create. Fails if file exists.
# "r+" — Read and write.
# "b"  — Binary mode (add to above: "rb", "wb")`,language:"python"},{type:"callout",variant:"danger",title:'Mode "w" Destroys Data!',content:'Opening a file with mode `"w"` ERASES ALL EXISTING CONTENT immediately. If you want to add to a file, use `"a"` (append). If you want to be safe, use `"x"` (exclusive create) which fails if the file already exists.'},{type:"heading",level:2,text:"Reading Methods"},{type:"code",code:`# Assume data.txt contains:
# Line 1: Hello World
# Line 2: Python is great
# Line 3: File handling

# METHOD 1: .read() — entire file as one string
with open("data.txt", "r") as f:
    content = f.read()  # "Line 1: Hello World\\nLine 2:..."
    print(content)

# METHOD 2: .readline() — one line at a time
with open("data.txt", "r") as f:
    first = f.readline()   # "Line 1: Hello World\\n"
    second = f.readline()  # "Line 2: Python is great\\n"
    print(first.strip())   # .strip() removes \\n
    print(second.strip())

# METHOD 3: .readlines() — list of all lines
with open("data.txt", "r") as f:
    lines = f.readlines()  # ["Line 1:...\\n", "Line 2:...\\n", ...]
    for line in lines:
        print(line.strip())

# METHOD 4: Iterate directly (BEST for large files)
with open("data.txt", "r") as f:
    for line in f:  # Memory-efficient — reads one line at a time
        print(line.strip())

# METHOD 5: Read with encoding
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()`,language:"python"},{type:"callout",variant:"tip",title:"Which Read Method?",content:'**Small files**: `.read()` or `.readlines()` — load everything into memory.\n**Large files**: Iterate with `for line in f:` — processes one line at a time, memory-efficient.\n**Binary files**: Use `"rb"` mode and `.read(size)` to read chunks.'},{type:"heading",level:2,text:"Writing to Files"},{type:"code",code:`# Write a new file (creates or overwrites)
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Python file handling.\\n")
    f.write(f"The answer is {42}\\n")

# Write multiple lines at once
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as f:
    f.writelines(lines)  # Does NOT add newlines automatically!

# Append to existing file
with open("log.txt", "a") as f:
    f.write("New log entry\\n")  # Added to end

# print() to a file
with open("output.txt", "w") as f:
    print("Name:", "Alice", file=f)    # Uses print's formatting
    print("Age:", 20, file=f)
    print("Score:", 95.5, file=f)

# Practical: save a list of numbers
numbers = [10, 20, 30, 40, 50]
with open("numbers.txt", "w") as f:
    for num in numbers:
        f.write(f"{num}\\n")

# Read them back
with open("numbers.txt", "r") as f:
    loaded = [int(line.strip()) for line in f]
    print(loaded)  # [10, 20, 30, 40, 50]`,language:"python"},{type:"heading",level:2,text:"Working with CSV Data"},{type:"code",code:`# CSV (Comma-Separated Values) — the universal data format
# Manual parsing
csv_data = """name,age,grade
Alice,20,A
Bob,19,B+
Charlie,21,A-"""

lines = csv_data.strip().split("\\n")
headers = lines[0].split(",")
students = []
for line in lines[1:]:
    values = line.split(",")
    student = dict(zip(headers, values))
    students.append(student)

for s in students:
    print(f"  {s['name']}: age {s['age']}, grade {s['grade']}")

# Using the csv module (handles edge cases like commas in values)
import csv
import io

# Reading CSV
csv_text = 'name,score\\nAlice,92\\nBob,85\\nCharlie,78'
reader = csv.DictReader(io.StringIO(csv_text))
for row in reader:
    print(f"  {row['name']}: {row['score']}")

# Writing CSV to a string
output = io.StringIO()
writer = csv.writer(output)
writer.writerow(["name", "score", "grade"])  # Header
writer.writerow(["Alice", 92, "A"])
writer.writerow(["Bob", 85, "B+"])
print("\\nCSV output:")
print(output.getvalue())`,language:"python"},{type:"heading",level:2,text:"StringIO — Files in Memory"},{type:"code",code:`import io

# StringIO acts like a file but lives in memory
# Perfect for testing or processing text as if it were a file

# Writing to StringIO
buffer = io.StringIO()
buffer.write("Line 1\\n")
buffer.write("Line 2\\n")
buffer.write("Line 3\\n")

# Read back
buffer.seek(0)  # Go back to the beginning
content = buffer.read()
print(content)

# Use with functions that expect files
def process_file(f):
    """Works with real files OR StringIO"""
    total = 0
    for line in f:
        try:
            total += int(line.strip())
        except ValueError:
            pass
    return total

# Test without creating a real file!
test_data = io.StringIO("10\\n20\\n30\\nhello\\n40\\n")
result = process_file(test_data)
print(f"Sum: {result}")  # 100

# Great for unit testing file-processing functions!`,language:"python"},{type:"heading",level:2,text:"File Error Handling"},{type:"code",code:`# Common file errors
import os

# FileNotFoundError
try:
    with open("nonexistent.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")

# PermissionError
try:
    with open("/etc/passwd", "w") as f:  # No write permission
        f.write("hacked")
except PermissionError:
    print("Permission denied!")
except FileNotFoundError:
    print("File not found (expected in browser)")

# IsADirectoryError
try:
    with open("/tmp", "r") as f:
        pass
except (IsADirectoryError, FileNotFoundError):
    print("Cannot read a directory as a file!")

# Safe file reading pattern
def safe_read(filename, default=""):
    try:
        with open(filename, "r") as f:
            return f.read()
    except FileNotFoundError:
        return default
    except PermissionError:
        return default

content = safe_read("config.txt", default="{}")
print(f"Content: {content}")`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`import io
import csv

# Since we're in a browser, we'll use StringIO to simulate files

# 1. Write and read a "file"
f = io.StringIO()
f.write("Shopping List:\\n")
items = ["Apples", "Bread", "Milk", "Eggs", "Cheese"]
for i, item in enumerate(items, 1):
    f.write(f"  {i}. {item}\\n")

f.seek(0)
print(f.read())

# 2. CSV processing
csv_data = """product,price,quantity
Apple,1.50,10
Bread,2.99,5
Milk,3.49,8
Eggs,4.99,3"""

print("Inventory Report:")
print("-" * 40)
total = 0
reader = csv.DictReader(io.StringIO(csv_data))
for row in reader:
    value = float(row["price"]) * int(row["quantity"])
    total += value
    print(f"  {row['product']:10} \${float(row['price']):6.2f} x {row['quantity']:>3} = \${value:7.2f}")
print("-" * 40)
print(f"  {'Total':10} {'':<14} \${total:7.2f}")

# 3. Log file simulation
log = io.StringIO()
def log_event(message, level="INFO"):
    log.write(f"[{level}] {message}\\n")

log_event("Application started")
log_event("Processing data")
log_event("Invalid input detected", "WARNING")
log_event("Data saved successfully")
log_event("Application stopped")

log.seek(0)
print("\\nLog File:")
for line in log:
    print(f"  {line.strip()}")`,instructions:"Practice file operations using StringIO. Try building a CSV processor or log file system."},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-files",title:"File Handling Quiz",questions:[{type:"mcq",question:'What happens if you open an existing file with mode "w"?',options:["Appends to the file","Raises an error","Erases all content and starts fresh","Opens in read-only mode"],correctIndex:2,explanation:'Mode "w" truncates (erases) the file immediately upon opening. Use "a" to append instead.'},{type:"mcq",question:'Why should you use "with open(...) as f:" instead of "f = open(...)"?',options:["It's faster","It automatically closes the file, even on errors","It's the only way to open files","It opens files in binary mode"],correctIndex:1,explanation:"The with statement ensures the file is properly closed when the block exits, even if an exception occurs."},{type:"mcq",question:"Which method is best for reading a very large file line by line?",options:[".read()",".readlines()","for line in f:",".readline() in a while loop"],correctIndex:2,explanation:"for line in f: is the most memory-efficient. It reads one line at a time instead of loading the entire file into memory."},{type:"predict-output",code:`# If file contains:
# hello
# world
with open("file.txt") as f:
    result = f.readlines()
    print(type(result).__name__)`,options:["str","list","tuple","generator"],correctIndex:1,explanation:".readlines() returns a list of strings, one per line, each ending with \\n."}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-files",title:"CSV Report Generator",difficulty:"hard",description:"Parse CSV sales data and generate a summary report showing: total revenue per product, best-selling product, and average order value. Use StringIO to simulate file operations.",starterCode:`import io
import csv

# Simulated CSV sales data
sales_csv = """date,product,quantity,price
2024-01-15,Widget,10,9.99
2024-01-15,Gadget,5,19.99
2024-01-16,Widget,8,9.99
2024-01-16,Gizmo,3,29.99
2024-01-17,Gadget,12,19.99
2024-01-17,Widget,6,9.99
2024-01-17,Gizmo,2,29.99"""

# Parse and analyze
reader = csv.DictReader(io.StringIO(sales_csv))
product_revenue = {}
product_quantity = {}
total_orders = 0

for row in reader:
    product = row["product"]
    qty = int(row["quantity"])
    price = float(row["price"])
    revenue = qty * price
    
    product_revenue[product] = product_revenue.get(product, 0) + revenue
    product_quantity[product] = product_quantity.get(product, 0) + qty
    total_orders += 1

# Report
print("=" * 45)
print("        SALES SUMMARY REPORT")
print("=" * 45)
print(f"{'Product':<12} {'Qty':>6} {'Revenue':>12}")
print("-" * 45)

total_rev = 0
for product in sorted(product_revenue):
    rev = product_revenue[product]
    qty = product_quantity[product]
    total_rev += rev
    print(f"{product:<12} {qty:>6} \${rev:>10.2f}")

print("-" * 45)
print(f"{'TOTAL':<12} {sum(product_quantity.values()):>6} \${total_rev:>10.2f}")
print(f"\\nBest seller: {max(product_revenue, key=product_revenue.get)}")
print(f"Avg order value: \${total_rev / total_orders:.2f}")`,testCases:[{input:"",expected:"Sales report with revenue per product, total, best seller, and average order value"}],hints:["csv.DictReader gives you dictionaries with column headers as keys","Use dict.get(key, 0) for safe accumulation","max(dict, key=dict.get) finds the key with the highest value"],solution:"# See starter code — it contains the full solution"}}],Ne=[{type:"heading",level:1,text:"Object-Oriented Programming"},{type:"text",content:"Object-Oriented Programming (OOP) lets you model real-world concepts by bundling **data** (attributes) and **behavior** (methods) into **objects**. You've already used OOP — strings, lists, and dictionaries are all objects with methods. Now you'll learn to create your own classes, the blueprints for making objects. OOP is a cornerstone of Python — understanding it unlocks libraries, frameworks, and clean software design."},{type:"heading",level:2,text:"Classes and Objects"},{type:"code",code:`# A class is a BLUEPRINT; an object is an INSTANCE
class Dog:
    # Class attribute — shared by ALL instances
    species = "Canis familiaris"
    
    # __init__: the constructor (initializer)
    # Called automatically when you create an instance
    def __init__(self, name, age, breed):
        # Instance attributes — unique to each object
        self.name = name
        self.age = age
        self.breed = breed
    
    # Instance method
    def bark(self):
        return f"{self.name} says: Woof!"
    
    def description(self):
        return f"{self.name} is a {self.age}-year-old {self.breed}"

# Creating objects (instances)
rex = Dog("Rex", 5, "German Shepherd")
buddy = Dog("Buddy", 3, "Golden Retriever")

print(rex.description())   # Rex is a 5-year-old German Shepherd
print(buddy.bark())        # Buddy says: Woof!

# Accessing attributes
print(rex.name)            # Rex
print(rex.species)         # Canis familiaris (class attribute)
print(buddy.species)       # Same — shared by all dogs

# Objects are independent
rex.age = 6
print(rex.age)    # 6
print(buddy.age)  # 3 (unchanged)`,language:"python"},{type:"callout",variant:"info",title:'What is "self"?',content:"`self` is a reference to the current instance. It's how a method knows WHICH object's data to use. It's always the first parameter of instance methods, but you don't pass it when calling — Python passes it automatically: `rex.bark()` internally calls `Dog.bark(rex)`."},{type:"heading",level:2,text:"Special (Dunder) Methods"},{type:"code",code:`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    # String representation (for print and str())
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
    
    # Addition: v1 + v2
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    # Subtraction: v1 - v2
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    # Equality: v1 == v2
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    # Length (magnitude) with abs()
    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5
    
    # Boolean: bool(v) — is it non-zero?
    def __bool__(self):
        return self.x != 0 or self.y != 0

# Using our Vector class
v1 = Vector(3, 4)
v2 = Vector(1, 2)

print(v1)           # Vector(3, 4) — thanks to __repr__
print(v1 + v2)      # Vector(4, 6) — thanks to __add__
print(v1 - v2)      # Vector(2, 2) — thanks to __sub__
print(v1 == v2)     # False
print(abs(v1))      # 5.0 (3-4-5 triangle)
print(bool(Vector(0, 0)))  # False`,language:"python"},{type:"list",items:["`__init__(self)` — Constructor, called on object creation","`__repr__(self)` — Official string representation (print, repr)","`__str__(self)` — Informal string (str(), f-strings)","`__add__`, `__sub__`, `__mul__` — Arithmetic operators","`__eq__`, `__lt__`, `__gt__` — Comparison operators","`__len__(self)` — Called by len(obj)","`__getitem__(self, key)` — Called by obj[key]","`__contains__(self, item)` — Called by item in obj"]},{type:"heading",level:2,text:"Encapsulation & Properties"},{type:"code",code:`class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self._balance = balance  # Convention: _ means "private"
    
    @property
    def balance(self):
        """Read the balance (getter)"""
        return self._balance
    
    @balance.setter
    def balance(self, amount):
        """Set balance with validation (setter)"""
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self._balance += amount
        return self._balance
    
    def withdraw(self, amount):
        if amount > self._balance:
            raise ValueError("Insufficient funds")
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        self._balance -= amount
        return self._balance
    
    def __repr__(self):
        return f"BankAccount({self.owner!r}, balance={self._balance})"

account = BankAccount("Alice", 1000)
print(account)                # BankAccount('Alice', balance=1000)

account.deposit(500)
print(f"After deposit: \${account.balance}")  # $1500

account.withdraw(200)
print(f"After withdrawal: \${account.balance}")  # $1300

# Property works like an attribute
print(account.balance)  # 1300 (calls getter)

# Validation via setter
try:
    account.balance = -100
except ValueError as e:
    print(f"Error: {e}")  # Balance cannot be negative`,language:"python"},{type:"callout",variant:"tip",title:"Python's Privacy Convention",content:"Python has no true private attributes. The convention is:\n- `name`: Public — free to use\n- `_name`: Protected — \"don't use unless you know what you're doing\"\n- `__name`: Name-mangled — harder to access accidentally (becomes `_ClassName__name`)"},{type:"heading",level:2,text:"Inheritance — Building on Existing Classes"},{type:"code",code:`# Base (parent) class
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        return f"{self.name} says {self.sound}!"
    
    def __repr__(self):
        return f"{type(self).__name__}({self.name!r})"

# Derived (child) class — inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")  # Call parent's __init__
        self.breed = breed
    
    def fetch(self, item):
        return f"{self.name} fetches the {item}!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")
    
    def purr(self):
        return f"{self.name} purrs softly..."

# Using inheritance
rex = Dog("Rex", "German Shepherd")
whiskers = Cat("Whiskers")

print(rex.speak())           # Rex says Woof! (inherited)
print(rex.fetch("ball"))     # Rex fetches the ball! (Dog-specific)
print(whiskers.speak())      # Whiskers says Meow! (inherited)
print(whiskers.purr())       # Whiskers purrs softly... (Cat-specific)

# isinstance checks
print(isinstance(rex, Dog))     # True
print(isinstance(rex, Animal))  # True (Dog IS an Animal)
print(isinstance(rex, Cat))     # False

# Method overriding
class Parrot(Animal):
    def __init__(self, name, vocabulary):
        super().__init__(name, "Squawk")
        self.vocabulary = vocabulary
    
    def speak(self):  # Override parent's speak
        import random
        word = random.choice(self.vocabulary) if self.vocabulary else self.sound
        return f"{self.name} says: \\"{word}\\""

polly = Parrot("Polly", ["Hello!", "Pretty bird!", "Cracker?"])
print(polly.speak())  # Polly says: "Hello!" (or random)`,language:"python"},{type:"heading",level:2,text:"Class Methods & Static Methods"},{type:"code",code:`class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius
    
    @property
    def fahrenheit(self):
        return self.celsius * 9/5 + 32
    
    @property
    def kelvin(self):
        return self.celsius + 273.15
    
    # Class method — alternative constructor
    @classmethod
    def from_fahrenheit(cls, f):
        return cls((f - 32) * 5/9)
    
    @classmethod
    def from_kelvin(cls, k):
        return cls(k - 273.15)
    
    # Static method — utility, no access to instance or class
    @staticmethod
    def is_below_freezing(celsius):
        return celsius < 0
    
    def __repr__(self):
        return f"{self.celsius:.1f}°C / {self.fahrenheit:.1f}°F / {self.kelvin:.1f}K"

# Regular constructor
t1 = Temperature(100)
print(t1)  # 100.0°C / 212.0°F / 373.1K

# Alternative constructors (class methods)
t2 = Temperature.from_fahrenheit(72)
print(t2)  # 22.2°C / 72.0°F / 295.4K

t3 = Temperature.from_kelvin(0)
print(t3)  # -273.1°C / -459.7°F / 0.0K

# Static method
print(Temperature.is_below_freezing(-5))  # True
print(Temperature.is_below_freezing(10))  # False`,language:"python"},{type:"heading",level:2,text:"Practical OOP: Task Manager"},{type:"code",code:`class Task:
    _id_counter = 0  # Class variable for auto-incrementing IDs
    
    def __init__(self, title, priority="medium"):
        Task._id_counter += 1
        self.id = Task._id_counter
        self.title = title
        self.priority = priority
        self.completed = False
    
    def complete(self):
        self.completed = True
    
    def __repr__(self):
        status = "x" if self.completed else " "
        return f"[{status}] #{self.id} ({self.priority}) {self.title}"

class TaskManager:
    def __init__(self):
        self.tasks = []
    
    def add(self, title, priority="medium"):
        task = Task(title, priority)
        self.tasks.append(task)
        return task
    
    def complete(self, task_id):
        for task in self.tasks:
            if task.id == task_id:
                task.complete()
                return True
        return False
    
    def pending(self):
        return [t for t in self.tasks if not t.completed]
    
    def show(self):
        priority_order = {"high": 0, "medium": 1, "low": 2}
        sorted_tasks = sorted(self.tasks, key=lambda t: priority_order.get(t.priority, 1))
        for task in sorted_tasks:
            print(f"  {task}")

# Using the Task Manager
tm = TaskManager()
tm.add("Learn Python OOP", "high")
tm.add("Build a project", "medium")
tm.add("Read documentation", "low")
tm.add("Fix critical bug", "high")

print("All tasks:")
tm.show()

tm.complete(1)  # Complete first task
tm.complete(3)  # Complete third task

print(f"\\nPending: {len(tm.pending())} tasks")
print("\\nUpdated:")
tm.show()`,language:"python"},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Build your own class!

class Student:
    def __init__(self, name, grades=None):
        self.name = name
        self.grades = grades or []
    
    def add_grade(self, subject, score):
        self.grades.append({"subject": subject, "score": score})
    
    @property
    def average(self):
        if not self.grades:
            return 0
        return sum(g["score"] for g in self.grades) / len(self.grades)
    
    @property
    def letter_grade(self):
        avg = self.average
        if avg >= 90: return "A"
        if avg >= 80: return "B"
        if avg >= 70: return "C"
        if avg >= 60: return "D"
        return "F"
    
    def __repr__(self):
        return f"Student({self.name!r}, avg={self.average:.1f}, grade={self.letter_grade})"

# Create students
alice = Student("Alice")
alice.add_grade("Math", 92)
alice.add_grade("Physics", 88)
alice.add_grade("English", 95)

bob = Student("Bob")
bob.add_grade("Math", 78)
bob.add_grade("Physics", 82)
bob.add_grade("English", 71)

students = [alice, bob]
for s in students:
    print(s)
    for g in s.grades:
        print(f"    {g['subject']}: {g['score']}")`,instructions:"Try modifying the Student class or create your own class from scratch!"},{type:"heading",level:2,text:"Knowledge Check"},{type:"quiz",quiz:{id:"quiz-oop",title:"OOP Quiz",questions:[{type:"mcq",question:"What is the purpose of __init__?",options:["To destroy an object","To initialize a new instance with attributes","To define a class method","To import a module"],correctIndex:1,explanation:"__init__ is the constructor/initializer. It runs automatically when a new instance is created and sets up theobject's initial state."},{type:"predict-output",code:`class Cat:
    lives = 9
    def __init__(self, name):
        self.name = name

a = Cat("Luna")
b = Cat("Milo")
a.lives = 7
print(b.lives)`,options:["7","9","Error","None"],correctIndex:1,explanation:"a.lives = 7 creates an INSTANCE attribute on a, shadowing the class attribute. b still reads the class attribute (9)."},{type:"mcq",question:"What does super().__init__() do in a child class?",options:["Creates a new parent object","Calls the parent class's __init__ method","Copies all parent methods","Deletes the parent class"],correctIndex:1,explanation:"super().__init__() calls the parent class's constructor, allowing the child to inherit and extend the parent's initialization."},{type:"predict-output",code:`class A:
    def greet(self):
        return "Hello from A"

class B(A):
    def greet(self):
        return "Hello from B"

obj = B()
print(obj.greet())`,options:["Hello from A","Hello from B","Error","Hello from A Hello from B"],correctIndex:1,explanation:"B overrides A's greet method. Since obj is an instance of B, B's version is called (method overriding)."},{type:"mcq",question:'What is the naming convention for "private" attributes in Python?',options:["private keyword","Starting with _","Starting with #","Ending with _"],correctIndex:1,explanation:'Python uses naming conventions: a single underscore prefix (_name) signals "treat as private". Python has no true access modifiers.'}]}},{type:"heading",level:2,text:"Coding Challenge"},{type:"challenge",challenge:{id:"challenge-oop",title:"Shape Hierarchy",difficulty:"hard",description:"Create a Shape class hierarchy with a base Shape class and Circle, Rectangle, and Triangle subclasses. Each should compute area and perimeter, and support comparison by area.",starterCode:`import math

class Shape:
    def area(self):
        raise NotImplementedError
    def perimeter(self):
        raise NotImplementedError
    def __repr__(self):
        return f"{type(self).__name__}(area={self.area():.2f})"
    def __lt__(self, other):
        return self.area() < other.area()
    def __eq__(self, other):
        return abs(self.area() - other.area()) < 1e-9

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return math.pi * self.radius ** 2
    def perimeter(self):
        return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height
    def perimeter(self):
        return 2 * (self.width + self.height)

class Triangle(Shape):
    def __init__(self, a, b, c):
        self.a, self.b, self.c = a, b, c
    def area(self):
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s-self.a) * (s-self.b) * (s-self.c))
    def perimeter(self):
        return self.a + self.b + self.c

# Test
shapes = [
    Circle(5),
    Rectangle(4, 6),
    Triangle(3, 4, 5),
]

for s in shapes:
    print(f"{s} — perimeter: {s.perimeter():.2f}")

print(f"\\nLargest: {max(shapes)}")
print(f"Sorted: {sorted(shapes)}")`,testCases:[{input:"",expected:"Circle, Rectangle, Triangle with areas and perimeters; sorted by area"}],hints:["Override area() and perimeter() in each subclass","Use Heron's formula for triangle area: sqrt(s(s-a)(s-b)(s-c))","__lt__ enables sorting and max/min comparisons"],solution:`class Shape:
    def area(self): raise NotImplementedError
    def perimeter(self): raise NotImplementedError
    def __lt__(self, other): return self.area() < other.area()`}}],Be={"day1-welcome":he,"day1-variables":fe,"day1-datatypes":me,"day1-strings":ge,"day1-operators":ye,"day1-io":be,"day2-boolean":xe,"day2-conditionals":ve,"day2-while":we,"day2-for":_e,"day2-patterns":ke,"day3-functions":Te,"day3-advanced-fn":Ce,"day3-lists":Ae,"day3-list-patterns":Se,"day3-tuples":Fe,"day4-dicts":Pe,"day4-dict-patterns":Ie,"day4-sets":Ee,"day4-files":qe,"day4-oop":Ne};function ze(d){return Be[d]}const We={class:"relative group rounded-xl overflow-hidden border border-border bg-[#0a0a1f]"},Oe={class:"flex items-center justify-between px-6 py-3 border-b border-border/50 bg-surface/30"},Me={class:"flex items-center gap-3"},Le={key:0,class:"text-sm font-mono text-text-muted ml-3"},De={key:1,class:"text-sm font-mono text-text-muted ml-3"},Re={class:"p-6 overflow-x-auto text-lg leading-relaxed font-mono"},je=["innerHTML"],He=N({__name:"CodeBlock",props:{code:{},language:{},filename:{}},setup(d){const y=d,m=F(!1),f=new Set(["def","class","if","elif","else","for","while","return","import","from","as","try","except","finally","with","raise","pass","break","continue","and","or","not","in","is","lambda","yield","global","nonlocal","assert","del","True","False","None","match","case","async","await"]),g=new Set(["print","input","len","range","type","int","float","str","bool","list","dict","set","tuple","enumerate","zip","map","filter","sorted","reversed","abs","max","min","sum","round","open","super","isinstance","hasattr","getattr","setattr","any","all","id","hex","oct","bin","ord","chr","repr","hash","callable","dir","vars","help","iter","next","property","staticmethod","classmethod","frozenset","bytes","bytearray","complex","divmod","pow","format","object","slice","ValueError","TypeError","KeyError","IndexError","AttributeError","NameError","FileNotFoundError","PermissionError","IsADirectoryError","ZeroDivisionError","StopIteration","RuntimeError","Exception","NotImplementedError","IOError","OSError"]),s=new Set(["self","cls"]);function b(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h(e,p){return`<span class="${e}">${b(p)}</span>`}function _(e,p){if(p){const n=p.repeat(3),c=e.indexOf(n);if(c!==-1){const u=h("hl-str",e.slice(0,c+3)),T=_(e.slice(c+3),null);return{html:u+T.html,mlQuote:T.mlQuote}}return{html:h("hl-str",e),mlQuote:p}}const r=[];let o=0,v="";for(;o<e.length;){if(e[o]===" "||e[o]==="	"){let n=o;for(;n<e.length&&(e[n]===" "||e[n]==="	");)n++;r.push(e.slice(o,n)),o=n;continue}if(e[o]==="#"){r.push(h("hl-cm",e.slice(o))),o=e.length;continue}if(e[o]==="@"){let n=o+1;for(;n<e.length&&/[a-zA-Z0-9_.]/.test(e[n]);)n++;r.push(h("hl-dec",e.slice(o,n))),v="",o=n;continue}if(e[o]==='"'||e[o]==="'"){const n=e[o];if(e.startsWith(n.repeat(3),o)){const u=o+3,T=e.indexOf(n.repeat(3),u);if(T!==-1)r.push(h("hl-str",e.slice(o,T+3))),o=T+3;else return r.push(h("hl-str",e.slice(o))),{html:r.join(""),mlQuote:n}}else{let u=o+1;for(;u<e.length;){if(e[u]==="\\"){u+=2;continue}if(e[u]===n){u++;break}u++}r.push(h("hl-str",e.slice(o,u))),o=u}v="";continue}if(/[a-zA-Z_]/.test(e[o])){let n=o;for(;n<e.length&&/[a-zA-Z0-9_]/.test(e[n]);)n++;const c=e.slice(o,n);f.has(c)?r.push(h("hl-kw",c)):g.has(c)&&n<e.length&&e[n]==="("?r.push(h("hl-bi",c)):s.has(c)?r.push(h("hl-sp",c)):v==="def"?r.push(h("hl-fn",c)):v==="class"?r.push(h("hl-cls",c)):r.push(b(c)),v=c,o=n;continue}if(/\d/.test(e[o])){let n=o;if(e[o]==="0"&&n+1<e.length&&/[xXoObB]/.test(e[n+1]))for(n+=2;n<e.length&&/[0-9a-fA-F_]/.test(e[n]);)n++;else{for(;n<e.length&&/[\d_]/.test(e[n]);)n++;if(n<e.length&&e[n]===".")for(n++;n<e.length&&/[\d_]/.test(e[n]);)n++;if(n<e.length&&/[eE]/.test(e[n]))for(n++,n<e.length&&/[+-]/.test(e[n])&&n++;n<e.length&&/[\d_]/.test(e[n]);)n++}r.push(h("hl-num",e.slice(o,n))),v="",o=n;continue}r.push(b(e[o])),v="",o++}return{html:r.join(""),mlQuote:null}}const k=C(()=>{const e=y.code.split(`
`);let p=null;const r=[];for(const o of e){const v=_(o,p);r.push(v.html),p=v.mlQuote}return r.join(`
`)});async function x(){try{await navigator.clipboard.writeText(y.code),m.value=!0,setTimeout(()=>{m.value=!1},2e3)}catch{}}return(e,p)=>(i(),a("div",We,[t("div",Oe,[t("div",Me,[p[0]||(p[0]=t("div",{class:"flex gap-2"},[t("span",{class:"w-3 h-3 rounded-full bg-coral/60"}),t("span",{class:"w-3 h-3 rounded-full bg-amber/60"}),t("span",{class:"w-3 h-3 rounded-full bg-mint/60"})],-1)),d.filename?(i(),a("span",Le,l(d.filename),1)):(i(),a("span",De,"python"))]),t("button",{class:"text-sm text-text-muted hover:text-mint transition-colors px-3 py-1.5 rounded opacity-0 group-hover:opacity-100",onClick:x},l(m.value?"✓ Copied":"Copy"),1)]),t("pre",Re,[t("code",{innerHTML:k.value},null,8,je)])]))}}),Ue=R(He,[["__scopeId","data-v-8c8c89c3"]]),$e={key:0,class:"flex items-center gap-3 mb-2"},Ye={class:"text-xl"},Ve={class:"text-lg font-semibold"},Ge=["innerHTML"],Ke=N({__name:"Callout",props:{variant:{},title:{},content:{}},setup(d){const y={info:"bg-sky/5 border-sky text-sky/90",warning:"bg-amber/5 border-amber text-amber/90",tip:"bg-mint/5 border-mint text-mint/90",danger:"bg-coral/5 border-coral text-coral/90",python:"bg-lavender/5 border-lavender text-lavender/90"},m={info:"ℹ️",warning:"⚠️",tip:"💡",danger:"🚫",python:"🐍"};return(f,g)=>(i(),a("div",{class:I(["rounded-xl border-l-4 p-6",y[d.variant]])},[d.title?(i(),a("div",$e,[t("span",Ye,l(m[d.variant]),1),t("span",Ve,l(d.title),1)])):w("",!0),t("div",{class:"text-lg leading-relaxed",innerHTML:d.content},null,8,Ge)],2))}}),Qe={class:"rounded-2xl border border-border bg-card overflow-hidden"},Je={key:0,class:"px-6 py-4 bg-mint/5 border-b border-border/30 text-base text-mint/90 leading-relaxed"},Ze={class:"border-b border-border/50"},Xe={class:"flex items-center gap-3 px-6 py-4 border-b border-border/30 bg-surface/10"},et=["disabled"],tt={key:0,class:"animate-spin"},nt={key:1},it={key:0,class:"text-sm text-text-muted animate-pulse"},rt={class:"bg-[#080818]"},at={key:0,class:"px-6 py-3 border-t border-border/20"},ot={key:0,class:"flex items-center gap-3 text-base text-mint"},st={key:1,class:"text-base text-amber"},lt={class:"font-mono"},pt=N({__name:"CodePlayground",props:{defaultCode:{},instructions:{},expectedOutput:{}},setup(d){const y=d,m=H(),f=F();let g=null;const s=F(""),b=F(!1),h=C(()=>!y.expectedOutput||!s.value?!1:s.value.trim()===y.expectedOutput.trim());j(()=>{if(f.value){const x=U.create({doc:y.defaultCode,extensions:[Y(),V(),$,G.of([...K,Q]),J(),Z(),X(),W.theme({"&":{backgroundColor:"#0a0a1f"},".cm-gutters":{backgroundColor:"#0a0a1f",borderRight:"1px solid #1a1a35"}})]});g=new W({state:x,parent:f.value})}});async function _(){if(!g)return;const x=g.state.doc.toString();b.value=!1,s.value="";const e=await m.runCode(x);e.error?(b.value=!0,s.value=e.error):s.value=e.output}function k(){g&&(g.dispatch({changes:{from:0,to:g.state.doc.length,insert:y.defaultCode}}),s.value="",b.value=!1)}return(x,e)=>(i(),a("div",Qe,[t("div",{class:"flex items-center justify-between px-6 py-4 border-b border-border/50 bg-surface/20"},[e[0]||(e[0]=t("div",{class:"flex items-center gap-3"},[t("span",{class:"text-mint text-base"},"▶"),t("span",{class:"text-base font-semibold text-text-primary"},"Interactive Playground")],-1)),t("div",{class:"flex items-center gap-3"},[t("button",{class:"text-sm text-text-muted hover:text-amber transition-colors px-3 py-1.5 rounded hover:bg-surface/50",onClick:k}," ↻ Reset ")])]),d.instructions?(i(),a("div",Je," 💡 "+l(d.instructions),1)):w("",!0),t("div",Ze,[t("div",{ref_key:"editorContainer",ref:f,class:"min-h-[160px]"},null,512)]),t("div",Xe,[t("button",{class:"flex items-center gap-2 rounded-lg bg-mint/10 border border-mint/20 px-4 py-2 text-base font-medium text-mint hover:bg-mint/20 transition-all",disabled:B(m).isRunning,onClick:_},[B(m).isRunning?(i(),a("span",tt,"⏳")):(i(),a("span",nt,"▶")),A(" "+l(B(m).isRunning?"Running...":"Run Code"),1)],8,et),B(m).isLoading?(i(),a("span",it," Loading Python runtime... ")):w("",!0)]),t("div",rt,[e[4]||(e[4]=t("div",{class:"flex items-center gap-3 px-6 py-3 border-b border-border/20"},[t("span",{class:"text-sm font-mono text-text-muted uppercase tracking-wider"},"Output")],-1)),t("pre",{class:I(["px-6 py-4 font-mono text-base min-h-[60px] max-h-[300px] overflow-auto whitespace-pre-wrap",b.value?"text-coral":"text-mint/90"])},l(s.value||"# Run your code to see output here"),3),d.expectedOutput&&s.value&&!b.value?(i(),a("div",at,[h.value?(i(),a("div",ot,[...e[1]||(e[1]=[t("span",null,"✅",-1),A(" Output matches expected result! ",-1)])])):(i(),a("div",st,[e[2]||(e[2]=t("span",null,"⚡",-1)),e[3]||(e[3]=A(" Expected: ",-1)),t("code",lt,l(d.expectedOutput),1)]))])):w("",!0)])]))}}),dt={class:"rounded-2xl border border-border bg-card overflow-hidden"},ct={class:"flex items-center justify-between px-6 py-4 border-b border-border/50 bg-lavender/5"},ut={class:"flex items-center gap-3"},ht={class:"text-base font-semibold text-text-primary"},ft={class:"flex items-center gap-3"},mt={class:"text-sm text-text-muted"},gt={class:"h-1.5 w-24 rounded-full bg-surface overflow-hidden"},yt={class:"divide-y divide-border/30"},bt={class:"text-lg font-medium text-text-primary mb-4"},xt={class:"space-y-3"},vt=["disabled","onClick"],wt={class:"font-mono text-text-muted mr-3"},_t={class:"text-lg font-medium text-text-primary mb-3"},kt={class:"mb-4 rounded-lg bg-[#0a0a1f] border border-border/30 p-4 font-mono text-base text-mint/80"},Tt={class:"space-y-3"},Ct=["disabled","onClick"],At={class:"text-lg font-medium text-text-primary mb-4"},St={class:"mb-4 rounded-lg bg-[#0a0a1f] border border-border/30 p-4 font-mono text-base text-text-secondary"},Ft={class:"flex gap-3"},Pt=["onUpdate:modelValue","disabled","onKeyup"],It=["onClick"],Et={class:"font-semibold"},qt=N({__name:"QuizWidget",props:{quiz:{}},setup(d){const y=d,m=O(),f=F({}),g=F({}),s=C(()=>Object.keys(f.value).length);function b(x,e){const p=y.quiz.questions[x],r=e===p.correctIndex;f.value[x]=r,k()}function h(x,e){const p=(g.value[x]||"").trim(),r=e.answer.trim(),o=e.caseSensitive?p===r:p.toLowerCase()===r.toLowerCase();f.value[x]=o,k()}function _(x,e,p){return f.value[x]===void 0?"border-border hover:border-lavender/30 hover:bg-lavender/5 text-text-secondary":e===p?"border-mint/40 bg-mint/10 text-mint":(f.value[x]===!1&&e!==p,"border-border/30 text-text-muted")}function k(){const x=y.quiz.questions.length,e=Object.values(f.value).filter(Boolean).length;m.saveQuizScore(y.quiz.id,e,x)}return(x,e)=>(i(),a("div",dt,[t("div",ct,[t("div",ut,[e[0]||(e[0]=t("span",{class:"text-lavender text-base"},"🧠",-1)),t("span",ht,l(d.quiz.title||"Knowledge Check"),1)]),t("div",ft,[t("span",mt,l(s.value)+"/"+l(d.quiz.questions.length)+" answered ",1),t("div",gt,[t("div",{class:"h-full bg-lavender transition-all duration-500",style:te({width:`${s.value/d.quiz.questions.length*100}%`})},null,4)])])]),t("div",yt,[(i(!0),a(S,null,q(d.quiz.questions,(p,r)=>(i(),a("div",{key:r,class:"p-6"},[p.type==="mcq"?(i(),a(S,{key:0},[t("p",bt,l(r+1)+". "+l(p.question),1),t("div",xt,[(i(!0),a(S,null,q(p.options,(o,v)=>(i(),a("button",{key:v,class:I(["w-full text-left rounded-lg border px-4 py-3 text-base transition-all",_(r,v,p.correctIndex)]),disabled:f.value[r]!==void 0,onClick:n=>b(r,v)},[t("span",wt,l(String.fromCharCode(65+v))+".",1),A(" "+l(o),1)],10,vt))),128))])],64)):p.type==="predict-output"?(i(),a(S,{key:1},[t("p",_t,l(r+1)+". What will this code output?",1),t("pre",kt,l(p.code),1),t("div",Tt,[(i(!0),a(S,null,q(p.options,(o,v)=>(i(),a("button",{key:v,class:I(["w-full text-left rounded-lg border px-4 py-3 text-base font-mono transition-all",_(r,v,p.correctIndex)]),disabled:f.value[r]!==void 0,onClick:n=>b(r,v)},l(o),11,Ct))),128))])],64)):p.type==="fill-blank"?(i(),a(S,{key:2},[t("p",At,l(r+1)+". Fill in the blank:",1),t("pre",St,l(p.prompt),1),t("div",Ft,[ne(t("input",{"onUpdate:modelValue":o=>g.value[r]=o,type:"text",class:"flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-base font-mono text-text-primary focus:border-mint/50 focus:outline-none",placeholder:"Type your answer...",disabled:f.value[r]!==void 0,onKeyup:re(o=>h(r,p),["enter"])},null,40,Pt),[[ie,g.value[r]]]),f.value[r]===void 0?(i(),a("button",{key:0,class:"rounded-lg bg-lavender/10 border border-lavender/20 px-4 py-3 text-base text-lavender hover:bg-lavender/20 transition-all",onClick:o=>h(r,p)}," Check ",8,It)):w("",!0)])],64)):w("",!0),z(ae,{name:"fade"},{default:E(()=>[f.value[r]!==void 0?(i(),a("div",{key:0,class:I(["mt-4 rounded-lg p-4 text-base leading-relaxed",f.value[r]===!0?"bg-mint/5 text-mint/80 border border-mint/20":"bg-coral/5 text-coral/80 border border-coral/20"])},[t("span",Et,l(f.value[r]===!0?"✅ Correct!":"❌ Not quite."),1),A(" "+l(p.explanation),1)],2)):w("",!0)]),_:2},1024)]))),128))])]))}}),Nt=R(qt,[["__scopeId","data-v-28c434af"]]),ee=N({__name:"Badge",props:{color:{default:"mint"}},setup(d){const y=d,m=C(()=>({mint:"bg-mint/10 text-mint border border-mint/20",amber:"bg-amber/10 text-amber border border-amber/20",coral:"bg-coral/10 text-coral border border-coral/20",lavender:"bg-lavender/10 text-lavender border border-lavender/20",sky:"bg-sky/10 text-sky border border-sky/20"})[y.color]);return(f,g)=>(i(),a("span",{class:I(["inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",m.value])},[oe(f.$slots,"default")],2))}}),Bt={class:"rounded-2xl border border-border bg-card overflow-hidden"},zt={class:"flex items-center justify-between px-6 py-4 border-b border-border/50 bg-amber/5"},Wt={class:"flex items-center gap-3"},Ot={class:"text-base font-semibold text-text-primary"},Mt={class:"p-6 border-b border-border/30"},Lt=["innerHTML"],Dt={key:0,class:"mt-4 space-y-3"},Rt={key:0,class:"text-text-muted"},jt={class:"text-sky"},Ht={class:"text-text-muted"},Ut={class:"text-mint"},$t={key:1,class:"text-text-muted mt-2 text-sm font-body"},Yt={class:"border-b border-border/50"},Vt={class:"flex items-center gap-3 px-6 py-4 border-b border-border/30 bg-surface/10"},Gt=["disabled"],Kt={key:0,class:"animate-spin"},Qt={key:1},Jt={class:"ml-auto flex gap-3"},Zt={key:0,class:"p-6 space-y-3 border-b border-border/30"},Xt={class:"text-text-muted"},en={key:0,class:"flex items-center gap-3 text-lg text-mint font-semibold mt-4"},tn={key:1,class:"p-6 border-b border-border/30"},nn={key:2,class:"p-6"},rn={class:"rounded-lg bg-[#0a0a1f] border border-border/30 p-4 font-mono text-base text-mint/90 overflow-auto"},an=N({__name:"CodingChallenge",props:{challenge:{}},setup(d){const y=d,m=H(),f=O(),g=F();let s=null;const b=F(!1),h=F(0),_=F(!1),k=F([]),x=C(()=>y.challenge.testCases.filter(n=>!n.hidden)),e=C(()=>k.value.length>0&&k.value.every(n=>n.passed)),p=C(()=>({easy:"mint",medium:"amber",hard:"coral"})[y.challenge.difficulty]);j(()=>{if(g.value){const n=U.create({doc:y.challenge.starterCode,extensions:[Y(),V(),$,G.of([...K,Q]),J(),Z(),X(),W.theme({"&":{backgroundColor:"#0a0a1f"},".cm-gutters":{backgroundColor:"#0a0a1f",borderRight:"1px solid #1a1a35"}})]});s=new W({state:n,parent:g.value})}});async function r(){if(!s)return;const n=s.state.doc.toString();k.value=[];const c=[];for(const u of y.challenge.testCases){const T=u.input?`${n}
${u.input}`:n,M=await m.runCode(T),L=(M.error||M.output).trim();c.push({passed:L===u.expected.trim(),expected:u.expected.trim(),actual:L})}k.value=c,e.value&&f.completeChallenge(y.challenge.id)}function o(){s&&(s.dispatch({changes:{from:0,to:s.state.doc.length,insert:y.challenge.starterCode}}),k.value=[])}function v(n){return n.replace(/`([^`]+)`/g,'<code class="px-1.5 py-0.5 rounded bg-surface text-mint font-mono text-xs">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong class="text-text-primary font-semibold">$1</strong>')}return(n,c)=>(i(),a("div",Bt,[t("div",zt,[t("div",Wt,[c[3]||(c[3]=t("span",{class:"text-amber text-base"},"🏆",-1)),t("span",Ot,l(d.challenge.title),1)]),z(ee,{color:p.value},{default:E(()=>[A(l(d.challenge.difficulty),1)]),_:1},8,["color"])]),t("div",Mt,[t("p",{class:"text-lg text-text-secondary leading-relaxed",innerHTML:v(d.challenge.description)},null,8,Lt),x.value.length?(i(),a("div",Dt,[c[6]||(c[6]=t("p",{class:"text-sm font-semibold text-text-muted uppercase tracking-wider"},"Examples:",-1)),(i(!0),a(S,null,q(x.value,(u,T)=>(i(),a("div",{key:T,class:"rounded-lg bg-surface/50 p-4 text-base font-mono"},[u.input?(i(),a("div",Rt,[c[4]||(c[4]=A("Input: ",-1)),t("span",jt,l(u.input),1)])):w("",!0),t("div",Ht,[c[5]||(c[5]=A("Expected: ",-1)),t("span",Ut,l(u.expected),1)]),u.description?(i(),a("div",$t,l(u.description),1)):w("",!0)]))),128))])):w("",!0)]),t("div",Yt,[t("div",{ref_key:"editorContainer",ref:g,class:"min-h-[180px]"},null,512)]),t("div",Vt,[t("button",{class:"flex items-center gap-2 rounded-lg bg-amber/10 border border-amber/20 px-4 py-2 text-base font-medium text-amber hover:bg-amber/20 transition-all",disabled:B(m).isRunning,onClick:r},[B(m).isRunning?(i(),a("span",Kt,"⏳")):(i(),a("span",Qt,"🧪")),c[7]||(c[7]=A(" Run Tests ",-1))],8,Gt),t("button",{class:"rounded-lg px-4 py-2 text-base text-text-muted hover:text-text-primary hover:bg-surface/50 transition-all",onClick:o}," ↻ Reset "),t("div",Jt,[!b.value&&h.value<d.challenge.hints.length?(i(),a("button",{key:0,class:"rounded-lg px-4 py-2 text-base text-lavender hover:bg-lavender/10 transition-all",onClick:c[0]||(c[0]=u=>b.value=!0)}," 💡 Hint "+l(h.value+1)+"/"+l(d.challenge.hints.length),1)):w("",!0),_.value?w("",!0):(i(),a("button",{key:1,class:"rounded-lg px-4 py-2 text-base text-text-muted hover:text-coral hover:bg-coral/10 transition-all",onClick:c[1]||(c[1]=u=>_.value=!0)}," 👀 Solution "))])]),k.value.length?(i(),a("div",Zt,[(i(!0),a(S,null,q(k.value,(u,T)=>(i(),a("div",{key:T,class:I(["flex items-center gap-3 rounded-lg px-4 py-3 text-base font-mono",u.passed?"bg-mint/5 text-mint border border-mint/20":"bg-coral/5 text-coral border border-coral/20"])},[t("span",null,l(u.passed?"✅":"❌"),1),t("span",null,"Test "+l(T+1)+":",1),t("span",Xt,"Expected "+l(u.expected),1),t("span",null,"→ Got "+l(u.actual),1)],2))),128)),e.value?(i(),a("div",en," 🎉 All tests passed! Challenge complete! ")):w("",!0)])):w("",!0),b.value?(i(),a("div",tn,[(i(!0),a(S,null,q(d.challenge.hints.slice(0,h.value+1),(u,T)=>(i(),a("div",{key:T,class:"rounded-lg bg-lavender/5 border border-lavender/10 p-4 mb-3 text-base text-lavender/90"}," 💡 Hint "+l(T+1)+": "+l(u),1))),128)),h.value<d.challenge.hints.length-1?(i(),a("button",{key:0,class:"text-sm text-lavender hover:underline mt-2",onClick:c[2]||(c[2]=u=>h.value++)}," Show next hint → ")):w("",!0)])):w("",!0),_.value?(i(),a("div",nn,[c[8]||(c[8]=t("p",{class:"text-sm font-semibold text-text-muted uppercase tracking-wider mb-3"},"Solution:",-1)),t("pre",rn,l(d.challenge.solution),1)])):w("",!0)]))}}),on={class:"space-y-10 stagger-children"},sn=["innerHTML"],ln=["innerHTML"],pn={key:8,class:"border-border/50 my-8"},dn=N({__name:"SectionRenderer",props:{blocks:{}},setup(d){const y={1:"text-5xl font-display font-bold text-text-primary mt-4 mb-6 gradient-text",2:"text-3xl font-display font-semibold text-text-primary mt-10 mb-4",3:"text-2xl font-display font-medium text-text-secondary mt-8 mb-3"};function m(f){return f.replace(/`([^`]+)`/g,'<code class="px-2 py-1 rounded bg-surface text-mint font-mono text-base">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong class="text-text-primary font-semibold">$1</strong>').replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/\n/g,"<br />")}return(f,g)=>(i(),a("div",on,[(i(!0),a(S,null,q(d.blocks,(s,b)=>(i(),a(S,{key:b},[s.type==="heading"?(i(),P(D("h"+s.level),{key:0,class:I(y[s.level])},{default:E(()=>[A(l(s.text),1)]),_:2},1032,["class"])):s.type==="text"?(i(),a("div",{key:1,class:"text-lg leading-relaxed text-text-secondary prose-invert",innerHTML:m(s.content)},null,8,sn)):s.type==="code"?(i(),P(Ue,{key:2,code:s.code,language:s.language,filename:s.filename},null,8,["code","language","filename"])):s.type==="callout"?(i(),P(Ke,{key:3,variant:s.variant,title:s.title,content:m(s.content)},null,8,["variant","title","content"])):s.type==="list"?(i(),P(D(s.ordered?"ol":"ul"),{key:4,class:I(["text-lg text-text-secondary space-y-2 ml-6",s.ordered?"list-decimal":"list-disc"])},{default:E(()=>[(i(!0),a(S,null,q(s.items,(h,_)=>(i(),a("li",{key:_,innerHTML:m(h),class:"leading-relaxed"},null,8,ln))),128))]),_:2},1032,["class"])):s.type==="playground"?(i(),P(pt,{key:5,"default-code":s.defaultCode,instructions:s.instructions,"expected-output":s.expectedOutput},null,8,["default-code","instructions","expected-output"])):s.type==="quiz"?(i(),P(Nt,{key:6,quiz:s.quiz},null,8,["quiz"])):s.type==="challenge"?(i(),P(an,{key:7,challenge:s.challenge},null,8,["challenge"])):s.type==="divider"?(i(),a("hr",pn)):w("",!0)],64))),128))]))}}),cn={key:0},un={class:"mb-10"},hn={key:0,class:"flex items-center gap-3 mb-4"},fn={class:"text-text-muted text-sm font-medium"},mn={class:"mt-16 flex items-center justify-between border-t border-border pt-8"},gn={class:"font-medium"},yn={key:1},bn={key:3,class:"flex items-center gap-3 rounded-xl bg-mint/10 border border-mint/20 px-6 py-4 text-base text-mint"},xn={class:"text-right"},vn={class:"font-medium"},wn={key:5},_n={key:1,class:"flex flex-col items-center justify-center py-20 text-center"},An=N({__name:"WorkshopPage",props:{day:{},section:{}},setup(d){const y=pe(),m=O(),f=d,g=C(()=>y.params.section||f.section||""),s=C(()=>ze(g.value)),b=C(()=>de(g.value)),h=C(()=>ce(g.value)),_=C(()=>ue(g.value)),k=C(()=>m.isSectionCompleted(g.value)),x=C(()=>({1:"mint",2:"amber",3:"lavender",4:"coral"})[String(b.value?.day.id)]||"mint");function e(){m.completeSection(g.value)}return se(g,p=>{p&&b.value&&m.setCurrentLocation(b.value.day.id,p)},{immediate:!0}),(p,r)=>{const o=le("router-link");return s.value?(i(),a("div",cn,[t("div",un,[b.value?(i(),a("div",hn,[z(ee,{color:x.value},{default:E(()=>[A("Day "+l(b.value.day.id),1)]),_:1},8,["color"]),t("span",fn,l(b.value.day.title),1)])):w("",!0)]),z(dn,{blocks:s.value},null,8,["blocks"]),t("div",mn,[_.value?(i(),P(o,{key:0,to:`/workshop/day/${_.value.day.id}/${_.value.section.id}`,class:"group flex items-center gap-3 rounded-xl border border-border px-6 py-4 text-base text-text-secondary hover:border-mint/30 hover:text-mint transition-all"},{default:E(()=>[r[1]||(r[1]=t("svg",{class:"h-5 w-5 transition-transform group-hover:-translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)),t("div",null,[r[0]||(r[0]=t("div",{class:"text-xs text-text-muted"},"Previous",-1)),t("div",gn,l(_.value.section.title),1)])]),_:1},8,["to"])):(i(),a("div",yn)),k.value?(i(),a("div",bn,[...r[2]||(r[2]=[t("span",null,"✅",-1),A(" Completed ",-1)])])):(i(),a("button",{key:2,class:"rounded-xl bg-mint/10 border border-mint/20 px-6 py-4 text-base font-medium text-mint hover:bg-mint/20 transition-all",onClick:e}," ✓ Mark Complete ")),h.value?(i(),P(o,{key:4,to:`/workshop/day/${h.value.day.id}/${h.value.section.id}`,class:"group flex items-center gap-3 rounded-xl border border-border px-6 py-4 text-base text-text-secondary hover:border-mint/30 hover:text-mint transition-all"},{default:E(()=>[t("div",xn,[r[3]||(r[3]=t("div",{class:"text-xs text-text-muted"},"Next",-1)),t("div",vn,l(h.value.section.title),1)]),r[4]||(r[4]=t("svg",{class:"h-4 w-4 transition-transform group-hover:translate-x-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1))]),_:1},8,["to"])):(i(),a("div",wn))])])):(i(),a("div",_n,[r[6]||(r[6]=t("div",{class:"text-4xl mb-4"},"📭",-1)),r[7]||(r[7]=t("h2",{class:"text-lg font-display font-semibold text-text-primary mb-2"},"Section Not Found",-1)),r[8]||(r[8]=t("p",{class:"text-sm text-text-secondary mb-4"},"This section doesn't exist or hasn't been created yet.",-1)),z(o,{to:"/workshop",class:"text-sm text-mint hover:underline"},{default:E(()=>[...r[5]||(r[5]=[A("← Go to Workshop",-1)])]),_:1})]))}}});export{An as default};

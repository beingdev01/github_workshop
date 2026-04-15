import{d as F,o as a,c as o,a as e,t as c,l as E,m as _,_ as $,n as A,f as T,q as H,g as G,u as R,i as k,F as I,r as j,b as L,w as N,T as V,k as q,s as O,v as B,j as z,x as Y,e as P,y as M,z as K,h as Q,p as X}from"./index-BOuIOrta.js";import{u as J,g as Z,a as ee,b as te}from"./structure-CX8_zhKV.js";import{u as ne,E as ae,o as ie,l as re,p as oe,k as se,d as le,i as ce,a as de,b as pe,c as ue,e as W}from"./index-CBZ1V5MW.js";const me=[{type:"heading",level:1,text:"Welcome to Python! 🐍"},{type:"text",content:"Python is a powerful, readable programming language used for everything from web development to data science and AI. In this workshop, you'll learn how to write real, working Python code right in your browser."},{type:"callout",variant:"tip",title:"Why Python?",content:"Created by **Guido van Rossum** in 1991, Python was designed to be simple and readable. Its syntax reads almost like English. Companies like **Google, Netflix, Instagram, and NASA** all rely on Python."},{type:"heading",level:2,text:"Your First Program"},{type:"text",content:"Let's start by displaying text on the screen. In Python, this takes just one line:"},{type:"code",code:'print("Hello, World!")',language:"python"},{type:"text",content:"The `print()` function takes whatever you put inside its parentheses and displays it. The text inside the quotes is called a **string**."},{type:"callout",variant:"warning",title:"Common Mistake",content:'Always include the parentheses `()` after `print`. Writing `print "Hello"` causes a **SyntaxError** in Python 3.'},{type:"playground",defaultCode:`# Try changing the message below:
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
print("age:", 25)            # Or let print() handle it`,language:"python"},{type:"callout",variant:"info",title:"Debugging Process",content:"When you encounter an error, follow this process: **1) Read** the error message carefully (Python tells you the line number and error type). **2) Understand** what went wrong. **3) Fix** the issue. **4) Test** again. Error messages are not your enemy — they are detailed diagnostic tools!"},{type:"heading",level:1,text:"Going Deeper — What `print()` Does Internally"},{type:"text",content:"Even your first Python program uses Python's object model. Names are looked up in namespaces, values are heap objects, and function calls create temporary call frames."},{type:"code",code:`message = "Hello, World!"
print(message)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Namespace + Heap During `print(message)`",description:"The variable binds to a string object, and `print` resolves to a built-in function object.",bindings:[{scope:"global",name:"message",objectId:"S_MSG"},{scope:"builtins",name:"print",objectId:"F_PRINT"}],objects:[{id:"S_MSG",type:"str",value:'"Hello, World!"',mutable:!1,note:"A heap string object. Strings are immutable in Python.",accent:"amber"},{id:"F_PRINT",type:"builtin function",value:"<built-in function print>",mutable:!1,note:"Looked up from builtins and invoked with the argument object.",accent:"sky"}],insights:["Variables store references to objects, not raw values.","Function calls add a temporary call frame, then return and discard it.","The visible console output is a side effect of writing to stdout."]},{type:"memoryLab",title:"Interactive Trace: First Program Execution",prompt:"Step through what happens in memory for a tiny two-line program.",steps:[{title:"Bind the Message",action:'Run `message = "Hello, World!"`',code:'message = "Hello, World!"',bindings:[{scope:"global",name:"message",objectId:"S1"},{scope:"builtins",name:"print",objectId:"F1"}],objects:[{id:"S1",type:"str",value:'"Hello, World!"',mutable:!1,refCount:1,accent:"amber"},{id:"F1",type:"builtin function",value:"<built-in function print>",mutable:!1,refCount:1,accent:"sky"}],explanation:"Python allocates a string object and binds the name `message` to it. Builtins already contains `print`."},{title:"Enter Function Call",action:"Run `print(message)` and create a call frame",code:"print(message)",bindings:[{scope:"global",name:"message",objectId:"S1"},{scope:"builtins",name:"print",objectId:"F1"},{scope:"frame:print",name:"value",objectId:"S1"},{scope:"runtime",name:"stdout",objectId:"B1"}],objects:[{id:"S1",type:"str",value:'"Hello, World!"',mutable:!1,refCount:2,accent:"amber"},{id:"F1",type:"builtin function",value:"<built-in function print>",mutable:!1,refCount:1,accent:"sky"},{id:"B1",type:"stream buffer",value:'""',mutable:!0,refCount:1,accent:"mint"}],explanation:"The call frame parameter points to the **same** string object as `message`."},{title:"Write Output",action:"print writes text plus newline to stdout",code:'stdout.write("Hello, World!\\n")',bindings:[{scope:"global",name:"message",objectId:"S1"},{scope:"builtins",name:"print",objectId:"F1"},{scope:"frame:print",name:"value",objectId:"S1"},{scope:"runtime",name:"stdout",objectId:"B1"}],objects:[{id:"S1",type:"str",value:'"Hello, World!"',mutable:!1,refCount:2,accent:"amber"},{id:"B1",type:"stream buffer",value:'"Hello, World!\\n"',mutable:!0,refCount:1,accent:"mint"}],explanation:"`print` does not mutate your string; it sends characters to the output stream."},{title:"Return to Global Scope",action:"print frame is destroyed after the call returns",code:"# end of call",bindings:[{scope:"global",name:"message",objectId:"S1"},{scope:"builtins",name:"print",objectId:"F1"},{scope:"runtime",name:"stdout",objectId:"B1"}],objects:[{id:"S1",type:"str",value:'"Hello, World!"',mutable:!1,refCount:1,accent:"amber"},{id:"B1",type:"stream buffer",value:'"Hello, World!\\n"',mutable:!0,refCount:1,accent:"mint"}],explanation:"Call frames are temporary. Your global bindings remain, and stdout now contains emitted text."}]}],he=[{type:"heading",level:1,text:"Variables & Memory"},{type:"text",content:"Variables store and retrieve data. A variable is a **name** that refers to a **value** stored in memory."},{type:"callout",variant:"python",title:"Python's Memory Model",content:"In Python, variables are like **sticky labels** pointing to objects in memory. When you write `x = 42`, Python creates an integer object `42`, and `x` is a label pointing to it."},{type:"code",code:`# Creating variables using the = operator
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
print(f"Counter: {counter}")`,instructions:"Modify the variables, try creating your own, and experiment with swapping and augmented assignment."},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"What does the `=` operator do in Python?",answer:"The `=` operator is the assignment operator. It evaluates the right side first, then assigns the result to the left-side variable. `==` is used for equality checking."},{question:"What will this code output? `x = 5; x = x + 3; x *= 2; print(x)`",answer:"**16**\n\nx starts at 5. `x = x + 3` makes it 8. `x *= 2` (same as `x = x * 2`) makes it 16."},{question:"What will this code output? `a, b = 10, 20; a, b = b, a; print(a, b)`",answer:"**20 10**\n\nThe right side `b, a` evaluates to `(20, 10)` first, then this tuple is unpacked into `a` and `b`. So `a` becomes 20 and `b` becomes 10."},{question:"Which of the following is NOT a valid variable name in Python? `_my_var`, `myVar2`, `2nd_place`, `student_name`",answer:"**`2nd_place`**\n\nVariable names cannot start with a digit. `2nd_place` starts with `2`, which is invalid. All other options follow Python's naming rules."},{question:'What does this code print? `x = "hello"; print(type(x).__name__)`',answer:"**`str`**\n\n`type(x)` returns `<class 'str'>`. The `__name__` attribute of a type gives just the type name as a string, which is `\"str\"`."}]},{type:"heading",level:2,text:"Challenge Q&A"},{type:"qna",items:[{question:"Temperature Converter: Write a program that converts a temperature from Celsius to Fahrenheit. The formula is: F = (C * 9/5) + 32",answer:'**Solution:**\n\n```python\ncelsius = 37.5\nfahrenheit = (celsius * 9/5) + 32\nprint(f"{celsius}°C = {fahrenheit}°F")\n```\n\n**How it works:**\n- The formula is: `fahrenheit = (celsius * 9/5) + 32`\n- For celsius = 37.5: `(37.5 * 9/5) + 32 = 67.5 + 32 = 99.5`\n- Output: `37.5°C = 99.5°F`'}]},{type:"heading",level:1,text:"Going Deeper — The Memory Model"},{type:"heading",level:2,text:"Variables Are Labels, Not Boxes"},{type:"text",content:"In C, a variable is a **named box** that holds a value. In Python, a variable is a **name tag** stuck onto an object. Assignment doesn't copy — it rebinds the name."},{type:"code",code:`a = [1, 2, 3]
b = a            # b does NOT copy — it's the SAME list
b.append(4)
print(a)         # [1, 2, 3, 4]  — both names see the change
print(a is b)    # True — same object in memory
print(id(a), id(b))   # identical memory address`,language:"python"},{type:"callout",variant:"python",title:"id() — The Object's Address",content:"`id(x)` returns the memory address (in CPython). Two variables with equal `id()` point to the same object. This is how `is` is implemented: `a is b` ≡ `id(a) == id(b)`."},{type:"memoryDiagram",title:"Diagram: Alias Binding (`b = a`)",description:"Both names live in the namespace table and point to the same heap object.",bindings:[{scope:"global",name:"a",objectId:"L1"},{scope:"global",name:"b",objectId:"L1"}],objects:[{id:"L1",type:"list",value:"[1, 2, 3]",mutable:!0,note:"A single list object is shared by two labels.",accent:"mint"}],insights:["Assignment between names copies the reference, not the underlying object.","Because `a` and `b` share identity, mutation through one name is visible through the other.","Use `id()` when you need to verify object identity in memory-level debugging."]},{type:"heading",level:2,text:"Rebinding vs Mutating"},{type:"code",code:`a = [1, 2, 3]
b = a

# MUTATION — changes the underlying object
b.append(99)
print(a)   # [1, 2, 3, 99] ← a sees it

# REBINDING — makes b point to a new object
b = [9, 9, 9]
print(a)   # [1, 2, 3, 99] ← a unaffected`,language:"python"},{type:"memoryDiagram",title:"Diagram: After Rebinding (`b = [9, 9, 9]`)",description:"Mutation keeps identity; rebinding switches one name to a different object.",bindings:[{scope:"global",name:"a",objectId:"L1"},{scope:"global",name:"b",objectId:"L2"}],objects:[{id:"L1",type:"list",value:"[1, 2, 3, 99]",mutable:!0,refCount:1,note:"Original object stays alive because `a` still points to it.",accent:"amber"},{id:"L2",type:"list",value:"[9, 9, 9]",mutable:!0,refCount:1,note:"`b` now references a new object; identity changed.",accent:"sky"}],insights:["Mutation changes object contents without changing object identity.","Rebinding changes which object a name points to.","These are separate operations and explain many Python side effects."]},{type:"heading",level:2,text:"Call-by-Object-Reference"},{type:"text",content:`Python's function calling is neither "by value" nor "by reference" in the classic sense. The function receives the **same object**. What happens next depends on whether the object is mutable.`},{type:"code",code:`def add_item(lst):
    lst.append("new")     # MUTATES — caller sees it

def reassign(lst):
    lst = ["replaced"]    # REBINDS local name — caller does NOT see

items = ["a", "b"]
add_item(items)
print(items)    # ['a', 'b', 'new']
reassign(items)
print(items)    # ['a', 'b', 'new'] — unchanged`,language:"python"},{type:"memoryDiagram",title:"Diagram: Function Frame During `add_item(items)`",description:"The parameter `lst` in the call frame points to the same list object as `items` in global scope.",bindings:[{scope:"global",name:"items",objectId:"L3"},{scope:"frame:add_item",name:"lst",objectId:"L3"}],objects:[{id:"L3",type:"list",value:"['a', 'b', 'new']",mutable:!0,refCount:2,note:"Both frames share one object. `append` mutates shared state.",accent:"mint"}],insights:["Function arguments are new names bound to existing objects.","Local rebinding (`lst = ...`) changes only the local name, not the caller binding."]},{type:"heading",level:2,text:"Reference Counting & Garbage Collection"},{type:"text",content:"CPython tracks how many names point to each object (`ob_refcnt`). When the count hits zero, the object is immediately freed. A separate cycle-detecting collector handles objects that reference each other."},{type:"code",code:`import sys

a = [1, 2, 3]
print(sys.getrefcount(a))   # 2 (the variable + the temporary for getrefcount)

b = a
print(sys.getrefcount(a))   # 3

b = None
print(sys.getrefcount(a))   # 2

del a
# the list object's refcount becomes 0 → freed`,language:"python"},{type:"heading",level:2,text:"Interactive Trace: Memory State Over Time"},{type:"text",content:"Use this stepper like a debugger for memory. At each step, predict which names share identity (`is`) before revealing the next state."},{type:"memoryLab",title:"Assignment, Mutation, Rebinding, and Lifetime",prompt:"Walk through the steps and watch how bindings and refcounts evolve.",steps:[{title:"Create First Object",action:"Run `a = [10, 20]`",code:"a = [10, 20]",bindings:[{scope:"global",name:"a",objectId:"L1"}],objects:[{id:"L1",type:"list",value:"[10, 20]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Python creates one heap list object and binds the name `a` to it."},{title:"Create Alias",action:"Run `b = a`",code:"b = a",bindings:[{scope:"global",name:"a",objectId:"L1"},{scope:"global",name:"b",objectId:"L1"}],objects:[{id:"L1",type:"list",value:"[10, 20]",mutable:!0,refCount:2,accent:"mint"}],explanation:"No list copy is made. Both names point to the exact same object, so `a is b` is **True**."},{title:"Mutate Shared Object",action:"Run `b.append(30)`",code:"b.append(30)",bindings:[{scope:"global",name:"a",objectId:"L1"},{scope:"global",name:"b",objectId:"L1"}],objects:[{id:"L1",type:"list",value:"[10, 20, 30]",mutable:!0,refCount:2,accent:"mint"}],explanation:"Mutation edits the existing object in place, so reading through either name shows the new value."},{title:"Rebind One Name",action:"Run `b = [99]`",code:"b = [99]",bindings:[{scope:"global",name:"a",objectId:"L1"},{scope:"global",name:"b",objectId:"L2"}],objects:[{id:"L1",type:"list",value:"[10, 20, 30]",mutable:!0,refCount:1,accent:"amber"},{id:"L2",type:"list",value:"[99]",mutable:!0,refCount:1,accent:"sky"}],explanation:"Rebinding only changes `b`. The original object survives because `a` still references it."},{title:"Drop Final Reference",action:"Run `del a`",code:"del a",bindings:[{scope:"global",name:"b",objectId:"L2"}],objects:[{id:"L1",type:"list",value:"[10, 20, 30]",mutable:!0,refCount:0,accent:"coral",note:"No names reference this object now; CPython can reclaim it immediately."},{id:"L2",type:"list",value:"[99]",mutable:!0,refCount:1,accent:"mint"}],explanation:"When an object's reference count hits zero, it becomes eligible for deallocation in CPython."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Is Python pass-by-value or pass-by-reference?",answer:"Neither in the classic sense — it's **pass-by-object-reference**. The function receives the same object the caller had. Mutating it is visible outside; rebinding the local name is not."},{question:"What does `id(x)` actually return?",answer:"In CPython, the memory address of the object. Guaranteed unique and constant for the object's lifetime. Once the object is freed, the id may be reused."},{question:"Why does `a = b = [1, 2]` share the list between `a` and `b`?",answer:"Because assignment binds **names** to **objects**. Both `a` and `b` are stuck onto the same list object. Mutating through one shows through the other."},{question:"What's the difference between `==` and `is`?",answer:"`==` compares **values** (calls `__eq__`). `is` compares **identity** (same object in memory, i.e., same `id()`). Use `is` only for singletons: `None`, `True`, `False`."}]}],ye=[{type:"heading",level:1,text:"Data Types in Python"},{type:"text",content:"Every piece of data in Python has a **type**. The type determines what operations you can perform on that data. Python is **dynamically typed**, meaning you don't declare types explicitly—Python infers them from the value."},{type:"callout",variant:"python",title:"Dynamic vs Static Typing",content:"In statically typed languages (like Java), you declare types: `int x = 5;`. In Python, you write `x = 5` and the type is inferred. The type is associated with the value, not the variable."},{type:"text",content:"The four fundamental built-in data types are:"},{type:"list",items:["**`int`** (Integers): Whole numbers (`42`, `-7`, `0`)","**`float`** (Floating-point): Numbers with decimals (`3.14`, `-0.5`)","**`str`** (Strings): Text enclosed in quotes (`\"hello\"`, `'Python'`)","**`bool`** (Booleans): Logical values (`True` or `False`)"]},{type:"text",content:"Python also has **`NoneType`** (value `None`) to represent the absence of a value."},{type:"heading",level:2,text:"The type() Function"},{type:"text",content:"The built-in `type()` function returns the type of any value or variable:"},{type:"code",code:`# Checking types of literals
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
`,instructions:"Run the code to see type conversions in action. The truthy/falsy exploration shows which values Python considers True or False."},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"What are the main data types in Python?",answer:"`int` (integers), `float` (floating-point), `str` (strings), `bool` (booleans), and `None` (absence of value)."},{question:"How do you check the type of a value?",answer:"Use the `type()` function: `type(42)` returns `<class 'int'>`. For cleaner output, use `type(42).__name__` to get just `\"int\"`."},{question:"Is `bool` a separate type or related to `int`?",answer:"`bool` is a subclass of `int`. `True == 1` and `False == 0`. You can use booleans in arithmetic: `True + True` = `2`."},{question:"What values are falsy in Python?",answer:'`0`, `0.0`, `None`, `""` (empty string), `[]` (empty list), `{}` (empty dict), `set()`. Everything else is truthy.'},{question:"How do you convert between types?",answer:'Use `int()`, `float()`, `str()`, `bool()`, etc. Example: `int("42")` → `42`, `str(42)` → `"42"`. Be careful: `int("3.14")` raises an error.'}]},{type:"heading",level:1,text:"Going Deeper — How Python Stores Your Values"},{type:"text",content:'Everything in Python is an **object**. When you write `x = 42`, CPython doesn\'t store the integer "directly" in a 4-byte slot the way C does — it creates a full heap object with a header, a type pointer, and the value. Understanding this answers a dozen "why is Python like that?" questions at once.'},{type:"heading",level:2,text:"Every Object Has a Header"},{type:"text",content:"Inside CPython, every object carries a small header (called `PyObject`) containing:"},{type:"list",items:["**`ob_refcnt`** — a reference count. Incremented whenever someone points to it, decremented when they stop. When it hits zero, the object is freed.","**`ob_type`** — a pointer to the object's **type object** (`int`, `str`, your own class…). This is why `type(x)` is free — it's just a pointer read.","**the payload** — the actual value (the digits of the int, the characters of the string, etc.)."]},{type:"memoryDiagram",title:"Diagram: CPython Object Layout (Conceptual)",description:"Every Python value is a heap object with metadata plus payload.",bindings:[{scope:"global",name:"x",objectId:"I1"}],objects:[{id:"I1",type:"int object",value:`header:
  ob_refcnt = 2
  ob_type = <class int>
payload:
  digits = 42`,mutable:!1,note:"The value is only one part; header metadata is why Python objects are larger than raw C primitives.",accent:"amber"}],insights:["The type pointer powers dynamic dispatch (`+`, `len`, method lookup).","Reference count metadata enables immediate object reclamation in many cases."]},{type:"code",code:`import sys

# Even a "small" integer is bigger than you think
print(sys.getsizeof(0))       # 24 bytes on 64-bit Python
print(sys.getsizeof(1))       # 28 bytes
print(sys.getsizeof(2**100))  # 44 bytes — big ints use more digits

# A list of 3 ints isn't 3 * 28 bytes — it's 3 POINTERS to int objects
print(sys.getsizeof([1, 2, 3]))   # ~88 bytes (the list header + 3 pointers)`,language:"python"},{type:"callout",variant:"python",title:"Why This Matters",content:"Python trades raw speed for **flexibility**. The header lets any variable hold any type, enables garbage collection, and makes duck typing work. The price: a Python `int` uses ~7× the memory of a C `int`. Libraries like NumPy exist precisely to bypass this for bulk numeric data."},{type:"heading",level:2,text:"The Small-Integer Cache"},{type:"text",content:"Integers from **−5 to 256** are created once at interpreter startup and **reused** forever. When you write `x = 100` and `y = 100`, CPython doesn't create two int objects — both variables point to the same pre-allocated object."},{type:"code",code:`a = 100
b = 100
print(a is b)          # True — same object from the cache

c = 1000
d = 1000
print(c is d)          # False — each is a fresh object

# id() shows the memory address
print(id(100), id(100))   # identical
print(id(1000), id(1000)) # different (sometimes same in REPL due to peephole optimization)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Small-Integer Cache Reuse",description:"For values in [-5, 256], multiple names often bind to one pre-allocated integer object.",bindings:[{scope:"global",name:"a",objectId:"INT_100"},{scope:"global",name:"b",objectId:"INT_100"},{scope:"global",name:"c",objectId:"INT_1000A"},{scope:"global",name:"d",objectId:"INT_1000B"}],objects:[{id:"INT_100",type:"int (cached)",value:"100",mutable:!1,note:"Single shared object for small int value.",accent:"mint"},{id:"INT_1000A",type:"int",value:"1000",mutable:!1,note:"Fresh object allocated outside cache range.",accent:"sky"},{id:"INT_1000B",type:"int",value:"1000",mutable:!1,note:"Another distinct object with equal value but different identity.",accent:"sky"}],insights:["`a == b` checks value; `a is b` checks object identity.","Cache reuse is an implementation optimization, not a semantic rule to depend on."]},{type:"memoryLab",title:"Interactive Trace: Identity in and out of the Int Cache",prompt:"Watch when names share one object and when equal values are separate objects.",steps:[{title:"Bind Cached Value",action:"Run `a = 100; b = 100`",code:`a = 100
b = 100`,bindings:[{scope:"global",name:"a",objectId:"INT_100"},{scope:"global",name:"b",objectId:"INT_100"}],objects:[{id:"INT_100",type:"int (cached)",value:"100",mutable:!1,refCount:2,accent:"mint"}],explanation:"Both names point to the same cached small-int object, so `a is b` is True."},{title:"Bind Non-Cached Value",action:"Run `c = 1000; d = 1000`",code:`c = 1000
d = 1000`,bindings:[{scope:"global",name:"a",objectId:"INT_100"},{scope:"global",name:"b",objectId:"INT_100"},{scope:"global",name:"c",objectId:"INT_1000A"},{scope:"global",name:"d",objectId:"INT_1000B"}],objects:[{id:"INT_100",type:"int (cached)",value:"100",mutable:!1,refCount:2,accent:"mint"},{id:"INT_1000A",type:"int",value:"1000",mutable:!1,refCount:1,accent:"sky"},{id:"INT_1000B",type:"int",value:"1000",mutable:!1,refCount:1,accent:"sky"}],explanation:"Equal values outside the cache range can still be distinct objects with different identities."},{title:"Compare Value vs Identity",action:"Evaluate both equality and identity checks",code:`print(a == b, a is b)
print(c == d, c is d)`,bindings:[{scope:"global",name:"a",objectId:"INT_100"},{scope:"global",name:"b",objectId:"INT_100"},{scope:"global",name:"c",objectId:"INT_1000A"},{scope:"global",name:"d",objectId:"INT_1000B"}],objects:[{id:"INT_100",type:"int (cached)",value:"100",mutable:!1,refCount:2,accent:"mint"},{id:"INT_1000A",type:"int",value:"1000",mutable:!1,refCount:1,accent:"sky"},{id:"INT_1000B",type:"int",value:"1000",mutable:!1,refCount:1,accent:"sky"}],explanation:"`==` checks numeric value, while `is` checks whether two names share the same object identity."}]},{type:"callout",variant:"warning",title:"Never Compare Values with `is`",content:"Use `==` for equality, `is` for identity (same object in memory). `a is b` for integers outside [−5, 256] is an implementation detail — it might be True today and False tomorrow."},{type:"heading",level:2,text:"int — Arbitrary Precision"},{type:"text",content:'Unlike most languages, Python `int` has **no fixed size**. A 10-digit number and a 10 000-digit number are both just `int` — they grow as needed. Internally, CPython stores big ints as an array of 30-bit "digits" (in base 2³⁰). Size grows O(n) with digit count.'},{type:"code",code:`python = 2 ** 1000
print(len(str(python)))   # 302 digits — perfectly fine
print(python.bit_length())  # 1001 bits

# Overflow does not exist in Python ints
print(2 ** 10_000)    # Still works. Slower, but works.`,language:"python"},{type:"heading",level:2,text:"float — IEEE 754 Double Precision"},{type:"text",content:"Python `float` is a **64-bit IEEE 754 double**. The 64 bits are split:"},{type:"list",items:["**1 bit** — sign (+ or −)","**11 bits** — exponent (the power of 2)","**52 bits** — mantissa / significand (the digits)"]},{type:"text",content:"This gives about **15–17 significant decimal digits** of precision. Numbers that aren't exactly representable in binary (like 0.1) get rounded to the nearest representable value."},{type:"code",code:`# The famous surprise
print(0.1 + 0.2)              # 0.30000000000000004
print(0.1 + 0.2 == 0.3)       # False

# Why? 0.1 in binary is a repeating fraction:
# 0.0001100110011001100... forever
# The computer stores a truncated version.

# See the truth with .as_integer_ratio()
print((0.1).as_integer_ratio())
# (3602879701896397, 36028797018963968)   — NOT exactly 1/10

# Safe float comparison
import math
print(math.isclose(0.1 + 0.2, 0.3))   # True`,language:"python"},{type:"callout",variant:"warning",title:"Never Compare Floats with ==",content:"Use `math.isclose(a, b)` or `abs(a - b) < 1e-9`. For money, never use `float` at all — use the `decimal` module, which does exact base-10 arithmetic."},{type:"heading",level:2,text:"bool — A Subclass of int"},{type:"code",code:`print(isinstance(True, int))   # True  — bool is-a int
print(True + True)             # 2
print(True * 5)                # 5
print(sum([True, True, False, True]))   # 3  — trick for counting

# True and False are the ONLY two bool instances — singletons
print(bool(1) is True)         # True
print(bool(0) is False)        # True`,language:"python"},{type:"heading",level:2,text:"None — The Singleton"},{type:"text",content:"`None` is the **only** instance of `NoneType`. It's a singleton — comparing with `is None` is the idiomatic (and fastest) check."},{type:"code",code:`x = None
print(x is None)         # True — preferred
print(x == None)         # True but frowned upon (slower, overridable)

# Why \`is None\`? Because == can be overridden by __eq__
class Weird:
    def __eq__(self, other): return True
w = Weird()
print(w == None)   # True  — lying!
print(w is None)   # False — the truth`,language:"python"},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why does `sys.getsizeof(0)` return 24 instead of 4?",answer:"Because every Python object carries a `PyObject` header: a reference count, a type pointer, and (for ints) a length field. The \"value\" is just a small part of the object. Raw 4-byte integers like C's `int` don't exist in Python — only heap-allocated objects."},{question:"Why does `a is b` work for `a = 100, b = 100` but not for `a = 1000, b = 1000`?",answer:'CPython pre-creates integer objects from **−5 through 256** (the "small int cache") at startup and reuses them. Every `100` in your program is literally the same object. For 1000, each assignment creates a new object — different `id()`, so `is` returns False.'},{question:"Why is `0.1 + 0.2 != 0.3` in Python (and most languages)?",answer:"`0.1` has no exact binary representation (it's a repeating fraction in base 2). IEEE 754 stores the nearest 64-bit approximation. Summing two approximations and comparing to the approximation of 0.3 misses by ~5×10⁻¹⁷. Use `math.isclose()` or `decimal.Decimal`."},{question:"How big can a Python int get?",answer:"Arbitrarily big — limited only by memory. CPython stores large ints as an array of 30-bit digits. A 1-million-digit number is fine (just slower). This is *not* true in C, Java, or Rust — their fixed-width ints overflow."},{question:"Is `bool` really a subclass of `int`?",answer:"Yes. `True` has value 1, `False` has value 0. You can do arithmetic on them (`True + True == 2`) and sum booleans to count truthy items. `isinstance(True, int)` returns `True`. The only instances of `bool` are the singletons `True` and `False`."},{question:"Why do Python docs insist on `if x is None:` instead of `if x == None:`?",answer:"Three reasons: (1) **Speed** — `is` is a single pointer comparison; `==` dispatches to `__eq__`. (2) **Safety** — `__eq__` can be overridden to return `True` for anything. (3) **Intent** — `None` is a singleton; identity is exactly the right test."}]}],ge=[{type:"heading",level:1,text:"Operators & Expressions"},{type:"text",content:"Operators are special symbols that perform operations on values (operands). An **expression** is any valid combination of literals, variables, and operators that evaluates to a value."},{type:"callout",variant:"info",title:"Anatomy of an Operation",content:"In `10 + 5`, `10` and `5` are **operands** and `+` is the **operator**. Binary operators work on two operands (`+`, `-`). Unary operators work on one (`-x`)."},{type:"heading",level:2,text:"Arithmetic Operators"},{type:"text",content:"Python provides seven arithmetic operators:"},{type:"code",code:`# The 7 Arithmetic Operators
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
print(f"125 mins = {quotient} hrs, {remainder} mins")`,language:"python"},{type:"heading",level:1,text:"Going Deeper — How Operators Affect Memory"},{type:"text",content:"Expressions produce values, and those values are objects. Some operators create new objects (like `int` arithmetic), while others mutate existing objects (like list `+=`)."},{type:"code",code:`x = 10
x += 1

nums = [1, 2]
nums += [3]

print(x, nums)`,language:"python"},{type:"memoryDiagram",title:"Diagram: `+=` with Immutable vs Mutable Objects",description:"`int` and `list` behave differently under augmented assignment.",bindings:[{scope:"global",name:"x",objectId:"I11"},{scope:"global",name:"nums",objectId:"L1"}],objects:[{id:"I10",type:"int",value:"10",mutable:!1,refCount:0,note:"Old int object from before `x += 1`; no names point to it now.",accent:"coral"},{id:"I11",type:"int",value:"11",mutable:!1,refCount:1,note:"`x += 1` created a new int object and rebound `x`.",accent:"amber"},{id:"L1",type:"list",value:"[1, 2, 3]",mutable:!0,refCount:1,note:"`nums += [3]` extended the same list in place.",accent:"mint"}],insights:["Operator syntax can hide very different memory behavior.","For immutable types, augmented assignment usually means rebinding to a new object.","For mutable containers, augmented assignment often mutates in place."]},{type:"heading",level:2,text:"Short-Circuiting Skips Work (and Objects)"},{type:"text",content:"Short-circuiting is not just a logic rule; it is also a runtime optimization. If Python already knows the result, it does not evaluate the right side at all."},{type:"memoryLab",title:"Interactive Trace: `and` Short-Circuit Execution",prompt:"Track when `expensive()` is skipped and when it is actually called.",steps:[{title:"Initial Bindings",action:"Run `ready = False` and define `expensive`",code:`ready = False

def expensive():
    print("running")
    return True`,bindings:[{scope:"global",name:"ready",objectId:"B_FALSE"},{scope:"global",name:"expensive",objectId:"F_EXP"}],objects:[{id:"B_FALSE",type:"bool",value:"False",mutable:!1,refCount:1,accent:"amber"},{id:"F_EXP",type:"function",value:"<function expensive()>",mutable:!1,refCount:1,accent:"sky"}],explanation:"The setup creates bindings but no call has happened yet."},{title:"Short-Circuit Path",action:"Evaluate `result = ready and expensive()` with `ready` False",code:"result = ready and expensive()",bindings:[{scope:"global",name:"ready",objectId:"B_FALSE"},{scope:"global",name:"expensive",objectId:"F_EXP"},{scope:"global",name:"result",objectId:"B_FALSE"}],objects:[{id:"B_FALSE",type:"bool",value:"False",mutable:!1,refCount:2,accent:"amber"},{id:"F_EXP",type:"function",value:"<function expensive()>",mutable:!1,refCount:1,accent:"sky"}],explanation:"`and` sees the left operand is False, so `expensive()` is never called."},{title:"Flip the Guard",action:"Run `ready = True`",code:"ready = True",bindings:[{scope:"global",name:"ready",objectId:"B_TRUE"},{scope:"global",name:"expensive",objectId:"F_EXP"},{scope:"global",name:"result",objectId:"B_FALSE"}],objects:[{id:"B_FALSE",type:"bool",value:"False",mutable:!1,refCount:1,accent:"amber"},{id:"B_TRUE",type:"bool",value:"True",mutable:!1,refCount:1,accent:"mint"},{id:"F_EXP",type:"function",value:"<function expensive()>",mutable:!1,refCount:1,accent:"sky"}],explanation:"Now the left side no longer determines the full result, so Python must evaluate the right side next time."},{title:"Right Side Executes",action:"Evaluate `result = ready and expensive()` with `ready` True",code:"result = ready and expensive()",bindings:[{scope:"global",name:"ready",objectId:"B_TRUE"},{scope:"global",name:"expensive",objectId:"F_EXP"},{scope:"frame:expensive",name:"return",objectId:"B_TRUE"},{scope:"global",name:"result",objectId:"B_TRUE"}],objects:[{id:"B_TRUE",type:"bool",value:"True",mutable:!1,refCount:3,accent:"mint"},{id:"F_EXP",type:"function",value:"<function expensive()>",mutable:!1,refCount:1,accent:"sky"}],explanation:"Because left side is True, Python calls `expensive()` and binds its return value to `result`."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with operators!

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
print(f"\\n0.1 + 0.2 = {0.1 + 0.2}")     # Not exactly 0.3!`,instructions:"Try different operator combinations. Test negative floor division. Check if numbers are divisible."},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],fe=[{type:"heading",level:1,text:"Strings in Python"},{type:"text",content:"A **string** is a sequence of characters enclosed in quotes. In Python, there is no separate character type—a single character is just a string of length 1."},{type:"heading",level:2,text:"Creating Strings"},{type:"text",content:"Python gives you three ways to create strings:"},{type:"code",code:`# 1. Single quotes
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
print(alphabet[::-1])    # zyxwvutsrqponmlkjihgfedcba`,language:"python"},{type:"callout",variant:"tip",title:"Slicing Never Raises IndexError",content:'Unlike indexing, slicing is forgiving. If indices are out of range, Python adjusts to the valid range: `"Hello"[0:100]` becomes `"Hello"`.'},{type:"sliceVisualizer",title:"Try It: Live Slice Visualizer",description:"Tweak start, stop, and step to see exactly which characters Python pulls out — including negative indices and reverse strides.",items:["P","y","t","h","o","n","i","s","t","a"]},{type:"heading",level:2,text:"String Immutability"},{type:"text",content:"Python strings are **immutable**—they cannot be changed in place. Any operation that appears to modify a string actually creates a **new string**:"},{type:"code",code:`word = "Hello"
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
print(f"{word} is palindrome: {is_palindrome}")  # True`,language:"python"},{type:"callout",variant:"warning",title:"String Concatenation in Loops is Slow",content:'Because strings are immutable, using `+=` in a loop creates a new string every time. For building large strings, collect parts in a list and use `"".join(parts)` at the end.'},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"What are some common string methods?",answer:"Common methods include: `upper()`, `lower()`, `capitalize()`, `strip()`, `find()`, `count()`, `replace()`, `split()`, and `join()`. These make text processing in Python powerful and easy."}]},{type:"heading",level:1,text:"Going Deeper — How Strings Work Inside"},{type:"heading",level:2,text:"Strings Are Immutable"},{type:"text",content:'A Python `str` cannot change after creation. Every "modification" — `.upper()`, `+`, `.replace()` — returns a **new** string and leaves the original untouched. This makes strings hashable (usable as dict keys and set members) and thread-safe.'},{type:"code",code:`s = "hello"
# s[0] = "H"           # TypeError: 'str' object does not support item assignment

# s.upper() doesn't mutate s — it returns a new string
upper = s.upper()
print(s, upper)       # hello HELLO

# Common mistake: forgetting to reassign
s.strip()             # result discarded!
s = s.strip()         # correct — bind the result`,language:"python"},{type:"heading",level:2,text:"String Interning"},{type:"text",content:"CPython **interns** short string literals that look like identifiers — the interpreter keeps a single copy and reuses it. This speeds up dict lookups (comparing by pointer) and saves memory."},{type:"code",code:`a = "hello"
b = "hello"
print(a is b)         # True — interned literal

# Longer/runtime strings may not be interned
x = "hello world!" * 2
y = "hello world!" * 2
print(x is y)         # possibly False

# Force interning if you need it
import sys
x2 = sys.intern(x)
y2 = sys.intern(y)
print(x2 is y2)       # True`,language:"python"},{type:"heading",level:2,text:"Unicode & Encoding"},{type:"text",content:"A Python 3 `str` is a sequence of **Unicode code points** (abstract characters). Bytes on disk are a different type (`bytes`). Converting between them requires an **encoding** — usually UTF-8."},{type:"code",code:`text = "café"            # str — 4 Unicode code points
print(len(text))         # 4

# Encode to bytes
bs = text.encode("utf-8")
print(bs)                # b'caf\\xc3\\xa9'  — 5 bytes (é = 2 bytes in UTF-8)
print(len(bs))           # 5

# Decode back
print(bs.decode("utf-8"))   # 'café'

# Non-ASCII works everywhere
greeting = "你好, 🌍"
print(len(greeting))        # 5 code points
print(len(greeting.encode()))  # 11 bytes in UTF-8`,language:"python"},{type:"callout",variant:"python",title:"str vs bytes",content:"**`str`** is text (human-readable, Unicode). **`bytes`** is raw binary (what lives on disk or on the network). You `encode()` str → bytes, `decode()` bytes → str. Python 3 refuses to mix them silently — that's a feature."},{type:"heading",level:2,text:"f-strings — Formatted Literals"},{type:"code",code:`name = "Alice"
age = 30
pi = 3.14159

# Expressions, formatting spec, alignment
print(f"Hello {name}!")                 # Hello Alice!
print(f"{age} years, {age * 12} months")
print(f"{pi:.2f}")                       # 3.14  — 2 decimal places
print(f"{pi:10.2f}")                     #       3.14  — width 10
print(f"{name:>10}")                     #      Alice  — right-aligned
print(f"{1234567:,}")                    # 1,234,567  — thousand separator
print(f"{0.87:.1%}")                     # 87.0%  — percent
print(f"{255:#x}")                       # 0xff  — hex

# Self-documenting debug form (Python 3.8+)
print(f"{name=}, {age=}")                # name='Alice', age=30`,language:"python"},{type:"heading",level:2,text:"String Concatenation Performance"},{type:"code",code:`# BAD — O(n²) for n strings: each += creates a fresh string and copies
result = ""
for word in words:
    result += word + " "

# GOOD — O(n): join builds once, copies once
result = " ".join(words)

# When assembling many pieces, use io.StringIO or list+join
parts = []
for w in words:
    parts.append(w)
result = " ".join(parts)`,language:"python"},{type:"heading",level:2,text:"Memory Lens: Immutability and Rebinding"},{type:"text",content:"String operations return new objects. Names may move, but existing string objects never change in place."},{type:"memoryDiagram",title:"Diagram: `s = s.upper()` Creates a New String",description:"After reassignment, one name can point to a new object while another still points to the original.",bindings:[{scope:"global",name:"alias",objectId:"S_HELLO"},{scope:"global",name:"s",objectId:"S_HELLO_UP"}],objects:[{id:"S_HELLO",type:"str",value:'"hello"',mutable:!1,refCount:1,note:"Original object remains unchanged and still referenced by `alias`.",accent:"amber"},{id:"S_HELLO_UP",type:"str",value:'"HELLO"',mutable:!1,refCount:1,note:"New object produced by `.upper()`.",accent:"mint"}],insights:["Immutability means transformation methods never mutate an existing string object.","Reassignment updates the binding, not the underlying object.","Alias variables can keep older versions alive in memory."]},{type:"memoryLab",title:"Interactive Trace: String Identity Over Time",prompt:"Follow object identity as names are aliased and rebound through string operations.",steps:[{title:"Create First String",action:'Run `s = "cat"`',code:'s = "cat"',bindings:[{scope:"global",name:"s",objectId:"S1"}],objects:[{id:"S1",type:"str",value:'"cat"',mutable:!1,refCount:1,accent:"amber"}],explanation:"One immutable string object is created and bound to `s`."},{title:"Create Alias",action:"Run `t = s`",code:"t = s",bindings:[{scope:"global",name:"s",objectId:"S1"},{scope:"global",name:"t",objectId:"S1"}],objects:[{id:"S1",type:"str",value:'"cat"',mutable:!1,refCount:2,accent:"amber"}],explanation:"`t` becomes another reference to the same object, so `s is t` is True."},{title:"Concatenate with +=",action:'Run `s += "s"`',code:'s += "s"',bindings:[{scope:"global",name:"s",objectId:"S2"},{scope:"global",name:"t",objectId:"S1"}],objects:[{id:"S1",type:"str",value:'"cat"',mutable:!1,refCount:1,accent:"amber"},{id:"S2",type:"str",value:'"cats"',mutable:!1,refCount:1,accent:"mint"}],explanation:"Because strings are immutable, `+=` allocates a new object and rebinds only `s`."},{title:"Transform Alias",action:"Run `t = t.upper()`",code:"t = t.upper()",bindings:[{scope:"global",name:"s",objectId:"S2"},{scope:"global",name:"t",objectId:"S3"}],objects:[{id:"S1",type:"str",value:'"cat"',mutable:!1,refCount:0,accent:"coral",note:"No bindings remain; this object can be reclaimed."},{id:"S2",type:"str",value:'"cats"',mutable:!1,refCount:1,accent:"mint"},{id:"S3",type:"str",value:'"CAT"',mutable:!1,refCount:1,accent:"sky"}],explanation:"Each transformation produces a new object; bindings decide which version each name sees."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why are Python strings immutable?",answer:"Three reasons: (1) **hashability** — immutable strings can be dict keys. (2) **thread safety** — no concurrent mutation bugs. (3) **interning** — identical literals can share one copy in memory."},{question:'Why does `"hello" is "hello"` return True?',answer:"CPython **interns** short identifier-like literals at compile time — both occurrences refer to the same object. It's an implementation detail; never rely on `is` for string equality."},{question:"What's the difference between `str` and `bytes`?",answer:"`str` is Unicode text (abstract characters). `bytes` is raw binary (0–255). Disk and network carry bytes; programs work with str. Convert with `.encode()` and `.decode()`, usually via UTF-8."},{question:'Why is `len("café")` 4 but `len("café".encode())` 5?',answer:'`"café"` has 4 **code points** (c, a, f, é). In UTF-8, the `é` takes 2 bytes — total 5. `str` counts characters; `bytes` counts bytes.'},{question:'Why is `"".join(parts)` faster than `+=` in a loop?',answer:"`+=` on strings creates a **new** string each iteration (because strings are immutable) and copies both sides — O(n²) total. `join` allocates the final size once and copies linearly — O(n)."}]}],be=[{type:"heading",level:1,text:"Input & Output"},{type:"text",content:"The `print()` and `input()` functions are how your program communicates. `print()` sends data out to the user, while `input()` brings data in."},{type:"heading",level:2,text:"The print() Function"},{type:"text",content:"`print()` displays output to the console. You can pass it multiple values, and it will separate them with spaces by default:"},{type:"code",code:`# Basic printing
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
print(r"C:\\Users\\name\\Documents")   # Prints backslashes literally`,language:"python"},{type:"heading",level:1,text:"Going Deeper — I/O as Data Flow Through Memory"},{type:"text",content:"Input and output are not magical. `input()` pulls bytes from stdin, decodes them into a Python string, and returns that string object. `print()` takes objects, converts them to text, and writes bytes to stdout."},{type:"code",code:`raw_age = input("Age? ")
age = int(raw_age)
print(age + 1)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Input String -> Parsed Integer -> Output",description:"One user entry creates multiple objects across the I/O pipeline.",bindings:[{scope:"global",name:"raw_age",objectId:"S27"},{scope:"global",name:"age",objectId:"I27"},{scope:"builtins",name:"print",objectId:"F_PRINT"},{scope:"runtime",name:"stdout",objectId:"BUF_OUT"}],objects:[{id:"S27",type:"str",value:'"27"',mutable:!1,note:"Returned by `input()` after decoding user bytes.",accent:"amber"},{id:"I27",type:"int",value:"27",mutable:!1,note:"Created by `int(raw_age)` parsing the string.",accent:"mint"},{id:"F_PRINT",type:"builtin function",value:"<built-in function print>",mutable:!1,accent:"sky"},{id:"BUF_OUT",type:"stream buffer",value:'"Age? 28\\n"',mutable:!0,note:"Shows prompt and printed result written to stdout.",accent:"neutral"}],insights:["`input()` always returns a string object, even for numeric-looking text.","Type conversion creates a new object; it does not change the original string.","Output is a side effect on stdout, not a return value from `print()`."]},{type:"memoryLab",title:"Interactive Trace: One User Input, Four Runtime Stages",prompt:"Track how the same user entry becomes both a string and an integer during execution.",steps:[{title:"Prompt Is Emitted",action:'Start `raw_age = input("Age? ")`',code:'raw_age = input("Age? ")',bindings:[{scope:"frame:input",name:"prompt",objectId:"S_PROMPT"},{scope:"runtime",name:"stdin",objectId:"BUF_IN"},{scope:"runtime",name:"stdout",objectId:"BUF_OUT"}],objects:[{id:"S_PROMPT",type:"str",value:'"Age? "',mutable:!1,refCount:1,accent:"amber"},{id:"BUF_IN",type:"stream buffer",value:'"27\\n"',mutable:!0,refCount:1,accent:"mint"},{id:"BUF_OUT",type:"stream buffer",value:'"Age? "',mutable:!0,refCount:1,accent:"neutral"}],explanation:"`input()` writes the prompt to stdout, then waits for bytes from stdin."},{title:"String Is Returned",action:"User types `27` and presses Enter",code:'raw_age = input("Age? ")  # "27"',bindings:[{scope:"global",name:"raw_age",objectId:"S27"},{scope:"runtime",name:"stdout",objectId:"BUF_OUT"}],objects:[{id:"S27",type:"str",value:'"27"',mutable:!1,refCount:1,accent:"amber"},{id:"BUF_OUT",type:"stream buffer",value:'"Age? "',mutable:!0,refCount:1,accent:"neutral"}],explanation:"The newline is consumed by input processing, and Python returns a clean string object."},{title:"Parse Numeric Value",action:"Run `age = int(raw_age)`",code:"age = int(raw_age)",bindings:[{scope:"global",name:"raw_age",objectId:"S27"},{scope:"global",name:"age",objectId:"I27"}],objects:[{id:"S27",type:"str",value:'"27"',mutable:!1,refCount:1,accent:"amber"},{id:"I27",type:"int",value:"27",mutable:!1,refCount:1,accent:"mint"}],explanation:"`int()` creates a new integer object; the original text is still available in `raw_age`."},{title:"Print Computed Result",action:"Run `print(age + 1)`",code:"print(age + 1)",bindings:[{scope:"global",name:"raw_age",objectId:"S27"},{scope:"global",name:"age",objectId:"I27"},{scope:"frame:print",name:"value",objectId:"I28"},{scope:"runtime",name:"stdout",objectId:"BUF_OUT"}],objects:[{id:"S27",type:"str",value:'"27"',mutable:!1,refCount:1,accent:"amber"},{id:"I27",type:"int",value:"27",mutable:!1,refCount:1,accent:"mint"},{id:"I28",type:"int",value:"28",mutable:!1,refCount:1,accent:"sky",note:"Temporary result object from `age + 1`."},{id:"BUF_OUT",type:"stream buffer",value:'"Age? 28\\n"',mutable:!0,refCount:1,accent:"neutral"}],explanation:"Arithmetic creates a temporary int object that is converted to text by `print` and appended to stdout."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with I/O!

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
print(f"\\nScore: {scored}/{total} = {pct:.1%}")`,instructions:"Experiment with different format specifiers. Try changing alignment, precision, and separators."},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"What data type does the `input()` function return?",answer:"The `input()` function always returns a string (str), regardless of what the user types. If you need numeric input, you must convert it: `int(input())`, `float(input())`, etc."},{question:'What does this code output?\n\n`print("A", "B", "C", sep="-", end="!")`\n`print("D")`',answer:'`A-B-C!D`\n\nThe `sep` parameter controls the separator between print() arguments. Default is a space, but here it\'s `"-"`. The `end` parameter replaces the newline with `"!"`. The next print continues on the same line.'},{question:'What does this code output?\n\n`x = 3.14159`\n`print(f"{x:.2f}")`',answer:"`3.14`\n\n`:.2f` formats the float to exactly 2 decimal places, rounding as needed. 3.14159 rounded to 2 decimal places is 3.14."},{question:'How do you center-align text in a 20-character field using an f-string?\n\n`text = "Python"`\n`print(f"{text:?20}")`',answer:'`f"{text:^20}"`\n\nAlignment in f-strings:\n- `<` : left-align\n- `>` : right-align\n- `^` : center-align\n\nExample: `f"{text:^20}"` centers text in a 20-char field.'},{question:"Which escape sequence represents a newline?",answer:'`\\n`\n\n`\\n` is the escape sequence for a newline. Other common ones:\n- `\\t` = tab\n- `\\\\` = backslash\n- `\\"` = double quote'}]},{type:"heading",level:2,text:"Challenge Q&A"},{type:"qna",items:[{question:"Receipt Formatter: Create a formatted receipt that displays items with their prices in a neatly aligned table. Use f-string formatting to align item names to the left and prices to the right.",answer:`**Solution:**

\`\`\`python
print("=" * 30)
print(f"{'RECEIPT':^30}")
print("=" * 30)

items = [("Coffee", 4.50), ("Sandwich", 8.99), ("Cookie", 2.25)]
for item_name, price in items:
    print(f"{item_name:<20} \${price:>6.2f}")

print("-" * 30)
total = sum(price for _, price in items)
print(f"{'TOTAL':<20} \${total:>6.2f}")
print("=" * 30)
\`\`\`

**Output:**
\`\`\`
==============================
           RECEIPT           
==============================
Coffee               $  4.50
Sandwich             $  8.99
Cookie               $  2.25
------------------------------
TOTAL                $ 15.74
==============================
\`\`\`

**Key techniques:**
- \`f"{text:<20}"\` left-aligns text in 20 characters
- \`f"\${price:>6.2f}"\` right-aligns price with 2 decimal places
- \`"=" * 30\` creates separator lines
- \`^\` centers text (for RECEIPT and TOTAL headers)`}]}],xe=[{type:"heading",level:1,text:"Errors & Debugging"},{type:"text",content:"Every programmer makes mistakes — the difference between a beginner and a professional is how fast you **read the error**. Python's error messages are surprisingly informative: they tell you exactly *what* went wrong, *where* it went wrong, and often *why*. Learning to decode them is the single highest-leverage debugging skill you can develop."},{type:"callout",variant:"python",title:"Three Kinds of Errors",content:"**Syntax errors** break the rules of the language (Python refuses to run). **Runtime errors** (exceptions) crash the program mid-execution. **Logic errors** run silently but produce wrong output — the hardest to find."},{type:"heading",level:2,text:"Anatomy of a Traceback"},{type:"text",content:"A **traceback** is Python's crime-scene report. Read it **bottom-up**: the last line names the exception, the lines above trace the call chain that led there."},{type:"code",code:`def divide(a, b):
    return a / b

def compute(x):
    return divide(x, 0)

compute(10)`,language:"python"},{type:"code",code:`Traceback (most recent call last):
  File "demo.py", line 7, in <module>
    compute(10)
  File "demo.py", line 5, in compute
    return divide(x, 0)
  File "demo.py", line 2, in divide
    return a / b
           ~~^~~
ZeroDivisionError: division by zero`,language:"text"},{type:"list",items:["**Last line** → the exception class (`ZeroDivisionError`) and message (`division by zero`).","**Above it** → the exact line that raised it (`return a / b`).","**Stack frames** → walk upward to see who called whom. Read bottom → top.","**The little `~~^~~` caret** (Python 3.11+) points to the exact offending expression."]},{type:"heading",level:2,text:"The Usual Suspects"},{type:"code",code:`# SyntaxError — code violates Python grammar (won't even start)
if x = 5:   # SyntaxError: invalid syntax (should be ==)
    pass

# NameError — using a variable that doesn't exist
print(undefined_var)  # NameError: name 'undefined_var' is not defined

# TypeError — operation on the wrong type
"age: " + 25          # TypeError: can only concatenate str (not "int") to str
len(42)               # TypeError: object of type 'int' has no len()

# ValueError — right type, invalid value
int("abc")            # ValueError: invalid literal for int() with base 10

# IndexError — list index out of range
nums = [1, 2, 3]
nums[10]              # IndexError: list index out of range

# KeyError — missing dictionary key
user = {"name": "Alice"}
user["age"]           # KeyError: 'age'

# AttributeError — method/attribute not on this object
"hello".push("!")     # AttributeError: 'str' object has no attribute 'push'

# ZeroDivisionError — dividing by zero
10 / 0                # ZeroDivisionError

# IndentationError — inconsistent indentation
def f():
return 1              # IndentationError: expected an indented block`,language:"python"},{type:"callout",variant:"tip",title:"Learn the Exception, Not the Error",content:"Don't memorize error *messages* — those change. Learn the **exception classes** (`ValueError`, `TypeError`, `KeyError`). They map to specific failure categories and you'll reach for them later when writing `except` clauses."},{type:"heading",level:2,text:"Handling Exceptions: try / except"},{type:"text",content:'Sometimes errors are expected — a user might type `"abc"` when we asked for a number. Wrap risky code in `try` and catch the specific exception with `except`.'},{type:"code",code:`try:
    age = int(input("Age? "))
    print(f"You are {age} years old.")
except ValueError:
    print("That wasn't a number!")`,language:"python"},{type:"callout",variant:"warning",title:"Catch Specifically — Never Bare except",content:"A bare `except:` catches **everything**, including `KeyboardInterrupt` (Ctrl-C) and `SystemExit`. You will hide real bugs. Always name the exception: `except ValueError:`, or at worst `except Exception:`."},{type:"code",code:`# Multiple exceptions, different responses
try:
    data = open("config.txt").read()
    value = int(data)
except FileNotFoundError:
    print("No config file — using defaults.")
    value = 0
except ValueError:
    print("Config file is corrupted.")
    value = 0

# Group related exceptions
try:
    result = risky_operation()
except (TypeError, ValueError) as e:
    print(f"Bad input: {e}")`,language:"python"},{type:"heading",level:2,text:"else and finally Clauses"},{type:"text",content:"The full shape is `try / except / else / finally`. Each clause has a precise job."},{type:"list",items:["**`try`** — code that might fail.","**`except`** — runs only if a matching exception was raised.","**`else`** — runs only if `try` finished *without* an exception.","**`finally`** — runs **always**, even if an exception slipped past. Use it for cleanup (closing files, releasing locks)."]},{type:"code",code:`try:
    f = open("data.txt")
    content = f.read()
except FileNotFoundError:
    print("Missing file.")
else:
    print(f"Read {len(content)} characters.")
finally:
    print("Cleanup runs no matter what.")
    try:
        f.close()
    except NameError:
        pass`,language:"python"},{type:"callout",variant:"python",title:"Why `else`?",content:'Putting the happy-path code in `else` keeps it **outside** the `try` block — so a bug there won\'t be silently swallowed by your `except`. It makes the boundary between "might fail" and "definitely worked" explicit.'},{type:"heading",level:2,text:"Raising Your Own Errors"},{type:"text",content:"When *your* function receives bad input, **raise** — don't return a sentinel like `-1` or `None`. Failing loudly is a feature."},{type:"code",code:`def set_age(age):
    if not isinstance(age, int):
        raise TypeError(f"age must be int, got {type(age).__name__}")
    if age < 0:
        raise ValueError(f"age cannot be negative: {age}")
    return age

set_age(-5)     # ValueError: age cannot be negative: -5
set_age("old")  # TypeError: age must be int, got str`,language:"python"},{type:"callout",variant:"tip",title:"Fail Fast",content:"A `ValueError` at line 3 is always easier to debug than a `TypeError` 400 lines later. Validate inputs at the boundary; trust them inside."},{type:"heading",level:2,text:"Re-raising & Chaining"},{type:"code",code:`# Re-raise — log and keep propagating
try:
    process(data)
except ValueError:
    print("Logging: value error in process()")
    raise   # bare raise re-raises the current exception

# Chain — add context without losing the original (Python 3)
try:
    config = json.loads(text)
except json.JSONDecodeError as e:
    raise RuntimeError("Config file is invalid") from e
# The traceback shows BOTH errors — the 'from e' keeps the cause.`,language:"python"},{type:"heading",level:2,text:"The Debugging Mindset"},{type:"list",items:["**Read the traceback bottom-up.** The exception name + message answers 80% of bugs.","**Reproduce it reliably.** A bug you can reproduce is a bug you can fix.","**Bisect.** Comment out half the code — does the bug remain? Keep halving.",'**Print the state.** `print(f"{var=}")` (Python 3.8+) prints both the name and value.','**Check your assumptions.** The bug is almost always where you "know" the code is correct.',"**Rubber-duck it.** Explain the code line-by-line out loud. You will find the bug by sentence three."]},{type:"code",code:`# The f-string self-documenting form (Python 3.8+)
user = "Alice"
items = [1, 2, 3]
total = sum(items)

print(f"{user=}, {items=}, {total=}")
# user='Alice', items=[1, 2, 3], total=6`,language:"python"},{type:"heading",level:1,text:"Going Deeper — Exceptions Are Real Objects"},{type:"text",content:"A traceback is built from call frames and an exception object. When an error occurs, Python allocates an exception instance and starts unwinding frames until a matching `except` is found."},{type:"code",code:`def divide(a, b):
    return a / b

def compute(x):
    return divide(x, 0)

compute(10)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Exception Object + Stack Frames",description:"When division fails, Python creates a ZeroDivisionError object and records traceback context.",bindings:[{scope:"global",name:"compute",objectId:"F_COMPUTE"},{scope:"global",name:"divide",objectId:"F_DIVIDE"},{scope:"frame:compute",name:"x",objectId:"I10"},{scope:"frame:divide",name:"a",objectId:"I10"},{scope:"frame:divide",name:"b",objectId:"I0"},{scope:"runtime",name:"active_exception",objectId:"E_ZDIV"}],objects:[{id:"F_COMPUTE",type:"function",value:"<function compute(x)>",mutable:!1,accent:"sky"},{id:"F_DIVIDE",type:"function",value:"<function divide(a, b)>",mutable:!1,accent:"sky"},{id:"I10",type:"int",value:"10",mutable:!1,accent:"amber"},{id:"I0",type:"int",value:"0",mutable:!1,accent:"amber"},{id:"E_ZDIV",type:"ZeroDivisionError",value:'ZeroDivisionError("division by zero")',mutable:!1,note:"Carries message and traceback metadata linking frames in reverse call order.",accent:"coral"}],insights:["The traceback is structured data derived from frame objects.","Exceptions propagate by unwinding stack frames until handled.","Catching an exception gives you access to the same exception object instance."]},{type:"memoryLab",title:"Interactive Trace: From Raise to Recover",prompt:"See how an exception object is created, bound to `err`, and then released.",steps:[{title:"Enter try Block",action:"Start a conversion that may fail",code:`try:
    value = int("oops")
except ValueError as err:
    value = 0`,bindings:[{scope:"global",name:"int",objectId:"F_INT"}],objects:[{id:"F_INT",type:"builtin function",value:"<class int>",mutable:!1,refCount:1,accent:"sky"},{id:"S_BAD",type:"str",value:'"oops"',mutable:!1,refCount:1,accent:"amber"}],explanation:"Execution enters `try` and begins converting a string to an integer."},{title:"Conversion Raises",action:'`int("oops")` fails with ValueError',code:'value = int("oops")',bindings:[{scope:"runtime",name:"active_exception",objectId:"E1"}],objects:[{id:"S_BAD",type:"str",value:'"oops"',mutable:!1,refCount:1,accent:"amber"},{id:"E1",type:"ValueError",value:'ValueError("invalid literal for int()")',mutable:!1,refCount:1,accent:"coral"}],explanation:"Python allocates a `ValueError` object and starts searching for a matching handler."},{title:"Handler Binds Exception",action:"`except ValueError as err` catches and recovers",code:`except ValueError as err:
    value = 0`,bindings:[{scope:"frame:except",name:"err",objectId:"E1"},{scope:"global",name:"value",objectId:"I0"}],objects:[{id:"E1",type:"ValueError",value:'ValueError("invalid literal for int()")',mutable:!1,refCount:1,accent:"coral"},{id:"I0",type:"int",value:"0",mutable:!1,refCount:1,accent:"mint"}],explanation:"The caught exception instance is temporarily bound to `err`, and fallback value is produced."},{title:"Exit Handler",action:"Except block ends; normal execution resumes",code:"# continue program",bindings:[{scope:"global",name:"value",objectId:"I0"}],objects:[{id:"E1",type:"ValueError",value:'ValueError("invalid literal for int()")',mutable:!1,refCount:0,accent:"coral",note:"No references remain after handler scope exits."},{id:"I0",type:"int",value:"0",mutable:!1,refCount:1,accent:"mint"}],explanation:"After the handler finishes, only recovered state remains in the global scope."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",instructions:'Write a function `safe_divide(a, b)` that returns `a / b`, but returns the string "undefined" when dividing by zero and "type error" if the inputs are not numbers. Use try/except — not if-statements.',defaultCode:`def safe_divide(a, b):
    # your code here
    pass

print(safe_divide(10, 2))    # 5.0
print(safe_divide(10, 0))    # undefined
print(safe_divide("10", 2))  # type error`},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"What is the difference between `SyntaxError` and `NameError`?",answer:"**`SyntaxError`** happens before the code runs — Python can't even parse it (e.g. `if x = 5:`). **`NameError`** happens at runtime when a variable name is used but never assigned in the current scope."},{question:"Should I ever use a bare `except:`?",answer:"Almost never. It catches `KeyboardInterrupt` and `SystemExit` too, making programs un-killable and hiding real bugs. Catch `Exception` if you truly need a broad net — but preferably catch the **specific** exception you expect."},{question:"What's the difference between `except ValueError` and `except ValueError as e`?",answer:"Both catch the exception. The `as e` form **binds** the exception object to `e` so you can inspect `str(e)`, `e.args`, or re-raise with context. Without `as`, the exception is caught but you lose its details."},{question:"When does the `finally` block *not* run?",answer:"Effectively never during normal Python execution — it runs even if `try` or `except` raise. The only ways to skip it: the process is hard-killed (`os._exit()`, SIGKILL), a power failure, or an infinite loop inside `try`."},{question:"Why use `raise ... from e` instead of just `raise`?",answer:"`from e` **chains** the exceptions — the traceback shows *both* the original cause and your higher-level exception. This preserves debugging information while giving callers a cleaner, semantic error type."},{question:'Is it more "Pythonic" to ask permission or forgiveness?',answer:"Forgiveness — **EAFP** (Easier to Ask Forgiveness than Permission). Try the operation and catch the exception, rather than pre-checking with `if`. It's faster (no redundant check) and avoids **race conditions** (the state might change between check and use)."}]}],ve=[{type:"heading",level:1,text:"Boolean Logic & Truthiness"},{type:"text",content:"At its core, every decision a computer makes comes down to a single question: **True or False?** The `bool` type in Python has exactly two values — `True` and `False` — yet these two tiny values drive every `if` statement, every `while` loop, and every logical expression in your programs."},{type:"heading",level:2,text:"The bool Type"},{type:"code",code:`# Boolean literals
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
print(bool("False"))   # True — string "False" is truthy!`,language:"python"},{type:"callout",variant:"danger",title:"Common Truthiness Traps",content:'`bool("0")` is `True` — the string "0" has one character, so it\'s not empty!\n`bool("False")` is `True` — the string "False" has 5 characters!\n`bool(" ")` is `True` — a space is still a character!\n`bool(-1)` is `True` — only numeric zero is falsy!'},{type:"truthyTester",title:"Try It: Truthiness Tester",description:"Type any literal and see what bool() returns — plus a one-line reason. Click the chips to test the surprising cases."},{type:"heading",level:3,text:"Using Truthiness in Practice"},{type:"code",code:`# Idiomatic Python uses truthiness directly
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

# When in doubt, USE PARENTHESES!`,language:"python"},{type:"heading",level:1,text:"Going Deeper — The Boolean Evaluation Engine"},{type:"text",content:"When Python evaluates a condition, it does more than compare `True` and `False`. It asks objects for truth value using `__bool__()` (or falls back to `__len__()`), applies short-circuit rules, and often returns one of the original operand objects."},{type:"heading",level:2,text:"Truthiness Dispatch: __bool__ Then __len__"},{type:"code",code:`class Box:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

class FeatureFlag:
    def __init__(self, enabled):
        self.enabled = enabled

    def __bool__(self):
        print("__bool__ called")
        return self.enabled

print(bool(Box([])))        # False  (len == 0)
print(bool(Box([1, 2])))    # True   (len > 0)

flag = FeatureFlag(True)
if flag:
    print("Flag is on")`,language:"python"},{type:"memoryDiagram",title:"Diagram: How `if obj:` Computes Truth Value",description:"Python asks an object for truthiness in a strict order: __bool__, then __len__, then default truthy.",bindings:[{scope:"global",name:"box",objectId:"OBJ_BOX"},{scope:"global",name:"flag",objectId:"OBJ_FLAG"},{scope:"frame:bool",name:"obj",objectId:"OBJ_BOX"},{scope:"frame:if",name:"condition",objectId:"B_TRUE"}],objects:[{id:"OBJ_BOX",type:"Box",value:"Box([1, 2])",mutable:!0,note:"No __bool__; Python calls __len__ and interprets non-zero as True.",accent:"amber"},{id:"OBJ_FLAG",type:"FeatureFlag",value:"FeatureFlag(True)",mutable:!0,note:"Defines __bool__, so Python uses that directly.",accent:"sky"},{id:"B_TRUE",type:"bool",value:"True",mutable:!1,accent:"mint"}],insights:["Truthiness is protocol-driven, not hardcoded only for built-in types.","An empty container is falsy because len == 0, not because Python special-cases each container.","Custom classes can define exactly how they behave in conditions."]},{type:"heading",level:2,text:"`and` / `or` Return Operands, Not Forced Booleans"},{type:"code",code:`name = ""
fallback = "Anonymous"

selected = name or fallback
print(selected)             # Anonymous

cache = {"token": "abc"}
result = cache and cache["token"]
print(result)               # abc

print(0 and 99)             # 0
print("" or "default")      # default`,language:"python"},{type:"memoryDiagram",title:"Diagram: `or` Picks the First Truthy Operand",description:"With `name or fallback`, the result binding points to whichever operand object wins.",bindings:[{scope:"global",name:"name",objectId:"S_EMPTY"},{scope:"global",name:"fallback",objectId:"S_FB"},{scope:"global",name:"selected",objectId:"S_FB"}],objects:[{id:"S_EMPTY",type:"str",value:'""',mutable:!1,note:"Falsy because it is an empty string.",accent:"coral"},{id:"S_FB",type:"str",value:'"Anonymous"',mutable:!1,note:"First truthy operand; returned directly by `or`.",accent:"mint"}],insights:["`or` returns an operand object, not a newly created bool.","This is why fallback expressions are compact and efficient in Python.",'The same rule explains patterns like `config.get("timeout") or 30`.']},{type:"memoryLab",title:"Interactive Trace: Short-Circuit and Operand Return",prompt:"Step through the expression chain and track which objects become bound to results.",steps:[{title:"Start With Falsy Input",action:"Run setup values",code:`user_name = ""
default_name = "Guest"`,bindings:[{scope:"global",name:"user_name",objectId:"S_EMPTY"},{scope:"global",name:"default_name",objectId:"S_GUEST"}],objects:[{id:"S_EMPTY",type:"str",value:'""',mutable:!1,refCount:1,accent:"coral"},{id:"S_GUEST",type:"str",value:'"Guest"',mutable:!1,refCount:1,accent:"amber"}],explanation:"`user_name` is currently falsy, so it cannot satisfy an `or` by itself."},{title:"Evaluate Fallback With or",action:"Run `display = user_name or default_name`",code:"display = user_name or default_name",bindings:[{scope:"global",name:"user_name",objectId:"S_EMPTY"},{scope:"global",name:"default_name",objectId:"S_GUEST"},{scope:"global",name:"display",objectId:"S_GUEST"}],objects:[{id:"S_EMPTY",type:"str",value:'""',mutable:!1,refCount:1,accent:"coral"},{id:"S_GUEST",type:"str",value:'"Guest"',mutable:!1,refCount:2,accent:"mint"}],explanation:"Because the left operand is falsy, `or` returns the right operand object directly."},{title:"Guarded and Expression",action:"Run `ok = display and len(display) > 0`",code:"ok = display and len(display) > 0",bindings:[{scope:"global",name:"display",objectId:"S_GUEST"},{scope:"global",name:"ok",objectId:"B_TRUE"}],objects:[{id:"S_GUEST",type:"str",value:'"Guest"',mutable:!1,refCount:2,accent:"amber"},{id:"B_TRUE",type:"bool",value:"True",mutable:!1,refCount:1,accent:"mint"}],explanation:"`and` evaluates the right side only because `display` is truthy."},{title:"Flip to Truthy Name",action:'Run `user_name = "Ava"` and reevaluate fallback',code:`user_name = "Ava"
display = user_name or default_name`,bindings:[{scope:"global",name:"user_name",objectId:"S_AVA"},{scope:"global",name:"default_name",objectId:"S_GUEST"},{scope:"global",name:"display",objectId:"S_AVA"}],objects:[{id:"S_AVA",type:"str",value:'"Ava"',mutable:!1,refCount:2,accent:"mint"},{id:"S_GUEST",type:"str",value:'"Guest"',mutable:!1,refCount:1,accent:"amber"}],explanation:"Now the left operand is truthy, so `or` short-circuits and returns `user_name`."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Explore boolean logic!

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
print(f"Equal? {not (A and B) == ((not A) or (not B))}")`,instructions:"Modify values and observe how truthiness, short-circuiting, and De Morgan's Laws work."},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],we=[{type:"heading",level:1,text:"Conditional Statements"},{type:"text",content:"Conditional statements are the **decision-making tools** of programming. They allow your program to choose different paths based on whether conditions are `True` or `False`. Without conditionals, every program would execute the same instructions regardless of input — incredibly boring and useless!"},{type:"heading",level:2,text:"The if Statement"},{type:"text",content:"The `if` statement is the simplest conditional. If the condition is `True`, the **indented block** below it executes. If `False`, Python skips the block entirely:"},{type:"code",code:`# Basic if statement
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
        print("Weekday")`,language:"python"},{type:"heading",level:1,text:"Going Deeper — How Python Chooses a Branch"},{type:"text",content:"An `if/elif/else` chain is a linear decision pipeline. Python evaluates conditions top-to-bottom, stops at the first truthy condition, executes exactly one block, then jumps past the rest."},{type:"code",code:`score = 78
checks = []

if score >= 90:
    checks.append("A")
    grade = "A"
elif score >= 80:
    checks.append("B")
    grade = "B"
elif score >= 70:
    checks.append("C")
    grade = "C"
else:
    checks.append("F")
    grade = "F"

print(checks, grade)   # ["C"] C`,language:"python"},{type:"memoryDiagram",title:"Diagram: First-True Branch Wins",description:"Only one branch body executes; later conditions are not evaluated after a match.",bindings:[{scope:"global",name:"score",objectId:"I78"},{scope:"global",name:"grade",objectId:"S_C"},{scope:"global",name:"checks",objectId:"L_CHECKS"},{scope:"runtime",name:"active_branch",objectId:"BR_C"}],objects:[{id:"I78",type:"int",value:"78",mutable:!1,accent:"amber"},{id:"BR_C",type:"branch marker",value:"elif score >= 70",mutable:!1,note:"This branch became active after two failed checks.",accent:"sky"},{id:"S_C",type:"str",value:'"C"',mutable:!1,accent:"mint"},{id:"L_CHECKS",type:"list",value:'["C"]',mutable:!0,note:"Useful for proving which branch actually executed.",accent:"neutral"}],insights:["The chain is not parallel; it is sequential and short-circuiting.","Conditions below the winning branch are skipped entirely.","This is why ordering conditions from most specific to least specific matters."]},{type:"heading",level:2,text:"Variable Binding Depends on Executed Paths"},{type:"code",code:`x = 7

if x % 5 == 0:
    label = "divisible"

# print(label)  # NameError: label was never bound in this path

# Safe pattern
if x % 5 == 0:
    label = "divisible"
else:
    label = "not divisible"`,language:"python"},{type:"callout",variant:"warning",title:"Conditional Paths Create Path-Sensitive State",content:"Python has function scope, but assignment is still path-dependent. If no executed path binds a name, using that name later raises `NameError`."},{type:"memoryLab",title:"Interactive Trace: if/elif Evaluation Timeline",prompt:"Track each condition test and watch where control flow stops.",steps:[{title:"Initialize Inputs",action:"Run setup values",code:`score = 78
grade = None`,bindings:[{scope:"global",name:"score",objectId:"I78"},{scope:"global",name:"grade",objectId:"NONE"}],objects:[{id:"I78",type:"int",value:"78",mutable:!1,refCount:1,accent:"amber"},{id:"NONE",type:"NoneType",value:"None",mutable:!1,refCount:1,accent:"neutral"}],explanation:"No branch has executed yet, so `grade` has only a placeholder value."},{title:"Check First Condition",action:"Evaluate `score >= 90`",code:"if score >= 90: ...",bindings:[{scope:"global",name:"score",objectId:"I78"},{scope:"runtime",name:"last_condition",objectId:"B_FALSE_1"},{scope:"global",name:"grade",objectId:"NONE"}],objects:[{id:"I78",type:"int",value:"78",mutable:!1,refCount:1,accent:"amber"},{id:"B_FALSE_1",type:"bool",value:"False",mutable:!1,refCount:1,accent:"coral"},{id:"NONE",type:"NoneType",value:"None",mutable:!1,refCount:1,accent:"neutral"}],explanation:"Condition is false, so Python moves to the next `elif` test."},{title:"Check Second Condition",action:"Evaluate `score >= 80`",code:"elif score >= 80: ...",bindings:[{scope:"global",name:"score",objectId:"I78"},{scope:"runtime",name:"last_condition",objectId:"B_FALSE_2"},{scope:"global",name:"grade",objectId:"NONE"}],objects:[{id:"B_FALSE_2",type:"bool",value:"False",mutable:!1,refCount:1,accent:"coral"},{id:"NONE",type:"NoneType",value:"None",mutable:!1,refCount:1,accent:"neutral"}],explanation:"Still false. Control continues to the next condition in sequence."},{title:"Third Condition Matches",action:"Evaluate `score >= 70` and assign grade",code:`elif score >= 70:
    grade = "C"`,bindings:[{scope:"global",name:"score",objectId:"I78"},{scope:"runtime",name:"last_condition",objectId:"B_TRUE"},{scope:"global",name:"grade",objectId:"S_C"}],objects:[{id:"B_TRUE",type:"bool",value:"True",mutable:!1,refCount:1,accent:"mint"},{id:"S_C",type:"str",value:'"C"',mutable:!1,refCount:1,accent:"mint"}],explanation:"First truthy condition wins. Python executes this block and skips all remaining branches."},{title:"Chain Terminates",action:"Exit the conditional chain",code:"# else branch skipped",bindings:[{scope:"global",name:"score",objectId:"I78"},{scope:"global",name:"grade",objectId:"S_C"}],objects:[{id:"S_C",type:"str",value:'"C"',mutable:!1,refCount:1,accent:"mint"}],explanation:"Final state reflects the single executed branch. This one-path rule is key to reasoning about conditionals."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with conditionals!

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
        print(n, end=" ")`,instructions:"Try changing the score and year values. Add more conditions to the FizzBuzz challenge!"},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],_e=[{type:"heading",level:1,text:"While Loops"},{type:"text",content:"A **while loop** repeats a block of code **as long as a condition remains True**. Think of it as an `if` statement that keeps going back and re-checking the condition. While loops are ideal when you **don't know in advance** how many times you need to repeat something."},{type:"heading",level:2,text:"Basic while Loop"},{type:"code",code:`# Count from 1 to 5
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
print(f"{n} in binary: {binary}")   # 42 in binary: 101010`,language:"python"},{type:"heading",level:1,text:"Going Deeper — While as a State Machine"},{type:"text",content:"A `while` loop repeatedly transitions through three states: evaluate condition, execute body, update state. Bugs happen when updates are missing or when control-flow (`continue`/`break`) skips intended updates."},{type:"code",code:`i = 0
limit = 4

while i < limit:
    print(i)
    i += 1

print("done", i)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Loop Control State During Iteration",description:"Control variables are ordinary bindings in the current scope, repeatedly updated by the loop body.",bindings:[{scope:"global",name:"i",objectId:"I2"},{scope:"global",name:"limit",objectId:"I4"},{scope:"runtime",name:"last_condition",objectId:"B_TRUE"},{scope:"runtime",name:"loop_state",objectId:"ST_BODY"}],objects:[{id:"I2",type:"int",value:"2",mutable:!1,note:"Current counter value mid-loop.",accent:"amber"},{id:"I4",type:"int",value:"4",mutable:!1,accent:"sky"},{id:"B_TRUE",type:"bool",value:"True",mutable:!1,accent:"mint"},{id:"ST_BODY",type:"state marker",value:"executing loop body",mutable:!1,accent:"neutral"}],insights:["Counters are rebound to new int objects after each increment.","Condition is re-evaluated before every iteration, not just once.","Missing or skipped updates keep condition true and create infinite loops."]},{type:"heading",level:2,text:"break vs Natural Completion (while-else)"},{type:"code",code:`i = 0

while i < 5:
    if i == 3:
        break
    i += 1
else:
    print("completed naturally")

print("stopped at", i)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Early Exit Suppresses else",description:"The loop exits via break with i == 3, so the else block never executes.",bindings:[{scope:"global",name:"i",objectId:"I3"},{scope:"runtime",name:"exit_reason",objectId:"EXIT_BREAK"}],objects:[{id:"I3",type:"int",value:"3",mutable:!1,accent:"amber"},{id:"EXIT_BREAK",type:"state marker",value:"break",mutable:!1,note:"Non-natural termination path.",accent:"coral"}],insights:["`while-else` is about termination mode, not condition polarity.","Else runs only when loop condition becomes false naturally.","Any break in the loop body suppresses else execution."]},{type:"memoryLab",title:"Interactive Trace: Sentinel Loop Lifecycle",prompt:"Walk through a classic while True + break workflow and inspect state at each stage.",steps:[{title:"Initialize Buffers and Counters",action:"Setup simulated input sequence",code:`inputs = [10, 25, 0]
i = 0
total = 0`,bindings:[{scope:"global",name:"inputs",objectId:"L_IN"},{scope:"global",name:"i",objectId:"I0"},{scope:"global",name:"total",objectId:"I_SUM0"}],objects:[{id:"L_IN",type:"list",value:"[10, 25, 0]",mutable:!0,refCount:1,accent:"sky"},{id:"I0",type:"int",value:"0",mutable:!1,refCount:1,accent:"amber"},{id:"I_SUM0",type:"int",value:"0",mutable:!1,refCount:1,accent:"neutral"}],explanation:"Sentinel loop begins with index and accumulator at zero."},{title:"Read First Value",action:"Consume 10 and continue loop",code:`value = inputs[i]
i += 1
if value == 0:
    break
total += value`,bindings:[{scope:"global",name:"i",objectId:"I1"},{scope:"global",name:"value",objectId:"I10"},{scope:"global",name:"total",objectId:"I_SUM10"}],objects:[{id:"I1",type:"int",value:"1",mutable:!1,refCount:1,accent:"amber"},{id:"I10",type:"int",value:"10",mutable:!1,refCount:1,accent:"mint"},{id:"I_SUM10",type:"int",value:"10",mutable:!1,refCount:1,accent:"sky"}],explanation:"Value is not sentinel, so loop updates running total."},{title:"Read Second Value",action:"Consume 25 and continue loop",code:`value = 25
total = 35
i = 2`,bindings:[{scope:"global",name:"i",objectId:"I2"},{scope:"global",name:"value",objectId:"I25"},{scope:"global",name:"total",objectId:"I_SUM35"}],objects:[{id:"I2",type:"int",value:"2",mutable:!1,refCount:1,accent:"amber"},{id:"I25",type:"int",value:"25",mutable:!1,refCount:1,accent:"mint"},{id:"I_SUM35",type:"int",value:"35",mutable:!1,refCount:1,accent:"sky"}],explanation:"Loop state advances normally again: index increments and accumulator grows."},{title:"Sentinel Triggers break",action:"Consume 0 and terminate loop",code:`value = inputs[i]   # 0
i += 1
if value == 0:
    break`,bindings:[{scope:"global",name:"i",objectId:"I3"},{scope:"global",name:"value",objectId:"I_SENT"},{scope:"global",name:"total",objectId:"I_SUM35"},{scope:"runtime",name:"exit_reason",objectId:"EXIT_BREAK"}],objects:[{id:"I3",type:"int",value:"3",mutable:!1,refCount:1,accent:"amber"},{id:"I_SENT",type:"int",value:"0",mutable:!1,refCount:1,accent:"coral"},{id:"I_SUM35",type:"int",value:"35",mutable:!1,refCount:1,accent:"sky"},{id:"EXIT_BREAK",type:"state marker",value:"break",mutable:!1,refCount:1,accent:"coral"}],explanation:"Sentinel value exits loop immediately, preserving total from prior entries."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Experiment with while loops!

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
        print(f"  {guess} → Too high")`,instructions:"Experiment with different algorithms. Try computing the reverse of a number, or finding the largest power of 2 below N."},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],ke=[{type:"heading",level:1,text:"For Loops & Iteration"},{type:"text",content:"The **for loop** is Python's primary tool for **iteration** — stepping through a sequence of values one at a time. Unlike `while` loops where you manually manage a counter, `for` loops automatically handle iteration. They're cleaner, safer (no risk of infinite loops), and more Pythonic."},{type:"heading",level:2,text:"Basic for Loop Syntax"},{type:"code",code:`# for loop iterates over any sequence
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
print(freq)  # {'h': 1, 'e': 1, 'l': 3, ...}`,language:"python"},{type:"heading",level:1,text:"Going Deeper — What a for Loop Really Does"},{type:"text",content:"A `for` loop is syntactic sugar over the iterator protocol: Python calls `iter(sequence)` once, then repeatedly calls `next(iterator)` until `StopIteration` is raised."},{type:"code",code:`items = [10, 20, 30]
it = iter(items)

print(next(it))   # 10
print(next(it))   # 20
print(next(it))   # 30
# print(next(it)) # StopIteration

# Equivalent for-loop shape:
# it = iter(items)
# while True:
#     try:
#         value = next(it)
#     except StopIteration:
#         break
#     print(value)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Sequence -> Iterator -> Loop Variable",description:"The loop variable is rebound each iteration to the object returned by next(iterator).",bindings:[{scope:"global",name:"items",objectId:"L_ITEMS"},{scope:"global",name:"it",objectId:"IT_LIST"},{scope:"for-frame",name:"n",objectId:"I20"},{scope:"global",name:"result",objectId:"L_RESULT"}],objects:[{id:"L_ITEMS",type:"list",value:"[10, 20, 30]",mutable:!0,note:"Source iterable owned by outer scope.",accent:"amber"},{id:"IT_LIST",type:"list_iterator",value:"<list_iterator at index=2>",mutable:!0,note:"Iterator stores progress state independently of the list object.",accent:"sky"},{id:"I20",type:"int",value:"20",mutable:!1,accent:"mint"},{id:"L_RESULT",type:"list",value:"[100, 400]",mutable:!0,note:"Accumulator list that grows as loop iterations complete.",accent:"neutral"}],insights:["The iterator, not the loop variable, tracks traversal position.","Loop variables are rebound every iteration; they are not new scoped variables each time.","Loop ends when `next` raises StopIteration, not when index == len directly."]},{type:"heading",level:2,text:"for-else and Loop Completion State"},{type:"text",content:"In `for-else`, the `else` clause runs only when iteration ends naturally. Any `break` marks the loop as terminated early and suppresses `else`."},{type:"memoryLab",title:"Interactive Trace: Iterator Progress and StopIteration",prompt:"Follow the same loop as Python sees it internally.",steps:[{title:"Create Iterable and Iterator",action:"Run setup state",code:`nums = [1, 2, 3]
it = iter(nums)
squares = []`,bindings:[{scope:"global",name:"nums",objectId:"L_NUMS"},{scope:"global",name:"it",objectId:"IT1"},{scope:"global",name:"squares",objectId:"L_SQ"}],objects:[{id:"L_NUMS",type:"list",value:"[1, 2, 3]",mutable:!0,refCount:1,accent:"amber"},{id:"IT1",type:"list_iterator",value:"<index=0>",mutable:!0,refCount:1,accent:"sky"},{id:"L_SQ",type:"list",value:"[]",mutable:!0,refCount:1,accent:"neutral"}],explanation:"Iterator starts before the first element, and accumulator is empty."},{title:"First next() Result",action:"Loop fetches first value",code:`n = next(it)      # 1
squares.append(n * n)`,bindings:[{scope:"global",name:"it",objectId:"IT1"},{scope:"for-frame",name:"n",objectId:"I1"},{scope:"global",name:"squares",objectId:"L_SQ"}],objects:[{id:"IT1",type:"list_iterator",value:"<index=1>",mutable:!0,refCount:1,accent:"sky"},{id:"I1",type:"int",value:"1",mutable:!1,refCount:1,accent:"mint"},{id:"L_SQ",type:"list",value:"[1]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Loop variable `n` now references element 1, then body appends 1^2."},{title:"Second Iteration Rebind",action:"Loop fetches next value and reuses name n",code:`n = next(it)      # 2
squares.append(n * n)`,bindings:[{scope:"global",name:"it",objectId:"IT1"},{scope:"for-frame",name:"n",objectId:"I2"},{scope:"global",name:"squares",objectId:"L_SQ"}],objects:[{id:"IT1",type:"list_iterator",value:"<index=2>",mutable:!0,refCount:1,accent:"sky"},{id:"I2",type:"int",value:"2",mutable:!1,refCount:1,accent:"mint"},{id:"L_SQ",type:"list",value:"[1, 4]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Same variable name, new binding. Rebinding is how loop variables advance."},{title:"Iterator Exhausts",action:"After consuming 3, next(it) raises StopIteration",code:"# implicit StopIteration -> loop exits",bindings:[{scope:"global",name:"it",objectId:"IT1"},{scope:"global",name:"squares",objectId:"L_SQ"},{scope:"for-frame",name:"n",objectId:"I3"}],objects:[{id:"IT1",type:"list_iterator",value:"<exhausted>",mutable:!0,refCount:1,accent:"coral"},{id:"I3",type:"int",value:"3",mutable:!1,refCount:1,accent:"mint"},{id:"L_SQ",type:"list",value:"[1, 4, 9]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Natural exhaustion ends the loop. This is the path where `for-else` would run its else clause."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Explore for loops!

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
        print(n, end=" ")`,instructions:"Try creating different patterns, or use zip() to combine multiple lists."},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],Te=[{type:"heading",level:1,text:"Loop Patterns & Nested Loops"},{type:"text",content:"Now that you know `while` and `for` loops, let's combine them with **nesting** and explore classic loop patterns. Nested loops are loops inside loops — the inner loop runs completely for **each iteration** of the outer loop. These patterns appear everywhere: printing shapes, processing grids, generating combinations, and more."},{type:"heading",level:2,text:"Nested Loop Fundamentals"},{type:"code",code:`# Basic nested loop: multiplication table (partial)
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
print(f"First heads after {flips} flips")`,language:"python"},{type:"heading",level:1,text:"Going Deeper — Nested Loops as Coordinate Machines"},{type:"text",content:"Nested loops are easiest to reason about as coordinate traversal: outer loop selects a row/state, inner loop sweeps columns/substates. The inner loop fully resets and runs again for every outer iteration."},{type:"code",code:`total = 0
for i in range(2):
    for j in range(3):
        total += i + j

print(total)   # 9`,language:"python"},{type:"memoryDiagram",title:"Diagram: Outer State + Inner Sweep",description:"At a mid-iteration snapshot, i and j jointly identify one cell in the traversal grid.",bindings:[{scope:"global",name:"i",objectId:"I1"},{scope:"global",name:"j",objectId:"I2"},{scope:"global",name:"total",objectId:"I5"},{scope:"runtime",name:"outer_iter",objectId:"IT_OUT"},{scope:"runtime",name:"inner_iter",objectId:"IT_IN"}],objects:[{id:"IT_OUT",type:"range_iterator",value:"<range(0, 2) index=1>",mutable:!0,note:"Outer iterator controls major loop progress.",accent:"sky"},{id:"IT_IN",type:"range_iterator",value:"<range(0, 3) index=2>",mutable:!0,note:"Fresh inner iterator for current outer value.",accent:"amber"},{id:"I1",type:"int",value:"1",mutable:!1,accent:"mint"},{id:"I2",type:"int",value:"2",mutable:!1,accent:"mint"},{id:"I5",type:"int",value:"5",mutable:!1,note:"Accumulator after partial traversal.",accent:"neutral"}],insights:["Total operations multiply: outer_count * inner_count.","Inner iterators are recreated per outer iteration.","Understanding i/j state pairs helps avoid off-by-one bugs in pattern code."]},{type:"heading",level:2,text:"break Scope in Nested Loops"},{type:"text",content:"`break` only exits the innermost loop. Exiting both loops requires a flag, a function return, or an exception-based escape pattern."},{type:"memoryLab",title:"Interactive Trace: 2x3 Nested Traversal Timeline",prompt:"Watch i/j rebinding and see how the inner loop resets for each outer cycle.",steps:[{title:"Initialize Traversal",action:"Start outer and inner ranges",code:`pairs = []
for i in range(2):
    for j in range(3):
        pairs.append((i, j))`,bindings:[{scope:"global",name:"pairs",objectId:"L_PAIRS"},{scope:"runtime",name:"outer_iter",objectId:"IT_OUT_0"}],objects:[{id:"L_PAIRS",type:"list",value:"[]",mutable:!0,refCount:1,accent:"neutral"},{id:"IT_OUT_0",type:"range_iterator",value:"<range(0,2) index=0>",mutable:!0,refCount:1,accent:"sky"}],explanation:"Only outer iterator exists at start. Inner iterator is created after i gets first value."},{title:"Outer i = 0, Inner j = 0",action:"First coordinate emitted",code:`i = 0
j = 0
pairs.append((i, j))`,bindings:[{scope:"global",name:"i",objectId:"I0"},{scope:"global",name:"j",objectId:"I0B"},{scope:"global",name:"pairs",objectId:"L_PAIRS"},{scope:"runtime",name:"inner_iter",objectId:"IT_IN_0"}],objects:[{id:"I0",type:"int",value:"0",mutable:!1,refCount:1,accent:"amber"},{id:"I0B",type:"int",value:"0",mutable:!1,refCount:1,accent:"amber"},{id:"IT_IN_0",type:"range_iterator",value:"<range(0,3) index=1>",mutable:!0,refCount:1,accent:"mint"},{id:"L_PAIRS",type:"list",value:"[(0, 0)]",mutable:!0,refCount:1,accent:"neutral"}],explanation:"Inner loop now active for the current outer row i = 0."},{title:"Finish Inner for i = 0",action:"j runs through 1 and 2",code:"pairs += [(0, 1), (0, 2)]",bindings:[{scope:"global",name:"i",objectId:"I0"},{scope:"runtime",name:"inner_iter",objectId:"IT_IN_EX"},{scope:"global",name:"pairs",objectId:"L_PAIRS"}],objects:[{id:"IT_IN_EX",type:"range_iterator",value:"<exhausted>",mutable:!0,refCount:1,accent:"coral"},{id:"L_PAIRS",type:"list",value:"[(0, 0), (0, 1), (0, 2)]",mutable:!0,refCount:1,accent:"neutral"}],explanation:"Inner iterator exhausts. Control returns to outer iterator for next i."},{title:"Reset Inner for i = 1",action:"Outer advances and creates a new inner iterator",code:`i = 1
# new inner loop: j = 0..2`,bindings:[{scope:"global",name:"i",objectId:"I1"},{scope:"runtime",name:"outer_iter",objectId:"IT_OUT_1"},{scope:"runtime",name:"inner_iter",objectId:"IT_IN_1"},{scope:"global",name:"pairs",objectId:"L_PAIRS"}],objects:[{id:"I1",type:"int",value:"1",mutable:!1,refCount:1,accent:"amber"},{id:"IT_OUT_1",type:"range_iterator",value:"<range(0,2) index=2>",mutable:!0,refCount:1,accent:"sky"},{id:"IT_IN_1",type:"range_iterator",value:"<range(0,3) index=0>",mutable:!0,refCount:1,accent:"mint"},{id:"L_PAIRS",type:"list",value:"[(0, 0), (0, 1), (0, 2)]",mutable:!0,refCount:1,accent:"neutral"}],explanation:"This reset behavior is the key mental model of nested loops."},{title:"Traversal Complete",action:"All coordinates emitted",code:"pairs == [(0,0),(0,1),(0,2),(1,0),(1,1),(1,2)]",bindings:[{scope:"global",name:"pairs",objectId:"L_DONE"},{scope:"runtime",name:"outer_iter",objectId:"IT_OUT_EX"}],objects:[{id:"L_DONE",type:"list",value:"[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2)]",mutable:!0,refCount:1,accent:"mint"},{id:"IT_OUT_EX",type:"range_iterator",value:"<exhausted>",mutable:!0,refCount:1,accent:"coral"}],explanation:"Total entries = 2 * 3 = 6. Complexity follows the multiplication rule."}]},{type:"heading",level:2,text:"Assignment Bridge: Matrix Equality & Symmetry"},{type:"text",content:"Week-style graded questions often use matrix loops. Two matrices are equal only if dimensions match and every corresponding entry matches. A square matrix is symmetric when `M[i][j] == M[j][i]` for all valid indices."},{type:"code",code:`def are_equal(A, B):
    if len(A) != len(B):
        return False
    for i in range(len(A)):
        if len(A[i]) != len(B[i]):
            return False
        for j in range(len(A[i])):
            if A[i][j] != B[i][j]:
                return False
    return True

def is_symmetric(M):
    n = len(M)
    for row in M:
        if len(row) != n:   # must be square
            return False

    # Compare only above diagonal (j > i)
    for i in range(n):
        for j in range(i + 1, n):
            if M[i][j] != M[j][i]:
                return False
    return True

A = [[1, 2], [3, 4]]
B = [[1, 2], [3, 4]]
C = [[1, 2], [2, 1]]

print(are_equal(A, B))   # True
print(are_equal(A, C))   # False
print(is_symmetric(C))   # True
print(is_symmetric(A))   # False`,language:"python"},{type:"callout",variant:"tip",title:"Why j Starts at i + 1",content:"Diagonal values always equal themselves, and lower-triangle checks duplicate upper-triangle checks. Restricting to `j = i + 1 .. n-1` avoids redundant work and is a common optimization expected in matrix questions."},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Create patterns with nested loops!

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
    print()`,instructions:"Try creating your own patterns! Can you make a checkerboard? A Christmas tree? An hourglass shape?"},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],Ie=[{type:"heading",level:1,text:"Lists — Python's Workhorse Data Structure"},{type:"text",content:"A **list** is an ordered, mutable collection that can hold items of any type. Lists are Python's most versatile data structure — they're used everywhere: storing data, building results, processing sequences, and much more. If you only learn one data structure well, make it lists."},{type:"heading",level:2,text:"Creating Lists"},{type:"code",code:`# Empty list
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
print(colors[0])     # red — original unchanged!`,language:"python"},{type:"sliceVisualizer",title:"Try It: List Slice Visualizer",description:"Adjust start, stop, and step to see how Python carves out sub-lists. Negative indices and reverse strides included.",items:[10,20,30,40,50,60,70,80]},{type:"heading",level:2,text:"Lists Are Mutable"},{type:"text",content:"Unlike strings, lists can be **modified in place** — you can change, add, or remove elements without creating a new list:"},{type:"code",code:`# Modifying elements
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
print(f"\\nUnique (ordered): {unique}")`,instructions:"Experiment with list methods, comprehensions, and nested lists."},{type:"heading",level:1,text:"Going Deeper — How Lists Work Inside"},{type:"text",content:'A Python `list` is **not** a linked list — it\'s a **dynamic array** (also called a "vector" or `ArrayList`). Under the hood, CPython allocates a contiguous block of pointers and grows it when it fills up. Knowing this explains every performance quirk.'},{type:"heading",level:2,text:"Contiguous Pointers, Not Values"},{type:"text",content:"The list doesn't store your values inline — it stores **pointers** to heap-allocated objects. That's why a list of ints takes much more memory than a C array, but also why it can hold any mix of types."},{type:"code",code:`import sys
lst = [1, 2, 3]
print(sys.getsizeof(lst))   # ~88 bytes: header + 3 pointers (+ slack)

# The elements themselves live elsewhere:
print(sys.getsizeof(1))     # 28 — a whole int object
# So lst really costs ~88 + 3 * 28 = ~172 bytes`,language:"python"},{type:"heading",level:2,text:"Over-Allocation — Why `append()` is O(1) Amortized"},{type:"text",content:"When you `append()` and the underlying array is full, CPython allocates a **bigger** array (roughly 1.125× + 6 extra slots), copies everything over, and then adds the new item. Because growth is geometric, the **amortized** cost of `append` is O(1) — you only occasionally pay the copy."},{type:"code",code:`import sys
lst = []
prev = 0
for i in range(20):
    lst.append(i)
    size = sys.getsizeof(lst)
    if size != prev:
        print(f"after {i+1:2d} appends → {size} bytes")
        prev = size
# You'll see the allocation jump at specific lengths (0, 4, 8, 16, 25, 35, 46...).`,language:"python"},{type:"callout",variant:"python",title:"Growth Pattern",content:"CPython's formula: `new_size = new_length + (new_length >> 3) + 6`. That overshoots by ~12.5% + 6 slots — tuned for a sweet spot between memory waste and copy frequency."},{type:"memoryDiagram",title:"Diagram: Dynamic Array Stores Pointers",description:"A list object owns an internal pointer array. Elements live as separate heap objects.",bindings:[{scope:"global",name:"nums",objectId:"L_MAIN"},{scope:"global",name:"alias",objectId:"L_MAIN"},{scope:"runtime",name:"ob_item[0]",objectId:"I10"},{scope:"runtime",name:"ob_item[1]",objectId:"I20"},{scope:"runtime",name:"ob_item[2]",objectId:"I30"}],objects:[{id:"L_MAIN",type:"list",value:"[10, 20, 30]  (size=3, capacity=8)",mutable:!0,note:"List header plus pointer array; spare capacity avoids resizing on every append.",accent:"sky"},{id:"I10",type:"int",value:"10",mutable:!1,accent:"amber"},{id:"I20",type:"int",value:"20",mutable:!1,accent:"amber"},{id:"I30",type:"int",value:"30",mutable:!1,accent:"amber"}],insights:["List elements are references, so mixed types are natural in Python lists.","Alias names point to the same list object, not duplicate arrays.","Capacity can exceed length, enabling amortized O(1) append."]},{type:"heading",level:2,text:"Time Complexity — Know Your Bills"},{type:"code",code:`Operation              Big-O          Notes
────────────────────────────────────────────────────────
lst[i]                 O(1)           pointer arithmetic
len(lst)               O(1)           stored in header
lst.append(x)          O(1) amort.    occasional resize
lst.pop()              O(1)           pop from end — cheap
lst.pop(0)             O(n)           shifts EVERYTHING left
lst.insert(0, x)       O(n)           shifts EVERYTHING right
x in lst               O(n)           linear scan
lst.sort()             O(n log n)     Timsort — adaptive
lst[a:b]               O(b-a)         copies the slice
list(iter)             O(n)           full materialization`,language:"text"},{type:"callout",variant:"warning",title:"The `pop(0)` Trap",content:"Popping or inserting at the **front** is O(n) — every other element has to slide. If you need a FIFO queue, use `collections.deque` which is O(1) at both ends."},{type:"code",code:`from collections import deque

q = deque()
q.append("A")         # O(1)
q.appendleft("Z")     # O(1) — unlike list.insert(0, ...)
q.pop()               # O(1)
q.popleft()           # O(1) — unlike list.pop(0)`,language:"python"},{type:"complexityRacer",title:"Watch the Bills Grow",description:"Hit Race to grow n. O(1) is flat, O(n²) explodes — this is why pop(0) on a million-item list hurts."},{type:"heading",level:1,text:"Practical List Patterns"},{type:"heading",level:2,text:"Stacks — LIFO with append/pop"},{type:"code",code:`stack = []
stack.append("A")      # push
stack.append("B")
stack.append("C")
print(stack)           # ['A', 'B', 'C']

top = stack.pop()      # pop → 'C'
print(stack)           # ['A', 'B']

# Classic use: balanced brackets
def balanced(s):
    stack = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        elif ch in ")]}":
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack

print(balanced("({[]})"))   # True
print(balanced("([)]"))     # False`,language:"python"},{type:"heading",level:2,text:"Queues — Use deque, Not list"},{type:"code",code:`from collections import deque

queue = deque(["Alice", "Bob", "Carol"])
queue.append("Dan")        # enqueue at the back
served = queue.popleft()   # dequeue from the front → 'Alice'
print(queue)               # deque(['Bob', 'Carol', 'Dan'])`,language:"python"},{type:"heading",level:2,text:"Copying — Shallow vs Deep"},{type:"text",content:'Because lists hold **pointers**, a "copy" can mean different things.'},{type:"code",code:`original = [[1, 2], [3, 4]]

# Aliasing — NOT a copy
alias = original
alias[0][0] = 99
print(original)      # [[99, 2], [3, 4]]  ← same list!

# Shallow copy — outer list is new, inner lists shared
import copy
shallow = original.copy()       # or list(original), or original[:]
shallow[0][0] = 77
print(original)      # [[77, 2], [3, 4]]  ← inner lists still shared

# Deep copy — recursively independent
deep = copy.deepcopy(original)
deep[0][0] = 0
print(original)      # [[77, 2], [3, 4]]  ← unchanged`,language:"python"},{type:"callout",variant:"warning",title:"The Classic Bug",content:"`matrix = [[0] * 3] * 3` creates one row and references it three times. Writing `matrix[0][0] = 1` changes all three rows. Use `[[0] * 3 for _ in range(3)]` instead."},{type:"memoryLab",title:"Interactive Trace: Alias vs Shallow vs Deep Copy",prompt:"Step through nested-list copying and track which references remain shared.",steps:[{title:"Create Original Nested List",action:"Run base assignment",code:"original = [[1], [2]]",bindings:[{scope:"global",name:"original",objectId:"L_ORIG"}],objects:[{id:"L_ORIG",type:"list",value:"[[1], [2]]",mutable:!0,refCount:1,accent:"sky"},{id:"L_IN1",type:"list",value:"[1]",mutable:!0,refCount:1,accent:"amber"},{id:"L_IN2",type:"list",value:"[2]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Outer list references two inner list objects."},{title:"Alias Points to Same Object",action:"Run `alias = original`",code:"alias = original",bindings:[{scope:"global",name:"original",objectId:"L_ORIG"},{scope:"global",name:"alias",objectId:"L_ORIG"}],objects:[{id:"L_ORIG",type:"list",value:"[[1], [2]]",mutable:!0,refCount:2,accent:"mint"},{id:"L_IN1",type:"list",value:"[1]",mutable:!0,refCount:1,accent:"amber"},{id:"L_IN2",type:"list",value:"[2]",mutable:!0,refCount:1,accent:"amber"}],explanation:"No copy happened. Both names share one outer list object."},{title:"Shallow Copy Creates New Outer List",action:"Run `shallow = original.copy()`",code:"shallow = original.copy()",bindings:[{scope:"global",name:"original",objectId:"L_ORIG"},{scope:"global",name:"alias",objectId:"L_ORIG"},{scope:"global",name:"shallow",objectId:"L_SHALLOW"}],objects:[{id:"L_ORIG",type:"list",value:"[[1], [2]]",mutable:!0,refCount:2,accent:"mint"},{id:"L_SHALLOW",type:"list",value:"[[1], [2]]",mutable:!0,refCount:1,accent:"sky"},{id:"L_IN1",type:"list",value:"[1]",mutable:!0,refCount:2,accent:"amber"},{id:"L_IN2",type:"list",value:"[2]",mutable:!0,refCount:2,accent:"amber"}],explanation:"Outer container is new, but inner lists are still shared references."},{title:"Mutate Shared Inner List",action:"Run `shallow[0].append(99)`",code:"shallow[0].append(99)",bindings:[{scope:"global",name:"original",objectId:"L_ORIG"},{scope:"global",name:"shallow",objectId:"L_SHALLOW"}],objects:[{id:"L_ORIG",type:"list",value:"[[1, 99], [2]]",mutable:!0,refCount:2,accent:"mint"},{id:"L_SHALLOW",type:"list",value:"[[1, 99], [2]]",mutable:!0,refCount:1,accent:"sky"},{id:"L_IN1",type:"list",value:"[1, 99]",mutable:!0,refCount:2,accent:"coral"}],explanation:"Mutation appears in both structures because inner list identity is shared."},{title:"Deep Copy Breaks Sharing",action:"Run `deep = copy.deepcopy(original)` then mutate deep",code:`import copy
deep = copy.deepcopy(original)
deep[0].append(500)`,bindings:[{scope:"global",name:"original",objectId:"L_ORIG"},{scope:"global",name:"deep",objectId:"L_DEEP"}],objects:[{id:"L_ORIG",type:"list",value:"[[1, 99], [2]]",mutable:!0,refCount:2,accent:"mint"},{id:"L_DEEP",type:"list",value:"[[1, 99, 500], [2]]",mutable:!0,refCount:1,accent:"sky"},{id:"L_DEEP_IN1",type:"list",value:"[1, 99, 500]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Deep copy creates independent nested objects, so later mutation does not leak back to original."}]},{type:"heading",level:2,text:"Sorting — Timsort"},{type:"text",content:"`list.sort()` uses **Timsort** — a hybrid of mergesort and insertion sort invented by Tim Peters for Python. It's O(n log n) worst case, O(n) on already-sorted data, and **stable** (preserves order of equal keys)."},{type:"code",code:`nums = [5, 2, 8, 1, 9]
nums.sort()                 # in-place, returns None
print(nums)                 # [1, 2, 5, 8, 9]

# sorted() returns a NEW list (doesn't mutate)
new_list = sorted(nums, reverse=True)

# Sort by a key function
names = ["Alice", "bob", "CAROL"]
print(sorted(names, key=str.lower))   # case-insensitive

rows = [("Alice", 92), ("Bob", 85), ("Carol", 92)]
# Stable: Alice comes before Carol (both 92) — preserving insertion order
print(sorted(rows, key=lambda r: r[1], reverse=True))`,language:"python"},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Is a Python list a linked list or an array?",answer:"An **array** (specifically, a dynamic array of pointers). This is why indexing is O(1) but inserting at the front is O(n). If you want fast front operations, use `collections.deque`."},{question:'Why is `list.append(x)` "amortized O(1)"?',answer:"Most appends just write into the pre-allocated slack space — O(1). Occasionally the array fills and CPython allocates a new, larger one (by ~12.5% + 6) and copies. Averaged over many appends, the cost per op is constant."},{question:"Why does `matrix = [[0] * 3] * 3` misbehave?",answer:"The outer `* 3` makes **three pointers to the same inner list** — not three independent lists. Mutating one row mutates all. Use a comprehension: `[[0] * 3 for _ in range(3)]` to create fresh inner lists."},{question:"What's the difference between `list1.copy()`, `list(list1)`, and `list1[:]`?",answer:"All three produce a **shallow copy** — same result, same performance. Pick by style. For a **deep** copy (independent nested objects), you need `copy.deepcopy()`."},{question:"Why is `in` O(n) on a list but O(1) on a set?",answer:"A list has to scan element by element — it has no structure for lookup. A set uses a hash table: `hash(x)` tells you exactly where to look. If you're doing many `x in collection` checks, convert to a set once."},{question:"Does `sort()` return the sorted list?",answer:"No — it sorts **in place** and returns `None`. A common bug: `new = lst.sort()` gives `new = None`. Use `sorted(lst)` when you want a new list."}]}],Ce=[{type:"heading",level:1,text:"Tuples — Immutable Sequences"},{type:"text",content:"Tuples are Python's **immutable** ordered sequences. They look like lists but cannot be modified after creation. This immutability makes them faster, safer, and usable as dictionary keys and set members. Tuples are ideal for representing fixed collections of related values — like coordinates, RGB colors, or database records."},{type:"heading",level:2,text:"Creating Tuples"},{type:"code",code:`# Parentheses (most common)
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
    print(f"  RGB({c.r}, {c.g}, {c.b})")`,instructions:"Try creating your own tuple patterns — coordinates, records, or function return values."},{type:"heading",level:1,text:"Going Deeper — Why Tuples Matter"},{type:"heading",level:2,text:"Immutability Unlocks Superpowers"},{type:"text",content:"A tuple is an immutable ordered sequence. That single property makes it **hashable** — which makes it usable as a dictionary key or set member, whereas a list can never be."},{type:"code",code:`# Tuples are hashable — lists aren't
points_visited = {(0, 0), (1, 2), (3, 4)}     # set of coordinate pairs ✓
# points_visited = {[0, 0], [1, 2]}           # TypeError: unhashable type: 'list'

# Tuple as composite dict key
prices = {("AAPL", "2026-01-01"): 175.32, ("GOOGL", "2026-01-01"): 142.17}
print(prices[("AAPL", "2026-01-01")])`,language:"python"},{type:"heading",level:2,text:"Packing & Unpacking"},{type:"code",code:`# Packing — comma makes the tuple
point = 3, 4                  # (3, 4)

# Unpacking
x, y = point
print(x, y)                   # 3 4

# Swap without a temp variable
a, b = 1, 2
a, b = b, a
print(a, b)                   # 2 1

# Multiple returns — really one tuple
def min_max(seq):
    return min(seq), max(seq)

lo, hi = min_max([3, 1, 4, 1, 5])
print(lo, hi)                 # 1 5

# Star-unpacking (Python 3)
first, *middle, last = [1, 2, 3, 4, 5]
print(first, middle, last)    # 1 [2, 3, 4] 5`,language:"python"},{type:"memoryDiagram",title:"Diagram: Packing and Unpacking Bindings",description:"Tuple packing creates one tuple object; unpacking rebinds names to its element objects.",bindings:[{scope:"global",name:"point",objectId:"T_POINT"},{scope:"global",name:"x",objectId:"I3"},{scope:"global",name:"y",objectId:"I4"},{scope:"frame:return",name:"retval",objectId:"T_MM"}],objects:[{id:"T_POINT",type:"tuple",value:"(3, 4)",mutable:!1,note:"Fixed-size immutable sequence object.",accent:"sky"},{id:"I3",type:"int",value:"3",mutable:!1,accent:"amber"},{id:"I4",type:"int",value:"4",mutable:!1,accent:"amber"},{id:"T_MM",type:"tuple",value:"(1, 5)",mutable:!1,note:"Function returning multiple values really returns one tuple object.",accent:"mint"}],insights:["Commas create tuples; parentheses are often just grouping syntax.","Unpacking does not copy element objects; it binds names to existing references.","Swap syntax (`a, b = b, a`) is a compact pack/unpack sequence."]},{type:"heading",level:2,text:"Named Tuples — Structured Data"},{type:"text",content:"When positional access (`t[0]`, `t[1]`) gets confusing, reach for `collections.namedtuple` — it's a tuple with named fields. Like a lightweight, immutable class."},{type:"code",code:`from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)          # 3 4   — named access
print(p[0], p[1])        # 3 4   — still works as tuple
print(p)                 # Point(x=3, y=4)

# Or, the modern way — a typed dataclass with frozen=True
from dataclasses import dataclass

@dataclass(frozen=True)
class Point2:
    x: int
    y: int

p2 = Point2(3, 4)
print(p2.x, p2.y)`,language:"python"},{type:"heading",level:2,text:"Tuple vs List — When to Use Which"},{type:"list",items:['**Tuple**: fixed-size, heterogeneous record (a coordinate, a row, a return value). Use when "this is a thing with parts."','**List**: variable-size, homogeneous collection (a list of users, a list of numbers). Use when "this is a bunch of similar items."',"**Tuple if you need a dict key / set member** — lists don't qualify.","**Tuple is slightly faster to create and iterate** — negligible in most real code."]},{type:"heading",level:2,text:"Interactive Tuple Identity Trace"},{type:"memoryLab",title:"Interactive Trace: Immutable Outer, Mutable Inner",prompt:"Observe why a tuple can remain immutable while an inner list still changes.",steps:[{title:"Create a Tuple With Inner List",action:"Run setup expression",code:'record = ("Ada", [1, 2])',bindings:[{scope:"global",name:"record",objectId:"T_REC"}],objects:[{id:"T_REC",type:"tuple",value:'("Ada", [1, 2])',mutable:!1,refCount:1,accent:"sky"},{id:"L_INNER",type:"list",value:"[1, 2]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Tuple slots are fixed, but one slot points to a mutable list object."},{title:"Attempt Tuple Reassignment Fails",action:"Try replacing element 0",code:'record[0] = "Grace"   # TypeError',bindings:[{scope:"global",name:"record",objectId:"T_REC"},{scope:"runtime",name:"active_exception",objectId:"E_TYPE"}],objects:[{id:"T_REC",type:"tuple",value:'("Ada", [1, 2])',mutable:!1,refCount:1,accent:"sky"},{id:"E_TYPE",type:"TypeError",value:'TypeError("tuple does not support item assignment")',mutable:!1,refCount:1,accent:"coral"}],explanation:"Tuple structure cannot be edited in place, so item assignment is rejected."},{title:"Mutate Inner List Succeeds",action:"Run `record[1].append(3)`",code:"record[1].append(3)",bindings:[{scope:"global",name:"record",objectId:"T_REC"}],objects:[{id:"T_REC",type:"tuple",value:'("Ada", [1, 2, 3])',mutable:!1,refCount:1,accent:"sky"},{id:"L_INNER",type:"list",value:"[1, 2, 3]",mutable:!0,refCount:1,accent:"amber"}],explanation:"Tuple still points to the same inner list object, whose contents are mutable."},{title:"Hashability Consequence",action:"Try using tuple as dictionary key",code:`# d[record] would fail because record contains list
key = ("Ada", 42)
d = {key: "ok"}`,bindings:[{scope:"global",name:"key",objectId:"T_KEY"},{scope:"global",name:"d",objectId:"D1"}],objects:[{id:"T_KEY",type:"tuple",value:'("Ada", 42)',mutable:!1,refCount:2,accent:"mint"},{id:"D1",type:"dict",value:'{("Ada", 42): "ok"}',mutable:!0,refCount:1,accent:"neutral"}],explanation:"A tuple is hashable only when all contained objects are hashable."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why does Python have both tuples and lists?",answer:"Different intents. **Tuples** are records: fixed, heterogeneous, hashable. **Lists** are collections: variable, homogeneous, mutable. The immutability of tuples makes them usable as dict keys."},{question:"Is `(5)` a tuple?",answer:"No — that's just `5` in parentheses. A one-element tuple needs a trailing comma: `(5,)`. The comma makes the tuple, not the parentheses."},{question:"Can a tuple contain a list?",answer:'Yes — tuples are shallowly immutable. `t = ([1, 2], "x")` is fine; the tuple itself can\'t be modified, but the list *inside* it can. Such a tuple is **not hashable**, though.'},{question:"Are tuples really faster than lists?",answer:"Slightly — tuple creation and iteration are a hair faster due to their fixed size. For most applications the difference is negligible. Choose based on **meaning**, not performance."}]}],je=[{type:"heading",level:1,text:"Dictionaries — Key-Value Data"},{type:"text",content:"Dictionaries are Python's most versatile data structure — they store **key-value pairs** and provide lightning-fast lookups by key. In other languages, they're called hash maps, associative arrays, or objects. Dictionaries are everywhere in Python: configuration files, JSON data, database records, counting, grouping — mastering them is essential."},{type:"heading",level:2,text:"Creating Dictionaries"},{type:"code",code:`# Curly braces with key: value pairs
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
    print(f"  {name} (age {info['age']}): avg = {avg:.1f}")`,language:"python"},{type:"heading",level:2,text:"Assignment Bridge: Frequency Tables & Probability"},{type:"text",content:'Many graded assignments use a list of random numbers plus a dictionary frequency table `P[num]`. Once frequencies are built, probabilities and "most frequent" queries become one-liners.'},{type:"code",code:`import random

# Generate 10,000 values from 1..10
nums = [random.randint(1, 10) for _ in range(10_000)]

# Build frequency dictionary
P = {k: 0 for k in range(1, 11)}
for num in nums:
    P[num] += 1

# Probability of drawing 5 from nums
prob_5 = P[5] / len(nums)
print(f"P(5) = {prob_5:.4f}")

# Number with maximum frequency (tie -> larger number)
most_freq_num = max(P, key=lambda k: (P[k], k))
print(f"Most frequent number: {most_freq_num} (count={P[most_freq_num]})")

def has_streak_five(values):
    """Return True if value 5 appears at least 5 times consecutively."""
    count = 0
    for x in values:
        if x == 5:
            count += 1
            if count >= 5:
                return True
        else:
            count = 0
    return False

print(f"Has streak of five 5s: {has_streak_five(nums)}")`,language:"python"},{type:"callout",variant:"info",title:"Pattern to Remember",content:"Assignment pattern: (1) generate or read data, (2) build frequency dict, (3) derive metrics like probability, argmax, or streak checks. This repeats across loops, dicts, and file-based questions."},{type:"heading",level:1,text:"Going Deeper - How Dict Lookup Works Internally"},{type:"text",content:"Python dictionaries are hash tables. Lookup computes hash(key), probes candidate slots, and compares keys only when needed. This yields average O(1) access for get/set/delete."},{type:"code",code:`d = {"name": "Alice", "age": 20}
print(d["name"])
d["city"] = "Delhi"
print("age" in d)`,language:"python"},{type:"memoryDiagram",title:"Diagram: Hash to Slot to Value Binding",description:"A dict maps hashable keys to value references through an internal index table.",bindings:[{scope:"global",name:"d",objectId:"D_MAIN"},{scope:"runtime",name:"key",objectId:"S_NAME"},{scope:"runtime",name:"slot[5]",objectId:"ENTRY_NAME"},{scope:"runtime",name:"slot[2]",objectId:"ENTRY_AGE"}],objects:[{id:"D_MAIN",type:"dict",value:'{"name": "Alice", "age": 20}',mutable:!0,note:"Stores entries in a compact hash table layout.",accent:"sky"},{id:"S_NAME",type:"str",value:'"name"',mutable:!1,accent:"amber"},{id:"ENTRY_NAME",type:"dict entry",value:'(hash("name"), "name", "Alice")',mutable:!1,accent:"mint"},{id:"ENTRY_AGE",type:"dict entry",value:'(hash("age"), "age", 20)',mutable:!1,accent:"neutral"}],insights:["Keys must be hashable so their hash value remains stable over time.","Insertion order is preserved in Python 3.7+, independent of hash bucket order.","Average O(1) performance can degrade only with extreme collision patterns."]},{type:"memoryLab",title:"Interactive Trace: Insert, Update, and Safe Access",prompt:"Observe how dictionary state changes for set/get/update operations.",steps:[{title:"Initialize Empty Dict",action:"Start with empty mapping",code:"profile = {}",bindings:[{scope:"global",name:"profile",objectId:"D0"}],objects:[{id:"D0",type:"dict",value:"{}",mutable:!0,refCount:1,accent:"sky"}],explanation:"Empty dict allocates table metadata and waits for first insertion."},{title:"Insert New Keys",action:"Add name and age",code:`profile["name"] = "Alice"
profile["age"] = 20`,bindings:[{scope:"global",name:"profile",objectId:"D1"}],objects:[{id:"D1",type:"dict",value:'{"name": "Alice", "age": 20}',mutable:!0,refCount:1,accent:"mint"}],explanation:"Each assignment inserts or updates an entry by key hash and equality checks."},{title:"Update Existing Key",action:"Overwrite age in place",code:'profile["age"] = 21',bindings:[{scope:"global",name:"profile",objectId:"D2"}],objects:[{id:"D2",type:"dict",value:'{"name": "Alice", "age": 21}',mutable:!0,refCount:1,accent:"mint"}],explanation:"Existing key slot is reused and only the value reference is replaced."},{title:"Safe Missing Access",action:"Read absent key with default",code:'city = profile.get("city", "Unknown")',bindings:[{scope:"global",name:"profile",objectId:"D2"},{scope:"global",name:"city",objectId:"S_UNK"}],objects:[{id:"D2",type:"dict",value:'{"name": "Alice", "age": 21}',mutable:!0,refCount:1,accent:"mint"},{id:"S_UNK",type:"str",value:'"Unknown"',mutable:!1,refCount:1,accent:"amber"}],explanation:"get() avoids KeyError and returns fallback when key is absent."}]},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Dictionary exploration!

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
    print(f"  {word}: {count}")`,instructions:"Experiment with dictionaries — try building a simple address book, inventory system, or word counter."},{type:"heading",level:2,text:"Q&A"},{type:"heading",level:2,text:"Challenge Q&A"}],Ae=[{type:"heading",level:1,text:"Sets — Unique Collections"},{type:"text",content:"Sets are **unordered collections of unique elements**. Inspired by mathematical sets, they support powerful operations like union, intersection, and difference. Sets excel at membership testing (extremely fast `in` checks), removing duplicates, and comparing groups of items. If you've ever needed to ask \"what's in A but not in B?\" — sets are your answer."},{type:"heading",level:2,text:"Creating Sets"},{type:"code",code:`# Curly braces — but NOT empty! (empty {} is a dict)
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
print(f"\\nDuplicates: {find_duplicates(nums)}")`,instructions:"Experiment with set operations — find intersections, differences, or use sets to solve problems."},{type:"heading",level:1,text:"Going Deeper — How Sets Work"},{type:"text",content:"A Python `set` is a **hash table without values** — just keys. It provides O(1) average `in`, `add`, `remove`, and powerful set-algebra operations built into the language."},{type:"heading",level:2,text:"Membership — O(1) vs List's O(n)"},{type:"code",code:`import time

big_list = list(range(1_000_000))
big_set  = set(big_list)

t0 = time.time(); _ = 999_999 in big_list;  print(f"list: {(time.time()-t0)*1e3:.2f}ms")
t0 = time.time(); _ = 999_999 in big_set;   print(f"set:  {(time.time()-t0)*1e3:.4f}ms")
# set is ~10,000× faster — hash table vs linear scan`,language:"python"},{type:"heading",level:2,text:"Set Operations (the Math)"},{type:"code",code:`a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a | b)       # union:         {1, 2, 3, 4, 5, 6}
print(a & b)       # intersection:  {3, 4}
print(a - b)       # difference:    {1, 2}
print(a ^ b)       # symmetric diff:{1, 2, 5, 6}

# Subset / superset
print({1, 2} <= a)    # True — subset
print(a >= {1, 2})    # True — superset
print({1, 2} < a)     # True — proper subset

# Disjoint
print({1, 2}.isdisjoint({3, 4}))   # True`,language:"python"},{type:"setVenn",title:"Try It: Set Operations Venn",description:"Type elements into A and B, then click an operator to see the highlighted region and the resulting set."},{type:"heading",level:2,text:"frozenset — The Immutable Sibling"},{type:"text",content:"A `frozenset` is an immutable (and therefore hashable) set — usable as dict keys and members of other sets."},{type:"code",code:`fs = frozenset([1, 2, 3])
# fs.add(4)    # AttributeError — immutable

# Set of sets — only works with frozensets
groupings = {frozenset({1, 2}), frozenset({3, 4})}

# frozenset as dict key
cache = {frozenset({"a", "b"}): "grouped"}`,language:"python"},{type:"heading",level:2,text:"Common Use Cases"},{type:"code",code:`# Deduplicate while preserving order? Use dict keys (3.7+)
ordered_unique = list(dict.fromkeys([3, 1, 2, 1, 3]))
# [3, 1, 2]

# Quick uniqueness check
if len(items) != len(set(items)):
    print("duplicates!")

# Multi-set-style operations
readers = {"alice", "bob", "carol"}
writers = {"bob", "dan"}
print(readers & writers)    # both roles
print(readers - writers)    # only readers
print(readers | writers)    # anyone

# Remove unwanted items
words = ["the", "cat", "sat", "on", "the", "mat"]
stopwords = {"the", "on", "a", "an"}
content = [w for w in words if w not in stopwords]`,language:"python"},{type:"heading",level:2,text:"Hash Buckets and Membership Flow"},{type:"text",content:"Sets store only keys in a hash table. Membership checks hash the candidate, probe likely bucket positions, and verify equality when hashes collide."},{type:"code",code:`tags = {"python", "oop", "sets"}
print("oop" in tags)
tags.add("iterators")
tags.discard("unknown")`,language:"python"},{type:"memoryDiagram",title:"Diagram: Set Elements in Hash Buckets",description:"A set entry stores hash and key reference, with no associated value payload.",bindings:[{scope:"global",name:"tags",objectId:"SET1"},{scope:"runtime",name:"bucket[1]",objectId:"E_PY"},{scope:"runtime",name:"bucket[5]",objectId:"E_OOP"},{scope:"runtime",name:"bucket[7]",objectId:"E_SET"}],objects:[{id:"SET1",type:"set",value:'{"python", "oop", "sets"}',mutable:!0,accent:"sky"},{id:"E_PY",type:"set entry",value:'(hash("python"), "python")',mutable:!1,accent:"amber"},{id:"E_OOP",type:"set entry",value:'(hash("oop"), "oop")',mutable:!1,accent:"mint"},{id:"E_SET",type:"set entry",value:'(hash("sets"), "sets")',mutable:!1,accent:"neutral"}],insights:["No duplicate keys can coexist because equality check merges equivalent entries.","Average O(1) membership relies on good hash distribution.","frozenset works similarly but disallows mutation operations."]},{type:"memoryLab",title:"Interactive Trace: Add, Membership, and Set Algebra",prompt:"Observe how set content evolves under common operations.",steps:[{title:"Initialize Set",action:"Create first set",code:"a = {1, 2, 3}",bindings:[{scope:"global",name:"a",objectId:"SET_A1"}],objects:[{id:"SET_A1",type:"set",value:"{1, 2, 3}",mutable:!0,refCount:1,accent:"sky"}],explanation:"Initial hash table has three entries."},{title:"Add Existing and New Elements",action:"Run add operations",code:`a.add(3)
a.add(4)`,bindings:[{scope:"global",name:"a",objectId:"SET_A2"}],objects:[{id:"SET_A2",type:"set",value:"{1, 2, 3, 4}",mutable:!0,refCount:1,accent:"mint"}],explanation:"Adding duplicate 3 has no effect; adding 4 inserts new entry."},{title:"Membership Probe",action:"Check if 2 exists",code:"2 in a  # True",bindings:[{scope:"runtime",name:"query",objectId:"I2"},{scope:"runtime",name:"membership_result",objectId:"B_TRUE"}],objects:[{id:"I2",type:"int",value:"2",mutable:!1,refCount:1,accent:"amber"},{id:"B_TRUE",type:"bool",value:"True",mutable:!1,refCount:1,accent:"mint"}],explanation:"Hash probe finds matching key quickly without scanning all elements."},{title:"Set Algebra Result",action:"Compute intersection",code:`b = {3, 4, 5}
common = a & b`,bindings:[{scope:"global",name:"a",objectId:"SET_A2"},{scope:"global",name:"b",objectId:"SET_B"},{scope:"global",name:"common",objectId:"SET_C"}],objects:[{id:"SET_B",type:"set",value:"{3, 4, 5}",mutable:!0,refCount:1,accent:"amber"},{id:"SET_C",type:"set",value:"{3, 4}",mutable:!0,refCount:1,accent:"sky"}],explanation:"Intersection creates a new set with elements present in both operands."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why is `set` so much faster than `list` for membership?",answer:"Lists scan linearly (O(n)); sets hash the target and jump directly to the bucket (O(1) average). For large collections and repeated `in` checks, always use a set."},{question:"Can I have a set of lists?",answer:"No — lists are unhashable. Use tuples or frozensets: `{(1, 2), (3, 4)}` or `{frozenset({1, 2}), frozenset({3, 4})}`."},{question:"Does a set preserve insertion order?",answer:"No. Unlike dicts, sets **do not** guarantee order. If you need uniqueness + order, use `dict.fromkeys(items)` and take the keys."},{question:"What's the difference between `{}` and `set()`?",answer:'`{}` is an **empty dict**, not a set (for historical reasons). Use `set()` for an empty set. `{1, 2}` is a set; `{"a": 1}` is a dict.'}]}],Se=[{type:"heading",level:1,text:"Comprehensions"},{type:"text",content:'A **comprehension** is Python\'s way of building a collection from another iterable — in a single, readable expression. It replaces 3–5 lines of explicit loop + `.append()` with a declarative "what I want" form. Comprehensions exist for **lists**, **sets**, **dicts**, and **generators** — four shapes of the same idea.'},{type:"callout",variant:"python",title:"Why Python Loves Them",content:'Comprehensions are **faster** than equivalent for-loops (CPython executes them in a dedicated C path), and they express *intent* — "transform each element" — instead of *mechanics* — "append to a list in a loop." Guido added them in 2000 for exactly this reason.'},{type:"heading",level:2,text:"From Loop to Comprehension"},{type:"code",code:`# The long way
squares = []
for x in range(10):
    squares.append(x ** 2)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# The comprehension way
squares = [x ** 2 for x in range(10)]
# Same result, one line.`,language:"python"},{type:"text",content:"The shape is always the same:"},{type:"code",code:`[ EXPRESSION  for ITEM in ITERABLE  if CONDITION ]
  └── output   └──── loop header ──┘ └─ optional ─┘`,language:"text"},{type:"heading",level:2,text:"List Comprehensions"},{type:"code",code:`# Transform
names = ["alice", "bob", "carol"]
upper = [n.upper() for n in names]
# ['ALICE', 'BOB', 'CAROL']

# Filter
nums = [1, -2, 3, -4, 5]
positive = [n for n in nums if n > 0]
# [1, 3, 5]

# Transform + filter
evens_squared = [x ** 2 for x in range(10) if x % 2 == 0]
# [0, 4, 16, 36, 64]

# Conditional expression (this is NOT filtering — it picks output values)
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
# ['even', 'odd', 'even', 'odd', 'even']

# Nested — like nested for-loops
pairs = [(i, j) for i in range(3) for j in range(3) if i != j]
# [(0,1), (0,2), (1,0), (1,2), (2,0), (2,1)]

# Flatten a 2-D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [x for row in matrix for x in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]`,language:"python"},{type:"callout",variant:"warning",title:"Filter `if` vs Ternary `if-else` — Watch the Position",content:"`[x for x in data if x > 0]` — the `if` **after** the loop is a **filter** (skips items). `[x if x > 0 else 0 for x in data]` — the `if/else` **before** the `for` is a **ternary expression** (replaces items). Different position, different meaning."},{type:"heading",level:2,text:"Dictionary Comprehensions"},{type:"code",code:`# Basic — produce key: value pairs
squares = {x: x ** 2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From two lists
names = ["Alice", "Bob", "Carol"]
scores = [92, 85, 78]
gradebook = {n: s for n, s in zip(names, scores)}
# {'Alice': 92, 'Bob': 85, 'Carol': 78}

# Invert a dict (swap keys ↔ values)
hex_codes = {"red": "#FF0000", "green": "#00FF00"}
by_code = {v: k for k, v in hex_codes.items()}
# {'#FF0000': 'red', '#00FF00': 'green'}

# Filter
passing = {n: s for n, s in gradebook.items() if s >= 80}
# {'Alice': 92, 'Bob': 85}

# Count occurrences in one line
text = "abracadabra"
count = {ch: text.count(ch) for ch in set(text)}
# {'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}`,language:"python"},{type:"heading",level:2,text:"Set Comprehensions"},{type:"code",code:`# Unique vowels in a sentence
sentence = "the quick brown fox jumps over the lazy dog"
vowels = {ch for ch in sentence if ch in "aeiou"}
# {'a', 'e', 'i', 'o', 'u'}

# Unique word lengths
lengths = {len(w) for w in sentence.split()}
# {3, 4, 5}`,language:"python"},{type:"heading",level:2,text:"Generator Expressions — Lazy Comprehensions"},{type:"text",content:"Swap the `[ ]` for `( )` and you get a **generator expression** — a lazy, memory-efficient iterator. It produces values **one at a time**, never building a full list in memory."},{type:"code",code:`# A list comprehension builds the whole list — 1 GB of RAM
total = sum([x * x for x in range(10_000_000)])

# A generator expression streams values — constant memory
total = sum(x * x for x in range(10_000_000))

# When passed as a single argument, the outer parens are optional:
#   sum(x * x for x in nums)   # generator expression
#   sum((x * x for x in nums)) # equivalent but ugly

import sys
print(sys.getsizeof([x for x in range(1000)]))   # ~8000 bytes
print(sys.getsizeof(x for x in range(1000)))     # ~200 bytes (just the gen object)`,language:"python"},{type:"callout",variant:"tip",title:"Rule of Thumb",content:"Use **list comprehension** when you need the full collection (index into it, length, pass around). Use a **generator expression** when you're piping it straight into `sum`, `any`, `all`, `max`, `min`, or iterating once."},{type:"heading",level:2,text:"Comprehension Scope"},{type:"text",content:"In Python 3, comprehension variables live in **their own scope** — they don't leak into the surrounding function. This fixed a classic bug from Python 2."},{type:"code",code:`x = 10
_ = [x for x in range(5)]
print(x)   # 10  — the comprehension's x did NOT overwrite it
# (In Python 2 this would print 4. Python 3 fixed it.)`,language:"python"},{type:"heading",level:2,text:"When Not to Use Them"},{type:"list",items:["**When the logic needs multiple statements.** A comprehension is *one expression* — if you need `try/except`, a side-effect, or a 3-step transformation, use a regular loop.","**When it stops being readable.** If your comprehension needs a comment to explain it, a loop was probably clearer.","**When you only care about side effects.** Use a `for` loop. `[print(x) for x in data]` builds a list of `None`s just to throw away — wasteful and confusing.","**When nesting ≥ 3 levels deep.** Your future self will thank you for the plain loop."]},{type:"code",code:`# BAD — three-level nested comprehension, unreadable
result = [[[f(a, b, c) for c in C] for b in B] for a in A]

# BETTER — explicit loops, clear intent
result = []
for a in A:
    row = []
    for b in B:
        cell = [f(a, b, c) for c in C]
        row.append(cell)
    result.append(row)`,language:"python"},{type:"heading",level:1,text:"Going Deeper - Comprehension Runtime and Memory"},{type:"text",content:"A list comprehension is eager: it allocates and fills a list immediately. A generator expression is lazy: it stores execution state and yields one item at a time."},{type:"code",code:`nums = range(5)
list_comp = [x * x for x in nums]
gen_expr = (x * x for x in nums)

print(list_comp)
print(next(gen_expr))
print(next(gen_expr))`,language:"python"},{type:"memoryDiagram",title:"Diagram: Eager List vs Lazy Generator",description:"Both use the same expression logic but create different runtime objects and memory behavior.",bindings:[{scope:"global",name:"list_comp",objectId:"L_COMP"},{scope:"global",name:"gen_expr",objectId:"G_EXPR"},{scope:"runtime",name:"iter_source",objectId:"RANGE5"}],objects:[{id:"RANGE5",type:"range",value:"range(0, 5)",mutable:!1,accent:"amber"},{id:"L_COMP",type:"list",value:"[0, 1, 4, 9, 16]",mutable:!0,note:"All values materialized at once.",accent:"mint"},{id:"G_EXPR",type:"generator",value:"<genexpr state=index=2>",mutable:!0,note:"Stores only execution state, not full output.",accent:"sky"}],insights:["List comprehensions trade memory for immediate reusability.","Generator expressions trade random access for low memory use.","Both execute loop variables in an isolated comprehension scope in Python 3."]},{type:"memoryLab",title:"Interactive Trace: Materialization vs Streaming",prompt:"Compare when values are computed and where they are stored.",steps:[{title:"Build Eager List",action:"Run list comprehension",code:"squares = [x * x for x in range(4)]",bindings:[{scope:"global",name:"squares",objectId:"L_SQ"}],objects:[{id:"L_SQ",type:"list",value:"[0, 1, 4, 9]",mutable:!0,refCount:1,accent:"mint"}],explanation:"All output values are computed immediately and stored in one list object."},{title:"Create Generator",action:"Run generator expression",code:"stream = (x * x for x in range(4))",bindings:[{scope:"global",name:"stream",objectId:"G_SQ"}],objects:[{id:"G_SQ",type:"generator",value:"<state: not started>",mutable:!0,refCount:1,accent:"sky"}],explanation:"No squares are computed yet; only iterator state and bytecode context are stored."},{title:"Consume One Item",action:"Run first next call",code:"next(stream)  # 0",bindings:[{scope:"global",name:"stream",objectId:"G_SQ"}],objects:[{id:"G_SQ",type:"generator",value:"<state: index=1>",mutable:!0,refCount:1,accent:"sky"},{id:"I0",type:"int",value:"0",mutable:!1,refCount:0,accent:"amber",note:"Returned value is temporary unless rebound."}],explanation:"Generator runs until first yield and pauses, keeping resume state."},{title:"Exhaust Generator",action:"Consume remaining values",code:"list(stream)  # [1, 4, 9]",bindings:[{scope:"global",name:"stream",objectId:"G_SQ"}],objects:[{id:"G_SQ",type:"generator",value:"<state: exhausted>",mutable:!0,refCount:1,accent:"coral"}],explanation:"After exhaustion, additional reads produce no values and raise StopIteration."}]},{type:"heading",level:2,text:"Your Turn"},{type:"playground",instructions:"Given the sentence below, use ONE dict comprehension to build `{word: length}` for every word **longer than 3 letters**. Expected: `{'quick': 5, 'brown': 5, 'jumps': 5, 'over': 4, 'lazy': 4}`.",defaultCode:`sentence = "the quick brown fox jumps over the lazy dog"

# one dict comprehension here
result = {}

print(result)`},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"Are comprehensions actually faster than equivalent for-loops?",answer:"Yes — typically **1.5× to 2× faster** because CPython has a specialized bytecode path (`LIST_APPEND` instead of attribute lookup + call). The difference grows with the size of the iterable."},{question:"What's the difference between `[x for x in data]` and `list(x for x in data)`?",answer:"Functionally identical — both produce a list. The first is the **list comprehension** (faster, clearer). The second builds a generator and then materializes it — it's slightly slower and indirect. Use the first form."},{question:"Can I use `for` variables in my output expression?",answer:"Yes — that's the whole point. `[name.upper() for name in names]` uses the `name` variable from the loop header. You can also chain multiple `for` clauses and reference outer variables in inner ones."},{question:"Why does `(x for x in data)` return a generator instead of a tuple?",answer:"Because tuples are immutable — building one *lazily* would not make sense. Python chose to give parentheses generator semantics instead. For a tuple, wrap it: `tuple(x for x in data)`."},{question:"Does a comprehension's loop variable leak into the surrounding scope?",answer:"No — in Python 3, each comprehension has its **own** scope (implemented via a hidden nested function). After `[x for x in range(5)]`, the name `x` in the outer scope is unchanged. (Python 2 leaked — Py3 fixed it.)"},{question:"When should I reach for a generator expression over a list comprehension?",answer:"When you don't need a **reusable, indexable collection** — only a single pass. Feeding to `sum/any/all/max/min`, streaming through a pipeline, or handling huge datasets: generator. Need to iterate twice, index, or know the length: list."}]}],Ee=[{type:"heading",level:1,text:"Functions — Building Blocks of Programs"},{type:"text",content:"A **function** is a reusable block of code that performs a specific task. Functions are the most important organizational tool in programming — they let you break complex problems into smaller, manageable pieces. You've already been using built-in functions: `print()`, `len()`, `range()`, `int()`. Now you'll learn to **create your own**."},{type:"heading",level:2,text:"Defining and Calling Functions"},{type:"code",code:`# Defining a function with def
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

# Always document your functions! Future-you will thank you.`,language:"python"},{type:"heading",level:2,text:"Assignment Bridge: Polynomial & Binary Problems"},{type:"text",content:"Week-style function questions often ask for polynomial evaluation, integer root search in a range, and binary-to-decimal conversion. These are excellent drills for loops, indexing, and function decomposition."},{type:"code",code:`def poly(coeffs, x0):
    """Evaluate a0 + a1*x0 + a2*x0^2 + ... using Horner form."""
    result = 0
    for a in reversed(coeffs):
        result = result * x0 + a
    return result

def poly_zeros(coeffs, a, b):
    """Return all integer zeros in [a, b], inclusive."""
    zeros = []
    for x in range(a, b + 1):
        if poly(coeffs, x) == 0:
            zeros.append(x)
    return zeros

print(poly([1, 2, 3], 5))            # 86
print(poly_zeros([2, -3, 1], 0, 4))  # [1, 2]

def bin_to_dec(bits):
    """Convert binary string like "1011" to decimal integer."""
    value = 0
    for ch in bits:
        value = value * 2 + int(ch)
    return value

print(bin_to_dec("1011"))            # 11
print(bin_to_dec("100000"))          # 32`,language:"python"},{type:"callout",variant:"tip",title:"Why Horner Form?",content:"Directly computing powers (`x**k`) works, but Horner form is cleaner and faster: it evaluates a degree-n polynomial in O(n) multiplications with minimal temporary values."},{type:"heading",level:2,text:"Try It Yourself"},{type:"playground",defaultCode:`# Create and use functions!

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
print(f"\\nMin={lo}, Max={hi}, Avg={avg:.1f}")`,instructions:"Create your own functions! Try making a function that checks if a number is prime."},{type:"heading",level:1,text:"Going Deeper — Scope, Closures, Recursion"},{type:"heading",level:2,text:"The LEGB Rule — How Python Resolves Names"},{type:"text",content:"When Python meets a name inside a function, it searches in this order:"},{type:"list",items:["**L — Local**: names defined inside the current function.","**E — Enclosing**: names in any enclosing function (for nested funcs).","**G — Global**: names at the module/file level.","**B — Built-in**: names like `print`, `len`, `range`."]},{type:"code",code:`x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)          # local
    inner()
    print(x)              # enclosing

outer()
print(x)                  # global`,language:"python"},{type:"callout",variant:"warning",title:"The Assignment Rule",content:"Any `x = ...` **inside** a function creates a new **local** variable — shadowing the outer name. To modify an outer variable, declare it `global` or `nonlocal` first."},{type:"heading",level:2,text:"global and nonlocal"},{type:"code",code:`count = 0

def bump():
    global count        # without this, you'd get UnboundLocalError
    count += 1

def make_counter():
    n = 0
    def tick():
        nonlocal n      # refer to n in the enclosing function
        n += 1
        return n
    return tick

c = make_counter()
print(c(), c(), c())   # 1 2 3`,language:"python"},{type:"heading",level:2,text:"Functions Are First-Class Objects"},{type:"code",code:`def double(x): return x * 2
def triple(x): return x * 3

ops = [double, triple]
print([op(5) for op in ops])   # [10, 15]

def apply(f, x):
    return f(x)
print(apply(double, 7))        # 14

def make_multiplier(k):
    def multiply(x):
        return x * k
    return multiply

times10 = make_multiplier(10)
print(times10(4))              # 40`,language:"python"},{type:"heading",level:2,text:"Recursion — Functions Calling Themselves"},{type:"text",content:"A **recursive** function calls itself on a smaller version of the problem. Every recursion needs two pieces: a **base case** (when to stop) and a **recursive case** (how to reduce)."},{type:"code",code:`def factorial(n):
    if n <= 1:              # base case
        return 1
    return n * factorial(n - 1)   # recursive case

print(factorial(5))         # 120

def fib(n):
    if n < 2: return n
    return fib(n - 1) + fib(n - 2)

def deep_sum(items):
    total = 0
    for x in items:
        if isinstance(x, list):
            total += deep_sum(x)
        else:
            total += x
    return total

print(deep_sum([1, [2, [3, 4]], 5]))   # 15`,language:"python"},{type:"callout",variant:"warning",title:"Recursion Limit",content:"CPython caps recursion at ~1000 calls by default (`sys.getrecursionlimit()`). Deep recursion blows the stack. Python has no tail-call optimization — convert deep recursion to iteration, or use `functools.lru_cache` for repeated subproblems."},{type:"code",code:`from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2: return n
    return fib(n - 1) + fib(n - 2)

print(fib(100))   # instant — cached subproblems`,language:"python"},{type:"heading",level:2,text:"Runtime Call Frames and Name Resolution"},{type:"text",content:"Each function call creates a new frame object that holds local bindings, argument references, and links to enclosing/global scopes. Returning pops that frame from the stack."},{type:"code",code:`x = 10

def add_to_x(y):
    z = x + y
    return z

out = add_to_x(5)
print(out)  # 15`,language:"python"},{type:"memoryDiagram",title:"Diagram: Global Scope Plus Function Frame",description:"The frame for add_to_x has local names y and z, while x is resolved from global scope.",bindings:[{scope:"global",name:"x",objectId:"I10"},{scope:"global",name:"add_to_x",objectId:"F_ADD"},{scope:"frame:add_to_x",name:"y",objectId:"I5"},{scope:"frame:add_to_x",name:"z",objectId:"I15"},{scope:"global",name:"out",objectId:"I15"}],objects:[{id:"I10",type:"int",value:"10",mutable:!1,accent:"amber"},{id:"F_ADD",type:"function",value:"<function add_to_x(y)>",mutable:!1,accent:"sky"},{id:"I5",type:"int",value:"5",mutable:!1,accent:"mint"},{id:"I15",type:"int",value:"15",mutable:!1,accent:"neutral"}],insights:["Local names live only inside the active call frame.","Name lookup follows LEGB order when a local name is missing.","Returned values are rebound in caller scope after frame teardown."]},{type:"memoryLab",title:"Interactive Trace: Call Stack Through a Recursive Function",prompt:"Track frame creation and destruction in factorial recursion.",steps:[{title:"Initial Call",action:"Invoke factorial(3)",code:"factorial(3)",bindings:[{scope:"frame:factorial#1",name:"n",objectId:"I3"}],objects:[{id:"I3",type:"int",value:"3",mutable:!1,refCount:1,accent:"amber"}],explanation:"First frame is pushed with n=3 and is waiting for factorial(2)."},{title:"Second Frame",action:"Recursive call factorial(2)",code:"factorial(2)",bindings:[{scope:"frame:factorial#1",name:"n",objectId:"I3"},{scope:"frame:factorial#2",name:"n",objectId:"I2"}],objects:[{id:"I3",type:"int",value:"3",mutable:!1,refCount:1,accent:"amber"},{id:"I2",type:"int",value:"2",mutable:!1,refCount:1,accent:"sky"}],explanation:"Recursive calls create independent frames, each with its own local n."},{title:"Base Case Frame",action:"Recursive call factorial(1)",code:"factorial(1)  # returns 1",bindings:[{scope:"frame:factorial#3",name:"n",objectId:"I1"},{scope:"frame:factorial#3",name:"return",objectId:"I1"}],objects:[{id:"I1",type:"int",value:"1",mutable:!1,refCount:1,accent:"mint"}],explanation:"Base case returns immediately and starts stack unwinding."},{title:"Unwind and Final Result",action:"Frames return upward",code:"factorial(2)=2*1, factorial(3)=3*2",bindings:[{scope:"global",name:"result",objectId:"I6"}],objects:[{id:"I6",type:"int",value:"6",mutable:!1,refCount:1,accent:"mint"}],explanation:"Each returning frame multiplies by its local n, then is removed from the call stack."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why does modifying `x` inside a function sometimes raise `UnboundLocalError`?",answer:"Because assigning to `x` anywhere in the function makes Python treat `x` as local for the **entire** function. To modify an outer variable, declare it `global` or `nonlocal` first."},{question:"What's the difference between `global` and `nonlocal`?",answer:"`global` refers to the **module-level** name. `nonlocal` refers to the **nearest enclosing function's** name. Use `nonlocal` for nested functions."},{question:"Does Python pass arguments by value or by reference?",answer:'Neither classically — Python uses "**pass-by-object-reference**." The function receives the **same object** the caller has. Mutating it is visible outside; rebinding is not.'},{question:"Why does `def f(x=[]): x.append(1); return x` misbehave?",answer:"The default `[]` is evaluated **once**, at function definition. Every call without `x` reuses the **same list**. Use `None` as a sentinel and create the list inside."},{question:"What's the base case in recursion?",answer:"The simplest input where the function answers directly **without** recursing. Without one, you get infinite recursion → `RecursionError`."}]}],Pe=[{type:"heading",level:1,text:"Advanced Function Concepts"},{type:"text",content:"Now that you understand basic functions, let's explore Python's more powerful function features: **lambda expressions**, **recursion**, **higher-order functions**, and **flexible arguments**. These concepts take your functions from simple tools to sophisticated building blocks."},{type:"heading",level:2,text:"Lambda Functions (Anonymous Functions)"},{type:"code",code:`# Lambda: a one-line anonymous function
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

print(f"\\n2^10 = {power(2, 10)}")`,instructions:"Try writing a recursive function to reverse a string, or create a function factory."},{type:"heading",level:1,text:"Going Deeper — Closures & Decorators"},{type:"heading",level:2,text:"Closures — Functions That Remember"},{type:"text",content:'A **closure** is a function that "remembers" variables from the scope where it was *created* — even after that scope has returned. This is how you attach state to a function without using a class.'},{type:"code",code:`def make_counter():
    n = 0
    def tick():
        nonlocal n
        n += 1
        return n
    return tick

c1 = make_counter()
c2 = make_counter()       # independent counter, fresh n

print(c1(), c1(), c1())   # 1 2 3
print(c2())               # 1  — c2 is its own closure

print(c1.__closure__[0].cell_contents)   # 3 — the n it closed over`,language:"python"},{type:"callout",variant:"python",title:"Closure = Function + Environment",content:`Every inner function carries a hidden reference to the "cells" holding its free variables. Those cells keep the outer scope's variables alive *even after* the outer function has returned.`},{type:"heading",level:2,text:"Decorators — Wrapping Functions"},{type:"text",content:"A **decorator** is a function that takes a function and returns a new function. The `@decorator` syntax is pure sugar: `@d\\ndef f(): ...` is exactly `f = d(f)`."},{type:"code",code:`import time
from functools import wraps

def timed(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        t0 = time.perf_counter()
        result = fn(*args, **kwargs)
        print(f"{fn.__name__} took {time.perf_counter() - t0:.4f}s")
        return result
    return wrapper

@timed
def compute(n):
    return sum(i * i for i in range(n))

compute(1_000_000)`,language:"python"},{type:"heading",level:2,text:"Decorators with Arguments"},{type:"code",code:`from functools import wraps

def repeat(times):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = fn(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hi, {name}!")

greet("Alice")`,language:"python"},{type:"heading",level:2,text:"Lambda — Anonymous Functions"},{type:"code",code:`words = ["apple", "banana", "cherry"]
print(sorted(words, key=lambda w: w[-1]))   # by last letter

print(list(filter(lambda x: x % 2 == 0, range(10))))

from functools import reduce
print(reduce(lambda a, b: a + b, [1, 2, 3, 4]))   # 10`,language:"python"},{type:"callout",variant:"warning",title:"Don't Over-Use lambda",content:"`lambda` bodies are limited to a single expression — no statements. If your lambda needs a comment, use `def`. If it's >30 characters, use `def`."},{type:"heading",level:2,text:"map, filter, reduce"},{type:"code",code:`nums = [1, 2, 3, 4, 5]

list(map(lambda x: x * x, nums))       # [1, 4, 9, 16, 25]
list(filter(lambda x: x % 2, nums))    # [1, 3, 5]

from functools import reduce
reduce(lambda a, b: a + b, nums)       # 15

# Python-idiomatic equivalents
[x * x for x in nums]        # comprehension beats map + lambda
sum(nums)                    # beats reduce`,language:"python"},{type:"heading",level:2,text:"Memory Model of Closures and Decorators"},{type:"text",content:"Closures and decorators work because function objects can carry references to captured variables and wrapped callables. The runtime stores these links explicitly in closure cells."},{type:"code",code:`def make_counter():
    n = 0
    def tick():
        nonlocal n
        n += 1
        return n
    return tick

counter = make_counter()
print(counter())  # 1
print(counter())  # 2`,language:"python"},{type:"memoryDiagram",title:"Diagram: Closure Function Plus Captured Cell",description:"The inner function object keeps a reference to a cell that stores captured state.",bindings:[{scope:"global",name:"counter",objectId:"F_TICK"},{scope:"frame:tick",name:"n",objectId:"CELL_N"},{scope:"runtime",name:"freevars",objectId:"CELL_N"}],objects:[{id:"F_TICK",type:"function",value:"<function tick()>",mutable:!1,note:"Carries closure metadata linking to captured cells.",accent:"sky"},{id:"CELL_N",type:"cell",value:"n = 2",mutable:!0,note:"State survives after make_counter() returns.",accent:"mint"}],insights:["Closures persist state without global variables or classes.","nonlocal writes into the captured cell, not a new local binding.","Each factory call creates independent cells and independent state."]},{type:"memoryLab",title:"Interactive Trace: Closure State Through Calls",prompt:"Track how repeated function calls update a captured variable.",steps:[{title:"Factory Creates Cell",action:"Run counter factory",code:"counter = make_counter()",bindings:[{scope:"global",name:"counter",objectId:"F_TICK"}],objects:[{id:"F_TICK",type:"function",value:"<function tick()>",mutable:!1,refCount:1,accent:"sky"},{id:"CELL_N",type:"cell",value:"n = 0",mutable:!0,refCount:1,accent:"amber"}],explanation:"Factory returns a function that keeps access to a private state cell."},{title:"First Call",action:"Invoke counter once",code:"counter()  # 1",bindings:[{scope:"global",name:"counter",objectId:"F_TICK"},{scope:"frame:tick",name:"n",objectId:"CELL_N"}],objects:[{id:"CELL_N",type:"cell",value:"n = 1",mutable:!0,refCount:1,accent:"mint"}],explanation:"nonlocal increments the captured cell value from 0 to 1."},{title:"Second Call",action:"Invoke counter again",code:"counter()  # 2",bindings:[{scope:"global",name:"counter",objectId:"F_TICK"},{scope:"frame:tick",name:"n",objectId:"CELL_N"}],objects:[{id:"CELL_N",type:"cell",value:"n = 2",mutable:!0,refCount:1,accent:"mint"}],explanation:"State is preserved between calls because it is stored outside transient call frames."},{title:"Independent Closure",action:"Create another counter",code:"counter2 = make_counter(); counter2()  # 1",bindings:[{scope:"global",name:"counter",objectId:"F_TICK"},{scope:"global",name:"counter2",objectId:"F_TICK2"}],objects:[{id:"CELL_N",type:"cell",value:"n = 2",mutable:!0,refCount:1,accent:"amber"},{id:"CELL_N2",type:"cell",value:"n = 1",mutable:!0,refCount:1,accent:"sky"}],explanation:"Each closure has its own captured cell; state does not leak across instances."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"What's a closure, really?",answer:`An inner function plus the **variables** it captured from its enclosing scope. Python stores these in hidden "cell" objects attached to the function, keeping the outer scope's variables alive even after the outer function returns.`},{question:"What does `@decorator` actually do?",answer:"Pure syntactic sugar. `@d\\ndef f(): ...` is exactly `def f(): ...; f = d(f)`."},{question:"Why use `@functools.wraps`?",answer:"Without it, the wrapped function loses its `__name__`, `__doc__`, `__wrapped__` — docs and debuggers break. `@wraps(fn)` copies those attributes from the original onto the wrapper."},{question:"When should I use lambda vs def?",answer:"**lambda**: one short expression passed inline. **def**: anything with multiple steps, a name, or a docstring."},{question:"Is `map(f, xs)` faster than `[f(x) for x in xs]`?",answer:"Usually a tiny bit faster for built-in functions, roughly tied for lambdas. Comprehensions are almost always preferred for readability."}]}],Fe=[{type:"heading",level:1,text:"Iterators & Generators"},{type:"text",content:"Every `for` loop you've written in Python runs on a hidden contract called the **iterator protocol**. Understanding it unlocks one of Python's most powerful features — **generators** — which let you produce sequences of any length, even infinite, using almost no memory."},{type:"callout",variant:"python",title:"Why This Matters",content:`Generators are how modern Python reads gigabyte log files, streams database rows, and pipelines data transformations — without loading everything into RAM. Once you "get" them, you'll rewrite half your loops.`},{type:"heading",level:2,text:"Iterables vs Iterators"},{type:"list",items:["**Iterable** — anything you can loop over. Must implement `__iter__()` which returns an iterator. Examples: `list`, `tuple`, `str`, `dict`, `set`, `range`, files.","**Iterator** — a *one-shot*, stateful object that produces values on demand. Must implement `__next__()` which returns the next value or raises `StopIteration`."]},{type:"code",code:`nums = [10, 20, 30]   # iterable (a list)
it = iter(nums)       # calls nums.__iter__()  →  returns an iterator

print(next(it))   # 10
print(next(it))   # 20
print(next(it))   # 30
print(next(it))   # StopIteration — the iterator is exhausted`,language:"python"},{type:"callout",variant:"info",title:"What a for-loop Really Does",content:"`for x in nums:` is pure syntactic sugar. Under the hood Python calls `iter(nums)` once, then `next(it)` repeatedly, catching `StopIteration` to exit. That's it. Every iterable works this way."},{type:"code",code:`# This...
for x in [1, 2, 3]:
    print(x)

# ...is exactly equivalent to:
it = iter([1, 2, 3])
while True:
    try:
        x = next(it)
    except StopIteration:
        break
    print(x)`,language:"python"},{type:"heading",level:2,text:"Iterators are One-Shot"},{type:"code",code:`nums = [1, 2, 3]
it = iter(nums)

print(list(it))   # [1, 2, 3]
print(list(it))   # []   ← exhausted! Iterator is dead.

# The iterable itself can be iterated many times:
print(list(nums))   # [1, 2, 3]
print(list(nums))   # [1, 2, 3]  — still works`,language:"python"},{type:"callout",variant:"warning",title:"Don't Confuse the Two",content:"A list is iter**able** (you can ask for fresh iterators forever). A generator is an iter**ator** (one trip, then dead). Passing a generator to two `for` loops will break you — the second sees nothing."},{type:"heading",level:2,text:"Generator Functions (yield)"},{type:"text",content:"A function with **`yield`** instead of `return` is a **generator function**. Calling it doesn't run the body — it returns a **generator object** (an iterator). Each call to `next()` runs code until the next `yield`, hands back the value, and **pauses** — preserving all local state."},{type:"code",code:`def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

gen = count_up_to(3)
print(next(gen))   # 1  — runs until yield, pauses
print(next(gen))   # 2  — resumes, runs until next yield
print(next(gen))   # 3
print(next(gen))   # StopIteration

# Usually you just loop over it:
for n in count_up_to(5):
    print(n)`,language:"python"},{type:"callout",variant:"python",title:"The Pause-Resume Superpower",content:"When `yield` fires, the function **freezes** — its locals, its place in the code, even its open loops. `next()` thaws it. This is why generators cost almost nothing: there's no stack unwinding, no list materialization, just a paused function."},{type:"heading",level:2,text:"Infinite Sequences — Zero Memory Cost"},{type:"code",code:`def naturals():
    n = 1
    while True:
        yield n
        n += 1

# A list would run out of memory. A generator never does.
for n in naturals():
    if n > 5:
        break
    print(n)
# 1 2 3 4 5

# Fibonacci — same idea
def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

from itertools import islice
print(list(islice(fib(), 10)))
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,language:"python"},{type:"heading",level:2,text:"Why Generators Matter"},{type:"code",code:`import sys

# Eager: builds the whole list
squares_list = [x * x for x in range(1_000_000)]
print(sys.getsizeof(squares_list))   # ~8_000_000 bytes (~8 MB)

# Lazy: a tiny state machine
squares_gen = (x * x for x in range(1_000_000))
print(sys.getsizeof(squares_gen))    # ~200 bytes

# Both give the same sum — but one holds the universe in memory
print(sum(squares_gen))`,language:"python"},{type:"heading",level:2,text:"yield from — Delegating to Another Iterable"},{type:"code",code:`# Without yield from — awkward explicit loop
def chain_manual(*iterables):
    for it in iterables:
        for item in it:
            yield item

# With yield from — clean delegation
def chain(*iterables):
    for it in iterables:
        yield from it

print(list(chain([1, 2], (3, 4), "ab")))
# [1, 2, 3, 4, 'a', 'b']`,language:"python"},{type:"heading",level:2,text:"Generator Pipelines"},{type:"text",content:"Generators compose: the output of one feeds another. This builds **lazy pipelines** that process huge datasets stage by stage, passing one value at a time — like Unix pipes."},{type:"code",code:`def read_lines(path):
    with open(path) as f:
        for line in f:
            yield line.rstrip()

def non_empty(lines):
    for line in lines:
        if line:
            yield line

def parse_numbers(lines):
    for line in lines:
        yield int(line)

# Compose — no intermediate list is ever built
total = sum(parse_numbers(non_empty(read_lines("numbers.txt"))))
# Works on a 10-GB file using ~1 KB of memory.`,language:"python"},{type:"heading",level:2,text:"itertools — The Standard Library Toolkit"},{type:"code",code:`from itertools import count, cycle, islice, chain, takewhile, groupby, combinations, permutations

# Infinite counter
list(islice(count(10, 2), 5))      # [10, 12, 14, 16, 18]

# Infinite cycle
list(islice(cycle("AB"), 6))       # ['A', 'B', 'A', 'B', 'A', 'B']

# First n matching
list(takewhile(lambda x: x < 5, [1, 3, 5, 7]))   # [1, 3]

# Flatten
list(chain([1, 2], [3, 4]))        # [1, 2, 3, 4]

# Pairs and triples
list(combinations("ABC", 2))       # [('A','B'), ('A','C'), ('B','C')]
list(permutations("ABC", 2))       # [('A','B'), ('A','C'), ('B','A'), ...]

# Group consecutive runs
for key, grp in groupby("aaabbcdd"):
    print(key, list(grp))
# a ['a', 'a', 'a']
# b ['b', 'b']
# c ['c']
# d ['d', 'd']`,language:"python"},{type:"heading",level:2,text:"Building Your Own Iterator (the long way)"},{type:"text",content:"You almost never need this — generators are shorter and cleaner. But it's worth seeing the underlying protocol once."},{type:"code",code:`class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self           # iterator is its own iterable

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        self.current -= 1
        return self.current + 1

for n in Countdown(3):
    print(n)
# 3 2 1

# The same thing as a generator — 4 lines instead of 10
def countdown(start):
    while start > 0:
        yield start
        start -= 1`,language:"python"},{type:"heading",level:1,text:"Going Deeper - Iterator State Machine"},{type:"text",content:"An iterator is a small state machine. next() advances internal state, returns one value, and either pauses (for generators) or mutates cursor fields (for iterator classes)."},{type:"code",code:`def countdown(n):
    while n > 0:
        yield n
        n -= 1

g = countdown(3)
print(next(g))
print(next(g))`,language:"python"},{type:"memoryDiagram",title:"Diagram: Generator Object Holds Resume State",description:"The generator keeps instruction pointer and locals between next() calls.",bindings:[{scope:"global",name:"g",objectId:"GEN_C"},{scope:"generator:countdown",name:"n",objectId:"I2"},{scope:"runtime",name:"instruction_ptr",objectId:"IP_AFTER_YIELD"}],objects:[{id:"GEN_C",type:"generator",value:"<countdown state=paused>",mutable:!0,note:"Stores frame data for later resumption.",accent:"sky"},{id:"I2",type:"int",value:"2",mutable:!1,accent:"amber"},{id:"IP_AFTER_YIELD",type:"state marker",value:"resume at line after yield",mutable:!1,accent:"mint"}],insights:["Generators are iterators with suspended frame state.","Each next() runs until next yield or StopIteration.","Exhausted generators cannot be rewound; create a new one."]},{type:"memoryLab",title:"Interactive Trace: next() Through Generator Lifecycle",prompt:"Observe not started, paused, and exhausted generator states.",steps:[{title:"Create Generator Object",action:"Call generator function",code:"g = countdown(3)",bindings:[{scope:"global",name:"g",objectId:"GEN1"}],objects:[{id:"GEN1",type:"generator",value:"<state: created>",mutable:!0,refCount:1,accent:"sky"}],explanation:"Function body has not executed yet; only generator object is created."},{title:"First next",action:"Advance to first yield",code:"next(g)  # 3",bindings:[{scope:"global",name:"g",objectId:"GEN1"},{scope:"generator:countdown",name:"n",objectId:"I3"}],objects:[{id:"GEN1",type:"generator",value:"<state: paused after yield>",mutable:!0,refCount:1,accent:"mint"},{id:"I3",type:"int",value:"3",mutable:!1,refCount:0,accent:"amber"}],explanation:"Generator executes until yield and pauses with resumable context."},{title:"Second next",action:"Resume and yield next value",code:"next(g)  # 2",bindings:[{scope:"global",name:"g",objectId:"GEN1"},{scope:"generator:countdown",name:"n",objectId:"I2"}],objects:[{id:"GEN1",type:"generator",value:"<state: paused after second yield>",mutable:!0,refCount:1,accent:"mint"},{id:"I2",type:"int",value:"2",mutable:!1,refCount:0,accent:"amber"}],explanation:"Local n persisted and was updated before yielding again."},{title:"Exhaustion",action:"Consume remaining values",code:`next(g)  # 1
next(g)  # StopIteration`,bindings:[{scope:"global",name:"g",objectId:"GEN1"}],objects:[{id:"GEN1",type:"generator",value:"<state: exhausted>",mutable:!0,refCount:1,accent:"coral"}],explanation:"After completion, further next calls raise StopIteration immediately."}]},{type:"heading",level:2,text:"Your Turn"},{type:"playground",instructions:"Write a generator `every_other(seq)` that yields every other element of `seq` (indices 0, 2, 4, …). Test that the sum of `every_other(range(1, 11))` is `25` (1+3+5+7+9).",defaultCode:`def every_other(seq):
    # use yield
    pass

print(list(every_other(range(1, 11))))   # [1, 3, 5, 7, 9]
print(sum(every_other(range(1, 11))))    # 25`},{type:"heading",level:2,text:"Q&A"},{type:"qna",items:[{question:"What's the practical difference between an *iterable* and an *iterator*?",answer:"An **iterable** (list, str, dict) can be looped over repeatedly — each `for` call creates a **fresh iterator**. An **iterator** (generator, `iter(x)` result) is a one-shot cursor — once exhausted, it's empty. Lists are iterable, not iterators. `iter(list)` gives you the iterator."},{question:"What does `yield` actually do?",answer:'`yield` **pauses** the function, returns the value to the caller, and **preserves** all local state. On the next `next()` call, execution resumes on the line *after* `yield` as if nothing happened. It\'s a "pausable" return.'},{question:"When does a generator raise `StopIteration`?",answer:"When the function body returns — either by reaching the end, hitting an explicit `return`, or raising. The `for` loop catches `StopIteration` silently, which is why you never see it in normal code."},{question:"Why can't I iterate the same generator twice?",answer:"Because generators are **iterators**, not iterables-that-reset. State (the paused position) is stored *inside* the generator object. Once consumed, there's nothing left. For re-use, keep the **generator function** and call it again to produce a fresh generator."},{question:"Are generators really more efficient than lists?",answer:"For **memory**: dramatically — O(1) vs O(n). For **CPU**: roughly similar per item, sometimes a hair slower due to overhead. But if you never need the full collection at once, the memory win is overwhelming."},{question:"What's the difference between `yield` and `yield from`?",answer:"`yield x` produces one value. `yield from iterable` produces **all** values from another iterable (and in coroutines, also forwards `send()` and exceptions). It's how you compose generators without nested `for` loops."},{question:"Is `range(10)` a generator?",answer:"No — it's an **iterable** of its own special type. It supports indexing (`range(10)[3]`), length, and **reiteration**. Generators can do none of those. `range` is more powerful than a generator; it just happens to also be lazy."}]}],Ne=[{type:"heading",level:1,text:"File Handling in Python"},{type:"text",content:"Files are how programs persist data beyond a single run. Python makes file I/O remarkably simple. You'll learn to read from and write to text files, handle CSV data, work with file paths, and always use the **context manager** pattern (`with` statement) to handle resources safely. Note: In this browser-based environment, file operations are simulated — but the concepts apply directly to real Python."},{type:"heading",level:2,text:"Opening Files — The with Statement"},{type:"code",code:`# The CORRECT way — with statement (context manager)
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
    print(f"  {line.strip()}")`,instructions:"Practice file operations using StringIO. Try building a CSV processor or log file system."},{type:"heading",level:1,text:"Going Deeper — File Handling in Depth"},{type:"heading",level:2,text:"File Modes — Reference"},{type:"code",code:`Mode   Meaning                                    Creates?   Truncates?
──────────────────────────────────────────────────────────────────────
"r"    read (default), file must exist            no         no
"w"    write — overwrites existing file           yes        YES
"a"    append — adds to end of file               yes        no
"x"    exclusive create — fails if file exists    yes        no
"r+"   read + write (from start)                  no         no
"w+"   write + read (truncates first)             yes        YES
"a+"   append + read (writes at end)              yes        no

# Add "b" for binary, "t" for text (default):
"rb"   read binary
"wt"   write text (explicit)`,language:"text"},{type:"callout",variant:"warning",title:'"w" Destroys Data Silently',content:'Opening an existing file in `"w"` mode **truncates it to zero** before the first write. Use `"x"` to refuse overwrite, or `"a"` to append.'},{type:"heading",level:2,text:"Always Use `with` — Context Managers"},{type:"text",content:"The `with` statement guarantees the file is **closed** — even if an exception is raised inside the block. It's the single biggest file-handling upgrade you can adopt."},{type:"code",code:`# Bad — what if read() raises? The file handle leaks
f = open("data.txt")
content = f.read()
f.close()

# Good — close() is guaranteed
with open("data.txt") as f:
    content = f.read()
# f is closed here, even on exception

# Write
with open("out.txt", "w") as f:
    f.write("hello\\n")
    f.write("world\\n")

# Line-by-line (memory-efficient for huge files)
with open("big.log") as f:
    for line in f:         # iterates lazily
        process(line.rstrip())`,language:"python"},{type:"heading",level:2,text:"Reading Strategies"},{type:"code",code:`# All at once — simple, fine for small files
content = f.read()

# Line by line — O(1) memory, works on huge files
for line in f:
    ...

# All lines as a list
lines = f.readlines()

# Single line (rare — prefer iteration)
first = f.readline()`,language:"python"},{type:"heading",level:2,text:"CSV — The Standard Library Way"},{type:"code",code:`import csv

# Write — note newline="" argument
with open("grades.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "course", "score"])
    writer.writerow(["Alice", "Math", 92])
    writer.writerow(["Bob",   "CS",   88])

# Read as rows of strings
with open("grades.csv", newline="") as f:
    reader = csv.reader(f)
    header = next(reader)
    for row in reader:
        name, course, score = row
        print(f"{name}: {course} = {int(score)}")

# Read as dicts — cleaner, robust to column order
with open("grades.csv", newline="") as f:
    for row in csv.DictReader(f):
        print(row["name"], int(row["score"]))`,language:"python"},{type:"heading",level:2,text:"Encoding — Always Specify"},{type:"code",code:`# Default encoding varies by OS — be explicit
with open("data.txt", encoding="utf-8") as f:
    content = f.read()

# When writing non-ASCII
with open("greetings.txt", "w", encoding="utf-8") as f:
    f.write("café, こんにちは, 🌍")`,language:"python"},{type:"heading",level:2,text:"File Object Lifecycle in Memory"},{type:"text",content:"open() allocates a file object with OS handle and buffering state. with-statement context managers guarantee deterministic close(), even if an exception occurs in the block."},{type:"code",code:`with open("data.txt", "r", encoding="utf-8") as f:
    first = f.readline()

print(first)`,language:"python"},{type:"memoryDiagram",title:"Diagram: with open Creates and Closes File Resources",description:"The file object wraps an OS-level descriptor and an internal text buffer.",bindings:[{scope:"with-block",name:"f",objectId:"FILE1"},{scope:"with-block",name:"first",objectId:"S_LINE"},{scope:"runtime",name:"fd",objectId:"FD42"}],objects:[{id:"FILE1",type:"TextIOWrapper",value:"<open file data.txt mode=r>",mutable:!0,note:"Owns decoder, buffer, and close behavior.",accent:"sky"},{id:"FD42",type:"file descriptor",value:"open handle",mutable:!0,accent:"amber"},{id:"S_LINE",type:"str",value:'"first line\\n"',mutable:!1,accent:"mint"}],insights:["The with statement always calls __exit__, which closes file resources.","Read methods allocate Python strings from decoded bytes.","Leaking file handles is avoided by deterministic context manager cleanup."]},{type:"memoryLab",title:"Interactive Trace: Open, Read, and Close",prompt:"Track state transitions of a file object across a with block.",steps:[{title:"Enter Context",action:"Run with open",code:'with open("log.txt", "r") as f:',bindings:[{scope:"with-block",name:"f",objectId:"FILE_OPEN"}],objects:[{id:"FILE_OPEN",type:"TextIOWrapper",value:"<state=open, cursor=0>",mutable:!0,refCount:1,accent:"sky"}],explanation:"Context manager enters and binds open file object to f."},{title:"Read Data",action:"Read one line",code:"line = f.readline()",bindings:[{scope:"with-block",name:"f",objectId:"FILE_OPEN"},{scope:"with-block",name:"line",objectId:"S_LOG1"}],objects:[{id:"FILE_OPEN",type:"TextIOWrapper",value:"<state=open, cursor=after_line1>",mutable:!0,refCount:1,accent:"mint"},{id:"S_LOG1",type:"str",value:'"[INFO] started\\n"',mutable:!1,refCount:1,accent:"amber"}],explanation:"File cursor advances and one decoded Python string is produced."},{title:"Leave Context",action:"Exit with block",code:"# automatic __exit__ -> close()",bindings:[{scope:"global",name:"line",objectId:"S_LOG1"}],objects:[{id:"FILE_OPEN",type:"TextIOWrapper",value:"<state=closed>",mutable:!0,refCount:0,accent:"coral"},{id:"S_LOG1",type:"str",value:'"[INFO] started\\n"',mutable:!1,refCount:1,accent:"amber"}],explanation:"File resource is closed deterministically while read data stays available."},{title:"Post-Close Guard",action:"Attempt further read",code:"f.readline()  # ValueError: I/O operation on closed file",bindings:[{scope:"runtime",name:"active_exception",objectId:"E_CLOSED"}],objects:[{id:"E_CLOSED",type:"ValueError",value:"I/O operation on closed file",mutable:!1,refCount:1,accent:"coral"}],explanation:"Closed file state prevents accidental reuse and catches resource misuse early."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why is `with open(...)` preferred over `open()` + `close()`?",answer:"Because an exception between open and close leaks the file handle. `with` uses a **context manager** that calls `close()` in a `finally` block — guaranteed even on exceptions."},{question:'What happens if I open a file in "w" mode when it exists?',answer:'It\'s **truncated to zero bytes** before the first write — the old content is gone. Use `"a"` to append, or `"x"` to refuse if the file exists.'},{question:"What's the difference between `read()` and iterating over the file?",answer:"`read()` loads the **entire file** into memory. Iterating (`for line in f`) streams one line at a time — O(1) memory. For files larger than RAM, always iterate."},{question:'Why does `csv.reader` need `newline=""`?',answer:'CSV fields can contain embedded newlines (inside quoted strings). Passing `newline=""` tells Python not to translate line endings, so the csv module can parse them correctly across platforms.'},{question:"Is `csv.DictReader` slower than `csv.reader`?",answer:"Marginally — it builds a dict per row. Unless you're processing millions of rows, use `DictReader`: robustness to column order and readability are worth it."}]}],Oe=[{type:"heading",level:1,text:"Object-Oriented Programming"},{type:"text",content:"Object-Oriented Programming (OOP) lets you model real-world concepts by bundling **data** (attributes) and **behavior** (methods) into **objects**. You've already used OOP — strings, lists, and dictionaries are all objects with methods. Now you'll learn to create your own classes, the blueprints for making objects. OOP is a cornerstone of Python — understanding it unlocks libraries, frameworks, and clean software design."},{type:"heading",level:2,text:"Classes and Objects"},{type:"code",code:`# A class is a BLUEPRINT; an object is an INSTANCE
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
        print(f"    {g['subject']}: {g['score']}")`,instructions:"Try modifying the Student class or create your own class from scratch!"},{type:"heading",level:1,text:"Going Deeper — How Classes Really Work"},{type:"heading",level:2,text:"A Class Is Itself an Object"},{type:"text",content:"In Python, classes are **first-class objects** — they're values you can assign, pass, and introspect. The type of a class is `type`. The type of an instance is its class."},{type:"code",code:`class Dog:
    pass

d = Dog()
print(type(d))      # <class '__main__.Dog'>
print(type(Dog))    # <class 'type'>

# Classes are objects — you can pass them around
animals = [Dog, Dog, Dog]
pack = [A() for A in animals]`,language:"python"},{type:"heading",level:2,text:"Attribute Lookup — The Chain"},{type:"text",content:"When you access `obj.x`, Python walks a well-defined chain: **instance dict** → **class dict** → **parent classes** (via MRO) → `AttributeError`. Understanding this demystifies inheritance."},{type:"code",code:`class Animal:
    kingdom = "Animalia"     # class attribute — shared by all instances

    def __init__(self, name):
        self.name = name     # instance attribute — per-object

a = Animal("Rex")
print(a.name)         # instance dict
print(a.kingdom)      # not in instance, fallback to class dict

print(a.__dict__)           # {'name': 'Rex'}
print(Animal.__dict__)      # includes kingdom, __init__, ...`,language:"python"},{type:"heading",level:2,text:"Inheritance & MRO (Method Resolution Order)"},{type:"text",content:"When a class has multiple parents, Python uses the **C3 linearization algorithm** to produce a consistent MRO. `super()` walks this order. View it with `ClassName.__mro__` or `.mro()`."},{type:"code",code:`class A:
    def greet(self): return "A"

class B(A):
    def greet(self): return "B→" + super().greet()

class C(A):
    def greet(self): return "C→" + super().greet()

class D(B, C):
    def greet(self): return "D→" + super().greet()

print(D().greet())   # D→B→C→A
print([c.__name__ for c in D.__mro__])
# ['D', 'B', 'C', 'A', 'object']`,language:"python"},{type:"callout",variant:"python",title:'super() Is NOT "Call the Parent"',content:"It's \"call the **next** class in the MRO.\" In single inheritance those match, but in diamond inheritance (like D above), `super()` in B calls C — not A. That's the whole point of MRO: cooperative multiple inheritance without duplicate calls."},{type:"heading",level:2,text:"Dunder Methods — How Classes Plug Into the Language"},{type:"text",content:"Every Python operator and built-in function maps to a **dunder** (double-underscore) method. Defining them turns your class into a first-class Python citizen."},{type:"code",code:`Operator/Call       Dunder              What it means
─────────────────────────────────────────────────────────
a + b               __add__             a.__add__(b)
a == b              __eq__              equality
a < b               __lt__              ordering
len(a)              __len__             length
a[i]                __getitem__         subscript
a(x)                __call__            make it callable
str(a)              __str__             human-readable
repr(a)             __repr__            debug/eval-able
hash(a)             __hash__            use as dict/set key
with a:             __enter__/__exit__  context manager
for x in a:         __iter__            iterable`,language:"text"},{type:"heading",level:2,text:"A Full Example — Vector (IITM-style)"},{type:"code",code:`import math

class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, k):          # scalar multiplication
        return Vector(self.x * k, self.y * k)

    def __eq__(self, other):
        return (self.x, self.y) == (other.x, other.y)

    def __hash__(self):
        return hash((self.x, self.y))

    def __abs__(self):              # magnitude via abs(v)
        return math.sqrt(self.x**2 + self.y**2)

    def __bool__(self):             # truthiness: non-zero vector is True
        return self.x != 0 or self.y != 0

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)     # Vector(4, 6)
print(v1 * 2)      # Vector(6, 8)
print(abs(v1))     # 5.0
print(bool(Vector(0, 0)))   # False`,language:"python"},{type:"heading",level:2,text:"Properties — Managed Attributes"},{type:"code",code:`class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero")
        self._celsius = value

    @property
    def fahrenheit(self):           # computed on read
        return self._celsius * 9/5 + 32

t = Temperature(20)
print(t.celsius)       # 20   — attribute-like
print(t.fahrenheit)    # 68.0 — computed every access
t.celsius = 25         # goes through the setter (validates)
t.celsius = -300       # ValueError`,language:"python"},{type:"heading",level:2,text:"__slots__ — Memory Optimization"},{type:"text",content:"By default, every instance has a `__dict__` to store attributes — flexible but costly. Declaring `__slots__` replaces it with a fixed array — faster access, far less memory. Useful when you'll have many instances."},{type:"code",code:`import sys

class PointDict:
    def __init__(self, x, y):
        self.x, self.y = x, y

class PointSlots:
    __slots__ = ("x", "y")
    def __init__(self, x, y):
        self.x, self.y = x, y

print(sys.getsizeof(PointDict(1, 2)) + sys.getsizeof(PointDict(1, 2).__dict__))
# ~112 + 104 = ~216 bytes

print(sys.getsizeof(PointSlots(1, 2)))
# ~56 bytes — 4× smaller

# Trade-off: can't add arbitrary new attributes
p = PointSlots(1, 2)
p.z = 3   # AttributeError: 'PointSlots' object has no attribute 'z'`,language:"python"},{type:"heading",level:2,text:"Classmethod vs Staticmethod"},{type:"code",code:`class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings

    @classmethod
    def margherita(cls):            # alternative constructor
        return cls(["cheese", "tomato"])

    @classmethod
    def hawaiian(cls):
        return cls(["ham", "pineapple"])

    @staticmethod
    def is_valid_topping(t):        # utility, no self/cls
        return t in {"cheese", "tomato", "ham", "pineapple", "basil"}

p = Pizza.margherita()
print(p.toppings)                   # ['cheese', 'tomato']
print(Pizza.is_valid_topping("anchovy"))   # False`,language:"python"},{type:"heading",level:2,text:"isinstance and issubclass"},{type:"code",code:`class Animal: pass
class Dog(Animal): pass

d = Dog()
print(isinstance(d, Dog))       # True
print(isinstance(d, Animal))    # True — inheritance is respected
print(issubclass(Dog, Animal))  # True

# Accept multiple types with a tuple
print(isinstance(d, (int, Animal)))   # True`,language:"python"},{type:"heading",level:2,text:"Runtime Object Layout and Lookup Path"},{type:"text",content:"An instance stores per-object attributes in its own dictionary (or slots). Methods and shared attributes live on the class object. Attribute access walks instance -> class -> MRO parents."},{type:"code",code:`class Animal:
    kingdom = "Animalia"

    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"

a = Animal("Rex")
print(a.name)
print(a.kingdom)
print(a.speak())`,language:"python"},{type:"memoryDiagram",title:"Diagram: Instance Dict, Class Dict, and MRO",description:"One object read can traverse multiple namespaces before resolution.",bindings:[{scope:"global",name:"a",objectId:"OBJ_A"},{scope:"instance:OBJ_A",name:"name",objectId:"S_REX"},{scope:"class:Animal",name:"kingdom",objectId:"S_KING"},{scope:"class:Animal",name:"speak",objectId:"F_SPEAK"},{scope:"runtime",name:"mro",objectId:"MRO_AN"}],objects:[{id:"OBJ_A",type:"Animal instance",value:'Animal(name="Rex")',mutable:!0,accent:"sky"},{id:"S_REX",type:"str",value:'"Rex"',mutable:!1,accent:"mint"},{id:"S_KING",type:"str",value:'"Animalia"',mutable:!1,accent:"amber"},{id:"F_SPEAK",type:"function",value:"<function Animal.speak>",mutable:!1,accent:"neutral"},{id:"MRO_AN",type:"tuple",value:"(Animal, object)",mutable:!1,accent:"neutral"}],insights:["Instance attributes shadow class attributes with the same name.","Method binding happens at access time: function plus instance becomes bound method.","MRO order controls inheritance resolution and super() behavior."]},{type:"memoryLab",title:"Interactive Trace: Attribute Read and Override",prompt:"Watch lookup before and after setting an instance attribute that shadows a class attribute.",steps:[{title:"Create Instance",action:"Instantiate Dog with inherited class attr",code:`class Dog:
    species = "Canis"
    def __init__(self, name):
        self.name = name

d = Dog("Buddy")`,bindings:[{scope:"global",name:"d",objectId:"OBJ_D"},{scope:"class:Dog",name:"species",objectId:"S_CANIS"}],objects:[{id:"OBJ_D",type:"Dog instance",value:'Dog(name="Buddy")',mutable:!0,refCount:1,accent:"sky"},{id:"S_CANIS",type:"str",value:'"Canis"',mutable:!1,refCount:1,accent:"amber"}],explanation:"species exists only on class at this point."},{title:"Read Class Attribute via Instance",action:"Access d.species",code:'d.species  # "Canis"',bindings:[{scope:"global",name:"d",objectId:"OBJ_D"},{scope:"runtime",name:"resolved_from",objectId:"CLASS_DOG"}],objects:[{id:"CLASS_DOG",type:"lookup source",value:"class dict",mutable:!1,refCount:1,accent:"mint"}],explanation:"Lookup misses instance dict and resolves from class dict."},{title:"Shadow with Instance Attribute",action:"Assign d.species directly",code:'d.species = "Canis lupus familiaris"',bindings:[{scope:"instance:OBJ_D",name:"species",objectId:"S_FULL"},{scope:"class:Dog",name:"species",objectId:"S_CANIS"}],objects:[{id:"S_FULL",type:"str",value:'"Canis lupus familiaris"',mutable:!1,refCount:1,accent:"sky"},{id:"S_CANIS",type:"str",value:'"Canis"',mutable:!1,refCount:1,accent:"amber"}],explanation:"Assignment creates instance key, shadowing but not modifying class attribute."},{title:"Compare Instance vs Class Reads",action:"Read d.species and Dog.species",code:`print(d.species)
print(Dog.species)`,bindings:[{scope:"global",name:"d.species",objectId:"S_FULL"},{scope:"global",name:"Dog.species",objectId:"S_CANIS"}],objects:[{id:"S_FULL",type:"str",value:'"Canis lupus familiaris"',mutable:!1,refCount:1,accent:"sky"},{id:"S_CANIS",type:"str",value:'"Canis"',mutable:!1,refCount:1,accent:"amber"}],explanation:"Instance and class can now expose different values under the same attribute name."}]},{type:"heading",level:2,text:"Deep Q&A"},{type:"qna",items:[{question:"Why does Python require `self` on every method?",answer:'Because methods are just **functions** stored on a class. When you call `obj.method()`, Python rewrites it as `ClassOf(obj).method(obj)` — `obj` must be passed explicitly as the first argument. "Explicit is better than implicit" — the Zen of Python.'},{question:"What is MRO and why should I care?",answer:"MRO (Method Resolution Order) is the **linearized list** of classes Python searches for attributes. In single inheritance it's trivial; in multiple inheritance it uses C3 linearization to ensure every parent is visited exactly once. `super()` advances one step in the MRO."},{question:"What's the difference between `__str__` and `__repr__`?",answer:"`__str__` is for humans (`print(x)`, `str(x)`). `__repr__` is for developers — ideally eval-able (`eval(repr(x)) == x`). If only one is defined, `__repr__` fills in for `__str__`. Always define `__repr__`."},{question:"When should I use `__slots__`?",answer:"When you'll create **many instances** and each has a fixed, known set of attributes. Saves ~40-70% memory and speeds attribute access. Skip it when you need dynamic attributes or multiple inheritance."},{question:"classmethod vs staticmethod — which do I need?",answer:"**classmethod** receives the class as `cls` — use for alternative constructors or when you need to produce subclass instances. **staticmethod** receives nothing special — use for utility functions that logically belong to the class but don't need self/cls."},{question:"Why does `@property` exist — can't I just access the attribute?",answer:"Properties let you **start** with a plain attribute and later add validation, logging, or computation **without breaking the API**. Callers still write `t.celsius = 20` — but now your setter validates. This is why Python rarely needs Java-style getters/setters."},{question:"If I override `__eq__`, why do I also need `__hash__`?",answer:'Defining `__eq__` makes `__hash__` implicitly `None` — the class becomes unhashable. Two "equal" objects must have equal hashes; Python can\'t figure that out automatically, so it refuses to guess. Define `__hash__` manually based on the same fields as `__eq__`.'}]}],Be={"day1-welcome":me,"day1-variables":he,"day1-datatypes":ye,"day1-operators":ge,"day1-strings":fe,"day1-io":be,"day1-errors":xe,"day2-boolean":ve,"day2-conditionals":we,"day2-while":_e,"day2-for":ke,"day2-patterns":Te,"day2-lists":Ie,"day2-tuples":Ce,"day3-dicts":je,"day3-sets":Ae,"day3-comprehensions":Se,"day3-functions":Ee,"day3-advanced-fn":Pe,"day3-iterators":Fe,"day3-files":Ne,"day3-oop":Oe};function Le(h){return Be[h]}const Re={class:"relative group rounded-xl overflow-hidden border border-border bg-card shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},De={class:"flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70"},qe={class:"flex items-center gap-3"},Me={key:0,class:"text-sm font-mono text-text-secondary ml-2 tracking-wide"},We={key:1,class:"text-[11px] font-mono font-semibold text-mint ml-2 uppercase tracking-[0.2em]"},ze={class:"p-5 overflow-x-auto text-[15px] md:text-base leading-[1.7] font-mono text-text-primary"},Ue=["innerHTML"],$e=F({__name:"CodeBlock",props:{code:{},language:{},filename:{}},setup(h){const s=h,m=E(!1),g=new Set(["def","class","if","elif","else","for","while","return","import","from","as","try","except","finally","with","raise","pass","break","continue","and","or","not","in","is","lambda","yield","global","nonlocal","assert","del","True","False","None","match","case","async","await"]),f=new Set(["print","input","len","range","type","int","float","str","bool","list","dict","set","tuple","enumerate","zip","map","filter","sorted","reversed","abs","max","min","sum","round","open","super","isinstance","hasattr","getattr","setattr","any","all","id","hex","oct","bin","ord","chr","repr","hash","callable","dir","vars","help","iter","next","property","staticmethod","classmethod","frozenset","bytes","bytearray","complex","divmod","pow","format","object","slice","ValueError","TypeError","KeyError","IndexError","AttributeError","NameError","FileNotFoundError","PermissionError","IsADirectoryError","ZeroDivisionError","StopIteration","RuntimeError","Exception","NotImplementedError","IOError","OSError"]),n=new Set(["self","cls"]);function u(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(t,d){return`<span class="${t}">${u(d)}</span>`}function y(t,d){if(d){const l=d.repeat(3),b=t.indexOf(l);if(b!==-1){const x=r("hl-str",t.slice(0,b+3)),S=y(t.slice(b+3),null);return{html:x+S.html,mlQuote:S.mlQuote}}return{html:r("hl-str",t),mlQuote:d}}const i=[];let p=0,C="";for(;p<t.length;){if(t[p]===" "||t[p]==="	"){let l=p;for(;l<t.length&&(t[l]===" "||t[l]==="	");)l++;i.push(t.slice(p,l)),p=l;continue}if(t[p]==="#"){i.push(r("hl-cm",t.slice(p))),p=t.length;continue}if(t[p]==="@"){let l=p+1;for(;l<t.length&&/[a-zA-Z0-9_.]/.test(t[l]);)l++;i.push(r("hl-dec",t.slice(p,l))),C="",p=l;continue}if(t[p]==='"'||t[p]==="'"){const l=t[p];if(t.startsWith(l.repeat(3),p)){const x=p+3,S=t.indexOf(l.repeat(3),x);if(S!==-1)i.push(r("hl-str",t.slice(p,S+3))),p=S+3;else return i.push(r("hl-str",t.slice(p))),{html:i.join(""),mlQuote:l}}else{let x=p+1;for(;x<t.length;){if(t[x]==="\\"){x+=2;continue}if(t[x]===l){x++;break}x++}i.push(r("hl-str",t.slice(p,x))),p=x}C="";continue}if(/[a-zA-Z_]/.test(t[p])){let l=p;for(;l<t.length&&/[a-zA-Z0-9_]/.test(t[l]);)l++;const b=t.slice(p,l);g.has(b)?i.push(r("hl-kw",b)):f.has(b)&&l<t.length&&t[l]==="("?i.push(r("hl-bi",b)):n.has(b)?i.push(r("hl-sp",b)):C==="def"?i.push(r("hl-fn",b)):C==="class"?i.push(r("hl-cls",b)):i.push(u(b)),C=b,p=l;continue}if(/\d/.test(t[p])){let l=p;if(t[p]==="0"&&l+1<t.length&&/[xXoObB]/.test(t[l+1]))for(l+=2;l<t.length&&/[0-9a-fA-F_]/.test(t[l]);)l++;else{for(;l<t.length&&/[\d_]/.test(t[l]);)l++;if(l<t.length&&t[l]===".")for(l++;l<t.length&&/[\d_]/.test(t[l]);)l++;if(l<t.length&&/[eE]/.test(t[l]))for(l++,l<t.length&&/[+-]/.test(t[l])&&l++;l<t.length&&/[\d_]/.test(t[l]);)l++}i.push(r("hl-num",t.slice(p,l))),C="",p=l;continue}i.push(u(t[p])),C="",p++}return{html:i.join(""),mlQuote:null}}const w=_(()=>{const t=s.code.split(`
`);let d=null;const i=[];for(const p of t){const C=y(p,d);i.push(C.html),d=C.mlQuote}return i.join(`
`)});async function v(){try{await navigator.clipboard.writeText(s.code),m.value=!0,setTimeout(()=>{m.value=!1},2e3)}catch{}}return(t,d)=>(a(),o("div",Re,[e("div",De,[e("div",qe,[d[0]||(d[0]=e("div",{class:"flex gap-1.5"},[e("span",{class:"w-3 h-3 rounded-full bg-coral/70"}),e("span",{class:"w-3 h-3 rounded-full bg-amber/70"}),e("span",{class:"w-3 h-3 rounded-full bg-mint/70"})],-1)),h.filename?(a(),o("span",Me,c(h.filename),1)):(a(),o("span",We,"python"))]),e("button",{class:"text-xs font-semibold tracking-wider text-text-muted hover:text-mint transition-colors px-2.5 py-1 rounded border border-transparent hover:border-mint/30 hover:bg-mint/10",onClick:v},c(m.value?"✓ COPIED":"COPY"),1)]),e("pre",ze,[e("code",{innerHTML:w.value},null,8,Ue)])]))}}),He=$($e,[["__scopeId","data-v-7098e5f3"]]),Ge={key:0,class:"flex items-center gap-3 mb-3"},Ve={class:"font-display text-lg font-bold text-text-primary tracking-tight"},Ye=["innerHTML"],Ke=F({__name:"Callout",props:{variant:{},title:{},content:{}},setup(h){const s={info:"bg-sky/5",warning:"bg-amber/5",tip:"bg-mint/5",danger:"bg-coral/5",python:"bg-lavender/5"},m={info:"border-l-sky",warning:"border-l-amber",tip:"border-l-mint",danger:"border-l-coral",python:"border-l-lavender"},g={info:"bg-sky",warning:"bg-amber",tip:"bg-mint",danger:"bg-coral",python:"bg-lavender"},f={info:"bg-sky/15 text-sky",warning:"bg-amber/15 text-amber",tip:"bg-mint/15 text-mint",danger:"bg-coral/15 text-coral",python:"bg-lavender/15 text-lavender"},n={info:"ℹ️",warning:"⚠️",tip:"💡",danger:"🚫",python:"🐍"};return(u,r)=>(a(),o("aside",{class:A(["relative my-8 rounded-xl border-l-4 border-y border-r border-border/70 bg-card/80 px-5 py-5 shadow-[0_8px_24px_-16px_rgba(234,88,12,0.25)] overflow-hidden",s[h.variant],m[h.variant]])},[e("span",{class:A(["absolute -left-px top-0 bottom-0 w-1",g[h.variant]]),"aria-hidden":"true"},null,2),h.title?(a(),o("header",Ge,[e("span",{class:A(["flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg shadow-sm ring-1 ring-black/5",f[h.variant]])},c(n[h.variant]),3),e("span",Ve,c(h.title),1)])):T("",!0),e("div",{class:"text-lg leading-[1.7] text-text-primary/90 [&>p]:mt-2 [&>p:first-child]:mt-0",innerHTML:h.content},null,8,Ye)],2))}}),Qe={class:"rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},Xe={key:0,class:"px-5 py-4 border-b border-border bg-mint/5 text-base leading-relaxed flex gap-3 text-text-primary/90"},Je={class:"font-medium"},Ze={class:"border-b border-border"},et={class:"flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70"},tt={class:"flex items-center gap-3"},nt=["disabled"],at={key:0,class:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24"},it={key:1,class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},rt={key:0,class:"text-xs text-text-muted tracking-wider uppercase flex items-center gap-2 font-semibold"},ot={class:"bg-card"},st={key:0,class:"px-5 py-3 border-t border-border bg-surface/30"},lt={key:0,class:"flex items-center gap-2 text-base font-semibold text-mint"},ct={key:1,class:"text-base text-text-secondary flex items-start gap-2"},dt={class:"font-mono text-text-primary bg-surface border border-border px-2 py-0.5 rounded text-[13px]"},pt=F({__name:"CodePlayground",props:{defaultCode:{},instructions:{},expectedOutput:{}},setup(h){const s=h,m=ne(),g=E();let f=null;const n=E(""),u=E(!1),r=_(()=>!s.expectedOutput||!n.value?!1:n.value.trim()===s.expectedOutput.trim());H(()=>{if(g.value){const v=ae.create({doc:s.defaultCode,extensions:[re(),oe(),ie,se.of([...le,ce]),de(),pe(),ue(),W.theme({"&":{backgroundColor:"transparent"},".cm-gutters":{backgroundColor:"transparent",borderRight:"1px solid hsl(var(--border))"}})]});f=new W({state:v,parent:g.value})}});async function y(){if(!f)return;const v=f.state.doc.toString();u.value=!1,n.value="";const t=await m.runCode(v);t.error?(u.value=!0,n.value=t.error):n.value=t.output}function w(){f&&(f.dispatch({changes:{from:0,to:f.state.doc.length,insert:s.defaultCode}}),n.value="",u.value=!1)}return(v,t)=>(a(),o("div",Qe,[e("div",{class:"flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70"},[t[0]||(t[0]=G('<div class="flex items-center gap-3"><span class="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></span><span class="text-base font-bold font-display text-text-primary tracking-tight">Interactive Playground</span></div>',1)),e("button",{class:"text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-mint transition-colors px-3 py-1.5 rounded-md border border-transparent hover:border-mint/30 hover:bg-mint/10",onClick:w}," Reset ")]),h.instructions?(a(),o("div",Xe,[t[1]||(t[1]=e("span",{class:"shrink-0 text-lg mt-0.5"},"ℹ️",-1)),e("span",Je,c(h.instructions),1)])):T("",!0),e("div",Ze,[e("div",{ref_key:"editorContainer",ref:g,class:"min-h-[200px]"},null,512)]),e("div",et,[e("div",tt,[e("button",{class:"flex items-center gap-2 rounded-lg text-base font-bold bg-gradient-to-r from-mint to-amber text-white px-5 py-2.5 shadow-sm hover:shadow-md hover:-translate-y-px transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:R(m).isRunning,onClick:y},[R(m).isRunning?(a(),o("svg",at,[...t[2]||(t[2]=[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"},null,-1)])])):(a(),o("svg",it,[...t[3]||(t[3]=[e("path",{d:"M8 5v14l11-7z"},null,-1)])])),k(" "+c(R(m).isRunning?"Executing...":"Run Code"),1)],8,nt),R(m).isLoading?(a(),o("span",rt,[...t[4]||(t[4]=[k(" Loading ",-1),e("span",{class:"h-1.5 w-1.5 rounded-full bg-mint animate-pulse"},null,-1)])])):T("",!0)])]),e("div",ot,[t[8]||(t[8]=e("div",{class:"flex items-center justify-between px-5 py-2 border-b border-border bg-surface/50"},[e("span",{class:"text-xs font-mono text-mint font-semibold uppercase tracking-[0.2em]"},"Output")],-1)),e("pre",{class:A(["px-5 py-4 font-mono text-[15px] leading-[1.7] min-h-[80px] max-h-[320px] overflow-auto whitespace-pre-wrap",u.value?"text-coral":"text-text-primary"])},c(n.value||"# Output will appear here"),3),h.expectedOutput&&n.value&&!u.value?(a(),o("div",st,[r.value?(a(),o("div",lt,[...t[5]||(t[5]=[e("svg",{class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})],-1),k(" Output matches expected ",-1)])])):(a(),o("div",ct,[t[7]||(t[7]=e("svg",{class:"h-5 w-5 text-amber shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1)),e("div",null,[t[6]||(t[6]=k(" Expected: ",-1)),e("code",dt,c(h.expectedOutput),1)])]))])):T("",!0)])]))}}),ut={class:"space-y-3 my-8"},mt=["onClick"],ht={class:"flex items-start gap-3"},yt=["innerHTML"],gt={key:0,class:"px-5 pb-5 pt-1"},ft={class:"border-l-2 border-mint/50 pl-5"},bt=["innerHTML"],xt=["innerHTML"],vt=F({__name:"QAndA",props:{items:{}},setup(h){const s=E({}),m=f=>{s.value[f]=!s.value[f]},g=f=>f.replace(/\*\*(.+?)\*\*/g,'<strong class="text-text-primary font-bold">$1</strong>').replace(/\*(.+?)\*/g,'<em class="italic text-text-primary/80">$1</em>').replace(/`(.+?)`/g,'<code class="border border-mint/20 bg-mint/10 text-mint px-2 py-0.5 rounded-md font-mono text-[0.92em] font-medium">$1</code>').replace(/\n/g,"<br />");return(f,n)=>(a(),o("div",ut,[(a(!0),o(I,null,j(h.items,(u,r)=>(a(),o("div",{key:r,class:A(["rounded-xl border overflow-hidden transition-all duration-300",s.value[r]?"border-mint/50 bg-mint/5 shadow-[0_12px_30px_-18px_rgba(234,88,12,0.35)]":"border-border bg-card hover:border-mint/30"])},[e("button",{onClick:y=>m(r),class:"w-full text-left px-5 py-4 flex items-start justify-between hover:bg-mint/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint transition-colors gap-4"},[e("span",ht,[e("span",{class:A(["flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold mt-0.5 transition-colors",s.value[r]?"bg-mint text-white":"bg-mint/10 text-mint group-hover:bg-mint/20"])},c(String(r+1).padStart(2,"0")),3),e("span",{class:"text-lg md:text-xl text-text-primary font-semibold font-display leading-snug tracking-tight",innerHTML:g(u.question)},null,8,yt)]),e("span",{class:A(["text-text-muted transition-transform duration-300 mt-2 shrink-0",s.value[r]?"rotate-180 text-mint":""])},[...n[0]||(n[0]=[e("svg",{class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",d:"M19 9l-7 7-7-7"})],-1)])],2)],8,mt),L(V,{"enter-active-class":"transition-all duration-300 ease-out","leave-active-class":"transition-all duration-200 ease-in","enter-from-class":"max-h-0 opacity-0","enter-to-class":"max-h-[1200px] opacity-100","leave-from-class":"max-h-[1200px] opacity-100","leave-to-class":"max-h-0 opacity-0"},{default:N(()=>[s.value[r]?(a(),o("div",gt,[e("div",ft,[u.answer.includes("<")||u.answer.includes("```")?(a(),o("div",{key:0,class:"text-lg leading-[1.75] text-text-primary/90 max-w-none",innerHTML:g(u.answer)},null,8,bt)):(a(),o("p",{key:1,class:"text-lg leading-[1.75] text-text-primary/90",innerHTML:g(u.answer)},null,8,xt))])])):T("",!0)]),_:2},1024)],2))),128))]))}}),wt={class:"px-5 py-4 border-b border-border bg-surface/60"},_t={class:"flex items-center gap-3"},kt={class:"text-lg md:text-xl font-display font-bold text-text-primary tracking-tight"},Tt={key:0,class:"text-sm md:text-base text-text-secondary mt-1"},It={class:"p-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr] items-start"},Ct={class:"space-y-2.5"},jt=["onMouseenter","onFocus"],At={class:"flex items-center justify-between gap-3"},St={class:"font-mono text-[14px] md:text-[15px] text-text-primary font-semibold"},Et={class:"rounded-md bg-card border border-border px-2 py-0.5 font-mono text-[12px] text-text-secondary"},Pt={class:"space-y-3"},Ft={class:"flex items-center justify-between gap-3"},Nt={class:"font-mono text-[13px] font-bold text-text-primary"},Ot={class:"rounded-md border border-border/70 bg-card/70 px-2 py-0.5 text-xs font-semibold text-text-secondary"},Bt={class:"mt-2 font-mono text-[14px] leading-[1.6] whitespace-pre-wrap text-text-primary"},Lt={class:"mt-3 flex flex-wrap items-center gap-2 text-xs"},Rt={class:"rounded-md border border-border/70 bg-card/70 px-2 py-0.5 text-text-secondary"},Dt={key:1,class:"rounded-md border border-border/70 bg-card/70 px-2 py-0.5 text-text-secondary"},qt={key:0,class:"mt-2 text-xs text-text-muted leading-relaxed"},Mt={key:0,class:"border-t border-border bg-surface/50 px-5 py-4"},Wt={class:"list-disc ml-5 space-y-1 text-sm md:text-base text-text-secondary leading-relaxed"},U=F({__name:"MemoryDiagram",props:{title:{},description:{},bindings:{},objects:{},insights:{},embedded:{type:Boolean}},setup(h){const s=h,m=E(null),g={mint:"bg-mint/10",amber:"bg-amber/10",coral:"bg-coral/10",sky:"bg-sky/15",neutral:"bg-card"};function f(u){return u.scope?`${u.scope}.${u.name}`:u.name}function n(u){return s.bindings.filter(r=>r.objectId===u).length}return(u,r)=>(a(),o("div",{class:A(["rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)]",s.embedded?"my-0":"my-8"])},[e("div",wt,[e("div",_t,[r[2]||(r[2]=e("span",{class:"flex h-8 w-8 items-center justify-center rounded-lg bg-amber/15 text-amber"},[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 7h16M4 12h16M4 17h16"})])],-1)),e("div",null,[e("h3",kt,c(s.title),1),s.description?(a(),o("p",Tt,c(s.description),1)):T("",!0)])])]),e("div",It,[e("section",null,[r[4]||(r[4]=e("div",{class:"text-xs font-bold uppercase tracking-[0.2em] text-mint mb-3"},"Namespace Bindings",-1)),e("div",Ct,[(a(!0),o(I,null,j(s.bindings,y=>(a(),o("button",{key:`${y.scope||"global"}-${y.name}`,type:"button",class:"w-full rounded-lg border border-border bg-surface/70 px-3.5 py-3 text-left transition-all hover:border-mint/40 hover:bg-mint/5 focus:outline-none focus:ring-2 focus:ring-mint",onMouseenter:w=>m.value=y.objectId,onMouseleave:r[0]||(r[0]=w=>m.value=null),onFocus:w=>m.value=y.objectId,onBlur:r[1]||(r[1]=w=>m.value=null)},[e("div",At,[e("span",St,c(f(y)),1),e("span",Et," id: "+c(y.objectId),1)]),r[3]||(r[3]=e("div",{class:"mt-2 flex items-center gap-2 text-xs text-text-muted uppercase tracking-[0.14em]"},[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 12h14m0 0l-5-5m5 5l-5 5"})]),k(" points to heap object ")],-1))],40,jt))),128))])]),r[6]||(r[6]=e("div",{class:"hidden lg:flex h-full items-center justify-center px-2 pt-7"},[e("div",{class:"w-px h-[86%] bg-gradient-to-b from-transparent via-border to-transparent"})],-1)),e("section",null,[r[5]||(r[5]=e("div",{class:"text-xs font-bold uppercase tracking-[0.2em] text-amber mb-3"},"Heap Objects",-1)),e("div",Pt,[(a(!0),o(I,null,j(s.objects,y=>(a(),o("article",{key:y.id,class:A(["rounded-lg border px-3.5 py-3 transition-all duration-200",g[y.accent||"neutral"],m.value===y.id?"border-mint shadow-[0_10px_20px_-16px_rgba(234,88,12,0.8)] ring-1 ring-mint/40":"border-border/80"])},[e("div",Ft,[e("span",Nt,"object #"+c(y.id),1),e("span",Ot,c(y.type),1)]),e("pre",Bt,c(y.value),1),e("div",Lt,[e("span",Rt," refs from names: "+c(n(y.id)),1),y.mutable!==void 0?(a(),o("span",{key:0,class:A([y.mutable?"text-mint":"text-text-secondary","rounded-md border border-border/70 bg-card/70 px-2 py-0.5"])},c(y.mutable?"mutable":"immutable"),3)):T("",!0),y.refCount!==void 0?(a(),o("span",Dt," runtime refcount: "+c(y.refCount),1)):T("",!0)]),y.note?(a(),o("p",qt,c(y.note),1)):T("",!0)],2))),128))])])]),s.insights&&s.insights.length?(a(),o("div",Mt,[r[7]||(r[7]=e("div",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-2"},"What To Notice",-1)),e("ul",Wt,[(a(!0),o(I,null,j(s.insights,(y,w)=>(a(),o("li",{key:w},c(y),1))),128))])])):T("",!0)],2))}}),zt={class:"rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},Ut={class:"px-5 py-4 border-b border-border bg-surface/65"},$t={class:"flex items-start justify-between gap-4 flex-wrap"},Ht={class:"flex items-center gap-2 mb-1"},Gt={class:"rounded-md border border-border px-2 py-0.5 text-xs text-text-muted"},Vt={class:"text-xl md:text-2xl font-display font-bold text-text-primary tracking-tight"},Yt={key:0,class:"text-sm md:text-base text-text-secondary mt-1"},Kt={class:"flex items-center gap-2"},Qt=["disabled"],Xt=["disabled"],Jt={class:"mt-3 h-2 w-full rounded-full bg-surface border border-border overflow-hidden"},Zt={class:"mt-3 flex flex-wrap gap-2"},en=["onClick"],tn={class:"p-5 space-y-4"},nn={class:"rounded-lg border border-border bg-surface/60 px-4 py-3"},an={class:"text-base md:text-lg text-text-primary font-semibold"},rn={key:0,class:"rounded-lg border border-border overflow-hidden"},on={class:"px-4 py-3 font-mono text-[14px] leading-[1.6] text-text-primary bg-card overflow-auto"},sn={class:"rounded-lg border border-border bg-surface/60 px-4 py-3"},ln=["innerHTML"],cn=F({__name:"MemoryLab",props:{title:{},prompt:{},steps:{}},setup(h){const s=h,m=E(0),g=_(()=>s.steps[m.value]??s.steps[0]??{title:"No steps configured",action:"Add at least one step to this memory lab.",code:"",bindings:[],objects:[],explanation:"This lab has no configured steps yet."}),f=_(()=>s.steps.length===0?0:(m.value+1)/s.steps.length*100);function n(){m.value<s.steps.length-1&&(m.value+=1)}function u(){m.value>0&&(m.value-=1)}function r(y){return y.replace(/\*\*([^*]+)\*\*/g,'<strong class="text-text-primary font-bold">$1</strong>').replace(/`([^`]+)`/g,'<code class="border border-mint/20 bg-mint/10 text-mint px-2 py-0.5 rounded-md font-mono text-[0.92em] font-medium">$1</code>').replace(/\n/g,"<br />")}return(y,w)=>(a(),o("div",zt,[e("div",Ut,[e("div",$t,[e("div",null,[e("div",Ht,[w[0]||(w[0]=e("span",{class:"text-xs font-bold uppercase tracking-[0.2em] text-amber"},"Interactive Memory Lab",-1)),e("span",Gt," Step "+c(m.value+1)+" / "+c(s.steps.length),1)]),e("h3",Vt,c(s.title),1),s.prompt?(a(),o("p",Yt,c(s.prompt),1)):T("",!0)]),e("div",Kt,[e("button",{type:"button",class:"rounded-md border border-border px-3 py-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-mint/40 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",disabled:m.value===0,onClick:u}," Previous ",8,Qt),e("button",{type:"button",class:"rounded-md bg-mint text-white px-3 py-1.5 text-sm font-semibold hover:bg-amber transition-colors disabled:opacity-40 disabled:cursor-not-allowed",disabled:m.value>=s.steps.length-1,onClick:n}," Next ",8,Xt)])]),e("div",Jt,[e("div",{class:"h-full bg-gradient-to-r from-mint to-amber transition-all duration-300",style:q({width:`${f.value}%`})},null,4)]),e("div",Zt,[(a(!0),o(I,null,j(s.steps,(v,t)=>(a(),o("button",{key:t,type:"button",class:A(["rounded-md border px-2.5 py-1.5 text-xs font-semibold transition-colors",t===m.value?"border-mint bg-mint/10 text-mint":"border-border text-text-muted hover:border-mint/40 hover:text-text-primary"]),onClick:d=>m.value=t},c(t+1)+". "+c(v.title),11,en))),128))])]),e("div",tn,[e("div",nn,[w[1]||(w[1]=e("div",{class:"text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1"},"Current Action",-1)),e("p",an,c(g.value.action||g.value.title),1)]),g.value.code?(a(),o("div",rn,[w[2]||(w[2]=e("div",{class:"px-3 py-2 border-b border-border bg-surface/70 text-xs font-bold uppercase tracking-[0.2em] text-text-muted"},"Code",-1)),e("pre",on,c(g.value.code),1)])):T("",!0),L(U,{embedded:"",title:`Memory Snapshot - ${g.value.title}`,description:g.value.action,bindings:g.value.bindings,objects:g.value.objects},null,8,["title","description","bindings","objects"]),e("div",sn,[w[3]||(w[3]=e("div",{class:"text-xs font-bold uppercase tracking-[0.2em] text-amber mb-1"},"Explanation",-1)),e("p",{class:"text-base leading-relaxed text-text-primary/90",innerHTML:r(g.value.explanation)},null,8,ln)])])]))}}),dn={class:"rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},pn={class:"px-5 py-4 border-b border-border bg-surface/65"},un={class:"flex items-center gap-3"},mn={class:"text-lg md:text-xl font-display font-bold text-text-primary tracking-tight"},hn={key:0,class:"text-sm md:text-base text-text-secondary mt-1"},yn={class:"p-5 space-y-5"},gn={class:"overflow-x-auto pb-2"},fn={class:"inline-flex flex-col gap-1 min-w-full"},bn={class:"flex"},xn={class:"flex"},vn={class:"flex"},wn={class:"grid gap-4 md:grid-cols-3"},_n=["min","max"],kn=["min","max"],Tn=["min","max"],In={class:"rounded-lg border border-border bg-surface/60 p-4 space-y-3"},Cn={class:"flex items-center gap-3 flex-wrap"},jn={class:"font-mono text-base text-text-primary bg-card border border-border rounded-md px-3 py-1.5"},An={class:"text-mint"},Sn={class:"text-amber"},En={class:"text-coral"},Pn={class:"flex items-center gap-3 flex-wrap"},Fn={class:"font-mono text-base text-mint bg-mint/10 border border-mint/30 rounded-md px-3 py-1.5"},Nn={class:"text-xs text-text-muted"},On={class:"flex flex-wrap gap-2"},Bn=["onClick"],Ln=F({__name:"SliceVisualizer",props:{title:{default:"Slice Visualizer"},description:{default:"Drag the sliders to see how Python computes seq[start:stop:step]."},items:{default:()=>["P","y","t","h","o","n","i","s","t","a"]}},setup(h){const s=h,m=E(0),g=E(s.items.length),f=E(1),n=[{label:"all",start:0,stop:s.items.length,step:1},{label:"reverse",start:s.items.length-1,stop:-s.items.length-1,step:-1},{label:"first 3",start:0,stop:3,step:1},{label:"last 3",start:-3,stop:s.items.length,step:1},{label:"every 2nd",start:0,stop:s.items.length,step:2},{label:"middle",start:2,stop:-2,step:1}];function u(v){m.value=v.start,g.value=v.stop,f.value=v.step}const r=_(()=>{const v=s.items.length,t=Number.isFinite(f.value)&&f.value!==0?f.value:1,d=l=>l<0?Math.max(l+v,t>0?0:-1):Math.min(l,t>0?v:v-1);let i=d(m.value);const p=d(g.value),C=[];if(t>0)for(;i<p;i+=t)i>=0&&i<v&&C.push(i);else for(;i>p;i+=t)i>=0&&i<v&&C.push(i);return C});function y(v){return r.value.includes(v)}const w=_(()=>{const v=r.value.map(d=>s.items[d]);return s.items.every(d=>typeof d=="string"&&d.length===1)?`'${v.join("")}'`:`[${v.map(d=>typeof d=="string"?`'${d}'`:d).join(", ")}]`});return(v,t)=>(a(),o("div",dn,[e("div",pn,[e("div",un,[t[3]||(t[3]=e("span",{class:"flex h-8 w-8 items-center justify-center rounded-lg bg-mint/15 text-mint"},[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 4v16m8-16v16M4 8h16M4 16h16"})])],-1)),e("div",null,[e("h3",mn,c(h.title),1),h.description?(a(),o("p",hn,c(h.description),1)):T("",!0)])])]),e("div",yn,[e("div",gn,[e("div",fn,[e("div",bn,[(a(!0),o(I,null,j(h.items,(d,i)=>(a(),o("div",{key:`p-${i}`,class:"w-12 text-center text-[11px] font-mono text-text-muted"},c(i),1))),128))]),e("div",xn,[(a(!0),o(I,null,j(h.items,(d,i)=>(a(),o("div",{key:`i-${i}`,class:A(["w-12 h-12 flex items-center justify-center font-mono text-base font-bold border transition-all duration-300",i===0?"rounded-l-lg":"",i===h.items.length-1?"rounded-r-lg":"",i>0?"-ml-px":"",y(i)?"bg-mint/20 border-mint text-mint scale-110 z-10":"bg-surface/60 border-border text-text-secondary"])},c(d),3))),128))]),e("div",vn,[(a(!0),o(I,null,j(h.items,(d,i)=>(a(),o("div",{key:`n-${i}`,class:"w-12 text-center text-[11px] font-mono text-amber/70"},c(i-h.items.length),1))),128))])])]),e("div",wn,[e("div",null,[t[4]||(t[4]=e("label",{class:"block text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1.5"},"start",-1)),O(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>m.value=d),type:"number",min:-h.items.length,max:h.items.length,class:"w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"},null,8,_n),[[B,m.value,void 0,{number:!0}]])]),e("div",null,[t[5]||(t[5]=e("label",{class:"block text-xs font-bold uppercase tracking-[0.2em] text-amber mb-1.5"},"stop",-1)),O(e("input",{"onUpdate:modelValue":t[1]||(t[1]=d=>g.value=d),type:"number",min:-h.items.length,max:h.items.length,class:"w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"},null,8,kn),[[B,g.value,void 0,{number:!0}]])]),e("div",null,[t[6]||(t[6]=e("label",{class:"block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-1.5"},"step",-1)),O(e("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>f.value=d),type:"number",min:-h.items.length,max:h.items.length,class:"w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"},null,8,Tn),[[B,f.value,void 0,{number:!0}]])])]),e("div",In,[e("div",Cn,[t[11]||(t[11]=e("span",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted"},"Expression",-1)),e("code",jn,[t[7]||(t[7]=k(" seq[",-1)),e("span",An,c(m.value),1),t[8]||(t[8]=k(":",-1)),e("span",Sn,c(g.value),1),t[9]||(t[9]=k(":",-1)),e("span",En,c(f.value),1),t[10]||(t[10]=k("] ",-1))])]),e("div",Pn,[t[12]||(t[12]=e("span",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted"},"Result",-1)),e("code",Fn,c(w.value),1),e("span",Nn,c(r.value.length)+" items",1)])]),e("div",On,[(a(),o(I,null,j(n,d=>e("button",{key:d.label,type:"button",class:"rounded-md border border-border bg-surface/60 px-3 py-1.5 text-xs font-semibold text-text-secondary hover:border-mint/50 hover:text-mint transition-colors",onClick:i=>u(d)},c(d.label),9,Bn)),64))])])]))}}),Rn={class:"rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},Dn={class:"px-5 py-4 border-b border-border bg-surface/65"},qn={class:"flex items-center justify-between gap-4 flex-wrap"},Mn={class:"flex items-center gap-3"},Wn={class:"text-lg md:text-xl font-display font-bold text-text-primary tracking-tight"},zn={key:0,class:"text-sm md:text-base text-text-secondary mt-1"},Un={class:"flex items-center gap-2"},$n={class:"p-5 space-y-5"},Hn={class:"flex items-center justify-between text-xs font-semibold mb-2"},Gn={class:"font-mono text-mint text-sm"},Vn={class:"space-y-3"},Yn={class:"flex items-center gap-2"},Kn={class:"font-mono text-sm font-bold text-text-primary"},Qn={class:"h-7 rounded-md bg-surface/60 border border-border relative overflow-hidden"},Xn={class:"text-right font-mono text-xs text-text-secondary"},D=200,Jn=F({__name:"ComplexityRacer",props:{title:{default:"Algorithm Complexity Racer"},description:{default:"See how O(1), O(log n), O(n), O(n log n), and O(n²) scale as input grows."}},setup(h){const s=E(20),m=E(!1);let g=null;const f=[{label:"O(1)",color:"#34d399",fn:()=>1},{label:"O(log n)",color:"#60a5fa",fn:d=>Math.max(1,Math.log2(d))},{label:"O(n)",color:"#fbbf24",fn:d=>d},{label:"O(n log n)",color:"#fb923c",fn:d=>d*Math.max(1,Math.log2(d))},{label:"O(n²)",color:"#f87171",fn:d=>d*d}],n=_(()=>{const d=f.map(p=>({label:p.label,color:p.color,ops:p.fn(s.value)})),i=Math.max(...d.map(p=>p.ops));return d.map(p=>({...p,pct:p.ops/i*100}))});function u(d){return d>=1e3?`${(d/1e3).toFixed(1)}k`:d>=100?d.toFixed(0):d>=10?d.toFixed(1):d.toFixed(2)}function r(){if(s.value>=D){w();return}s.value=Math.min(D,s.value+2)}function y(){g===null&&(s.value>=D&&(s.value=5),m.value=!0,g=window.setInterval(r,120))}function w(){g!==null&&(clearInterval(g),g=null),m.value=!1}function v(){m.value?w():y()}function t(){w(),s.value=20}return z(m,()=>{}),Y(w),(d,i)=>(a(),o("div",Rn,[e("div",Dn,[e("div",qn,[e("div",Mn,[i[1]||(i[1]=e("span",{class:"flex h-8 w-8 items-center justify-center rounded-lg bg-coral/15 text-coral"},[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 17l6-6 4 4 8-8"})])],-1)),e("div",null,[e("h3",Wn,c(h.title),1),h.description?(a(),o("p",zn,c(h.description),1)):T("",!0)])]),e("div",Un,[e("button",{type:"button",class:"rounded-md border border-border px-3 py-1.5 text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-mint/40 transition-colors",onClick:t},"Reset"),e("button",{type:"button",class:"rounded-md bg-mint text-white px-4 py-1.5 text-sm font-semibold hover:bg-amber transition-colors",onClick:v},c(m.value?"Pause":"Race"),1)])])]),e("div",$n,[e("div",null,[e("div",Hn,[i[2]||(i[2]=e("span",{class:"uppercase tracking-[0.18em] text-text-muted"},"Input size n",-1)),e("span",Gn,"n = "+c(s.value),1)]),O(e("input",{type:"range",min:"1",max:D,"onUpdate:modelValue":i[0]||(i[0]=p=>s.value=p),class:"w-full accent-mint"},null,512),[[B,s.value,void 0,{number:!0}]])]),e("div",Vn,[(a(!0),o(I,null,j(n.value,p=>(a(),o("div",{key:p.label,class:"grid grid-cols-[110px_1fr_90px] items-center gap-3"},[e("div",Yn,[e("span",{class:"h-3 w-3 rounded-sm",style:q({background:p.color})},null,4),e("span",Kn,c(p.label),1)]),e("div",Qn,[e("div",{class:"h-full rounded-md transition-[width] duration-300 ease-out",style:q({width:`${p.pct}%`,background:p.color,opacity:.85})},null,4)]),e("div",Xn,c(u(p.ops))+" ops",1)]))),128))]),i[3]||(i[3]=e("p",{class:"text-xs text-text-muted leading-relaxed"},[k(" Bars are normalized to the slowest curve at the current "),e("code",{class:"font-mono text-mint"},"n"),k(". Hit "),e("strong",null,"Race"),k(" to grow "),e("code",{class:"font-mono text-mint"},"n"),k(" over time and watch O(n²) explode while O(log n) barely moves. ")],-1))])]))}}),Zn={class:"rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},ea={class:"px-5 py-4 border-b border-border bg-surface/65"},ta={class:"flex items-center gap-3"},na={class:"text-lg md:text-xl font-display font-bold text-text-primary tracking-tight"},aa={key:0,class:"text-sm md:text-base text-text-secondary mt-1"},ia={class:"p-5 grid gap-5 md:grid-cols-[1fr_1fr] items-start"},ra={class:"relative"},oa={viewBox:"0 0 360 240",class:"w-full h-auto"},sa=["fill","stroke"],la=["fill","stroke"],ca={"font-family":"ui-monospace,monospace","font-size":"13","font-weight":"600","text-anchor":"middle"},da=["y"],pa=["y"],ua=["y"],ma={class:"mt-4 grid grid-cols-4 gap-2"},ha=["onClick"],ya={class:"font-mono text-base"},ga={class:"opacity-80"},fa={class:"space-y-4"},ba={class:"rounded-lg border border-border bg-surface/60 p-4 space-y-2"},xa={class:"flex items-center gap-2 flex-wrap"},va={class:"font-mono text-sm text-text-primary bg-card border border-border rounded-md px-2 py-1"},wa={class:"text-xs text-text-muted"},_a={class:"flex items-start gap-2 flex-wrap"},ka={class:"font-mono text-sm text-mint bg-mint/10 border border-mint/30 rounded-md px-3 py-1.5"},Ta={class:"text-xs text-text-muted leading-relaxed"},Ia=F({__name:"SetVenn",props:{title:{default:"Set Operations Venn"},description:{default:"Pick an operator and watch how |, &, -, ^ carve the universe."}},setup(h){const s=[{id:"union",symbol:"|",name:"union",method:"A.union(B)",note:"Everything in A or B (no duplicates)."},{id:"intersect",symbol:"&",name:"intersection",method:"A.intersection(B)",note:"Only elements in BOTH A and B."},{id:"diff",symbol:"-",name:"difference",method:"A.difference(B)",note:"In A but NOT in B (order matters)."},{id:"symdiff",symbol:"^",name:"symmetric diff",method:"A.symmetric_difference(B)",note:"In A or B but NOT both."}],m=E("union"),g=E("1, 2, 3, 4"),f=E("3, 4, 5, 6"),n=_(()=>r(g.value)),u=_(()=>r(f.value));function r(l){return[...new Set(l.split(",").map(b=>b.trim()).filter(Boolean))]}const y=_(()=>n.value.filter(l=>!u.value.includes(l))),w=_(()=>u.value.filter(l=>!n.value.includes(l))),v=_(()=>n.value.filter(l=>u.value.includes(l))),t=_(()=>{switch(m.value){case"union":return[...new Set([...n.value,...u.value])];case"intersect":return v.value;case"diff":return y.value;case"symdiff":return[...y.value,...w.value]}}),d=_(()=>`{${t.value.join(", ")}}`),i=_(()=>s.find(l=>l.id===m.value)),p=_(()=>{const l="rgba(52, 211, 153, 0.32)",b="rgba(52, 211, 153, 0.14)",x="rgba(100, 116, 139, 0.10)";switch(m.value){case"union":return{A:l,B:l};case"intersect":return{A:x,B:x};case"diff":return{A:l,B:x};case"symdiff":return{A:b,B:b}}}),C=_(()=>({A:"#34d399",B:"#fbbf24"}));return(l,b)=>(a(),o("div",Zn,[e("div",ea,[e("div",ta,[b[2]||(b[2]=e("span",{class:"flex h-8 w-8 items-center justify-center rounded-lg bg-sky/15 text-sky"},[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("circle",{cx:"9",cy:"12",r:"6"}),e("circle",{cx:"15",cy:"12",r:"6"})])],-1)),e("div",null,[e("h3",na,c(h.title),1),h.description?(a(),o("p",aa,c(h.description),1)):T("",!0)])])]),e("div",ia,[e("div",ra,[(a(),o("svg",oa,[e("circle",{cx:"130",cy:"120",r:"90",fill:p.value.A,stroke:C.value.A,"stroke-width":"2",class:"transition-[fill] duration-300"},null,8,sa),e("circle",{cx:"230",cy:"120",r:"90",fill:p.value.B,stroke:C.value.B,"stroke-width":"2",class:"transition-[fill] duration-300"},null,8,la),b[3]||(b[3]=e("text",{x:"60",y:"40",fill:"#34d399","font-family":"ui-monospace,monospace","font-weight":"700","font-size":"16"},"A",-1)),b[4]||(b[4]=e("text",{x:"290",y:"40",fill:"#fbbf24","font-family":"ui-monospace,monospace","font-weight":"700","font-size":"16"},"B",-1)),e("g",ca,[(a(!0),o(I,null,j(y.value,(x,S)=>(a(),o("text",{key:`a${S}`,x:80,y:100+S*18,fill:"#e5e7eb"},c(x),9,da))),128)),(a(!0),o(I,null,j(v.value,(x,S)=>(a(),o("text",{key:`ab${S}`,x:180,y:100+S*18,fill:"#e5e7eb"},c(x),9,pa))),128)),(a(!0),o(I,null,j(w.value,(x,S)=>(a(),o("text",{key:`b${S}`,x:280,y:100+S*18,fill:"#e5e7eb"},c(x),9,ua))),128))])])),e("div",ma,[(a(),o(I,null,j(s,x=>e("button",{key:x.id,type:"button",class:A(["rounded-md border px-2 py-2 text-xs font-bold transition-all",m.value===x.id?"border-mint bg-mint/10 text-mint":"border-border bg-surface/60 text-text-secondary hover:border-mint/40"]),onClick:S=>m.value=x.id},[e("div",ya,c(x.symbol),1),e("div",ga,c(x.name),1)],10,ha)),64))])]),e("div",fa,[e("div",null,[b[5]||(b[5]=e("label",{class:"block text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1.5"},"Set A (comma separated)",-1)),O(e("input",{"onUpdate:modelValue":b[0]||(b[0]=x=>g.value=x),class:"w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"},null,512),[[B,g.value]])]),e("div",null,[b[6]||(b[6]=e("label",{class:"block text-xs font-bold uppercase tracking-[0.2em] text-amber mb-1.5"},"Set B (comma separated)",-1)),O(e("input",{"onUpdate:modelValue":b[1]||(b[1]=x=>f.value=x),class:"w-full rounded-md border border-border bg-surface/60 px-3 py-2 font-mono text-sm text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30"},null,512),[[B,f.value]])]),e("div",ba,[e("div",xa,[b[7]||(b[7]=e("span",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted"},"Expression",-1)),e("code",va," A "+c(i.value.symbol)+" B ",1),e("span",wa,"— "+c(i.value.method),1)]),e("div",_a,[b[8]||(b[8]=e("span",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted mt-1"},"Result",-1)),e("code",ka,c(d.value),1)]),e("p",Ta,c(i.value.note),1)])])])]))}}),Ca={class:"rounded-xl border border-border bg-card overflow-hidden shadow-[0_10px_30px_-20px_rgba(234,88,12,0.35)] my-8"},ja={class:"px-5 py-4 border-b border-border bg-surface/65"},Aa={class:"flex items-center gap-3"},Sa={class:"text-lg md:text-xl font-display font-bold text-text-primary tracking-tight"},Ea={key:0,class:"text-sm md:text-base text-text-secondary mt-1"},Pa={class:"p-5 space-y-5"},Fa={class:"rounded-lg border border-border bg-surface/60 p-4"},Na={class:"flex items-center gap-3 flex-wrap"},Oa={class:"font-mono text-base text-text-primary bg-card border border-border rounded-md px-3 py-1.5"},Ba={class:"text-mint"},La={class:"text-sm text-text-secondary mt-2 leading-relaxed"},Ra={class:"flex flex-wrap gap-2"},Da=["onClick"],qa=F({__name:"TruthyTester",props:{title:{default:"Truthiness Tester"},description:{default:`Python's bool() rule: most things are truthy. The "falsy" club is small — and surprising.`}},setup(h){const s=E("[]"),m=["0","1","-1","0.0",'""','" "','"False"',"[]","[0]","{}","{0}","None","True","False","set()","range(0)"],g=_(()=>f(s.value.trim()));function f(n){if(!n)return{ok:!1,truthy:!1,reason:"Type a literal above to test it."};if(n==="None")return{ok:!0,truthy:!1,reason:"None is the singleton None — always falsy."};if(n==="True")return{ok:!0,truthy:!0,reason:"Literal True."};if(n==="False")return{ok:!0,truthy:!1,reason:"Literal False."};if(n==="set()")return{ok:!0,truthy:!1,reason:"Empty set has length 0 — falsy."};if(/^range\(\s*0\s*\)$/.test(n))return{ok:!0,truthy:!1,reason:"range(0) yields no items — falsy."};if(/^range\(\s*[1-9]\d*\s*\)$/.test(n))return{ok:!0,truthy:!0,reason:"Non-empty range — truthy."};if(/^-?\d+(\.\d+)?$/.test(n)){const r=parseFloat(n);return{ok:!0,truthy:r!==0,reason:r===0?"Zero numbers (int or float) are falsy.":"Non-zero numbers are truthy."}}const u=n.match(/^(['"])(.*)\1$/);if(u){const r=u[2];return{ok:!0,truthy:r.length>0,reason:r.length===0?'Empty string "" is falsy.':'Any non-empty string is truthy — even "False" or " ".'}}if(/^\[.*\]$/.test(n)){const y=n.slice(1,-1).trim().length===0;return{ok:!0,truthy:!y,reason:y?"Empty list [] is falsy.":"Any non-empty list is truthy — even [0] or [None]."}}if(/^\(.*\)$/.test(n)){const y=n.slice(1,-1).trim().length===0;return{ok:!0,truthy:!y,reason:y?"Empty tuple () is falsy.":"Any non-empty tuple is truthy."}}if(/^\{.*\}$/.test(n)){const r=n.slice(1,-1).trim();return r.length===0?{ok:!0,truthy:!1,reason:"Empty dict {} is falsy."}:{ok:!0,truthy:!0,reason:/:/.test(r)?"Non-empty dict — truthy regardless of values.":"Non-empty set — truthy."}}return{ok:!1,truthy:!1,reason:'Could not parse — try a literal like 0, "", [], {}, None.'}}return(n,u)=>(a(),o("div",Ca,[e("div",ja,[e("div",Aa,[u[1]||(u[1]=e("span",{class:"flex h-8 w-8 items-center justify-center rounded-lg bg-amber/15 text-amber"},[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})])],-1)),e("div",null,[e("h3",Sa,c(h.title),1),h.description?(a(),o("p",Ea,c(h.description),1)):T("",!0)])])]),e("div",Pa,[e("div",null,[u[2]||(u[2]=e("label",{class:"block text-xs font-bold uppercase tracking-[0.2em] text-mint mb-1.5"}," Type a Python literal — bool() will tell you the truth ",-1)),O(e("input",{"onUpdate:modelValue":u[0]||(u[0]=r=>s.value=r),spellcheck:"false",class:"w-full rounded-md border border-border bg-surface/60 px-3 py-2.5 font-mono text-base text-text-primary focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30",placeholder:'try: 0   ""   []   {0}   "False"   None'},null,512),[[B,s.value]])]),e("div",Fa,[e("div",Na,[u[5]||(u[5]=e("span",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted"},"Result",-1)),e("code",Oa,[u[3]||(u[3]=k(" bool(",-1)),e("span",Ba,c(s.value||"..."),1),u[4]||(u[4]=k(") ",-1))]),e("span",{class:A(["rounded-md border px-3 py-1 text-sm font-bold font-mono transition-colors",g.value.ok&&g.value.truthy?"border-mint text-mint bg-mint/10":g.value.ok?"border-coral text-coral bg-coral/10":"border-border text-text-muted bg-card"])},"→ "+c(g.value.ok?String(g.value.truthy):"?"),3)]),e("p",La,c(g.value.reason),1)]),e("div",null,[u[6]||(u[6]=e("div",{class:"text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-2"},"Quick examples",-1)),e("div",Ra,[(a(),o(I,null,j(m,r=>e("button",{key:r,type:"button",class:"rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-text-secondary hover:border-mint/50 hover:text-mint transition-colors",onClick:y=>s.value=r},c(r),9,Da)),64))])])])]))}}),Ma={class:"space-y-6 stagger-children"},Wa=["innerHTML"],za=["innerHTML"],Ua={key:13,class:"my-10 flex items-center gap-3"},$a=F({__name:"SectionRenderer",props:{blocks:{}},setup(h){const s={1:"text-4xl md:text-5xl font-display font-extrabold text-text-primary mt-12 mb-5 tracking-tight text-balance",2:'text-3xl md:text-[2rem] font-display font-bold text-text-primary mt-10 mb-4 tracking-tight text-balance flex items-baseline gap-3 before:content-[""] before:block before:w-1.5 before:h-7 before:bg-mint before:rounded-full',3:"text-2xl font-display font-semibold text-text-primary mt-8 mb-3 tracking-tight"};function m(g){return g.replace(/`([^`]+)`/g,'<code class="px-2 py-0.5 rounded-md border border-mint/20 bg-mint/10 text-mint font-mono text-[0.92em] font-medium">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong class="text-text-primary font-bold">$1</strong>').replace(/\*([^*]+)\*/g,'<em class="italic text-text-primary/80">$1</em>').replace(/\n/g,"<br />")}return(g,f)=>(a(),o("div",Ma,[(a(!0),o(I,null,j(h.blocks,(n,u)=>(a(),o(I,{key:u},[n.type==="heading"?(a(),P(M("h"+n.level),{key:0,class:A(s[n.level])},{default:N(()=>[k(c(n.text),1)]),_:2},1032,["class"])):n.type==="text"?(a(),o("div",{key:1,class:"text-lg md:text-[1.18rem] leading-[1.75] text-text-primary/90 max-w-[68ch]",innerHTML:m(n.content)},null,8,Wa)):n.type==="code"?(a(),P(He,{key:2,code:n.code,language:n.language,filename:n.filename},null,8,["code","language","filename"])):n.type==="callout"?(a(),P(Ke,{key:3,variant:n.variant,title:n.title,content:m(n.content)},null,8,["variant","title","content"])):n.type==="list"?(a(),P(M(n.ordered?"ol":"ul"),{key:4,class:A(["text-lg md:text-[1.15rem] text-text-primary/90 space-y-3 ml-6 marker:text-mint marker:font-semibold",n.ordered?"list-decimal":"list-disc"])},{default:N(()=>[(a(!0),o(I,null,j(n.items,(r,y)=>(a(),o("li",{key:y,innerHTML:m(r),class:"leading-[1.7] pl-2"},null,8,za))),128))]),_:2},1032,["class"])):n.type==="memoryDiagram"?(a(),P(U,{key:5,title:n.title,description:n.description,bindings:n.bindings,objects:n.objects,insights:n.insights},null,8,["title","description","bindings","objects","insights"])):n.type==="memoryLab"?(a(),P(cn,{key:6,title:n.title,prompt:n.prompt,steps:n.steps},null,8,["title","prompt","steps"])):n.type==="sliceVisualizer"?(a(),P(Ln,{key:7,title:n.title,description:n.description,items:n.items},null,8,["title","description","items"])):n.type==="complexityRacer"?(a(),P(Jn,{key:8,title:n.title,description:n.description},null,8,["title","description"])):n.type==="setVenn"?(a(),P(Ia,{key:9,title:n.title,description:n.description},null,8,["title","description"])):n.type==="truthyTester"?(a(),P(qa,{key:10,title:n.title,description:n.description},null,8,["title","description"])):n.type==="playground"?(a(),P(pt,{key:11,"default-code":n.defaultCode,instructions:n.instructions,"expected-output":n.expectedOutput},null,8,["default-code","instructions","expected-output"])):n.type==="qna"?(a(),P(vt,{key:12,items:n.items},null,8,["items"])):n.type==="divider"?(a(),o("div",Ua,[...f[0]||(f[0]=[e("span",{class:"h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"},null,-1),e("span",{class:"dotted-accent h-1 w-10 text-mint"},null,-1),e("span",{class:"h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"},null,-1)])])):T("",!0)],64))),128))]))}}),Ha=F({__name:"Badge",props:{color:{default:"default"}},setup(h){const s=h,m=_(()=>({default:"bg-surface text-text-secondary border border-border",mint:"bg-mint/10 text-mint border-transparent",amber:"bg-amber/10 text-amber border-transparent",coral:"bg-coral/10 text-coral border-transparent",lavender:"bg-lavender/10 text-lavender border-transparent",sky:"bg-sky/10 text-sky border-transparent"})[s.color]);return(g,f)=>(a(),o("span",{class:A(["inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase",m.value])},[K(g.$slots,"default")],2))}}),Ga={key:0,class:"max-w-4xl mx-auto"},Va={class:"mb-10"},Ya={key:0,class:"flex items-center gap-3 mb-4"},Ka={class:"text-text-muted text-sm font-bold uppercase tracking-[0.2em]"},Qa={class:"mt-16 flex items-center justify-between border-t border-border pt-8 gap-4"},Xa={class:"truncate hidden sm:block"},Ja={class:"text-base font-bold truncate"},Za={key:1,class:"flex-1 max-w-[240px]"},ei={key:3,class:"flex items-center gap-2 rounded-xl border-2 border-mint/40 bg-mint/10 px-5 py-3 text-base font-bold text-mint whitespace-nowrap"},ti={class:"text-right truncate hidden sm:block"},ni={class:"text-base font-bold truncate"},ai={key:5,class:"flex-1 max-w-[240px]"},ii={key:1,class:"flex flex-col items-center justify-center py-24 text-center max-w-lg mx-auto"},li=F({__name:"WorkshopPage",props:{day:{},section:{}},setup(h){const s=X(),m=J(),g=h,f=_(()=>s.params.section||g.section||""),n=_(()=>Le(f.value)),u=_(()=>Z(f.value)),r=_(()=>ee(f.value)),y=_(()=>te(f.value)),w=_(()=>m.isSectionCompleted(f.value)),v=_(()=>({1:"mint",2:"amber",3:"coral"})[String(u.value?.day.id)]||"mint");function t(){m.completeSection(f.value)}return z(f,d=>{d&&u.value&&m.setCurrentLocation(u.value.day.id,d)},{immediate:!0}),(d,i)=>{const p=Q("router-link");return n.value?(a(),o("div",Ga,[e("div",Va,[u.value?(a(),o("div",Ya,[L(Ha,{color:v.value,class:"text-sm px-3 py-1"},{default:N(()=>[k("Day "+c(u.value.day.id),1)]),_:1},8,["color"]),e("span",Ka,c(u.value.day.title),1)])):T("",!0),i[0]||(i[0]=e("div",{class:"h-1 w-16 rounded-full bg-gradient-to-r from-mint to-amber"},null,-1))]),L($a,{blocks:n.value},null,8,["blocks"]),e("div",Qa,[y.value?(a(),P(p,{key:0,to:`/workshop/day/${y.value.day.id}/${y.value.section.id}`,class:"group flex items-center gap-3 rounded-xl border-2 border-border bg-card hover:border-mint hover:bg-mint/5 px-5 py-4 transition-all text-text-primary focus:outline-none focus:ring-2 focus:ring-mint flex-1 w-full justify-start max-w-[240px]"},{default:N(()=>[i[2]||(i[2]=e("svg",{class:"h-5 w-5 text-text-muted transition-transform group-hover:-translate-x-1 group-hover:text-mint",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1)),e("div",Xa,[i[1]||(i[1]=e("div",{class:"text-xs text-text-muted uppercase tracking-[0.2em] font-bold"},"Previous",-1)),e("div",Ja,c(y.value.section.title),1)])]),_:1},8,["to"])):(a(),o("div",Za)),w.value?(a(),o("div",ei,[...i[3]||(i[3]=[e("svg",{class:"h-5 w-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 13l4 4L19 7"})],-1),k(" Completed ",-1)])])):(a(),o("button",{key:2,class:"rounded-xl bg-gradient-to-r from-mint to-amber px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_-12px_rgba(234,88,12,0.55)] hover:shadow-[0_14px_36px_-12px_rgba(234,88,12,0.7)] hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 whitespace-nowrap",onClick:t}," ✓ Mark Complete ")),r.value?(a(),P(p,{key:4,to:`/workshop/day/${r.value.day.id}/${r.value.section.id}`,class:"group flex items-center justify-end gap-3 rounded-xl border-2 border-border bg-card hover:border-mint hover:bg-mint/5 px-5 py-4 transition-all text-text-primary focus:outline-none focus:ring-2 focus:ring-mint flex-1 w-full max-w-[240px]"},{default:N(()=>[e("div",ti,[i[4]||(i[4]=e("div",{class:"text-xs text-text-muted uppercase tracking-[0.2em] font-bold"},"Next",-1)),e("div",ni,c(r.value.section.title),1)]),i[5]||(i[5]=e("svg",{class:"h-5 w-5 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-mint",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","stroke-width":"2.5"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 5l7 7-7 7"})],-1))]),_:1},8,["to"])):(a(),o("div",ai))])])):(a(),o("div",ii,[i[7]||(i[7]=e("div",{class:"text-6xl mb-5"},"📝",-1)),i[8]||(i[8]=e("h2",{class:"text-2xl font-display font-bold text-text-primary mb-3"},"Section Not Found",-1)),i[9]||(i[9]=e("p",{class:"text-base text-text-secondary mb-7"},"This section doesn't exist or hasn't been created yet.",-1)),L(p,{to:"/",class:"text-base font-bold text-mint border-2 border-mint/30 rounded-lg px-5 py-2.5 hover:bg-mint/10 transition-colors"},{default:N(()=>[...i[6]||(i[6]=[k(" Return to Home ",-1)])]),_:1})]))}}});export{li as default};

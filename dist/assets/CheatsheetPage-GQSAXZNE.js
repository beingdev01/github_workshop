import{d as k,c as i,a as e,b as m,w as p,s as C,v as T,F as f,r as x,t as s,f as b,l as g,m as L,i as A,o as r,h,k as M}from"./index-CFkb-kC8.js";const v=[{id:"basics",title:"Basics",icon:"📦",color:"mint",items:[{title:"Print",code:`print("Hello, World!")
print("A", "B", sep=", ", end="\\n")`,note:"sep= separator, end= line ending"},{title:"Variables",code:`x = 10
name = "Alice"
is_valid = True`,note:"No type declaration needed"},{title:"Input",code:`name = input("Your name: ")
age = int(input("Your age: "))`,note:"input() always returns string"},{title:"Comments",code:`# Single line comment

"""
Multi-line
docstring
"""`},{title:"Type Conversion",code:`int("42")    # → 42
float("3.14") # → 3.14
str(100)     # → "100"
bool(0)      # → False`},{title:"Multiple Assignment",code:`a, b, c = 1, 2, 3
x = y = z = 0`}]},{id:"strings",title:"Strings",icon:"🔤",color:"amber",items:[{title:"f-strings",code:`name = "Alice"
print(f"Hello, {name}!")
print(f"2+2 = {2+2}")`},{title:"String Methods",code:`"hello".upper()       # HELLO
"HELLO".lower()       # hello
" hi ".strip()        # "hi"
"hello".replace("l","L") # heLLo
"a,b,c".split(",")    # ["a","b","c"]`},{title:"Slicing",code:`s = "Python"
s[0]     # "P"
s[-1]    # "n"
s[0:3]   # "Pyt"
s[::2]   # "Pto"
s[::-1]  # "nohtyP"`},{title:"Check Content",code:`"py" in "python"  # True
"abc".isalpha()   # True
"123".isdigit()   # True
"abc".startswith("a") # True`},{title:"Join",code:`", ".join(["a","b","c"]) # "a, b, c"
"-".join(["2024","01","15"])`}]},{id:"numbers",title:"Numbers & Math",icon:"🔢",color:"sky",items:[{title:"Operators",code:`5 + 3    # 8   (add)
5 - 3    # 2   (sub)
5 * 3    # 15  (mul)
5 / 3    # 1.67 (div)
5 // 3   # 1   (floor div)
5 % 3    # 2   (modulo)
5 ** 3   # 125 (power)`},{title:"Built-in Functions",code:`abs(-5)       # 5
round(3.7)    # 4
round(3.14, 1) # 3.1
max(1, 2, 3)  # 3
min(1, 2, 3)  # 1
sum([1,2,3])  # 6`},{title:"Comparison",code:`5 == 5   # True
5 != 3   # True
5 > 3    # True
5 >= 5   # True
1 < 2 < 3 # True (chaining!)`}]},{id:"conditionals",title:"Conditionals",icon:"🔀",color:"coral",items:[{title:"if / elif / else",code:`if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")`},{title:"Logical Operators",code:`if a > 0 and b > 0:
    print("both positive")
if a > 0 or b > 0:
    print("at least one")
if not is_done:
    print("still working")`},{title:"Ternary",code:'result = "even" if x % 2 == 0 else "odd"'},{title:"Match (3.10+)",code:`match command:
    case "quit":
        exit()
    case "hello":
        print("hi!")
    case _:
        print("unknown")`}]},{id:"loops",title:"Loops",icon:"🔁",color:"lavender",items:[{title:"for loop",code:`for i in range(5):
    print(i)  # 0,1,2,3,4

for item in ["a","b","c"]:
    print(item)`},{title:"range()",code:`range(5)       # 0,1,2,3,4
range(2, 8)    # 2,3,4,5,6,7
range(0, 10, 2) # 0,2,4,6,8
range(5, 0, -1) # 5,4,3,2,1`},{title:"while loop",code:`count = 0
while count < 5:
    print(count)
    count += 1`},{title:"Control Flow",code:`for i in range(10):
    if i == 3:
        continue  # skip 3
    if i == 7:
        break     # stop at 7
    print(i)`},{title:"enumerate",code:`fruits = ["apple","banana","cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")`}]},{id:"lists",title:"Lists",icon:"📋",color:"mint",items:[{title:"Create & Access",code:`nums = [1, 2, 3, 4, 5]
nums[0]    # 1
nums[-1]   # 5
nums[1:3]  # [2, 3]
len(nums)  # 5`},{title:"Modify",code:`nums.append(6)
nums.insert(0, 0)
nums.extend([7, 8])
nums.remove(3)
popped = nums.pop()
nums.sort()
nums.reverse()`},{title:"List Comprehension",code:`squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
pairs = [(x,y) for x in range(3) for y in range(3)]`},{title:"Useful Patterns",code:`# Unpack
a, b, c = [1, 2, 3]
first, *rest = [1, 2, 3, 4]

# Check
3 in [1, 2, 3]  # True

# Copy
new = old[:]  # shallow copy`}]},{id:"dicts",title:"Dictionaries",icon:"🗂️",color:"amber",items:[{title:"Create & Access",code:`user = {"name": "Alice", "age": 30}
user["name"]       # "Alice"
user.get("email", "N/A")  # "N/A"`},{title:"Modify",code:`user["email"] = "a@b.com"
user.update({"age": 31})
del user["email"]
val = user.pop("age")`},{title:"Iterate",code:`for key in d:
    print(key)
for key, val in d.items():
    print(f"{key}: {val}")
for val in d.values():
    print(val)`},{title:"Dict Comprehension",code:`squares = {x: x**2 for x in range(6)}
# {0:0, 1:1, 2:4, 3:9, 4:16, 5:25}

filtered = {k:v for k,v in d.items() if v > 0}`}]},{id:"functions",title:"Functions",icon:"⚡",color:"sky",items:[{title:"Basic Function",code:`def greet(name):
    """Greet someone."""
    return f"Hello, {name}!"`},{title:"Default & Keyword Args",code:`def power(base, exp=2):
    return base ** exp

power(3)       # 9
power(3, 3)    # 27
power(exp=4, base=2)  # 16`},{title:"*args & **kwargs",code:`def add(*nums):
    return sum(nums)

def info(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")`},{title:"Lambda",code:`square = lambda x: x ** 2
sorted(words, key=lambda w: len(w))
list(map(lambda x: x*2, [1,2,3]))`},{title:"Return Multiple",code:`def divmod(a, b):
    return a // b, a % b

q, r = divmod(17, 5)`}]},{id:"tuples-sets",title:"Tuples & Sets",icon:"🎯",color:"coral",items:[{title:"Tuples",code:`point = (3, 4)
x, y = point  # unpack
colors = ("red", "green", "blue")
len(colors)   # 3
# Tuples are IMMUTABLE`},{title:"Sets",code:`nums = {1, 2, 3, 3}  # {1, 2, 3}
nums.add(4)
nums.remove(1)
nums.discard(99)  # no error if missing
3 in nums  # True`},{title:"Set Operations",code:`a = {1, 2, 3}
b = {2, 3, 4}
a | b   # {1,2,3,4} union
a & b   # {2,3}     intersection
a - b   # {1}       difference
a ^ b   # {1,4}     symmetric diff`}]},{id:"files",title:"File I/O",icon:"📁",color:"lavender",items:[{title:"Read File",code:`with open("file.txt", "r") as f:
    content = f.read()
    # or line by line:
    # lines = f.readlines()`},{title:"Write File",code:`with open("file.txt", "w") as f:
    f.write("Hello\\n")
    f.write("World\\n")`},{title:"Append",code:`with open("log.txt", "a") as f:
    f.write("New entry\\n")`},{title:"Read Lines",code:`with open("data.txt") as f:
    for line in f:
        print(line.strip())`}]},{id:"oop",title:"Classes & OOP",icon:"🏗️",color:"mint",items:[{title:"Basic Class",code:`class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name}: Woof!"

rex = Dog("Rex")
print(rex.bark())`},{title:"Inheritance",code:`class Animal:
    def __init__(self, name):
        self.name = name

class Cat(Animal):
    def meow(self):
        return f"{self.name}: Meow!"

cat = Cat("Whiskers")`},{title:"Dunder Methods",code:`class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __str__(self):
        return f"({self.x}, {self.y})"
    def __add__(self, other):
        return Vector(self.x+other.x, self.y+other.y)`}]}],P={class:"min-h-screen bg-grid"},S={class:"sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl"},B={class:"mx-auto flex h-16 max-w-none items-center justify-between px-8"},F={class:"flex items-center gap-4"},N={class:"flex items-center gap-4"},D={class:"mx-auto max-w-none px-8 py-10"},V={class:"mb-10"},O={class:"relative max-w-xl"},H={class:"flex flex-wrap gap-3 mb-10"},I=["onClick"],q={class:"space-y-8"},W=["id"],j={class:"font-display text-lg font-bold mb-4 flex items-center gap-2"},E={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-4"},z={class:"text-sm font-semibold text-text-primary mb-2 group-hover:text-mint transition-colors"},R={class:"relative"},U={class:"font-mono text-[11px] leading-relaxed text-text-secondary bg-surface/50 rounded-lg p-3 overflow-x-auto"},$=["onClick"],Q={key:0,class:"mt-2 text-[10px] text-text-muted italic"},Y={key:0,class:"text-center py-16"},G={class:"text-text-muted text-sm"},Z=k({__name:"CheatsheetPage",setup(J){const d=g(""),c=g(""),u=L(()=>{if(!d.value.trim())return v;const o=d.value.toLowerCase();return v.map(t=>({...t,items:t.items.filter(l=>l.title.toLowerCase().includes(o)||l.code.toLowerCase().includes(o)||l.note&&l.note.toLowerCase().includes(o)||t.title.toLowerCase().includes(o))})).filter(t=>t.items.length>0)});function y(o){const t={mint:"bg-mint/10 border-mint/20 text-mint hover:bg-mint/20",amber:"bg-amber/10 border-amber/20 text-amber hover:bg-amber/20",coral:"bg-coral/10 border-coral/20 text-coral hover:bg-coral/20",sky:"bg-sky/10 border-sky/20 text-sky hover:bg-sky/20",lavender:"bg-lavender/10 border-lavender/20 text-lavender hover:bg-lavender/20"};return t[o]||t.mint}function _(o){document.getElementById(`cat-${o}`)?.scrollIntoView({behavior:"smooth"})}async function w(o){await navigator.clipboard.writeText(o),c.value=o,setTimeout(()=>{c.value=""},2e3)}return(o,t)=>{const l=A("router-link");return r(),i("div",P,[e("nav",S,[e("div",B,[e("div",F,[m(l,{to:"/",class:"flex items-center gap-3"},{default:p(()=>[...t[1]||(t[1]=[e("div",{class:"flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber to-coral text-base font-bold text-void"},"Py",-1),e("span",{class:"font-display text-base font-bold"},"Cheat Sheet",-1)])]),_:1})]),e("div",N,[m(l,{to:"/workshop",class:"text-sm text-text-secondary hover:text-text-primary transition-colors"},{default:p(()=>[...t[2]||(t[2]=[h("← Workshop",-1)])]),_:1}),m(l,{to:"/",class:"text-sm text-text-secondary hover:text-text-primary transition-colors"},{default:p(()=>[...t[3]||(t[3]=[h("Home",-1)])]),_:1})])])]),e("div",D,[e("div",V,[t[5]||(t[5]=e("h1",{class:"font-display text-4xl font-bold gradient-text mb-3"},"📝 Python Cheat Sheet",-1)),t[6]||(t[6]=e("p",{class:"text-lg text-text-secondary mb-6"},"Quick reference for everything you've learned. Click any category to jump there.",-1)),e("div",O,[C(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>d.value=n),type:"text",placeholder:"Search cheatsheet...",class:"w-full rounded-xl bg-surface/50 border border-border/60 px-5 py-3 text-base text-text-primary placeholder-text-muted focus:border-mint/50 focus:outline-none focus:ring-1 focus:ring-mint/30 transition-all"},null,512),[[T,d.value]]),t[4]||(t[4]=e("span",{class:"absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm"},"🔍",-1))])]),e("div",H,[(r(!0),i(f,null,x(u.value,n=>(r(),i("button",{key:n.id,class:M(["rounded-lg px-4 py-2 text-sm font-medium border transition-all hover:scale-105",y(n.color)]),onClick:a=>_(n.id)},s(n.icon)+" "+s(n.title),11,I))),128))]),e("div",q,[(r(!0),i(f,null,x(u.value,n=>(r(),i("section",{key:n.id,id:`cat-${n.id}`,class:"scroll-mt-20"},[e("h2",j,[e("span",null,s(n.icon),1),e("span",null,s(n.title),1)]),e("div",E,[(r(!0),i(f,null,x(n.items,a=>(r(),i("div",{key:a.title,class:"glass rounded-xl p-4 hover:border-border transition-all group"},[e("h3",z,s(a.title),1),e("div",R,[e("pre",U,[e("code",null,s(a.code),1)]),e("button",{class:"absolute top-2 right-2 text-[10px] text-text-muted hover:text-mint opacity-0 group-hover:opacity-100 transition-all",onClick:K=>w(a.code)},s(c.value===a.code?"✓":"📋"),9,$)]),a.note?(r(),i("p",Q,"💡 "+s(a.note),1)):b("",!0)]))),128))])],8,W))),128))]),u.value.length===0?(r(),i("div",Y,[t[7]||(t[7]=e("p",{class:"text-3xl mb-3"},"🔍",-1)),e("p",G,'No results for "'+s(d.value)+'"',1)])):b("",!0)])])}}});export{Z as default};

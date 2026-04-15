import{d as w,c as r,a as e,b as p,w as m,y as g,A as v,F as f,r as x,u as k,g as C,i as c,t as d,l as L,m as T,h as M,o as l,n as A,f as H}from"./index-D8jfVgTm.js";import{_ as B}from"./site-logo-BehEtZ_y.js";const S=[{id:"basics",title:"Basics",icon:"📦",color:"mint",items:[{title:"Print",code:`print("Hello, World!")
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
        return Vector(self.x+other.x, self.y+other.y)`}]}],F={class:"min-h-screen bg-paper text-text-primary flex flex-col"},N={class:"sticky top-0 z-50 border-b border-border glass"},P={class:"mx-auto flex h-16 w-full items-center justify-between px-6 lg:px-10"},V={class:"flex items-center gap-3"},$={class:"flex items-center gap-5"},D={class:"flex flex-1 overflow-hidden"},O={class:"hidden w-72 flex-col border-r border-border bg-card lg:flex"},j={class:"p-5 border-b border-border"},z={class:"relative"},E={class:"flex-1 overflow-y-auto p-5 space-y-1"},R=["href"],W={class:"text-xl"},q={class:"flex-1 overflow-y-auto px-6 py-12 lg:px-14 bg-paper"},I={class:"mx-auto max-w-5xl"},U={class:"mb-8 lg:hidden"},Q={class:"relative"},Y={key:0,class:"py-16 text-center"},G={class:"text-xl text-text-secondary"},J={class:"text-text-primary font-bold"},K={key:1,class:"space-y-16"},X=["id"],Z={class:"mb-8 pb-5 border-b-2 border-border"},ee={class:"flex items-center gap-4"},te={class:"font-display text-3xl md:text-4xl font-extrabold tracking-tight"},ne={class:"warm-card overflow-hidden"},oe={class:"w-full text-left text-base"},se={class:"divide-y divide-border"},ie={class:"px-5 py-4 align-top"},re=["innerHTML"],le=["innerHTML"],ae={class:"px-5 py-4 align-top"},de={class:"bg-card p-3 rounded-lg border border-border overflow-x-auto"},ce=["innerHTML"],fe=w({__name:"CheatsheetPage",setup(ue){const u=S,s=L(""),b=T(()=>{const o=s.value.toLowerCase().trim();return o?u.map(t=>{const i=t.items.filter(n=>n.title.toLowerCase().includes(o)||n.note&&n.note.toLowerCase().includes(o)||n.code.toLowerCase().includes(o));return i.length>0?{...t,items:i}:t.title.toLowerCase().includes(o)?t:null}).filter(Boolean):u});function h(o){if(!s.value)return o;const t=s.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`(${t})`,"gi");return o.replace(i,'<mark class="bg-mint/25 text-mint px-1 rounded">$1</mark>')}function y(o){let t=o;if(s.value){const i=s.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),n=new RegExp(`(${i})`,"gi");t=t.replace(n,'<mark class="bg-mint/30 text-mint px-1 rounded">$1</mark>')}return t}function _(o){return{mint:"bg-mint/15 text-mint",amber:"bg-amber/15 text-amber",coral:"bg-coral/15 text-coral",lavender:"bg-lavender/15 text-lavender",sky:"bg-sky/15 text-sky"}[o]||"bg-mint/15 text-mint"}return(o,t)=>{const i=M("router-link");return l(),r("div",F,[e("nav",N,[e("div",P,[e("div",V,[p(i,{to:"/",class:"flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint rounded-md"},{default:m(()=>[...t[3]||(t[3]=[e("img",{src:B,alt:"Python Workshop logo",class:"h-8 w-8 object-contain"},null,-1),e("span",{class:"font-display text-lg font-bold tracking-tight"},"Cheatsheet",-1)])]),_:1})]),e("div",$,[p(i,{to:"/workshop",class:"text-base font-semibold text-text-secondary hover:text-mint transition-colors"},{default:m(()=>[...t[4]||(t[4]=[c("Workshop",-1)])]),_:1}),p(i,{to:"/",class:"text-base font-semibold text-text-secondary hover:text-mint transition-colors"},{default:m(()=>[...t[5]||(t[5]=[c("Home",-1)])]),_:1})])])]),e("div",D,[e("aside",O,[e("div",j,[e("div",z,[t[6]||(t[6]=e("svg",{class:"absolute left-3.5 top-3.5 h-5 w-5 text-text-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),g(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>s.value=n),placeholder:"Search cheatsheet...",class:"w-full rounded-lg border-2 border-border bg-card pl-11 pr-3 py-2.5 text-base text-text-primary focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition placeholder:text-text-muted"},null,512),[[v,s.value]])])]),e("div",E,[(l(!0),r(f,null,x(k(u),n=>(l(),r("a",{key:n.id,href:`#${n.id}`,class:"flex items-center gap-3 rounded-md px-3 py-2.5 text-[15px] font-semibold text-text-secondary hover:bg-mint/10 hover:text-mint transition-colors focus:outline-none focus:ring-2 focus:ring-mint"},[e("span",W,d(n.icon),1),e("span",null,d(n.title),1)],8,R))),128))])]),e("main",q,[e("div",I,[t[11]||(t[11]=C('<div class="mb-12"><div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">Quick Reference</div><h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance"> Python <span class="gradient-text">Cheatsheet</span></h1><p class="text-xl text-text-secondary leading-relaxed max-w-2xl">Search, scan, and steal the syntax you need — organized for active recall.</p></div>',1)),e("div",U,[e("div",Q,[t[7]||(t[7]=e("svg",{class:"absolute left-3.5 top-3.5 h-5 w-5 text-text-muted",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})],-1)),g(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>s.value=n),placeholder:"Search cheatsheet...",class:"w-full rounded-lg border-2 border-border bg-card pl-11 pr-3 py-3 text-base text-text-primary focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/20 transition placeholder:text-text-muted"},null,512),[[v,s.value]])])]),b.value.length===0?(l(),r("div",Y,[e("p",G,[t[8]||(t[8]=c('No results for "',-1)),e("span",J,d(s.value),1),t[9]||(t[9]=c('"',-1))]),e("button",{onClick:t[2]||(t[2]=n=>s.value=""),class:"mt-5 text-base font-bold text-mint hover:underline focus:outline-none"},"Clear search")])):(l(),r("div",K,[(l(!0),r(f,null,x(b.value,n=>(l(),r("section",{key:n.id,id:n.id,class:"scroll-mt-24"},[e("div",Z,[e("div",ee,[e("span",{class:A(["flex h-14 w-14 items-center justify-center rounded-xl text-3xl ring-1 ring-black/5 shadow-sm",_(n.color)])},d(n.icon),3),e("h2",te,d(n.title),1)])]),e("div",ne,[e("table",oe,[t[10]||(t[10]=e("thead",{class:"bg-surface/70 border-b-2 border-border"},[e("tr",null,[e("th",{class:"px-5 py-4 font-display font-bold text-text-primary w-2/5 text-sm uppercase tracking-[0.15em]"},"Concept"),e("th",{class:"px-5 py-4 font-display font-bold text-text-primary text-sm uppercase tracking-[0.15em]"},"Example")])],-1)),e("tbody",se,[(l(!0),r(f,null,x(n.items,a=>(l(),r("tr",{key:a.title,class:"hover:bg-mint/5 transition-colors"},[e("td",ie,[e("p",{class:"font-bold text-text-primary text-base",innerHTML:h(a.title)},null,8,re),a.note?(l(),r("p",{key:0,class:"mt-1.5 text-sm text-text-secondary leading-relaxed italic",innerHTML:h(a.note)},null,8,le)):H("",!0)]),e("td",ae,[e("pre",de,[e("code",{class:"text-sm font-mono text-text-primary leading-relaxed",innerHTML:y(a.code)},null,8,ce)])])]))),128))])])])],8,X))),128))]))])])])])}}});export{fe as default};

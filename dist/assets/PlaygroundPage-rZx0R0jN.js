import{d as W,q as j,c,a as e,b as m,w as f,g as h,y as E,z as S,u as x,t as v,h as b,k as O,l,i as R,o as g}from"./index-DYW47o_w.js";import{_ as T}from"./site-logo-BehEtZ_y.js";import{u as H,E as V,o as A,l as F,p as N,k as B,d as D,i as M,a as z,b as q,c as G,e as y}from"./index-Byh6zT8X.js";const L={class:"min-h-screen bg-grid"},I={class:"sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl"},K={class:"mx-auto flex h-16 max-w-none items-center justify-between px-8"},U={class:"flex items-center gap-4"},J={class:"flex items-center gap-4"},Q={class:"mx-auto max-w-none px-8 py-10"},X={class:"grid lg:grid-cols-2 gap-6"},Y={class:"glass rounded-2xl overflow-hidden"},Z={class:"flex items-center justify-between px-6 py-4 border-b border-border/50"},$={class:"flex gap-3"},ee={class:"glass rounded-2xl overflow-hidden flex flex-col"},te={class:"flex items-center justify-between px-6 py-4 border-b border-border/50"},ne={class:"flex gap-3"},oe=["disabled"],se={class:"flex-1 p-6 overflow-auto"},re={key:0,class:"flex items-center gap-3 text-sm text-text-muted animate-pulse"},ae=`# 🐍 Python Playground
# Write your Python code here and press Run!

def greet(name):
    return f"Hello, {name}! Welcome to Python!"

# Test it out
for name in ["World", "Alice", "Python"]:
    print(greet(name))

print("\\n✨ Happy coding!")
`,pe=W({__name:"PlaygroundPage",setup(ie){const r=H(),d=l();let n=null;const s=l(""),a=l(!1),o=l(""),_={hello:`# Hello World!
print("Hello, World!")
print("Welcome to Python!")

name = "Coder"
print(f"Hello, {name}!")
`,fibonacci:`# Fibonacci Sequence Generator
def fibonacci(n):
    """Generate first n Fibonacci numbers."""
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    return fib[:n]

# Print first 15 Fibonacci numbers
numbers = fibonacci(15)
for i, num in enumerate(numbers):
    print(f"F({i:2d}) = {num}")
`,sorting:`# Sorting Algorithms Comparison
import time

def bubble_sort(arr):
    arr = arr[:]
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Test with sample data
data = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {data}")
print(f"Sorted:   {bubble_sort(data)}")
print(f"Built-in: {sorted(data)}")
`,oop:`# Object-Oriented Programming Example
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        return f"{self.name} says {self.sound}!"
    
    def __str__(self):
        return f"Animal({self.name})"

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name, "Woof")
    
    def fetch(self, item):
        return f"{self.name} fetches the {item}! 🎾"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")
    
    def purr(self):
        return f"{self.name} purrs... 😺"

# Create some animals
dog = Dog("Rex")
cat = Cat("Whiskers")

print(dog.speak())
print(dog.fetch("ball"))
print(cat.speak())
print(cat.purr())
`};j(()=>{if(d.value){const i=V.create({doc:ae,extensions:[F(),N(),A,B.of([...D,M,{key:"Ctrl-Enter",run:()=>(u(),!0)},{key:"Cmd-Enter",run:()=>(u(),!0)}]),z(),q(),G(),y.theme({"&":{backgroundColor:"transparent",height:"100%"},".cm-scroller":{overflow:"auto"},".cm-gutters":{backgroundColor:"transparent",borderRight:"1px solid rgba(42,42,92,0.4)"}})]});n=new y({state:i,parent:d.value})}});async function u(){if(!n)return;const i=n.state.doc.toString();a.value=!1,s.value="";const t=await r.runCode(i);t.error?(a.value=!0,s.value=t.error):s.value=t.output||"(No output)"}function k(){n&&n.dispatch({changes:{from:0,to:n.state.doc.length,insert:""}})}function w(){s.value="",a.value=!1}function C(){o.value&&n&&_[o.value]&&(n.dispatch({changes:{from:0,to:n.state.doc.length,insert:_[o.value]}}),o.value="")}return(i,t)=>{const p=R("router-link");return g(),c("div",L,[e("nav",I,[e("div",K,[e("div",U,[m(p,{to:"/",class:"flex items-center gap-3"},{default:f(()=>[...t[1]||(t[1]=[e("img",{src:T,alt:"Python Workshop logo",class:"h-10 w-10 object-contain"},null,-1),e("span",{class:"font-display text-base font-bold"},"Playground",-1)])]),_:1})]),e("div",J,[m(p,{to:"/workshop",class:"text-sm text-text-secondary hover:text-text-primary transition-colors"},{default:f(()=>[...t[2]||(t[2]=[b("← Workshop",-1)])]),_:1}),m(p,{to:"/",class:"text-sm text-text-secondary hover:text-text-primary transition-colors"},{default:f(()=>[...t[3]||(t[3]=[b("Home",-1)])]),_:1})])])]),e("div",Q,[t[8]||(t[8]=e("div",{class:"mb-8"},[e("h1",{class:"font-display text-4xl font-bold gradient-text mb-3"},"🎮 Free Code Playground"),e("p",{class:"text-lg text-text-secondary"},"Write anything you want. Experiment freely — no rules, no tests.")],-1)),e("div",X,[e("div",Y,[e("div",Z,[t[5]||(t[5]=h('<div class="flex items-center gap-3"><span class="w-3 h-3 rounded-full bg-coral/60"></span><span class="w-3 h-3 rounded-full bg-amber/60"></span><span class="w-3 h-3 rounded-full bg-mint/60"></span><span class="ml-3 text-sm font-mono text-text-muted">playground.py</span></div>',1)),e("div",$,[e("button",{class:"text-sm text-text-muted hover:text-amber transition-colors px-3 py-1.5",onClick:k},"Clear"),E(e("select",{"onUpdate:modelValue":t[0]||(t[0]=P=>o.value=P),class:"bg-surface/50 border border-border/50 rounded text-sm text-text-muted px-3 py-1.5",onChange:C},[...t[4]||(t[4]=[h('<option value="">📁 Templates</option><option value="hello">Hello World</option><option value="fibonacci">Fibonacci</option><option value="sorting">Sorting</option><option value="oop">OOP Example</option>',5)])],544),[[S,o.value]])])]),e("div",{ref_key:"editorContainer",ref:d,class:"h-[600px]"},null,512)]),e("div",ee,[e("div",te,[t[6]||(t[6]=e("span",{class:"text-sm font-mono text-text-muted uppercase tracking-wider"},"Output",-1)),e("div",ne,[e("button",{class:"flex items-center gap-2 rounded-lg bg-mint/10 border border-mint/20 px-4 py-2 text-sm font-medium text-mint hover:bg-mint/20 transition-all",disabled:x(r).isRunning,onClick:u},v(x(r).isRunning?"⏳ Running...":"▶ Run"),9,oe),e("button",{class:"text-sm text-text-muted hover:text-text-primary px-3 py-1.5",onClick:w},"Clear")])]),e("div",se,[x(r).isLoading?(g(),c("div",re,[...t[7]||(t[7]=[e("span",{class:"animate-spin"},"⏳",-1),b(" Loading Python runtime... ",-1)])])):(g(),c("pre",{key:1,class:O(["font-mono text-base whitespace-pre-wrap min-h-full",a.value?"text-coral":"text-mint/90"])},v(s.value||`# Output will appear here after running your code
# Press Run or Ctrl+Enter to execute`),3))])])])])])}}});export{pe as default};

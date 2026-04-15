import{d as j,q as W,c as p,a as e,b as m,w as f,g as v,y as E,z as S,u as x,t as _,h as b,k as O,l,i as R,o as g}from"./index-Df6VTNt2.js";import{u as T,E as H,o as V,l as A,p as F,k as N,d as B,i as D,a as M,b as z,c as q,e as y}from"./index-QtebIQzy.js";const G={class:"min-h-screen bg-grid"},L={class:"sticky top-0 z-50 border-b border-border bg-void/80 backdrop-blur-xl"},I={class:"mx-auto flex h-16 max-w-none items-center justify-between px-8"},K={class:"flex items-center gap-4"},U={class:"flex items-center gap-4"},J={class:"mx-auto max-w-none px-8 py-10"},Q={class:"grid lg:grid-cols-2 gap-6"},X={class:"glass rounded-2xl overflow-hidden"},Y={class:"flex items-center justify-between px-6 py-4 border-b border-border/50"},Z={class:"flex gap-3"},$={class:"glass rounded-2xl overflow-hidden flex flex-col"},ee={class:"flex items-center justify-between px-6 py-4 border-b border-border/50"},te={class:"flex gap-3"},ne=["disabled"],oe={class:"flex-1 p-6 overflow-auto"},se={key:0,class:"flex items-center gap-3 text-sm text-text-muted animate-pulse"},re=`# 🐍 Python Playground
# Write your Python code here and press Run!

def greet(name):
    return f"Hello, {name}! Welcome to Python!"

# Test it out
for name in ["World", "Alice", "Python"]:
    print(greet(name))

print("\\n✨ Happy coding!")
`,de=j({__name:"PlaygroundPage",setup(ae){const r=T(),d=l();let n=null;const s=l(""),a=l(!1),o=l(""),h={hello:`# Hello World!
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
`};W(()=>{if(d.value){const i=H.create({doc:re,extensions:[A(),F(),V,N.of([...B,D,{key:"Ctrl-Enter",run:()=>(u(),!0)},{key:"Cmd-Enter",run:()=>(u(),!0)}]),M(),z(),q(),y.theme({"&":{backgroundColor:"transparent",height:"100%"},".cm-scroller":{overflow:"auto"},".cm-gutters":{backgroundColor:"transparent",borderRight:"1px solid rgba(42,42,92,0.4)"}})]});n=new y({state:i,parent:d.value})}});async function u(){if(!n)return;const i=n.state.doc.toString();a.value=!1,s.value="";const t=await r.runCode(i);t.error?(a.value=!0,s.value=t.error):s.value=t.output||"(No output)"}function k(){n&&n.dispatch({changes:{from:0,to:n.state.doc.length,insert:""}})}function w(){s.value="",a.value=!1}function C(){o.value&&n&&h[o.value]&&(n.dispatch({changes:{from:0,to:n.state.doc.length,insert:h[o.value]}}),o.value="")}return(i,t)=>{const c=R("router-link");return g(),p("div",G,[e("nav",L,[e("div",I,[e("div",K,[m(c,{to:"/",class:"flex items-center gap-3"},{default:f(()=>[...t[1]||(t[1]=[e("div",{class:"flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-mint to-sky text-base font-bold text-white"},"Py",-1),e("span",{class:"font-display text-base font-bold"},"Playground",-1)])]),_:1})]),e("div",U,[m(c,{to:"/workshop",class:"text-sm text-text-secondary hover:text-text-primary transition-colors"},{default:f(()=>[...t[2]||(t[2]=[b("← Workshop",-1)])]),_:1}),m(c,{to:"/",class:"text-sm text-text-secondary hover:text-text-primary transition-colors"},{default:f(()=>[...t[3]||(t[3]=[b("Home",-1)])]),_:1})])])]),e("div",J,[t[8]||(t[8]=e("div",{class:"mb-8"},[e("h1",{class:"font-display text-4xl font-bold gradient-text mb-3"},"🎮 Free Code Playground"),e("p",{class:"text-lg text-text-secondary"},"Write anything you want. Experiment freely — no rules, no tests.")],-1)),e("div",Q,[e("div",X,[e("div",Y,[t[5]||(t[5]=v('<div class="flex items-center gap-3"><span class="w-3 h-3 rounded-full bg-coral/60"></span><span class="w-3 h-3 rounded-full bg-amber/60"></span><span class="w-3 h-3 rounded-full bg-mint/60"></span><span class="ml-3 text-sm font-mono text-text-muted">playground.py</span></div>',1)),e("div",Z,[e("button",{class:"text-sm text-text-muted hover:text-amber transition-colors px-3 py-1.5",onClick:k},"Clear"),E(e("select",{"onUpdate:modelValue":t[0]||(t[0]=P=>o.value=P),class:"bg-surface/50 border border-border/50 rounded text-sm text-text-muted px-3 py-1.5",onChange:C},[...t[4]||(t[4]=[v('<option value="">📁 Templates</option><option value="hello">Hello World</option><option value="fibonacci">Fibonacci</option><option value="sorting">Sorting</option><option value="oop">OOP Example</option>',5)])],544),[[S,o.value]])])]),e("div",{ref_key:"editorContainer",ref:d,class:"h-[600px]"},null,512)]),e("div",$,[e("div",ee,[t[6]||(t[6]=e("span",{class:"text-sm font-mono text-text-muted uppercase tracking-wider"},"Output",-1)),e("div",te,[e("button",{class:"flex items-center gap-2 rounded-lg bg-mint/10 border border-mint/20 px-4 py-2 text-sm font-medium text-mint hover:bg-mint/20 transition-all",disabled:x(r).isRunning,onClick:u},_(x(r).isRunning?"⏳ Running...":"▶ Run"),9,ne),e("button",{class:"text-sm text-text-muted hover:text-text-primary px-3 py-1.5",onClick:w},"Clear")])]),e("div",oe,[x(r).isLoading?(g(),p("div",se,[...t[7]||(t[7]=[e("span",{class:"animate-spin"},"⏳",-1),b(" Loading Python runtime... ",-1)])])):(g(),p("pre",{key:1,class:O(["font-mono text-base whitespace-pre-wrap min-h-full",a.value?"text-coral":"text-mint/90"])},_(s.value||`# Output will appear here after running your code
# Press Run or Ctrl+Enter to execute`),3))])])])])])}}});export{de as default};

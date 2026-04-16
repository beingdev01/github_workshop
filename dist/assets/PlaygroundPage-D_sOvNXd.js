import{d as E,q as W,c as m,a as t,b as f,w as b,g as l,s as j,B as S,u as x,t as y,i as g,n as O,l as d,h as T,o as h}from"./index-DZTgzZOc.js";import{_ as R}from"./site-logo-BehEtZ_y.js";import{u as H,E as V,o as A,l as B,p as N,k as D,d as F,i as M,a as q,b as z,c as G,e as _}from"./index-h_VK2IBi.js";const L={class:"min-h-screen bg-grid"},I={class:"sticky top-0 z-50 border-b border-border glass"},K={class:"mx-auto flex h-16 items-center justify-between px-8"},U={class:"flex items-center gap-3"},J={class:"flex items-center gap-5"},Q={class:"mx-auto max-w-[1400px] px-8 py-12"},X={class:"grid lg:grid-cols-2 gap-6"},Y={class:"warm-card overflow-hidden"},Z={class:"flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70"},$={class:"flex items-center gap-2"},ee={class:"warm-card overflow-hidden flex flex-col"},te={class:"flex items-center justify-between px-5 py-3 border-b border-border bg-surface/70"},ne={class:"flex gap-2"},se=["disabled"],oe={class:"flex-1 p-6 overflow-auto bg-card"},ae={key:0,class:"flex items-center gap-3 text-base font-medium text-text-muted animate-pulse"},re=`# 🐍 Python Playground
# Write your Python code here and press Run!

def greet(name):
    return f"Hello, {name}! Welcome to Python!"

# Test it out
for name in ["World", "Alice", "Python"]:
    print(greet(name))

print("\\n✨ Happy coding!")
`,ce=E({__name:"PlaygroundPage",setup(ie){const a=H(),p=d();let n=null;const o=d(""),r=d(!1),s=d(""),v={hello:`# Hello World!
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
`};W(()=>{if(p.value){const i=V.create({doc:re,extensions:[B(),N(),A,D.of([...F,M,{key:"Ctrl-Enter",run:()=>(c(),!0)},{key:"Cmd-Enter",run:()=>(c(),!0)}]),q(),z(),G(),_.theme({"&":{backgroundColor:"transparent",height:"100%"},".cm-scroller":{overflow:"auto"},".cm-gutters":{backgroundColor:"transparent",borderRight:"1px solid rgba(42,42,92,0.4)"}})]});n=new _({state:i,parent:p.value})}});async function c(){if(!n)return;const i=n.state.doc.toString();r.value=!1,o.value="";const e=await a.runCode(i);e.error?(r.value=!0,o.value=e.error):o.value=e.output||"(No output)"}function k(){n&&n.dispatch({changes:{from:0,to:n.state.doc.length,insert:""}})}function w(){o.value="",r.value=!1}function C(){s.value&&n&&v[s.value]&&(n.dispatch({changes:{from:0,to:n.state.doc.length,insert:v[s.value]}}),s.value="")}return(i,e)=>{const u=T("router-link");return h(),m("div",L,[t("nav",I,[t("div",K,[t("div",U,[f(u,{to:"/",class:"flex items-center gap-3"},{default:b(()=>[...e[1]||(e[1]=[t("img",{src:R,alt:"Python Workshop logo",class:"h-9 w-9 object-contain"},null,-1),t("span",{class:"font-display text-lg font-bold tracking-tight"},"Playground",-1)])]),_:1})]),t("div",J,[f(u,{to:"/workshop",class:"text-base font-semibold text-text-secondary hover:text-mint transition-colors"},{default:b(()=>[...e[2]||(e[2]=[g("← Workshop",-1)])]),_:1}),f(u,{to:"/",class:"text-base font-semibold text-text-secondary hover:text-mint transition-colors"},{default:b(()=>[...e[3]||(e[3]=[g("Home",-1)])]),_:1})])])]),t("div",Q,[e[8]||(e[8]=l('<div class="mb-10"><div class="text-sm font-bold uppercase tracking-[0.25em] text-mint mb-3">Experiment freely</div><h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-balance"> 🎮 Code <span class="gradient-text">Playground</span></h1><p class="text-xl text-text-secondary leading-relaxed max-w-2xl">Write anything you want. Test ideas, explore syntax, break things — <span class="text-text-primary font-semibold">no rules, no tests.</span></p></div>',1)),t("div",X,[t("div",Y,[t("div",Z,[e[5]||(e[5]=l('<div class="flex items-center gap-2.5"><span class="w-3 h-3 rounded-full bg-coral/70"></span><span class="w-3 h-3 rounded-full bg-amber/70"></span><span class="w-3 h-3 rounded-full bg-mint/70"></span><span class="ml-3 text-sm font-mono font-medium text-text-secondary">playground.py</span></div>',1)),t("div",$,[t("button",{class:"text-sm font-semibold text-text-muted hover:text-coral transition-colors px-3 py-1.5 rounded-md border border-transparent hover:border-coral/30",onClick:k},"Clear"),j(t("select",{"onUpdate:modelValue":e[0]||(e[0]=P=>s.value=P),class:"bg-card border-2 border-border rounded-md text-sm font-semibold text-text-primary px-3 py-1.5 focus:outline-none focus:border-mint transition",onChange:C},[...e[4]||(e[4]=[l('<option value="">📁 Templates</option><option value="hello">Hello World</option><option value="fibonacci">Fibonacci</option><option value="sorting">Sorting</option><option value="oop">OOP Example</option>',5)])],544),[[S,s.value]])])]),t("div",{ref_key:"editorContainer",ref:p,class:"h-[620px]"},null,512)]),t("div",ee,[t("div",te,[e[6]||(e[6]=t("span",{class:"text-xs font-mono font-bold text-mint uppercase tracking-[0.2em]"},"Output",-1)),t("div",ne,[t("button",{class:"flex items-center gap-2 rounded-lg bg-gradient-to-r from-mint to-amber border border-transparent px-5 py-2 text-base font-bold text-white shadow-sm hover:shadow-md hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed",disabled:x(a).isRunning,onClick:c},y(x(a).isRunning?"⏳ Running...":"▶ Run"),9,se),t("button",{class:"text-sm font-semibold text-text-muted hover:text-text-primary px-3 py-1.5 rounded-md border border-transparent hover:border-border",onClick:w},"Clear")])]),t("div",oe,[x(a).isLoading?(h(),m("div",ae,[...e[7]||(e[7]=[t("span",{class:"animate-spin text-xl"},"⏳",-1),g(" Loading Python runtime... ",-1)])])):(h(),m("pre",{key:1,class:O(["font-mono text-[15px] leading-[1.7] whitespace-pre-wrap min-h-full",r.value?"text-coral":"text-text-primary"])},y(o.value||`# Output will appear here after running your code
# Press Run or Ctrl+Enter to execute`),3))])])]),e[9]||(e[9]=l('<div class="mt-6 flex items-center gap-2 text-sm text-text-muted"><span>Shortcut:</span><span class="kbd">Ctrl</span><span>+</span><span class="kbd">Enter</span><span class="ml-1">(or</span><span class="kbd">⌘</span><span>+</span><span class="kbd">Enter</span><span>on Mac) to execute.</span></div>',1))])])}}});export{ce as default};

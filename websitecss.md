# websitecss.md

This file is a practical style blueprint for recreating the same visual theme and color palette used in this codebase.

It is designed for agents and developers who need to build a new website with the same look and feel.

## 1) Visual Identity Summary

- Core mood: warm, modern, energetic.
- Primary palette: amber + orange in light mode.
- Dark mode shift: warm accents move toward red/rose + orange while surfaces become zinc/charcoal.
- Surface style: soft cards, warm borders, gradient highlights, occasional glass effects.
- Typography: clean geometric sans for body, expressive display for headings, mono for code.

## 2) Source of Truth Files

Use these as canonical references:

- `apps/web/src/index.css`
- `apps/web/tailwind.config.js`
- `apps/web/src/components/ui/button.tsx`
- `apps/web/src/components/ui/card.tsx`
- `apps/web/src/components/ui/input.tsx`
- `apps/web/src/components/layout/Header.tsx`
- `apps/web/src/components/layout/Layout.tsx`
- `apps/web/src/components/layout/Footer.tsx`
- `apps/web/index.html`

## 3) Font System

### Imported fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Sora:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
```

### Font roles

- Body sans: `Outfit`
- Display/headings: `Sora`
- Monospace/code: `Fira Code`

### Tailwind mapping

```js
fontFamily: {
  sans: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
  display: ['Sora', 'Outfit', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'Consolas', 'monospace'],
}
```

## 4) Exact Theme Tokens (Light + Dark)

### Root tokens (light)

```css
:root {
  --background: 0 0% 100%;
  --foreground: 20 14% 4%;
  --card: 0 0% 100%;
  --card-foreground: 20 14% 4%;
  --popover: 0 0% 100%;
  --popover-foreground: 20 14% 4%;

  --primary: 38 100% 57%;
  --primary-foreground: 0 0% 100%;

  --secondary: 25 100% 54%;
  --secondary-foreground: 0 0% 100%;

  --muted: 45 100% 97%;
  --muted-foreground: 25 10% 45%;

  --accent: 45 100% 96%;
  --accent-foreground: 20 14% 4%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  --border: 25 35% 91%;
  --input: 25 35% 91%;
  --ring: 38 100% 57%;

  --radius: 0.5rem;

  --site-header-height: 80px;
  --site-header-offset: calc(var(--site-header-height) + 8px);
}
```

### Dark tokens

```css
.dark {
  --background: 12 18% 6%;
  --foreground: 36 33% 96%;
  --card: 12 16% 9%;
  --card-foreground: 36 33% 96%;
  --popover: 12 16% 9%;
  --popover-foreground: 36 33% 96%;

  --primary: 2 68% 52%;
  --primary-foreground: 36 33% 96%;

  --secondary: 18 72% 45%;
  --secondary-foreground: 20 14% 4%;

  --muted: 12 14% 12%;
  --muted-foreground: 28 10% 72%;

  --accent: 12 18% 14%;
  --accent-foreground: 36 33% 96%;

  --destructive: 0 72% 56%;
  --destructive-foreground: 36 33% 96%;

  --border: 18 14% 22%;
  --input: 18 14% 18%;
  --ring: 2 86% 62%;
}
```

### Additional dark palette (rgb tokens)

```css
html.dark {
  --surface-0: 6 7 10;
  --surface-1: 12 13 18;
  --surface-2: 19 20 27;
  --surface-3: 33 35 43;

  --text-1: 244 244 245;
  --text-2: 212 212 216;
  --text-3: 161 161 170;

  --warm-1: 244 244 245;
  --warm-2: 228 228 231;
  --warm-3: 212 212 216;

  --accent-red: 239 68 68;
  --accent-orange: 220 38 38;
  --accent-amber: 194 65 12;
  --border-warm: 63 63 70;
}
```

## 5) Tailwind Extended Color Scale

```js
amber: {
  50: '#FFFBEB',
  100: '#FEF3C7',
  400: '#FBBF24',
  500: '#F59E0B',
  600: '#D97706',
  900: '#78350F',
  950: '#451A03',
},
orange: {
  50: '#FFF7ED',
  500: '#F97316',
  600: '#EA580C',
},
gray: {
  800: '#1F2937',
}
```

## 6) Global Base Styling Rules

### Document and body

- `html` font size uses clamp: `clamp(15px, 0.2vw + 14px, 16px)`.
- Smooth horizontal overflow handling (`overflow-x: clip` on html, `hidden` on body).
- Base antialiasing and legibility tuning.
- Background/foreground from CSS variables.

### Headings

- All headings use display font and heavy tracking-tight.
- Default heading color in light mode: `#78350f`.
- Dark mode heading color mapped to warm light text.

### Content safety

- Images/video/svg always `max-w-full` and `h-auto`.
- Paragraphs/headings use wrap-safe behavior.

## 7) Component-Level Style Recipes

### Primary button

Core button appearance:

```txt
bg-gradient-to-r from-orange-500 to-amber-600 text-white
hover:from-orange-600 hover:to-amber-700
dark:from-red-500 dark:to-amber-500
dark:hover:from-red-400 dark:hover:to-amber-400
rounded-lg h-11 px-5 text-sm
```

Interaction details:

- Transition: `transition-all duration-300`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-ring`
- Active press: `active:scale-[0.98]`

### Outline button

```txt
border-2 border-amber-400 bg-transparent text-amber-900
hover:bg-amber-50
dark:border-zinc-700 dark:text-amber-100 dark:hover:bg-zinc-900
```

### Card

```txt
rounded-xl border border-amber-200 bg-white shadow-md
hover:shadow-lg transition-all duration-300
dark:border-zinc-800 dark:bg-zinc-950
```

### Input

```txt
h-10 rounded-lg border-2 border-amber-200 bg-white text-gray-800
placeholder:text-gray-400
focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20
dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100
```

## 8) Layout and Shell Patterns

### App shell

- Root layout classes:
  - `min-h-screen flex flex-col`
  - `bg-amber-50 text-gray-800`
  - `dark:bg-zinc-950 dark:text-zinc-100`

### Header

- Sticky translucent nav with blur:
  - `sticky top-0 z-50`
  - `border-b border-amber-200`
  - `bg-white/95 backdrop-blur`
  - `dark:border-zinc-800 dark:bg-zinc-950/90`

### Footer

- Strong dark warm block:
  - `bg-amber-950 text-amber-50`
  - `dark:bg-zinc-950 dark:text-zinc-100`

## 9) Section Background Recipes

Use these repeatedly to stay on-theme.

### Light section gradients

- `bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100`
- `bg-gradient-to-b from-amber-50/50 to-white`
- `bg-gradient-to-b from-white via-amber-50/30 to-white`

### Hero (dark dramatic)

- Base: `bg-gradient-to-br from-slate-950 via-amber-950 to-orange-950`
- Add radial overlays in amber/orange with low opacity.
- Use soft blurred orb layers for depth.

### Card highlight gradient

- `bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600`

### Text gradient

- `bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent`

## 10) Dark Mode Mapping Behavior (Important)

This codebase uses a dark remap layer in `index.css` that rewrites many light utility classes in dark mode.

What it does:

- Converts light backgrounds (`bg-white`, `bg-amber-50`, `bg-gray-50`) to dark surfaces.
- Remaps warm text classes (`text-amber-*`) to readable warm light text in dark mode.
- Remaps borders (`border-amber-*`, `border-gray-*`) to dark-compatible border colors.
- Rewrites gradient stops (`from-amber-*`, `to-orange-*`, `via-*`) to red/orange dark accents.
- Tunes hover/focus ring and placeholder colors for dark contrast.

If you want a visually identical clone, keep this remap strategy.

## 11) Utility Classes You Should Recreate

Defined in global css and used across the site:

- `.touch-target` min 44x44 tap targets
- `.no-select` disable text selection for touch UI
- `.safe-area-pb` and `.safe-area-pt` using env safe-area insets
- `.font-display` force display font family
- `.text-balance` balanced heading wrapping
- `.gradient-text` amber to orange clipped text
- `.grain-overlay` subtle film grain pseudo-element
- `.noise-bg` low-opacity procedural noise background
- `.glass` glassmorphism panel style
- `.glass-dark` darker glass panel
- `.no-scrollbar` hide scrollbar visuals
- `.performance-surface` transform/backface optimization
- `.gpu-layer` GPU promotion helper
- `.top-under-header` and `.top-under-header-gap`

## 12) Motion and Interaction Language

- Standard transitions: 200ms to 300ms.
- Buttons and cards use hover elevation + subtle transform.
- Gradients intensify on hover (`from-amber-500` to `from-amber-600` pattern).
- Keep motion reduced for mobile and reduced-motion users.
- Existing css lowers heavy blur and animation intensity on touch/mobile.

## 13) Accessibility and UX Constraints to Preserve

- Keep contrast safe in both modes.
- Keep focus-visible ring treatment on interactive controls.
- Keep minimum touch area (`44px`).
- Keep sticky header offset vars for in-page anchors:
  - `--site-header-height`
  - `--site-header-offset`

## 14) Theme Bootstrapping Behavior

Theme handling behavior to replicate:

- LocalStorage key: `codescriet-theme`
- Class toggle on `document.documentElement`: `dark`
- Set `root.style.colorScheme` to current theme
- Update `<meta name="theme-color">`:
  - light: `#f97316`
  - dark: `#05060a`

## 15) Copy-Ready Minimal Starter (CSS)

Use this as a quick start when building a new site in the same theme.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 20 14% 4%;
  --primary: 38 100% 57%;
  --secondary: 25 100% 54%;
  --border: 25 35% 91%;
  --ring: 38 100% 57%;
  --radius: 0.5rem;
}

.dark {
  --background: 12 18% 6%;
  --foreground: 36 33% 96%;
  --primary: 2 68% 52%;
  --secondary: 18 72% 45%;
  --border: 18 14% 22%;
  --ring: 2 86% 62%;
}

body {
  font-family: 'Outfit', system-ui, sans-serif;
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Sora', 'Outfit', sans-serif;
  color: #78350f;
}

.btn-primary {
  border: 0;
  border-radius: 0.5rem;
  color: white;
  background-image: linear-gradient(to right, #f97316, #d97706);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-image: linear-gradient(to right, #ea580c, #b45309);
}

.card {
  border: 1px solid #fde68a;
  border-radius: 0.75rem;
  background: white;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
}
```

## 16) Agent Implementation Checklist

When cloning this theme, verify all items:

- Fonts loaded: Outfit, Sora, Fira Code.
- Root light/dark tokens copied exactly.
- Amber/orange gradient buttons are default CTA style.
- Card and input borders are warm (`amber-200`) in light mode.
- Header is sticky, translucent, and blurred.
- Footer is deep amber block.
- Dark mode remaps warm palette to red/rose/orange accents.
- Section backgrounds alternate between white and soft amber gradients.
- Utility classes (`glass`, `gradient-text`, `touch-target`) are available.
- Theme key `codescriet-theme` and `meta theme-color` updates implemented.

---

If you need perfect visual parity, copy the full `index.css` remap block and component class strings from the source files listed in Section 2.
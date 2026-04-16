// ═══════════════════════════════════════
// Workshop Structure — 3-Day Curriculum Map
// ═══════════════════════════════════════

export interface DayMeta {
  id: number
  title: string
  subtitle: string
  icon: string
  color: string
  gradient: string
  sections: SectionMeta[]
}

export interface SectionMeta {
  id: string
  title: string
  icon: string
}

export const workshopDays: DayMeta[] = [
  {
    id: 1,
    title: 'Foundations',
    subtitle: 'Types, Memory & First Programs',
    icon: '🚀',
    color: 'amber',
    gradient: 'from-amber to-orange',
    sections: [
      { id: 'day1-welcome', title: 'Welcome & First Program', icon: '👋' },
      { id: 'day1-variables', title: 'Variables & Memory', icon: '📦' },
      { id: 'day1-datatypes', title: 'Data Types & Internals', icon: '🧬' },
      { id: 'day1-operators', title: 'Operators', icon: '➕' },
      { id: 'day1-strings', title: 'Strings & Encoding', icon: '🔤' },
      { id: 'day1-io', title: 'Input & Output', icon: '⌨️' },
      { id: 'day1-errors', title: 'Errors & Debugging', icon: '🐞' },
    ],
  },
  {
    id: 2,
    title: 'Control Flow & Collections',
    subtitle: 'Decisions, Loops, Lists & Tuples',
    icon: '🔀',
    color: 'orange',
    gradient: 'from-orange to-red',
    sections: [
      { id: 'day2-boolean', title: 'Boolean Logic', icon: '🔘' },
      { id: 'day2-conditionals', title: 'Conditionals', icon: '🔀' },
      { id: 'day2-while', title: 'While Loops', icon: '🔄' },
      { id: 'day2-for', title: 'For Loops', icon: '🔁' },
      { id: 'day2-patterns', title: 'Nested Loops & Patterns', icon: '🎨' },
      { id: 'day2-lists', title: 'Lists & Dynamic Arrays', icon: '📋' },
      { id: 'day2-tuples', title: 'Tuples & Immutability', icon: '📎' },
      { id: 'day2-problems', title: 'Classic Problems', icon: '🧠' },
    ],
  },
  {
    id: 3,
    title: 'Advanced Features & OOP',
    subtitle: 'Dicts, Sets, Functions, Generators, Classes',
    icon: '🧩',
    color: 'coral',
    gradient: 'from-red to-amber',
    sections: [
      { id: 'day3-dicts', title: 'Dictionaries & Hash Tables', icon: '📖' },
      { id: 'day3-sets', title: 'Sets & Frozensets', icon: '🎯' },
      { id: 'day3-comprehensions', title: 'Comprehensions', icon: '✨' },
      { id: 'day3-functions', title: 'Functions Basics', icon: '⚡' },
      { id: 'day3-advanced-fn', title: 'Closures & Decorators', icon: '🔧' },
      { id: 'day3-iterators', title: 'Iterators & Generators', icon: '♻️' },
      { id: 'day3-files', title: 'File Handling', icon: '📁' },
      { id: 'day3-oop', title: 'OOP Deep Dive', icon: '🏛️' },
    ],
  },
]

export function getDayByNumber(dayNum: number): DayMeta | undefined {
  return workshopDays.find(d => d.id === dayNum)
}

export function getSectionById(sectionId: string): { day: DayMeta; section: SectionMeta } | undefined {
  for (const day of workshopDays) {
    const section = day.sections.find(s => s.id === sectionId)
    if (section) return { day, section }
  }
  return undefined
}

export function getNextSection(currentId: string): { day: DayMeta; section: SectionMeta } | undefined {
  const allSections = workshopDays.flatMap(d => d.sections.map(s => ({ day: d, section: s })))
  const idx = allSections.findIndex(s => s.section.id === currentId)
  if (idx >= 0 && idx < allSections.length - 1) return allSections[idx + 1]
  return undefined
}

export function getPrevSection(currentId: string): { day: DayMeta; section: SectionMeta } | undefined {
  const allSections = workshopDays.flatMap(d => d.sections.map(s => ({ day: d, section: s })))
  const idx = allSections.findIndex(s => s.section.id === currentId)
  if (idx > 0) return allSections[idx - 1]
  return undefined
}

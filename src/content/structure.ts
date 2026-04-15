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
    subtitle: 'Variables, Types & First Programs',
    icon: '🚀',
    color: 'amber',
    gradient: 'from-amber to-orange',
    sections: [
      { id: 'day1-welcome', title: 'Welcome & First Program', icon: '👋' },
      { id: 'day1-variables', title: 'Variables & Memory', icon: '📦' },
      { id: 'day1-datatypes', title: 'Data Types', icon: '🧬' },
      { id: 'day1-strings', title: 'String Operations', icon: '🔤' },
      { id: 'day1-operators', title: 'Operators', icon: '➕' },
      { id: 'day1-io', title: 'Input & Output', icon: '⌨️' },
    ],
  },
  {
    id: 2,
    title: 'Control Flow',
    subtitle: 'Decisions, Loops & Logic',
    icon: '🔀',
    color: 'orange',
    gradient: 'from-orange to-red',
    sections: [
      { id: 'day2-boolean', title: 'Boolean Logic', icon: '🔘' },
      { id: 'day2-conditionals', title: 'Conditionals', icon: '🔀' },
      { id: 'day2-while', title: 'While Loops', icon: '🔄' },
      { id: 'day2-for', title: 'For Loops', icon: '🔁' },
      { id: 'day2-patterns', title: 'Nested Loops & Patterns', icon: '🎨' },
    ],
  },
  {
    id: 3,
    title: 'Functions, Collections & OOP',
    subtitle: 'Reusable Code, Data Structures & Files',
    icon: '🧩',
    color: 'coral',
    gradient: 'from-red to-amber',
    sections: [
      { id: 'day3-functions', title: 'Functions Basics', icon: '⚡' },
      { id: 'day3-advanced-fn', title: 'Advanced Functions', icon: '🔧' },
      { id: 'day3-lists', title: 'Lists Fundamentals', icon: '📋' },
      { id: 'day3-list-patterns', title: 'List Patterns', icon: '🔍' },
      { id: 'day3-tuples', title: 'Tuples', icon: '📎' },
      { id: 'day4-dicts', title: 'Dictionaries', icon: '📖' },
      { id: 'day4-dict-patterns', title: 'Dictionary Patterns', icon: '🗂️' },
      { id: 'day4-sets', title: 'Sets', icon: '🎯' },
      { id: 'day4-files', title: 'File Handling', icon: '📁' },
      { id: 'day4-oop', title: 'OOP Introduction', icon: '🏛️' },
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

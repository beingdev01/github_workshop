import type { ContentBlock } from '@/types/content'

// Day 1 — Foundations
import { day1Welcome } from './day1/welcome'
import { day1Variables } from './day1/variables'
import { day1DataTypes } from './day1/datatypes'
import { day1Operators } from './day1/operators'
import { day1Strings } from './day1/strings'
import { day1IO } from './day1/io'
import { day1Errors } from './day1/errors'

// Day 2 — Control Flow, Collections & Functions
// Order follows the IITM BS Programming in Python (BSCS1002) syllabus:
// conditionals → loops → collections (lists, dicts, sets, tuples)
// → comprehensions → functions → classic problems.
import { day2Boolean } from './day2/boolean'
import { day2Conditionals } from './day2/conditionals'
import { day2While } from './day2/while'
import { day2For } from './day2/for'
import { day2Lists } from './day2/lists'
import { day2Dicts } from './day2/dicts'
import { day2Sets } from './day2/sets'
import { day2Tuples } from './day2/tuples'
import { day2Comprehensions } from './day2/comprehensions'
import { day2Functions } from './day2/functions'
import { day2Patterns } from './day2/patterns'
import { day2Problems } from './day2/problems'

// Day 3 — Advanced Features & OOP
// Files and modules follow the syllabus (weeks 9–11); OOP, iterators
// and NumPy/Matplotlib close the workshop (week 12: data work).
import { day3AdvancedFn } from './day3/advancedFn'
import { day3Files } from './day3/files'
import { day3Modules } from './day3/modules'
import { day3OOP } from './day3/oop'
import { day3Iterators } from './day3/iterators'
import { day3Numpy } from './day3/numpy'

export const contentMap: Record<string, ContentBlock[]> = {
  // Day 1
  'day1-welcome': day1Welcome,
  'day1-variables': day1Variables,
  'day1-datatypes': day1DataTypes,
  'day1-operators': day1Operators,
  'day1-strings': day1Strings,
  'day1-io': day1IO,
  'day1-errors': day1Errors,

  // Day 2
  'day2-boolean': day2Boolean,
  'day2-conditionals': day2Conditionals,
  'day2-while': day2While,
  'day2-for': day2For,
  'day2-lists': day2Lists,
  'day2-dicts': day2Dicts,
  'day2-sets': day2Sets,
  'day2-tuples': day2Tuples,
  'day2-comprehensions': day2Comprehensions,
  'day2-functions': day2Functions,
  'day2-patterns': day2Patterns,
  'day2-problems': day2Problems,

  // Day 3
  'day3-advanced-fn': day3AdvancedFn,
  'day3-files': day3Files,
  'day3-modules': day3Modules,
  'day3-oop': day3OOP,
  'day3-iterators': day3Iterators,
  'day3-numpy': day3Numpy,
}

export function getSectionContent(sectionId: string): ContentBlock[] | undefined {
  return contentMap[sectionId]
}

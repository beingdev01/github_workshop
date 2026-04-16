import type { ContentBlock } from '@/types/content'

// Day 1 — Foundations
import { day1Welcome } from './day1/welcome'
import { day1Variables } from './day1/variables'
import { day1DataTypes } from './day1/datatypes'
import { day1Operators } from './day1/operators'
import { day1Strings } from './day1/strings'
import { day1IO } from './day1/io'
import { day1Errors } from './day1/errors'

// Day 2 — Control Flow & Collections
import { day2Boolean } from './day2/boolean'
import { day2Conditionals } from './day2/conditionals'
import { day2While } from './day2/while'
import { day2For } from './day2/for'
import { day2Patterns } from './day2/patterns'
import { day2Lists } from './day2/lists'
import { day2Tuples } from './day2/tuples'
import { day2Problems } from './day2/problems'

// Day 3 — Advanced Features & OOP
import { day3Dicts } from './day3/dicts'
import { day3Sets } from './day3/sets'
import { day3Comprehensions } from './day3/comprehensions'
import { day3Functions } from './day3/functions'
import { day3AdvancedFn } from './day3/advancedFn'
import { day3Iterators } from './day3/iterators'
import { day3Files } from './day3/files'
import { day3OOP } from './day3/oop'

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
  'day2-patterns': day2Patterns,
  'day2-lists': day2Lists,
  'day2-tuples': day2Tuples,
  'day2-problems': day2Problems,

  // Day 3
  'day3-dicts': day3Dicts,
  'day3-sets': day3Sets,
  'day3-comprehensions': day3Comprehensions,
  'day3-functions': day3Functions,
  'day3-advanced-fn': day3AdvancedFn,
  'day3-iterators': day3Iterators,
  'day3-files': day3Files,
  'day3-oop': day3OOP,
}

export function getSectionContent(sectionId: string): ContentBlock[] | undefined {
  return contentMap[sectionId]
}

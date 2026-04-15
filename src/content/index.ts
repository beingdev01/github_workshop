import type { ContentBlock } from '@/types/content'

// Day 1
import { day1Welcome } from './day1/welcome'
import { day1Variables } from './day1/variables'
import { day1DataTypes } from './day1/datatypes'
import { day1Strings } from './day1/strings'
import { day1Operators } from './day1/operators'
import { day1IO } from './day1/io'

// Day 2
import { day2Boolean } from './day2/boolean'
import { day2Conditionals } from './day2/conditionals'
import { day2While } from './day2/while'
import { day2For } from './day2/for'
import { day2Patterns } from './day2/patterns'

// Day 3
import { day3Functions } from './day3/functions'
import { day3AdvancedFn } from './day3/advancedFn'
import { day3Lists } from './day3/lists'
import { day3ListPatterns } from './day3/listPatterns'
import { day3Tuples } from './day3/tuples'

// Day 4
import { day4Dicts } from './day4/dicts'
import { day4DictPatterns } from './day4/dictPatterns'
import { day4Sets } from './day4/sets'
import { day4Files } from './day4/files'
import { day4OOP } from './day4/oop'

export const contentMap: Record<string, ContentBlock[]> = {
  // Day 1
  'day1-welcome': day1Welcome,
  'day1-variables': day1Variables,
  'day1-datatypes': day1DataTypes,
  'day1-strings': day1Strings,
  'day1-operators': day1Operators,
  'day1-io': day1IO,

  // Day 2
  'day2-boolean': day2Boolean,
  'day2-conditionals': day2Conditionals,
  'day2-while': day2While,
  'day2-for': day2For,
  'day2-patterns': day2Patterns,

  // Day 3
  'day3-functions': day3Functions,
  'day3-advanced-fn': day3AdvancedFn,
  'day3-lists': day3Lists,
  'day3-list-patterns': day3ListPatterns,
  'day3-tuples': day3Tuples,

  // Day 4
  'day4-dicts': day4Dicts,
  'day4-dict-patterns': day4DictPatterns,
  'day4-sets': day4Sets,
  'day4-files': day4Files,
  'day4-oop': day4OOP,
}

export function getSectionContent(sectionId: string): ContentBlock[] | undefined {
  return contentMap[sectionId]
}

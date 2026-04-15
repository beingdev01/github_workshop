export interface ResourceCategory {
  id: string
  title: string
  icon: string
  description: string
  resources: Resource[]
}

export interface Resource {
  title: string
  url: string
  description: string
  tag: string
  tagColor: string
}

export const resourceData: ResourceCategory[] = [
  {
    id: 'official',
    title: 'Official Documentation',
    icon: '📖',
    description: 'The definitive Python references',
    resources: [
      { title: 'Python.org', url: 'https://www.python.org', description: 'Official Python website — downloads, docs, and community', tag: 'Official', tagColor: 'sky' },
      { title: 'Python Docs', url: 'https://docs.python.org/3/', description: 'Complete Python 3 documentation with tutorials and library reference', tag: 'Docs', tagColor: 'sky' },
      { title: 'PEP 8 Style Guide', url: 'https://peps.python.org/pep-0008/', description: 'The official style guide for writing clean, readable Python code', tag: 'Style', tagColor: 'sky' },
      { title: 'Python Tutorial', url: 'https://docs.python.org/3/tutorial/', description: 'The official beginner-friendly Python tutorial', tag: 'Tutorial', tagColor: 'mint' },
    ],
  },
  {
    id: 'practice',
    title: 'Practice Platforms',
    icon: '🏋️',
    description: 'Sharpen your skills with hands-on challenges',
    resources: [
      { title: 'LeetCode', url: 'https://leetcode.com', description: 'Algorithm and data structure problems used by top tech companies', tag: 'Challenges', tagColor: 'amber' },
      { title: 'HackerRank', url: 'https://www.hackerrank.com/domains/python', description: 'Python practice problems from easy to expert, with built-in editor', tag: 'Challenges', tagColor: 'amber' },
      { title: 'Codewars', url: 'https://www.codewars.com', description: 'Community-driven coding katas with a martial arts ranking system', tag: 'Challenges', tagColor: 'amber' },
      { title: 'Exercism (Python)', url: 'https://exercism.org/tracks/python', description: 'Mentored learning with 140+ exercises and community feedback', tag: 'Mentored', tagColor: 'mint' },
      { title: 'Project Euler', url: 'https://projecteuler.net', description: 'Mathematical/computational problems that require programming', tag: 'Math', tagColor: 'lavender' },
    ],
  },
  {
    id: 'tutorials',
    title: 'Tutorials & Courses',
    icon: '🎓',
    description: 'Structured learning paths and video courses',
    resources: [
      { title: 'Real Python', url: 'https://realpython.com', description: 'High-quality tutorials, guides, and learning paths for all levels', tag: 'Articles', tagColor: 'mint' },
      { title: 'freeCodeCamp Python', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', description: 'Free interactive Python curriculum with certification', tag: 'Free', tagColor: 'mint' },
      { title: 'Automate the Boring Stuff', url: 'https://automatetheboringstuff.com', description: 'Practical programming for total beginners — free online book', tag: 'Book', tagColor: 'lavender' },
      { title: 'CS50 Python', url: 'https://cs50.harvard.edu/python/', description: "Harvard's Introduction to Programming with Python", tag: 'Course', tagColor: 'sky' },
      { title: 'Corey Schafer (YouTube)', url: 'https://www.youtube.com/user/schaaborern/playlists', description: 'Excellent Python video tutorials covering fundamentals to advanced topics', tag: 'Video', tagColor: 'coral' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    icon: '🛠️',
    description: 'Essential tools for Python development',
    resources: [
      { title: 'VS Code', url: 'https://code.visualstudio.com', description: 'Free, powerful editor with excellent Python extension support', tag: 'Editor', tagColor: 'sky' },
      { title: 'PyCharm Community', url: 'https://www.jetbrains.com/pycharm/download/', description: 'Full-featured Python IDE with smart code completion and debugging', tag: 'IDE', tagColor: 'sky' },
      { title: 'Python Tutor', url: 'https://pythontutor.com', description: 'Visualize code execution step-by-step — perfect for understanding flow', tag: 'Visualizer', tagColor: 'mint' },
      { title: 'Repl.it', url: 'https://replit.com', description: 'Browser-based IDE — code, run, and share Python projects instantly', tag: 'Online', tagColor: 'amber' },
      { title: 'Jupyter Notebooks', url: 'https://jupyter.org', description: 'Interactive notebooks for data exploration and learning', tag: 'Notebook', tagColor: 'lavender' },
    ],
  },
  {
    id: 'community',
    title: 'Community & Help',
    icon: '🤝',
    description: 'Get help and connect with other learners',
    resources: [
      { title: 'Stack Overflow (Python)', url: 'https://stackoverflow.com/questions/tagged/python', description: 'Q&A community — search millions of answered Python questions', tag: 'Q&A', tagColor: 'amber' },
      { title: 'r/learnpython', url: 'https://www.reddit.com/r/learnpython/', description: 'Friendly Reddit community dedicated to learning Python', tag: 'Forum', tagColor: 'coral' },
      { title: 'Python Discord', url: 'https://www.pythondiscord.com', description: 'Active Discord server with help channels and community events', tag: 'Chat', tagColor: 'lavender' },
      { title: 'GitHub', url: 'https://github.com', description: 'Host your code, contribute to open source, and explore Python projects', tag: 'Code', tagColor: 'mint' },
    ],
  },
]

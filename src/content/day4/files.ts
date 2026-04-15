import type { ContentBlock } from '@/types/content'

export const day4Files: ContentBlock[] = [
  // ═══════════════════════════════════════
  // Section 1: Introduction
  // ═══════════════════════════════════════
  { type: 'heading', level: 1, text: 'File Handling in Python' },
  {
    type: 'text',
    content: 'Files are how programs persist data beyond a single run. Python makes file I/O remarkably simple. You\'ll learn to read from and write to text files, handle CSV data, work with file paths, and always use the **context manager** pattern (`with` statement) to handle resources safely. Note: In this browser-based environment, file operations are simulated — but the concepts apply directly to real Python.',
  },

  // ═══════════════════════════════════════
  // Section 2: Opening & Reading Files
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Opening Files — The with Statement' },
  {
    type: 'code',
    code: '# The CORRECT way — with statement (context manager)\n# Automatically closes the file, even if an error occurs\nwith open("example.txt", "r") as f:\n    content = f.read()\n    print(content)\n# File is automatically closed here\n\n# DON\'T do this (file might not get closed on error):\n# f = open("example.txt", "r")\n# content = f.read()\n# f.close()  # What if an error occurs before this line?\n\n# File modes:\n# "r"  — Read (default). File must exist.\n# "w"  — Write. Creates file or OVERWRITES existing.\n# "a"  — Append. Creates file or adds to end.\n# "x"  — Exclusive create. Fails if file exists.\n# "r+" — Read and write.\n# "b"  — Binary mode (add to above: "rb", "wb")',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'danger',
    title: 'Mode "w" Destroys Data!',
    content: 'Opening a file with mode `"w"` ERASES ALL EXISTING CONTENT immediately. If you want to add to a file, use `"a"` (append). If you want to be safe, use `"x"` (exclusive create) which fails if the file already exists.',
  },

  // ═══════════════════════════════════════
  // Section 3: Reading Methods
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Reading Methods' },
  {
    type: 'code',
    code: '# Assume data.txt contains:\n# Line 1: Hello World\n# Line 2: Python is great\n# Line 3: File handling\n\n# METHOD 1: .read() — entire file as one string\nwith open("data.txt", "r") as f:\n    content = f.read()  # "Line 1: Hello World\\nLine 2:..."\n    print(content)\n\n# METHOD 2: .readline() — one line at a time\nwith open("data.txt", "r") as f:\n    first = f.readline()   # "Line 1: Hello World\\n"\n    second = f.readline()  # "Line 2: Python is great\\n"\n    print(first.strip())   # .strip() removes \\n\n    print(second.strip())\n\n# METHOD 3: .readlines() — list of all lines\nwith open("data.txt", "r") as f:\n    lines = f.readlines()  # ["Line 1:...\\n", "Line 2:...\\n", ...]\n    for line in lines:\n        print(line.strip())\n\n# METHOD 4: Iterate directly (BEST for large files)\nwith open("data.txt", "r") as f:\n    for line in f:  # Memory-efficient — reads one line at a time\n        print(line.strip())\n\n# METHOD 5: Read with encoding\nwith open("data.txt", "r", encoding="utf-8") as f:\n    content = f.read()',
    language: 'python',
  },
  {
    type: 'callout',
    variant: 'tip',
    title: 'Which Read Method?',
    content: '**Small files**: `.read()` or `.readlines()` — load everything into memory.\n**Large files**: Iterate with `for line in f:` — processes one line at a time, memory-efficient.\n**Binary files**: Use `"rb"` mode and `.read(size)` to read chunks.',
  },

  // ═══════════════════════════════════════
  // Section 4: Writing Files
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Writing to Files' },
  {
    type: 'code',
    code: '# Write a new file (creates or overwrites)\nwith open("output.txt", "w") as f:\n    f.write("Hello, World!\\n")\n    f.write("Python file handling.\\n")\n    f.write(f"The answer is {42}\\n")\n\n# Write multiple lines at once\nlines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]\nwith open("output.txt", "w") as f:\n    f.writelines(lines)  # Does NOT add newlines automatically!\n\n# Append to existing file\nwith open("log.txt", "a") as f:\n    f.write("New log entry\\n")  # Added to end\n\n# print() to a file\nwith open("output.txt", "w") as f:\n    print("Name:", "Alice", file=f)    # Uses print\'s formatting\n    print("Age:", 20, file=f)\n    print("Score:", 95.5, file=f)\n\n# Practical: save a list of numbers\nnumbers = [10, 20, 30, 40, 50]\nwith open("numbers.txt", "w") as f:\n    for num in numbers:\n        f.write(f"{num}\\n")\n\n# Read them back\nwith open("numbers.txt", "r") as f:\n    loaded = [int(line.strip()) for line in f]\n    print(loaded)  # [10, 20, 30, 40, 50]',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 5: CSV Data
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Working with CSV Data' },
  {
    type: 'code',
    code: '# CSV (Comma-Separated Values) — the universal data format\n# Manual parsing\ncsv_data = """name,age,grade\nAlice,20,A\nBob,19,B+\nCharlie,21,A-"""\n\nlines = csv_data.strip().split("\\n")\nheaders = lines[0].split(",")\nstudents = []\nfor line in lines[1:]:\n    values = line.split(",")\n    student = dict(zip(headers, values))\n    students.append(student)\n\nfor s in students:\n    print(f"  {s[\'name\']}: age {s[\'age\']}, grade {s[\'grade\']}")\n\n# Using the csv module (handles edge cases like commas in values)\nimport csv\nimport io\n\n# Reading CSV\ncsv_text = \'name,score\\nAlice,92\\nBob,85\\nCharlie,78\'\nreader = csv.DictReader(io.StringIO(csv_text))\nfor row in reader:\n    print(f"  {row[\'name\']}: {row[\'score\']}")\n\n# Writing CSV to a string\noutput = io.StringIO()\nwriter = csv.writer(output)\nwriter.writerow(["name", "score", "grade"])  # Header\nwriter.writerow(["Alice", 92, "A"])\nwriter.writerow(["Bob", 85, "B+"])\nprint("\\nCSV output:")\nprint(output.getvalue())',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 6: String as File (StringIO)
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'StringIO — Files in Memory' },
  {
    type: 'code',
    code: 'import io\n\n# StringIO acts like a file but lives in memory\n# Perfect for testing or processing text as if it were a file\n\n# Writing to StringIO\nbuffer = io.StringIO()\nbuffer.write("Line 1\\n")\nbuffer.write("Line 2\\n")\nbuffer.write("Line 3\\n")\n\n# Read back\nbuffer.seek(0)  # Go back to the beginning\ncontent = buffer.read()\nprint(content)\n\n# Use with functions that expect files\ndef process_file(f):\n    """Works with real files OR StringIO"""\n    total = 0\n    for line in f:\n        try:\n            total += int(line.strip())\n        except ValueError:\n            pass\n    return total\n\n# Test without creating a real file!\ntest_data = io.StringIO("10\\n20\\n30\\nhello\\n40\\n")\nresult = process_file(test_data)\nprint(f"Sum: {result}")  # 100\n\n# Great for unit testing file-processing functions!',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 7: Error Handling
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'File Error Handling' },
  {
    type: 'code',
    code: '# Common file errors\nimport os\n\n# FileNotFoundError\ntry:\n    with open("nonexistent.txt", "r") as f:\n        content = f.read()\nexcept FileNotFoundError:\n    print("File not found!")\n\n# PermissionError\ntry:\n    with open("/etc/passwd", "w") as f:  # No write permission\n        f.write("hacked")\nexcept PermissionError:\n    print("Permission denied!")\nexcept FileNotFoundError:\n    print("File not found (expected in browser)")\n\n# IsADirectoryError\ntry:\n    with open("/tmp", "r") as f:\n        pass\nexcept (IsADirectoryError, FileNotFoundError):\n    print("Cannot read a directory as a file!")\n\n# Safe file reading pattern\ndef safe_read(filename, default=""):\n    try:\n        with open(filename, "r") as f:\n            return f.read()\n    except FileNotFoundError:\n        return default\n    except PermissionError:\n        return default\n\ncontent = safe_read("config.txt", default="{}")\nprint(f"Content: {content}")',
    language: 'python',
  },

  // ═══════════════════════════════════════
  // Section 8: Playground
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Try It Yourself' },
  {
    type: 'playground',
    defaultCode: 'import io\nimport csv\n\n# Since we\'re in a browser, we\'ll use StringIO to simulate files\n\n# 1. Write and read a "file"\nf = io.StringIO()\nf.write("Shopping List:\\n")\nitems = ["Apples", "Bread", "Milk", "Eggs", "Cheese"]\nfor i, item in enumerate(items, 1):\n    f.write(f"  {i}. {item}\\n")\n\nf.seek(0)\nprint(f.read())\n\n# 2. CSV processing\ncsv_data = """product,price,quantity\nApple,1.50,10\nBread,2.99,5\nMilk,3.49,8\nEggs,4.99,3"""\n\nprint("Inventory Report:")\nprint("-" * 40)\ntotal = 0\nreader = csv.DictReader(io.StringIO(csv_data))\nfor row in reader:\n    value = float(row["price"]) * int(row["quantity"])\n    total += value\n    print(f"  {row[\'product\']:10} ${float(row[\'price\']):6.2f} x {row[\'quantity\']:>3} = ${value:7.2f}")\nprint("-" * 40)\nprint(f"  {\'Total\':10} {\'\':<14} ${total:7.2f}")\n\n# 3. Log file simulation\nlog = io.StringIO()\ndef log_event(message, level="INFO"):\n    log.write(f"[{level}] {message}\\n")\n\nlog_event("Application started")\nlog_event("Processing data")\nlog_event("Invalid input detected", "WARNING")\nlog_event("Data saved successfully")\nlog_event("Application stopped")\n\nlog.seek(0)\nprint("\\nLog File:")\nfor line in log:\n    print(f"  {line.strip()}")',
    instructions: 'Practice file operations using StringIO. Try building a CSV processor or log file system.',
  },

  // ═══════════════════════════════════════
  // Section 9: Quiz
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Knowledge Check' },
  

  // ═══════════════════════════════════════
  // Section 10: Challenge
  // ═══════════════════════════════════════
  { type: 'heading', level: 2, text: 'Coding Challenge' },
  
]

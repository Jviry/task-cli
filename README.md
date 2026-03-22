# Task Tracker CLI

**Task Tracker CLI** is a simple command-line application to track and manage your tasks.  
I built this project following the recommendations from [roadmap.sh](https://roadmap.sh/) to improve my backend development skills.  
It allows you to manage tasks that are **to-do**, **in-progress**, or **done**—all from your terminal.

---

## Features

- Add, update, and delete tasks
- Mark a task as **in-progress** or **done**
- List all tasks or filter by status (`todo`, `in-progress`, `done`)
- Stores tasks in a JSON file (`tasks.json`) in the current directory
- Handles errors and edge cases gracefully

---

## Task Properties

| Property      | Description |
|---------------|-------------|
| `id`         | Unique identifier for the task |
| `description`| Short description of the task |
| `status`     | Task status: `todo`, `in-progress`, `done` |
| `createdAt`  | Timestamp when the task was created |
| `updatedAt`  | Timestamp when the task was last updated |

---

## Installation & Setup

### Requirements

- **Node.js** (v14+ recommended)  
- **npm** (comes with Node.js)

Check if Node.js and npm are installed:

```bash
node -v
npm -v
```
If there is none
Then do install npm

## Make CLI Global

1. Add the following to your `package.json`:

```json
"bin": {
  "task-cli": "./index.js"
}
```
2. Link the package globally:

```bash
npm link
```

3. Make sure npm global binaries are in your PATH (for zsh, add to ~/.zshrc):
```bash
export PATH="$PATH:$(npm bin -g)"
source ~/.zshrc
```
## USAGE
```bash
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```

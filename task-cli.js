import fs from "fs";

// 1. LOAD TASKS
function loadTasks() {
  if (!fs.existsSync("tasks.json")) {
    fs.writeFileSync("tasks.json", "[]");
  }

  const data = fs.readFileSync("tasks.json", "utf-8");
  return JSON.parse(data);
}

// 2. SAVE TASKS
function saveTasks(tasks) {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

function addTask(description){
  const tasks = loadTasks();

  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: "todo",
    date_added: new Date(),
    date_updated: new Date()
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log(`Task added successfully! (ID: ${newTask.id})`); 
}

const args = process.argv;
const command = args[2];
const input = args[3];

if(command === "add"){
  addTask(input);
}

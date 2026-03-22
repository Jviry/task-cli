#!/usr/bin/env node
import fs from "fs";

//  LOAD TASKS
function loadTasks() {
  if (!fs.existsSync("tasks.json")) {
    fs.writeFileSync("tasks.json", "[]");
  }

  const data = fs.readFileSync("tasks.json", "utf-8");
  return JSON.parse(data);
}

//  SAVE TASKS
function saveTasks(tasks) {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

function addTask(description){
  const tasks = loadTasks();

  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: "To Do",
    date_added: new Date().toISOString(),
    date_updated: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log(`Task added successfully! (ID: ${newTask.id})`); 
}

function listTask(){
  const tasks = loadTasks();
  console.table(tasks);
}

function listTaskInProgress(){
  const tasks = loadTasks();
  const tasksInProgress = tasks.filter((task) => task.status === "In Progress");
  
  console.table(tasksInProgress);
}

function listDone(){
  const tasks = loadTasks();
  const tasksDone = tasks.filter((task) => task.status === "Done");
  
  console.table(tasksDone);
}

function listToDo(){
  const tasks = loadTasks();
  const tasksToDo = tasks.filter((task) => task.status === "To Do");
  
  console.table(tasksToDo);
}

function updateTask(id, updatedDescription){
  const tasks = loadTasks();
  
  tasks.forEach((task) => {
    if(task.id == id){
      const key = task;
      key.description = updatedDescription;
      task = key;
      task.date_updated = new Date().toISOString();
    } 
  });

  saveTasks(tasks);
}

function markInProgressTask(id){
  const tasks = loadTasks();
  
  tasks.forEach((task) => {
    if(task.id == id){
      task.status = "In Progress";
      task.date_updated = new Date().toISOString();
    } 
  });

  saveTasks(tasks);
}

function markDone(id){
  const tasks = loadTasks();
  
  tasks.forEach((task) => {
    if(task.id == id){
      task.status = "Done";
      task.date_updated = new Date().toISOString();
    } 
  });

  saveTasks(tasks);
}

function deleteTask(id){
  const tasks = loadTasks();
  
  const newTasks = tasks.filter((task) => task.id != id);

  saveTasks(newTasks);
}



const args = process.argv;
const command = args[2];
const input = args[3];
const input2 = args[4];

if(command === "add"){
  addTask(input);
}

if(command === "list"){
  if(input === "in-progress"){
    listTaskInProgress();
  }else if(input === "done"){
    listDone();
  }else if(input === "todo"){
    listToDo();
  }else{
    listTask();
  }
}

if(command === "update"){
  updateTask(input, input2);
}

if(command === "delete"){
  deleteTask(input);
}

if(command === "mark-in-progress"){
  markInProgressTask(input);
}

if(command === "mark-done"){
  markDone(input);
}





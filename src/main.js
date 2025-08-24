import { applyTheme, toggleTheme, savedTheme } from "./darkMood.js";
import {
  clearCompleted,
  click,
  filterBtns,
  themeToggle,
  todoInput,
  todoList,
} from "./element.js";
import { loadTasksFromLocalStorage } from "./localStorge.js";
import { render, addTodo, setCurrentFilter } from "./app.js";
import {
  initDragAndDrop
} from "./dragDrop.js";

let tasks = loadTasksFromLocalStorage();

function handleAddTodo() {
  tasks = addTodo(tasks, todoInput.value);
  todoInput.value = "";
  render(tasks);
}

function handleTaskAction(e) {
    const parentLi = e.target.closest("li");
    if (!parentLi) return;

    const todoId = Number(parentLi.dataset.id);
    const task = tasks.find((t) => t.id === todoId);
    if (!task) return;

    if (e.target.classList.contains("circle") || e.target.classList.contains("task-text")) {
        task.completed = !task.completed;
        render(tasks);
    }

    if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter((t) => t.id !== todoId);
        render(tasks);
    }
}

// Initial render on page load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(savedTheme);
  render(tasks);
});

// Theme switcher
themeToggle.addEventListener("click", () => {
  toggleTheme();
});

// Add a new todo
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleAddTodo();
  }
});
click.addEventListener("click", handleAddTodo);

// Complete, Delete, or handle keydown on a todo
todoList.addEventListener("click", handleTaskAction);
todoList.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        handleTaskAction(e);
    }
});

// Clear all completed todos
clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  render(tasks);
});

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    setCurrentFilter(e.target.dataset.filter);
    render(tasks);
  });
});

// Drag and drop
initDragAndDrop(todoList, tasks, render);

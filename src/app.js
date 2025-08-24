import { saveTasksToLocalStorage } from "./localStorge.js";
import { itemCount, filterBtns, todoList } from "./element.js";

let currentFilter = "all";

/**
 * Renders the entire application.
 * @param {Array} tasks The array of tasks.
 */
export function render(tasks) {
  updateItemsLeft(tasks);
  applyFilter(tasks, currentFilter);
  updateActiveFilterButton(currentFilter);
  saveTasksToLocalStorage(tasks);
}

/**
 * Updates the number of items left.
 * @param {Array} tasks The array of tasks.
 */
function updateItemsLeft(tasks) {
  const activeTasks = tasks.filter((task) => !task.completed).length;
  itemCount.textContent = `${activeTasks} items left`;
}

/**
 * Filters and renders the todos list.
 * @param {Array} tasks The array of tasks.
 * @param {string} filter The current filter.
 */
function applyFilter(tasks, filter) {
  let tasksToRender = tasks;
  if (filter === "active") {
    tasksToRender = tasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    tasksToRender = tasks.filter((task) => task.completed);
  }
  renderTodos(tasksToRender);
}

/**
 * Updates which filter button is active.
 * @param {string} filter The current filter.
 */
function updateActiveFilterButton(filter) {
  filterBtns.forEach((btn) => {
    if (btn.dataset.filter === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

/**
 * Renders the todos to the list.
 * @param {Array} todos The array of todos to render.
 */
function renderTodos(todos) {
  todoList.innerHTML = todos.map(todo => `
    <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}" draggable="true">
      <div class="task-content">
        <div class="circle" tabindex="0"></div>
        <p class="task-text">${todo.text}</p>
      </div>
      <img src="images/icon-cross.svg" class="delete-btn" alt="Delete task" tabindex="0">
    </li>
  `).join('');
}

/**
 * Adds a new todo to the tasks array.
 * @param {Array} tasks The array of tasks.
 * @param {string} text The text of the new todo.
 * @returns {Array} The updated array of tasks.
 */
export function addTodo(tasks, text) {
    if (text.trim() !== "") {
        return [...tasks, { id: Date.now(), text: text.trim(), completed: false }];
    }
    return tasks;
}

/**
 * Sets the current filter.
 * @param {string} filter The filter to set.
 */
export function setCurrentFilter(filter) {
    currentFilter = filter;
}

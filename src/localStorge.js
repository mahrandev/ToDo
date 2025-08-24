// The key for storing tasks in local storage.
const STORAGE_KEY = 'todo-tasks';

/**
 * Saves the tasks to local storage.
 * @param {Array} tasks The tasks to save.
 */
export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Loads the tasks from local storage.
 * @returns {Array} The loaded tasks.
 */
export function loadTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem(STORAGE_KEY);
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

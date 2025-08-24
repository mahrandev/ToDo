export function createTodoElement(text) {
  return {
    id: Date.now(),
    text: text,
    completed: false,
  };
}

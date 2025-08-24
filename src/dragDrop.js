export function initDragAndDrop(todoList, tasks, render) {
  let draggedTaskId = null;

  function handleDragStart(e) {
    e.target.classList.add("dragging");
    draggedTaskId = Number(e.target.dataset.id);
  }

  function handleDragEnd(e) {
    e.target.classList.remove("dragging");
  }

  function handleDragOver(e) {
    e.preventDefault();
    const afterElement = getDragAfterElement(todoList, e.clientY);
    const currentlyDragged = document.querySelector(".dragging");
    if (afterElement == null) {
      todoList.appendChild(currentlyDragged);
    } else {
      todoList.insertBefore(currentlyDragged, afterElement);
    }
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".todo-item:not(.dragging)")];

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  function handleDrop(e) {
    e.preventDefault();
    const droppedOnTaskId = Number(e.target.closest("li").dataset.id);
    const draggedTaskIndex = tasks.findIndex((t) => t.id === draggedTaskId);
    const droppedOnTaskIndex = tasks.findIndex((t) => t.id === droppedOnTaskId);

    const [draggedTask] = tasks.splice(draggedTaskIndex, 1);
    tasks.splice(droppedOnTaskIndex, 0, draggedTask);

    render(tasks);
  }

  todoList.addEventListener("dragstart", handleDragStart);
  todoList.addEventListener("dragend", handleDragEnd);
  todoList.addEventListener("dragover", handleDragOver);
  todoList.addEventListener("drop", handleDrop);
}
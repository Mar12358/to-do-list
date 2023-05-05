export const addCheckboxListenerOnLoad = (checkboxes, array) => {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const text = checkbox.nextElementSibling;
      text.classList.toggle('line-through');
      array[parseInt(text.id, 10) - 1].completed = !array[parseInt(text.id, 10) - 1].completed;
      localStorage.setItem('tasks', JSON.stringify(array));

      // arrayOfTasks[parseInt(textTask.id)].compl
    });
  });
};

export const clearCompleted = (arrayOfTasks) => {
  const incompleteTasks = arrayOfTasks.filter((task) => task.completed !== true);
  for (let i = 0; i < incompleteTasks.length; i += 1) {
    incompleteTasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(incompleteTasks));
  window.location.reload(true);
};
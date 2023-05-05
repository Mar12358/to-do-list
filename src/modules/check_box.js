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


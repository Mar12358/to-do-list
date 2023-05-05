const addCheckboxListenerOnLoad = () => {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const textTask = checkbox.nextElementSibling;
      textTask.classList.toggle('line-through');
    });
  });
};

export default addCheckboxListenerOnLoad;
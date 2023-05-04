import menuImgSrc from '../menu.png';
import enterImgSrc from '../enter.png';
import refreshImgSrc from '../refresh.png';

export const createFrame = () => {
  const h1Container = document.querySelector('.h1-container');
  const refreshImg = document.createElement('img');
  const container = document.querySelector('.to-do-list');
  refreshImg.src = refreshImgSrc;
  refreshImg.className = 'refresh-img';
  h1Container.appendChild(refreshImg);
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.className = 'add-task-input';
  input.type = 'text';
  input.name = 'description';
  input.placeholder = 'Add to your list...';
  const inputLine = document.createElement('div');
  inputLine.className = 'input-line';
  inputLine.appendChild(input);
  const enterImg = document.createElement('img');
  enterImg.src = enterImgSrc;
  enterImg.className = 'enter-img';

  inputLine.appendChild(enterImg);
  form.appendChild(inputLine);
  container.appendChild(form);
};

export const addTaskToHTML = (task) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  const content = document.createElement('div');
  content.className = 'content';
  content.appendChild(checkBox);
  checkBox.checked = task.completed;
  const inp = document.createElement('input');
  inp.value = task.description;
  inp.type = 'text';
  inp.id = task.index.toString();
  inp.classList = ('added-task uneditable');
  content.appendChild(inp);
  li.appendChild(content);
  const menuImg = document.createElement('img');
  menuImg.src = menuImgSrc;
  menuImg.className = 'menu-img';
  li.appendChild(menuImg);
  ul.appendChild(li);
};
export const addLocalStorage = () => {
  const ul = document.createElement('ul');
  const arrayOfTasks = [];
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < storedTasks.length; i += 1) {
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const content = document.createElement('div');
    content.className = 'content';
    content.appendChild(checkBox);
    checkBox.checked = storedTasks[i].completed;
    const inp = document.createElement('input');
    inp.value = storedTasks[i].description;
    inp.type = 'text';
    inp.classList = ('added-task uneditable');
    inp.setAttribute('readonly', true);
    storedTasks[i].index = i + 1;
    inp.id = storedTasks[i].index.toString();
    content.appendChild(inp);
    li.appendChild(content);
    const menuImg = document.createElement('img');
    menuImg.src = menuImgSrc;
    menuImg.className = 'menu-img';
    li.appendChild(menuImg);

    ul.appendChild(li);
    arrayOfTasks.push(storedTasks[i]);
  }
  return { ul, arrayOfTasks };
};

export const Task = {
  create(description, index) {
    const task = Object.create(this);
    task.description = description;
    task.completed = false;
    task.index = index;
    return task;
  },
};
const updateObject = () => {

};

const updateLocalStorage = (id, value, completed) => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  const taskToEdit = storedTasks.find((task) => task.index === id);
  if (taskToEdit) {
    taskToEdit.description = value;
    taskToEdit.completed = completed;
  }
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
};

export const editTask = (clickedElement, array) => {
  const li = clickedElement;
  const input = li.querySelector('.added-task');
  li.classList.add('focused-li');
  input.removeAttribute('readonly');
  input.classList.add('on-focus');
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);

  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && input.value !== '') {
      input.setAttribute('readonly', true);
      li.classList.remove('focused-li');
      const id = parseInt(input.id, 10);
      updateObject(id, input.value);
      updateLocalStorage(id, input.value, input.completed);
      array[id - 1].description = input.value;
      console.log(array);
      input.removeEventListener('keydown', handleEnterKey);
    }
  };
  input.addEventListener('keydown', handleEnterKey);
};
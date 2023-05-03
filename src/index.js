import './style.css';
import menuImgSrc from './menu.png';
import enterImgSrc from './enter.png';
import refreshImgSrc from './refresh.png';

const body = document.getElementsByTagName('body')[0];
const container = document.querySelector('.to-do-list');

const h1Container = document.querySelector('.h1-container');
const refreshImg = document.createElement('img');
refreshImg.src = refreshImgSrc;
refreshImg.className = 'refresh-img';
h1Container.appendChild(refreshImg);
const form = document.createElement('form');
const input = document.createElement('input');
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

const arryOfTasks = [];

const Task = {
  create(description, index) {
    const task = Object.create(this);
    task.description = description;
    task.completed = false;
    task.index = index;
    return task;
  },
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    e.preventDefault();
    const task = Task.create(input.value, arryOfTasks.length);
    arryOfTasks.push(task);
    input.value = '';
    localStorage.setItem('tasks', JSON.stringify(arryOfTasks));
  }
});

const ul = document.createElement('ul');

if (localStorage.length !== 0) {
  document.addEventListener('DOMContentLoaded', () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < storedTasks.length; i += 1) {
      const li = document.createElement('li');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      const content = document.createElement('div');
      content.className = 'content';
      content.appendChild(checkBox);
      checkBox.checked = storedTasks[i].completed;
      const p = document.createElement('p');
      p.innerHTML = storedTasks[i].description;
      storedTasks[i].index = i + 1;
      content.appendChild(p);
      li.appendChild(content);
      const menuImg = document.createElement('img');
      menuImg.src = menuImgSrc;
      menuImg.classList = 'menu-img';
      li.appendChild(menuImg);

      ul.appendChild(li);
      arryOfTasks.push(storedTasks[i]);
    }
    container.appendChild(ul);
  });
  const clearButton = document.createElement('button');
  clearButton.className = 'clear-btn';
  clearButton.innerHTML = 'Clear all completed';
  body.appendChild(clearButton);
}

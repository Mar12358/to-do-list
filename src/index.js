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

const ul = document.createElement('ul');

document.addEventListener('DOMContentLoaded', () => {
  const task1 = Task.create('To-Do Task 1', 1);
  const task2 = Task.create('To-Do Task 2', 2);
  const task3 = Task.create('To-Do Task 3', 3);
  arryOfTasks.push(task1);
  arryOfTasks.push(task2);
  arryOfTasks.push(task3);
  if (arryOfTasks.length !== 0) {
    for (let i = 0; i < arryOfTasks.length; i += 1) {
      const li = document.createElement('li');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      const content = document.createElement('div');
      content.className = 'content';
      content.appendChild(checkBox);
      checkBox.checked = arryOfTasks[i].completed;
      const p = document.createElement('p');
      p.innerHTML = arryOfTasks[i].description;
      arryOfTasks[i].index = i + 1;
      content.appendChild(p);
      li.appendChild(content);
      const menuImg = document.createElement('img');
      menuImg.src = menuImgSrc;
      menuImg.classList = 'menu-img';
      li.appendChild(menuImg);

      ul.appendChild(li);
    }
    container.appendChild(ul);
  }
});
const clearButton = document.createElement('button');
clearButton.className = 'clear-btn';
clearButton.innerHTML = 'Clear all completed';
body.appendChild(clearButton);

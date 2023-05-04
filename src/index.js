import './style.css';

import enterImgSrc from './enter.png';
import refreshImgSrc from './refresh.png';
/* import addText from './modules/functions.js'; */
import addLocalStorage from './modules/functions.js';

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

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length !== 0) {
    const { ul, arrayOfTasks: localStorageArray } = addLocalStorage();
    container.appendChild(ul);
    arryOfTasks.push(...localStorageArray);
  }
});
const clearButton = document.createElement('button');
clearButton.className = 'clear-btn';
clearButton.innerHTML = 'Clear all completed';
body.appendChild(clearButton);
/* addText(); */

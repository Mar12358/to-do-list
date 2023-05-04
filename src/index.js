import './style.css';
import { addLocalStorage, createFrame, Task } from './modules/functions.js';

const body = document.getElementsByTagName('body')[0];
const container = document.querySelector('.to-do-list');

createFrame();
const arryOfTasks = [];

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    e.preventDefault();
    const task = Task.create(input.value, arryOfTasks.length);
    arryOfTasks.push(task);
    input.value = '';
    localStorage.setItem('tasks', JSON.stringify(arryOfTasks));
  /*   const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    const content = document.createElement('div');
    content.className = 'content';
    content.appendChild(checkBox);
    checkBox.checked = storedTasks[i].completed;
    const p = document.createElement('p');
    p.innerHTML = storedTasks[i].description;
    arryOfTasks[arryOfTasks.length - 1].index = arryOfTasks.length; */
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

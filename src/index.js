import './style.css';
import {
  addLocalStorage, addTaskToHTML, createFrame, Task, editTask,
} from './modules/functions.js';

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
    localStorage.setItem('tasks', JSON.stringify(arryOfTasks));
    addTaskToHTML(task);
    input.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length !== 0) {
    const { ul, arrayOfTasks: localStorageArray } = addLocalStorage();
    arryOfTasks.push(...localStorageArray);
    container.appendChild(ul);
  } else {
    const ul = document.createElement('ul');
    container.appendChild(ul);
  }
  const threeDots = document.querySelectorAll('.menu-img');
  for (let i = 0; i < threeDots.length; i += 1) {
    threeDots[i].addEventListener('click', (event) => { editTask(event.target.parentNode); });
  }
});

/*
 */
const clearButton = document.createElement('button');
clearButton.className = 'clear-btn';
clearButton.innerHTML = 'Clear all completed';
body.appendChild(clearButton);

import _ from 'lodash';
import './style.css';

const container = document.querySelector('.to-do-list');

const h1 = document.createElement('h1');
h1.innerHTML = "Today's To Do";
container.appendChild(h1);

const form = document.createElement('form');
form.setAttribute('action', 'javascript:void(0)');
const input = document.createElement('input');
input.type = "text";
input.name = "description";
input.placeholder = "Add to your list..."
form.appendChild(input);
container.appendChild(form);

const Task1 = {
  description: "Wash dishesr",
  completed: false,
  index: 0,
};

const Task2 = {
  description: "Fix car",
  completed: false,
  index: 1,
};

const Task3 = {
  description: "Practice Instrument",
  completed: false,
  index: 2,
};
const arryOfTasks = [Task1, Task2, Task3];

const ul = document.createElement('ul');

for (let i = 0; i < arryOfTasks.length; i += 1) {
  const li = document.createElement('li')
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.appendChild(checkBox);
  checkBox.checked = arryOfTasks[i].completed;
  const p = document.createElement('p');
  p.innerHTML = arryOfTasks[i].description;
  li.appendChild(p);
  ul.appendChild(li);
}
container.appendChild(ul);
/*
let Task = {
}
const task = new Task();

const arryOfTasks = [];
 */
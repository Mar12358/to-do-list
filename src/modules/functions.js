import menuImgSrc from '../menu.png';
import enterImgSrc from '../enter.png';
import refreshImgSrc from '../refresh.png';
/* const addText = () => {
  const t = document.createElement('div');
  const text = "text's test";
  t.innerHTML = `
    <div>
      <p>${text}</p>
    </div>
  `;
  const bodyTest = document.getElementsByTagName('body')[0];
  bodyTest.appendChild(t);
};
export default addText; */

export const createFrame = () => {
  const h1Container = document.querySelector('.h1-container');
  const refreshImg = document.createElement('img');
  const container = document.querySelector('.to-do-list');
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
import menuImgSrc from '../menu.png';

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

const addLocalStorage = () => {
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
export default addLocalStorage;
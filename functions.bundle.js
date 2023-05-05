"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["functions"],{

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "77e46d5a71de656f4471d7cc1cb87331.png");

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3e14968fb2282c60d6e93554b55e74dc.png");

/***/ }),

/***/ "./src/refresh.png":
/*!*************************!*\
  !*** ./src/refresh.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "35a7a814943bb88780fe0a0f536b2bbe.png");

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0e2061c39189ab903ea4308e5df25c39.png");

/***/ }),

/***/ "./src/modules/check_box.js":
/*!**********************************!*\
  !*** ./src/modules/check_box.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCheckboxListenerOnLoad": () => (/* binding */ addCheckboxListenerOnLoad),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted)
/* harmony export */ });
const addCheckboxListenerOnLoad = (checkboxes, array) => {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const text = checkbox.nextElementSibling;
      text.classList.toggle('line-through');
      array[parseInt(text.id, 10) - 1].completed = !array[parseInt(text.id, 10) - 1].completed;
      localStorage.setItem('tasks', JSON.stringify(array));

      // arrayOfTasks[parseInt(textTask.id)].compl
    });
  });
};

const clearCompleted = (arrayOfTasks) => {
  const incompleteTasks = arrayOfTasks.filter((task) => task.completed !== true);
  for (let i = 0; i < incompleteTasks.length; i += 1) {
    incompleteTasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(incompleteTasks));
  window.location.reload(true);
};

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addLocalStorage": () => (/* binding */ addLocalStorage),
/* harmony export */   "addTaskToHTML": () => (/* binding */ addTaskToHTML),
/* harmony export */   "createFrame": () => (/* binding */ createFrame),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu.png */ "./src/menu.png");
/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enter.png */ "./src/enter.png");
/* harmony import */ var _refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../refresh.png */ "./src/refresh.png");
/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trash.png */ "./src/trash.png");
/* harmony import */ var _check_box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check_box.js */ "./src/modules/check_box.js");






const createFrame = () => {
  const h1Container = document.querySelector('.h1-container');
  const refreshImg = document.createElement('img');
  const container = document.querySelector('.to-do-list');
  refreshImg.src = _refresh_png__WEBPACK_IMPORTED_MODULE_2__["default"];
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
  enterImg.src = _enter_png__WEBPACK_IMPORTED_MODULE_1__["default"];
  enterImg.className = 'enter-img';

  inputLine.appendChild(enterImg);
  form.appendChild(inputLine);
  container.appendChild(form);
};

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
    const inp = document.createElement('input');
    inp.value = storedTasks[i].description;
    inp.type = 'text';
    inp.classList = ('added-task uneditable');
    if (checkBox.checked) {
      inp.classList.add('line-through');
    }
    inp.setAttribute('readonly', true);
    storedTasks[i].index = (i + 1).toString();
    inp.id = storedTasks[i].index.toString();
    content.appendChild(inp);
    li.appendChild(content);
    const menuImg = document.createElement('img');
    menuImg.src = _menu_png__WEBPACK_IMPORTED_MODULE_0__["default"];
    menuImg.className = 'menu-img';
    li.appendChild(menuImg);
    const trashImg = document.createElement('img');
    trashImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_3__["default"];
    trashImg.className = 'trash-img hidden';
    li.appendChild(trashImg);

    ul.appendChild(li);
    arrayOfTasks.push(storedTasks[i]);
  }
  return { ul, arrayOfTasks };
};

const Task = {
  create(description, index) {
    const task = Object.create(this);
    task.description = description;
    task.completed = false;
    task.index = index;
    return task;
  },
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

const editTask = (clickedElement, array) => {
  const li = clickedElement;
  const input = li.querySelector('.added-task');
  const trash = li.querySelector('.trash-img');
  const editButton = li.querySelector('.menu-img');
  trash.classList.toggle('hidden');
  editButton.classList.toggle('hidden');
  li.classList.add('focused-li');
  input.removeAttribute('readonly');
  input.classList.add('on-focus');
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
  const id = parseInt(input.id, 10);
  const deleteElement = () => {
    for (let i = id + 1; i <= array.length; i += 1) {
      const nextElement = document.getElementById((i).toString());
      nextElement.id = (i - 1).toString();
      array[i - 1].index = (nextElement.id).toString();
    }
    array.splice(id - 1, 1);
    localStorage.setItem('tasks', JSON.stringify(array));
    trash.removeEventListener('click', deleteElement);
    li.remove();
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && input.value !== '') {
      trash.classList.toggle('hidden');
      editButton.classList.toggle('hidden');
      input.setAttribute('readonly', true);
      li.classList.remove('focused-li');
      const completed = input.classList.contains('line-through');
      updateLocalStorage(id.toString(), input.value, completed);
      array[id - 1].description = input.value;
      input.removeEventListener('keydown', handleEnterKey);
      trash.removeEventListener('click', deleteElement);
    }
  };

  input.addEventListener('keydown', handleEnterKey);
  trash.addEventListener('click', deleteElement);
};

const addTaskToHTML = (task, arrayOfTasks) => {
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
  menuImg.src = _menu_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  menuImg.className = 'menu-img';
  const trashImg = document.createElement('img');
  trashImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_3__["default"];
  trashImg.classList = 'trash-img hidden';
  li.appendChild(menuImg);
  li.appendChild(trashImg);
  ul.appendChild(li);
  (0,_check_box_js__WEBPACK_IMPORTED_MODULE_4__.addCheckboxListenerOnLoad)([checkBox], arrayOfTasks);
  menuImg.addEventListener('click', (event) => {
    editTask(event.target.parentNode, arrayOfTasks);
  });
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/functions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7QUNBL0UsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQXhFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCcUM7QUFDRTtBQUNJO0FBQ0o7QUFDb0I7O0FBRXBEO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBVztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpREFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVc7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQVU7QUFDMUI7QUFDQTtBQUNBLGlCQUFpQixrREFBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0VBQXlCO0FBQzNCO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2VudGVyLnBuZyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21lbnUucG5nIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcmVmcmVzaC5wbmciLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy90cmFzaC5wbmciLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL2NoZWNrX2JveC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvZnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3N2U0NmQ1YTcxZGU2NTZmNDQ3MWQ3Y2MxY2I4NzMzMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2UxNDk2OGZiMjI4MmM2MGQ2ZTkzNTU0YjU1ZTc0ZGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM1YTdhODE0OTQzYmI4ODc4MGZlMGEwZjUzNmIyYmJlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZTIwNjFjMzkxODlhYjkwM2VhNDMwOGU1ZGYyNWMzOS5wbmdcIjsiLCJleHBvcnQgY29uc3QgYWRkQ2hlY2tib3hMaXN0ZW5lck9uTG9hZCA9IChjaGVja2JveGVzLCBhcnJheSkgPT4ge1xuICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IGNoZWNrYm94Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIHRleHQuY2xhc3NMaXN0LnRvZ2dsZSgnbGluZS10aHJvdWdoJyk7XG4gICAgICBhcnJheVtwYXJzZUludCh0ZXh0LmlkLCAxMCkgLSAxXS5jb21wbGV0ZWQgPSAhYXJyYXlbcGFyc2VJbnQodGV4dC5pZCwgMTApIC0gMV0uY29tcGxldGVkO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcblxuICAgICAgLy8gYXJyYXlPZlRhc2tzW3BhcnNlSW50KHRleHRUYXNrLmlkKV0uY29tcGxcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZWQgPSAoYXJyYXlPZlRhc2tzKSA9PiB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrcyA9IGFycmF5T2ZUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkICE9PSB0cnVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNvbXBsZXRlVGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpbmNvbXBsZXRlVGFza3NbaV0uaW5kZXggPSBpICsgMTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShpbmNvbXBsZXRlVGFza3MpKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbn07IiwiaW1wb3J0IG1lbnVJbWdTcmMgZnJvbSAnLi4vbWVudS5wbmcnO1xuaW1wb3J0IGVudGVySW1nU3JjIGZyb20gJy4uL2VudGVyLnBuZyc7XG5pbXBvcnQgcmVmcmVzaEltZ1NyYyBmcm9tICcuLi9yZWZyZXNoLnBuZyc7XG5pbXBvcnQgdHJhc2hJbWdTcmMgZnJvbSAnLi4vdHJhc2gucG5nJztcbmltcG9ydCB7IGFkZENoZWNrYm94TGlzdGVuZXJPbkxvYWQgfSBmcm9tICcuL2NoZWNrX2JveC5qcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGcmFtZSA9ICgpID0+IHtcbiAgY29uc3QgaDFDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaDEtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJlZnJlc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvLWxpc3QnKTtcbiAgcmVmcmVzaEltZy5zcmMgPSByZWZyZXNoSW1nU3JjO1xuICByZWZyZXNoSW1nLmNsYXNzTmFtZSA9ICdyZWZyZXNoLWltZyc7XG4gIGgxQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZnJlc2hJbWcpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LmNsYXNzTmFtZSA9ICdhZGQtdGFzay1pbnB1dCc7XG4gIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gIGlucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgdG8geW91ciBsaXN0Li4uJztcbiAgY29uc3QgaW5wdXRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0TGluZS5jbGFzc05hbWUgPSAnaW5wdXQtbGluZSc7XG4gIGlucHV0TGluZS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGNvbnN0IGVudGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGVudGVySW1nLnNyYyA9IGVudGVySW1nU3JjO1xuICBlbnRlckltZy5jbGFzc05hbWUgPSAnZW50ZXItaW1nJztcblxuICBpbnB1dExpbmUuYXBwZW5kQ2hpbGQoZW50ZXJJbWcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0TGluZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgYXJyYXlPZlRhc2tzID0gW107XG4gIGNvbnN0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkVGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICBjaGVja0JveC5jaGVja2VkID0gc3RvcmVkVGFza3NbaV0uY29tcGxldGVkO1xuICAgIGNvbnN0IGlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wLnZhbHVlID0gc3RvcmVkVGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgaW5wLnR5cGUgPSAndGV4dCc7XG4gICAgaW5wLmNsYXNzTGlzdCA9ICgnYWRkZWQtdGFzayB1bmVkaXRhYmxlJyk7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgIGlucC5jbGFzc0xpc3QuYWRkKCdsaW5lLXRocm91Z2gnKTtcbiAgICB9XG4gICAgaW5wLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcbiAgICBzdG9yZWRUYXNrc1tpXS5pbmRleCA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICBpbnAuaWQgPSBzdG9yZWRUYXNrc1tpXS5pbmRleC50b1N0cmluZygpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wKTtcbiAgICBsaS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUltZy5zcmMgPSBtZW51SW1nU3JjO1xuICAgIG1lbnVJbWcuY2xhc3NOYW1lID0gJ21lbnUtaW1nJztcbiAgICBsaS5hcHBlbmRDaGlsZChtZW51SW1nKTtcbiAgICBjb25zdCB0cmFzaEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRyYXNoSW1nLnNyYyA9IHRyYXNoSW1nU3JjO1xuICAgIHRyYXNoSW1nLmNsYXNzTmFtZSA9ICd0cmFzaC1pbWcgaGlkZGVuJztcbiAgICBsaS5hcHBlbmRDaGlsZCh0cmFzaEltZyk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgYXJyYXlPZlRhc2tzLnB1c2goc3RvcmVkVGFza3NbaV0pO1xuICB9XG4gIHJldHVybiB7IHVsLCBhcnJheU9mVGFza3MgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBUYXNrID0ge1xuICBjcmVhdGUoZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgY29uc3QgdGFzayA9IE9iamVjdC5jcmVhdGUodGhpcyk7XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGFzay5pbmRleCA9IGluZGV4O1xuICAgIHJldHVybiB0YXNrO1xuICB9LFxufTtcblxuY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKGlkLCB2YWx1ZSwgY29tcGxldGVkKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGNvbnN0IHRhc2tUb0VkaXQgPSBzdG9yZWRUYXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmluZGV4ID09PSBpZCk7XG4gIGlmICh0YXNrVG9FZGl0KSB7XG4gICAgdGFza1RvRWRpdC5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIHRhc2tUb0VkaXQuY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkVGFza3MpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0VGFzayA9IChjbGlja2VkRWxlbWVudCwgYXJyYXkpID0+IHtcbiAgY29uc3QgbGkgPSBjbGlja2VkRWxlbWVudDtcbiAgY29uc3QgaW5wdXQgPSBsaS5xdWVyeVNlbGVjdG9yKCcuYWRkZWQtdGFzaycpO1xuICBjb25zdCB0cmFzaCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJy50cmFzaC1pbWcnKTtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWltZycpO1xuICB0cmFzaC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZC1saScpO1xuICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ29uLWZvY3VzJyk7XG4gIGlucHV0LmZvY3VzKCk7XG4gIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKGlucHV0LnZhbHVlLmxlbmd0aCwgaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgY29uc3QgaWQgPSBwYXJzZUludChpbnB1dC5pZCwgMTApO1xuICBjb25zdCBkZWxldGVFbGVtZW50ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSBpZCArIDE7IGkgPD0gYXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5leHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoKGkpLnRvU3RyaW5nKCkpO1xuICAgICAgbmV4dEVsZW1lbnQuaWQgPSAoaSAtIDEpLnRvU3RyaW5nKCk7XG4gICAgICBhcnJheVtpIC0gMV0uaW5kZXggPSAobmV4dEVsZW1lbnQuaWQpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGFycmF5LnNwbGljZShpZCAtIDEsIDEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gICAgdHJhc2gucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVFbGVtZW50KTtcbiAgICBsaS5yZW1vdmUoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlcktleSA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlucHV0LnZhbHVlICE9PSAnJykge1xuICAgICAgdHJhc2guY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xuICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZC1saScpO1xuICAgICAgY29uc3QgY29tcGxldGVkID0gaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaW5lLXRocm91Z2gnKTtcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShpZC50b1N0cmluZygpLCBpbnB1dC52YWx1ZSwgY29tcGxldGVkKTtcbiAgICAgIGFycmF5W2lkIC0gMV0uZGVzY3JpcHRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVFbnRlcktleSk7XG4gICAgICB0cmFzaC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlRW50ZXJLZXkpO1xuICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUVsZW1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb0hUTUwgPSAodGFzaywgYXJyYXlPZlRhc2tzKSA9PiB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgY2hlY2tCb3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuICBjb25zdCBpbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnAudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBpbnAudHlwZSA9ICd0ZXh0JztcbiAgaW5wLmlkID0gdGFzay5pbmRleC50b1N0cmluZygpO1xuICBpbnAuY2xhc3NMaXN0ID0gKCdhZGRlZC10YXNrIHVuZWRpdGFibGUnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbnApO1xuICBsaS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtZW51SW1nLnNyYyA9IG1lbnVJbWdTcmM7XG4gIG1lbnVJbWcuY2xhc3NOYW1lID0gJ21lbnUtaW1nJztcbiAgY29uc3QgdHJhc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdHJhc2hJbWcuc3JjID0gdHJhc2hJbWdTcmM7XG4gIHRyYXNoSW1nLmNsYXNzTGlzdCA9ICd0cmFzaC1pbWcgaGlkZGVuJztcbiAgbGkuYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gIGxpLmFwcGVuZENoaWxkKHRyYXNoSW1nKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICBhZGRDaGVja2JveExpc3RlbmVyT25Mb2FkKFtjaGVja0JveF0sIGFycmF5T2ZUYXNrcyk7XG4gIG1lbnVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBlZGl0VGFzayhldmVudC50YXJnZXQucGFyZW50Tm9kZSwgYXJyYXlPZlRhc2tzKTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
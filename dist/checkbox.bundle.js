"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["checkbox"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/check_box.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvY2hlY2tfYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGRDaGVja2JveExpc3RlbmVyT25Mb2FkID0gKGNoZWNrYm94ZXMsIGFycmF5KSA9PiB7XG4gIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hlY2tib3gubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgdGV4dC5jbGFzc0xpc3QudG9nZ2xlKCdsaW5lLXRocm91Z2gnKTtcbiAgICAgIGFycmF5W3BhcnNlSW50KHRleHQuaWQsIDEwKSAtIDFdLmNvbXBsZXRlZCA9ICFhcnJheVtwYXJzZUludCh0ZXh0LmlkLCAxMCkgLSAxXS5jb21wbGV0ZWQ7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xuXG4gICAgICAvLyBhcnJheU9mVGFza3NbcGFyc2VJbnQodGV4dFRhc2suaWQpXS5jb21wbFxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlZCA9IChhcnJheU9mVGFza3MpID0+IHtcbiAgY29uc3QgaW5jb21wbGV0ZVRhc2tzID0gYXJyYXlPZlRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb21wbGV0ZWQgIT09IHRydWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGluY29tcGxldGVUYXNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGluY29tcGxldGVUYXNrc1tpXS5pbmRleCA9IGkgKyAxO1xuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGluY29tcGxldGVUYXNrcykpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
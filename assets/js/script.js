var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  console.log(event);
  event.preventDefault();
  var taskItemEl = document.createElement("li");
  var taskToDoEl = document.querySelector("#tasks-to-do");
  taskItemEl.textContent = "This is a new task";
  taskToDoEl.appendChild(taskItemEl);
  taskItemEl.className = "task-item";
};

formEl.addEventListener("submit", createTaskHandler);




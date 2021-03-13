const { data } = require('../data');
const todo = require('./todo');
const task = require('./task');

require('../static/css/style.css');
const app = document.getElementById('add-task');
const todoContainer = document.getElementById('to-do');

todo.loadList(data, todoContainer);
task.addForm(app);
task.addButton.addEventListener('click', () => todo.addTask(
  document.getElementById("task-name"),
  data,
  todoContainer
));

app.appendChild(task.addButton);

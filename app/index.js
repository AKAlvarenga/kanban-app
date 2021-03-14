const {data} = require('../data');
const todo = require('./todo');
const task = require('./task');
const doing = require('./doing');
const done = require('./done');
const {moveTo} = require('./events');
require('../static/css/style.css');

const app = document.getElementById('add-task');
const todoContainer = document.getElementById('to-do');
const doingContainer = document.getElementById('doing');
const doneContainer = document.getElementById('done');

const renderTasks = () => {
  todo.loadList(data, todoContainer);
  doing.loadList(data, doingContainer);
  done.loadList(data, doneContainer);
}

const addEventsTasks = () => {
  const todoTasks = document.querySelectorAll('#to-do input[type="checkbox"]');
  todoTasks.forEach(todoItem =>
    todoItem.addEventListener('change', (event) => moveTo.doing(event, updateStatus, renderTasks))
  );
  const doingTasks = document.querySelectorAll('#doing input[type="checkbox"]');
  doingTasks.forEach(doingTask =>
    doingTask.addEventListener('change', (event) => moveTo.done(event, updateStatus, renderTasks))
  );
}

const updateStatus = (id, status) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data[i].status = status;
    }
  }
  renderApp();
}

const renderApp = () => {
  renderTasks();
  addEventsTasks();
}

task.addForm(app);
app.appendChild(task.addButton);

task.addButton.addEventListener('click', () => todo.addTask(
  document.getElementById("task-name"),
  data,
  todoContainer
));

renderApp();

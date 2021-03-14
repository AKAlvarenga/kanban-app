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
/**
 * Update each lane with the updated information
 */
const renderTasks = () => {
  todo.loadList(data, todoContainer);
  doing.loadList(data, doingContainer);
  done.loadList(data, doneContainer);
}
/**
 * Add move ability to all task across the lanes in sequential order
 */
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

/**
 * auxiliary method to update data status
 * this one will be removed in future verions
 * @param id
 * @param status
 */
const updateStatus = (id, status) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      data[i].status = status;
    }
  }
  renderApp();
}

/**
 * Display the app to the user
 */
const renderApp = () => {
  renderTasks();
  addEventsTasks();
}

// Add new task form to the DOM
task.addForm(app);
// Append "New Task" button to the form
app.appendChild(task.addButton);
// Add ability to append new task on to-do queue
task.addButton.addEventListener('click', () => {
  todo.addTask(
    document.getElementById("task-name"),
    data,
    todoContainer
  )
  addEventsTasks();
});
// let's go!
renderApp();

const data = require('../data');
const todo = require('./todo');
const task = require('./task');
const util = require('./utilities');
const doing = require('./doing');
const Swal = require('sweetalert2')

require('../static/css/style.css');
require('../static/css/bootstrap.css');
const app = document.getElementById('add-task');
const todoContainer = document.getElementById('to-do');
const doingContainer = document.getElementById('doing');

document.onreadystatechange = () => {
  if (document.readyState == "complete") {
    todo(data, todoContainer);
    setListeners();
  }
}

task.addForm(app);
task.addButton.addEventListener('click', () => {
  if (document.getElementById('task-name').value.length != 0) {
    util.addTask(
      document.getElementById("task-name"),
      data,
      todoContainer,
      'to-do-check'
    )
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please add a name to the task!',
    })
  }
  setListeners();
  return;
});

const setListeners = () => {
  const wrapper = document.getElementById('to-do-check');

  wrapper.addEventListener('change', event => {
    if (event.target.nodeName === 'INPUT') {
      const id = event.target.id;
      const pos = search(data, id);
      data[pos].status = 'doing';
      const newDoing = data[pos];
      todo(data, todoContainer);
      doing(data, doingContainer);
      setListeners();
      return;
    }
  });
}

const search = (data, obj) => {
  let flag;
  for (i = 0; i < data.length; i++) {
    if (data[i].id === obj) {
      flag = i;
      break;
    }
  }
  return flag;
}

app.appendChild(task.addButton);
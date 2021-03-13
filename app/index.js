const data = require('../data');
const todo = require('./todo');
const task = require('./task');

require('../static/css/style.css');
const app = document.getElementById('add-task');
const todoContainer = document.getElementById('to-do');
const doingContainer = document.getElementById('doing');

todo.loadList(data, todoContainer, (element) => {
  for(let i = 0; i < data.length; i++){
    if(data[i].id === element.target.value){
      data[i].status = "doing";
      const element = document.getElementById(data[i].id).parentElement;
      todoContainer.children[0].removeChild(element);
    }
  }
  todo.loadDoingList(data, doingContainer);
});

todo.loadDoingList(data, doingContainer);
task.addForm(app);
task.addButton.addEventListener('click', () => todo.addTask(
  document.getElementById("task-name"),
  data,
  todoContainer
));

app.appendChild(task.addButton);
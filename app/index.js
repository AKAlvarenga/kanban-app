const data = require('../data');
const todo = require('./todo');
const task = require('./task');
const doing = require('./doing');

require('../static/css/style.css');
const app = document.getElementById('add-task');
const todoContainer = document.getElementById('to-do');
const doingContainer = document.getElementById('doing');

todo.loadList(data, todoContainer, (element) => {
  for(let i = 0; i < data.length; i++){
    if(data[i].id === element.target.value){
      data[i].status = "in-progress";
      const e= document.getElementById(data[i].id).parentElement;
      todoContainer.children[0].removeChild(e);
    }
  }
  doing.loadList(data, doingContainer);
});
doing.loadList(data, doingContainer);
task.addForm(app);
task.addButton.addEventListener('click', () => todo.addTask(
  document.getElementById("task-name"),
  data,
  todoContainer
));

app.appendChild(task.addButton);
//npm start

//npm run build:dev

//npm i webpack-dev-server

//npm i @babel/core @babel/plugin-proposal-class-properties @babel/preset-env --save-dev

//npm i html-webpack-plugin mini-css-extract-plugin clean-webpack-plugin loader-utils --save-dev

//npm i uuid
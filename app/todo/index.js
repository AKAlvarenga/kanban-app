const list = require('../list');
const {
  v4: uuidv4
} = require('uuid');

const loadList = (data, container, callback = null) => {
  container.innerHTML = '';
  const filteredData = data.filter(element =>{
    if (element.status === 'todo'){
      return element;
    }
  })
  container.appendChild(list(filteredData, callback));
}

const addTask = (source, data, container) => {
  const task = source;
  data.push({
    id: uuidv4(),
    name: task.value,
    status: 'todo', 
  });
  task.value = '';
  loadList(data, container)
}

module.exports = {
  loadList,
  addTask,
};

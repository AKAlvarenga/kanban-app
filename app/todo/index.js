const list = require('../list');
const {
  v4: uuidv4
} = require('uuid');

const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data));
}

const addTask = (source, data, container) => {
  const task = source;
  data.push({
    id: uuidv4(),
    name: task.value,
  });
  task.value = '';
  loadList(data, container)
}

module.exports = {
  loadList,
  addTask,
};
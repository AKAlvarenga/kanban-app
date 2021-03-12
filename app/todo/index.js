const list = require('../list');
const { status } = require('../../data');
const {
  v4: uuidv4
} = require('uuid');

const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data, status.TODO));
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
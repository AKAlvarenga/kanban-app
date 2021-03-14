const list = require('../list');
const { STATUS } = require('../../data');
const {
  v4: uuidv4
} = require('uuid');

const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data, STATUS.TODO));
}

const addTask = (source, data, container) => {
  const task = source;
  data.push({
    id: uuidv4(),
    name: task.value,
    status: STATUS.TODO,
  });
  task.value = '';
  loadList(data, container)
}

module.exports = {
  loadList,
  addTask,
};

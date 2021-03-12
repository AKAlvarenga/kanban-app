const list = require('../list');
const {
  v4: uuidv4
} = require('uuid');

//Construct the list items
const loadList = (data, container, kind) => {
    container.innerHTML = '';
    container.appendChild(list(data, container.getAttribute('id'), kind));
}

//Add task
const addTask = (source, data, container, kind) => {
    const task = source;
    data.push({
        id: uuidv4(),
        name: task.value,
        status: kind === 'to-do-check' ? 'to-do' : kind === 'doing-check' ? 'doing' : 'done'
    });
    task.value = '';
    loadList(data, container, kind);
}

module.exports = {
    loadList,
    addTask,
};
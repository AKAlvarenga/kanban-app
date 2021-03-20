const store = require('store2');
const { v4: uuidv4 } = require('uuid');
//TODO: refactor this piece to make more sense 
const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
};

class Task {
  constructor(){
    this.id = uuidv4();
    this.name = null;
    this.status = STATUS.TODO
  }
}

class Database{
  constructor(){
    this.store = store;
    this.store.namespace('kanban-app');
  }

  all = () => { 
    const result = [];
    const data = this.store.getAll();
    Object.keys(data).forEach(e => result.push(data[e]));
    return result;
  };

  add = name => {
    const task = new Task();
    task.name = name;
    this.store.set(task.id, task);
    return this.store.get(task.id);
  }

  update = (id, status) => {
    const oTask = this.store.get(id);
    this.store.set(id, {...oTask, status});
  }
}

module.exports = new Database();
const { v4: uuidv4 } = require('uuid');

const stubNotes = [
  {
    id: uuidv4(),
    name: 'Learn Webpack',
    status: 'todo',
  },
  {
    id: uuidv4(),
    name: 'Learn React',
    status: 'doing',
  },
  {
    id: uuidv4(),
    name: 'Learn Angular',
    status: 'todo',
  }
];

module.exports = { stubNotes } ;
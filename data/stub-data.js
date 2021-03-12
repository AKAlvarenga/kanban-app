const { v4: uuidv4 } = require('uuid');

const stubNotes = [
  {
    id: uuidv4(),
    name: 'Learn Webpack',
    status: 'to-do',
  },
  {
    id: uuidv4(),
    name: 'Learn React',
    status: 'to-do',
  },
  {
    id: uuidv4(),
    name: 'Learn Angular',
    status: 'to-do',
  }
];

module.exports = { stubNotes } ;
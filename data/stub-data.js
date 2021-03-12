const { v4: uuidv4 } = require('uuid');

const stubNotes = [
  {
    id: uuidv4(),
    name: 'Learn Webpack',
    status: 'doing',
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
  },
  {
    id: uuidv4(),
    name: 'Learn Vue',
    status: 'to-do',
  },
  {
    id: uuidv4(),
    name: 'Learn Java',
    status: 'doing',
  },
  {
    id: uuidv4(),
    name: 'Learn ASP .NET',
    status: 'to-do',
  },
  {
    id: uuidv4(),
    name: 'Learn JavaScript',
    status: 'done',
  },
];

module.exports = { stubNotes } ;
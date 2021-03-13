const { stubNotes } = require('./stub-data');
const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
};

module.exports = { data: stubNotes, STATUS };

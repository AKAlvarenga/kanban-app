const { stubNotes } = require('./stub-data');
const status = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
};
module.exports = { data: stubNotes, status };

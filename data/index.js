const { stubNotes } = require('./stub-data');
const database = require('./database');
const apiData = require('./api');
const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
};

module.exports = { data: apiData, STATUS };

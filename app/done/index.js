const util = require('../utilities');

const loadList = (data, todoContainer) => {
  util.loadList(data, todoContainer, 'done');
}

module.exports = loadList;
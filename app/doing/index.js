const util = require('../utilities');

const loadList = (data, todoContainer) => {
  util.loadList(data, todoContainer, 'doing-check');
}

module.exports = loadList;
const list = require('../list');
const { STATUS } = require('../../data');

const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data, STATUS.DONE));
}

module.exports = {
  loadList,
};


const { status } = require('../../data');
const list = require('../list');

const loadList = (data, container) => {
  container.innerHTML = '';
  container.appendChild(list(data, status.DOING));
}

module.exports = {
  loadList,
};
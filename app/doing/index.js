const list = require('../list');

const loadList = (data, container) => {
  container.innerHTML = '';
  const filteredData = data.filter(element =>{
    if (element.status === 'doing'){
      return element;
    }
  })
  container.appendChild(list(filteredData));
}

module.exports = {
  loadList,
};
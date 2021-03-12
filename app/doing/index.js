const list = require('../list');

const loadList = (data, container) => {
  container.innerHTML = '';
  const filteredData = data.filter(element =>{
    if (element.status === 'in-progress'){
      return element;
    }
  })
  container.appendChild(list(filteredData));
}

module.exports = {
  loadList,
}

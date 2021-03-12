const list = (data, status) => {
  const container = document.createElement('div');
  const filteredData = data.filter(element => {
    if(element.status === status){
      return element;
    }
  });
  if(!!filteredData && Array.isArray(filteredData)){
    filteredData.forEach( task => {
      container.appendChild(listElement(task))
    });
  }
  return container;
}

const listElement = (task) => {
  const element = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = task.id;
  input.value = task.id;
  element.innerHTML = task.name;
  element.appendChild(input);

  return element;
}

module.exports = list;

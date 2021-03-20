const list = (data, status) => {
  const container = document.createElement('div');
  console.log('datadump', {...data});
  
  const filteredData = data.filter(task => task.status === status);
  if(!!filteredData && Array.isArray(data)){
    filteredData.forEach( task => {
      container.appendChild(listElement(task))
    });
  }
  return container;
}

const listElement = task => {
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

const list = data => {
  const container = document.createElement('ul');
  if(!!data && Array.isArray(data)){
    data.forEach( task => {
      container.appendChild(listElement(task))
    });
  }
  return container;
}

const listElement = task => {
  const element = document.createElement('li');
  element.innerHTML = task.name;
  return element;
}

module.exports = list;
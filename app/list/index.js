const list = (data, action) => {
  const container = document.createElement('div');
  if(!!data && Array.isArray(data)){
    data.forEach( task => {
      const element = listElement(task);
      if(action){
        element.addEventListener('change', action)
      }
      container.appendChild(element)
    });
  }
  return container;
}

const listElement = task => {
  const element = document.createElement('div');
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = task.id;
  input.value = task.id;
  element.innerHTML = task.name;
  element.appendChild(input);
  return element;
}

module.exports = list;
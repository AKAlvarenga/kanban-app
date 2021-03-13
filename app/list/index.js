import ('./style.css');

const list = (data, action) => {
  const container = document.createElement('div');
  if(!!data && Array.isArray(data)){
    data.forEach( task => {
      const element = listElement(task);
      if(action){
        element.addEventListener('change', action);
      }
      container.appendChild(element);
    });
  }
  return container;
}

const listElement = task => {
  const element = document.createElement('div');
  element.classList.add('divChild');
  const checkbox = document.createElement('input');
  
  checkbox.type = "checkbox";
  checkbox.id = task.id;
  checkbox.value = task.id;
  element.innerHTML = task.name;

  const label = document.createElement('label');
  label.innerHTML = "In progress";
  
  element.appendChild(checkbox);
  element.appendChild(label);
  return element;
}

module.exports = list;
  const list = (data, action) => {
    const container = document.createElement('div');
    if(!!data && Array.isArray(data)){
      data.forEach( task => {
        const element = listElement(task);
        if(action){
          element.addEventListener('change', action)
        }
        container.appendChild(element)
        container.appendChild(document.createElement('br'))
      });
    }
    return container;
  }
  
  const listElement = task => {
    const element = document.createElement('div');
    const label = document.createElement('label');
    label.innerHTML = task.name;
    const legend = document.createElement('legend');
    legend.style ='float:right';
    legend.className = 'progress';
    legend.innerHTML = 'Mark as In Progress';
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = task.id;
    input.value = task.id;
    input.style = 'float:right';
    element.id = 'activity';
    element.innerHTML = label.outerHTML + legend.outerHTML;
    element.appendChild(input);
    return element;
  }
  
  module.exports = list;
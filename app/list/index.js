const addCheckbox = require('./addCheckbox');

const list = (data, id, kind) => {
  const container = document.createElement('div');
  const text = kind === 'to-do-check' ? 'Mark as in progress' : kind === 'doing-check' ? 'Mark as done' : 'Move to done';
  container.setAttribute('id', kind);
  if (!!data && Array.isArray(data)) {
    data.forEach(task => {
      if (task.status === id)
        container.appendChild(listElement(task, data, text))
    });
  }
  return container;
}

const listElement = (task, data, text) => {
  const element = document.createElement('li');
  const label = document.createElement('label');
  const divCheck = document.createElement('div');

  divCheck.setAttribute('class', 'form-check')

  element.setAttribute('class', 'list-group-item');
  element.innerHTML = task.name;

  const check = addCheckbox(task, data);

  label.setAttribute('class', 'form-check-label');
  label.setAttribute('for', task.id);
  label.innerHTML = text;

  divCheck.appendChild(check);
  divCheck.appendChild(label);

  element.appendChild(divCheck);
  return element;
}


module.exports = list;
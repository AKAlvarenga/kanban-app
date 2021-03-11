const addButton = require('./addButton');
const addTaskForm = (container) => {
  const form = document.createElement("form");
  const fielset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.innerHTML = "Add new task";
  fielset.appendChild(legend);
  const taskName = document.createElement("input");
  taskName.id = "task-name";
  fielset.appendChild(taskName);
  form.appendChild(fielset);
  container.appendChild(form);
}

module.exports = {
  addButton,
  addForm: addTaskForm
}
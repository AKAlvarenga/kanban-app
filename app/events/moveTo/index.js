const { STATUS } = require('../../../data');
const doing = (event, updateStatus) => {
  const { value } = event.target;
  if(typeof updateStatus === 'function') updateStatus(value, STATUS.DOING);
}

const done = (event, updateStatus) => {
  const { value } = event.target;
  if(typeof updateStatus === 'function') updateStatus(value, STATUS.DONE);
}

module.exports = {
  doing,
  done,
}

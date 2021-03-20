const axios = require('axios');

class ApiData {
  all = () => axios.get('http://localhost:3000/api/task');
  add = name => axios.post('http://localhost:3000/api/task', {name});
  update = (id, status) => console.log('not implemented');
}

module.exports = new ApiData();

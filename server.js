const express = require('express');
const {data} = require('./data');
const server = new express();
const cors = require('cors');

// remember to add express json parser
server.use(express.json());
server.use(cors());
server.use(express.static('build'));
server.get('/api/task', (req, res) => {
  res.json({
    data: data.all(),
  });
});
server.post('/api/task', (req, res) => {
  const nTask = data.add(req.body.name);
  res.json(nTask);
});
const port = 3000;

server.listen(port, () => console.log(`Server runing on port ${port}`));
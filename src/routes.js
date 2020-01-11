const routes = require('express').Router();
const DevController = require('@controller/Dev')

routes
.get('/api', (req, res) => {
  res.send({API: "Running"});
})
.post('/dev', DevController.store);

module.exports = routes;
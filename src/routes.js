const routes = require('express').Router();
const DevController = require('@controller/Dev')

routes
.get('/devs', DevController.index)  
.post('/dev', DevController.store);

module.exports = routes;
const routes = require('express').Router();
const DevController = require('@controller/Dev')

routes
.get('/devs', DevController.index)  
.post('/dev', DevController.store)
.get('/dev/:id', DevController.show);

module.exports = routes;
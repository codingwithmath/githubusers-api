const express = require('express');

const app = express();

require('@model/Dev.js')

app.use(express.json());
app.use('/', require('./routes'));


module.exports = app;
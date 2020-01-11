require('dotenv').config();
require('module-alias/register');
require('@service/boot.js');

const mongoConnection = require('@service/connection.js');

mongoConnection();

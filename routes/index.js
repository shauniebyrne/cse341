const routes = require('express').Router();
const myController = require('../controllers');

routes.use('/contacts', require('./contacts'))

module.exports = routes;
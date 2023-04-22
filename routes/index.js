const routes = require('express').Router();
const myController = require('../controllers');

routes.get('/', myController.firstPerson);
routes.get('/family', myController.anotherPerson);

module.exports = routes;
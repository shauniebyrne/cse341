const router = require('express').Router();
//Week 1 assignment: const myController = require('../controllers');

router.use('/contacts', require('./contacts'))

module.exports = router;
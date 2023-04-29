const router = require('express').Router();
//Week 1 assignment: const myController = require('../controllers');

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
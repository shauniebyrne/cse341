const router = require('express').Router();
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAllData);
router.get('/:id', contactsController.getSingleData);

module.exports = router;
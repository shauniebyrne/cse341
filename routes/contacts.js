const router = require('express').Router();
const contactsController = require('../controllers/contacts');

//Read (Get) records from database
router.get('/', contactsController.getAllData);
router.get('/:id', contactsController.getSingleData);

//Create (POST) a new contact
router.post('/', contactsController.createContact);

//Update (PUT) an old contact
router.put('/:id', contactsController.updateContact);

//Delete (DELETE) a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
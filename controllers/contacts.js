const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//Read (GET) all contacts in database
const getAllData = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

//Read (GET) one contact (based off Id) in database
const getSingleData = async (req, res, next) => {
    const UserId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .find({ _id: UserId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

//Create (POST) a new contact
const createContact = async (req, res, next) => {
    //New Contact Info
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };
    //Connect to database
    const resultBack = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .insertOne(newContact);
    if(resultBack.acknowledged) {
        res.status(201).json(resultBack);
    } else {
        res.status(500).json(resultBack.error || 'Sorry. Contact was not created.');
    }
};

//Update (PUT) an old contact
const updateContact = async (req, res, next) => {
    const UserId = new ObjectId(req.params.id);
    const updatedInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favColor: req.body.favColor,
        birthday: req.body.birthday
    };
    const resultBack = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .replaceOne({ _id: UserId}, updatedInfo);
    console.log(resultBack.nModified + 'document(s) were updated');
    if(resultBack.nModified > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(resultBack.error || 'Sorry. New information could not be updated.');
    }    
};

//Delete (DELETE) a contact
const deleteContact = async (req, res, next) => {
    const UserId = new ObjectId(req.params.id);
    const resultBack = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
        .deleteOne({ _id: UserId}, true);
    console.log(resultBack.deletedCount + 'document(s) were deleted.');
    if(resultBack.deleteCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(resultBack.error || 'Sorry. Information was not deleted.');
    }
    
};

module.exports = { getAllData, getSingleData, createContact, updateContact, deleteContact};
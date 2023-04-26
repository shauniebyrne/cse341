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
    const result = await mongodb
        .getDb()
        .db('cse341')
        .collection('contacts')
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

//Update (PUT) an old contact
const updateContact = async (req, res, next) => {

};

//Delete (DELETE) a contact
const deleteContact = async (req, res, next) => {

};

module.exports = { getAllData, getSingleData, createContact, updateContact, deleteContact};
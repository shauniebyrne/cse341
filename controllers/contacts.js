const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllData = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingleData = async (req, res, next) => {
    const UserId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({ _id: UserId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = { getAllData, getSingleData};
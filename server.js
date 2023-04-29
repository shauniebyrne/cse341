const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 4518;
//const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
        );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    })
    .use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on port ${port}`);
    }
});
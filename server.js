const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
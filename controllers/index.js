const firstPerson = (req, res, next) => {
    res.send('Shauntal Byrne');
};

const anotherPerson = (req, res, next) => {
    res.send('Jared Byrne');
};

module.exports = {firstPerson, anotherPerson};
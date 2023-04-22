const firstPerson = (req, res, next) => {
    res.json('Shauntal Byrne');
};

const anotherPerson = (req, res, next) => {
    res.json('Jared Byrne');
};

module.exports = {firstPerson, anotherPerson};
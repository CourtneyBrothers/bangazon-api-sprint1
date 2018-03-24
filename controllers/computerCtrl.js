'use strict';

const { getAll, getOne, postOneLive, postOneDead } = require('../models/Computer');

// GET
module.exports.getAllComputers = (req, res, next) => {
    getAll()
    .then(computers => {
        res.status(200).json(computers);
    })
    .catch(err => next(err));
};

module.exports.getOneComputer = ({ params: { id} }, res, next) => {
    getOne(id)
    .then(computer => {
        if (computer) {
            res.status(200).json(computer);
        } else {
            let error = new Error("Computer not found in database")
            next(error)
        }
    })
    .catch(err => next(err));
};

// POST
module.exports.postOneLiveComputer = (req, res, next) => {
    postOneLive(req.body)
    .then(computer => {
        res.status(200).json(computer)
    })
    .catch(err => next(err));
};

module.exports.postOneDeadComputer = (req, res, next) => {
    postOneDead(req.body)
    .then(computer => {
        res.status(200).json(computer)
    })
    .catch(err => next(err));
}


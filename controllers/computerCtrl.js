'use strict';

const { getAll, getOne, postOneLive, postOneDead, putOne } = require('../models/Computer');

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

// POST LIVE
module.exports.postOneLiveComputer = (req, res, next) => {
    postOneLive(req.body)
    .then(computer => {
        res.status(200).json(computer)
    })
    .catch(err => next(err));
};

// POST DEAD
module.exports.postOneDeadComputer = (req, res, next) => {
    postOneDead(req.body)
    .then(computer => {
        res.status(200).json(computer)
    })
    .catch(err => next(err));
};

// PUT
module.exports.putOneComputer = (req, res, next) => {
    putOne(req.params, req.body)
    .then(computer => {
        res.status(200).json(computer)
    })
    .catch(err => next(err));
}

// DELETE
module.exports.deleteOneComputer = (req, res, next) => {
    getOne(req.params.id)
    .then(computers => {
        let error = new Error("You cannot delete a computer from the system. Please use the PUT method to add a decommission date.")
        error.status = 405;
        next(error);
    })
}
'use strict';

const { getAll, getOne, postOne, putOne } = require('../models/Computer');

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
module.exports.postOneComputer = (req, res, next) => {
    postOne(req.body)
    .then(computer => {
        res.status(200).json(computer)
    })
    .catch(err => next(err));
};

// PUT
module.exports.putOneComputer = (req, res, next) => {
    getOne(req.params.id)
    .then(computer => {
        if (computers.decommission_date === null) {
            putOne(req.params, req.body)
            .then(deadComputer => {
                res.status(200).json(deadComputer)
            })
            .catch(err => next(err));
        } else {
            let error = new Error("This computer has already been decommissioned")
            error.status = 409;
            next(error);
        }
    })
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
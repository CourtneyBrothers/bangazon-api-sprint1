"use strict";

const { getAll, getOne, postOne, deleteOne } = require("../models/Order");

// GET
module.exports.getAllOrders = (req, res, next) => {
  getAll()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};

module.exports.getOneOrder = ( { params: { id } }, res, next) => {
    getOne(id)
    .then(order => {
        if (order) {
            res.status(200).json(order);
        } else {
            let error = new Error("Order not found")
            next(error)
        }
    })
    .catch(err => next(err));  
};

// POST
module.exports.postOneOrder = (req, res, next) => {
    postOne(req.body)
    .then(order => {
        res.status(200).json(order)
    })
    .catch(err => next(err));
}

// DELETE
module.exports.deleteOneOrder = (req, res, next) => {
    deleteOne(req.body)
    .then(order => {
        res.status(200).json(order)
    })
    .catch(err => next(err));
};


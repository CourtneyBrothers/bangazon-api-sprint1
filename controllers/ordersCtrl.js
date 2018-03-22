"use strict";

const { getAll, getOne } = require("../models/Order");

module.exports.getAllOrders = (req, res, next) => {
  getAll()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};

module.exports.getOneOrder = ({ params: { id } }, res, next) => {
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

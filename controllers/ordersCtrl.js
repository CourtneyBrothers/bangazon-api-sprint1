"use strict";

const { getAll, getOne } = require("../models/Order");

module.exports.getAllOrders = (req, res, next) => {
  getAll()
    .then(orders => {
      res.status(200).json(orders);
    })
    .catch(err => next(err));
};

module.exports.getOneOrder = id => {
    getOne(id)
    .then(order => {
        res.status(200).json(order);
    })
    .catch(err => next(err));
};

"use strict";
const { getAll, getOne, postOne, putOne } = require('../models/Customer');

module.exports.getAllCustomers = (req, res, next) => {
  getAll()
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
};

module.exports.getOneCustomer = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}

module.exports.postOneCustomer = (req, res, next) => {
  postOne(req.body)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}

module.exports.putOneCustomer = (req, res, next) => {
  putOne(req.params, req.body)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}
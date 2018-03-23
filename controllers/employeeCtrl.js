"use strict";
const { getAll, getOne, postOne, putOne } = require('../models/Employee');

module.exports.getAllEmployees = (req, res, next) => {
  getAll()
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
};

module.exports.getOneEmployee = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}

module.exports.postOneEmployee = (req, res, next) => {
  postOne(req.body)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}

module.exports.putOneEmployee = (req, res, next) => {
  console.log("params body request id",req.params, req.body);
  putOne(req.params, req.body)
  .then( (cust) => {
    res.status(200).json(cust);
  })
  .catch( (err) => next(err));
}
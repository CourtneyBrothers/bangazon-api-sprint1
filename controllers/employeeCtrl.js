"use strict";
const { getAll, getOne, postOne, putOne } = require('../models/Employee');

module.exports.getAllEmployees = (req, res, next) => {
  getAll()
  .then( (emp) => {
    res.status(200).json(emp);
  })
  .catch( (err) => next(err));
};

module.exports.getOneEmployee = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (emp) => {
    res.status(200).json(emp);
  })
  .catch( (err) => next(err));
}

module.exports.postOneEmployee = (req, res, next) => {
  postOne(req.body)
  .then( (emp) => {
    res.status(200).json(emp);
  })
  .catch( (err) => next(err));
}

module.exports.putOneEmployee = (req, res, next) => {
  console.log("params body request id",req.params, req.body);
  putOne(req.params, req.body)
  .then( (emp) => {
    res.status(200).json(emp);
  })
  .catch( (err) => next(err));
}
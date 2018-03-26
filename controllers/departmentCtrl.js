"use strict";
const { getAll, getOne, postOne, putOne } = require('../models/Department');

module.exports.getAllDepartments = (req, res, next) => {
  getAll()
  .then( (dept) => {
    res.status(200).json(dept);
  })
  .catch( (err) => next(err));
};

module.exports.getOneDepartment = ({params: {id}}, res, next) => {
  getOne(id)
  .then( (dept) => {
    res.status(200).json(dept);
  })
  .catch( (err) => next(err));
}

module.exports.postOneDepartment = (req, res, next) => {
  postOne(req.body)
  .then( (dept) => {
    res.status(200).json(dept);
  })
  .catch( (err) => next(err));
}

module.exports.putOneDepartment = (req, res, next) => {
  console.log("params body request id",req.params, req.body);
  putOne(req.params, req.body)
  .then( (dept) => {
    res.status(200).json(dept);
  })
  .catch( (err) => next(err));
}
const { getAll, getOne, postOne, putOne, deleteOne } = require('../models/Payment_type');

module.exports.getAllPaymentTypes = (req, res, next) => {
    getAll()
    .then( (paymentTypes) => {
        res.status(200).json(paymentTypes);
    })
    .catch( (err) => next(err));
};

module.exports.getOnePaymentType = (req, res, next) => {
    let paymentId = req.params.id;
    getOne(paymentId)
    .then( (paymentType) => {
        res.status(200).json(paymentType);
    })
    .catch( (err) => next(err));
};

module.exports.postOnePaymentType = (req, res, next) => {
    console.log('req.body', req.body);
    postOne(req.body)
    .then( (paymentType) => {
        res.status(200).json(paymentType)
    })
    .catch( (err) => next(err));
}

module.exports.putOnePaymentType = (req, res, next) => {
    putOne(req.body)
    .then( (paymentType) => {
        res.status(200).json(paymentType)
    })
    .catch( (err) => next(err));
}

module.exports.deleteOnePaymentType = (req, res, next) => {
    // res.error = "You are unable to delete this data";
    // next(res.error);
    deleteOne(req.body)
    .then( (paymentType) => {
        res.status(200).json(paymentType)
    })
    .catch( (err) => next(err));
}
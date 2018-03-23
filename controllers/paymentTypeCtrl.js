const { getAll, getOne, postOne, putOne } = require('../models/Payment_type');

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
    let error = new Error("You are not authorized to delete an existing payment type");
    error.status = 405;
    next(error);
}
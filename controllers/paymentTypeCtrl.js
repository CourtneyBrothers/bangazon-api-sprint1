const { getAllPaymentTypes, getOnePaymentType } = require('../models/Payment_type');

module.exports.getAllPaymentTypes = (req, res, next) => {
    getAllPaymentTypes()
    .then( (paymentTypes) => {
        res.status(200).json(paymentTypes);
    })
    .catch( (err) => next(err));
};

module.exports.getOnePaymentType = (req, res, next) => {
    getOnePaymentType()
    .then( (paymentType) => {
        res.status(200).json(paymentType);
    })
    .catch( (err) => next(err));
};
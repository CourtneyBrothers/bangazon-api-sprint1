
const { getAll, getOne } = require("../models/Product_Type");


module.exports.getProductTypes = (req, res, next) => {
    getAll()
    .then( (prodTypes) => {
        res.status(200).json(prodTypes);
    })
    .catch( (err) => next(err));
};
module.exports.getOneProductType = (req, res, next) => {
    getOne(req.params.id)
    .then( (prodType) => {
        res.status(200).json(prodType);
    })
    .catch( (err) => next(err));
};
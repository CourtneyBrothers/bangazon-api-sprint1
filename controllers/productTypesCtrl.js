
const { getAll, getOne, postOne } = require("../models/Product_Type");


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
module.exports.postOneProductType = (req, res, next) => {
    console.log(req.body);
    postOne(req.body)
    .then( (prodType) => {
        res.status(200).json(prodType);
    })
    .catch( (err) => next(err));
}
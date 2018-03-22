
const { getAll } = require("../models/Product_Type");


module.exports.getProductTypes = (req, res, next) => {
    getAll()
    .then( (direx) => {
        res.status(200).json(direx);
    })
    .catch( (err) => next(err));
};
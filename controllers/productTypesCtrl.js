
const { getAll, getOne, postOne, putOne, deleteOne, getProducts } = require("../models/Product_Type");


module.exports.getAllProductTypes = (req, res, next) => {
    getAll()
        .then((prodTypes) => {
            res.status(200).json(prodTypes);
        })
        .catch((err) => next(err));
};

module.exports.getOneProductType = (req, res, next) => {
    getOne(req.params.id)
        .then((prodType) => {
            res.status(200).json(prodType);
        })
        .catch((err) => next(err));
};

module.exports.postOneProductType = (req, res, next) => {
    postOne(req.body)
        .then((prodType) => {
            res.status(200).json(prodType);
        })
        .catch((err) => next(err));
};

module.exports.putOneProductType = (req, res, next) => {
    putOne(req.body)
        .then((prodType) => {
            res.status(200).json(prodType);
        })
        .catch((err) => next(err));
};

//Function to delete a product type. It first gets all products with the product type id that is being queried. If no such products exist and the array is empty, the product type will be deleted from the table, else an error is sent.
module.exports.deleteOneProductType = (req, res, next) => {
    getProducts(req.params.id)
        .then((products) => {
            if (!products.length) {
                deleteOne(req.params.id)
                    .then((product_type) => {
                        res.status(200).json(product_type);
                    })
            } else {
                let error = new Error("A Product Type may not be deleted if any Products using the Product Type's ID exist.");
                error.status = 405;
                next(error);
            }
        })

};


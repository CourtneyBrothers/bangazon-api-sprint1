'use strict';

const { getAll, getOne, postOne, putOne, deleteOne, productOnOrders } = require('../models/Product');

// calls for all rows on products table and returns JSON of fetched data
module.exports.getAllProducts = (req, res, next) => {
    getAll()
        .then(products => res.status(200).json(products))
        .catch(err => next(err));
};

// calls for specified row match product_id on product table and returns JSON of fetched data
module.exports.getOneProduct = (req, res, next) => {
    getOne(req.params.id)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
}

// calls for new row to be inserted into product table with implemented JSON data 
module.exports.postProduct = (req, res, next) => {
    postOne(req.body)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
}

// calls for row specified by product_id to be updated on product table with implemented JSON data 
module.exports.putProduct = (req, res, next) => {
    putOne(req.params.id, req.body)
        .then(product => res.status(200).json(product))
        .catch(err => next(err));
}

// fetches all rows on order_products that have a matching product_id
// then, if it returns no data matching that product id, deletes row from product table specified by product_id
// else, if product_id exists in compelted order, throws error that product may not be deleted
module.exports.deleteProduct = (req, res, next) => {
    productOnOrders(req.params.id)
        .then(products=>{
            if (!products.length){
                deleteOne(req.params.id)
                    .then(product => res.status(200).json(product))
                    .catch(err => next(err));;
            } else {
                let error = new Error("This product can not be deleted");
                error.status = 405;
                console.log(error);
                next(error);
            }
    });
}



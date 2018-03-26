"use strict";

const { getAll, getOne, postOne, putOne, deleteOne, getProductsInOrder } = require("../models/Order");
const productModel = require('../models/Product');
// GET

module.exports.getAllOrders = (req, res, next) => {
    getAll()
    .then(orders => {
        let ordersArray = [];
        orders.forEach(order => {
            let productArray = [];
            getProductsInOrder(order.order_id)
            .then(prods => {
                prods.forEach(prodId => {
                    productModel.getOne(prodId)
                    .then(productInfo => {
                        productArray.push(productInfo); 
                    })
                    order.products = productArray;
                })
            })
            ordersArray.push(order);
        });
        setTimeout(function(){
            res.status(200).json(ordersArray);
        },
    100);
    })
    .catch(err => next(err));
};

module.exports.getOneOrder = ( { params: { id } }, res, next) => {
    getOne(id)
    .then(order => {
        if (order) {
            res.status(200).json(order);
        } else {
            let error = new Error("Order not found")
            next(error)
        }
    })
    .catch(err => next(err));  
};

// POST
module.exports.postOneOrder = (req, res, next) => {
    postOne(req.body)
    .then(order => {
        res.status(200).json(order)
    })
    .catch(err => next(err));
}

// PUT
module.exports.putOneOrder = (req, res, next) => {
    putOne(req.params, req.body)
    .then(order => {
        res.status(200).json(order)
    })
    .catch(err => next(err));
}

// DELETE
module.exports.deleteOneOrder = (req, res, next) => {
    getOne(req.params.id)
    .then(orders => {
        if (orders.payment_type === null) {
            deleteOne(req.params.id)
            .then(order => {
                res.status(200).json(order)
            })
            .catch(err => next(err));
        } else {
            let error = new Error("You cannot delete an order that has been completed")
            error.status = 405;
            next(error)
        }
    })
}
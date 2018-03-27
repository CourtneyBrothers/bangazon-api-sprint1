"use strict";

const { getAll, getOne, postOne, putOne, deleteOne, getProductsInOrder, getByCustomer } = require("../models/Order");
const productModel = require('../models/Product');
// GET


//gets all orders, then querys our join table referencing the order id, then querys products based on the product id received from the join table. The product data is then added to the appropriate Order as a property.
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
            let productArray = [];
            getProductsInOrder(id)
            .then(prods => {
                prods.forEach(prodId => {
                    productModel.getOne(prodId)
                        .then(productInfo => {
                            productArray.push(productInfo);
                        });
                        order.products = productArray;
                    });
                    setTimeout(() => {
                        res.status(200).json(order);
                    }, 100);
                });
        } else {
            let error = new Error("Order not found")
            next(error)
        }
    })
    .catch(err => next(err));  
};

// POST
module.exports.postOneOrder = (req, res, next) => {
    getByCustomer(req.body)
    .then(orders => {
        let paymentTypeArray = [];
        orders.forEach(order => {
            if (order.payment_type === null) {
                paymentTypeArray.push(order);
            }
        })
        if (!paymentTypeArray.length || req.body.payment_type !== null ){
            postOne(req.body)
            .then(newOrder => {
                res.status(200).json(newOrder);
            })
        } else {
            let error = new Error("Customers may only have one active order at a time!");
            error.status = 405;
            next(error);
        }
    })
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
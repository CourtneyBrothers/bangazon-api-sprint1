'use strict';

const { Router } = require('express');
const ordersRouter = Router();
const { getAllOrders, getOneOrder } = require('../controllers/ordersCtrl');

ordersRouter.get('/orders', getAllOrders);
ordersRouter.get('/orders/:id', getOneOrder);

module.exports = ordersRouter;
'use strict';

const { Router } = require('express');
const ordersRouter = Router();
const { getAllOrders, getOneOrder, postOneOrder, deleteOneOrder } = require('../controllers/ordersCtrl');

ordersRouter.get('/orders', getAllOrders);
ordersRouter.get('/orders/:id', getOneOrder);
ordersRouter.post('/orders/', postOneOrder);

module.exports = ordersRouter;
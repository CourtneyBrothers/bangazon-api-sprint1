'use strict';

const { Router } = require('express');
const ordersRouter = Router();
const { getAllOrders, getOneOrder, postOneOrder, putOneOrder, deleteOneOrder, getOrdersProducts } = require('../controllers/ordersCtrl');

ordersRouter.get('/orders', getAllOrders);
ordersRouter.get('/orders/:id', getOneOrder);
ordersRouter.post('/orders', postOneOrder);
ordersRouter.put('/orders/:id', putOneOrder);
ordersRouter.delete('/orders/:id', deleteOneOrder);

module.exports = ordersRouter;
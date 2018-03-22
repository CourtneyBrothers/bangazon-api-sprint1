'use strict';

const { Router } = require('express');
const ordersRouter = Router();
const { getAllOrders, getOneOrder, postOneOrder, putOneOrder, deleteOneOrder } = require('../controllers/ordersCtrl');

ordersRouter.get('/orders', getAllOrders);
ordersRouter.get('/orders/:id', getOneOrder);
ordersRouter.post('/orders/', postOneOrder);
ordersRouter.put('/orders/:id', putOneOrder);
ordersRouter.delete('/orders/', deleteOneOrder);

module.exports = ordersRouter;
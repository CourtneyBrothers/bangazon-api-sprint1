
const { Router } = require('express');
const dirRouter = Router();
const { getProductTypes } = require('../controllers/product_typesCtrl')

dirRouter.get("/product_types", getProductTypes);

module.exports = dirRouter;
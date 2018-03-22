
const { Router } = require('express');
const dirRouter = Router();
const { getProductTypes, getOneProductType } = require('../controllers/productTypesCtrl')

dirRouter.get("/product_types", getProductTypes);
dirRouter.get("/product_types/:id", getOneProductType);

module.exports = dirRouter;
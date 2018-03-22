
const { Router } = require('express');
const prodTypeRouter = Router();
const { getProductTypes, getOneProductType, postOneProductType } = require('../controllers/productTypesCtrl')

prodTypeRouter.get("/product_types", getProductTypes);
prodTypeRouter.get("/product_types/:id", getOneProductType);
prodTypeRouter.post("/product_types/post", postOneProductType);

module.exports = prodTypeRouter;

const { Router } = require('express');
const prodTypeRouter = Router();
const { getProductTypes, getOneProductType, postOneProductType, putOneProductType } = require('../controllers/productTypesCtrl')

prodTypeRouter.get("/product_types", getProductTypes);
prodTypeRouter.get("/product_types/:id", getOneProductType);
prodTypeRouter.post("/product_types", postOneProductType);
prodTypeRouter.put("/product_types", putOneProductType);

module.exports = prodTypeRouter;
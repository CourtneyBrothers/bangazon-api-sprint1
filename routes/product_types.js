
const { Router } = require('express');
const prodTypeRouter = Router();
const { getAllProductTypes, getOneProductType, postOneProductType, putOneProductType, deleteOneProductType } = require('../controllers/productTypesCtrl')

prodTypeRouter.get("/product_types", getAllProductTypes);
prodTypeRouter.get("/product_types/:id", getOneProductType);
prodTypeRouter.post("/product_types", postOneProductType);
prodTypeRouter.put("/product_types", putOneProductType);
prodTypeRouter.delete("/product_types/:id", deleteOneProductType);

module.exports = prodTypeRouter;
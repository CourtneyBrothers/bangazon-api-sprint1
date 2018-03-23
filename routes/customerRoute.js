const { Router } = require("express");
const custRouter = Router();
const { getAllCustomers, getOneCustomer, postOneCustomer, putOneCustomer } = require('../controllers/customerCtrl');




custRouter.get("/customers", getAllCustomers);
custRouter.get("/customers/:id", getOneCustomer);
custRouter.post("/customers",postOneCustomer);
custRouter.put("/customers/:id",putOneCustomer);

module.exports = custRouter;
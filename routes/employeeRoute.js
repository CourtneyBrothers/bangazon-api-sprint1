const { Router } = require("express");
const custRouter = Router();
const { getAllEmployees, getOneEmployee, postOneEmployee, putOneEmployee } = require('../controllers/employeeCtrl');




custRouter.get("/employees", getAllEmployees);
custRouter.get("/employees/:id", getOneEmployee);
custRouter.post("/employees",postOneEmployee);
custRouter.put("/employees/:id",putOneEmployee);

module.exports = custRouter;
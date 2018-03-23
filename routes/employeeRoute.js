const { Router } = require("express");
const empRouter = Router();
const { getAllEmployees, getOneEmployee, postOneEmployee, putOneEmployee } = require('../controllers/employeeCtrl');




empRouter.get("/employees", getAllEmployees);
empRouter.get("/employees/:id", getOneEmployee);
empRouter.post("/employees",postOneEmployee);
empRouter.put("/employees/:id",putOneEmployee);

module.exports = empRouter;
const { Router } = require("express");
const deptRouter = Router();
const { getAllDepartments, getOneDepartment, postOneDepartment, putOneDepartment } = require('../controllers/DepartmentCtrl');




deptRouter.get("/departments", getAllDepartments);
deptRouter.get("/departments/:id", getOneDepartment);
deptRouter.post("/departments",postOneDepartment);
deptRouter.put("/departments/:id",putOneDepartment);

module.exports = deptRouter;
const { Router } = require('express');
const router = Router();

// router.use(require('./<FILE NAME>));
router.use(require('./customerRoute'));
router.use(require('./employeeRoute'));
router.use(require('./departmentRoute'));
module.exports = router;